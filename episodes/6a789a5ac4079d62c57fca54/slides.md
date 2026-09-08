---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 用数字看 AI：第 23 页独播
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 用数字看 AI

<div class="text-xl mt-5 opacity-80">一场只看数字的 AI 应用观察：资本开支、模型价格、工作智能体与收入</div>

<div class="mt-12 text-sm opacity-60">屠龙之术 · 明浩独播 · 2026 年 8 月 · 34 分钟</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 资本开支仍在上调

头部科技公司的投入已接近 GDP 的 3%；收入能否接住新增建设，仍是悬念。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 软件被重新定价

AI 相关标的与传统软件、SaaS 的走势分开，市场在押注替代会先发生在哪里。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### ARR 的口径并不统一

OpenAI 与 Anthropic 的数字很大，但是否扣除云厂商分成，影响对收入的理解。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 模型价格留下利润空间

价格大幅下调后，只要成本不变，毛利率未必同步大幅下降。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 工作智能体还在早期

访问量、安装量、日活与付费人数混在一起时，很容易把市场看大。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 新需求仍待出现

从训练数据到实验循环，应用之外还有一层为模型服务的基础设施在增长。

</div>

</div>

---

# 标普 500 的新高，背后是强劲需求

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 拉长到一年看

主持人回看去年 8 月至今年 8 月：经历 7 月回调、贸易摩擦与 DeepSeek 事件后，标普 500 仍再创高点。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 产业链没有下调预期

他观察到，云厂商、芯片、半导体与 SaaS 公司都没有下调预期；这说明需求强，也让投入规模显得更敏感。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这不是用指数证明 AI 必然成功。节目把指数当作背景：市场仍在为整条产业链的扩张定价。
</div>

---
layout: two-cols-header
---

# AI 与传统软件的估值分歧

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">主持人把过去约一年半的美股核心 TMT 公司分成两组：AI 相关标的走强，传统软件与 SaaS 承压。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他的解释是，市场担心 AI 会替代一部分原有软件能力，因此把两组资产放进同一份存量预算里比较。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">图中的曲线表示节目描述的方向，不是指数的精确复刻；重点在于市场给出的相对定价。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./market-split.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols-header
---

# 资本开支上调，需要收入继续跟上

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人说，美国头部科技公司的资本开支已接近 GDP 的 3%。这个比例让他联想到光纤建设曾到过的危险区间。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">他观察到 AWS、微软、Google 与 Meta 对 2026 年资本开支的计划，相比 2025 年接近翻倍。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">仍无人下调预期；节目关心下一年还能上调多少，并没有给出预测。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./capex-path.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 云服务与模型 ARR：两种看得见的收入

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 云服务先反映需求

主持人提到，AWS 季度收入增速重回约 10%；微软云和 Google Cloud 的季度增速被描述为 40%、50%、60% 的区间。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### OpenAI：逾 400 亿美元

节目说，OpenAI 7 月 ARR 超过 400 亿美元；这里使用的是扣除微软分成后的到手收入口径。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Anthropic：传闻逾 700 亿美元

节目转述的数字未扣除 AWS 与 Google Cloud 的分成，因此不能和前一张卡直接比较。

</div>

</div>

<div class="mt-5 text-sm opacity-70">同一笔交易可以被渠道、发行方或服务商分别记录。ARR 很重要，但先要问清楚它是谁确认的收入。</div>

---

# 从 Coding 走向企业服务

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Anthropic 的扩展方向

节目列出 Finance、Legal、Security、Life Science、Design 与 Enterprise。主持人转述的远期预期中，Coding 收入占比降至 40%。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 企业版本成为共同方向

Google Cloud 推出 AI Enterprise；OpenAI、WorkBuddy、千问办公与豆包企业版也被主持人列为企业场景的布局者。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
企业服务的含义不是简单多一个套餐：模型要进入财务、法务、安全与组织内协作，收入和交付方式都会变化。
</div>

---

# 价格砍半，毛利率为什么只少 10 个点

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 原始价格
<div class="text-3xl font-bold text-blue-600 my-2">1 → 10</div>
<div class="text-xs opacity-70">成本 1 元，售价 10 元，毛利率为 90%。</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 半价销售
<div class="text-3xl font-bold text-green-600 my-2">1 → 5</div>
<div class="text-xs opacity-70">售价减半后，毛利率仍为 80%，比原来少 10 个百分点。</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 按 2.5 折推演
<div class="text-3xl font-bold text-orange-600 my-2">1 → 2.5</div>
<div class="text-xs opacity-70">若成本不变，毛利率为 60%；节目用它说明降价空间仍可能存在。</div>

</div>

</div>

<div class="mt-5 text-sm opacity-70">这是主持人的简化算术，不是在估算任何一家模型公司的真实成本、折扣或毛利率。</div>

---
layout: two-cols-header
---

# 模型竞争：从斩杀线往右上方走

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人用能力为纵轴、价格为横轴，解释 DeepSeek Flash 0730 正式版带来的压力：能力提高，同时价格更低。</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">落在基准右下区域的模型，比基准更贵且能力更弱；按这个单一指标，它们很难说明使用理由。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他也承认，单一打分无法概括所有模型能力。图解刻画的是价格—能力竞争的方向。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./price-frontier.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Codex 与 Work：智能体从编程走向办公

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 客户端的变化

主持人换电脑后发现，ChatGPT 下载页中的本地应用已围绕 Codex 展开；旧式纯对话入口变得不显眼。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 产品把工作单列出来

他在 Claude 客户端看到 Chat 与 Work 两个入口，并列出 Co-Work、WorkBuddy、千问办公、豆包企业版与 TreeWork。

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
节目观察到的转向是：Coding Agent 证明了一个场景后，厂商开始把同类交互放到更宽泛的工作任务中。
</div>

---
layout: two-cols-header
---

# 工作智能体的数据，必须按指标读

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">WorkBuddy 的 2,097 万被主持人解释为访问量，甚至只是交互次数，不等同于 MAU 或 UV。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">QuestMobile 统计到 6 月底，中国 PC 客户端安装 AI 应用的用户约为 1,800 万，其中可能包含豆包、千问、元宝等既有客户端。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">另一篇报道被主持人转述为 WorkBuddy 日活在周中、周末间波动，平均达到百万量级。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./work-metrics.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 用户天花板：从白领人群推到小几千万

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 可用人群的估算

主持人没有采用全国 AI 用户总数，而是从白领、城镇就业、钉钉、企微、飞书、WPS 与腾讯会议等口径寻找参照。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 他的主观上限

他给出 1 亿到 2 亿可能需要这类产品的人群，并明确称这是偏乐观的估算。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 再乘覆盖率

若覆盖率按 10% 到 20% 推演，当前盘子是小几千万。这个结果依赖前两个假设，并非已观察到的用户数。

</div>

</div>

---

# 付费没有和月活同速增长

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 豆包原有月活
<div class="text-3xl font-bold text-blue-600 my-2">3—4 亿</div>
<div class="text-xs opacity-70">主持人给出的近似量级。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 假定 1% 转化
<div class="text-3xl font-bold text-yellow-600 my-2">约 300 万</div>
<div class="text-xs opacity-70">这是由月活乘以假定转化率得出的示例，不是实际结果。</div>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 两个月后的报道口径
<div class="text-3xl font-bold text-red-600 my-2">小几十万</div>
<div class="text-xs opacity-70">主持人转述晚点文章，估算约为千分之一量级。</div>

</div>

</div>

<div class="mt-5 text-sm opacity-70">这组数字讨论的是豆包尝试专业版后的付费用户，不应延伸为所有 AI 产品的平均转化率。</div>

---

# 模型之外，还有训练数据与强化学习环境

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 训练数据公司

主持人说，美国一批 AI 数据公司已做到超过 10 亿美元 ARR，举例包括 Scale AI、Superlinear 与 Senso。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 强化学习环境

另一类公司为模型厂商或内部做 AI 落地的企业搭建强化学习环境。它们提供实验与训练所需的具体执行层。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
节目还引用开源报告的观察：给模型与智能体做软件基础设施的项目，在 2026 年前八个月增长较快。这里谈的是工具层，不是硬件基础设施。
</div>

---

# 开源项目也在押注模型与智能体的工具层

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据与任务定义

训练数据公司提供的不是泛泛的数据集，还包括让模型能完成特定任务的样本与标注。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 环境与反馈

强化学习环境让任务可运行、结果可评估；模型据此获得下一轮训练的反馈。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 软件基础设施

主持人引用的开源报告显示，服务模型与智能体的软件工具在增长；这和消费者应用是两条不同的商业路径。

</div>

</div>

---

# 5 亿美元 ARR 俱乐部，应用公司并不多

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据、算力、模型占多数

Scale AI、Lambda、01.AI、Eleven Labs、Midjourney 等被主持人列在超过 5 亿美元 ARR 的非上市 AI 公司中。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 应用名单较短

他列出的应用包括 Cursor、Replit、Artlist、Lovable、Hexfit 与 Minus，数量显得有限。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 规模也会带来并购风险

主持人担心，当某个方向跑出明星公司，它们会被模型厂商盯上；榜单因此不只代表增长。

</div>

</div>

---

# 美国一级市场，应用只占一部分

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 按项目数的热门方向

主持人转述 CB Insights 的 Q2 数据：人形机器人与世界模型居前，随后是 Coding、Legal、模型服务、边缘 AI、图像与视频生成、个人助手、AI for Science 与 GPU。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 狭义应用的位置

若按他对应用的定义，较接近的方向是 Coding、Legal、图像与视频生成、Personal AI Assistant；其中 Coding 已是竞争最激烈的领域。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
这份投资热度图不能预测下一个爆款。它只是说明，资本仍同时押注硬件、模型、工具与少数垂直应用。
</div>

---

# 国内增长榜：巨头产品占据大体量用户

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### App 端的千万级 MAU

<div class="grid grid-cols-4 gap-2 mt-3 text-xs text-center">
<div class="p-2 rounded bg-white border">千问</div><div class="p-2 rounded bg-white border">即梦</div><div class="p-2 rounded bg-white border">豆包爱学</div><div class="p-2 rounded bg-white border">豆包</div>
<div class="p-2 rounded bg-white border">元宝</div><div class="p-2 rounded bg-white border">蚂蚁阿福</div><div class="p-2 rounded bg-white border">DeepSeek</div><div class="p-2 rounded bg-white border">夸克</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新公司出现的方向

主持人列举可灵、VivaGo AI、Triple AI、Mercy、ACE Studio、沉浸式翻译、Robbing 与 AI Meta；其中 3D、视频、音乐与虚拟角色较多。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
他的感受是：无论 App 端还是 Web 端，都很难在大规模用户数据中看到很多新创业公司的纯应用爆发。
</div>

---

# Roblox：叙事与股价之间隔着市场

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 第一座高峰：元宇宙

主持人回顾 Roblox 在 2021 年上市后上涨，Meta 更名带来的元宇宙叙事加速了这段行情，随后股价回落。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 第二座高峰：AI 与经营数据

他说，2025 年公司重新上涨时，市场同时看见生成能力变强、DAU 仍在增长与核心数据改善。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 世界模型新闻后的波动

主持人回忆 Gemini 世界模型发布日跌幅约为 26%，最近一轮财报日又出现约 33% 或 37% 的单日跌幅；他强调这只是对口述数字的回顾。

</div>

</div>

---

# 家庭付费率只有 2.2%，行业仍在扩张

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ChatGPT 向免费用户开放新版

主持人把 OpenAI 更新 ChatGPT、向所有用户免费开放 Luna 的消息，放在普及智能的叙事里理解。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 付费家庭的渗透仍低

a16z 的图表被主持人转述为：美国付费使用 AI 工具的家庭占全美家庭 2.2%。这描述的是家庭付费覆盖率，不是用户满意度或收入规模。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
低渗透率可以表示增长空间，也可能表示付费习惯尚未建立。节目只把它当作一个当前时点的观察值。
</div>

---
layout: two-cols-header
---

# 实验循环，成为 AI 训练的一种共同语言

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人引用 Jeff Dean 离开 Google 后公开的 BP：其中一页用实验循环描述业务。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">循环从设定环境、让实验运行、评估结果开始，再由结果倒推下一轮实验设计。这在科学实验中很常见。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">节目认为，这个范式正在被用于 AI：围绕环境、评估与反馈构造可反复运行的训练过程。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./experiment-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="text-xs opacity-60 mb-1">开场的方法</div>“沒有觀點，只做記錄”</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-60 mb-1">市场背景</div>“全產業鏈的需求看起來非常的強勁”</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-60 mb-1">模型价格竞争</div>“所有人做的事情叫逃離斬殺線”</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><div class="text-xs opacity-60 mb-1">明星公司的另一面</div>“这份榜单看起来是一份Top AI初创公司的榜单，但实则可能是一份死亡名单”</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 col-span-2"><div class="text-xs opacity-60 mb-1">家庭付费渗透</div>“一切刚刚开始”</div>

</div>

---
layout: end
class: text-center
---

# “一切皆可Loop可能是当下这个时间点AI行业最大的共识”

<div class="mt-8 text-lg opacity-70">从资本开支到应用收入，节目留下的是一组需要持续复查的数据口径。</div>

<div class="mt-12 text-sm opacity-50">明浩 · 《用数字看 AI：第 23 页独播》</div>
