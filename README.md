# 声笺 Resonote

将长篇播客整理为中文视觉笔记与长读文章，并发布到 GitHub Pages。

[访问网站](https://resonote.doublemice.top/) · [浏览内容库](https://resonote.doublemice.top/library/) · [订阅 RSS](https://resonote.doublemice.top/rss.xml)

## 功能

- 从 RSS 发现节目并维护处理队列。
- 优先读取 RSS 自带文稿；仅有音频时可调用 MiMo 或 DashScope 转写。
- 通过 Codex 或 Claude Code 调用模型，生成 Slidev 视觉笔记、HTML 文章和元数据。
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

# 重试指定单集，包括此前生成失败的条目
pnpm run plan:run -- --id=latepost --episode=<episodeId> --retry-failed --limit=1

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
CONTENT_PROVIDER=auto
```

可选的 `CONTENT_EFFORT` 控制文稿整理时的思考强度，支持 `low`、`medium`、`high`、`xhigh` 和 `max`。它映射为 Claude Code 的 `--effort` 或 Codex 的 `model_reasoning_effort`；不设置时沿用 CLI 默认值，取值无效时在调用模型前失败。

`CONTENT_PROVIDER=auto` 根据模型名称选择入口：`gpt-*`、`o数字` 和 `codex*` 使用 Codex，其余使用 Claude Code。也可显式设置 `codex` 或 `claude`。Actions 按需安装对应 CLI；本地使用 Codex 生成时需安装 `@openai/codex@0.153.4`。两种入口共用 `CONTENT_API_KEY`，旧的 `ANTHROPIC_AUTH_TOKEN` 本地配置仍可使用。生成任务固定使用 Ubuntu 22.04，避免 Ubuntu 24.04 的用户命名空间限制阻止 Codex 沙箱启动；调用模型前会检查本地自审服务能否启动。

设置 `TRANSCRIPTION_PROVIDER=dashscope` 可改用 DashScope 转写，同时需要 `DASHSCOPE_API_KEY` Secret。工作流将上述通用配置映射为客户端实际读取的 `ANTHROPIC_*`、`MIMO_*` 或 DashScope 环境变量。

## GitHub Actions

| Workflow | 触发方式 | 用途 |
|---|---|---|
| `Discover` | 每天 03:00 UTC / 手动 | 刷新 RSS 与处理计划 |
| `Generate and Deploy` | 每天 18:00 UTC / 手动 | 转写、生成、检查并部署 |
| `Deploy to GitHub Pages` | 手动 | 构建并部署已有内容 |
| `Transcription E2E` | 手动 | 验证转写接口，不写入内容 |

`Discover` 与 `Generate and Deploy` 共用 `content-pipeline` 并发组，避免同时修改计划和内容文件。直接推送到 `main` 不会触发部署。

生成任务的摘要会分别列出通过校验的生成数量、生成或下载失败数，以及本次转写失败数。队列为空时显示 `no new content`。本次转写或生成失败时，工作流先保存处理进度，再以失败状态结束，不部署旧产物来掩盖生成失败。

Codex 入口需要 Responses API；例如 `CONTENT_BASE_URL=https://api.doublemice.top`、`CONTENT_MODEL_NAME=gpt-5.6-luna` 会调用该网关的 `/v1/responses`。Claude Code 入口仍需要 Anthropic Messages API。详见 [Codex 自定义提供方配置](https://learn.chatgpt.com/docs/config-file/config-advanced)。

手动生成工作流支持 `episode` 和 `retry_failed`，可只重试一集。转写失败默认等待 48 小时再尝试，优先处理未尝试的节目；`--retry-failed` 可跳过等待。音频下载最多尝试 3 次，单次最多 120 秒；转码时去除封面和元数据，并根据大小上限限制分块时长。

## 构建与页面性能

Slidev 默认同时构建 2 集；每集按内容指纹复用 `.cache/episode-builds`。文章样式和相邻篇目导航在组装阶段更新，因此无需重新编译未改动的幻灯片。Actions 使用相同指纹计算缓存键，内容未变时复用已有缓存，并在构建摘要中记录命中数和耗时。

RSS 默认同时请求 3 个来源，单次请求最多等待 30 秒。资源受限时可降低并发：

```bash
RESONOTE_RSS_CONCURRENCY=1 pnpm run cache:refresh
RESONOTE_BUILD_CONCURRENCY=1 pnpm run build
```

并发值必须是正整数。首页搜索首次使用时从已有内容库读取索引；筛选保留列表节点，仅在切换排序时重排。搜索、筛选和阅读状态脚本由 Astro 打包为可缓存的模块。

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

生成规则位于 `scripts/prompts/slides-system-rules.md`。内容必须以当前节目的转写稿为依据；引用需能回查原文，不得跨节目混用信息。只有 CLI 正常退出、报告非错误的完成事件，且产物通过静态与布局校验后，计划状态才会更新为 `generated`。

## 技术栈

项目使用 [Slidev](https://sli.dev)、[Astro](https://astro.build/)、[Codex](https://developers.openai.com/codex/) 和 [Claude Code](https://claude.com/claude-code)。
