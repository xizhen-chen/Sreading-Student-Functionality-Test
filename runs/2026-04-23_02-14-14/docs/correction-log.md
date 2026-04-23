# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/23 10:24:04

共发生 **10** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-23T02:14:51.221Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-23T02:14:57.242Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-23T02:14:59.248Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-23T02:15:39.281Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-23T02:16:51.248Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/profile failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-23T02:17:43.784Z |
| Phase 1 | Primary selector "button:has-text("去登录")" for "goLoginButton" matched 0 elements | Fell back to selector "button:has-text("登录")" (matched 1) | 2026-04-23T02:17:45.022Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-23T02:18:04.216Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-23T02:18:28.937Z |
| Phase 5 | Navigation to https://sr.sigmareading.com/zh-hans/report failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-23T02:23:57.907Z |
