import { Star } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import Marquee from "./ui/Marquee";

const REVIEWS = [
  {
    id: 1,
    text: "솔직히 반신반의하면서 갔는데 결과 보고 소름 돋았습니다. 정수리 부분이 비어 보여서 몇 년째 모자만 쓰고 다녔거든요. 시술 후에 와이프가 먼저 알아보고 '머리 숱 많아졌다'고 하더라고요. 주변에서 SMP 한 줄 아무도 모릅니다.",
    rating: 5,
    author: "김○○ · 37세",
    type: "남성 정수리",
  },
  {
    id: 2,
    text: "M자가 심해서 이마가 넓어 보이는 게 항상 스트레스였는데, 문찬 원장님이 제 얼굴형에 맞게 라인을 잡아주셔서 진짜 자연스럽습니다. 시술하는 동안 하나하나 설명해주시고 거울로 확인도 시켜주셔서 불안감 없이 받았어요.",
    rating: 5,
    author: "이○○ · 42세",
    type: "남성 헤어라인",
  },
  {
    id: 3,
    text: "가르마 부분이 넓어서 머리 묶으면 두피가 훤히 보여서 스트레스였거든요. 시술 받고 나니까 가르마 라인이 자연스럽게 채워져서 이제 머리 묶어도 자신 있어요. 여성분들 진짜 강추합니다.",
    rating: 5,
    author: "박○○ · 29세",
    type: "여성 가르마",
  },
  {
    id: 4,
    text: "정수리부터 헤어라인까지 전체적으로 숱이 부족했는데 전체작업으로 한 번에 해결했습니다. 원장님이 부위별로 밀도 다르게 조절해주셔서 티 안 나게 자연스러워요. 주변에서 머리 스타일 바꿨냐고만 물어봅니다.",
    rating: 5,
    author: "최○○ · 40세",
    type: "전체작업",
  },
  {
    id: 5,
    text: "50대에 SMP 하는 게 좀 민망했는데 원장님이 편하게 해주셔서 감사했습니다. 정수리 쪽이 많이 비어있었는데 시술 후에 거울 볼 때마다 기분이 좋아요. 아들이 '아빠 10살은 젊어 보인다'고 하네요 ㅎㅎ",
    rating: 5,
    author: "정○○ · 52세",
    type: "남성 정수리",
  },
  {
    id: 6,
    text: "출산 후에 앞머리 숱이 확 줄어서 가르마가 휑했는데, 출두에서 시술 받고 완전 달라졌어요. 원장님이 기존 모발 방향이랑 맞춰서 해주시니까 정말 자연스럽습니다. 육아하느라 관리 못 해도 유지되니까 너무 편해요.",
    rating: 5,
    author: "한○○ · 34세",
    type: "여성 가르마",
  },
  {
    id: 7,
    text: "헤어라인이 점점 올라가서 이마가 넓어 보이는 게 고민이었는데, 한 번 시술로 라인이 확 살아났습니다. 가격도 합리적이고 무엇보다 결과가 자연스러워서 만족합니다. 진작 할 걸 그랬어요.",
    rating: 5,
    author: "송○○ · 25세",
    type: "남성 헤어라인",
  },
  {
    id: 8,
    text: "전체적으로 숱이 없어서 어떤 헤어스타일을 해도 두피가 비쳐 보였는데, 전체작업 받고 나서 완전히 달라졌습니다. 1차, 2차 나눠서 꼼꼼하게 해주시고 리터치까지 완벽했어요. 문찬 원장님 경력이 확실하니까 믿고 맡길 수 있었습니다.",
    rating: 5,
    author: "임○○ · 44세",
    type: "전체작업",
  },
  {
    id: 9,
    text: "홍대 근처에서 SMP 잘하는 곳 찾다가 인스타 보고 방문했는데, 시술 전후 사진 그대로더라고요. 과장 없이 보여주시는 게 신뢰가 갔어요. 정수리 채워 넣으니까 확실히 인상이 달라졌습니다.",
    rating: 5,
    author: "강○○ · 39세",
    type: "남성 정수리",
  },
  {
    id: 10,
    text: "처음에 아프지 않을까 걱정했는데 생각보다 괜찮았어요. 원장님이 중간중간 컨디션 체크해주시고, 시술 후 관리법도 자세히 알려주셨습니다. 3주 지난 지금 완전히 자리 잡았고 결과 너무 좋습니다!",
    rating: 5,
    author: "오○○ · 46세",
    type: "남성 헤어라인",
  },
];

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="flex h-72 w-80 flex-shrink-0 flex-col rounded-sm border border-white/5 bg-bg-elevated p-6 transition-all hover:border-gold/20 lg:w-96">
      <span className="text-2xl leading-none text-gold">&ldquo;</span>

      <div className="mt-2 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-gold text-gold"
          />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {review.text}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-xs text-text-muted">{review.author}</span>
        <span className="text-xs text-gold">{review.type}</span>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 lg:mb-16">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Reviews
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight lg:text-4xl">
              두피문신 고객 후기
            </h2>
            <p className="mt-3 text-sm text-text-secondary lg:text-base">
              실제 고객분들의 생생한 후기
            </p>
          </div>
        </ScrollReveal>
      </div>

      <Marquee className="py-2">
        <div className="flex gap-4 px-2">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
