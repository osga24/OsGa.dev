import type {
  CompetitionCategory,
  CompetitionItem,
  CompetitionsContent,
  Locale,
} from "../types";

type CompetitionCategoryKey = "ctf" | "development" | "other";

type CompetitionsLocalizedContent = {
  competitionsTitle: string;
  categoryLabels: Record<CompetitionCategoryKey, string>;
};

const competitionItemsByCategory: Record<
  CompetitionCategoryKey,
  readonly CompetitionItem[]
> = {
  ctf: [
    {
      year: "2026",
      content: "56屆 全國技能競賽 網路安全分區賽 / 中區佳作",
    },
    {
      year: "2025",
      content: "2025 HITCON CTF 精英交流賽 / Rank 6",
      teamName: "Blue Goblin",
    },
    {
      year: "2025",
      content: "CDX 資安攻防推廣交流賽 初賽第二 / 決賽佳作",
    },
    {
      year: "2025",
      content: "AIS3 EOF 進階資安攻防演練 / 最佳藍色小精靈獎",
      teamName: "希望這次可以進決賽><",
    },
    {
      year: "2024",
      content: "CGGC網路守護者挑戰賽",
      teamName: "測試隊伍",
    },
    {
      year: "2024",
      content: "神盾盃—資安競賽",
      teamName: "從缺",
    },
    {
      year: "2024",
      content: "AIS3 Pre-exam / Rank 109",
    },
    {
      year: "2024",
      content: "AIS3 MyFirstCTF / Silver 23.146.248.115Award (Rank 7)<",
    },
    {
      year: "2024",
      content: "PicoCTF / Rank 281/6957",
      teamName: "B33F 50UP 4",
    },
    {
      year: "2023",
      content: "T貓盃 全國資安基礎實務能力競賽 / 晉級（卡到檢定 QQ）",
    },
    {
      year: "2023",
      content: "53屆 全國技能競賽 網路安全分區賽 / 中區佳作",
    },
  ],
  development: [
    {
      year: "2026",
      content: "ITSA 生成式 AI 應用網頁設計競賽 第三名",
    },
    {
      year: "2025",
      content: "ITSA 生成式 AI 應用網頁設計競賽 決賽佳作",
    },
  ],
  other: [
    {
      year: "2025",
      content: "AIS3 HACKATHON 銅質獎",
      teamName: "Amazing 詐！",
    },
    {
      year: "2025",
      content:
        "2025 第30屆大專校院資訊應用服務創新競賽 [台灣大AI紅隊 eKYC滲透創新組(TWM-AI Red Team)]",
      teamName: "Oh Yeah 百變怪，就決定是你了！",
    },
    {
      year: "2022",
      content: "52屆 全國技能競賽 資訊網路布建全國賽 / 全國第四",
    },
    {
      year: "2022",
      content: "52屆 全國技能競賽 資訊網路布建分區賽 / 南區金牌",
    },
  ],
};

const competitionsLocalizedContent: Record<
  Locale,
  CompetitionsLocalizedContent
> = {
  "zh-TW": {
    competitionsTitle: "比賽經歷",
    categoryLabels: {
      ctf: "CTF",
      development: "開發",
      other: "其他",
    },
  },
  en: {
    competitionsTitle: "Competitions / Activities",
    categoryLabels: {
      ctf: "CTF",
      development: "Development",
      other: "Others",
    },
  },
};

const buildCompetitionCategories = (
  labels: CompetitionsLocalizedContent["categoryLabels"],
): readonly CompetitionCategory[] =>
  [
    {
      label: labels.ctf,
      items: competitionItemsByCategory.ctf,
    },
    {
      label: labels.development,
      items: competitionItemsByCategory.development,
    },
    {
      label: labels.other,
      items: competitionItemsByCategory.other,
    },
  ] as const;

export const competitionsContent: Record<Locale, CompetitionsContent> = {
  "zh-TW": {
    competitionsTitle: competitionsLocalizedContent["zh-TW"].competitionsTitle,
    competitionCategories: buildCompetitionCategories(
      competitionsLocalizedContent["zh-TW"].categoryLabels,
    ),
  },
  en: {
    competitionsTitle: competitionsLocalizedContent.en.competitionsTitle,
    competitionCategories: buildCompetitionCategories(
      competitionsLocalizedContent.en.categoryLabels,
    ),
  },
};
