import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "홍대 두피문신 SMP 전문 | 출두 CHULDU 홍대점",
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
        <meta name="google-site-verification" content="iEdDHHYyScPB39_pJzKC12QiYAOYJQRGFtwsYLCGnw0" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://chulduhongdae.shop/#business",
              name: "출두 CHULDU 홍대점",
              alternateName: "출두SMP 홍대점",
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
                opens: "00:00",
                closes: "23:59",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "10",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "두피문신(SMP)이란 무엇인가요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "두피문신(SMP, Scalp Micropigmentation)은 두피에 미세한 점을 시술하여 모낭처럼 보이게 하는 반영구 시술입니다. M자 탈모, 정수리 탈모, 흉터 커버, 헤어라인 교정 등에 효과적입니다.",
                  },
                },
                {
                  "@type": "Question",
                  name: "두피문신 시술 시간은 얼마나 걸리나요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "시술 부위와 범위에 따라 다르지만, 보통 2~4시간 정도 소요됩니다. 전체작업의 경우 1차, 2차로 나누어 진행합니다.",
                  },
                },
                {
                  "@type": "Question",
                  name: "두피문신 유지 기간은 얼마인가요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "개인차가 있지만 보통 3~5년 이상 유지되며, 시간이 지나면서 자연스럽게 옅어집니다. 리터치를 통해 유지할 수 있습니다.",
                  },
                },
                {
                  "@type": "Question",
                  name: "출두 홍대점 위치가 어디인가요?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "서울특별시 마포구 동교로 248-2 301호에 위치해 있으며, 홍대입구역 3번 출구에서 도보 5분 거리입니다.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
