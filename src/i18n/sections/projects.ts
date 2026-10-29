import type { Localized, ProjectsContent } from "../types";

export const projectsContent = {
  "zh-TW": {
    projectsTitle: "Projects",
    projectsPageHref: "/zh-tw/projects",
    projectsPageTitle: "Projects",
    projectsPageLead: "OsGa 的所有專案。",
    projectsViewAllLabel: "查看全部專案",
    projectsPageListTitle: "全部專案",
    projectsCloseLabel: "關閉",
    projectsBackLabel: "← 返回首頁",
    projectItems: [
      {
        title: "selfTMP",
        pinned: true,
        summary: "可自行部署的臨時分享服務，整合文字暫存、檔案暫存與短連結。",
        description:
          "以 Go 建置的輕量自架暫存分享工具，將 Pastebin、檔案暫存與短網址整合在同一個服務中。支援自訂短連結 ID、到期時間、一次性連結、密碼保護與管理後台，適合放在反向代理後方作為個人或小團隊的私有分享入口。",
        imageSrc: "/project/project-selfTMP.webp",
        imageAlt: "selfTMP 專案封面",
        stack: ["Go", "SQLite", "Docker"],
        highlights: [
          "整合文字、檔案與短連結分享",
          "支援自訂 slug、TTL、一次性連結與密碼保護",
          "單一 Go binary 搭配 SQLite，部署簡單",
        ],
        githubHref: "https://github.com/osga24/selfTMP",
      },
      {
        title: "osga.dev",
        pinned: true,
        summary: "個人網站，整理競賽、分享專案等經歷。",
        description:
          "以 Astro 建置的個人網站，聚焦快速載入、雙語內容管理與可維護的 section-based 結構，作為個人品牌與技術成果的主要入口。",
        imageSrc: "/project/project-osga-dev.webp",
        imageAlt: "osga.dev 專案封面",
        stack: ["Astro", "TypeScript", "CSS"],
        highlights: ["支援中英文切換", "以元件化 section 提高維護性"],
        href: "https://osga.dev",
        hrefLabel: "View site",
        githubHref: "https://github.com/osga24/OsGa.dev",
      },
      {
        title: "SITCON 2026",
        org: "SITCON",
        pinned: true,
        summary: "SITCON 2026 的官方網站、大地遊戲及 CFP、CFS。",
        description:
          "參與 SITCON 2026 相關網站與活動系統開發，包含官方網站、大地遊戲、徵稿頁面與贊助徵求書。專案採用多 repo 維護不同子站與功能，支援活動資訊呈現、徵稿流程、贊助資訊公開與現場互動體驗。",
        imageSrc: "/project/project-sitcon-2026.webp",
        imageAlt: "SITCON 2026 專案封面",
        stack: ["Astro", "Next.js", "Go", "Three.js"],
        highlights: [
          "以互動式設計提升瀏覽體驗與活動參與感",
          "透過會場任務機制促進會眾、攤位與參與者交流",
          "將招募文件網頁化，打造比 PDF 更具識別度的閱讀體驗",
        ],
        href: "https://sitcon.org/2026",
        hrefLabel: "View site",
        githubHref: "https://github.com/sitcon-tw/2026",
      },
      {
        title: "NYUST ICS",
        pinned: true,
        summary: "雲科大課表轉換工具，將課表文件轉換為 ICS 行事曆檔案。",
        description:
          "為雲林科技大學學生設計的課表轉換工具，可將 DOCX 課表文件解析並轉換為 ICS 格式，方便匯入行事曆應用。支援課程資訊解析、連續課程合併、課表預覽與瀏覽器端處理，降低學生手動建立行事曆的成本。",
        imageSrc: "/project/project-nyust-ics.webp",
        imageAlt: "NYUST ICS 專案封面",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        highlights: [
          "將 DOCX 課表轉換為 ICS 行事曆檔案",
          "自動解析課程時間、地點與名稱，並合併連續課程時段",
          "在瀏覽器端完成處理，無需註冊即可快速使用",
        ],
        href: "https://nyust-ics.osga.dev",
        hrefLabel: "View site",
        githubHref: "https://github.com/osga24/NYUST-ICS",
      },
      {
        title: "AetherClub Panel",
        org: "2o4 Studio",
        summary: "Discord 社群服務平台的營運後台與 Discord Bot。",
        description:
          "為 AetherClub 從舊系統遷移而重新打造的營運面板，以 Discord OAuth2 登入並驗證伺服器成員身分，依老闆、陪玩、客服與管理員角色提供不同工作區，管理訂單、優惠券、餘額、收入、帳本與排行榜。另外開發搭配的 Discord Bot，處理新成員歡迎訊息、自動語音房與身份組提及私訊。",
        imageSrc: "/project/project-aetherclub.webp",
        imageAlt: "AetherClub 專案封面",
        stack: ["Go", "React", "TypeScript", "PostgreSQL", "Discord.js"],
        highlights: [
          "Discord OAuth2 登入、伺服器成員驗證與伺服器端 session",
          "訂單、優惠券、餘額轉移、提領審核與活動系統等營運功能",
          "從 Supabase 一次性匯入至 PostgreSQL，並以虛擬化表格與手機卡片版面改善效能與體驗",
          "Bot 支援歡迎 Embed、自動建立個人語音房與身份組提及私訊",
        ],
      },
      {
        title: "雲科諮商輔導中心網站",
        org: "YunTech Counseling Center",
        summary: "國立雲林科技大學諮商輔導中心的新版官方網站與內容管理後台。",
        description:
          "以 Next.js 16 與 Payload CMS 3 建置的全端網站，前台、後台與 API 整合在同一個程式中。依中心官方網站架構與品牌重新設計，匯入舊站真實內容完成正式遷移，並以 Docker、Caddy 與自架 runner 建立 CI/CD 部署流程。",
        imageSrc: "/project/project-yuntech-counseling.webp",
        imageAlt: "雲科諮商輔導中心網站專案封面",
        stack: ["Next.js", "Payload CMS", "PostgreSQL", "Docker", "Caddy"],
        highlights: [
          "依官方網站地圖與品牌規範重新設計前台與導覽 mega menu",
          "細分至帳號層級的編輯權限，方便中心人員維護內容",
          "GHCR 映像、自架 runner 部署、HTTPS staging 與備份腳本",
        ],
      },
      {
        title: "YunNET Support Discord Bot",
        org: "YunNET",
        summary: "雲科宿網網管小組的 Discord 線上協助 Ticket 系統。",
        description:
          "雲科網管小組使用的 Discord Bot，住宿生透過按鈕與表單填寫學號、床位與問題後，自動建立私人報修頻道並拉入網管成員。支援關閉、重開、刪除 Ticket 與訊息編輯刪除紀錄，並負責對話紀錄匯出與部署流程。",
        stack: ["TypeScript", "Discord.js", "MongoDB", "Docker"],
        highlights: [
          "Modal 表單開單並自動建立私人報修頻道",
          "匯出含編輯與刪除歷史的 HTML / PDF 對話紀錄",
          "以自架 runner 自動部署到伺服器",
        ],
      },
      {
        title: "SITCON Podcast",
        org: "SITCON",
        summary: "SITCON Podcast「學生戰鬥機」的集數連結頁面。",
        description:
          "為 SITCON Podcast「學生戰鬥機」開發的靜態集數頁面，讀取 RSS 列出各集內容，並將每一集導向 Spotify、YouTube 與 Apple Podcasts 等平台，讓聽眾能快速找到想聽的集數。",
        imageSrc: "/project/project-sitcon-podcast.webp",
        imageAlt: "SITCON Podcast 專案封面",
        stack: ["HTML", "CSS", "JavaScript", "RSS"],
        highlights: [
          "解析 RSS 自動產生集數列表",
          "各集導向 Spotify、YouTube、Apple Podcasts",
        ],
        href: "https://sitcon.org/podcast/",
        hrefLabel: "View site",
        githubHref: "https://github.com/sitcon-tw/podcast",
      },
      {
        title: "QuickJump",
        summary: "命令列資料夾快速跳轉工具，透過 hotkey 提升終端機操作效率。",
        description:
          "QuickJump 是一個 Bash / Zsh 命令列工具，可為常用資料夾建立自訂 hotkey，快速切換目錄並減少重複輸入 cd 指令的成本。支援自動補全、JSON 設定檔與安裝腳本，適合優化日常開發工作流。",
        stack: ["Shell", "Bash", "Zsh", "jq"],
        highlights: [
          "以自訂 hotkey 快速跳轉常用資料夾",
          "支援 Bash / Zsh 整合與自動補全",
          "使用 JSON 設定檔管理路徑",
        ],
        githubHref: "https://github.com/osga24/Quick-Jump",
      },
      {
        title: "YunTech MIS Website Infra",
        org: "YunTech MIS",
        summary: "雲科資管系網站前端的容器化部署。",
        description:
          "雲科資管系以 Next.js 開發的新網站前端，負責加入 Docker Compose 設定，讓專案能以容器方式一致地建置與部署。",
        stack: ["Next.js", "Docker"],
        highlights: ["以 Docker Compose 容器化前端部署"],
      },
    ],
  },
  en: {
    projectsTitle: "Projects",
    projectsPageHref: "/projects",
    projectsPageTitle: "Projects",
    projectsPageLead: "Everything OsGa has built so far.",
    projectsViewAllLabel: "View all projects",
    projectsPageListTitle: "All projects",
    projectsCloseLabel: "Close",
    projectsBackLabel: "← Back home",
    projectItems: [
      {
        title: "selfTMP",
        pinned: true,
        summary:
          "A self-hostable temporary sharing service that combines text snippets, file sharing, and short links.",
        description:
          "A lightweight self-hosted temporary sharing tool built with Go, combining Pastebin-style text snippets, temporary file sharing, and short URLs in one service. It supports custom short link IDs, expiration times, one-time links, password protection, and an admin dashboard, making it suitable as a private sharing portal for individuals or small teams behind a reverse proxy.",
        imageSrc: "/project/project-selfTMP.webp",
        imageAlt: "selfTMP project cover",
        stack: ["Go", "SQLite", "Docker"],
        highlights: [
          "Combines text, file, and short link sharing",
          "Supports custom slugs, TTL, one-time links, and password protection",
          "Easy to deploy with a single Go binary and SQLite",
        ],
        githubHref: "https://github.com/osga24/selfTMP",
      },
      {
        title: "osga.dev",
        pinned: true,
        summary:
          "Personal website showcasing competition achievements and sharing project experiences.",
        description:
          "A personal site built with Astro, focused on fast loading, bilingual content management, and a maintainable section-based structure for presenting work and identity.",
        imageSrc: "/project/project-osga-dev.webp",
        imageAlt: "Cover image for the osga.dev project",
        stack: ["Astro", "TypeScript", "CSS"],
        highlights: [
          "Bilingual content support",
          "Centralized i18n-driven content",
          "Component-based section architecture",
        ],
        href: "https://osga.dev",
        hrefLabel: "View site",
        githubHref: "https://github.com/osga24/OsGa.dev",
      },
      {
        title: "SITCON 2026",
        org: "SITCON",
        pinned: true,
        summary: "Official website, venue game, CFP, and CFS for SITCON 2026.",
        description:
          "Contributed to the development of SITCON 2026’s websites and event systems, including the official website, venue game, call for proposals, and call for sponsorship. The project uses multiple repositories to maintain separate sub-sites and features, supporting event information, proposal submission, sponsorship information, and on-site interactive experiences.",
        imageSrc: "/project/project-sitcon-2026.webp",
        imageAlt: "SITCON 2026 project cover",
        stack: ["Astro", "Next.js", "Go", "Three.js"],
        highlights: [
          "Enhanced browsing experience and event engagement through interactive design",
          "Designed venue-based missions to encourage interaction among attendees, booths, and participants",
          "Turned sponsorship materials into a distinctive web experience beyond a traditional PDF",
        ],
        href: "https://sitcon.org/2026",
        hrefLabel: "View site",
        githubHref: "https://github.com/sitcon-tw/2026",
      },
      {
        title: "NYUST ICS",
        pinned: true,
        summary:
          "A timetable conversion tool for NYUST students that converts course schedule files into ICS calendar files.",
        description:
          "A timetable conversion tool designed for National Yunlin University of Science and Technology students. It parses DOCX course schedule files and converts them into ICS format, making it easy to import schedules into calendar apps. It supports course information parsing, consecutive class merging, timetable preview, and browser-side processing, reducing the effort required to manually create calendar events.",
        imageSrc: "/project/project-nyust-ics.webp",
        imageAlt: "NYUST ICS project cover",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        highlights: [
          "Converts DOCX course schedules into ICS calendar files",
          "Automatically parses course times, locations, and names, then merges consecutive class periods",
          "Runs entirely in the browser, allowing quick use without registration",
        ],
        href: "https://nyust-ics.osga.dev",
        hrefLabel: "View site",
        githubHref: "https://github.com/osga24/NYUST-ICS",
      },
      {
        title: "AetherClub Panel",
        org: "2o4 Studio",
        summary:
          "Operations panel and Discord bot for a Discord-based community service.",
        description:
          "A rebuilt operations panel for AetherClub, replacing its previous system. Users sign in with Discord OAuth2 and are verified as server members, then land in role-specific workspaces for bosses, companions, support, and admins to manage orders, coupons, balances, income, ledgers, and rankings. A companion Discord bot handles welcome messages, auto-created voice rooms, and role-mention DMs.",
        imageSrc: "/project/project-aetherclub.webp",
        imageAlt: "AetherClub project cover",
        stack: ["Go", "React", "TypeScript", "PostgreSQL", "Discord.js"],
        highlights: [
          "Discord OAuth2 sign-in, server membership checks, and server-side sessions",
          "Orders, coupons, balance transfers, withdrawal review, and event systems",
          "One-shot Supabase to PostgreSQL import, plus virtualized tables and mobile card layouts",
          "Bot with welcome embeds, auto-created voice rooms, and role-mention DMs",
        ],
      },
      {
        title: "YunTech Counseling Center Website",
        org: "YunTech Counseling Center",
        summary:
          "The new official website and CMS for the YunTech Counseling Center.",
        description:
          "A full-stack site built with Next.js 16 and Payload CMS 3, with the public site, admin panel, and API in one app. It was redesigned around the center's official site map and brand, migrated real content from the legacy site, and ships through a CI/CD pipeline using Docker, Caddy, and a self-hosted runner.",
        imageSrc: "/project/project-yuntech-counseling.webp",
        imageAlt: "YunTech Counseling Center website project cover",
        stack: ["Next.js", "Payload CMS", "PostgreSQL", "Docker", "Caddy"],
        highlights: [
          "Redesigned frontend and mega-menu navigation following the official site map and brand",
          "Per-account edit permissions so center staff can maintain content",
          "GHCR images, self-hosted runner deploys, HTTPS staging, and backup scripts",
        ],
      },
      {
        title: "YunNET Support Discord Bot",
        org: "YunNET",
        summary:
          "A Discord support ticket system for YunTech's dorm network team.",
        description:
          "A Discord bot used by YunTech's dorm network team. Residents fill in their student ID, bed, and issue through a button and form, and the bot opens a private repair channel with the network staff. It supports closing, reopening, and deleting tickets plus message edit and delete logs; my work covered transcript export and the deployment pipeline.",
        stack: ["TypeScript", "Discord.js", "MongoDB", "Docker"],
        highlights: [
          "Modal-based ticket creation with private repair channels",
          "HTML / PDF transcripts including edit and deletion history",
          "Automatic deploys to the server via a self-hosted runner",
        ],
      },
      {
        title: "SITCON Podcast",
        org: "SITCON",
        summary: "Episode link page for SITCON's podcast, 學生戰鬥機.",
        description:
          "A static episode page for SITCON's podcast 學生戰鬥機. It reads the RSS feed to list every episode and links each one to Spotify, YouTube, and Apple Podcasts so listeners can jump straight to it.",
        imageSrc: "/project/project-sitcon-podcast.webp",
        imageAlt: "SITCON Podcast project cover",
        stack: ["HTML", "CSS", "JavaScript", "RSS"],
        highlights: [
          "Generates the episode list from the RSS feed",
          "Links each episode to Spotify, YouTube, and Apple Podcasts",
        ],
        href: "https://sitcon.org/podcast/",
        hrefLabel: "View site",
        githubHref: "https://github.com/sitcon-tw/podcast",
      },
      {
        title: "QuickJump",
        summary:
          "A command-line folder jumping tool that improves terminal workflow efficiency with custom hotkeys.",
        description:
          "QuickJump is a Bash / Zsh command-line tool that lets users create custom hotkeys for frequently used folders, making it faster to switch directories and reducing repetitive cd commands. It supports autocompletion, JSON-based configuration, and installation scripts for a smoother development workflow.",
        stack: ["Shell", "Bash", "Zsh", "jq"],
        highlights: [
          "Quickly jump to frequently used folders with custom hotkeys",
          "Supports Bash / Zsh integration and autocompletion",
          "Manages paths through a JSON configuration file",
        ],
        githubHref: "https://github.com/osga24/Quick-Jump",
      },
      {
        title: "YunTech MIS Website Infra",
        org: "YunTech MIS",
        summary: "Containerized deployment for the YunTech MIS department site.",
        description:
          "The YunTech MIS department's new website frontend, built with Next.js. I added the Docker Compose setup so the project builds and deploys consistently in containers.",
        stack: ["Next.js", "Docker"],
        highlights: ["Containerized frontend deployment with Docker Compose"],
      },
    ],
  },
} satisfies Localized<ProjectsContent>;
