export type Locale = "zh-TW" | "en";

export type Localized<T> = Record<Locale, T>;

export type SocialLink = {
	label: string;
	href: string;
	icon: string;
};

export type InfoItem = {
	label: string;
	value: string;
	href?: string;
};

export type InfoSection = {
	title?: string;
	items: readonly InfoItem[];
};

export type SiteIdentityContent = {
	title: string;
	socialLinks: readonly SocialLink[];
};

export type SeoContent = {
	seoTitle: string;
	seoDescription: string;
};

export type HeroContent = {
	tagline: string;
	intro: string;
	infoSections: readonly InfoSection[];
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
	UiContent;
