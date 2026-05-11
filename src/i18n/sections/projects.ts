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
    ],
  },
} satisfies Localized<ProjectsContent>;
