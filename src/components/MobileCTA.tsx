import { MessageCircle, Phone, Calendar, Instagram } from "lucide-react";

const CTA_ITEMS = [
  {
    icon: MessageCircle,
    label: "카카오톡",
    href: "http://pf.kakao.com/_kxinQG",
    primary: true,
    external: true,
  },
  {
    icon: Phone,
    label: "전화",
    href: "tel:010-9810-6697",
    primary: false,
    external: false,
  },
  {
    icon: Calendar,
    label: "네이버예약",
    href: "https://naver.me/GyYWlQmV",
    primary: false,
    external: true,
  },
  {
    icon: Instagram,
    label: "인스타그램",
    href: "https://www.instagram.com/chuldu_munchan/",
    primary: false,
    external: true,
  },
];

export default function MobileCTA() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-bg-primary/95 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around py-2.5 px-2">
          {CTA_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
              className={`flex flex-col items-center gap-1 rounded-sm px-4 py-1.5 transition-colors ${
                item.primary
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] tracking-wide">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {CTA_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
            className={`group flex h-14 w-14 items-center justify-center rounded-full border shadow-lg transition-all hover:scale-110 ${
              item.primary
                ? "border-gold/30 bg-gold text-bg-primary shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_8px_28px_rgba(201,169,110,0.4)]"
                : "border-white/10 bg-bg-elevated/90 text-text-secondary backdrop-blur-sm hover:border-gold/30 hover:text-gold"
            }`}
            aria-label={item.label}
          >
            <item.icon size={24} />
          </a>
        ))}
      </div>
    </>
  );
}
