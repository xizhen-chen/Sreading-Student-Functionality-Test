# SigmaReading 功能探索报告

> 生成时间：2026/4/22 15:50:52
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

> 目标页面：/zh-hans/reading
> 页面级迭代模式：已启用

> ⚠️ **注意**：本报告在网络受限环境中生成。
> 请在能访问 sr.sigmareading.com 的环境中运行 `npm run explore` 获取实时数据。

---

## 页面路由结构

```
- /zh-hans/home         – 学生主页（需登录）
- /zh-hans/login        – 登录页（未登录时自动跳转）
- /zh-hans/register     – 注册页
- /zh-hans/reading      – 阅读中心
- /zh-hans/vocabulary   – 词汇/生词本
- /zh-hans/quiz         – 测验
- /zh-hans/exercise     – 练习
- /zh-hans/report       – 学习报告
- /zh-hans/profile      – 个人中心
- /zh-hans/settings     – 设置
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

