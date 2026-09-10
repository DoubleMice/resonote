# 声笺 Resonote — Slidev 最佳实践与操作流程

一个自动把 RSS 长播客访谈转成结构化 Slidev 演示文稿的 pipeline。这个文件是给 Claude Code 看的项目级规范。**强制性硬规则（事实准确性、长度要求等）在 `scripts/prompts/slides-system-rules.md`**，那份会注入 `run-plan` 启动的内容生成 subprocess。本文件是补充的"项目便利"和"已知陷阱"。

## 技术栈

- **Slidev** `slidev-theme-academic` + `colorSchema: light`；新笔记使用共享 HTML 图示与 `diagramMode: static`，旧 Excalidraw 保持兼容
- **Landing**: Astro + Tailwind（env-driven base path）
- **自动化**: `claude -p --model opus` 跑无人值守 subprocess；DeepSeek Anthropic-compatible 下系统规则拼进 user prompt，避免 `system` role 兼容问题
- **转写**: 默认 MiMo `mimo-v2.5`；可用 `TRANSCRIPT_PROVIDER=dashscope` 回退 DashScope；受限音频走 `ffmpeg` 切片 + data URI
- **部署**: GitHub Actions → GitHub Pages（定时 / 手动 workflow_dispatch）

## 项目结构

```
resonote/
├── sources.yml              # 订阅的频道 + 每个 source 的 min_duration / min_date / cache_limit
├── tags.yml                 # 标签词表（约束 LLM 不瞎发明标签）
├── episodes.yml             # 早期 discover/download 用的目录（逐步被 plan 替代）
├── CLAUDE.md                # ← 这份文件：项目级规范
├── plan.md                  # 项目整体规划
│
├── data/
│   ├── transcripts/         # 清洗过的字幕 .txt（git 提交，grep 验证引言用）
│   ├── scan-cache/          # RSS normalized JSONL（.gitignore，按需刷新）
│   └── plans/               # 按 source 的执行计划 yml（git 提交，状态追踪）
│
├── episodes/
│   ├── _templates/          # 共享 style.css、article-theme.css、public/ 通用 excalidraw
│   └── <videoId>/           # 每集的内容源文件
│       ├── slides.md        # ← CC 生成
│       ├── meta.yml         # ← CC 生成
│       ├── article.html     # ← CC 生成
│       └── public/*.excalidraw
│
├── landing/                 # Astro 主站
│   ├── astro.config.mjs     # base = process.env.RESONOTE_BASE || '/'
│   ├── public/404.html      # GH Pages SPA fallback
│   └── src/{pages,components,layouts,lib}/
│
├── scripts/
│   ├── prompts/
│   │   ├── slides-system-rules.md  ★ 硬规则，注入系统提示词
│   │   └── slides-task.md          任务模板（{{ID}} / {{SOURCE}} / {{TITLE}}）
│   ├── refresh-cache.ts     # RSS → data/scan-cache/*.jsonl
│   ├── plan.ts              # cache → 过滤 → data/plans/*.yml
│   ├── run-plan.ts          # 执行 pending（download + claude -p）
│   ├── analyze-scan.ts      # 时长阈值统计表
│   ├── validate-artifacts.ts # 确定性产物契约检查
│   ├── build-all.ts         # slidev build × N + astro build + 组装 dist/
│   └── lib/                 # yaml-io / spawn / yt / log / types
│
└── .github/workflows/
    └── deploy.yml           # workflow_dispatch + push:main 自动部署 gh-pages
```

## 自动化 pipeline（当前实际在用的方式）

```
┌───────────────┐  fetch RSS
│ sources.yml   │───────────────┐
└───────────────┘               │
                                ▼
                ┌──────────────────────────┐
                │ data/scan-cache/*.jsonl  │  normalized RSS entries
                └────────┬─────────────────┘
                         │ plan.ts (date + duration filter + dedup)
                         ▼
                ┌──────────────────────────┐
                │ data/plans/<source>.yml  │  git-tracked state
                └────────┬─────────────────┘
                         │ run-plan.ts (+ optional ASR)
                         ▼
                ┌──────────────────────────┐
                │ episodes/<id>/           │  slides.md + meta.yml
                └────────┬─────────────────┘
                         │ build-all.ts
                         ▼
                    dist/ → GH Pages
```

**常用命令**：

```bash
# 扫频道拉全 metadata（有新集时跑）
pnpm run cache:refresh                         # 所有 source 并行
pnpm run cache:refresh -- --id=lex-fridman     # 单源

# 从 cache 生成/更新 plan 文件
pnpm run plan                                  # 所有 source
pnpm run plan -- --min-duration=5400           # 临时改阈值

# 执行 plan 里 pending 的条目
pnpm run plan:run                              # 全部
pnpm run plan:run -- --limit=3                 # 限制数量
pnpm run plan:run -- --concurrency=2           # 并行
pnpm run plan:run -- --id=lex-fridman          # 只跑某源
pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --transcribe-wait-minutes=2
pnpm run plan:run -- --dry-run                 # 预览

# metadata 校验 + 构建 + 预览
pnpm run normalize:meta                         # 校验 episodes/*/meta.yml
pnpm run normalize:meta -- --fix                # 修复可恢复 YAML 问题，例如非法 \'
pnpm run validate:artifacts                     # 校验 metadata、frontmatter、引用和文件契约
pnpm run build                                 # 所有 generated episode + landing → dist/
pnpm run preview                               # serve dist/ on :4173

# 快速访问单集
pnpm run dev:episode <videoId>                 # slidev dev 热重载

# 分析（无 API 调用，纯本地 jsonl）
pnpm run analyze                               # 默认 30/60/90 min 阈值
pnpm run analyze -- --thresholds=45,60,120

# 真实 API 转写 E2E（读取当前环境、.env.local、scripts/env.local.sh）
pnpm run e2e:transcription
```

**一键从头到尾**：`cache:refresh → plan → plan:run → normalize:meta → build → git commit → git push`。push 不触发生成部署；部署由定时或手动 workflow 触发。

`Generate and Deploy` 为 `plan:run` 传入 `--allow-transcription-failures`：单集自动转写失败保留在 plan 中，并在 Actions 摘要和警告中显示，随后继续执行发布检查。内容生成失败、生成时的产物或布局审计失败、全站校验与构建失败仍阻止部署。未传该参数的命令行调用保持严格模式，转写失败仍返回非零退出码。

生成性能与超时：
- 手动 Actions 可选 `concurrency=2` 做双并发小批量验证；定时任务读取仓库变量 `GENERATE_CONCURRENCY`，未设置仍为 1。CLI 支持 `--concurrency=1..4`，重复 episode ID 会在处理前报错。
- `GENERATION_TIMEOUT_MINUTES` 默认 60（上限 120）；生成子进程超时后发送 TERM，5 秒后强制结束。在 Linux CI 上清理整个进程组。Windows 回退为只终止直接子进程。
- `MIMO_TIMEOUT_MS` 默认 600000，覆盖每个音频块的请求及响应体读取；超时按原有转写失败流程记录。
- Actions 摘要与 `pipeline-timing` 产物记录整轮、转写、下载、预处理、单块请求、生成和外层审计耗时。各阶段有嵌套或重叠，不能直接相加；生成耗时包含模型内部工具调用与自审，不能当作纯 API 时间。产物保留 14 天，不上传原始生成日志或音频。
- 先用两集做双并发验证，比较成功集数、人工抽读、耗时与限流情况，再将仓库变量设为 2；不要以失败提前结束的耗时作为性能改善。当前仍先转写、后生成。

## 自动转写

- `run-plan.ts --auto-transcribe` 会提交 `needs_transcript` episode 到转写 provider，并把结果写入 `data/transcripts/<id>.txt`。
- 默认 `TRANSCRIPT_PROVIDER=mimo`，使用 MiMo `chat/completions` 音频理解接口；设置 `TRANSCRIPT_PROVIDER=dashscope` 可回退 DashScope `qwen3-asr-flash-filetrans`。
- MiMo 配置：`MIMO_API_KEY`、`MIMO_BASE_URL`（默认 `https://api.xiaomimimo.com/v1`）、`MIMO_MODEL`（默认 `mimo-v2.5`）、`MIMO_MAX_COMPLETION_TOKENS`（默认 32768）。
- DashScope 配置：`DASHSCOPE_API_KEY`、`DASHSCOPE_DATA_URI_CHUNK_SECONDS`、`DASHSCOPE_DATA_URI_MAX_MB`。
- MiMo 默认对所有 RSS 音频先本地下载，用系统 `ffmpeg` 转为 `16kHz mono 32kbps MP3`，按 `DASHSCOPE_DATA_URI_CHUNK_SECONDS`（默认 900 秒）切片，再用 data URI 分段提交，避开 URL 抓取差异和 MiMo URL 100MB 限制。
- DashScope 普通公网音频直接用 URL 提交；Megaphone/Unchained 音频走本地下载、切片和 data URI。
- 分段任务保存在 `data/transcription-jobs.yml`；临时 chunk 文本放在 `data/transcripts/.chunks/`，目录名是 `sha256(parentKey:attemptKey).slice(0, 32)`，避免 URL 过长导致 `ENAMETOOLONG`。
- CI 已安装系统 `ffmpeg`；本地执行分段转写前用 `ffmpeg -version` 验证环境。
- `pnpm run e2e:transcription` 会发起真实 API 请求，配置加载顺序为当前环境变量、`.env.local`、`scripts/env.local.sh`，不创建额外本地配置文件。
- 只修改转写中间状态、chunk cache 或 ASR 脚本时无需重建 GitHub Pages；新增 transcript 并生成/修改 deck 后才需要 build/deploy。

## RSS 订阅输出

- `landing/src/pages/rss.xml.ts` 在 astro build 时静态生成 `dist/rss.xml`（RSS 2.0），随 build-all.ts 拷贝进最终 dist，生产地址为 `https://resonote.doublemice.top/rss.xml`（自定义域名，CNAME 指向 doublemice.github.io）。
- 收录范围 = 可读内容（`status: generated` 或有 `article_path`），按 published 倒序、全量收录、不设上限；item 链接优先文章（`article.html`），无文章时指向 deck，描述里给出两种格式的链接。
- 生成逻辑在 `landing/src/lib/rss.ts`（纯函数，`landing/src/lib/rss.test.ts` 有单测，进 `pnpm test`）；描述是双重转义的 HTML，订阅器解析后按富文本渲染。
- 发现入口：`Base.astro` head 里的 `<link rel="alternate">` 自动发现 + 页脚"RSS 订阅"链接；绝对 URL 依赖 `RESONOTE_SITE` + `RESONOTE_BASE`（CI 已设置），本地构建默认指向 `http://localhost:4173`。
- 改动 episode 内容或 meta 后需要 build/deploy 才会更新 feed；feed 只依赖 meta 数据，不依赖 transcript 或转写状态。

## Base Path 环境变量

```js
// landing/astro.config.mjs
const base = process.env.RESONOTE_BASE || '/'       // 本地 '/' / 生产 '/'（自定义域名 resonote.doublemice.top）
const site = process.env.RESONOTE_SITE || 'http://localhost:4173'
```

- 生产主域为 `resonote.doublemice.top`（Cloudflare CNAME → doublemice.github.io，DNS only），CI workflow 里设 `RESONOTE_BASE=/` + `RESONOTE_SITE=https://resonote.doublemice.top`
- 旧的 `doublemice.github.io/resonote` 链接由 GitHub Pages 自动 301 到自定义域名
- **绝对路径链接必须走 `landing/src/lib/url.ts` 的 `url()` helper**，手写 `href="/..."` 会断裂
- Slidev 每集 build 传 `--base ${SITE_BASE}episodes/<id>/ --router-mode hash`（由 build-all.ts 处理）
- 返回按钮用 `<a href="../../">`（相对路径，base 无关）

## 导出验证（playwright-chromium）

```bash
pnpm exec playwright install chromium           # 一次性
pnpm exec slidev export episodes/<id>/slides.md --format png --output episodes/<id>/audit
# 然后 Read 每张 PNG 看效果
```

---

## 内容生成流程

### 1. 故事化，不要框架化

跟着原文的叙事脉络走，不要硬套"元认知/第一性原理"这种抽象框架。让每个点自然引出下一个点——访谈本身就是最好的结构。

长文按 `scripts/prompts/slides-system-rules.md` 的 RULE 10 单独组织，可以合并访谈中反复出现的同一话题，但要保留时间关系、观点归属和限定条件。下文的页数、概览卡片和核心金句要求只适用于幻灯片。文章不设固定节数、段数或金句配额；先用具体问题或细节引入，再按材料展开。忠实转述用自然的归属表达，只有新增的编辑解释才标注“作者概括”。

### 2. 识别三种内容并分别处理

| 类型 | 处理方式 |
|------|----------|
| 主要论点 | 普通 slide，用卡片/边框/颜色区分层次 |
| 金句 | `layout: quote` 或 `layout: statement` |
| 数据/事实 | 做成彩色卡片网格（不要用 `layout: fact`——academic 主题下会左上角空荡） |

### 3. 去掉章节分隔页

不要用 `layout: section` 做 "Part 1/2/3..." 的过渡页。它们内容太薄，翻起来像填充物。内容自己流畅衔接更好。

### 4. 每页信息密度要够

- **避免一页只有一句引言或一个数字**（会显得非常空）
- 为关键数字补足上下文（"这个数字是什么？为什么值得关注？意味着什么？"）
- 金句页也要加出处或解释性副标题

---

## 视觉最佳实践

### 统一视觉系统

生成、审计、开发和构建会临时注入 `episodes/_templates/style.css` 中的声笺
Resonote 共享 editorial theme。它统一处理纸张色背景、标题衬线字体、正文中文
字体、卡片圆角、阴影和语义色。生成内容时：

- 不要修改 `style.css`，不要在 `slides.md` 内写 `<style>`。
- 封面由 `class: text-center` 自动使用深色杂志风格；正文页使用暖白纸张背景。
- 一页只设一个视觉焦点：卡片组、对比、引言或图解四选一，不要把每句话都装进框里。
- `opacity-40` / `opacity-50` 只用于日期、出处等元信息；正文至少使用 `opacity-70`。
- 不要用 emoji 作为卡片标题或结构图标；使用编号、短标签或矢量图。
- 文章源文件只保留语义 HTML，不内联 CSS、脚本或阅读控件；构建阶段统一注入
  `episodes/_templates/article-theme.css`。文章使用统一的 `.cards` / `.card` /
  `.c-blue` 等语义类，不能每篇自创一套 CSS。

### Two-cols 大图布局是王牌

每 3-5 页就应该有一张双栏图文页。整页标题用 `two-cols-header` 横跨两栏，标题后加 `::left::` 再写左栏正文，避免标题挤在半栏中拆开中文词组。旧文稿中以单个一级标题开头的标准 `two-cols` 页面，在构建、审计和开发时自动适配；结束后恢复源文件。自定义槽位与左右各有标题的页面不自动调整。

```md
---
layout: two-cols-header
---

# 标题

::left::

左侧要点
- 点 1
- 点 2

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="steps" role="group" aria-label="两个步骤">
<div class="rn-note-steps">
<div class="rn-note-card"><strong>准备</strong></div>
<div class="rn-note-card"><strong>交付</strong></div>
</div>
</div>
</div>
```

**关键**：右侧必须用 `flex justify-center items-center h-full pl-4` 包装，否则图会贴边。

### 图示选择

- 卡片、对照、步骤、阶段和分层：使用 `rn-note` 共享样式，具体模式见系统规则 RULE 5。
- 有分支、汇合等关系的图：用普通 Mermaid 代码围栏，设置 `diagramMode: static`。发布构建和 `audit:layout` 本地导出 SVG 并内嵌到该集内容模块，不发送绘图 CDN 请求。
- 不使用 Mermaid 围栏参数、init 指令、外部图标或字体。缩小图不会解决中文可读性问题，复杂图应拆页。
- `dev:episode` 保留 Slidev 原生 Mermaid 热更新预览；交付前必须运行静态管线的 `audit:layout --png --keep`。
- 新笔记不创建 Excalidraw JSON。旧笔记有 `<Excalidraw>` 时仍需声明 `slidev-addon-excalidraw`。

### v-mark 的坑

`v-mark.highlight.yellow` 作用到 **会自动换行的中文文本** 上时，高亮矩形会错位、溢出、覆盖其它元素。

- ❌ 不要在长中文短语上用 `.highlight`
- ✅ 短英文词或单行文本可以用
- ✅ 替代方案：`<strong>`、`bg-yellow-100`、彩色边框

### 颜色卡片配色系统（已验证）

| 语义 | 配色 |
|------|------|
| 中性信息 | `bg-blue-50 border-l-4 border-blue-500` |
| 成功/积极 | `bg-green-50 border-l-4 border-green-500` |
| 警告/强调 | `bg-yellow-50 border-l-4 border-yellow-500` |
| 危险/风险 | `bg-red-50 border-l-4 border-red-500` |
| 过渡/中立 | `bg-purple-50 border-l-4 border-purple-500` |
| 行动项 | `bg-orange-50 border-l-4 border-orange-500` |

---

## 动画哲学

**默认不加动画**。每次翻页所有内容一次性展示。

- ❌ 不要用 `<v-click>` / `<v-clicks>` 包裹大段内容
- ❌ 不要用 `v-clicks` 搞渐进披露
- ✅ 让每页都是一个完整的"海报"
- ✅ 特殊场景（如 magic-move 代码变形）再考虑交互

**为什么**：
1. 看演讲时频繁按空格很分心
2. `slidev export` 默认只截第一个 click 状态——如果用了 v-click，导出的 PDF/PNG 会漏掉大部分内容
3. 静态 slide 更容易审查和校对

---

## 视觉验证流程（重要）

**每次重要修改后，必须导出 PNG 检查实际渲染**。dev server 上看起来对的东西，导出后可能完全不同。

```bash
# 1. 确保 playwright-chromium 已安装
pnpm exec playwright install chromium

# 2. 导出全部 slides 为 PNG
pnpm exec slidev export episodes/<id>/slides.md --format png --output episodes/<id>/screenshots

# 3. 用 Read 工具逐页检查可疑页面
# Read C:/path/to/screenshots/6.png
```

**必须检查的页面**：
- 所有含 `mermaid` 的页（防止被裁）
- 所有用 `v-mark` 的页（防止高亮错位）
- 所有 `layout: fact` / `layout: quote` 的页（可能太空）
- 所有 `two-cols` 页（确认图片大小/位置对）
- 有大量文字的页（防止溢出）

---

## 主题选择

实测过的：

| 主题 | 安装 | 适合 |
|------|------|------|
| `@slidev/theme-default` | 默认 | 通用、中性 |
| `@slidev/theme-seriph` | `npm i @slidev/theme-seriph` | 优雅衬线、长文访谈 |
| `slidev-theme-academic` | `npm i slidev-theme-academic` | **当前使用**、深度内容、学术感 |

切换主题记得 `colorSchema: light`（避免默认跟随系统暗色）。

主题画廊：https://sli.dev/resources/theme-gallery

---

## Frontmatter 模板

```yaml
---
theme: academic
colorSchema: light
diagramMode: static
title: '演示标题'
info: |
  简短说明
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---
```

- `mdc: true` — 启用 MDC 语法（`::component{}`、`{style="..."}`）
- `drawings.persist: false` — 关闭持久化绘图（不需要时）
- `transition: slide-left` — 温和的默认过渡

---

## 常用 slide 模板

### 彩色卡片网格（事实/对比）

```md
# 标题

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 标签
<div class="text-4xl font-bold text-red-600 my-2">数字</div>
<div class="text-xs opacity-70">说明</div>

</div>
<!-- ...重复 -->
</div>
```

### 左右对比

```md
# 标题

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 对比 A
内容...

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 对比 B
内容...

</div>

</div>
```

### 引文加背景

```md
<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"引文内容"

</div>

<div class="mt-6 text-sm opacity-70">
补充说明（谁说的、什么场景）
</div>
```

---

## 旧 Excalidraw 图兼容

- 以下仅适用于维护已有图，不用于新笔记生成。
- 文件放在 `public/*.excalidraw`，引用用 `./name.excalidraw`
- 手写 JSON 的话用 `fillStyle: "hachure"` + `roughness: 1.5` 才像手绘
- 最简方案：去 https://excalidraw.com 画好后导出 `.excalidraw` 到 `public/`
- 图片在 two-cols 右侧时推荐宽度 `w-[460px]` 或 `w-[480px]`

---

## 已知陷阱（build-all.ts / landing 实际踩过）

### 1. meta.yml list item 内嵌引号后跟文字 → YAML 解析错

❌ `- "install base is everything" —— CUDA 押 GeForce 曾让市值跌到 15 亿`

解析器以为 `"install base is everything"` 是完整 scalar，后面的 `——...` 报错。

修法：
- ✅ 整行不加引号：`- install base is everything —— CUDA 押 ...`
- ✅ 或整行加单引号：`- '"install base is everything" — CUDA 押 ...'`

System rules 里有提示，subprocess 也可能踩。发现就直接手改，顺便 grep 整个 repo 看有没有类似。

### 1.1 meta.yml 双引号字符串里的非法反斜杠转义

❌ `- "Enzo 不是\'纯赛车狂\'"`

YAML 双引号只支持固定转义序列，`\'` 会报 `Invalid escape sequence`。CI 会在 build 前运行 `pnpm run normalize:meta -- --fix`，把可恢复问题转成 YAML 库输出的安全格式。本地遇到 `YAMLParseError` 时先跑：

```bash
pnpm run normalize:meta -- --fix
pnpm run build
```

### 1.2 分段转写 chunk cache 路径过长

Megaphone URL 很长，chunk cache 目录名不能直接使用 URL 或 URL 的 base64。当前实现使用 `sha256(parentKey:attemptKey).slice(0, 32)` 作为 `data/transcripts/.chunks/<hash>/`，状态追踪字段仍保存在 `data/transcription-jobs.yml`。

### 2. YouTube 自动字幕识别错误 → 写到 slides 里是脏词

常见错误：`quad code` → **Claude Code**、`cloud code`（AI 语境）→ **Claude Code**、`Lex Friman` → **Lex Fridman**、`O Pus` → **Opus**。

system rules 的 RULE 2.5 列了完整修正表。生成时 subprocess 会自己正规化，但 transcript 文件本身**不要改**（grep 验证需要原始 caption）。

### 3. Slidev SPA 部署到 GH Pages 深度 URL 404

GH Pages 不支持 SPA history 路由。当前每集统一使用 hash 路由（`/episodes/<id>/#/2`）；`landing/public/404.html` 会把旧的 `/episodes/<id>/2` 深链和 Slidev 52.16.0 产生的重复 base URL 转成对应 hash 路由。

Slidev 52.16.0 存在非根 `--base` 导航回归，会把 base 拼两次并在第二页显示 404。根 workspace 通过 pnpm override 固定 `@slidev/cli` 版本，升级时必须运行 `pnpm run verify:routing`；该命令会检查所有产物版本一致，并对最早和最新 episode 做浏览器翻页、刷新与旧链接迁移验证。

### 4. 生成只使用 `run-plan.ts`

`pnpm run generate` 与 `pnpm run plan:run` 指向同一个入口。真实状态写入
`data/plans/<source>.yml` 和单集 `meta.yml`；不要恢复依赖 `episodes.yml` 与
未实现 `sync` 命令的旧生成路径。

---

## 反模式（不要做）

- ❌ 用 `layout: section` 章节分隔页（太空）
- ❌ 用 `layout: fact` 放孤零零的数字（academic 主题下左上角空荡荡）
- ❌ 在长中文短语上用 `v-mark.highlight`（渲染会错位）
- ❌ 超过 5 节点的 mermaid TD 流程图（会被裁）
- ❌ 大量 `<v-click>` 渐进披露（导出会漏内容）
- ❌ 章节分隔页后马上再一页全文字（节奏不对）
- ❌ 没导出 PNG 验证就声称"做好了"
- ❌ 写完 slides.md 就收工，不逐页审查
- ❌ 10-15 页就算一个 episode（不够深度，对不起 2 小时的访谈）
- ❌ 整个 deck 只有 0-1 张图示（视觉密度不够）
- ❌ 没有核心金句总结页（读者记不住东西）
- ❌ episode 没有返回 landing 的入口（用户迷路）

---

## Episode 必备清单（每个 deck 都要有）

### 结构要求（硬指标）

1. **长度**：至少 **18-24 页**。2+ 小时的访谈至少值得 20 页。
2. **图示比例**：**至少 20%** 的页面用共享 HTML 图示或静态 Mermaid。一个 20 页 deck 至少 4 张图示。
3. **核心金句页**：倒数第二页必须是"核心金句"——4-6 条精选引言，每条配简短 context。
4. **内容导航**：`build-all.ts` 在组装最终 HTML 时统一注入返回首页、上一篇和下一篇；不要在单集目录创建 `global-bottom.vue`。
5. **开场**：前 2 页讲清楚"为什么这期特别"——不只是标题，要让读者 10 秒内理解要讲什么。
6. **结构感**：不要平铺直叙。每 3-5 页应该有一次视觉 break（quote / statement / 大图）。

### 共享返回控件

内容页顶部导航只维护在 `scripts/lib/deck-chrome.ts`，并由 `build-all.ts` 在组装阶段注入。Slidev 构建期间会屏蔽单集目录里可能残留的 `global-bottom.vue`，避免旧控件重新出现。

### 核心金句页模板

```md
# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"第一个金句原文"
<div class="text-xs opacity-60 mt-1 not-italic">— 出自/context</div>
</div>

<!-- 重复 4-6 次，每条用不同颜色 -->

</div>
```

---

## 🚨 事实准确性（最高优先级）

**这是比任何视觉细节都重要的铁律。** 违反这条的内容必须全部删除。

### 三条不可妥协的规则

1. **每一句引言必须能在 transcript 里 grep 到**  
   不能"Jensen 大概会说..."这样写。不能把其他访谈的内容串到另一个人身上。
   写完后**必须**用 `Grep` 在 `data/transcripts/<id>.txt` 里验证关键词和人名。

2. **不要在不同访谈之间串台**  
   上一期访谈的"miso"是 Boris 说的，不是 Jensen 说的。不要因为两个故事都"感觉对味"就交叉。  
   **每写一个 episode 之前，清空脑子里其他 episode 的 context，只看当前 transcript。**

3. **不要编细节**  
   Jensen 说"DRAM CEO 们"，就不要加"Samsung 和 SK Hynix"。  
   Jensen 说"3 年前"，就不要写"2016-2018"。  
   Jensen 说"GPU 在太空"，就不要给他加一句他没说过的 "Not this decade, but someone's going to do it"。  
   **你不是 ghostwriter，你是 transcriber。**

### 生成流程（硬流程）

写 slides.md 时必须遵守：

1. **先读 transcript 的相关段落**（`Grep` 关键词，然后 `Read` 该行前后 30 行）
2. **每一句引用、每一个数字、每一个具体细节**都先在 transcript 里找到出处
3. 如果找不到原文出处就 **不要写**——这是模糊的框架，用"嘉宾讲了..."带过
4. 对每一页标注心理 tag：**事实 / 框架**
   - **事实**（F）= 嘉宾原话或可直接验证的数字
   - **框架**（F★）= 作者的概括、gloss、或教学用类比（这些必须明确，不能伪装成嘉宾原话）
5. **核心金句页只能用带精确出处的引言**（可以搜到原文的）

### 审查时的必查项

对每一页都要问：

- [ ] 这一页里的每一句引言，都能在 transcript 里找到原文吗？
- [ ] 具体数字（年份、金额、百分比、公司名）都核对过了吗？
- [ ] 有没有把其他 episode 的内容串进来？
- [ ] 我写的"嘉宾讲了一个鲜为人知的故事"里，这个故事是不是被我自己脑补出来的？

**任何一条回答"不确定"——立即去 transcript 验证。不验证不许继续。**

---

## 页面逐页审查流程（必须执行）

**写完 slides.md 不算完**。必须执行以下审查循环：

1. `pnpm run build` 产出 dist
2. 启 `npx serve dist -p 4173`
3. 用 playwright 截图 **每一页**（不是抽样）
4. 逐页 `Read` 截图，对每一页问自己：

   - [ ] 信息密度够吗？还是只有标题 + 一行字？
   - [ ] 视觉上是否有东西？（卡片/边框/颜色/图）
   - [ ] 这一页如果单独存在，读者能理解吗？
   - [ ] 这一页的核心 takeaway 是什么？一句话能概括吗？
   - [ ] 是否和前后页有节奏/层次？或者只是重复的 bullet 列表？
   - [ ] 中文/英文排版有没有溢出、错位？
   - [ ] 如果有图，图和文字有没有冲突/冗余？

5. 对每一页列出具体问题（不是"看起来还行"），然后修
6. 改完重新 build → 重新截图 → 再审查
7. 直到每一页都能自己说"这一页我满意"

**不做这个审查，所有的工作都只是"半成品"**。

---

## 全 deck 长度与结构指南

对于 2+ 小时的访谈，目标结构：

| 段落 | 页数 | 内容 |
|---|---|---|
| 开场 | 2 | Cover + "为什么这期特别" |
| 核心论点 1-3 | 4-6 | 最重要的主题，每个 1-2 页 + 可能的大图 |
| 故事 / 反直觉点 | 3-5 | 嘉宾讲的具体故事、数据、反例 |
| 深度/哲学 | 2-4 | 嘉宾的世界观、价值判断 |
| 核心金句 | 1 | 4-6 条精选引言 |
| 结尾 | 1 | end layout |

**总计：13-19 页是底线，20-25 页是目标**。低于 13 页就是偷懒。
