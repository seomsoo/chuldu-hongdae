import Image from "next/image";
import TextSwitch from "./ui/TextSwitch";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-munchan.jpg"
          alt="출두 홍대 두피문신 SMP 전문 정문찬 원장"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-bg-primary/20" />
      </div>

      <div className="absolute inset-0 hidden lg:block">
        <div className="h-full w-full bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-primary" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-gold/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 lg:px-8">
        <div className="flex flex-1 flex-col justify-end pb-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-0 lg:pt-16">
          <div className="flex flex-col gap-5 lg:gap-6">
            <div
              className="flex flex-col items-center gap-2 text-center lg:gap-3 opacity-0"
              style={{
                animation:
                  "hero-fade-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.3s forwards",
              }}
            >
              <TextSwitch
                texts={["CHULDU SMP", "출두 홍대점"]}
                interval={3500}
                className="block text-5xl font-bold tracking-[0.08em] sm:text-7xl lg:text-[7rem]"
                style={{ fontFamily: "var(--font-display)" }}
              />
              <TextSwitch
                texts={["MUNCHAN", "원장 정문찬"]}
                interval={3500}
                className="block text-2xl tracking-[0.15em] text-gold sm:text-4xl lg:text-6xl font-bold"
              />
            </div>

            <h1
              className="text-sm tracking-[0.15em] text-text-muted uppercase lg:text-lg opacity-0"
              style={{
                animation:
                  "hero-fade-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.45s forwards",
              }}
            >
              홍대 두피문신 SMP 전문
            </h1>

            <p
              className="text-lg leading-relaxed text-text-secondary sm:text-xl lg:text-3xl opacity-0"
              style={{
                animation:
                  "hero-fade-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.6s forwards",
              }}
            >
              당신의 영원한 <span className="font-bold">멋,</span>
              <br />
              <span className="text-text-primary">
                <span className="font-bold text-gold">젊음</span>을
                책임져드립니다
              </span>
            </p>

            <div
              className="flex gap-3 pt-1 lg:gap-4 lg:pt-2 opacity-0"
              style={{
                animation:
                  "hero-fade-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.75s forwards",
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-bg-primary transition-all hover:bg-gold-hover hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] lg:px-7 lg:py-3.5"
              >
                무료 상담 예약
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-6 py-3 text-sm tracking-wide text-text-secondary transition-all hover:border-gold/30 hover:text-text-primary lg:px-7 lg:py-3.5"
              >
                시술 사례 보기
              </a>
            </div>
          </div>

          <div
            className="hidden lg:block opacity-0"
            style={{
              animation:
                "hero-photo-in 1s cubic-bezier(0.25,0.1,0.25,1) 0.5s forwards",
            }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md ml-auto">
              <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-[60%] z-0 animate-[spotlight-pulse_4s_ease-in-out_infinite]"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 0%, transparent 30%, rgba(201,169,110,0.08) 40%, rgba(201,169,110,0.15) 50%, rgba(201,169,110,0.08) 60%, transparent 70%)",
                }}
              />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full bg-gold/15 blur-[60px] z-0 animate-[spotlight-pulse_4s_ease-in-out_infinite]" />

              <div className="absolute -inset-3 z-0 rounded-sm bg-gold/8 blur-[25px] animate-[spotlight-pulse_4s_ease-in-out_infinite]" />

              <div className="absolute -inset-[2px] z-5 rounded-sm overflow-hidden">
                <div
                  className="absolute -inset-[50%] animate-[border-rotate_4s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, #C9A96E 10%, #E8D5A3 20%, #C9A96E 30%, transparent 40%, transparent 60%, #C9A96E 70%, #E8D5A3 80%, #C9A96E 90%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-[2px] rounded-sm bg-bg-primary" />
              </div>

              <div className="relative h-full w-full overflow-hidden rounded-sm z-10">
                <Image
                  src="/images/hero-munchan.jpg"
                  alt="출두 홍대 두피문신 SMP 전문 정문찬 원장"
                  fill
                  priority
                  className="object-cover"
                  sizes="448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent" />

                <div
                  className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                />
              </div>

              <span
                className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 text-[12px] tracking-[0.35em] text-text-muted/40 uppercase opacity-0"
                style={{
                  writingMode: "vertical-rl",
                  animation: "hero-fade 0.8s ease-out 1.5s forwards",
                }}
              >
                SMP ARTIST — SINCE 2022
              </span>

              <div
                className="absolute -left-15 bottom-24 z-20 rounded-sm border border-white/10 bg-bg-primary/60 backdrop-blur-xl px-5 py-3.5 opacity-0"
                style={{
                  animation:
                    "hero-badge-in-up 0.7s cubic-bezier(0.25,0.1,0.25,1) 1.2s forwards",
                }}
              >
                <p className="text-2xl font-bold text-gold">3,000+</p>
                <p className="text-xs text-text-secondary tracking-wide mt-0.5">
                  시술 건수
                </p>
              </div>

              <div
                className="absolute -right-14 top-12 z-20 rounded-sm border border-white/10 bg-bg-primary/60 backdrop-blur-xl px-4 py-2.5 opacity-0"
                style={{
                  animation:
                    "hero-badge-in-down 0.7s cubic-bezier(0.25,0.1,0.25,1) 1.4s forwards",
                }}
              >
                <p className="text-xs font-semibold text-gold tracking-wide">
                  SMP 심사위원
                </p>
                <p className="text-[10px] text-text-muted mt-0.5">
                  공식 심사위원 활동
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 lg:bottom-8 opacity-0"
        style={{ animation: "hero-fade 0.6s ease-out 1.5s forwards" }}
      >
        <div
          className="h-10 w-5 rounded-full border border-white/20 flex items-start justify-center pt-2"
          style={{ animation: "scroll-bounce 1.5s ease-in-out infinite" }}
        >
          <div className="h-1.5 w-1 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
