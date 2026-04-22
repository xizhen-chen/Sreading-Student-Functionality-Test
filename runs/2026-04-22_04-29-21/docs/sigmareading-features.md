# SigmaReading 功能探索报告

> 生成时间：2026/4/22 12:30:50
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/profile
```

---

## 功能模块

> 以下内容基于平台调研整理（网络离线状态下的基准文档）。

### 1. 登录页（/zh-hans/login）

**位置**：应用入口
**功能描述**：
- 账号/密码登录
- 手机号验证码登录
- 第三方登录（微信、Google）
- 忘记密码、注册入口

**截图**：`screenshots/exploration/01-login-page.png`

---

### 2. 主页（/zh-hans/home）

**功能描述**：
- 学习进度概览
- 教师布置任务列表
- 底部 Tab Bar 导航

**截图**：`screenshots/exploration/02-home-fullpage.png`

---

