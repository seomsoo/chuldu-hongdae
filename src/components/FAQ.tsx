"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Plus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { FAQS } from "@/lib/faq";

/** "**강조**" 표시를 골드 굵은 글씨로 바꾼다. */
function renderText(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-text-primary">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 lg:mb-14">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
              자주 묻는 질문
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="border-t border-white/10">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              return (
                <li key={item.q} className="border-b border-white/10">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center gap-4 py-5 text-left lg:py-6"
                    >
                      <span className="w-6 shrink-0 text-sm font-semibold text-gold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 text-base font-semibold transition-colors lg:text-lg ${
                          isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {item.q}
                      </span>
                      <Plus
                        size={20}
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-gold" : "text-text-muted"
                        }`}
                      />
                    </button>
                  </h3>

                  {/* 검색엔진이 답변을 읽을 수 있도록 닫혀 있어도 DOM에는 남겨두고 높이만 접는다. */}
                  <motion.div
                    id={panelId}
                    initial={false}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pb-6 pl-10 text-sm leading-relaxed text-text-secondary lg:text-base">
                      {item.a.map((p) => (
                        <p key={p}>{renderText(p)}</p>
                      ))}
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-bg-elevated p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div>
              <p className="font-semibold text-text-primary lg:text-lg">
                더 궁금한 점이 있으시다면?
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                카카오채널로 연락주시면 빠르고 친절하게 안내드릴게요.
              </p>
            </div>
            <a
              href="http://pf.kakao.com/_kxinQG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-gold-hover"
            >
              <MessageCircle size={18} />
              카카오톡 문의
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
