# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 13:03:58

共发生 **29** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T04:54:11.331Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:54:17.352Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:54:19.364Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN exhausted all waitUntil strategies | Continuing with partially loaded page at https://auth-dev.sreading.org/realms/sreading/protocol/openid-connect/auth?response_type=code&client_id=web_app&scope=openid%20profile%20email&state=1mmPbPmV-CQ5_j7RelOS7iaZGDJ8xgIUi0EMYiM6byw%3D&redirect_uri=https://sr.sigmareading.com/login/oauth2/code/oidc&nonce=u3QN9n9T_Cqr5rXEneeOI22K9EwiP2L4i1Rm3nWvdDg&ui_locales=zh_CN | 2026-04-22T04:54:59.387Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-22T04:55:40.211Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:56:18.771Z |
| Phase 2 | Screenshot "02-home-fullpage" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:56:25.286Z |
| Phase 2 | Screenshot "02-home-fullpage" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:56:27.296Z |
| Phase 2 | Primary selector "ion-tab-button" for "tabItems" matched 0 elements | Fell back to selector "nav a" (matched 8) | 2026-04-22T04:56:27.321Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:57:04.387Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:57:45.730Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:57:51.749Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:57:53.756Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:58:33.822Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:58:39.833Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:58:41.849Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/ failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:59:01.526Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/audio-dictionary exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/audio-dictionary | 2026-04-22T04:59:44.399Z |
| Phase 3 | Screenshot "03-nav-zh-hans-audio-dictionary" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:59:50.431Z |
| Phase 3 | Screenshot "03-nav-zh-hans-audio-dictionary" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:59:52.445Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/character-map-create exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/character-map-create | 2026-04-22T05:00:32.513Z |
| Phase 3 | Screenshot "03-nav-zh-hans-character-map-create" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T05:00:38.526Z |
| Phase 3 | Screenshot "03-nav-zh-hans-character-map-create" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T05:00:40.539Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/copybook exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/copybook | 2026-04-22T05:01:20.602Z |
| Phase 3 | Screenshot "03-nav-zh-hans-copybook" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T05:01:26.628Z |
| Phase 3 | Screenshot "03-nav-zh-hans-copybook" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T05:01:28.640Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/pinyin-pathway failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T05:02:08.683Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T05:02:39.981Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T05:03:23.298Z |
