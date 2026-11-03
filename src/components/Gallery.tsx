"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import Marquee from "./ui/Marquee";
import Lightbox, { useLightbox } from "./ui/Lightbox";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const ALL_ITEMS: GalleryItem[] = [
  { type: "image", src: "/images/gallery-1.jpg", alt: "M자 이마 헤어라인 두피문신 시술 전후" },
  { type: "image", src: "/images/gallery-2.jpg", alt: "남성 헤어라인 SMP 시술 전후 비교" },
  { type: "image", src: "/images/gallery-3.jpg", alt: "M자 탈모 두피문신 정면 전후" },
  { type: "image", src: "/images/gallery-4.jpg", alt: "홍대 두피문신 헤어라인 교정 결과" },
  { type: "image", src: "/images/gallery-5.jpg", alt: "측면 헤어라인 디자인 후 SMP 시술 과정" },
  { type: "image", src: "/images/gallery-6.jpg", alt: "출두 홍대점 두피문신 시술 사례" },
  { type: "image", src: "/images/gallery-7.jpg", alt: "자연스러운 헤어라인 두피문신 결과" },
  { type: "image", src: "/images/gallery-8.jpg", alt: "남성 SMP 시술 전후 변화" },
  { type: "image", src: "/images/gallery-9.jpg", alt: "홍대 SMP 전문 출두 시술 결과" },
  { type: "image", src: "/images/gallery-10.jpg", alt: "두피문신 밀도 보강 시술 전후" },
  { type: "image", src: "/images/gallery-11.jpg", alt: "정수리 탈모 두피문신 숱채움 전후" },
  { type: "image", src: "/images/gallery-12.jpg", alt: "정수리 SMP 밀도 보강 시술 결과" },
];

const ROW_SIZE = Math.ceil(ALL_ITEMS.length / 2);

/** 마키 한 바퀴 시간(초).
 *  줄당 17개일 때 40초가 약 115px/s였다. 줄당 7개면 같은 체감 속도에 약 16초. */
const MARQUEE_DURATION = 16;

/** Fisher-Yates. 원본은 건드리지 않는다. */
function shuffle<T>(items: readonly T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function splitRows(items: GalleryItem[]): [GalleryItem[], GalleryItem[]] {
  return [items.slice(0, ROW_SIZE), items.slice(ROW_SIZE)];
}

function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick?: () => void;
}) {
  if (item.type === "video") {
    return (
      <div className="relative h-72 w-56 flex-shrink-0 overflow-hidden rounded-sm border border-white/5 lg:h-80 lg:w-64">
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group relative h-72 w-56 flex-shrink-0 cursor-pointer overflow-hidden rounded-sm border border-white/5 transition-all hover:border-gold/20 lg:h-80 lg:w-64"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 1024px) 224px, 256px"
      />
      <div className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/5" />
    </div>
  );
}

export default function Gallery() {
  // 이 페이지는 정적 생성되므로 렌더 중에 섞으면 서버 HTML과 어긋나 hydration이 깨진다.
  // 빌드 시점에는 고정 순서로 두고, 마운트 직후 한 번만 섞는다.
  // 덕분에 방문할 때마다 앞에 서는 사진이 달라져 모든 사진이 고르게 노출된다.
  const [rows, setRows] = useState(() => splitRows(ALL_ITEMS));

  useEffect(() => {
    setRows(splitRows(shuffle(ALL_ITEMS)));
  }, []);

  const { lightbox, open, close, navigate } = useLightbox();

  // 라이트박스 좌우 이동 순서를 화면에 보이는 순서와 맞추려면 rows에서 파생시켜야 한다.
  const images = useMemo(
    () =>
      rows
        .flat()
        .filter((item) => item.type === "image")
        .map((item) => item.src),
    [rows]
  );

  const openLightbox = (src: string) => {
    const index = images.indexOf(src);
    if (index !== -1) {
      open(images, index);
    }
  };

  return (
    <>
      <section id="gallery" className="bg-bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 lg:mb-16">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                Gallery
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
                두피문신 시술 갤러리
              </h2>
              <p className="mt-3 text-sm text-text-secondary lg:text-base">
                다양한 두피문신 시술 전후 사례를 확인하세요
              </p>
            </div>
          </ScrollReveal>
        </div>

        <Marquee className="py-2" duration={MARQUEE_DURATION}>
          <div className="flex gap-4 px-2">
            {rows[0].map((item, i) => (
              <GalleryCard
                key={`r1-${i}`}
                item={item}
                onClick={item.type === "image" ? () => openLightbox(item.src) : undefined}
              />
            ))}
          </div>
        </Marquee>

        <Marquee reverse className="mt-4 py-2" duration={MARQUEE_DURATION}>
          <div className="flex gap-4 px-2">
            {rows[1].map((item, i) => (
              <GalleryCard
                key={`r2-${i}`}
                item={item}
                onClick={item.type === "image" ? () => openLightbox(item.src) : undefined}
              />
            ))}
          </div>
        </Marquee>
      </section>

      <Lightbox lightbox={lightbox} onClose={close} onNavigate={navigate} alt="홍대 두피문신 SMP 시술 갤러리" />
    </>
  );
}
