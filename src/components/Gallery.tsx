"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import Marquee from "./ui/Marquee";
import Lightbox, { useLightbox } from "./ui/Lightbox";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const ROW_1: GalleryItem[] = [
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
  { type: "image", src: "/images/gallery-12.jpg", alt: "출두 정문찬 원장 SMP 시술 결과" },
  { type: "image", src: "/images/gallery-13.jpg", alt: "자연스러운 두피문신 시술 전후" },
  { type: "image", src: "/images/gallery-14.jpg", alt: "홍대 두피문신 정수리 시술 사례" },
  { type: "image", src: "/images/gallery-15.jpg", alt: "SMP 헤어라인 복원 시술 결과" },
  { type: "image", src: "/images/gallery-16.jpg", alt: "두피문신 숱채움 자연스러운 결과" },
  { type: "video", src: "/videos/gallery-17.mp4" },
];

const ROW_2: GalleryItem[] = [
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
];

const ALL_ITEMS = [...ROW_1, ...ROW_2].filter(
  (item): item is { type: "image"; src: string; alt: string } =>
    item.type === "image"
);
const ALL_IMAGES = ALL_ITEMS.map((item) => item.src);

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
        sizes="(max-width: 1024px) 288px, 320px"
      />
      <div className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/5" />
    </div>
  );
}

export default function Gallery() {
  const { lightbox, open, close, navigate } = useLightbox();

  const openLightbox = (src: string) => {
    const index = ALL_IMAGES.indexOf(src);
    if (index !== -1) {
      open(ALL_IMAGES, index);
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

        <Marquee className="py-2">
          <div className="flex gap-4 px-2">
            {ROW_1.map((item, i) => (
              <GalleryCard
                key={`r1-${i}`}
                item={item}
                onClick={item.type === "image" ? () => openLightbox(item.src) : undefined}
              />
            ))}
          </div>
        </Marquee>

        <Marquee reverse className="mt-4 py-2">
          <div className="flex gap-4 px-2">
            {ROW_2.map((item, i) => (
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
