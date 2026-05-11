import type { Localized, SeoContent } from "../types";

export const seoContent = {
  "zh-TW": {
    seoTitle: "OsGa.dev",
    seoDescription: "OsGa 的個人網站",
  },
  en: {
    seoTitle: "OsGa.dev",
    seoDescription:
      "A guy into cybersecurity, network operations, development, and penetration testing.",
  },
} satisfies Localized<SeoContent>;
