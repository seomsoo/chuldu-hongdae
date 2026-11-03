"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** 처음 로드될 때 글자가 마스크 아래에서 밀려 올라오는 효과 */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** 단어가 위로 빠지고 아래에서 다음 단어가 올라오는 마스크 전환 */
function MaskSwitch({
  items,
  interval = 3200,
  delay = 0,
}: {
  items: { key: string; node: ReactNode }[];
  interval?: number;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(
        () => setIndex((prev) => (prev + 1) % items.length),
        interval
      );
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [items.length, interval, delay]);

  const current = items[index];

  return (
    <span className="relative inline-grid overflow-hidden" aria-hidden>
      {items.map((item) => (
        <span key={item.key} className="invisible col-start-1 row-start-1">
          {item.node}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={current.key}
          className="col-start-1 row-start-1"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {current.node}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // 데스크톱은 히어로가 150vh라 화면에 고정된 채로 스크롤되고,
  // 그동안 꽉 찬 사진이 카드 모양으로 줄어든다.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.34],
    ["inset(0% 0% 0% 0% round 0px)", "inset(9% 7% 9% 7% round 28px)"]
  );
  const photoScale = useTransform(scrollYProgress, [0, 0.34], [1.06, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.34], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.1]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] bg-bg-primary lg:h-[150vh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* 사진: 모바일은 풀블리드 배경, 데스크톱은 오른쪽을 꽉 채움 */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[54svh] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[54%]"
          style={reduceMotion ? undefined : { clipPath }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { scale: photoScale }}
          >
            <Image
              src="/images/hero-portrait.jpg"
              alt="출두 홍대 두피문신 SMP 전문 정문찬 원장"
              fill
              preload
              className="object-cover object-[50%_15%]"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 via-30% to-transparent lg:bg-gradient-to-r lg:from-bg-primary lg:via-bg-primary/25 lg:via-35% lg:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-bg-primary/90 to-transparent lg:block" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 pb-24 pt-24 lg:px-8 lg:pb-10 lg:pt-28"
          style={
            reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
          }
        >
          {/* 상단 메타 정보 줄 */}
          <motion.div
            className="hidden justify-between text-[10px] tracking-[0.3em] text-text-secondary uppercase sm:flex lg:text-[11px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span>Hongdae, Seoul</span>
            <span className="hidden lg:inline">
              Scalp Micropigmentation Studio
            </span>
            <span>Since 2022</span>
          </motion.div>

          <div className="flex-1" />

          <h1 className="text-xs font-medium tracking-[0.25em] text-gold lg:text-sm">
            <Reveal delay={0.25}>홍대 두피문신 SMP 전문</Reveal>
          </h1>

          <p className="sr-only">CHULDU 출두 · MUNCHAN 원장 정문찬</p>

          <Reveal delay={0.35} className="mt-2 lg:mt-3">
            <span className="block text-[23vw] leading-[0.86] text-text-primary sm:text-[24vw] lg:text-[15vw] xl:text-[13.5rem]">
              <MaskSwitch
                delay={1800}
                items={[
                  {
                    key: "en",
                    node: (
                      <span
                        className="block tracking-[0.02em]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        CHULDU
                      </span>
                    ),
                  },
                  {
                    key: "ko",
                    node: (
                      <span className="block font-black tracking-[-0.06em]">
                        출두
                      </span>
                    ),
                  },
                ]}
              />
            </span>
          </Reveal>

          <Reveal delay={0.5} className="mt-1 lg:mt-2">
            <span className="block text-lg font-bold tracking-[0.12em] text-gold sm:text-2xl lg:text-3xl">
              <MaskSwitch
                delay={2100}
                items={[
                  { key: "en", node: <span className="block">MUNCHAN</span> },
                  {
                    key: "ko",
                    node: <span className="block">원장 정문찬</span>,
                  },
                ]}
              />
            </span>
          </Reveal>

          {/* 하단 정보 줄 */}
          <motion.div
            className="mt-7 grid gap-6 border-t border-white/10 pt-6 lg:mt-10 lg:grid-cols-[1.2fr_1fr_auto] lg:items-end lg:gap-10 lg:pt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.75 }}
          >
            <p className="text-lg leading-snug text-text-secondary sm:text-xl lg:text-2xl">
              당신의 영원한 멋,
              <br />
              <span className="text-text-primary">
                <span className="font-bold text-gold">젊음</span>을
                책임져드립니다
              </span>
            </p>

            <dl className="hidden gap-10 lg:flex">
              <div>
                <dt className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
                  Procedures
                </dt>
                <dd className="mt-1 text-2xl font-bold text-text-primary">
                  3,000<span className="text-gold">+</span>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.2em] text-text-muted uppercase">
                  Certified
                </dt>
                <dd className="mt-1 text-2xl font-bold text-text-primary">
                  SMP 심사위원
                </dd>
              </div>
            </dl>

            <div className="flex items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pr-2 pl-6 text-sm font-semibold text-bg-primary transition-colors hover:bg-gold-hover lg:text-base"
              >
                무료 상담 예약
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-primary text-gold transition-transform duration-300 group-hover:rotate-45 lg:h-10 lg:w-10">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <a
                href="#gallery"
                className="relative text-sm text-text-secondary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-text-primary hover:after:origin-left hover:after:scale-x-100"
              >
                시술 사례 보기
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
