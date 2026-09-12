---
theme: academic
colorSchema: light
diagramMode: static
title: Vol.86 同一代技术，两个系统，181页PPT全记录AI行业的2025
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

<div class="text-sm tracking-wider opacity-70">屠龙之术 · 2026 年 1 月 · 2 小时 2 分</div>

# 同一代技术，两个系统

## 明浩回看 2025 年 AI：美国与中国如何在相近技术约束下走向不同的产业路径

<div class="mt-6 text-sm opacity-70">
这是一场带着大量市场估算的年终复盘。模型进展、产品竞争和资本价格在节目中彼此相连，但它们不构成已经兑现的预测。
</div>

---
layout: default
---

# 这期复盘按四个读者问题展开

<div class="rn-note rn-note-wide" data-note-diagram="阅读路径" role="group" aria-label="本期内容的四个阅读主题">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>模型怎样变化</strong><p>后训练、推理、多模态与 Agent 被放进同一条能力演进。</p></div></div>
<div class="rn-note-card"><div><strong>应用在哪落地</strong><p>Chatbot、编程、医疗和企业任务开始形成不同场景。</p></div></div>
<div class="rn-note-card"><div><strong>投入怎样传导</strong><p>数据中心、芯片、云和模型共享需求，也共享融资压力。</p></div></div>
<div class="rn-note-card"><div><strong>中国怎样参与</strong><p>开源模型、超级应用与硬科技资本形成另一组变量。</p></div></div>
</div>
<p class="rn-note-caption">节目用中美并行的视角组织材料；以下数字、排名与推演均按明浩在 2026 年 1 月的转述呈现。</p>
</div>

---
layout: two-cols-header
---

# 2025 年的研发重心，从扩大预训练延伸到后训练

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
明浩把 AI 能力比作不规则地扩张的边界：有些任务已越过人的表现，有些基础任务仍会失败。因此，单次失败不能概括全部能力。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他认为，模型公司把更多资源转向后训练，特别是可验证任务上的强化学习环境。编程、数学等任务较容易给出反馈，成为先被验证的场所。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
环境、任务设计和评分方式会影响模型学到什么。节目把这视为模型公司与外部数据服务商共同争夺的工程能力。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="模型训练重点" role="group" aria-label="模型从预训练到智能体任务的研发重点">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>预训练</strong><p>用大量数据形成通用基座能力。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>后训练</strong><p>在可验证任务上用反馈改善推理。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>长任务执行</strong><p>把推理、工具和规划接入 Agent。</p></div></div>
</div>
<p class="rn-note-caption">这是节目对近年技术路线的概括，不表示三步已经形成线性的能力保证。</p>
</div>
</div>

---
layout: two-cols-header
---

# 语言、多模态和代码，被明浩看作同一张任务桌

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
他曾把语言、编程和多模态分开讨论，后来用 NotebookLM 制作儿童演讲 PPT 的体验修正了看法：模型既要理解材料，也要组织表达形式。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
节目转述的比较是：头部纯语言模型的表现差距较小；视频和 Agent 的差距更大。这个比较用来解释资源为何向后两类能力倾斜。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
世界模型仍有两条不同路线。它们可能帮助仿真和交互，但距离具身智能或自动驾驶的理想状态，节目认为仍然很远。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="世界模型路线" role="group" aria-label="节目所述的两条世界模型路线">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>实时交互视频</strong><p>在连续生成的视频中接收新指令并改变展开。</p></div></div>
<div class="rn-note-card"><div><strong>物理仿真</strong><p>尝试让虚拟空间遵从物理规律，作为实验场。</p></div></div>
</div>
<p class="rn-note-caption">两条路线面对的目标不同：前者强调交互连续性，后者强调可用于仿真的物理一致性。</p>
</div>
</div>

---
layout: default
---

# 美国模型竞争，已经从单一领先变成不同下注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Google</strong><br>
明浩认为 Gemini、图像、视频与 NotebookLM 让 Google 在多模态上占优；TPU 也使模型竞争连到硬件能力。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>OpenAI</strong><br>
节目把 ChatGPT 的长期留存、消费端产品扩张和 API 业务放在一起看；这条路线也需要同时处理更多业务边界。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>xAI 与 Anthropic</strong><br>
前者被归入企业编程方向；后者把 Claude Code 放在编程扩张的中心。两者都说明模型公司不再只靠通用聊天入口竞争。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
节目提到 OpenAI 在 GPT-5 后的领先优势缩小、Gemini 3 带来追赶压力。这是 2026 年 1 月的行业观察，不是稳定的模型排名。
</div>

---
layout: two-cols-header
---

# 从 Chatbot 到 Agent，差别在于是否完成任务

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
明浩给出的 Agent 常规定义包含推理、更长的上下文记忆、工具使用、计划，以及把结果返回给用户。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
他用招聘强化学习研究员举例：查找公开演讲和职业信息、筛选候选人、发送邮件，是一个传统猎头也会执行的多步任务。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
节目引用红杉的判断来讨论长时任务，但同时承认 AGI 没有通行定义。完成更多步骤不等于已经达到通用人工智能。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="智能体任务流程" role="group" aria-label="智能体完成多步骤任务的基本过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>理解任务</strong><p>识别目标与可用信息。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>调用工具</strong><p>搜索、整理、判断下一步。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>交付结果</strong><p>把执行结果返回给用户。</p></div></div>
</div>
<p class="rn-note-caption">步骤体现节目所说的任务执行，而不是把任何带聊天界面的产品都叫作 Agent。</p>
</div>
</div>

---
layout: default
---

# 编程和医疗，成为更容易看见收入的两个场景

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>编程：能力先跨过可用门槛</strong><br>
明浩估计，2025 年 AI 编程已形成约 40 亿美元的生意。Cursor、Lovable、Replit、Claude Code 与 Codex 同场竞争；独立产品的流量曾在下半年走弱，第一方工具随后也在抢占入口。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>医疗：调用增速带来垂直产品</strong><br>
节目转述第三方估算，医疗可能带来约 35 亿美元的 AI 市场增量；又转述 OpenAI 使用统计中的编程增长 11 倍、医疗增长 8 倍。两家头部公司随后推出独立 Health 产品。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这些金额和增长率来自节目引用的不同统计，不能互相相加，也不能据此断定任一产品已经盈利。它们只说明场景选择开始影响产品和公司组织。
</div>

---
layout: two-cols-header
---

# 美国 AI 公司彼此依赖，产业边界随之变得模糊

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
节目列举 Google、微软、亚马逊、OpenAI、Meta、xAI、英伟达、苹果与 Anthropic：它们之间既有客户关系，也有投资、服务器、模型和芯片协议。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
按明浩的划分，能源、芯片、数据中心、云、模型、软件和应用是相连的层级。公司覆盖的环节越多，越能把模型能力接到分发和基础设施。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
这不是静态的产业地图。循环融资和相互采购会让合作方与竞争方重合，因此不能只用单一的敌我关系理解它们。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="美国人工智能产业层级" role="group" aria-label="节目所述的美国人工智能产业层级">
<div class="rn-note-tiers">
<div class="rn-note-card"><div><strong>应用与软件</strong><p>面向消费者与企业的产品、工作流和分发。</p></div></div>
<div class="rn-note-card"><div><strong>模型与云</strong><p>模型服务、API 与训练推理资源相互采购。</p></div></div>
<div class="rn-note-card"><div><strong>数据中心与芯片</strong><p>算力、网络、电力和制造决定扩张速度。</p></div></div>
</div>
<p class="rn-note-caption">分层用于解释依赖关系，不代表利润或控制力必然从上到下排列。</p>
</div>
</div>

---
layout: two-cols-header
---

# 数据中心的扩张，先把问题推向电力、资金和折旧

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
节目按已运营、在建和承诺的项目比较头部科技公司数据中心，并以吉瓦而非机柜计量。明浩转述的数字是：运营规模约 2.26 吉瓦，已在建或承诺的规模约 35 吉瓦。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
他转述多家机构的估算：未来四到五年，数据中心相关投入约需 2 万亿美元。科技巨头的资本开支、私人投资和信贷都在其中，但资金缺口仍是市场关注点。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
芯片迭代也让折旧难以回避。账面摊销年限与按性能淘汰的节奏可能不同，负债较高的新云公司因此波动更大。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="数据中心扩张约束" role="group" aria-label="数据中心扩张从需求到财务约束的过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>算力需求增加</strong><p>模型训练、推理和 Token 使用推动扩容。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>建设资源投入</strong><p>卡、网络、冷却与电力需要提前投入。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>现金流承压</strong><p>资本开支、债务和折旧要由收入承接。</p></div></div>
</div>
<p class="rn-note-caption">节目关心的是，需求能否以足够快的收入和现金流覆盖长期投入。</p>
</div>
</div>

---
layout: default
---

# 需求沿产业链传导，价值却未必同样分配

<div class="flex justify-center mt-4">
<div class="rn-note" data-note-diagram="需求与回报" role="group" aria-label="从用户需求到芯片制造的产业链及其商业问题">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>用户与应用</strong><p>使用增加，也要转化为付费。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>模型与云</strong><p>出售服务，也持续购买算力。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>数据中心与制造</strong><p>芯片、电力与建造承接扩容。</p></div></div>
</div>
<p class="rn-note-caption">需求向上游传导，利润与现金流的兑现却各不相同。</p>
</div>
</div>

<div class="mt-3 text-sm leading-relaxed">
节目以台积电上调资本开支为例：上游确认需求是正面信号，却不能替应用、模型和数据中心回答各自的利润问题。
</div>

---
layout: two-cols-header
---

# 资本市场先给出了乐观价格，收入与退出仍要跟上

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
节目转述 Dealroom 数据：2025 年美国一级市场融资中，AI 项目约占 48%；大额融资和头部估值进一步集中在 OpenAI、Anthropic、xAI 等公司。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
明浩也看到公开市场的科技股上涨、一级市场回暖，以及 Figma、CoreWeave 等退出案例。它们构成下一轮 IPO 预期的背景，而非退出窗口已经完全打开的证明。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
他的核心追问是：应用、模型、云和数据中心的未来收入能否覆盖已经承诺的投入。市场周期究竟在上坡还是山顶，节目没有替听众作结论。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="资本循环的待验证环节" role="group" aria-label="人工智能资本循环中仍需验证的环节">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>估值与融资</strong><p>高估值支持公司继续投入建设。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>产品与收入</strong><p>订阅、企业服务、广告等要形成现金流。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>退出与再投资</strong><p>IPO 或并购是否承接存量项目，尚待发生。</p></div></div>
</div>
<p class="rn-note-caption">箭头表示节目讨论的资金逻辑；第三步没有被当作既成事实。</p>
</div>
</div>

---
layout: two-cols-header
---

# 中国叙事从 DeepSeek R1 一周年开始

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
DeepSeek R1 于 2025 年 1 月 20 日发布。明浩把它作为中国部分的起点，并认为它的影响不只发生在中国，开源获取也让更多地区能够使用模型。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他从 DeepSeek 的发布节奏读出一条路线：早期更集中于推理，之后 V 系列和 R 系列都在推进，模型开始同时带有推理与 Agent 能力。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
对于下一代架构和 V4，节目只保留期待，没有把传闻发布时间或能力突破写成已经发生的事实。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="DeepSeek年度路线" role="group" aria-label="节目概括的 DeepSeek 年度路线">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>推理优先</strong><p>R1 使推理模型成为讨论中心。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>能力融合</strong><p>V 与 R 两条产品线同时演进。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>架构探索</strong><p>后续论文与产品引出新的架构预期。</p></div></div>
</div>
<p class="rn-note-caption">最后一步是节目对研发方向的推测，不是对下一次发布的确认。</p>
</div>
</div>

---
layout: default
---

# 开源使中国模型竞争呈现多家并行的形态

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>节目转述的开源位置</strong><br>
按明浩援引的 Hugging Face 数据，到 2025 年年中，中国开源模型下载量已超过美国模型；到第三季度，中国开源模型的能力被他判断为走到全球前列。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>竞争不是单一公司对单一公司</strong><br>
千问、Kimi、智谱、DeepSeek、MiniMax 等都在同一张开源图谱里竞争。节目强调，开源也不是中国独有策略，海外公司同样在不同程度上开放模型。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
明浩援引 Epoch AI 的研究称，自 2023 年以来中国模型平均落后美国前沿约 7 个月。他据此推测差距正在缩小；这是一项研究口径下的平均值，不代表每个模型或每项任务。
</div>

---
layout: two-cols-header
---

# 两边的研究议程有重合，也有各自的资源条件

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
节目把 2026 年中国模型公司的议程归为两类：继续探索智能上限，以及让复杂任务真正可执行。模型架构、超长上下文、记忆、多模态、编程和 AI for Science 都在清单上。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
明浩转述 Kimi 的侧重点是 Token 效率和长上下文记忆；他也把未上市公司的资金与较少的季度压力视为基础研究的一项条件。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
美国的新实验室同样押注研究范式，但节目认为 2026 年未必能从它们看到成熟的商业化结果。研究方向相似，不代表路径和节奏相同。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="共同研发议题" role="group" aria-label="节目总结的中美共同研发议题">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>更高上限</strong><p>架构、效率、长上下文与记忆机制。</p></div></div>
<div class="rn-note-card"><div><strong>更复杂任务</strong><p>编程、工具调用、规划与 Agent。</p></div></div>
<div class="rn-note-card"><div><strong>更广世界</strong><p>多模态、科学研究、机器人与仿真。</p></div></div>
</div>
<p class="rn-note-caption">并列展示的是节目归纳的研究主题，不是技术优先级排序。</p>
</div>
</div>

---
layout: two-cols-header
---

# 当入口越来越像，用户更在意任务能否落地

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
明浩展示多家中国模型产品的 Agent 界面后提出：不看 Logo 时，用户未必能从界面区分产品是否叫 Agent；入口标签本身的重要性正在下降。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他把 Skill 理解为封装经验与工作流程的 SOP。Coze 的技能、MiniMax Agent 的专家等功能，被节目视为各家可能跟进的产品方向。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
同一个概念并不保证同样的能力。产品是否可靠仍取决于模型、工具、权限、工作流和实际结果，节目没有用界面相似来判断胜负。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="从提问到行动" role="group" aria-label="从用户提问到任务执行的智能体路径">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>提出需求</strong><p>用户描述问题或目标。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>调用技能</strong><p>把经验、工具和步骤接入任务。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>返回行动结果</strong><p>结果而非聊天标签成为判断依据。</p></div></div>
</div>
<p class="rn-note-caption">路径对应节目所说的从提问到行动；它描述产品方向，不承诺所有任务都能自动完成。</p>
</div>
</div>

---
layout: default
---

# 超级应用竞争，不能只用一个用户指标裁决

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>阿里与蚂蚁</strong><br>
节目对比了两个叙事：早期是让业务接入大模型升级，当前更强调由千问接入淘宝、飞猪等生态服务。蚂蚁则同时推进灵光和医疗健康产品阿福。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>腾讯与百度</strong><br>
元宝尝试群聊、社交和春节活动；百度推动文心一言 5.0，也整合文库与网盘业务。节目把这些动作看作大公司重新调度入口和既有资产。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>评价标准没有统一答案</strong><br>
榜单、研究员密度、更新频率、Token 调用、功能、DAU、MAU 与收入衡量的是不同东西。明浩没有用其中任一项宣布谁已经落后。
</div>

</div>

---
layout: two-cols-header
---

# 中国资本叙事，把 AI 放进更大的硬科技篮子

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
节目观察到，国产 GPU、商业航天、具身智能与大模型在 2025 年同时升温。它们与美国的芯片、航天和 AI 热点在时间上并行，但各自的供给、市场和融资条件不同。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
明浩转述的中国一级市场变化包括回暖、美元资金占比下降，以及人工智能、医疗健康、集成电路、机器人等领域共同吸收资本。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
他提出中国代表公司的估值常约为美国同类头部公司的 1% 到 2%。这是观察到的估值比喻，不以收入或利润推导，也不是投资建议。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="中国硬科技热点" role="group" aria-label="节目列举的中国硬科技热点">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>算力硬件</strong><p>国产 GPU、芯片与相关供应链。</p></div></div>
<div class="rn-note-card"><div><strong>物理世界</strong><p>商业航天和具身智能。</p></div></div>
<div class="rn-note-card"><div><strong>智能服务</strong><p>大模型、应用与行业部署。</p></div></div>
</div>
<p class="rn-note-caption">并列展示的是节目归纳的热门方向，不表示它们的风险、收入和上市条件相同。</p>
</div>
</div>

---
layout: default
---

# 节目用两套可能并行的系统理解中美竞争

<div class="rn-note rn-note-wide" data-note-diagram="中美并行情景" role="group" aria-label="节目对中美人工智能并行情景的概括">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>美国的强项</strong><p>前沿能力与产业投入很强，但电力、能源和基础设施会影响算力扩张。</p></div></div>
<div class="rn-note-card"><div><strong>中国的条件</strong><p>节目认为算力成本和部署条件可能形成优势，模型能力仍在贴近前沿。</p></div></div>
<div class="rn-note-card"><div><strong>可能的外延</strong><p>不同国家和地区可能选择不同标准、合作网络与定制部署。</p></div></div>
</div>
<p class="rn-note-caption">这是明浩用四象限延伸出的条件性情景：两极并行比任何一方全面获胜更容易发生，但没有被当作必然结果。</p>
</div>

---
layout: end
---

# 2025 的记录，停在问题尚未结算之处

<div class="mt-6 text-left text-base leading-relaxed space-y-3">
<p>模型能力已从预训练延伸到后训练、工具和长任务；应用开始在编程、医疗与超级应用入口中寻找可重复的需求。</p>
<p>美国的高投入把芯片、云、数据中心、债务和收入放进同一张账；中国则在开源模型、生态入口与硬科技资本中形成另一套组合。</p>
<p>节目保留的难题是：这些投入何时能被可持续收入承接，以及两套系统会如何与各自的资源和市场条件一起演化。</p>
</div>
