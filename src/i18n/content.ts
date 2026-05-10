import { certificationsContent } from "./sections/certifications";
import { experienceContent } from "./sections/experience";
import { heroContent } from "./sections/hero";
import { seoContent } from "./sections/seo";
import { uiContent } from "./sections/ui";
import type { Locale, SiteContent } from "./types";
import { siteIdentityContent } from "./shared/site-identity";

export type {
	CertificationItem,
	CertificationsContent,
	ExperienceContent,
	ExperienceItem,
	HeroContent,
	InfoSection,
	Locale,
	QuickLink,
	SeoContent,
	SiteContent,
	SocialLink,
	UiContent,
} from "./types";

export const contentByLocale: Record<Locale, SiteContent> = {
	"zh-TW": {
		...siteIdentityContent,
		...certificationsContent["zh-TW"],
		...experienceContent["zh-TW"],
		...seoContent["zh-TW"],
		...heroContent["zh-TW"],
		...uiContent["zh-TW"],
	},
	en: {
		...siteIdentityContent,
		...certificationsContent.en,
		...experienceContent.en,
		...seoContent.en,
		...heroContent.en,
		...uiContent.en,
	},
};

export const getSiteContent = (locale: Locale) => contentByLocale[locale];
