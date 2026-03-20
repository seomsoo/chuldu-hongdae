import { MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Consultation
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
              무료 상담 받아보세요
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary lg:text-base">
              부담 없이 편하게 연락주세요.
              <br />
              고민 상담부터 시술 안내까지 친절히 도와드립니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:[&>a]:w-52">
              <a
                href="http://pf.kakao.com/_kxinQG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-base font-semibold text-bg-primary transition-all hover:bg-gold-hover hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(201,169,110,0.3)]"
              >
                <MessageCircle size={20} />
                카카오톡 상담
              </a>
              <a
                href="tel:010-9810-6697"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-gold/30 px-8 py-4 text-base  font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-[1.02]"
              >
                <Phone size={20} />
                전화 상담
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              평균 응답 시간 10분 이내
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
