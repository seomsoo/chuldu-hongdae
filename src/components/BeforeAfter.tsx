"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const CASES = [
  {
    key: "parting",
    label: "여성 가르마",
    caption: "여성 가르마 · 정수리 SMP",
    before: "/images/ba-parting-before-2.jpg",
    after: "/images/ba-parting-after.jpg",
  },
  {
    key: "crown",
    label: "남성 정수리",
    caption: "남성 정수리 밀도 보강 SMP",
    before: "/images/ba-man-crown-before-2.jpg",
    after: "/images/ba-man-crown-after-2.jpg",
  },
  {
    key: "hairline",
    label: "헤어라인 · 사이드",
    caption: "남성 헤어라인 · 사이드 SMP",
    before: "/images/ba-man-hairline-before-2.jpg",
    after: "/images/ba-man-hairline-after-2.jpg",
  },
] as const;

/** 돋보기 배율과 반지름(px) */
const ZOOM = 1.8;
const LENS_R = 95;

/** 화면 높이에 맞춰 사진이 한 화면에 들어오게 하는 최대 너비 */
const FRAME_MAX_W = "calc((100svh - 200px) * 16 / 9)";

const clamp = (v: number) => Math.min(100, Math.max(0, v));

export default function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const touched = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();
  const inView = useInView(frameRef, { once: true, amount: 0.6 });

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [canHover, setCanHover] = useState(false);
  const [lensOn, setLensOn] = useState(false);
  const [active, setActive] = useState(0);
  const current = CASES[active];

  // 경계선 위치(%). 왼쪽이 시술 전, 오른쪽이 시술 후.
  const pos = useMotionValue(50);
  const smooth = useSpring(pos, { stiffness: 220, damping: 34, mass: 0.6 });
  const beforeClip = useTransform(smooth, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(smooth, (v) => `${v}%`);
  const handleOpacity = useTransform(smooth, [0, 2, 98, 100], [0, 1, 1, 0]);
  const beforeLabel = useTransform(smooth, [0, 18], [0, 1]);
  const afterLabel = useTransform(smooth, [82, 100], [1, 0]);

  useMotionValueEvent(smooth, "change", (v) => {
    frameRef.current?.setAttribute("aria-valuenow", String(Math.round(v)));
  });

  // 화면에 들어오면 한 번 좌우로 흔들어서 움직일 수 있다는 걸 알려준다.
  useEffect(() => {
    if (!inView || reduceMotion || touched.current) return;
    const controls = animate(pos, [50, 70, 30, 50], {
      duration: 2.2,
      ease: "easeInOut",
      delay: 0.3,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, pos]);

  // 돋보기: 마우스가 있는 기기에서만. 커서(=경계선) 위치를 확대해서 보여준다.
  const lensX = useMotionValue(0);
  const lensY = useMotionValue(0);
  const lensLeft = useTransform(lensX, (x) => x - LENS_R);
  const lensTop = useTransform(lensY, (y) => y - LENS_R);
  const innerX = useTransform(lensX, (x) => LENS_R - x * ZOOM);
  const innerY = useTransform(lensY, (y) => LENS_R - y * ZOOM);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);

    const frame = frameRef.current;
    if (!frame) return () => mq.removeEventListener("change", update);
    const ro = new ResizeObserver(([entry]) =>
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height })
    );
    ro.observe(frame);
    return () => {
      mq.removeEventListener("change", update);
      ro.disconnect();
    };
  }, []);

  const moveDivider = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    touched.current = true;
    pos.stop();
    pos.set(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const moveLens = (clientX: number, clientY: number) => {
    lastPointer.current = { x: clientX, y: clientY };
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    lensX.set(clientX - rect.left);
    lensY.set(clientY - rect.top);
  };

  // 휠로 스크롤하면 마우스는 그대로인데 사진만 움직여서 pointermove가 안 생긴다.
  // 스크롤할 때도 마지막 커서 위치로 돋보기와 경계선을 다시 맞춘다.
  useEffect(() => {
    if (!lensOn) return;
    const onScroll = () => {
      const rect = frameRef.current?.getBoundingClientRect();
      const { x, y } = lastPointer.current;
      if (!rect) return;
      if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
        setLensOn(false);
        return;
      }
      lensX.set(x - rect.left);
      lensY.set(y - rect.top);
      pos.set(clamp(((x - rect.left) / rect.width) * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lensOn, lensX, lensY, pos]);

  const selectCase = (index: number) => {
    if (index === active) return;
    setActive(index);
    touched.current = true;
    // 사례가 바뀌었다는 걸 보여주려고 경계선을 한 번 쓸어준다.
    animate(pos, reduceMotion ? 50 : [pos.get(), 72, 32, 50], {
      duration: reduceMotion ? 0 : 1.4,
      ease: "easeInOut",
    });
  };

  const showLens = canHover && lensOn && size.w > 0;

  return (
    <section className="bg-bg-primary py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <ScrollReveal>
          <div
            className="mx-auto mb-6 flex flex-col gap-2 lg:mb-8 lg:flex-row lg:items-end lg:justify-between"
            style={{ maxWidth: FRAME_MAX_W }}
          >
            <div>
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Before / After
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
                직접 움직여서 비교해보세요
              </h2>
            </div>
            <p className="text-sm text-text-secondary lg:text-base">
              <span className="hidden lg:inline">
                마우스를 움직이면 확대해서 비교할 수 있어요
              </span>
              <span className="lg:hidden">사진을 좌우로 밀어서 비교해보세요</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            role="tablist"
            aria-label="시술 부위 선택"
            className="mx-auto mb-4 flex gap-2 overflow-x-auto [scrollbar-width:none] lg:mb-5"
            style={{ maxWidth: FRAME_MAX_W }}
          >
            {CASES.map((c, i) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => selectCase(i)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  i === active
                    ? "border-gold bg-gold font-semibold text-bg-primary"
                    : "border-white/10 text-text-secondary hover:border-gold/40 hover:text-text-primary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div
            ref={frameRef}
            role="slider"
            tabIndex={0}
            aria-label={`${current.label} 두피문신 시술 전후 비교`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={50}
            className={`relative mx-auto aspect-[4/3] w-full touch-pan-y overflow-hidden rounded-2xl border border-white/5 bg-bg-elevated outline-none select-none focus-visible:ring-2 focus-visible:ring-gold sm:aspect-video ${
              canHover ? "cursor-none" : "cursor-ew-resize"
            }`}
            style={{ maxWidth: FRAME_MAX_W }}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") {
                moveLens(e.clientX, e.clientY);
                setLensOn(true);
              }
            }}
            onPointerLeave={() => setLensOn(false)}
            onPointerMove={(e) => {
              if (e.pointerType === "mouse") {
                moveDivider(e.clientX);
                moveLens(e.clientX, e.clientY);
              } else if (dragging.current) {
                moveDivider(e.clientX);
              }
            }}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              moveDivider(e.clientX);
            }}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            onKeyDown={(e) => {
              const step = e.shiftKey ? 10 : 4;
              if (e.key === "ArrowLeft") pos.set(clamp(pos.get() - step));
              else if (e.key === "ArrowRight") pos.set(clamp(pos.get() + step));
              else return;
              touched.current = true;
              e.preventDefault();
            }}
          >
            {CASES.map((c, i) => (
              // 섹션이 보이면 다른 사례 사진도 미리 받아둬서 탭 전환 때 빈 화면이 안 보이게 한다.
              <div
                key={c.key}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== active}
              >
                <Image
                  src={c.after}
                  alt={`${c.label} 두피문신 SMP 시술 후`}
                  fill
                  draggable={false}
                  loading={inView ? "eager" : "lazy"}
                  className="pointer-events-none object-cover"
                  sizes="(max-width: 1152px) 100vw, 1088px"
                />
                <motion.div className="absolute inset-0" style={{ clipPath: beforeClip }}>
                  <Image
                    src={c.before}
                    alt={`${c.label} 탈모 두피문신 시술 전`}
                    fill
                    draggable={false}
                    loading={inView ? "eager" : "lazy"}
                    className="pointer-events-none object-cover"
                    sizes="(max-width: 1152px) 100vw, 1088px"
                  />
                </motion.div>
              </div>
            ))}

            <motion.span
              className="pointer-events-none absolute top-4 left-4 rounded-full bg-bg-primary/60 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-text-primary backdrop-blur-md lg:top-6 lg:left-6"
              style={{ opacity: beforeLabel }}
            >
              BEFORE
            </motion.span>
            <motion.span
              className="pointer-events-none absolute top-4 right-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-bg-primary lg:top-6 lg:right-6"
              style={{ opacity: afterLabel }}
            >
              AFTER
            </motion.span>

            {/* 경계선 + 손잡이 */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-white/80"
              style={{ left: handleLeft, opacity: handleOpacity }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-bg-primary/50 text-text-primary shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md lg:h-14 lg:w-14">
                <ChevronLeft size={16} className="-mr-1" />
                <ChevronRight size={16} className="-ml-1" />
              </span>
            </motion.div>

            {/* 돋보기: 같은 화면을 확대해서 원 안에 보여준다. 경계선도 그대로 따라간다. */}
            <motion.div
              className="pointer-events-none absolute z-20 overflow-hidden rounded-full border-2 border-gold/80 bg-bg-elevated shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
              style={{
                width: LENS_R * 2,
                height: LENS_R * 2,
                left: lensLeft,
                top: lensTop,
              }}
              initial={false}
              animate={{ opacity: showLens ? 1 : 0, scale: showLens ? 1 : 0.6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            >
              {canHover && size.w > 0 && (
                <motion.div
                  className="absolute top-0 left-0 origin-top-left"
                  style={{
                    width: size.w,
                    height: size.h,
                    x: innerX,
                    y: innerY,
                    scale: ZOOM,
                  }}
                >
                  <Image
                    key={current.after}
                    src={current.after}
                    alt=""
                    fill
                    draggable={false}
                    className="object-cover"
                    sizes="1920px"
                  />
                  <motion.div className="absolute inset-0" style={{ clipPath: beforeClip }}>
                    <Image
                      key={current.before}
                      src={current.before}
                      alt=""
                      fill
                      draggable={false}
                      className="object-cover"
                      sizes="1920px"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-y-0 w-px -translate-x-1/2 bg-white/80"
                    style={{ left: handleLeft, opacity: handleOpacity }}
                  />
                </motion.div>
              )}
            </motion.div>

            <span className="pointer-events-none absolute bottom-4 left-4 text-xs text-text-primary/80 lg:bottom-6 lg:left-6 lg:text-sm">
              {current.caption}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
