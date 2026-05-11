import type { Localized, UiContent } from "../types";

export const uiContent = {
  "zh-TW": {
    switchLocaleLabel: "EN",
    switchLocaleHref: "/",
    themeLightLabel: "淺色",
    themeDarkLabel: "深色",
    projectExpandLabel: "更多",
    projectCollapseLabel: "收起",
    projectStackLabel: "// 技術",
    projectHighlightsLabel: "// 特點",
    projectLinkFallbackLabel: "View site",
    projectImagePlaceholderLabel: "Project Image",
    projectGithubButtonLabel: "在 GitHub 上查看",
  },
  en: {
    switchLocaleLabel: "中文",
    switchLocaleHref: "/zh-tw",
    themeLightLabel: "Light",
    themeDarkLabel: "Dark",
    projectExpandLabel: "More",
    projectCollapseLabel: "Less",
    projectStackLabel: "// Stack",
    projectHighlightsLabel: "// Highlights",
    projectLinkFallbackLabel: "Learn more",
    projectImagePlaceholderLabel: "Project Image",
    projectGithubButtonLabel: "View on GitHub",
  },
} satisfies Localized<UiContent>;
