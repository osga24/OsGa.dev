import type { ExperienceSectionContent, Localized } from "../types";

export const experienceContent = {
	"zh-TW": {
		experienceEyebrow: "工作經歷",
		experienceTitle: "osga.dev 經歷範例",
		experienceIntro:
			"先做成同頁的簡單版本，之後你可以把這裡替換成真實公司、職稱、年份與成果。",
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
		experienceEyebrow: "Work Experience",
		experienceTitle: "osga.dev experience demo",
		experienceIntro:
			"A simple same-page version for now. You can replace this with real companies, titles, years, and outcomes later.",
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
} satisfies Localized<ExperienceSectionContent>;
