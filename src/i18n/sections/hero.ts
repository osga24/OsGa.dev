import type { HeroContent, Localized } from "../types";

export const heroContent = {
  "zh-TW": {
    tagline: "#CTF Player #全端開發 #滲透測試 #社群活躍",
    intro:
      "你好，我是 OsGa。熱愛網頁與系統開發、服務部署維運、滲透測試與安全強化等相關技術，並具備多項校內外實務經驗。平時持續投入資安與 CTF 競賽，也樂於在社群中分享開發與資安實務經驗。",
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
            value: [
              "國立雲林科技大學 資訊管理系（人工智慧技優專班）",
              "資訊安全研究社 1st - 社長",
              "網管小組 26th 成員 / 27th 系統組組長",
            ],
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
            value: [
              "National Yunlin University of Science and Technology - IM(AI)",
              "YunHack 1st - Leader",
              "YunNET 26th Member / 27th System leader",
            ],
          },
        ],
      },
    ],
  },
} satisfies Localized<HeroContent>;
