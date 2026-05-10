import type { HeroContent, Localized } from "../types";

export const heroContent = {
  "zh-TW": {
    tagline: "#CTF Player #全端開發 #滲透測試 #社群活躍",
    intro:
      "你好，我是 OsGa。熱愛網頁與系統開發、服務部署維運、滲透測試與安全強化等相關技術，並具備實務經驗。平時持續投入資安與 CTF 競賽，也樂於在社群中分享開發與資安實務。",
    infoSections: [
      {
        items: [
          {
            label: "Email",
            value: "hi@osga.dev",
            href: "mailto:hi@osga.dev",
          },
          {
            label: "Bio",
            value: "國立雲林科技大學 資訊管理系（人工智慧技優專班）",
          },
        ],
      },
    ],
  },
  en: {
    tagline: "#CTF Player #Development #PenTest #TechCommunities",
    intro:
      "Hi, I'm OsGa — passionate and experienced in web/system development, service operations, and cybersecurity. Active in CTF competitions and tech communities.",
    infoSections: [
      {
        items: [
          {
            label: "Email",
            value: "hi@osga.dev",
            href: "mailto:hi@osga.dev",
          },
          {
            label: "Bio",
            value:
              "National Yunlin University of Science and Technology - IM(AI)",
          },
        ],
      },
    ],
  },
} satisfies Localized<HeroContent>;
