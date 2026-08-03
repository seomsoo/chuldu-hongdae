"use client";

import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
  /** 한 바퀴에 걸리는 시간(초). 아이템이 늘면 같은 시간에 더 긴 거리를 이동해
   *  빨라지므로, 개수에 비례해 늘려야 체감 속도가 유지된다. 미지정 시 40초. */
  duration?: number;
}

export default function Marquee({
  children,
  reverse = false,
  className,
  pauseOnHover = true,
  duration,
}: MarqueeProps) {
  return (
    // 동작 줄이기 설정에서는 애니메이션을 끄고 가로 스크롤로 대체한다.
    // 멈추기만 하면 앞쪽 몇 장 외에는 영원히 볼 수 없다.
    <div
      className={`group overflow-hidden motion-reduce:overflow-x-auto ${className ?? ""}`}
    >
      <div
        style={duration ? { animationDuration: `${duration}s` } : undefined}
        className={`flex w-max motion-reduce:animate-none ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
