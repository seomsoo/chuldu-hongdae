"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import CountUp from "./ui/CountUp";

const IMAGE_BADGES = [
  {
    label: "SMP 심사위원",
    description: "K-ART SMP 대회 공식 심사위원",
    alt: "출두 정문찬 원장 K-ART SMP 두피문신 대회 심사위원 활동",
    image: "/images/k-art.jpg",
  },
  {
    label: "SMP 심사위원",
    description: "킹오브더매치 SMP 경연대회 심사위원 위촉",
    alt: "정문찬 킹오브더매치 SMP 두피문신 경연대회 심사위원 위촉장",
    image: "/images/kingofthematch.jpg",
  },
  {
    label: "SMP 운영위원",
    description: "IBS SMP 협회 운영위원 위촉",
    alt: "출두 정문찬 IBS SMP 두피문신 협회 운영위원 위촉장",
    image: "/images/ibs.jpg",
  },
];

const NUMBER_BADGES = [
  {
    label: "시술 건수",
    value: 3000,
    suffix: "+",
  },
  {
    label: "경력",
    value: 4,
    suffix: "년",
  },
];

export default function TrustBadges() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {IMAGE_BADGES.map((badge, i) => (
            <ScrollReveal key={`${badge.label}-${i}`} delay={i * 0.1}>
              <div
                onClick={() => setLightbox(i)}
                className="group relative w-[75vw] flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-bg-elevated p-5 transition-all hover:border-gold/20 lg:w-auto lg:p-6"
              >
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm bg-bg-surface">
                  <Image
                    src={badge.image}
                    alt={badge.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 75vw, 33vw"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gold tracking-wide">
                  {badge.label}
                </h3>
                <p className="mt-1 text-xs text-text-muted leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:mt-6 lg:gap-6">
          {NUMBER_BADGES.map((badge, i) => (
            <ScrollReveal key={badge.label} delay={0.3 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-sm border border-white/5 bg-bg-elevated p-5 transition-all hover:border-gold/20 lg:p-6">
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="flex flex-col items-center justify-center py-4 lg:py-8">
                  <CountUp
                    end={badge.value}
                    suffix={badge.suffix}
                    className="text-3xl font-bold text-gold lg:text-5xl"
                    duration={2000}
                  />
                  <p className="mt-2 text-sm text-text-secondary tracking-wide">
                    {badge.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-5"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-50 p-2 text-white/60 transition-colors hover:text-white"
              aria-label="닫기"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-[90vw] lg:max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={IMAGE_BADGES[lightbox].image}
                alt={IMAGE_BADGES[lightbox].description}
                width={900}
                height={675}
                className="h-auto max-h-[85vh] w-auto rounded-sm object-contain"
                sizes="90vw"
              />
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold text-gold">
                  {IMAGE_BADGES[lightbox].label}
                </p>
                <p className="mt-0.5 text-xs text-text-muted">
                  {IMAGE_BADGES[lightbox].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
