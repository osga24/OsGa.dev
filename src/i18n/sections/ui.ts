import type { Localized, UiContent } from "../types";

export const uiContent = {
  "zh-TW": {
    switchLocaleLabel: "EN",
    switchLocaleHref: "/",
    themeLightLabel: "淺色",
    themeDarkLabel: "深色",
  },
  en: {
    switchLocaleLabel: "中文",
    switchLocaleHref: "/zh-tw",
    themeLightLabel: "Light",
    themeDarkLabel: "Dark",
  },
} satisfies Localized<UiContent>;
