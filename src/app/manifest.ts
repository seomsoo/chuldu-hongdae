import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "출두 CHULDU | 홍대 두피문신 SMP 전문",
    short_name: "출두 CHULDU",
    description:
      "홍대 두피문신(SMP) 전문 출두. SMP 심사위원 정문찬의 자연스러운 두피문신.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
