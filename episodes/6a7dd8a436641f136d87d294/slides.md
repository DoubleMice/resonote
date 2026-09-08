---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 47. 7月之后，拷打最后一个AI多头！- 唐奕波｜奔波儿r
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 7 月之后，拷打最后一个 AI 多头

<div class="text-xl mt-5 opacity-80">从资本开支、模型价格到企业工作流：唐奕波与主持人的一场多空辩论</div>

<div class="mt-12 text-sm opacity-60">台前生活 · 2026 年 8 月 · 76 分钟</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 资本开支不是结论

云厂商花得多，只说明基础设施正在建设；是否合理还要看后续需求能否兑现。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 真正的争点是需求

编码之外有没有下一批高价值场景，决定了收入的上限和投入的回收速度。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源改变利润分配

更低成本的模型会压低中端价格，也迫使前沿厂商继续拉开能力差距。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 工具要进入组织

个人效率上升不等于公司产出上升；流程、语境与决策瓶颈仍需要重做。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 电气化是一种假设

这不是把 AI 等同于电力，而是用来追问：基础设施之后会不会出现新应用与新组织形式。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 乐观也有条件

高杠杆会放大外部冲击；内存等硬件环节还可能被算法优化重新定价。

</div>

</div>

---

# 先拆开两个问题：钱与需求

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 资本从哪里来

主持人担心，成熟云厂商把自由现金流投向数据中心后，还要不要借钱、能不能持续建设。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 收入从哪里来

唐奕波认为，市场更深的担心是：编码场景之后，AI 是否能继续拓宽需求。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
本期不把资本开支数字当作单独的多空信号。每一笔建设最终都要回到模型价格、使用量和新场景。
</div>

---
layout: two-cols-header
---

# 资本开支是一条待验证的回收链

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">唐奕波把早期建设视为新行业的常态：投入先于经营现金流回收。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">讨论 1GW 时，硬件、服务器、电力和土建都在同一笔建设里。</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">若推理收入或使用量不及预期，链条末端的回收就会承压。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./capex-chain.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 1GW 的口径：这是一组推演，不是报价单

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 建设成本
<div class="text-3xl font-bold text-blue-600 my-2">400 亿美元</div>
<div class="text-xs opacity-70">嘉宾用较早口径估算 1GW；GB300 的讨论口径已升至约 600 亿美元。</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 闭源推理收入
<div class="text-3xl font-bold text-green-600 my-2">约 600 亿美元</div>
<div class="text-xs opacity-70">以 Anthropic 的推理业务为例，嘉宾强调这是估算且取决于硬件与使用率。</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 开源推理收入
<div class="text-3xl font-bold text-purple-600 my-2">约 300 亿美元</div>
<div class="text-xs opacity-70">嘉宾估算开源模型数据中心的收入较低，实际销售仍有很多变量。</div>

</div>

</div>

<div class="mt-5 text-sm opacity-70">同一功率下的卡数、服务器配置和模型价格都在变动；这些数字只能用来理解敏感项。</div>

---

# 模型价格下行，问题是量能否补上

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 价格压力

主持人提到，闭源模型每百万 token 的价格下降；中国开源模型也在中端能力区间施压。

<div class="mt-3 text-sm opacity-70">嘉宾的判断：这首先冲击的是前沿厂商的超额利润，不必然意味着整个行业失去需求。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 两条应对路

降低中低端模型价格，或继续向前沿能力投入。若在中端能力上只拼成本，利润会被压缩。

<div class="mt-3 text-sm opacity-70">这让 token 单价与用量弹性成为判断收入的关键变量。</div>

</div>

</div>

---
layout: two-cols-header
---

# 前沿探索与追赶优化，花的是不同的钱

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">嘉宾认为，OpenAI、Anthropic 的大量实验并非全都直接进入最终模型，却承担了寻找有效路线的成本。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">国内模型厂商在受限资源下，更多尝试用更少计算与存储接近前沿模型的效果。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">后发者能少走一段路，不表示下一次把能力推高时，探索成本会自动消失。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./frontier-cost.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 训练不只是最后一次跑完

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 多条路线

嘉宾用 A、B、C、D 的实验作比喻：先比较方法，再决定最终投入到哪条路径。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 探索的外溢

前沿团队做过的后训练、数据与产品方向，后来者可以借鉴，因此成本不一定重复一遍。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 仍有新边界

当目标是再提高一档智能，嘉宾认为新的实验和算力投入仍不可避免。

</div>

</div>

---

# 市场真正担心：编码之后还有什么

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 已被看见的场景

嘉宾认为，编码 Agent 已迅速带来可见收入，也因为程序员群体集中而容易快速渗透。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 尚未被证实的场景

如果没有第二个高价值场景，需求增长会放缓；市场因此追问明年的应用扩展能否出现。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
资本开支、自由现金流和 ROI 都是表象；本期反复回到的核心，是总可服务市场究竟有多大。
</div>

---

# 分母之争：软件市场，还是白领劳动市场？

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 空头的基准

若 AI 主要是编码或企业软件的辅助工具，收入上限应与程序员工资、SaaS 市场等既有口径接近。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 多头的基准

嘉宾引述 Anthropic 的目标：面向全球白领劳动，并把约 40 万亿美元的白领劳动作为更大的分母。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
分母不同，不是估值表里的小差异：它会改变对渗透率、收入增速和基础设施需求的判断。
</div>

---
layout: two-cols-header
---

# Scaling law 仍是多头论证的一根支柱

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">嘉宾认为，Kimi 等模型的参数量增长，仍显示计算、数据与能力之间的扩展关系在发挥作用。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他的推断不是只要堆钱就必然成功，而是前沿模型仍可能用更大规模取得能力差距。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">这也解释了为何本期把下一代模型是否继续进步看作需求判断的一个选项价值。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./scaling-logic.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 先提升个人，再进入整个公司

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 个人助理

Claude Code 等工具先让单个员工更快写代码、检索资料和完成初步分析。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 语境断点

企业里的决策、沟通和交接仍在人与人之间发生，单个助手看不到全部上下文。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 工作流重构

若代理能读取共享协作语境并承接任务，公司才可能围绕它重新安排流程与角色。

</div>

</div>

---
layout: two-cols-header
---

# 效率能否跨过个人与组织之间的鸿沟

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">人人各用一个助手，可能提升个人产出，却不必然缩短跨部门沟通或最终决策。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">嘉宾以 Claude Tags 为例：群聊中可被委派任务、读取对话的代理，开始接近公司级工具。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">关键不在 token 用量，而在是否用共享语境重新组织工作。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-workflow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么财报里未必立刻看见生产率

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 局部加速

单个员工更快完成一段工作，但 A、B、C 依次审批的流程没有变，最慢的环节仍限制整体产出。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 改造成本

裁撤、调整职责和处理员工抵触，都让企业级变化比安装一个工具慢得多。

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
因此，嘉宾把企业端的低可见产出解释为组织尚未改变，而不是个人工具完全无效。
</div>

---

# Block 是一个激进样本，不是普遍结论

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 2026 年 2 月
<div class="text-3xl font-bold text-red-600 my-2">40%</div>
<div class="text-xs opacity-70">嘉宾提到，支付公司 Block 在当年 2 月裁员约四成。</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 人数变化
<div class="text-3xl font-bold text-orange-600 my-2">1,000 → 600</div>
<div class="text-xs opacity-70">这是节目中的具体案例，不是对所有公司的平均描述。</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 嘉宾的解释
<div class="text-xl font-bold text-green-600 my-2">先重做组织</div>
<div class="text-xs opacity-70">他认为，该案例的关键在于把 Agent 当作公司级基础，而非增加一项个人工具。</div>

</div>

</div>

---

# 用电气化类比，不是为了预测历史会重演

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 嘉宾看到的相似处

两者都要先铺设大量基础设施；早期看见的应用有限，生产组织的变化和新产品可能后发出现。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 主持人保留的质疑

AI 单价可能像电价一样下降；使用人数增加，并不自动保证收入或市值持续上行。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
类比的价值，是把问题从今天的编码订阅扩展到廉价智能是否会重构生产与催生新产品。
</div>

---
layout: two-cols-header
---

# 投研工作里的 AI：扩大候选池，不替代判断

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">唐奕波把投资研究比作漏斗：先扫描很多公司，再把少量候选标的投入更多时间研究。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他先总结过去强势股票的特征，再让 AI 在欧洲、日本、韩国和台湾等市场中寻找候选。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">模型负责广度与初筛；研究者仍要核实业务、比较案例，并决定是否相信自己的判断。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./research-funnel.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 同一项研究：从数天压缩到十分钟级初筛

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 过去的节奏

对从未覆盖过的公司或行业，嘉宾说自己原本做初步查看也至少要两三天。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在的节奏

在同样是初步筛选的口径下，他说 AI 可以把时长缩短到十分钟；后续仍要做深入研究与讨论。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
可比的是初步筛选的耗时，不是从输入信息到做出投资决策的全部流程。嘉宾的例子说明，AI 首先改变的是搜索范围与迭代速度。
</div>

---

# 一次扫描 800 家公司的例子

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 输入
<div class="text-3xl font-bold text-blue-600 my-2">多项条件</div>
<div class="text-xs opacity-70">AI 占比低、估值低、过去数年涨幅受限等，由研究者根据历史案例提出。</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 扫描
<div class="text-3xl font-bold text-purple-600 my-2">约 800 家</div>
<div class="text-xs opacity-70">嘉宾说，AI 用二三十分钟扫描全球多个市场的公司池。</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 输出
<div class="text-3xl font-bold text-green-600 my-2">20 家</div>
<div class="text-xs opacity-70">名单只是起点；他随后亲自研究 MLCC，并用两天形成研究报告。</div>

</div>

</div>

---

# 需求扩散也会改变付费意愿

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 用户已感到价值

主持人与嘉宾都说自己的个人使用体验很强；当工具直接缩短研究或开发时间，订阅费可能低于用户感知的价值。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 价值不等于收入

用户愿意付更多，仍要经过产品分层、预算归属与组织采购，才会变成模型厂商可持续收入。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这是一条从个人渗透到企业预算的路径，使用体验好并不自动推导出某个收入数字。
</div>

---

# 大规模折旧，把问题推到 2029—2030 年

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 讨论中的压力
<div class="text-3xl font-bold text-red-600 my-2">约 1 万亿美元</div>
<div class="text-xs opacity-70">主持人与嘉宾讨论，到 2029—2030 年间可能出现的年度折旧口径。</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 重资产的假设
<div class="text-3xl font-bold text-yellow-600 my-2">3—5 万亿美元</div>
<div class="text-xs opacity-70">嘉宾认为，若行业进入较稳定状态，如此折旧需要更大的收入体量支撑。</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 未决变量
<div class="text-3xl font-bold text-purple-600 my-2">价格 × 用量</div>
<div class="text-xs opacity-70">开源分流、每 GW 收入和需求弹性，都会改变这张远期账的结论。</div>

</div>

</div>

---

# TAM 争论，本质是价格与数量的路径不同

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 主持人的担忧

智能会更普及，但 token 单价可能持续下滑，最终像日常电费一样低到用户不敏感；大规模使用未必带来等比例收入。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 嘉宾的回答

即使能力趋同、模型变成商品，电力、石油等低单价大宗品的总市场仍可以很大；关键是总使用量和市场边界。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
两人并未消除分歧：一方担心价格下行快于需求扩张，另一方相信廉价智能会把总使用量推到更大规模。
</div>

---
layout: two-cols-header
---

# 债务不是终点，脆弱性才是风险开关

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">嘉宾不把借债本身视为坏事：建设基础设施时，外部资本能让技术更快铺开。</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">但杠杆高到无法承受小幅波动时，利率、需求或外部冲击都可能触发清算。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">他的周期判断是：泡沫的破裂更可能与高杠杆的脆弱性有关，而非某日资本开支突然变大。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./debt-fragility.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么不是拿互联网作唯一参照

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 互联网

嘉宾认为，它主要提升信息分发和处理效率；其基础设施投资占 GDP 的比例与持续时间较电气化更短。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 电气化

建设电厂与电网之后，电力先服务照明和电车，后来才进入工厂组织、家电与更多新产品。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 的假设

若廉价智能既改变劳动能力又改变工作组织，它或许更像一种基础能力；这仍是嘉宾的判断，而非已验证的历史结论。

</div>

</div>

---
layout: two-cols-header
---

# 电气化类比的核心：基础设施之后才看见应用

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">嘉宾提到，电气化资本开支曾占 GDP 约 2%，并持续 15 年；早期应用主要是照明和电车。</div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">他借此追问：今天的编码与个人助手，会不会只是廉价智能的早期用法。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">可能的下一步不是给现有工作加速，而是让工作流、产品与组织围绕智能重新设计。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./electricity-analogy.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# AI 原生应用是乐观论证中最难验证的一环

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 嘉宾的想象

他以电气化后出现的收音机为例：基础设施成熟后，会诞生此前难以想象、离开低成本能力就无法成立的产品。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 这仍是预测

新产品何时出现、能带来多少收入、能否补上模型价格下降，都不能由电气化类比直接给出答案。

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
所以本期的多头立场不是声称一切已发生，而是把未知的 AI 原生应用视为未来几年最重要的上行变量。
</div>

---

# 硬件链条里，最赚钱的环节也最容易被优化

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### GPU

嘉宾认为，英伟达的份额与盈利很强，也正因占比高而面对其他加速器、存储和系统层的替代压力。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 内存

推理与 Agent 拉动的短期需求造成缺口，但高回报率和高占比都会吸引供给或算法来降低依赖。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 宏观与微观

即使相信总资本开支继续增长，也不能把这直接换成每个硬件环节的长期确定性。

</div>

</div>

---

# 内存的变量：供需缺口与算法优化在拉扯

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 支持价格的力量

嘉宾说，短期内推理和 Agent 的需求增长很快；扩产不积极时，供需缺口会更突出。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 压低需求的力量

DeepSeek、Kimi 等为节省资源调整注意力机制，嘉宾认为这类算法优化可能降低 KV Cache 的需求占比。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
他的结论并不确定：下一种模型范式也可能重新增加存储需求，因此内存不能只按总资本开支方向下注。
</div>

---

# 如何读这场多空辩论

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 要验证价格

观察 token 价格下行时，使用量、付费层级和模型厂商收入能否同步增长。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 要验证场景

编码之外，企业是否真正重做工作流，是否出现能带来独立预算的新产品。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 要验证风险

资本开支增长时，杠杆、折旧和居民用电等约束会不会比收入更早成为瓶颈。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
多头相信未知场景与能力进步会扩大分母；空头要求在更低价格、更高折旧和更长组织变革周期下，先看见可重复的收入。
</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="text-xs opacity-50 mb-1">资本开支</div>“所有的行业都是一开始就是Capex超过经营现金流的”</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-50 mb-1">开源竞争</div>“开源模型的出现只是说把他们的超额利润给打爆”</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><div class="text-xs opacity-50 mb-1">前沿探索</div>“浪费有些时候也是必要的，也是你探索的成本”</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><div class="text-xs opacity-50 mb-1">需求焦虑</div>“市场最根深蒂固的担心呢，跟去年的下半年一样”</div>

</div>

<div class="mt-4 text-xs opacity-50">均为节目转录中的原话；本期讨论者是唐奕波与主持人。</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-50 mb-1">产品形态</div>“它是从一个个人级的Agent变成了一个公司级的Agent”</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><div class="text-xs opacity-50 mb-1">组织瓶颈</div>“个人助理的模式它没有改变整个企业整个工作流的模式”</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><div class="text-xs opacity-50 mb-1">债务周期</div>“债务不是一个坏事，只是高杠杆的债务是一个坏事”</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-50 mb-1">长期想象</div>“替代人只是它的一个起点”</div>

</div>

<div class="mt-4 text-xs opacity-50">这些原话分别概括了本期对产品、组织、资本与长期需求的判断。</div>

---
layout: end
---

# “我觉得一定能看到”

<div class="mt-5 text-lg opacity-80">唐奕波谈 AI 原生应用：未知不是论据，但正是多头与空头分歧最大的地方。</div>

<div class="mt-10 text-sm opacity-50">《台前生活》· 唐奕波｜奔波儿r</div>
