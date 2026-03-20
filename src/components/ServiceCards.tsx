"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import Lightbox, { useLightbox } from "./ui/Lightbox";

const FEATURED = {
  id: "full-2",
  title: "두피문신 전체작업 시술 전후 비교",
  image: "/images/service-full-2.jpg",
  details: [
    "/images/service-full-2-detail1.jpg",
    "/images/service-full-2-detail2.jpg",
    "/images/service-full-2-detail3.jpg",
  ],
};

const SERVICES = [
  {
    id: "female-parting",
    title: "여성 가르마 두피문신 숱채움 시술",
    image: "/images/service-female-parting.jpg",
    details: [
      "/images/service-female-parting-detail1.jpg",
      "/images/service-female-parting-detail2.jpg",
    ],
  },
  {
    id: "male-crown",
    title: "남성 정수리 탈모 두피문신 시술 결과",
    image: "/images/service-male-crown.jpg",
    details: [
      "/images/service-male-crown-detail1.jpg",
      "/images/service-male-crown-detail2.jpg",
      "/images/service-male-crown-detail3.jpg",
    ],
  },
  {
    id: "male-hairline",
    title: "남성 M자 헤어라인 두피문신 교정",
    image: "/images/service-male-hairline.jpg",
    details: [
      "/images/service-male-hairline-detail1.jpg",
      "/images/service-male-hairline-detail2.jpg",
    ],
  },
  {
    id: "full-1",
    title: "SMP 전체작업 탈모 커버 시술 사례",
    image: "/images/service-full-1.jpg",
    details: [
      "/images/service-full-1-detail1.jpg",
      "/images/service-full-1-detail2.jpg",
      "/images/service-full-1-detail3.jpg",
      "/images/service-full-1-detail4.jpg",
    ],
  },
];

const GUIDES = [
  "/images/service-guide1.jpg",
  "/images/service-guide2.jpg",
];

export default function ServiceCards() {
  const { lightbox, open: openLightbox, close, navigate } = useLightbox();

  return (
    <section id="services" className="bg-bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 lg:mb-16">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
              두피문신 시술 안내
            </h2>
            <p className="mt-3 text-sm text-text-secondary lg:text-base">
              사진을 눌러 디테일을 확인하세요
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-4 lg:mb-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              {GUIDES.map((src, i) => (
                <div
                  key={src}
                  onClick={() => openLightbox(GUIDES, i)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-bg-elevated transition-all hover:border-gold/20"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={src}
                      alt={`출두 두피문신 SMP 시술 과정 안내 ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: "center 70%" }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 mb-4 lg:mb-6">
            <div
              onClick={() =>
                openLightbox([FEATURED.image, ...FEATURED.details])
              }
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 transition-all hover:border-gold/20"
            >
              <div className="relative aspect-[3/4] w-full bg-bg-surface">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/5" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-white/5 bg-bg-elevated aspect-[3/4]">
              <video
                src="/videos/service-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="hide-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 snap-x lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <div
                onClick={() =>
                  openLightbox([service.image, ...service.details])
                }
                className="group w-64 flex-shrink-0 snap-center cursor-pointer lg:w-auto"
              >
                <div className="relative overflow-hidden rounded-sm border border-white/5 transition-all hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:border-gold/20">
                  <div className="relative aspect-[3/4] w-full bg-bg-surface">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 256px, 25vw"
                    />
                    <div className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox lightbox={lightbox} onClose={close} onNavigate={navigate} alt="출두 두피문신 시술 상세 사진" />
    </section>
  );
}
