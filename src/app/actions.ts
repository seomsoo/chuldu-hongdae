"use server";

import { SolapiMessageService } from "solapi";

const PHONE_PATTERN = /^01[016789][0-9]{7,8}$/;
const COOLDOWN_MS = 60_000;

// 같은 번호의 연속 제출 방지 (서버리스 인스턴스 단위의 최소한의 방어)
const recentSubmits = new Map<string, number>();

export async function submitConsult(
  _prevState: { ok: boolean; error?: string } | null,
  formData: FormData
): Promise<{ ok: boolean; error?: string }> {
  // 봇 필터: 사람에겐 보이지 않는 필드가 채워져 있으면 조용히 성공 처리
  if (formData.get("company")) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").replace(/[^0-9]/g, "");
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 20) {
    return { ok: false, error: "이름을 확인해주세요." };
  }
  if (!PHONE_PATTERN.test(phone)) {
    return { ok: false, error: "휴대폰 번호를 확인해주세요." };
  }
  if (!formData.get("consent")) {
    return { ok: false, error: "개인정보 수집·이용 동의가 필요합니다." };
  }

  const lastSubmit = recentSubmits.get(phone);
  if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) {
    return { ok: true };
  }

  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const from = process.env.SOLAPI_SENDER;
  const to = process.env.SOLAPI_RECEIVER;

  if (!apiKey || !apiSecret || !from || !to) {
    console.error("SOLAPI 환경변수가 설정되지 않았습니다.");
    return {
      ok: false,
      error: "일시적인 오류가 발생했습니다. 카카오톡 또는 전화로 문의해주세요.",
    };
  }

  const text = [
    "[출두 상담신청]",
    `이름: ${name}`,
    `연락처: ${phone}`,
    service && `관심 시술: ${service}`,
    message && `문의: ${message.slice(0, 500)}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const messageService = new SolapiMessageService(apiKey, apiSecret);
    await messageService.send({ to, from, text });
    recentSubmits.set(phone, Date.now());
    return { ok: true };
  } catch (error) {
    console.error("솔라피 문자 발송 실패:", error);
    return {
      ok: false,
      error: "전송에 실패했습니다. 카카오톡 또는 전화로 문의해주세요.",
    };
  }
}
