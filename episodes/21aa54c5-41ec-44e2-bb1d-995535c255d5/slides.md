---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "150: 【年末AI回顾】从模型到应用、从技术到商战，拽住洪流中的意义之线|Solo"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 2025 年 AI 回顾

<div class="mt-4 text-xl opacity-80">
从模型到应用、从技术到商战，拽住洪流中的意义之线
</div>

<div class="mt-4 text-lg opacity-70">
晚点聊 LateTalk · 第 150 期 · 曼琪单口
</div>

<div class="mt-8 text-sm opacity-50">
2026 年 2 月 · 全长 1 小时 58 分
</div>

---

# 为什么这期值得听

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型能力进入应用</strong><br>推理、编程与多模态能力汇合，Agent 开始承担更完整的任务。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>技术竞争也在重组组织</strong><br>从芯片、基础设施到模型和产品，协同设计成为大公司的共同命题。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>应用需要穿过真实入口</strong><br>手机 Agent、Sora App、垂类工作流，都要面对平台、留存和付费。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>创业与资本给出两种速度</strong><br>模型公司融资承压，具身智能却迎来密集融资与上市预期。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>硬件仍在寻找形态</strong><br>眼镜争夺入口，录音、健康、陪伴设备先从具体需求起步。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>人如何适应效率变化</strong><br>薪酬、裁员、工作流与意义感，同时构成这一年的另一面。
</div>

</div>

---

# 这一年的 AI 地图：六股力量同时作用

<div class="mt-4 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>模型</strong><br>推理、编程、多模态</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>应用</strong><br>Agent、内容与科研</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>巨头</strong><br>人才、组织、入口</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>创业</strong><br>收入、融资、全球化</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>具身与硬件</strong><br>本体、数据、供应链</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>人</strong><br>工作、身份与体验</div>

</div>

<div class="mt-5 p-3 rounded bg-slate-50 border-l-4 border-slate-400 text-sm opacity-80">
主持人把它们放在同一张年度地图里：技术能力决定可做什么，组织与入口影响谁能做成，人的感受决定变化如何被接住。
</div>

---
layout: two-cols-header
---

# Agentic Model：能力不只在模型内部

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>推理与规划</strong>：把复杂问题拆成多步，支持更长的任务链。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>编程与多模态</strong>：既能在数字环境执行，也要读懂图像、语音和文字。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>工具与记忆</strong>：上下文可由系统外挂，MCP 等协议帮助模型调用外部能力。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-capabilities.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DeepSeek R1：一次技术影响力的扩散

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2025 年 1 月 20 日</strong><br>
R1 与 Kimi K1.5 同日发布；R1 随后获得更广泛影响。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>开源与报告</strong><br>
最强版本开放、技术报告详细，先获得研究社群的密集讨论。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>557 万美元</strong><br>
最后一次训练成本被突出披露，引发美国政商界的关注。
</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
主持人的观察是：技术先在核心研究者中形成口碑，再借由事件破圈；海外认可又反过来放大国内讨论。
</div>

---

# 推理模型改变了算力放置的位置

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>预训练阶段</strong><br>
用大规模数据建立基础能力；之后用高质量任务数据进行监督微调或强化学习。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>使用阶段</strong><br>
o1、R1 一类模型把更多计算放到回答时的多步推理，提升复杂任务的规划和覆盖度。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Deep Research 的兴起，正是这类测试时计算扩展在产品端的一个直观结果。
</div>

---
layout: two-cols-header
---

# 协同设计：模型竞争向下延伸到系统

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Google 将 TPU、JAX、基础设施、云、模型和应用连成一套协作体系。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
DeepSeek 的基础设施团队参与算法讨论；无法稳定实现的设计会被提前否决。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
阿里千问、腾讯也在调整基础设施与模型团队的协作方式。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 注意力、显存与互联：工程约束回到台前

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>注意力机制</strong><br>
长上下文会带来计算复杂度和显存开销，稀疏注意力、线性注意力都在处理这一约束。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>系统算法</strong><br>
FlashAttention 依据 GPU 内存访问特性改变计算顺序，目标是提高效率并降低显存占用。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>超节点</strong><br>
华为 Atlas 900 连接 384 颗 AI 芯片，反映算力竞争从单颗性能转向多芯片互联。
</div>

</div>

---

# 下一种学习范式，研究者还在寻找

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>现有路径</strong><br>
海量预训练数据，加上较少但高质量的任务数据；每次模型迭代仍需要研究员深度参与。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>被期待的能力</strong><br>
少样本学习、举一反三、持续学习，以及理解和发现物理世界的规律。
</div>

</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-sm text-center">
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">持续学习</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">在线学习</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">世界模型</div>
</div>

---

# AI for Science：从计算物性到科研 Agent

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>科学计算</strong><br>
深势科技从 DPMD 出发，用机器学习简化第一性原理计算，并推出药物研发平台 UniMol。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>生成式模型</strong><br>
AlphaFold 展示了深度学习预测蛋白质结构的能力；深势也有 UniFold 模型。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>完整流程</strong><br>
科研 Agent 的设想覆盖文献、假设、实验设计、实验执行和验证，AI 也可能参与 AI 研究。
</div>

</div>

---

# 应用的两条主线：通用 Agent 与垂类 Agent

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>通用 Agent</strong><br>
以编程为手段，在数字世界完成一次性任务，或把反复出现的流程变成个人小应用。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>垂类 Agent</strong><br>
把通用模型放进具体专业流程；内容制作、法律、教育和医疗是主持人提到的主要方向。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Claude Code 被放在这条线上理解：它面向开发者编程，也可被当作处理数字任务的通用执行器。
</div>

---
layout: two-cols-header
---

# Agent 进入手机：入口权成为三方博弈

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
豆包手机预览发布后，微信、美团外卖等 App 并不愿意被其调用。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
点外卖、订机票、重复购物有提效需求；娱乐内容平台更接近用户自己消费内容的场景。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
隐私、安全、广告归属和调用权限，都会影响 AI OS 与超级 App 的关系。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mobile-game.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 垂类 Agent 的商业化：从卖席位到为结果收费

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>法律场景</strong><br>
爱与智能协助银行起诉小额坏账：筛选案件、生成法律文件可以自动化，出庭仍由人完成。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>收费方式</strong><br>
公司同时经营律所，直接从案件委托方取得业务，再向银行等机构收取服务费。
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
主持人由此引出一项行业转向：AI 软件不只出售工具和账号，部分场景开始按交付结果计费。
</div>

---

# Agent 工具链：模型每次进步，都会留下新的缺口

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>上下文</strong><br>RAG、Prompt Engineering、Context Engineering</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>训练</strong><br>强化学习环境与状态检验</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>运行</strong><br>语音、记忆、评估与可观测性</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
主持人提到，硅谷的软件分工已很细：Datadog 的系统可观测、Okta 的身份认证，都是大体量市场；许多既有流程仍可能被 AI 重做。
</div>

---

# Sora App：产品、社交网络，还是内容工具？

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>交互创新</strong><br>
2025 年 10 月上线的 Sora App 使用视频生成模型；Cameo 允许用户授权脸部形象并与朋友合拍。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>两种判断</strong><br>
一方看重分享关系和社交传播；另一方认为新平台还需形成新内容形态与新的传播链路。
</div>

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
这场讨论把问题落回产品本身：生成能力很强，并不等于用户会在同一处持续创作、交流和分发。
</div>

---

# 留存数据给 Sora App 的提醒

<div class="mt-4 grid grid-cols-3 gap-3 text-sm text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>低于 8%</strong><br>
Sensor Tower 对 Sora App 第 30 天留存率的估计。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>42%</strong><br>
Appfigures 2025 年秋季数据中的 TikTok 第 30 天留存率。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>38%</strong><br>
同一数据中的 Instagram 第 30 天留存率。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Sora 也出现了长期创作者：主持人关注的 Kagematsu 账号粉丝已超过 10 万。日本 AIGC 创作社群是其中一个活跃群体，但产品尚未快速扩散到更广泛人群。
</div>

---

# 字节、阿里、腾讯：同一场竞争，三种组织选择

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>字节跳动</strong><br>
Flow 管产品、Seed 管模型、Steam 做后端支持；通过相对独立的 AI 大部门保持创业式组织。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>阿里巴巴</strong><br>
通义实验室以 Qwen 为核心；千问团队从内部成长，持续做开源模型并补充基础设施人才。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>腾讯</strong><br>
姚顺宇加入后兼管大模型与 AI Infra，组织调整指向更紧密的研发协作。
</div>

</div>

---

# 大公司不只争模型，也争产品与反馈

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>字节的反馈闭环</strong><br>
豆包 1.5 Pro 的官方表述将大规模用户反馈接入问题发现、数据挖掘、标注与快速迭代；目标是改善实际使用体验。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>腾讯与阿里的重组</strong><br>
腾讯把元宝、QQ 浏览器、搜狗输入法、IMA 等产品汇入 CSIG；阿里则经历通义、夸克与千问 App 的多次定位调整。
</div>

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
模型团队和产品团队之间能否互相传递需求与反馈，成为主持人比较三家公司的另一个尺度。
</div>

---

# AI To C 的入口大战：增长已发生，商业化仍待验证

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>豆包</strong><br>
中国第一个日活过亿的 AI 产品；海外版 Dola 全球日活也超过千万。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>千问 App</strong><br>
2025 年末回到阿里 AI 超级入口的位置，主打连接电商、外卖、酒旅等生活服务。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>元宝</strong><br>
接入 DeepSeek 后日活快速增长，并尝试用元宝派连接微信、QQ 的社交关系。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
豆包已有商品卡等探索，但免费的大用户产品如何形成稳定收入，仍是下一阶段需要回答的问题。
</div>

---

# 大模型创业公司上市：融资窗口提前打开

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>市值与收入</strong><br>
截至 2026 年 2 月 7 日，智谱收盘市值约 114 亿美元，MiniMax 约 185 亿美元；两家的收入规模仍显著小于 OpenAI 与 Anthropic。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>竞争并未结束</strong><br>
基础模型公司继续投入训练和产品，调用成本也持续存在；上市为后续大规模融资提供了另一条路径。
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
主持人把这一轮 IPO 放在仍在进行的技术竞赛中理解，而不是把它当作已有胜负的结算。
</div>

---

# 应用创业：五千万美元 ARR 是一道观察线

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>约 40—70 家</strong><br>
主持人根据公开资料估计，全球 ARR 不低于 5000 万美元的 AI 原生企业约有这一规模。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>集中领域</strong><br>
AI Coding、内容创作 Agent，以及法律、教育、医疗等行业产品占据多数。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>小团队高人效</strong><br>
Top AI Native Companies Leaderboard 以收入、员工数和成立时间衡量团队创收效率。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
应用团队的路径更分散：可以追求细分市场的利润、被收购，或从大公司暂未覆盖的流程中建立位置。
</div>

---

# 全球化成为中国 AI 团队绕不开的条件

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>HeyGen</strong><br>
两位中国背景创始人早期就在旧金山与深圳布局；国内主体视云科技已在 2023 年 12 月注销。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Manus</strong><br>
2025 年 6 月将总部迁至新加坡；被 Meta 收购后，中国商务部称将会同有关部门进行合规性审查。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>MirrorMind 原中国团队</strong><br>
因法律合规因素难以继续获得陈天桥支持，开始寻求独立融资或其他发展方式。
</div>

</div>

---

# 具身智能为何在中国更热

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>735 亿元</strong><br>
中国信通院报告称，2025 年具身智能与机器人总融资额达到这一规模。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>技术未收敛</strong><br>
前沿公司仍在探索，训练与落地的共识尚未形成，新团队仍有进入窗口。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>制造与资金</strong><br>
地方政府、成熟供应链和较明确的二级市场退出预期，共同推高了热度。
</div>

</div>

---
layout: two-cols-header
---

# 具身智能的三要素：数据、模型与本体

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
数据是当前最紧迫的问题：行业需要规模化、低成本且有效的训练数据。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
VLA、端到端与生成式世界模型并行发展，关于路线的分歧仍然很大。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
机器人还要经得起真实场景：寿命、稳定性、重量、续航和成本缺一不可。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./embodied-pillars-cn.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols-header
---

# 获取机器人数据：多条路线，彼此补位

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
遥操作真机数据质量高，但需要大量机器人与操作员，成本很高。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
仿真、视频、UMI 与机器人自练各有边界；多数公司会组合多种方法。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
对仿真能否训练出足够有效的具身模型，受访创业者之间存在明显分歧。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robot-data.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 本体工程：智能之外，还有一双经得起使用的手

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Optimus 的手</strong><br>
第三代设计延期的报道指出，灵巧手寿命短、损坏后不能局部维修，每只手成本超过 6000 美元。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>整机约束</strong><br>
关节寿命和稳定性、减重与续航，都会决定机器人能否进入商业环境。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>宇树的起点</strong><br>
起步价 10 万元的人形机器人帮助宇树进入高校与实验室，成为许多研发者的开发工具。
</div>

</div>

---

# 机器人卖到哪里：展示需求与真实工作之间

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>已出现的需求</strong><br>
训练场、高校研发、展厅接待与表演。中国移动的 1.2 亿元以上人形机器人订单，包含巡检、展厅活动和数据采集。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>更难的目标</strong><br>
工厂、商店和家庭的自主劳动。柔性物体、精细力控、多 SKU 小批量任务仍需突破。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
许多高价值工业流程早已高度自动化；新的人形机器人必须在成本、可靠性、节拍与负载上证明优势。
</div>

---
layout: two-cols-header
---

# AI 眼镜：入口想象与工程取舍并存

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
眼镜的吸引力在于离手操作和持续佩戴，既能听取指令，也可能成为接近人眼视角的传感器平台。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
显示仍受清晰度、视角和眩晕限制；电池、传感器与芯片又带来重量、续航和发热问题。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Ray-Ban Meta 从简单功能逐代迭代；第二代以拍照、通话、听歌为主，累计销量超过 300 万台。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./glasses-tradeoff.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 硬件也可以从一个小需求做起

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Ploud</strong><br>
贴在手机背面的录音设备用震动收音处理通话录音，再用模型生成摘要与待办；官方称累计销量超过 100 万台。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>健康设备</strong><br>
Odyssey AI 项链记录饮食；Oura Ring 做睡眠与活动追踪。产品首先要回答用户到底需要什么。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>陪伴设备</strong><br>
Fuzzo 等产品要处理语音质量、延迟、角色设定和情绪体验，但持续使用仍是考验。
</div>

</div>

---

# 深圳硬件创业：供应链、产品与市场一起成长

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从大疆到西丽</strong><br>
拓竹、Stretch、HyperShell 等企业与大疆前员工网络、深圳科创学院、松山湖机器人基地存在人员或地域关联。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>面向消费市场</strong><br>
团队常从 Maker、户外、娱乐、家庭服务等需求出发，以高品质和创新体验打开欧美市场，再投入后续研发。
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
小众品类要跨过两道门槛：让产品扩散到更大市场，并在竞争者进入后维持产品与成本优势。
</div>

---

# AI 中的人：高薪、裁员与岗位重估同时发生

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>人才竞争</strong><br>
主持人在湾区见到 Meta 上亿美元人才报价、快速融资和股价上涨带来的财富效应。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>裁员数字</strong><br>
亚马逊在 2025 年 10 月裁 1.4 万人、2026 年 1 月又裁 1.6 万人；Layoffs.fyi 统计多家科技大公司 2025 年共裁约 6 万至 8 万人。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>中国的变化</strong><br>
DeepSeek 热潮后，AI 岗位发布量月环比保持两位数增长；中层管理岗需求则减少约 25%。
</div>

</div>

---
layout: two-cols-header
---

# 使用 AI 的人：把真实痛点放在工具前面

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
卡兹克的工作流会抓取每日 AI 新闻、排优先级，也会分析高传播内容的选题特征。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
在线下活动中，AI 可从报名留言筛选参与者，并按复杂规则安排同桌与避让关系。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
主持人也坦言，记者的面对面交流、采访和反复斟酌的沟通，尚未被工具明显替代。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./work-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 工作之外，人还要重新学习感受意义

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>短期的不适</strong><br>
田渊栋设想：当人更轻易获得工作结果，又发现自己很难超过 AI 时，空虚感可能成为重要社会问题。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>长期的可能</strong><br>
如果技能化工作由 AI 承担，教育与评价或可更重视兴趣、创意、个性与稀缺体验。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
主持人借由黄东旭的房车生活收束：技术不能替人完成对生活的体验，也不能替人建立自我认同。
</div>

---

# 核心金句

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“如果你们的大模型推理引擎不开源的话，我就没有兴趣了。”<div class="text-xs opacity-60 mt-1 not-italic">梁文锋谈对开源的立场</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“过去几年是scaling的阶段，而现在是重新回到研究，回到research的阶段。”<div class="text-xs opacity-60 mt-1 not-italic">伊利亚谈下一种学习范式</div></div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">“接下来我们就会看到Agents的scaling。”<div class="text-xs opacity-60 mt-1 not-italic">陈凯杰对 Agent 数量增长的判断</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“AI软件要从卖工具、卖席位变成卖结果。”<div class="text-xs opacity-60 mt-1 not-italic">红杉 AI 峰会的商业化观点</div></div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">“不是对胜者的奖赏，而是下一轮竞赛的鼓点。”<div class="text-xs opacity-60 mt-1 not-italic">主持人谈模型公司 IPO</div></div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">“把任何重复三遍的事AI化。”<div class="text-xs opacity-60 mt-1 not-italic">卡兹克给普通使用者的建议</div></div>

</div>

---
layout: end
---

# 把效率留给工具，把体验留给自己

<div class="mt-6 text-2xl italic">
“毕竟，大模型不能替你活过。”
</div>

<div class="mt-8 text-sm opacity-60">
晚点聊 LateTalk · 第 150 期
</div>
