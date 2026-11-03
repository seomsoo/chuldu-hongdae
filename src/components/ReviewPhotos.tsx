"use client";

import Image from "next/image";
import Marquee from "./ui/Marquee";
import Lightbox, { useLightbox } from "./ui/Lightbox";

const REVIEW_PHOTOS = Array.from(
  { length: 11 },
  (_, i) => `/images/review-${i + 1}.jpg`
);

/** 네이버 플레이스 실제 리뷰 캡처. 세로로 긴 휴대폰 화면이라 상단 기준으로 자른다. */
export default function ReviewPhotos() {
  const { lightbox, open, close, navigate } = useLightbox();

  return (
    <>
      <Marquee reverse className="py-2" duration={50}>
        <div className="flex gap-4 px-2">
          {REVIEW_PHOTOS.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => open(REVIEW_PHOTOS, i)}
              className="group relative aspect-[9/14] w-52 flex-shrink-0 cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-bg-elevated transition-all hover:border-gold/30 lg:w-60"
              aria-label={`네이버 리뷰 ${i + 1} 크게 보기`}
            >
              <Image
                src={src}
                alt={`출두 홍대점 두피문신 네이버 플레이스 실제 고객 리뷰 ${i + 1}`}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 208px, 240px"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/80 to-transparent" />
            </button>
          ))}
        </div>
      </Marquee>

      <Lightbox
        lightbox={lightbox}
        onClose={close}
        onNavigate={navigate}
        alt="출두 홍대점 두피문신 네이버 실제 고객 리뷰"
      />
    </>
  );
}
