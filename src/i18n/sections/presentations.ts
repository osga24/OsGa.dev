import type {
  Locale,
  PresentationCategory,
  PresentationItem,
  PresentationsContent,
} from "../types";

type PresentationCategoryKey = "conf" | "sec" | "dev";

type PresentationsLocalizedContent = {
  presentationsTitle: string;
  categoryLabels: Record<PresentationCategoryKey, string>;
};

const presentationItemsByCategory = {
  conf: [
    {
      date: "2026-03-28",
      content: "學生計算機年會 SITCON",
      topic: "ESPRESSO【十倍開發！解脫雙手拋棄滑鼠的開發環境】",
    },
    {
      date: "2025-11-09",
      content: "MOPCON 2025",
      topic:
        "Lightning Talk - 身為一個資訊社群服務當然要自己做吧！關於我轉身到 SITCON 2026 開發組這檔事",
    },
    {
      date: "2025-03-08",
      content: "學生計算機年會 SITCON",
      topic: "開放式議程【RE:從零開始帶你入門 CTF 競賽】",
    },
    {
      date: "2024-11-10",
      content: "2024 HITCON CTF × 菁英人才交流活動",
      topic: "受邀講者（THJCC）",
    },
    {
      date: "2024-08-24",
      content: "HITCON CMT 2024",
      topic: "Lightning Talk - 關於在充滿賽棍的環境舉辦 CTF 比賽",
    },
  ],
  sec: [
    {
      date: "2026-01-21",
      content: "新竹女中資訊研究社",
      topic: "資訊安全介紹",
    },
    {
      date: "2025-10-26",
      content: "2025 南十校聯合迎新",
      topic: "資訊安全經驗分享",
    },
    {
      date: "2025-10-25",
      content: "SCIST 南臺灣學生資訊社群",
      topic: "Linux",
    },
    {
      date: "2025-09-25 - 2026-01-08",
      content: "嘉義高中 資訊研究社 117 屆",
      topic: "資訊安全實務",
    },
    {
      date: "2025-08-09",
      content: "當個電神 聯合資訊體驗營",
      topic: "資安入門",
    },
    {
      date: "2025-08-08",
      content: "資安院 CTF 資安種子培訓交流會高雄場",
      topic: "CTF 協作工具與實戰模擬演練",
    },
    {
      date: "2025-04-02",
      content: "南大附中 資訊研究社",
      topic: "網路安全介紹",
    },
    {
      date: "2025-02-27 - 2025-03-06",
      content: "臺南二中 資訊研究社",
      topic: "網路安全介紹、網頁安全實作",
    },
    {
      date: "2024-11-15",
      content: "師大附中 網管小組",
      topic: "網頁安全基礎",
    },
    {
      date: "2024-10-27",
      content: "2024 南七校聯合迎新",
      topic: "資訊安全經驗分享",
    },
    {
      date: "2024-09-25 - 2025-01-08",
      content: "嘉義高中 資訊研究社 115 屆",
      topic: "資訊安全實務",
    },
    {
      date: "2024-08-26",
      content: "教育部資安人才培育計畫 夏日資安工作坊",
      topic: "資訊安全實務",
    },
    {
      date: "2024-08-10 - 2024-08-11",
      content: "JNIC 聯合資訊體驗營",
      topic: "資訊安全實務",
    },
    {
      date: "2024-06-21",
      content: "正修科技大學 資訊工程系",
      topic: "資安網路攻防競賽體驗",
    },
    {
      date: "2024-06-08",
      content: "教育部資安人才培育計畫 一日資訊體驗營",
      topic: "資訊安全實務（台中場）",
    },
    {
      date: "2024-06-02",
      content: "台南二中 資訊研究社",
      topic: "資安與資訊社群經驗分享",
    },
    {
      date: "2024-06-01",
      content: "教育部資安人才培育計畫 一日資訊體驗營",
      topic: "資訊安全實務（台北場）",
    },
    {
      date: "2024-05-30",
      content: "新莊高中 電腦研習社",
      topic: "Linux 基礎",
    },
    {
      date: "2024-01-24 - 2024-01-26",
      content: "知資為資知 - 2024 中部電資聯合寒訓",
      topic: "資安實務",
    },
    {
      date: "2023-12-15 - 2024-01-05",
      content: "海青工商 資訊科",
      topic: "資訊安全入門選修課程",
    },
  ],
  dev: [
    {
      date: "2026-02-05 - 2026-02-08",
      content: "SCIST x SCAICT 2026 聯合寒訓 - 閃電四連編",
      topic: "開發講師",
    },
    {
      date: "2025-05-17 - 2025-05-24",
      content: "SCINT 基礎能力課程",
      topic: "Linux 設定、套件使用",
    },
    {
      date: "2025-01-24 - 2025-01-26",
      content: "【資深玩家】SCIST 2025 聯合寒訓",
      topic: "透過 Discord Bot 學習應用開發實務，經驗分享",
    },
    {
      date: "2024-06-09",
      content: "南四校資訊社聯合社課（台南一中、台南二中、台南女中、南大附中）",
      topic: "Discord Bot 開發",
    },
    {
      date: "2024-05-26",
      content: "教育部資安人才培育計畫 一日資訊體驗營（台南場）",
      topic: "程式設計實務",
    },
    {
      date: "2024-05-01",
      content: "南大附中 資訊研究社",
      topic: "社群經驗與發展",
    },
    {
      date: "2024-02-18 - 2024-02-25",
      content: "SCAICT 二月主題課程",
      topic: "Discord Bot 開發 從入門到放棄",
    },
    {
      date: "2023-09-21",
      content: "新莊高中 電腦研習社",
      topic: "Discord Bot 開發",
    },
  ],
};

const presentationsLocalizedContent: Record<
  Locale,
  PresentationsLocalizedContent
> = {
  "zh-TW": {
    presentationsTitle: "Presentation",
    categoryLabels: {
      conf: "研討會 / 年會",
      sec: "資訊安全",
      dev: "開發分享",
    },
  },
  en: {
    presentationsTitle: "Presentations",
    categoryLabels: {
      conf: "Conferences",
      sec: "Security",
      dev: "Development",
    },
  },
};

const buildPresentationCategories = (
  labels: PresentationsLocalizedContent["categoryLabels"],
): readonly PresentationCategory[] =>
  [
    {
      label: labels.conf,
      items: presentationItemsByCategory.conf,
    },
    {
      label: labels.sec,
      items: presentationItemsByCategory.sec,
    },
    {
      label: labels.dev,
      items: presentationItemsByCategory.dev,
    },
  ] as const;

export const presentationsContent: Record<Locale, PresentationsContent> = {
  "zh-TW": {
    presentationsTitle:
      presentationsLocalizedContent["zh-TW"].presentationsTitle,
    presentationCategories: buildPresentationCategories(
      presentationsLocalizedContent["zh-TW"].categoryLabels,
    ),
  },
  en: {
    presentationsTitle: presentationsLocalizedContent.en.presentationsTitle,
    presentationCategories: buildPresentationCategories(
      presentationsLocalizedContent.en.categoryLabels,
    ),
  },
};
