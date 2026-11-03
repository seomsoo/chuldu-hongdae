"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ScrollReveal from "./ui/ScrollReveal";

// TODO(원장 확인): 다른 시술 관련 수치는 일반적인 기준으로 작성한 초안이다.
const OPTIONS = ["SMP", "모발이식", "탈모약", "흑채"] as const;
type Option = (typeof OPTIONS)[number];

const ROWS: { label: string; values: Record<Option, string> }[] = [
  {
    label: "방식",
    values: {
      SMP: "모낭 크기의 점으로\n밀도를 표현",
      모발이식: "뒷머리 모낭을\n옮겨 심는 수술",
      탈모약: "약으로\n탈모 진행을 늦춤",
      흑채: "가루를 뿌려\n빈 곳을 가림",
    },
  },
  {
    label: "결과가 보이는 시점",
    values: {
      SMP: "시술 당일",
      모발이식: "6~12개월 후",
      탈모약: "3~6개월 이상\n복용 후",
      흑채: "바로\n(씻으면 사라짐)",
    },
  },
  {
    label: "회복 기간",
    values: {
      SMP: "당일 일상생활 가능",
      모발이식: "1~2주 붓기·딱지",
      탈모약: "없음",
      흑채: "없음",
    },
  },
  {
    label: "수술 여부",
    values: {
      SMP: "비수술",
      모발이식: "수술",
      탈모약: "비수술",
      흑채: "비수술",
    },
  },
  {
    label: "유지 방법",
    values: {
      SMP: "옅어지면 리터치",
      모발이식: "기존 모발은\n계속 관리 필요",
      탈모약: "끊으면\n효과가 줄어듦",
      흑채: "매일 사용",
    },
  },
  {
    label: "잘 맞는 경우",
    values: {
      SMP: "밀도 보강 · 헤어라인\n흉터 커버",
      모발이식: "모발 볼륨 자체가\n필요할 때",
      탈모약: "탈모 초기,\n진행을 늦출 때",
      흑채: "외출 전\n잠깐 가릴 때",
    },
  },
];

const RIVALS = OPTIONS.filter((o) => o !== "SMP");

export default function Compare() {
  const [rival, setRival] = useState<Option>("모발이식");

  return (
    <section id="compare" className="bg-bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 grid gap-4 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Compare
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
                모발이식, 탈모약, 흑채와
                <br className="sm:hidden" /> 무엇이 다를까요
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-pretty text-text-secondary lg:text-right">
              SMP는 머리카락을 자라게 하는 시술이 아니에요.
              <br className="hidden sm:block" /> 대신 수술 없이 당일부터 달라
              보이게 해요.
              <br className="hidden sm:block" /> 탈모약과 함께 하셔도 괜찮아요.
            </p>
          </div>
        </ScrollReveal>

        {/* 데스크톱: 4열 비교 */}
        <ScrollReveal delay={0.1} className="hidden lg:block">
          <div className="relative">
            {/* SMP 열 강조 배경 */}
            <div className="pointer-events-none absolute inset-y-0 left-[22%] w-[19.5%] rounded-2xl border border-gold/30 bg-bg-elevated" />
            <table className="relative w-full table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[22%]" />
                <col className="w-[19.5%]" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th className="pb-6" />
                  {OPTIONS.map((o) => (
                    <th
                      key={o}
                      scope="col"
                      className={`px-6 pt-7 pb-6 align-bottom ${
                        o === "SMP" ? "text-gold" : "text-text-secondary"
                      }`}
                    >
                      <span
                        className={
                          o === "SMP"
                            ? "text-3xl tracking-[0.08em]"
                            : "text-lg font-semibold"
                        }
                        style={
                          o === "SMP"
                            ? { fontFamily: "var(--font-display)" }
                            : undefined
                        }
                      >
                        {o}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-t border-white/10">
                    <th
                      scope="row"
                      className="py-5 pr-6 text-sm font-medium text-text-muted"
                    >
                      {row.label}
                    </th>
                    {OPTIONS.map((o) => (
                      <td
                        key={o}
                        className={`px-6 py-5 text-[15px] leading-snug whitespace-pre-line ${
                          o === "SMP"
                            ? "font-semibold text-text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        {row.values[o]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* 모바일: SMP와 하나씩 비교 */}
        <ScrollReveal delay={0.1} className="lg:hidden">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="text-2xl tracking-[0.08em] text-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SMP
            </span>
            <span className="text-xs text-text-muted">vs</span>
            <div className="flex flex-1 gap-1.5 overflow-x-auto [scrollbar-width:none]">
              {RIVALS.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setRival(o)}
                  aria-pressed={rival === o}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    rival === o
                      ? "border-text-primary bg-text-primary font-semibold text-bg-primary"
                      : "border-white/15 text-text-secondary"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <dl className="border-t border-white/10">
            {ROWS.map((row) => (
              <div key={row.label} className="border-b border-white/10 py-4">
                <dt className="mb-2.5 text-xs text-text-muted">{row.label}</dt>
                <dd className="grid grid-cols-2 gap-4 text-sm leading-snug whitespace-pre-line">
                  <span className="font-semibold text-text-primary">
                    {row.values.SMP}
                  </span>
                  <span className="relative overflow-hidden text-text-secondary">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={rival}
                        className="block"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                      >
                        {row.values[rival]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
