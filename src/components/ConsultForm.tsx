"use client";

import { useActionState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { submitConsult } from "@/app/actions";

const SERVICES = [
  "M자 이마",
  "정수리 숱 보강",
  "헤어라인 교정",
  "흉터 커버",
  "무모증",
  "기타 / 상담 후 결정",
];

const inputClass =
  "w-full rounded-sm border border-white/10 bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-gold/60";

export default function ConsultForm() {
  const [state, formAction, pending] = useActionState(submitConsult, null);

  if (state?.ok) {
    return (
      <div className="flex w-full max-w-lg flex-col items-center gap-3 rounded-sm border border-gold/30 bg-bg-elevated px-6 py-12 text-center">
        <CheckCircle2 size={40} className="text-gold" />
        <p className="text-lg font-semibold">상담 신청이 접수되었습니다</p>
        <p className="text-sm leading-relaxed text-text-secondary">
          확인 후 빠르게 연락드리겠습니다.
          <br />
          급하신 경우 카카오톡 또는 전화로 문의해주세요.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="w-full max-w-lg rounded-sm border border-white/5 bg-bg-elevated p-5 text-left sm:p-7"
    >
      <p className="text-base font-semibold">상담 신청 남기기</p>
      <p className="mt-1 text-xs text-text-secondary">
        연락처를 남겨주시면 확인 후 바로 연락드립니다.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          maxLength={20}
          placeholder="이름"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          required
          inputMode="numeric"
          placeholder="연락처 (010-1234-5678)"
          className={inputClass}
        />
      </div>

      <select name="service" defaultValue="" className={`${inputClass} mt-3 appearance-none`}>
        <option value="" disabled>
          관심 시술 선택 (선택사항)
        </option>
        {SERVICES.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={3}
        maxLength={500}
        placeholder="문의 내용 (선택사항)"
        className={`${inputClass} mt-3 resize-none`}
      />

      {/* 봇 필터용 — 화면에 표시되지 않음 */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-text-secondary">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A96E]"
        />
        <span>
          개인정보 수집·이용에 동의합니다. (이름, 연락처 / 상담 목적으로만 사용
          후 파기)
        </span>
      </label>

      {state?.error && (
        <p className="mt-3 text-sm text-red-400">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-base font-semibold text-bg-primary transition-all hover:bg-gold-hover hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(201,169,110,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {pending ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
