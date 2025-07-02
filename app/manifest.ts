import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hamd Ashraf - Professional Swimming Coach & Digital Content Creator",
    short_name: "Hamd Ashraf",
    description: "Professional swimming coach and digital content creator portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#14b8a6",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["business", "education", "sports"],
    lang: "en",
  }
}
