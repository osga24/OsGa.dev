import type { ExperienceContent, Localized } from "../types";

export const experienceContent = {
  "zh-TW": {
    experienceTitle: "工作經驗",
    experienceItems: [
      {
        period: "2026 - 至今",
        role: "網管工讀生",
        org: "國立雲林科技大學 資訊管理系",
      },
      {
        period: "2025 - 至今",
        role: "網管開發工讀生",
        org: "國立雲林科技大學 諮商中心",
      },

      {
        period: "2025 - 至今",
        role: "網管開發工讀生",
        org: "國立雲林科技大學 工業管理系",
      },
      {
        period: "2025 - 至今",
        role: "系統組組長",
        org: "國立雲林科技大學 網路管理小組",
      },

      {
        period: "2025 - 2026",
        role: "結業",
        org: "三甲科技 2025 資安人才培訓計畫",
      },

      {
        period: "2024 - 至今",
        role: "資安組工讀生",
        org: "國立雲林科技大學 圖資處",
      },
    ],
    otherRolesTitle: "其他身份與經驗",
    otherRolesItems: [
      {
        period: "2026",
        role: "跨域資訊安全 - 助教",
        org: "AIS3",
      },
      {
        period: "2024 - 2026",
        role: "助教",
        org: "AIS3 Junior",
      },
      {
        period: "2026 - 至今",
        role: "攻防檢測員",
        org: "教育體系資安攻防演練",
      },
      {
        period: "2025 - 2026",
        role: "攻防演練攻擊手",
        org: "行政院網路攻防演練",
      },
      {
        period: "2025 - 2026",
        role: "助教",
        org: "國立雲林科技大學 114 程式設計概念與方法",
      },
    ],
  },
  en: {
    experienceTitle: "Work Experience",
    experienceItems: [
      {
        period: "2026 - Present",
        role: "Network Management Assistant",
        org: "Department of Information Management, NYUST",
      },
      {
        period: "2025 - Present",
        role: "Network Development Assistant",
        org: "Counseling Center, NYUST",
      },
      {
        period: "2025 - Present",
        role: "Network Development Assistant",
        org: "Department of Industrial Management, NYUST",
      },
      {
        period: "2025 - Present",
        role: "System Team Lead",
        org: "Network Management Team, NYUST",
      },
      {
        period: "2025 - 2026",
        role: "Graduate Trainee",
        org: "AAASec 2025 Cybersecurity Talent Training Program",
      },
      {
        period: "2024 - Present",
        role: "Cybersecurity Assistant",
        org: "Office of Library and Information Services, NYUST",
      },
    ],
    otherRolesTitle: "Other Roles & Experiences",
    otherRolesItems: [
      {
        period: "2026",
        role: "Cross-Domain Cybersecurity - Teaching Assistant",
        org: "AIS3",
      },
      {
        period: "2024 - 2026",
        role: "Teaching Assistant",
        org: "AIS3 Junior",
      },
      {
        period: "2026 - Present",
        role: "Penetration Tester",
        org: "Education Sector Cyber Attack and Defense Exercise",
      },
      {
        period: "2025 - 2026",
        role: "Red Team Operator",
        org: "Executive Yuan Cyber Attack and Defense Exercise",
      },
      {
        period: "2025 - 2026",
        role: "Teaching Assistant",
        org: "Programming Concepts and Methods, NYUST",
      },
    ],
  },
} satisfies Localized<ExperienceContent>;
