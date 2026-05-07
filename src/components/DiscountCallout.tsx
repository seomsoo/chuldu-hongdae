import { BadgePercent } from "lucide-react";

type DiscountCalloutProps = {
  className?: string;
  compact?: boolean;
};

export default function DiscountCallout({
  className = "",
  compact = false,
}: DiscountCalloutProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-r from-gold/20 via-bg-elevated to-bg-elevated shadow-[0_12px_34px_rgba(201,169,110,0.16)] ${className}`}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gold" />
      <div
        className={`flex items-center ${compact ? "gap-2.5 px-3 py-2" : "gap-4 px-4 py-3 sm:px-5"}`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-sm bg-gold text-bg-primary ${compact ? "h-8 w-8" : "h-11 w-11"}`}
        >
          <BadgePercent size={compact ? 18 : 24} strokeWidth={2.4} />
        </div>
        <div className="min-w-0 flex-1">
          <p
            className={`font-semibold text-text-primary ${compact ? "text-xs" : "text-sm sm:text-base"}`}
          >
            상담 시 &quot;홈페이지 봤어요&quot;라고 말씀해주시면
          </p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span
              className={`font-bold leading-none text-gold ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}
            >
              20%
            </span>
            <span
              className={`font-bold text-gold ${compact ? "text-sm" : "text-lg sm:text-xl"}`}
            >
              할인 적용
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
