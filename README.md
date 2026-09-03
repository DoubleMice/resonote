# 声笺 Resonote

> 余音绕梁，落墨成笺。

[访问声笺](https://doublemice.github.io/resonote/) · [浏览内容库](https://doublemice.github.io/resonote/library/)

声笺把长篇播客整理成结构化视觉笔记与中文长读文章，并发布到 GitHub Pages。每份笔记围绕可从转写稿中核对的嘉宾原话和核心论点展开，配合手绘示意图呈现内容脉络。

## 产品体验

- 首页以“本期新笺”为主要入口，首屏提供全站搜索和内容统计。
- 热门标签与播客来源位于页面上半部分，可通过页签切换；下方依次展示近日新笺和可渐进展开的完整内容库。
- 内容库支持按标题、嘉宾、来源或标签搜索，并可组合筛选视觉笔记、文章、主题和未读内容。筛选条件会同步到 URL，便于收藏或分享。
- 打开视觉笔记或文章后，该内容会在当前浏览器中标记为已读；阅读状态只保存在本地，不会上传。
- 界面采用暖纸色、墨绿和朱砂色，标题使用宋体风格，并适配桌面端与移动端。

## 技术概览

- 内容流水线：`cache:refresh → plan → plan:run → build → deploy`
- 数据入口：`sources.yml` 中的 `rss_url`
- 转写稿来源：优先读取 RSS `podcast:transcript` 中的 `text/plain`，其次处理 VTT、SRT 或 HTML
- 只提供音频的 RSS 条目会进入 `needs_transcript` 队列，等待自动或人工转写
- 自动转写默认使用 MiMo `mimo-v2.5`；设置 `TRANSCRIPT_PROVIDER=dashscope` 后改用 DashScope。受限音频会先下载到本地，再由 `ffmpeg` 切片并以 data URI 提交
- 封面优先使用 RSS 条目的 `itunes:image`，缺失时使用频道封面
- 内容生成通过 `claude -p` 子进程执行；GitHub Actions 使用 MiMo 的 Anthropic 兼容接口，本地可使用同一接口或 Claude Code 登录状态
- GitHub Actions 负责内容发现、生成、检查和 GitHub Pages 部署
- 首页“本期新笺”和“近日新笺”按播客发布日期（`published_sort`）排序，仅展示已生成视觉笔记的集数；内容库同样按发布日期排序

## 快速开始

需要 Node.js 20.19 或更高版本，以及 pnpm 9.15.9。自动转写还需要 `ffmpeg` 和对应服务的 API key。

```bash
git clone https://github.com/DoubleMice/resonote.git
cd resonote
pnpm install
pnpm run build
pnpm run preview
```

本地预览地址为 `http://localhost:4173`。只开发某一集视觉笔记时，可运行 `pnpm run dev:episode <episodeId>`，默认地址为 `http://localhost:3031`。

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
# 1. 拉取 RSS 元数据
pnpm run cache:refresh
pnpm run cache:refresh -- --id=tbpn
pnpm run cache:refresh -- --limit=20

# 2. 从缓存生成执行计划
pnpm run plan
pnpm run plan -- --id=tbpn
pnpm run plan -- --min-duration=5400

# 3. 执行计划中状态为 pending 的条目
pnpm run plan:run
pnpm run plan:run -- --limit=1
pnpm run plan:run -- --id=tbpn
pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --transcribe-wait-minutes=2
pnpm run plan:run -- --dry-run

# 4. 校验元数据、构建并预览
pnpm run normalize:meta
pnpm run build
pnpm run preview

# 5. 单集开发模式
pnpm run dev:episode <episodeId>

# 6. 统计本地 RSS 缓存
pnpm run analyze
pnpm run analyze -- --thresholds=30,60,120

# 7. 调用真实 API 验证转写（读取当前环境、.env.local、scripts/env.local.sh）
pnpm run e2e:transcription
```

## 质量检查

首次运行浏览器检查前，需要安装项目锁定版本对应的 Chromium：

```bash
pnpm exec playwright install chromium
```

```bash
# 校验所有单集元数据并构建整站
pnpm run normalize:meta
pnpm run build

# 检查源码与构建产物中的品牌标识
pnpm run audit:brand

# 检查首页搜索、探索页签、内容顺序及桌面端/移动端横向溢出
pnpm run audit:home

# 检查已构建视觉笔记的 Slidev 版本、静态资源和深度链接
pnpm run verify:routing

# 运行单元测试
pnpm test

# 检查指定视觉笔记是否超出画布；加入 --png --keep 可保留审阅图
pnpm run audit:layout -- --id=<episodeId>
```

`audit:brand`、`audit:home` 和 `verify:routing` 读取 `dist/`，因此应先运行 `pnpm run build`。CI 会依次执行元数据校验、整站构建、品牌检查、首页交互检查和路由检查。

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

- `Discover`：每天 03:00 UTC 刷新 RSS 缓存和执行计划，提交 `needs_transcript` / `pending` 队列。
- `Deploy to GitHub Pages`：手动触发，校验并构建已有内容，通过首页和路由检查后部署。
- `Generate and Deploy`：每天 18:00 UTC 或手动触发，执行 `cache:refresh → plan → plan:run → normalize:meta → build → audit → commit → deploy`。
- `Transcription E2E`：手动验证当前配置的 MiMo 转写接口，不生成内容，也不写入仓库。

`Discover` 和 `Generate and Deploy` 共用 `content-pipeline` 并发组，避免同时更新内容文件；两个部署流程共用 `pages` 并发组，按顺序发布。直接 push 到 `main` 不会触发这些 workflow。

`Generate and Deploy` 需要在 GitHub 仓库的 Secrets 中配置：

```text
TRANSCRIPTION_API_KEY=<用于自动转写的 API key>
CONTENT_API_KEY=<用于文稿整理和内容生成的 API key>
DASHSCOPE_API_KEY=<DashScope API key，可选，用于 TRANSCRIPT_PROVIDER=dashscope 回退>
```

内容生成地址和模型通过 GitHub Actions Variables 配置：

```text
TRANSCRIPTION_PROVIDER=mimo
TRANSCRIPTION_BASE_URL=https://api.xiaomimimo.com/v1
TRANSCRIPTION_MODEL_NAME=mimo-v2.5
TRANSCRIPTION_MAX_COMPLETION_TOKENS=32768
CONTENT_BASE_URL=https://api.xiaomimimo.com/anthropic
CONTENT_MODEL_NAME=mimo-v2.5
```

workflow 将这些值映射到 Claude Code 使用的 `ANTHROPIC_*` 环境变量。未配置 Variable 时也使用上述 MiMo 默认值。

手动触发参数：

- `source`：可选 source id，例如 `tbpn`；留空表示所有 source。
- `limit`：生成数量上限，默认 `4`。
- `transcribe_limit`：本轮提交转写任务上限，默认 `3`。
- `transcribe_wait_minutes`：提交转写后短轮询等待分钟数，默认 `2`。
- `category`：可选分类过滤。

自动生成与部署只来自定时任务或手动 workflow。

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
- 调用 `claude -p --model haiku --effort max`，通过 Haiku 映射使用 `CONTENT_MODEL_NAME`（默认 `mimo-v2.5`）生成 `slides.md`、`meta.yml`、`article.html`
- 只有当 Claude 成功退出且 `slides.md`、`meta.yml` 都存在时，plan 状态才写为 `generated`

`--auto-transcribe` 会为 `needs_transcript` episode 提交自动转写。默认 `TRANSCRIPT_PROVIDER=mimo`，调用 MiMo `mimo-v2.5` 的 `chat/completions` 音频理解接口，随音频发送逐字转写指令并关闭 thinking；音频统一在本地下载、经 `ffmpeg` 切片后以 data URI 分段提交，避开 URL 抓取差异和 MiMo URL 100MB 限制。可设置 `TRANSCRIPT_PROVIDER=dashscope` 回退 DashScope 异步 ASR，DashScope 普通公网音频直接提交 URL，Megaphone/Unchained 这类受限音频走切片 data URI。分段任务的状态保存在 `data/transcription-jobs.yml`，临时 chunk 文本放在 `data/transcripts/.chunks/`，该目录用短 hash 命名并被 git ignore；所有 chunk 成功后合并为 `data/transcripts/<id>.txt`，plan 状态回到 `pending`。

GitHub Actions 中的转写配置项为 `TRANSCRIPTION_API_KEY`、`TRANSCRIPTION_PROVIDER`、`TRANSCRIPTION_BASE_URL`、`TRANSCRIPTION_MODEL_NAME` 和 `TRANSCRIPTION_MAX_COMPLETION_TOKENS`；workflow 会将它们映射到转写脚本读取的 `TRANSCRIPT_PROVIDER` 和 `MIMO_*` 环境变量。本地也可直接设置这些内部环境变量。其他转写配置项包括 `DASHSCOPE_API_KEY`、`DASHSCOPE_DATA_URI_CHUNK_SECONDS` 和 `DASHSCOPE_DATA_URI_MAX_MB`。

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
├── landing/                 # Astro 网站与交互界面
├── scripts/
│   ├── lib/rss.ts           # RSS parser + transcript cleaner
│   ├── refresh-cache.ts     # RSS → scan-cache
│   ├── plan.ts              # scan-cache → plan
│   ├── run-plan.ts          # plan → transcript + generation
│   ├── build-all.ts         # episodes + landing → dist
│   ├── dev-episode.ts       # 注入共享控件并启动单集开发服务
│   ├── audit-brand.ts       # 源码与构建产物品牌检查
│   ├── audit-home.ts        # 首页交互与响应式检查
│   ├── audit-layout.ts      # 单集 Slidev 画布溢出检查
│   ├── verify-slide-routing.ts # 构建产物与深度链接检查
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

仓库地址为 `https://github.com/DoubleMice/resonote.git`。构建脚本与 GitHub Actions 统一使用 `RESONOTE_*` 环境变量，浏览器阅读记录保存在 `resonote:readEpisodes:v1`。

部署流程：

手动部署会安装依赖与 Chromium、校验单集元数据、组装全部页面、检查首页交互和响应式布局，并验证 Slide 路由。单集视觉笔记按输入文件的 SHA-256 指纹复用 GitHub Actions 缓存；`slides.md`、单集静态资源、共享样式、共享返回控件、依赖锁文件或部署 base 变化时，只重建受影响的单集。Astro 页面仍会每次重建，GitHub Pages 也仍会上传完整的 `dist/`，因为 Pages 发布接口接收的是整站 artifact。生成工作流还会安装 `ffmpeg`、整理新内容、补齐 `published_sort` 和 `generated_at`，并在部署前提交生成结果。

视觉笔记的返回控件只维护在 `episodes/_templates/global-bottom.vue`。构建、布局检查和单集开发会临时注入该文件，并在命令结束后恢复单集目录，避免每期内容保存一份重复组件。

仓库 Pages 设置使用 **GitHub Actions**。

## 已知限制

- CI 内容生成需要 `CONTENT_API_KEY` secret，默认自动转写需要 `TRANSCRIPTION_API_KEY` secret；两者分别配置、互不复用。显式 `TRANSCRIPTION_PROVIDER=dashscope` 时，转写还需要 `DASHSCOPE_API_KEY` secret。缺少对应的转写 secret 时，`needs_transcript` 条目只进入队列。
- Megaphone/Unchained 分段转写需要系统 `ffmpeg`；CI 已安装，本地执行需确保 `ffmpeg -version` 可用。
- `sources.yml` 中 `rss_url` 为空的 source 会写空 cache/plan。
- GitHub Pages 深度链接依赖 `landing/public/404.html` 做 fallback。
- 只修改转写队列、`data/transcripts/.chunks/` 或脚本缓存逻辑时，无需重建 GitHub Pages；新增/修改 `episodes/*`、`landing/*`、`data/transcripts/*.txt` 后生成 deck 或页面内容时需要重新 build/deploy。

## 致谢

本项目修改自 PodDeck，在此基础上迁移到 RSS 订阅流水线并重建了内容站。

Slides 由 [Slidev](https://sli.dev) 渲染。生成由 [Claude Code](https://claude.com/claude-code) 驱动。
