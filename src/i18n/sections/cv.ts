export type CvLink = {
  label: string;
  href: string;
  icon: string;
};

export type CvEducationItem = {
  org: string;
  period: string;
  detail: string;
};

export type CvExperienceItem = {
  org: string;
  period: string;
  role: string;
  bullets: readonly string[];
};

export type CvProjectItem = {
  name: string;
  href?: string;
  desc: string;
};

export type CvAchievementGroup = {
  year: string;
  items: readonly string[];
};

export type CvSkillGroup = {
  label: string;
  value: string;
};

export type CvContent = {
  name: string;
  nameAlt: string;
  headline: string;
  location: string;
  contacts: readonly CvLink[];
  sectionLabels: {
    summary: string;
    education: string;
    experience: string;
    projects: string;
    achievements: string;
    community: string;
    skills: string;
    certifications: string;
  };
  summary: string;
  education: readonly CvEducationItem[];
  experience: readonly CvExperienceItem[];
  projects: readonly CvProjectItem[];
  achievements: readonly CvAchievementGroup[];
  community: readonly string[];
  certifications: string;
  skills: readonly CvSkillGroup[];
};

const contacts: readonly CvLink[] = [
  { label: "hi@osga.dev", href: "mailto:hi@osga.dev", icon: "lucide:mail" },
  { label: "osga.dev", href: "https://osga.dev", icon: "lucide:globe" },
  {
    label: "github.com/osga24",
    href: "https://github.com/osga24",
    icon: "simple-icons:github",
  },
  {
    label: "linkedin.com/in/osga",
    href: "https://linkedin.com/in/osga",
    icon: "simple-icons:linkedin",
  },
];

export const cvContent: Record<"zh-TW", CvContent> = {
  "zh-TW": {
    name: "黃宥睿",
    nameAlt: "Yo-Rui Huang / OsGa",
    headline: "滲透測試｜全端開發｜DevOps｜網路維運",
    location: "台灣，GMT+8",
    contacts,
    sectionLabels: {
      summary: "簡介",
      education: "學歷",
      experience: "實務經驗",
      projects: "代表專案",
      achievements: "競賽成就",
      community: "演講、教學與社群",
      skills: "技能",
      certifications: "證照",
    },
    summary:
      "雲科大資訊管理系學生，具備資安攻防、全端開發與校園網路維運經驗。參與校內弱點檢測及行政院、教育體系攻防演練，並投入 CTF 競賽與資安教學。開發實務涵蓋網站與 CMS 建置、身分驗證、資料遷移、容器化部署與 CI/CD，能從安全檢測、功能開發到服務維運處理實際需求。",
    education: [
      {
        org: "國立雲林科技大學",
        period: "2024 - 至今",
        detail: "資訊管理系 人工智慧技優專班",
      },
    ],
    experience: [
      {
        org: "國立雲林科技大學 - 網路管理與開發",
        period: "2025 - 至今",
        role: "網管小組第 27 屆系統組組長 / 第 28 屆副組長；各單位網管開發工讀生",
        bullets: [
          "協調網管小組日常維運、工作分派與跨單位技術支援，維護校園網路服務、Linux 伺服器與內部系統。",
          "支援諮商中心、工業管理系及資訊管理系的網站開發與網路維運，協助師生排查連線問題與規劃網路設定。",
          "建置網站內容管理、Docker 部署與自架 runner 自動部署流程，並開發宿網報修對話紀錄匯出功能。",
        ],
      },
      {
        org: "國立雲林科技大學 - 資安與滲透測試",
        period: "2024 - 至今",
        role: "資安組工讀生",
        bullets: [
          "執行校內服務弱點掃描與 Web / 系統設定檢測，整理風險、分析成因並提出修復方向。",
          "協助校內單位修復弱點、調整設定與改善服務安全性；完成三甲科技 2025 資安人才培訓計畫（2025 - 2026）。",
        ],
      },
      {
        org: "行政院網路攻防演練 / 教育體系資安攻防演練",
        period: "2025 - 至今",
        role: "行政院演練攻擊手（2025 - 2026）/ 教育體系攻防檢測員（2026 - 至今）",
        bullets: [
          "於授權演練環境進行弱點檢測、攻擊路徑分析與安全測試，驗證系統防護成效。",
          "彙整測試結果、風險與改善建議，協助提升偵測、防護與應變能力。",
        ],
      },
    ],
    projects: [
      {
        name: "雲科諮商輔導中心網站",
        desc: "以 Next.js、Payload CMS 與 PostgreSQL 建置新版官網、後台及 API，完成舊站內容遷移與帳號編輯權限設計；整合 Docker、Caddy、GHCR 與自架 runner 的 CI/CD 部署及備份流程。",
      },
      {
        name: "AetherClub Panel",
        desc: "以 Go、React 與 PostgreSQL 重建營運後台，整合 Discord OAuth2、成員驗證、角色工作區及訂單 / 帳務功能；完成 Supabase 資料遷移，並開發自動語音房等 Discord Bot 功能。",
      },
      {
        name: "SITCON 2026",
        href: "https://sitcon.org/2026",
        desc: "參與官方網站與活動系統開發，負責官網、大地遊戲、CFP 頁面與贊助徵求書等功能與頁面建置，技術包含 Astro、Next.js、Go 與 Three.js。",
      },
      {
        name: "selfTMP",
        href: "https://github.com/osga24/selfTMP",
        desc: "以 Go 建置的自架暫存分享服務，整合文字暫存、檔案暫存與短連結，支援自訂 slug、TTL、一次性連結與密碼保護，單一 binary 搭配 SQLite 部署簡單。",
      },
      {
        name: "NYUST ICS",
        href: "https://nyust-ics.osga.dev",
        desc: "雲科大課表轉換工具，可將 DOCX 課表解析為 ICS 行事曆檔，支援課程時間解析、預覽與瀏覽器端處理，降低手動建立行事曆的成本。",
      },
      {
        name: "YunNET Support Discord Bot",
        desc: "參與宿網 Discord 報修系統開發，負責含訊息編輯 / 刪除歷史的 HTML / PDF 對話紀錄匯出，並以 Docker 與自架 runner 建立自動部署流程。",
      },
    ],
    achievements: [
      {
        year: "2026",
        items: [
          "第 56 屆全國技能競賽 網路安全分區賽 中區佳作",
          "ITSA 生成式 AI 應用網頁設計競賽 第三名",
        ],
      },
      {
        year: "2025",
        items: [
          "HITCON CTF 精英交流賽 Rank 6",
          "CDX 資安攻防推廣交流賽 初賽第二名 / 決賽佳作",
          "AIS3 EOF 進階資安攻防演練 最佳藍色小精靈獎",
          "AIS3 HACKATHON 銅質獎",
          "大專校院資訊應用服務創新競賽 台灣大 AI 紅隊 eKYC 滲透創新組 第一名",
          "ITSA 生成式 AI 應用網頁設計競賽 佳作",
        ],
      },
      {
        year: "2024",
        items: ["AIS3 MyFirstCTF 銀質獎", "picoCTF Rank 281 / 6957"],
      },
      {
        year: "2023",
        items: ["第 53 屆全國技能競賽 網路安全分區賽 中區佳作"],
      },
      {
        year: "2022",
        items: ["第 52 屆全國技能競賽 資訊網路布建 南區金牌 / 全國第四名"],
      },
    ],
    community: [
      "創辦並擔任雲科大資訊安全研究社（YunHack）首屆社長；擔任網路管理小組（YunNET）第 27 屆系統組組長、第 28 屆副組長。",
      "累積 30+ 場技術演講與工作坊，主題涵蓋 CTF、Linux、Web 安全、Discord Bot 開發與開發工作流，曾在 SITCON 2025 / 2026、MOPCON 2025、HITCON CTF、資安署等場合分享。",
      "擔任 SITCON 2026 開發組副組長、TWNOG 7 Infra 組、MOPCON 2025 開發組、HITCON 活動組、SITCON Camp 2025 隊輔組組長。",
      "擔任 AIS3 2026 跨域資訊安全助教、AIS3 Junior 2024 - 2026 助教、雲科大 114 程式設計概念與方法助教，以及 SCIST 資安助教 / 出題者、THJCC 創辦人 / 出題者。",
    ],
    certifications:
      "Cisco Certified Support Technician Cybersecurity；Information Technology Specialist: Cybersecurity",
    skills: [
      {
        label: "資安",
        value:
          "CTF、Web 安全、滲透測試基礎、弱點掃描、漏洞分析、攻防演練、資安培訓與題目設計",
      },
      {
        label: "開發",
        value:
          "Python、TypeScript、JavaScript、Go、Shell、React、Next.js、Astro、FastAPI、Express.js、Payload CMS、PostgreSQL、SQLite、MongoDB",
      },
      {
        label: "基礎設施 / 網路",
        value:
          "Linux 系統管理、Docker 服務部署、監控、日誌調查、備份還原、TCP/IP、DNS、DHCP、NAT、防火牆策略、路由器 / 交換器設定",
      },
      {
        label: "DevOps / 開發流程自動化",
        value:
          "Git / GitHub、CI/CD、自架 runner、GHCR、Docker Compose、Caddy、自動化腳本、資料遷移、備份與部署流程設計",
      },
    ],
  },
};
