# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 12:42:25

共发生 **36** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="load" (strategy #3) | 2026-04-22T04:38:17.218Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:38:34.685Z |
| Phase 1 | Primary selector "button:has-text("去登录")" for "goLoginButton" matched 0 elements | Fell back to selector "ion-button:has-text("登录")" (matched 1) | 2026-04-22T04:38:35.948Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/profile failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:39:03.368Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:39:20.197Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:39:38.131Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/textbook failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:39:55.483Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/homework failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:40:12.883Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:40:30.516Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:40:47.946Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:41:05.402Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/favorites failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:41:22.869Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/studio failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:41:40.288Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/exam failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:41:57.966Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/pinyin-pathway exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:15.297Z |
| Phase 3 | Screenshot "03-nav-zh-hans-pinyin-pathway" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:42:17.310Z |
| Phase 3 | Screenshot "03-nav-zh-hans-pinyin-pathway" failed | Skipped: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:42:17.310Z |
| Phase 3 | Navigation to /zh-hans/pinyin-pathway threw an error | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:42:17.313Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/word-express exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:17.314Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/character-map-overview exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:19.323Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/copybook exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:21.340Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/audio-dictionary exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:23.358Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/ccswitch exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.362Z |
| Phase 3 | Navigation to /zh-hans/ccswitch threw an error | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.381Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/homework exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.386Z |
| Phase 4 | Seed route /zh-hans/homework failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.386Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.388Z |
| Phase 4 | Seed route /zh-hans/reading failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.389Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.391Z |
| Phase 4 | Seed route /zh-hans/playlist failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.391Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.393Z |
| Phase 4 | Seed route /zh-hans/joined-classes failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.393Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/favorites exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.395Z |
| Phase 4 | Seed route /zh-hans/favorites failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.395Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/studio exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/pinyin-pathway | 2026-04-22T04:42:25.400Z |
| Phase 4 | Seed route /zh-hans/studio failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:42:25.401Z |
