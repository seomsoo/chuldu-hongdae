@AGENTS.md

# CHULDU (출두) — SMP 두피문신 랜딩페이지 기획서

## 프로젝트 개요

- **브랜드명**: 출두 (CHULDU)
- **대표**: 정문찬 (MUNCHAN)
- **업종**: 두피문신 (SMP, Scalp Micropigmentation)
- **위치**: 서울 홍대
- **슬로건**: "당신의 영원한 멋, 젊음을 책임져드립니다"
- **목적**: 마케팅용 랜딩페이지 (상담 전환 극대화)
- **타겟**: 탈모 고민이 있는 20~50대 남성,여성 (서울/수도권)

---

## 기술 스택

- **프레임워크**: Next.js (App Router)
- **스타일링**: Tailwind CSS
- **애니메이션**: Motion (스크롤 트리거, 진입 애니메이션, 텍스트 전환)
- **이미지 최적화**: next/image
- **SEO**: next-seo (메타태그, OG, 구조화 데이터)
- **폰트**: Pretendard (한글 본문 + UI) / 영문 디스플레이 폰트는 Bebas Neue 또는 Playfair Display 중 택1 (럭셔리 느낌)
- **배포**: Vercel
- **반응형**: 모바일 퍼스트 설계 (breakpoints: sm 640px / md 768px / lg 1024px / xl 1280px)

---

## 디자인 시스템

### 톤 & 무드

**다크 프리미엄 (Dark Premium)**

- UI/UX 전문가가 만든 수준의 트렌디한 디자인
- 사진 중심 레이아웃 — 텍스트 최소화, 이미지가 곧 설명
- 고급감과 신뢰감을 동시에 전달

### 컬러 팔레트

```
--bg-primary: #0a0a0a        (메인 배경 - 차콜 블랙)
--bg-secondary: #141414      (섹션 구분용 약간 밝은 다크)
--bg-elevated: #1a1a1a       (카드, 오버레이 배경)
--bg-surface: #2d2d2d        (호버, 액티브 상태)

--text-primary: #f5f5f5      (메인 텍스트 - 오프 화이트)
--text-secondary: #a0a0a0    (서브 텍스트 - 라이트 그레이)
--text-muted: #666666        (힌트, 캡션)

--accent-gold: #C9A96E       (포인트 - 골드. CTA, 강조 숫자, 아이콘)
--accent-gold-hover: #D4B87A (골드 호버)
--accent-gold-dim: rgba(201, 169, 110, 0.15) (골드 글로우/배경 효과)

--gradient-overlay: linear-gradient(180deg, transparent 0%, #0a0a0a 100%)
--gradient-gold: linear-gradient(135deg, #C9A96E 0%, #E8D5A3 50%, #C9A96E 100%)
```

### 타이포그래피

```
폰트 패밀리:
- 한글/본문: "Pretendard", -apple-system, sans-serif
- 영문 디스플레이: "Bebas Neue" 또는 "Playfair Display" (Google Fonts)

사이즈 스케일 (모바일 → 데스크톱):
- Hero 타이틀: 3rem → 6rem (48px → 96px)
- 섹션 타이틀: 1.5rem → 2.5rem (24px → 40px)
- 본문: 1rem → 1.125rem (16px → 18px)
- 캡션/라벨: 0.75rem → 0.875rem (12px → 14px)
- 숫자 강조: 2rem → 3.5rem (32px → 56px)

자간 (letter-spacing):
- 영문 디스플레이: 0.15em ~ 0.3em (넓게)
- 한글 본문: -0.02em (살짝 좁게)
- 라벨/캡션: 0.05em
```

---

## 페이지 구조 & 섹션 상세

### 전체 흐름

```
[Nav (고정)] → [Hero] → [Trust Badges] → [Before/After 갤러리]
→ [시술 종류 카드] → [후기 사진] → [위치/오시는길] → [Footer]
+ [모바일 하단 고정 CTA 바]
```

---

### 1. Navigation (고정 헤더)

**레이아웃:**

- 데스크톱: 왼쪽 로고 "CHULDU" + 오른쪽 "무료 상담" 골드 CTA 버튼
- 모바일: 왼쪽 로고 + 오른쪽 햄버거 메뉴
- 스크롤 시 backdrop-blur + 살짝 배경색 (glassmorphism 효과)
- `position: fixed`, `z-index: 50`

**네비 링크:**

- 갤러리 | 시술안내 | 후기 | 오시는길

---

### 2. Hero 섹션

**핵심 요소:**

- 전체 뷰포트 높이 (100vh, 100svh 모바일 대응)
- 왼쪽: 텍스트 영역 / 오른쪽: 대표 사진 (또는 모바일에서는 배경으로)

**텍스트 전환 애니메이션 (핵심 인터랙션):**

```
"CHULDU" ↔ "출두"    (0.8초 간격으로 페이드 또는 글리치 전환)
"MUNCHAN" ↔ "문찬"   (동일 패턴, 약간의 딜레이)
```

- 구현: Framer Motion의 AnimatePresence + 타이포 모션
- 전환 효과 옵션: fade + slight y-translate / 글리치(glitch) 효과 / 타이핑 효과 중 택1
- 무한 반복 루프

**기타 요소:**

- 슬로건: "당신의 영원한 멋, 젊음을 책임져드립니다"
- 서브텍스트: "홍대 SMP 전문"
- CTA 버튼: "무료 상담 예약" (골드)
- 대표 사진 위에 미세한 골드 그라디언트 오버레이 또는 비네팅

**애니메이션:**

- 페이지 로드 시 텍스트 staggered reveal (위에서 아래로 순차 등장)
- 대표 사진 fade-in + scale (1.05 → 1.0)

**반응형:**

- 데스크톱: 2컬럼 (텍스트 좌 / 사진 우) 또는 사진 배경 + 오버레이 텍스트
- 모바일: 사진 배경 풀스크린 + 하단에 텍스트 오버레이

---

### 3. Trust Badges (신뢰 배지 섹션)

**목적:** 히어로 바로 아래에서 즉시 전문성 인식 심기

**레이아웃:**

- 가로 스크롤 또는 그리드 (3~4개 항목)
- 각 항목: 사진/아이콘 + 짧은 라벨

**내용 (실제 내용은 대표가 제공하는 사진/텍스트로 교체):**

- 심사위원 활동 사진 + "SMP 심사위원"
- 운영위원 활동 사진 + "SMP 운영위원"
- 시술 건수 (예: "1,000+ 시술") — 숫자 강조, 골드 컬러
- 경력 (예: "N년 경력") — 숫자 강조, 골드 컬러

**디자인:**

- 다크 카드 위에 사진 + 하단 라벨
- 미세한 보더 또는 골드 accent line
- 배경: --bg-secondary

**애니메이션:**

- 스크롤 진입 시 카드들 staggered fade-in (좌→우)
- 숫자 카운트업 애니메이션 (0에서 목표 숫자까지)

**반응형:**

- 데스크톱: 가로 4열 그리드
- 모바일: 가로 스크롤 또는 2열 그리드

---

### 4. Before/After 갤러리

**목적:** 시술 결과를 사진으로 직접 보여주기 — 가장 강력한 전환 요소

**레이아웃 옵션 (트렌디 택1 또는 혼합):**

**옵션 A — 벤토 그리드 (Bento Grid):**

- 다양한 크기의 카드가 퍼즐처럼 배치
- 큰 카드 (2x2): 대표 Before/After
- 작은 카드 (1x1): 다양한 케이스
- 호버 시 확대 + 오버레이 정보

**옵션 B — 마키 슬라이더 (Marquee/Infinite Scroll):**

- Before/After 사진이 자동으로 흘러가는 무한 수평 스크롤
- 2줄 (상: Before 방향 → / 하: After 방향 ←) 교차 흐름
- 호버 시 일시정지

**옵션 C — 스크롤 트리거 갤러리:**

- 스크롤하면 사진이 하나씩 드러나는 방식
- 각 사진에 패럴렉스 효과 (사진과 텍스트 다른 속도)

**추천: 옵션 A (벤토) + 옵션 B (마키) 혼합**

- 상단: 벤토 그리드로 대표작 배치
- 하단: 마키 슬라이더로 추가 케이스 흘려보내기

**사진 처리:**

- next/image로 최적화 (WebP, lazy loading)
- 다크 배경에서 사진이 돋보이도록 미세한 보더 또는 그림자
- 사진 위 하단 그라디언트 오버레이 + 간단한 라벨 (예: "정수리 시술")

**애니메이션:**

- 벤토 카드: 스크롤 진입 시 scale(0.9→1) + opacity(0→1) staggered
- 마키: CSS animation으로 무한 수평 이동 (부드럽게, 60fps)
- 카드 호버: scale(1.03) + 밝기 증가 + 골드 보더 등장

**반응형:**

- 데스크톱: 벤토 4열 그리드
- 태블릿: 3열 또는 2열
- 모바일: 2열 그리드 + 마키는 1줄로

---

### 5. 시술 종류별 카드

**목적:** 고민별로 "나에게 해당되는" 시술을 찾게 하기

**카드 내용:**

- M자 이마
- 정수리 숱 보강
- 흉터 커버
- 무모증
- 헤어라인 교정
- (대표가 추가할 항목)

**레이아웃:**

- 가로 스크롤 카드 (모바일) / 그리드 (데스크톱)
- 각 카드: Before/After 썸네일 사진 + 시술명 + 한줄 설명
- 카드 비율: 세로형 (3:4 또는 4:5)

**디자인:**

- 카드 배경: --bg-elevated
- 사진 위 하단 그라디언트 + 시술명 오버레이
- 선택된/호버 카드에 골드 보더 또는 골드 글로우

**애니메이션:**

- 스크롤 진입 시 카드별 staggered slide-up + fade-in
- 호버: y축 살짝 위로 (-8px) + 그림자 확대 + 골드 accent

**반응형:**

- 데스크톱: 3열 그리드
- 태블릿: 2열
- 모바일: 가로 스크롤 (snap scrolling) + 인디케이터 점

---

### 6. 후기 (사진 기반)

**목적:** 실제 고객 후기를 사진으로 보여주기

**레이아웃:**

- 마키 슬라이더 (자동 흘러가는 후기 카드) 또는 캐러셀
- 각 카드: 후기 사진 (시술 결과 또는 고객 제공 사진) + 간단한 텍스트 (별점, 한줄 후기)

**디자인:**

- 카드 배경: --bg-elevated
- 인용부호 아이콘 (골드)
- 별점: 골드 채움

**애니메이션:**

- 마키 슬라이더: 자동 수평 스크롤 (느린 속도, 부드럽게)
- 호버 시 일시정지

**반응형:**

- 데스크톱: 카드 3개 동시 노출
- 모바일: 카드 1.2개 노출 (다음 카드 살짝 보이게)

---

### 7. 위치 / 오시는길

**레이아웃:**

- 2컬럼: 좌 = 지도 (카카오맵 또는 네이버맵 embed) / 우 = 주소, 교통 안내
- 배경: --bg-secondary

**내용:**

- 주소 (홍대 구체적 주소 — 대표 제공)
- 지하철 안내 (홍대입구역 n번 출구 도보 n분)
- 영업시간
- 전화번호

**디자인:**

- 지도에 다크 테마 적용 (카카오맵/네이버맵 커스텀 스타일 또는 그레이스케일 필터)
- 지도 위에 골드 마커 핀

**애니메이션:**

- 스크롤 진입 시 fade-in

**반응형:**

- 데스크톱: 2컬럼 (지도 좌 / 정보 우)
- 모바일: 1컬럼 (정보 위 / 지도 아래), 지도 높이 축소

---

### 8. Footer

**내용:**

- 로고 "CHULDU"
- 상호명, 대표자명, 사업자등록번호 (대표 제공)
- 주소, 전화번호
- SNS 링크 (인스타그램, 카카오톡)
- Copyright © 2026 CHULDU. All rights reserved.

**디자인:**

- 배경: #050505 (가장 어두운 톤)
- 간결하게, 법적 필수 정보 위주

---

### 9. 모바일 하단 고정 CTA 바

**구성:**

```
[ 카카오톡 ] [ 전화 ] [ 네이버예약 ] [ 인스타그램 ]
```

**디자인:**

- `position: fixed`, `bottom: 0`, `z-index: 50`
- 배경: rgba(10, 10, 10, 0.95) + backdrop-blur
- 4개 아이콘 버튼 균등 배치
- 카카오톡 버튼은 골드 강조 (메인 CTA)
- 상단에 미세한 골드 라인 (1px border-top)

**동작:**

- 모바일에서만 노출 (`lg:hidden`)
- 스크롤 방향 감지: 아래로 스크롤 시 숨김, 위로 스크롤 시 다시 노출 (선택사항)
- 각 버튼 탭 시 해당 앱/링크로 연결
  - 카카오톡: 카카오톡 채널 채팅 링크
  - 전화: `tel:` 링크
  - 네이버 예약: 네이버 예약 URL
  - 인스타그램: 인스타그램 프로필 URL

**데스크톱:**

- 하단 바 대신 헤더에 "무료 상담" CTA 버튼 유지
- 푸터에 4개 연락처 전체 노출

---

## 글로벌 애니메이션 & 인터랙션

### 스크롤 기반 애니메이션 (Framer Motion)

```
모든 섹션 공통:
- 뷰포트 진입 시 fade-in + slide-up (y: 40px → 0)
- threshold: 0.2 (20% 보일 때 트리거)
- duration: 0.6s ~ 0.8s
- ease: [0.25, 0.1, 0.25, 1] (cubic-bezier)
- stagger: 자식 요소 간 0.1s ~ 0.15s 딜레이
```

### 히어로 텍스트 전환 애니메이션

```
CHULDU ↔ 출두 전환:
- AnimatePresence + motion.span
- exit: opacity 0, y -20px
- enter: opacity 1, y 0
- 전환 간격: 2.5초 (표시 2초 + 전환 0.5초)
- 무한 루프

MUNCHAN ↔ 문찬:
- 동일 패턴, 0.3초 딜레이로 시차
```

### 마이크로 인터랙션

```
- 버튼 호버: scale(1.02) + 골드 글로우 (box-shadow)
- 카드 호버: translateY(-8px) + shadow 확대
- 이미지 호버: scale(1.05) + brightness(1.1)
- 링크 호버: 골드 컬러 전환 + underline 슬라이드
- 커서: 기본 (커스텀 커서는 선택사항)
```

### 페이지 전체 패럴렉스

```
- 배경 요소 (장식적 그라디언트 orb 등)가 스크롤에 따라 느리게 이동
- 사진과 텍스트의 미세한 속도 차이
- 과하지 않게, 미세하게 적용
```

---

## SEO 최적화

### 메타 태그

```html
<title>출두 CHULDU | 홍대 두피문신 SMP 전문 - 정문찬 아티스트</title>
<meta
  name="description"
  content="홍대 두피문신(SMP) 전문 출두. SMP 심사위원 정문찬의 자연스러운 두피문신으로 당신의 자신감을 되찾으세요. M자, 정수리, 흉터 커버 전문. 무료 상담 예약."
/>
<meta
  name="keywords"
  content="두피문신, SMP, 홍대 두피문신, 스칼프 마이크로피그먼테이션, 탈모, M자 이마, 정수리 탈모, 흉터 커버, 헤어라인, 출두, CHULDU, 정문찬"
/>
```

### Open Graph

```html
<meta property="og:title" content="출두 CHULDU | 홍대 두피문신 SMP 전문" />
<meta
  property="og:description"
  content="당신의 영원한 멋, 젊음을 책임져드립니다. SMP 심사위원 정문찬의 프리미엄 두피문신."
/>
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.jpg" />
<!-- 1200x630 대표 이미지 -->
<meta property="og:url" content="https://chuldu.kr" />
<!-- 도메인 확정 시 교체 -->
<meta property="og:locale" content="ko_KR" />
```

### 구조화 데이터 (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "출두 CHULDU",
  "description": "홍대 두피문신(SMP) 전문",
  "image": "/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "서울",
    "addressRegion": "마포구",
    "streetAddress": "홍대 상세주소 (대표 제공)"
  },
  "telephone": "대표 전화번호",
  "url": "https://chuldu.kr",
  "priceRange": "₩₩",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "리뷰 수"
  }
}
```

### 기술적 SEO

- `next-sitemap`으로 sitemap.xml 자동 생성
- robots.txt 설정
- Canonical URL 설정
- 이미지 alt 태그 전부 한국어로 (예: "M자 이마 두피문신 시술 전후")
- Core Web Vitals 최적화 (LCP < 2.5s, CLS < 0.1)
- next/image로 WebP 자동 변환 + lazy loading

---

## 프로젝트 구조 (Next.js App Router)

```
chuldu-landing/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타, 글로벌 스타일)
│   ├── page.tsx            # 메인 랜딩페이지
│   └── globals.css         # Tailwind + CSS 변수 + 커스텀 스타일
├── components/
│   ├── Nav.tsx             # 고정 헤더
│   ├── Hero.tsx            # 히어로 섹션 + 텍스트 전환 애니메이션
│   ├── TrustBadges.tsx     # 신뢰 배지 (심사위원/운영위원/숫자)
│   ├── Gallery.tsx         # Before/After 벤토그리드 + 마키
│   ├── ServiceCards.tsx    # 시술 종류별 카드
│   ├── Reviews.tsx         # 후기 슬라이더
│   ├── Location.tsx        # 위치/오시는길
│   ├── Footer.tsx          # 푸터
│   ├── MobileCTA.tsx       # 모바일 하단 고정 CTA 바
│   └── ui/
│       ├── ScrollReveal.tsx    # 스크롤 진입 애니메이션 래퍼
│       ├── CountUp.tsx         # 숫자 카운트업
│       ├── Marquee.tsx         # 마키 슬라이더
│       └── TextSwitch.tsx      # 텍스트 전환 애니메이션
├── public/
│   ├── images/             # 시술 사진, 대표 사진, 신뢰 배지 사진
│   ├── icons/              # 카카오톡, 네이버, 인스타 아이콘
│   └── og-image.jpg        # OG 이미지
├── tailwind.config.ts      # 커스텀 컬러, 폰트, 애니메이션 설정
├── next.config.js
├── next-seo.config.ts
└── package.json
```

---

## Tailwind 커스텀 설정

```ts
// tailwind.config.ts 핵심 설정
{
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
          elevated: '#1a1a1a',
          surface: '#2d2d2d',
        },
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#D4B87A',
          dim: 'rgba(201, 169, 110, 0.15)',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard', '-apple-system', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'], // 또는 Playfair Display
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
    },
  },
}
```

---

## 대표가 제공해야 할 에셋

### 필수

- [ ] 대표 프로필 사진 (히어로용, 고해상도)
- [ ] 심사위원/운영위원 활동 사진 (2~4장)
- [ ] Before/After 시술 사진 (최소 6~10세트)
- [ ] 시술 종류별 대표 사진 (M자, 정수리, 흉터 등)
- [ ] 고객 후기 사진 또는 캡처 (3~6개)
- [ ] 정확한 매장 주소
- [ ] 카카오톡 채널 링크
- [ ] 네이버 예약 링크
- [ ] 인스타그램 프로필 URL
- [ ] 전화번호
- [ ] 시술 건수, 경력 연수 (숫자)

### 선택

- [ ] 로고 파일 (있으면 SVG, 없으면 텍스트 로고로 대체)
- [ ] 시술 과정 사진 (상담→디자인→시술→결과)
- [ ] 사업자등록번호 (푸터용)
- [ ] 도메인 (예: chuldu.kr)
- [ ] OG 이미지용 대표 이미지 (1200x630)

---

## 성능 목표

- **Lighthouse 점수**: 90+ (Performance, SEO, Accessibility, Best Practices)
- **LCP (Largest Contentful Paint)**: < 2.5초
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms
- **이미지**: 전부 WebP, lazy loading, 적절한 srcset
- **번들 사이즈**: Tailwind purge + 코드 스플리팅으로 최소화

---

## 구현 우선순위

1. **Phase 1**: 프로젝트 세팅 + 디자인 시스템 (Tailwind 설정, 폰트, 컬러)
2. **Phase 2**: Hero 섹션 + Nav (텍스트 전환 애니메이션 포함)
3. **Phase 3**: Trust Badges + Before/After 갤러리
4. **Phase 4**: 시술 카드 + 후기 + 위치
5. **Phase 5**: 모바일 CTA 바 + Footer
6. **Phase 6**: 반응형 QA + 애니메이션 튜닝 + SEO + 성능 최적화
7. **Phase 7**: Vercel 배포 + 도메인 연결 + OG 이미지 + sitemap
