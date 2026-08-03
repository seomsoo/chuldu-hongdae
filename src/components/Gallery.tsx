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
  { type: "image", src: "/images/gallery-1.jpg", alt: "홍대 두피문신 SMP 시술 결과" },
  { type: "image", src: "/images/gallery-2.jpg", alt: "남성 정수리 두피문신 전후 비교" },
  { type: "image", src: "/images/gallery-3.jpg", alt: "M자 이마 두피문신 시술 사례" },
  { type: "image", src: "/images/gallery-4.jpg", alt: "출두 SMP 헤어라인 교정 결과" },
  { type: "image", src: "/images/gallery-5.jpg", alt: "두피문신 자연스러운 밀도 표현" },
  { type: "image", src: "/images/gallery-6.jpg", alt: "탈모 두피문신 커버 시술 후기" },
  { type: "image", src: "/images/gallery-7.jpg", alt: "SMP 정수리 숱채움 시술 결과" },
  { type: "image", src: "/images/gallery-8.jpg", alt: "홍대 SMP 전문 출두 시술 사례" },
  { type: "image", src: "/images/gallery-9.jpg", alt: "남성 헤어라인 두피문신 전후" },
  { type: "image", src: "/images/gallery-10.jpg", alt: "스칼프 마이크로피그먼테이션 시술 결과" },
  { type: "image", src: "/images/gallery-11.jpg", alt: "두피문신 M자 탈모 커버 사례" },
  { type: "image", src: "/images/gallery-12.jpg", alt: "정수리 두피문신 숱채움 전후 결과" },
  { type: "image", src: "/images/gallery-13.jpg", alt: "자연스러운 두피문신 시술 전후" },
  { type: "image", src: "/images/gallery-14.jpg", alt: "홍대 두피문신 정수리 시술 사례" },
  { type: "image", src: "/images/gallery-15.jpg", alt: "SMP 헤어라인 복원 시술 결과" },
  { type: "video", src: "/videos/gallery-17.mp4" },
  { type: "image", src: "/images/gallery-18.jpg", alt: "서울 두피문신 SMP 시술 전후" },
  { type: "image", src: "/images/gallery-19.jpg", alt: "남성 탈모 두피문신 커버 결과" },
  { type: "image", src: "/images/gallery-20.jpg", alt: "출두 SMP 정수리 밀도 보강" },
  { type: "image", src: "/images/gallery-21.jpg", alt: "두피문신 헤어라인 디자인 시술" },
  { type: "image", src: "/images/gallery-22.jpg", alt: "홍대 SMP 전후 비교 사진" },
  { type: "image", src: "/images/gallery-23.jpg", alt: "M자 탈모 두피문신 자연스러운 결과" },
  { type: "image", src: "/images/gallery-24.jpg", alt: "정수리 탈모 SMP 시술 사례" },
  { type: "image", src: "/images/gallery-25.jpg", alt: "두피문신 전문가 정문찬 시술 결과" },
  { type: "image", src: "/images/gallery-26.jpg", alt: "SMP 시술 전후 변화 사례" },
  { type: "image", src: "/images/gallery-27.jpg", alt: "홍대 두피문신 숱채움 결과" },
  { type: "image", src: "/images/gallery-28.jpg", alt: "남성 SMP 헤어라인 시술 전후" },
  { type: "image", src: "/images/gallery-29.jpg", alt: "출두 두피문신 M자 교정 사례" },
  { type: "image", src: "/images/gallery-30.jpg", alt: "두피문신 정수리 시술 자연스러운 표현" },
  { type: "image", src: "/images/gallery-31.jpg", alt: "SMP 탈모 커버 시술 전후 비교" },
  { type: "image", src: "/images/gallery-32.jpg", alt: "홍대 SMP 전문 시술 결과 사진" },
  { type: "image", src: "/images/gallery-33.jpg", alt: "두피문신 헤어라인 복원 전후" },
  { type: "image", src: "/images/gallery-34.jpg", alt: "출두 SMP 숱보강 시술 사례" },
  { type: "image", src: "/images/gallery-35.jpg", alt: "서울 홍대 두피문신 시술 결과" },
  { type: "image", src: "/images/gallery-36.jpg", alt: "이선민 두피문신 SMP 시술 후기" },
  { type: "image", src: "/images/gallery-37.jpg", alt: "두피문신 후 두피 건강 관리 안내" },
  { type: "image", src: "/images/gallery-38.jpg", alt: "정수리 탈모 두피문신 전후 비교" },
  { type: "image", src: "/images/gallery-39.jpg", alt: "뒷머리 정수리 SMP 밀도 보강 전후" },
  { type: "image", src: "/images/gallery-40.jpg", alt: "측면 헤어라인 디자인 후 두피문신 결과" },
  { type: "image", src: "/images/gallery-41.jpg", alt: "M자 이마 두피문신 정면 전후 비교" },
  { type: "image", src: "/images/gallery-42.jpg", alt: "헤어라인 디자인부터 SMP 시술 완성까지" },
  { type: "image", src: "/images/gallery-43.jpg", alt: "M자 헤어라인 교정 두피문신 전후" },
  { type: "image", src: "/images/gallery-44.jpg", alt: "측면 헤어라인 SMP 시술 전후 비교" },
  { type: "image", src: "/images/gallery-45.jpg", alt: "정면 헤어라인 두피문신 자연스러운 결과" },
  { type: "image", src: "/images/gallery-46.jpg", alt: "두피문신 정면 단계별 변화 - 시술 전 디자인 완성" },
  { type: "image", src: "/images/gallery-47.jpg", alt: "두피문신 측면 단계별 변화 - 시술 전 디자인 완성" },
  { type: "image", src: "/images/gallery-48.jpg", alt: "헤어라인 두피문신 정면 단계별 시술 과정" },
  { type: "image", src: "/images/gallery-49.jpg", alt: "헤어라인 두피문신 측면 단계별 시술 과정" },
  { type: "image", src: "/images/gallery-50.jpg", alt: "중년 남성 헤어라인 SMP 시술 전후" },
  { type: "image", src: "/images/gallery-51.jpg", alt: "홍대 두피문신 헤어라인 정면 시술 결과" },
  { type: "image", src: "/images/gallery-52.jpg", alt: "M자 이마 SMP 측면 시술 전후 비교" },
];

const ROW_SIZE = Math.ceil(ALL_ITEMS.length / 2);

/** 마키 한 바퀴 시간(초).
 *  줄당 17개일 때 40초가 약 115px/s였는데, 26개면 콘텐츠가 1.5배 길어져
 *  같은 40초로는 그만큼 빨라진다. 체감 속도를 유지하려면 60초가 필요하다. */
const MARQUEE_DURATION = 60;

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
  // 덕분에 방문할 때마다 앞에 서는 사진이 달라져 51장이 고르게 노출된다.
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
      <section id="gallery" className="bg-bg-primary py-16 lg:py-24">
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
