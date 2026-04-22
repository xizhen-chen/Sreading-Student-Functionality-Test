# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 15:14:48

共发生 **7** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:12:08.135Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:12:14.144Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:12:16.154Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:12:56.176Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:13:46.834Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/profile failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T07:14:11.321Z |
| Phase 1 | Primary selector "button:has-text("去登录")" for "goLoginButton" matched 0 elements | Fell back to selector "button:has-text("登录")" (matched 1) | 2026-04-22T07:14:12.555Z |
