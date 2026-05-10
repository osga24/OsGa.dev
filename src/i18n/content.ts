import { experienceContent } from "./sections/experience";
import { heroContent } from "./sections/hero";
import { seoContent } from "./sections/seo";
import { uiContent } from "./sections/ui";
import type { Locale, SiteContent } from "./types";
import { siteIdentityContent } from "./shared/site-identity";

export type {
	ExperienceItem,
	HeroContent,
	Locale,
	SeoContent,
	SiteContent,
	SocialLink,
	UiContent,
} from "./types";

export const contentByLocale: Record<Locale, SiteContent> = {
	"zh-TW": {
		...siteIdentityContent,
		...seoContent["zh-TW"],
		...heroContent["zh-TW"],
		...experienceContent["zh-TW"],
		...uiContent["zh-TW"],
	},
	en: {
		...siteIdentityContent,
		...seoContent.en,
		...heroContent.en,
		...experienceContent.en,
		...uiContent.en,
	},
};

export const getSiteContent = (locale: Locale) => contentByLocale[locale];
