# OsGa Personal Website | OsGa 個人網站

![image](https://github.com/user-attachments/assets/bc5232d4-d8f7-4a44-9a39-c3c460b77489)


A personal website project built with Next.js framework, showcasing personal experiences and consolidated links.

這是一個使用 Next.js 框架開發的個人網站專案。本網站展示個人經歷以及統整連結。

## Pages Overview | 頁面概括

- Home Page | 主頁
- About (CV) | 關於（CV）
- Linktree | Linktree
- Contact | Contact
---
Coming Soon | 待新增
- Uses | 開發環境
- Project | 專案

## Tech Stack | 技術架構

- **Frontend Framework | 前端框架**: Next.js 14
- **Styling | 樣式**: Tailwind CSS
- **Deployment | 部署**: Vercel

## Getting Started | 開始使用

### System Requirements | 系統需求

- Node.js 18.0 or higher | Node.js 18.0 或更高版本
- npm or yarn package manager | npm 或 yarn 套件管理器

### Installation Steps | 安裝步驟

1. Clone the repository | 複製專案儲存庫
```bash
git clone https://github.com/yourusername/osga-website.git
cd osga-website
```

2. Install dependencies | 安裝相依套件
```bash
npm install
# or | 或
yarn install
```

3. Start the development server | 啟動開發伺服器
```bash
npm run dev
# or | 或
yarn dev
```

Open your browser and visit `http://localhost:3000` to view the website.
開啟瀏覽器訪問 `http://localhost:3000` 即可看到網站。

## Project Structure | 專案結構

```
PROJECT_ROOT

├── public                          # Public assets directory | 公共資源目錄
├── src                            # Source code directory | 源碼目錄
│   ├── app                        # App directory | 應用程式目錄
│   │   ├── about                  # About page | 關於頁面
│   │   │   └── page.tsx
│   │   ├── contact               # Contact page | 聯絡頁面
│   │   │   └── page.tsx
│   │   ├── globals.css           # Global styles | 全域樣式
│   │   ├── layout.tsx            # Root layout | 根布局
│   │   ├── linktree             # Linktree page | Linktree 頁面
│   │   │   └── page.tsx
│   │   └── page.tsx             # Home page | 首頁
│   ├── components                # React components | React 元件
│   │   ├── ContactSection.tsx    # Contact section component | 聯絡區塊元件
│   │   ├── Footer.tsx           # Footer component | 頁尾元件
│   │   └── Navbar.tsx           # Navigation bar component | 導航欄元件
│   ├── data                      # Data directory | 資料目錄
│   │   └── experiences.json     # Experience data | 經歷資料
│   └── utils                     # Utility functions | 工具函式
│       ├── TextAnimation.ts      # Text animation utility | 文字動畫工具
│       └── smoothScroll.ts       # Smooth scroll utility | 平滑捲動工具
```

## Deployment | 部署方式

1. Create a new project on Vercel | 在 Vercel 建立新專案
2. Connect GitHub repository | 連結 GitHub 儲存庫
3. Deploy! | 部署！

## Contact | 聯絡方式

- Website | 網站：[https://www.osga.dev](https://www.osga.dev)
- Email | 電子郵件：osga@啥.tw
- GitHub：[@osga24](https://github.com/osga24)

## Changelog | 更新日誌

### v1.0.0 (2024-02-13)
- Initial release | 初始版本發布
- Implemented basic features | 實作基本功能
- Established documentation | 建立文件
