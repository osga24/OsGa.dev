export type Locale = "zh-TW" | "en";

export type Localized<T> = Record<Locale, T>;

export type SocialLink = {
	label: string;
	href: string;
	icon: string;
};

export type SiteIdentityContent = {
	title: string;
	socialLinks: readonly SocialLink[];
};

export type ExperienceItem = {
	role: string;
	company: string;
	period: string;
	summary: string;
	highlights: readonly string[];
};

export type SeoContent = {
	seoTitle: string;
	seoDescription: string;
};

export type HeroContent = {
	tagline: string;
	intro: string;
};

export type ExperienceSectionContent = {
	experienceEyebrow: string;
	experienceTitle: string;
	experienceIntro: string;
	experience: readonly ExperienceItem[];
};

export type UiContent = {
	switchLocaleLabel: string;
	switchLocaleHref: string;
	themeLightLabel: string;
	themeDarkLabel: string;
};

export type SiteContent = SiteIdentityContent &
	SeoContent &
	HeroContent &
	ExperienceSectionContent &
	UiContent;
