import Image from "next/image";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울특별시 마포구 동교로 248-2 301호",
    subtext: "랜디스도넛 맞은편 건물 연남노래방 3층",
  },
  {
    icon: Navigation,
    label: "교통",
    value: "홍대입구역 3번 출구 도보 5분",
    subtext: "지하철 2호선 / 공항철도 / 경의중앙선",
  },
  {
    icon: Clock,
    label: "영업시간",
    value: "매일 24H",
    subtext: "편하실때 언제든 연락주세요.",
  },
  {
    icon: Phone,
    label: "전화",
    value: "010-9810-6697",
    subtext: "카카오톡 상담도 가능합니다.",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 lg:mb-16">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Location
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
              오시는 길
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 rounded-sm border border-white/5 bg-bg-elevated p-5 transition-all hover:border-gold/20"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-gold-dim">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-text-muted tracking-wide">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-text-primary">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="https://map.naver.com/p/entry/place/1297080931"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 relative block h-[250px] overflow-hidden rounded-sm lg:h-[400px] group"
          >
            <Image
              src="/images/location.jpg"
              alt="출두 홍대점 위치 - 서울 마포구 동교로 248-2"
              fill
              className="object-cover grayscale-[20%] transition-all group-hover:grayscale-0"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 pointer-events-none rounded-sm border border-white/5" />
          </a>
          <a
            href="https://map.naver.com/p/entry/place/1297080931"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-gold"
          >
            <MapPin size={12} />
            네이버 지도에서 크게 보기
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
