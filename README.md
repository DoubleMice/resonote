# 声笺 Resonote

**在线访问**：https://doublemice.github.io/resonote/

声笺把播客 RSS 中的长访谈整理成结构化视觉笔记与中文长读文章，并发布到 GitHub Pages。每集内容包含可从转写稿中核对的嘉宾原话、核心论点和手绘示意图。

## 当前状态

- RSS-only pipeline：`cache:refresh → plan → plan:run → build → deploy`
- 数据入口：`sources.yml` 中的 `rss_url`
- transcript 来源：RSS `podcast:transcript`，优先 `text/plain`，再 fallback 到 VTT/SRT/HTML
- 只有音频的 RSS episode 会进入 `needs_transcript` 队列，等待本地或手动转写补全
- 音频转写：默认 MiMo `mimo-v2.5`；可用 `TRANSCRIPT_PROVIDER=dashscope` 回退 DashScope；受限音频走本地下载 + `ffmpeg` 切片 + data URI
- 封面来源：RSS item `itunes:image`，缺失时 fallback 到 channel image
- 生成入口：`claude -p` subprocess；本地使用 Claude Code 登录态，GitHub Actions 使用 `ANTHROPIC_AUTH_TOKEN`
- 部署入口：GitHub Actions → GitHub Pages
- 首页“本期新笺”和“近日新笺”按视觉笔记的生成或更新时间排序，缺失时回退到播客发布时间

## 关注源

| Source | RSS |
|---|---|
| TBPN（精选） | `https://feeds.transistor.fm/technology-brother` |
| Unchained（精选） | `https://unchained.libsyn.com/unchained` |
| Risky Business | `https://risky.biz/feeds/risky-business/` |
| Acquired | `https://feeds.transistor.fm/acquired` |
| Flirting with Models | `https://feeds.captivate.fm/flirting-with-models/` |
| 张小珺 Xiaojun Podcast | `https://feed.xyzfm.space/dk4yh3pkpjp3` |
| 硅谷101 | `https://feeds.fireside.fm/sv101/rss` |
| 晚点聊 LateTalk | `https://feeds.fireside.fm/latetalk/rss` |
| Lex Fridman Podcast | `https://lexfridman.com/feed/podcast/` |

`Huberman Lab`、`Theories of Everything` 仍保留 source 配置，`rss_url` 为空时会生成空 cache/plan，等待补充 RSS。

`TBPN` 和 `Unchained` 使用精选规则控制同质内容：TBPN 只收单主题深访和专题；Unchained 排除 `The Chopping Block`、`DEX in the City`、`Bits + Bips` 等高频新闻圆桌，只保留最近三周、至少 55 分钟的独立节目。已有内容继续保留。

## 核心工作流

```text
┌───────────────┐  fetch RSS
│ sources.yml   │───────────────┐
└───────────────┘               │
                                ▼
                ┌──────────────────────────┐
                │ data/scan-cache/*.jsonl  │  normalized RSS entries
                └────────┬─────────────────┘
                         │ plan.ts (date + duration + transcript status)
                         ▼
                ┌──────────────────────────┐
                │ data/plans/<source>.yml  │  status tracking
                └────────┬─────────────────┘
                         │ run-plan.ts (download transcript + claude -p)
                         ▼
                ┌──────────────────────────┐
                │ episodes/<id>/           │  slides.md + meta.yml + article.html
                └────────┬─────────────────┘
                         │ build-all.ts (Slidev + Astro)
                         ▼
                    dist/ → GitHub Pages
```

## 命令速查

```bash
# 安装依赖
pnpm install

# 1. 拉取 RSS metadata
pnpm run cache:refresh
pnpm run cache:refresh -- --id=tbpn
pnpm run cache:refresh -- --limit=20

# 2. 从 cache 生成 plan
pnpm run plan
pnpm run plan -- --id=tbpn
pnpm run plan -- --min-duration=5400

# 3. 执行 plan 中 pending 的条目
pnpm run plan:run
pnpm run plan:run -- --limit=1
pnpm run plan:run -- --id=tbpn
pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --transcribe-wait-minutes=2
pnpm run plan:run -- --dry-run

# 4. metadata 校验、构建、本地预览
pnpm run normalize:meta
pnpm run build
pnpm run preview

# 5. 单集开发模式
pnpm run dev:episode <episodeId>

# 6. 本地统计 RSS cache
pnpm run analyze
pnpm run analyze -- --thresholds=30,60,120

# 7. 真实 API 转写 E2E（读取当前环境、.env.local、scripts/env.local.sh）
pnpm run e2e:transcription
```

本地预览地址：`http://localhost:4173`

## 常用收尾流程

```bash
pnpm run cache:refresh
pnpm run plan
pnpm run plan:run -- --limit=1
pnpm run build
git add -A
git commit -m "generate rss episode"
git push
```

生成与部署由手动或定时 GitHub Actions 触发，发布地址为 `https://doublemice.github.io/resonote/`。

## GitHub Actions 生成

仓库提供四个 workflow：

- `Discover`：定时刷新 RSS cache 和 plan，提交 `needs_transcript` / `pending` 队列。
- `Deploy to GitHub Pages`：手动触发，只构建并部署已有内容。
- `Generate and Deploy`：每天定时或手动触发，执行 `cache:refresh → plan → plan:run → normalize:meta → build → commit → deploy`。
- `Transcription E2E`：手动验证当前配置的 MiMo 转写接口，不生成内容，也不写入仓库。

`Generate and Deploy` 需要在 GitHub 仓库的 Secrets 中配置：

```text
ANTHROPIC_AUTH_TOKEN=<你的 DeepSeek API key 或兼容 Anthropic token>
MIMO_API_KEY=<MiMo API key，默认用于自动转写缺 transcript 的 RSS 音频>
DASHSCOPE_API_KEY=<DashScope API key，可选，用于 TRANSCRIPT_PROVIDER=dashscope 回退>
```

workflow 使用 DeepSeek Anthropic 兼容环境变量：

```text
ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
ANTHROPIC_MODEL=deepseek-v4-flash
ENABLE_TOOL_SEARCH=true
```

手动触发参数：

- `source`：可选 source id，例如 `tbpn`；留空表示所有 source。
- `limit`：生成数量上限，默认 `4`。
- `transcribe_limit`：本轮提交转写任务上限，默认 `3`。
- `transcribe_wait_minutes`：提交转写后短轮询等待分钟数，默认 `2`。
- `category`：可选分类过滤。

push 到 `main` 不触发 GitHub Actions；自动生成与部署只来自定时任务或手动 workflow。

## 添加新 RSS 源

编辑 `sources.yml`：

```yaml
sources:
  - id: my-source
    name: My Podcast
    rss_url: https://example.com/feed.xml
    min_duration: 3600
    min_date: "20260101"
    lookback_days: 30
    cache_limit: 100
    color: "#2563eb"
    description: 简短描述
    filter_keywords: [AI, agent, llm]
```

`include_title_patterns`、`exclude_title_patterns` 可按栏目标题做正则筛选；`lookback_days` 用滚动时间窗阻止陈旧积压持续进入队列。

然后运行：

```bash
pnpm run cache:refresh -- --id=my-source
pnpm run plan -- --id=my-source
pnpm run plan:run -- --id=my-source --limit=1
pnpm run build
```

## 生成规则

`plan.ts` 会把 episode 分成几类，并在 `data/plans/<source>.yml` 写入 `pending`、`downloaded`、`needs_transcript` 计数：

- `pending`：RSS 自带 transcript，或 `data/transcripts/<id>.txt` 已存在
- `downloaded`：transcript 已落盘，等待继续生成 slides
- `needs_transcript`：RSS 只有音频和封面，等待转写补全文本

跨源去重：如果同一 episode（标准化标题 + 发布日期匹配）出现在多个 source 中，只保留第一次出现的条目。RSS `<guid>` 是每个 feed 专属的，同一节目不同 RSS 源的 guid 不同；时长也可能因编码差异相差几秒，因此不用 duration 做去重。

`run-plan.ts` 会为每个 pending episode：

- 下载 RSS transcript 到 `data/transcripts/<id>.txt`
- scaffold `episodes/<id>/`
- 调用 `claude -p --model haiku --effort max`，通过 Haiku 映射使用 `deepseek-v4-flash` 生成 `slides.md`、`meta.yml`、`article.html`
- 只有当 Claude 成功退出且 `slides.md`、`meta.yml` 都存在时，plan 状态才写为 `generated`

`--auto-transcribe` 会为 `needs_transcript` episode 提交自动转写。默认 `TRANSCRIPT_PROVIDER=mimo`，调用 MiMo `mimo-v2.5` 的 `chat/completions` 音频理解接口，随音频发送逐字转写指令并关闭 thinking；音频统一在本地下载、经 `ffmpeg` 切片后以 data URI 分段提交，避开 URL 抓取差异和 MiMo URL 100MB 限制。可设置 `TRANSCRIPT_PROVIDER=dashscope` 回退 DashScope 异步 ASR，DashScope 普通公网音频直接提交 URL，Megaphone/Unchained 这类受限音频走切片 data URI。分段任务的状态保存在 `data/transcription-jobs.yml`，临时 chunk 文本放在 `data/transcripts/.chunks/`，该目录用短 hash 命名并被 git ignore；所有 chunk 成功后合并为 `data/transcripts/<id>.txt`，plan 状态回到 `pending`。

转写配置项：`TRANSCRIPT_PROVIDER=mimo|dashscope`、`MIMO_API_KEY`、`MIMO_BASE_URL`、`MIMO_MODEL`（默认 `mimo-v2.5`）、`MIMO_MAX_COMPLETION_TOKENS`（默认 `32768`）、`DASHSCOPE_API_KEY`、`DASHSCOPE_DATA_URI_CHUNK_SECONDS`、`DASHSCOPE_DATA_URI_MAX_MB`。

真实 API E2E 使用 `pnpm run e2e:transcription`。脚本加载顺序为当前环境变量、`.env.local`、`scripts/env.local.sh`，不会创建额外本地配置文件；默认测试 MiMo，设置 `TRANSCRIPT_PROVIDER=dashscope` 可测试 DashScope。

`pnpm run normalize:meta` 会校验所有 `episodes/*/meta.yml`。`pnpm run normalize:meta -- --fix` 会修复 LLM 生成的可恢复 YAML 问题，例如双引号字符串中的非法 `\'`，CI 在 build 前强制运行该步骤。

硬规则位于 `scripts/prompts/slides-system-rules.md`：

- 每条引言必须能在 transcript 里 grep 到
- 不跨 episode 串台
- 不编造公司名、年份、数字
- deck 长度按 transcript 长度扩展
- 至少 20% 内容页使用 Excalidraw 手绘图
- 倒数第二页为核心金句页
- 生成后必须导出 PNG 自审

## 项目结构

```text
resonote/
├── sources.yml              # RSS source 配置
├── tags.yml                 # 标签词表
├── episodes.yml             # 历史 episode 目录兼容
├── data/
│   ├── transcripts/         # 清洗后的 transcript
│   ├── scan-cache/          # RSS normalized JSONL，按需刷新
│   └── plans/               # 每个 source 的执行状态
├── episodes/
│   ├── _templates/          # 新 episode scaffold
│   └── <episodeId>/         # 单集 Slidev 项目
├── landing/                 # Astro landing
├── scripts/
│   ├── lib/rss.ts           # RSS parser + transcript cleaner
│   ├── refresh-cache.ts     # RSS → scan-cache
│   ├── plan.ts              # scan-cache → plan
│   ├── run-plan.ts          # plan → transcript + generation
│   ├── build-all.ts         # episodes + landing → dist
│   └── prompts/             # generation prompts and hard rules
└── .github/workflows/
    ├── discover.yml             # 定时刷新 RSS cache 和 plan
    ├── generate-and-deploy.yml  # 生成内容并部署
    ├── transcription-e2e.yml    # 转写接口验证
    └── deploy.yml               # 手动部署 GitHub Pages
```

## 部署

`.github/workflows/deploy.yml` 和 `.github/workflows/generate-and-deploy.yml` 设置：

- `RESONOTE_BASE=/resonote/`
- `RESONOTE_SITE=https://doublemice.github.io`

构建脚本仍会读取旧的 `PODDECK_BASE` 和 `PODDECK_SITE`，方便已有本地配置迁移；GitHub Actions 只使用新的 `RESONOTE_*` 变量。

部署流程：

手动部署会安装依赖与 Chromium、校验 episode metadata、构建全部页面、验证 Slide 路由，再上传 `dist/` 并发布到 GitHub Pages。生成工作流还会安装 `ffmpeg`、整理新内容、修复可恢复的 metadata 问题，并在部署前提交生成结果。

仓库 Pages 设置使用 **GitHub Actions**。

## 已知限制

- CI 生成需要 `ANTHROPIC_AUTH_TOKEN` secret；缺少该 secret 时只使用本地生成流程。
- 默认自动转写需要 `MIMO_API_KEY` secret；显式 `TRANSCRIPT_PROVIDER=dashscope` 时需要 `DASHSCOPE_API_KEY` secret；缺少对应 secret 时 `needs_transcript` 只排队。
- Megaphone/Unchained 分段转写需要系统 `ffmpeg`；CI 已安装，本地执行需确保 `ffmpeg -version` 可用。
- `sources.yml` 中 `rss_url` 为空的 source 会写空 cache/plan。
- GitHub Pages 深度链接依赖 `landing/public/404.html` 做 fallback。
- 只修改转写队列、`data/transcripts/.chunks/` 或脚本缓存逻辑时，无需重建 GitHub Pages；新增/修改 `episodes/*`、`landing/*`、`data/transcripts/*.txt` 后生成 deck 或页面内容时需要重新 build/deploy。

## 致谢

Slides 由 [Slidev](https://sli.dev) 渲染。生成由 [Claude Code](https://claude.com/claude-code) 驱动。
