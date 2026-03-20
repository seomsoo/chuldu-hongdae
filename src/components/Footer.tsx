import { Instagram, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "인스타그램",
    href: "https://www.instagram.com/chuldu_munchan/",
  },
  { icon: MessageCircle, label: "카카오톡", href: "http://pf.kakao.com/_kxinQG" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] pb-24 pt-12 lg:pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span
              className="text-2xl tracking-[0.15em] text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CHULDU HONGDAE
            </span>
            <div className="mt-4 space-y-1 text-xs text-text-muted leading-relaxed">
              <p>상호명: 출두SMP 홍대점 | 대표: 정문찬</p>
              <p>사업자등록번호: 162-52-01188</p>
              <p>서울특별시 마포구 동교로 248-2 301호</p>
              <p>전화: 010-9810-6697</p>
            </div>
          </div>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-text-muted transition-all hover:border-gold/30 hover:text-gold"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-xs text-text-muted">
            &copy; 2026 CHULDU HONGDAE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
