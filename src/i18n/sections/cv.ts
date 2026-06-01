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
    nameAlt: "Yo-Rei Huang / OsGa",
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
      "雲科大資訊管理系學生，專注於資訊安全、全端開發與基礎架構實務。興趣領域涵蓋滲透測試、DevOps、網路維運與 Web 應用開發，具備 CTF 競賽、校園網路與系統維運、內部工具開發、資安教學、技術演講與攻防演練經驗。擅長結合攻防思維、開發能力與維運經驗，從漏洞分析、系統建置到服務改善，解決實務場景中的安全與工程問題。",
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
        role: "系統組組長 / 各單位網管開發工讀生",
        bullets: [
          "擔任網路管理小組系統組組長，協調日常維運、工作分派與跨單位技術支援。",
          "負責校園網路服務、伺服器、Linux 系統與內部服務的維運、部署與問題排查。",
          "提供校內單位與學生網路設定支援，協助國內外生解決連線問題，並針對單位需求提出網路架構規劃建議。",
          "維護與開發校內單位網站及相關服務，協助改善服務穩定性、可維護性與使用體驗。",
        ],
      },
      {
        org: "國立雲林科技大學 - 資安與滲透測試",
        period: "2024 - 2025",
        role: "資安組工讀生",
        bullets: [
          "協助執行校內單位服務弱點掃描，整理弱點結果並進行風險初步分析。",
          "針對 Web 服務與系統設定問題進行檢測，協助單位確認弱點成因與修復方向。",
          "協助校內單位進行弱點修復、設定調整與提供資安改善，提升服務安全性。",
        ],
      },
      {
        org: "行政院網路攻防演練 / 教育體系資安攻防演練",
        period: "2025 - 2026",
        role: "紅隊演練攻擊手",
        bullets: [
          "於授權攻防演練環境中進行安全測試，協助驗證系統防護成效與潛在風險。",
          "運用滲透測試方法進行弱點檢測、攻擊路徑分析與風險整理。",
          "彙整測試結果與改善建議，協助提升偵測、防護與應變能力。",
        ],
      },
    ],
    projects: [
      {
        name: "SITCON 2026",
        href: "https://sitcon.org/2026",
        desc: "參與官方網站與活動系統開發，負責官網、大地遊戲、CFP 頁面與贊助徵求書等功能與頁面建置，技術包含 Astro、Next.js、Go 與 Three.js。",
      },
      {
        name: "NYUST ICS",
        href: "https://nyust-ics.osga.dev",
        desc: "雲科大課表轉換工具，可將 DOCX 課表解析為 ICS 行事曆檔，支援課程時間解析、預覽與瀏覽器端處理，降低手動建立行事曆的成本。",
      },
      {
        name: "QuickJump",
        href: "https://github.com/osga24/Quick-Jump",
        desc: "Bash / Zsh 命令列工具，透過自訂 hotkey 快速跳轉常用資料夾，支援 shell 整合、自動補全、JSON 設定與安裝腳本，改善命令列工作流程效率。",
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
      "創辦並擔任雲科大資訊安全研究社（YunHack）首屆社長，亦為校內網路管理小組（YunNET）成員 / 系統組組長，推動校內資安與網路維運社群發展。",
      "累積 30+ 場技術演講與工作坊，主題涵蓋 CTF、Linux、Web 安全、Discord Bot 開發與開發工作流，曾在 SITCON 2025 / 2026、MOPCON 2025、HITCON CTF、資安署等場合分享。",
      "擔任 SITCON 2026 開發組副組長、TWNOG 7 Infra 組、MOPCON 2025 開發組、HITCON 活動組、SITCON Camp 2025 隊輔組組長。",
      "擔任 AIS3 Juniors 助教、SCIST 資安助教 / 出題者、THJCC 創辦人 / 出題者，長期投入資安教育、題目設計與社群推廣。",
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
          "Python、TypeScript、JavaScript、Shell、Next.js、Astro、FastAPI、Express.js、Go",
      },
      {
        label: "基礎設施 / 網路",
        value:
          "Linux 系統管理、Docker 服務部署、監控、日誌調查、備份還原、TCP/IP、DNS、DHCP、NAT、防火牆策略、路由器 / 交換器設定",
      },
      {
        label: "DevOps / 開發流程自動化",
        value:
          "自動化腳本、部署流程設計、CI/CD 、Git / GitHub 、內部工具開發、維運流程優化",
      },
    ],
  },
};
