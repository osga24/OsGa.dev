import type { Localized, ProjectsContent } from "../types";

export const projectsContent = {
  "zh-TW": {
    projectsTitle: "Projects",
    projectItems: [
      {
        title: "osga.dev",
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
    ],
  },
  en: {
    projectsTitle: "Projects",
    projectItems: [
      {
        title: "osga.dev",
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
    ],
  },
} satisfies Localized<ProjectsContent>;
