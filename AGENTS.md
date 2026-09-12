# MindNT Website — Agent Guide

## Stack
- **React 19** (CRA 5), **Tailwind CSS 3**, **React Router 7** (HashRouter)
- **Inter** font via Google Fonts, Apple-inspired typography
- Deployed to **GitHub Pages** at https://mindnt.com.mx/

## Key Architecture
- **HashRouter** (not BrowserRouter) — required for GitHub Pages SPA support
- **Dual page sets**: every route has separate `pages/<Name>.js` (desktop) and `pages/<Name>Mobile.js` (mobile), toggled by `window.innerWidth < 768`
- All asset paths use `process.env.PUBLIC_URL` prefix for GH Pages compatibility
- Google Drive images are converted via `src/utils/parseDriveImage.js`

## Commands
```sh
npm start          # dev server on :3000
npm test           # CRA test runner (watch mode)
npm run build      # production build → build/
npm run deploy     # predeploy (build) + gh-pages push
```

## Conventions
- No formatter config; no ESLint config file (uses CRA defaults)
- All page/component imports use relative paths (`./`, `../`)
- `src/data/blogData.json` is the only structured data source
- No CI workflows exist

## Notable
- `.gitignore` skips `node_modules` and `package-lock.json` only — `build/` is committed
- No `postcss.config.js` (CRA handles PostCSS internally)
- Brand blue: `#034EA2` — defined in `tailwind.config.js` as `brand-blue`
