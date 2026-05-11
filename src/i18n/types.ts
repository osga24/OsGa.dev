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
  value: string | readonly string[];
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

export type CompetitionItem = {
  year: string;
  content: string;
  teamName?: string;
};

export type CompetitionCategory = {
  label: string;
  items: readonly CompetitionItem[];
};

export type CompetitionsContent = {
  competitionsTitle: string;
  competitionCategories: readonly CompetitionCategory[];
};

export type PresentationItem = {
  date: string;
  content: string;
  topic: string;
  href?: string;
};

export type PresentationCategory = {
  label: string;
  items: readonly PresentationItem[];
};

export type PresentationsContent = {
  presentationsTitle: string;
  presentationCategories: readonly PresentationCategory[];
};

export type CommunityConferenceItem = {
  year: string;
  content: string;
  role: string;
};

export type CommunityConferenceContent = {
  communityConferenceTitle: string;
  communityConferenceItems: readonly CommunityConferenceItem[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  stack?: readonly string[];
  highlights?: readonly string[];
  href?: string;
  hrefLabel?: string;
  githubHref?: string;
};

export type ProjectsContent = {
  projectsTitle: string;
  projectItems: readonly ProjectItem[];
};

export type UiContent = {
  switchLocaleLabel: string;
  switchLocaleHref: string;
  themeLightLabel: string;
  themeDarkLabel: string;
  projectExpandLabel: string;
  projectCollapseLabel: string;
  projectStackLabel: string;
  projectHighlightsLabel: string;
  projectLinkFallbackLabel: string;
  projectImagePlaceholderLabel: string;
  projectGithubButtonLabel: string;
};

export type SiteContent = SiteIdentityContent &
  SeoContent &
  HeroContent &
  ExperienceContent &
  CertificationsContent &
  CompetitionsContent &
  PresentationsContent &
  ProjectsContent &
  CommunityConferenceContent &
  UiContent;
