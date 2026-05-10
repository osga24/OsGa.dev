import type {
  CommunityConferenceContent,
  CommunityConferenceItem,
  Locale,
} from "../types";

const communityConferenceItems: readonly CommunityConferenceItem[] = [
  {
    year: "2026",
    content: "台灣網路維運論壇 TWNOG 7",
    role: "Infra 組",
  },
  {
    year: "2026",
    content: "學生計算機年會 SITCON",
    role: "Hour Of Code 台中場助教",
  },
  {
    year: "2026",
    content: "學生計算機年會 SITCON",
    role: "開發組副組長",
  },
  {
    year: "2025",
    content: "MOPCON",
    role: "開發組組員",
  },
  {
    year: "2025",
    content: "AIS3 Juniors 2025 新型態高中職資安課程",
    role: "助教",
  },
  {
    year: "2025",
    content: "臺灣駭客年會 HITCON",
    role: "活動組組員",
  },
  {
    year: "2025",
    content: "SITCON Camp",
    role: "隊輔組組長",
  },
  {
    year: "2025",
    content: "學生計算機年會 SITCON",
    role: "議程組組員",
  },
  {
    year: "2025",
    content: "南臺灣學生資訊社群 SCIST 資安季中賽",
    role: "出題者",
  },
  {
    year: "2024",
    content: "THJCC 2024 Winter",
    role: "出題者",
  },
  {
    year: "2024",
    content: "延平高中 資訊學群體驗營",
    role: "資訊領域分享 / CVE 漏洞復現 助教",
  },
  {
    year: "2024",
    content: "南臺灣學生資訊社群 SCIST (S5)",
    role: "資安助教",
  },
  {
    year: "2024",
    content: "AIS3 Juniors 2024 新型態高中職資安課程",
    role: "助教",
  },
  {
    year: "2024",
    content: "AIS3 2024 新型態高中職資安課程",
    role: "A 組學員",
  },
  {
    year: "2024",
    content: "資通院 CTF 種子培訓工作坊",
    role: "學員 / CTF Rank 1",
  },
  {
    year: "2024",
    content: "教育部資安人才培育計畫 零日餅乾社",
    role: "顧問",
  },
  {
    year: "2024",
    content: "內獅國小 HoC",
    role: "程式邏輯義教",
  },
  {
    year: "2024",
    content: "臺灣高中聯合資安競賽 THJCC 第一屆",
    role: "創辦人 / 出題者",
  },
  {
    year: "2024",
    content: "學生計算機年會 SITCON",
    role: "Lightning Talk 主持人",
  },
  {
    year: "2024",
    content: "教育部資安人才培育計畫 一日資訊體驗營（雲林場）",
    role: "助教",
  },
  {
    year: "2024",
    content: "中部高中電資社團聯合會議 SCAICT",
    role: "資訊組",
  },
  {
    year: "2024",
    content: "南九校資訊社 x SCIST 2024 聯合寒訓資得其樂",
    role: "活動規劃 / 主持人",
  },
  {
    year: "2024",
    content: "知資為資知 - 2024 中部電資聯合寒訓",
    role: "資訊組 / 隊輔 / CTF 出題者",
  },
];

export const communityConferenceContent: Record<
  Locale,
  CommunityConferenceContent
> = {
  "zh-TW": {
    communityConferenceTitle: "Community & Conference",
    communityConferenceItems,
  },
  en: {
    communityConferenceTitle: "Community & Conference",
    communityConferenceItems,
  },
};
