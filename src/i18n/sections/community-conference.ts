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
    role: "開發組副組長",
  },
  {
    year: "2025",
    content: "MOPCON",
    role: "開發組組員",
  },
  {
    year: "2025",
    content: "AIS3 Juniors 2025",
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
    content: "南臺灣學生資訊社群 SCIST (S5)",
    role: "資安助教",
  },
  {
    year: "2024",
    content: "AIS3 Juniors 2024",
    role: "助教",
  },
  {
    year: "2024",
    content: "AIS3 2024 新型態高中職資安課程",
    role: "A 組學員",
  },
  {
    year: "2024",
    content: "教育部資安人才培育計畫 零日餅乾社",
    role: "顧問",
  },
  {
    year: "2024",
    content: "臺灣高中聯合資安競賽 THJCC 第一屆",
    role: "創辦人 / 出題者",
  },
  {
    year: "2024",
    content: "中部高中電資社團聯合會議 SCAICT",
    role: "資訊組",
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
