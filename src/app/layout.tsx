import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import { faqJsonLd } from "@/lib/faq";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://chulduhongdae.shop/#business",
  name: "출두 SMP 홍대점",
  alternateName: "출두 두피문신 홍대점",
  description:
    "홍대 두피문신(SMP) 전문. 3,000건+ 시술 경력, SMP 심사위원 정문찬 원장의 자연스러운 두피문신. M자 이마, 정수리, 여성 가르마, 흉터 커버 전문.",
  image: "https://chulduhongdae.shop/og-image.jpg",
  logo: "https://chulduhongdae.shop/icon.png",
  url: "https://chulduhongdae.shop",
  telephone: "010-9810-6697",
  priceRange: "₩₩",
  address: {
    "@type": "PostalAddress",
    streetAddress: "동교로 248-2 301호",
    addressLocality: "서울특별시",
    addressRegion: "마포구",
    postalCode: "04030",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.562133,
    longitude: 126.924543,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.instagram.com/chuldu_munchan/",
    "http://pf.kakao.com/_kxinQG",
    "https://map.naver.com/p/entry/place/1297080931",
  ],
  hasMap: "https://map.naver.com/p/entry/place/1297080931",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 37.5604,
      longitude: 126.9234,
    },
    geoRadius: "30000",
  },
  keywords:
    "두피문신, SMP, 홍대 두피문신, 스칼프 마이크로피그먼테이션, 탈모, M자 이마, 정수리, 헤어라인",
};

export const metadata: Metadata = {
title: "홍대 두피문신 SMP 전문 | 출두 SMP 홍대점",
description:
  "홍대 두피문신(SMP) 전문 출두. 3,000건+ 시술 경력, SMP 심사위원 정문찬 원장의 자연스러운 두피문신. M자 이마, 정수리 탈모, 여성 가르마, 흉터 커버 전문. 무료 상담 예약.",
keywords:
  "홍대 두피문신, 두피문신, SMP, 홍대 SMP, 서울 두피문신, 두피문신 잘하는곳, 정수리 두피문신, M자 두피문신, 여성 두피문신, 헤어라인 두피문신, 탈모 두피문신, 스칼프 마이크로피그먼테이션, 출두, 정문찬",
openGraph: {
  title: "홍대 두피문신 SMP 전문 | 출두 CHULDU",
  description:
    "3,000건+ 시술, SMP 심사위원 정문찬 원장. M자·정수리·가르마·흉터 커버 전문. 무료 상담 예약.",
  type: "website",
  url: "https://chulduhongdae.shop",
  locale: "ko_KR",
  siteName: "출두 CHULDU",
  images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
},
twitter: {
  card: "summary_large_image",
  title: "홍대 두피문신 SMP 전문 | 출두 CHULDU",
  description:
    "3,000건+ 시술, SMP 심사위원 정문찬 원장. M자·정수리·가르마·흉터 커버 전문. 무료 상담 예약.",
  images: ["/og-image.jpg"],
},
robots: { index: true, follow: true },
metadataBase: new URL("https://chulduhongdae.shop"),
alternates: {
  canonical: "https://chulduhongdae.shop",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${bebasNeue.variable} antialiased`}>
      <head>
        <meta name="naver-site-verification" content="5d945905c03ff07850907c2ed6d709495003bfc6" />
        <meta name="naver-site-verification" content="c54098a477a489f7a59752d23e71ec25426afc1f" />
        <meta name="google-site-verification" content="iEdDHHYyScPB39_pJzKC12QiYAOYJQRGFtwsYLCGnw0" />
        <meta name="google-site-verification" content="hMf2Cczg-a9MecG7wdw9v0uSaH2kqlpTATtky67JosY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3R2J9JQCBV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-3R2J9JQCBV');`}
        </Script>
      </body>
    </html>
  );
}
