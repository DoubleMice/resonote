# 声笺 Resonote

将长篇播客整理为中文视觉笔记与长读文章，并发布到 GitHub Pages。

[访问网站](https://resonote.doublemice.top/) · [浏览内容库](https://resonote.doublemice.top/library/) · [订阅 RSS](https://resonote.doublemice.top/rss.xml)

## 功能

- 从 RSS 发现节目并维护处理队列。
- 优先读取 RSS 自带文稿；仅有音频时可调用 MiMo 或 DashScope 转写。
- 通过 Claude Code 调用兼容 Anthropic Messages API 的模型，生成 Slidev 视觉笔记、HTML 文章和元数据。
- 使用 Astro 构建内容站，支持全文搜索、来源与标签筛选、未读筛选和本地阅读记录。
- 通过 GitHub Actions 定时发现、生成、检查并部署到 GitHub Pages。

## 处理流程

```text
RSS → scan cache → plan → transcript → slides/article → build → GitHub Pages
```

主要产物：

```text
data/transcripts/<id>.txt   转写稿
data/plans/<source>.yml     处理状态
episodes/<id>/slides.md     视觉笔记
episodes/<id>/article.html  长读文章
episodes/<id>/meta.yml      内容元数据
```

## 快速开始

需要 Node.js 20.19+、pnpm 9.15.9。自动转写还需要 `ffmpeg`。

```bash
git clone https://github.com/DoubleMice/resonote.git
cd resonote
pnpm install
pnpm run build
pnpm run preview
```

本地预览地址为 `http://localhost:4173`。开发单集视觉笔记时运行：

```bash
pnpm run dev:episode <episodeId>
```

## 常用命令

```bash
# 刷新 RSS 缓存并生成计划
pnpm run cache:refresh
pnpm run plan

# 执行计划；可限制来源、数量或启用自动转写
pnpm run plan:run -- --id=tbpn --limit=1
pnpm run plan:run -- --auto-transcribe --transcribe-limit=3

# 校验、构建与预览
pnpm run normalize:meta
pnpm run build
pnpm run preview

# 测试与站点检查
pnpm test
pnpm run audit:brand
pnpm run audit:home
pnpm run verify:routing
```

`audit:brand`、`audit:home` 和 `verify:routing` 检查 `dist/`，运行前需先执行 `pnpm run build`。

## 配置

复制本地配置示例并填写密钥：

```bash
cp scripts/env.local.example.sh scripts/env.local.sh
source scripts/env.local.sh
```

GitHub Actions 使用两个独立 Secret：

```text
TRANSCRIPTION_API_KEY  自动转写密钥
CONTENT_API_KEY        文稿整理与内容生成密钥
```

仓库 Variables：

```text
TRANSCRIPTION_PROVIDER=mimo
TRANSCRIPTION_BASE_URL=https://api.xiaomimimo.com/v1
TRANSCRIPTION_MODEL_NAME=mimo-v2.5
TRANSCRIPTION_MAX_COMPLETION_TOKENS=32768

CONTENT_BASE_URL=https://api.xiaomimimo.com/anthropic
CONTENT_MODEL_NAME=mimo-v2.5
```

可选的 `CONTENT_EFFORT` 控制文稿整理时传给 Claude Code 的思考强度，支持 `low`、`medium`、`high`、`xhigh` 和 `max`。不设置时不传递 `--effort`；取值无效时任务会在调用模型前失败。

设置 `TRANSCRIPTION_PROVIDER=dashscope` 可改用 DashScope 转写，同时需要 `DASHSCOPE_API_KEY` Secret。工作流将上述通用配置映射为客户端实际读取的 `ANTHROPIC_*`、`MIMO_*` 或 DashScope 环境变量。

## GitHub Actions

| Workflow | 触发方式 | 用途 |
|---|---|---|
| `Discover` | 每天 03:00 UTC / 手动 | 刷新 RSS 与处理计划 |
| `Generate and Deploy` | 每天 18:00 UTC / 手动 | 转写、生成、检查并部署 |
| `Deploy to GitHub Pages` | 手动 | 构建并部署已有内容 |
| `Transcription E2E` | 手动 | 验证转写接口，不写入内容 |

`Discover` 与 `Generate and Deploy` 共用 `content-pipeline` 并发组，避免同时修改计划和内容文件。直接推送到 `main` 不会触发部署。

## 添加 RSS 源

在 `sources.yml` 的 `sources` 列表中增加配置：

```yaml
- id: my-source
  name: My Podcast
  rss_url: https://example.com/feed.xml
  min_duration: 3600
  min_date: "20260101"
  lookback_days: 30
  cache_limit: 100
  color: "#355f58"
  description: 节目简介
```

然后运行：

```bash
pnpm run cache:refresh -- --id=my-source
pnpm run plan -- --id=my-source
pnpm run plan:run -- --id=my-source --limit=1
```

## 项目结构

```text
landing/                 Astro 内容站
episodes/                单集 Slidev、文章与元数据
data/                    RSS 缓存、计划和转写稿
scripts/                 发现、转写、生成、构建与检查脚本
scripts/prompts/         内容生成规则
.github/workflows/       自动发现、生成与部署任务
sources.yml              RSS 来源配置
tags.yml                 标签词表
```

## 内容约束

生成规则位于 `scripts/prompts/slides-system-rules.md`。内容必须以当前节目的转写稿为依据；引用需能回查原文，不得跨节目混用信息。只有 Claude Code 正常退出且必要文件存在时，计划状态才会更新为 `generated`。

## 技术栈

项目使用 [Slidev](https://sli.dev)、[Astro](https://astro.build/) 和 [Claude Code](https://claude.com/claude-code)。
