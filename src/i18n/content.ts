export type SocialLink = {
	label: string;
	href: string;
	icon: "github" | "x" | "linkedin";
};

export type ExperienceItem = {
	role: string;
	company: string;
	period: string;
	summary: string;
	highlights: readonly string[];
};

export type SiteContent = {
	seoTitle: string;
	seoDescription: string;
	title: string;
	tagline: string;
	intro: string;
	experienceEyebrow: string;
	experienceTitle: string;
	experienceIntro: string;
	switchLocaleLabel: string;
	switchLocaleHref: string;
	themeLightLabel: string;
	themeDarkLabel: string;
	socialLinks: readonly SocialLink[];
	experience: readonly ExperienceItem[];
};

export const contentByLocale = {
	"zh-TW": {
		seoTitle: "OsGa",
		seoDescription: "個人網站",
		title: "OsGa",
		tagline: "軟體工程師與設計師",
		intro:
			"這是一個簡單的單頁範例：名稱先以放大的狀態出現，收斂後再帶出其餘內容，下面直接接工作經歷區塊。",
		experienceEyebrow: "工作經歷",
		experienceTitle: "osga.dev 經歷範例",
		experienceIntro:
			"先做成同頁的簡單版本，之後你可以把這裡替換成真實公司、職稱、年份與成果。",
		switchLocaleLabel: "EN",
		switchLocaleHref: "/",
		themeLightLabel: "淺色",
		themeDarkLabel: "深色",
		socialLinks: [
			{
				label: "GitHub",
				href: "https://github.com/",
				icon: "github",
			},
			{
				label: "X",
				href: "https://x.com/",
				icon: "x",
			},
			{
				label: "LinkedIn",
				href: "https://linkedin.com/",
				icon: "linkedin",
			},
		],
		experience: [
			{
				role: "產品工程師",
				company: "osga.dev",
				period: "2024 - 現在",
				summary:
					"以個人網站作為實驗場，整理設計與工程之間的個人方法論，並持續打磨前端互動與敘事方式。",
				highlights: [
					"建立輕量的 Astro 網站架構。",
					"實作首頁字樣縮放與內容展開的互動流程。",
					"把作品集與個人介紹收斂成較一致的視覺語言。",
				],
			},
			{
				role: "前端工程師",
				company: "Demo Studio",
				period: "2022 - 2024",
				summary:
					"負責品牌頁、活動頁與設計系統元件，重點放在效能、重用性與交付穩定度。",
				highlights: [
					"推出多個行銷頁與活動微網站。",
					"把高保真設計稿轉成可維護的元件。",
					"降低 UI 重工並改善頁面效能。",
				],
			},
		],
	},
	en: {
		seoTitle: "OsGa",
		seoDescription: "Personal site",
		title: "OsGa",
		tagline: "software engineer & designer",
		intro:
			"This is a simple one-page example: the wordmark starts oversized, settles into place, and the rest of the page reveals into a work experience section.",
		experienceEyebrow: "Work Experience",
		experienceTitle: "osga.dev experience demo",
		experienceIntro:
			"A simple same-page version for now. You can replace this with real companies, titles, years, and outcomes later.",
		switchLocaleLabel: "中文",
		switchLocaleHref: "/zh-tw",
		themeLightLabel: "Light",
		themeDarkLabel: "Dark",
		socialLinks: [
			{
				label: "GitHub",
				href: "https://github.com/",
				icon: "github",
			},
			{
				label: "X",
				href: "https://x.com/",
				icon: "x",
			},
			{
				label: "LinkedIn",
				href: "https://linkedin.com/",
				icon: "linkedin",
			},
		],
		experience: [
			{
				role: "Product Engineer",
				company: "osga.dev",
				period: "2024 - Present",
				summary:
					"Using a personal site as a sandbox for frontend craft, interaction direction, and the overlap between design and engineering.",
				highlights: [
					"Set up a lightweight Astro site architecture.",
					"Built the landing wordmark scale-down and staged content reveal.",
					"Refined portfolio storytelling into a more consistent visual system.",
				],
			},
			{
				role: "Frontend Engineer",
				company: "Demo Studio",
				period: "2022 - 2024",
				summary:
					"Worked on marketing sites, branded launches, and design-system components with an emphasis on performance and maintainability.",
				highlights: [
					"Shipped landing pages and campaign microsites.",
					"Translated high-fidelity concepts into maintainable UI components.",
					"Reduced UI rework and improved page performance.",
				],
			},
		],
	},
} as const satisfies Record<string, SiteContent>;

export type Locale = keyof typeof contentByLocale;
