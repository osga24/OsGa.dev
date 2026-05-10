import type { HeroContent, Localized } from "../types";

export const heroContent = {
  "zh-TW": {
    tagline: "#CTF #全端開發 #滲透測試 #社群活躍",
    intro:
      "目前就讀國立雲林科技大學資訊管理系（人工智慧技優專班）大二，具備網頁與系統開發、服務部署維運、滲透測試與安全強化等實務經驗，現任雲科大網路管理小組系統組組長。\n\n平時持續投入資安與 CTF 競賽，並曾於社群活動擔任講者或助教，期望透過實習累積更扎實的工程與資安落地經驗。",
  },
  en: {
    tagline:
      "#CTF #FullStackDevelopment #PenetrationTesting #ActiveInTechCommunities",
    intro:
      "I am a sophomore in the Department of Information Management at NYUST, with hands-on experience in web/system development, service operations, and cybersecurity.\n\nI actively participate in CTF competitions and tech communities, and hope to strengthen my engineering and practical security skills through an internship.",
  },
} satisfies Localized<HeroContent>;
