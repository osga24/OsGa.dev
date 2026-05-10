export type Locale = "zh-TW" | "en";

export type Localized<T> = Record<Locale, T>;

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type QuickLink = {
  label: string;
  href: string;
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
  quickLinks: readonly QuickLink[];
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

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
};

export type ExperienceContent = {
  experienceTitle: string;
  experienceItems: readonly ExperienceItem[];
};

export type CertificationItem = {
  date: string;
  name: string;
  issuer: string;
  id: string;
};

export type CertificationsContent = {
  certificationsTitle: string;
  certificationItems: readonly CertificationItem[];
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
  ExperienceContent &
  CertificationsContent &
  UiContent;
