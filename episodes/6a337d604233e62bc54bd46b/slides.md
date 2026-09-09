---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 从开源到 Agent，从组织到个体：AIEC 大会现场侧记
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 从开源到 Agent，<br>从组织到个体

## AIEC 2026 大会现场侧记

<div class="mt-8 text-lg opacity-70">圆点 Talk ×《屠龙之术》对谈整理</div>
<div class="mt-3 text-sm opacity-50">2026 年 6 月</div>

---

# 为什么这期现场对谈值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>开源的新位置</strong><br>企业要的不只是一套模型，也在意服务会不会中断、数据是否留在内部。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Agent 进入组织</strong><br>权限、数据围栏、责任与审计，开始成为数字员工的运行条件。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>应用仍在找形态</strong><br>用户需要确定的工作流；通用模型的能力还要经过产品封装。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>模型路线分叉</strong><br>更高 token 效率、超长上下文与多 Agent 集群，同时出现在同一张路线图上。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>个体如何自处</strong><br>自动化带来焦虑，也把品味、在场感和自主判断重新推到台前。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>硬件回到视野</strong><br>软件可快速生成，电力、制造与供给仍受物理条件约束。
</div>

</div>

---

# AIEC 的讨论从三件事展开

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-bold text-blue-700">开源</div>
<div class="text-sm mt-2">模型如何部署、共享，又如何形成商业回报。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-2xl font-bold text-green-700">Agent</div>
<div class="text-sm mt-2">模型能力怎样变成可执行、可交付的工作。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-2xl font-bold text-purple-700">组织</div>
<div class="text-sm mt-2">企业的流程、文化和分工怎样跟上技术。</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
现场嘉宾来自行业分析、学界、模型研发与传统企业。对谈的共同前提是：AI 已进入工作流程，但落地中的摩擦仍很多。
</div>

---

# 技术出现后，组织改变往往更慢

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-700 mb-3">技术先到</div>

蒸汽机到真正显著拉动经济，中间经历了数十年。新的工具刚出现时，常常昂贵、陌生，也难以立刻嵌入生产。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-700 mb-3">配套随后形成</div>

生产关系、交易结构、产业链协作与组织流程逐步调整后，技术的效益才会更清楚地显现。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base">
因此，本次大会谈 AI，并不只谈模型能力；美的、浪潮与水泥行业的案例都把问题带回企业内部。
</div>

---
layout: two-cols-header
---

# 企业接入 AI，先补数据与流程的功课

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
美的的讨论指向一个基础条件：模型要理解企业，先要获得可用的数据与业务上下文。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
数字化转型时未完成的资料沉淀、流程梳理，在大语言模型进入企业后需要重新补课。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
上下文并非一份文档：它同时涉及权限、数据边界和能够被模型调用的流程。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./enterprise-context.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 企业管理层的心态发生了倒转

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-lg font-bold text-red-700 mb-3">过去：推动者在一线</div>

数字化有长期价值，却难以立刻衡量。业务负责人和管理层未必愿意投入足够资源。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-700 mb-3">现在：管理层主动追问</div>

大语言模型带来的压力，让更多负责人接受 AI 转型的必要性；难题变成从哪里开始、花多少钱、怎样推进。
</div>

</div>

<div class="mt-5 text-sm opacity-70">AI 转型的阻力并未消失；企业的重点已从是否采用，转到如何把能力接入核心业务。</div>

---

# Agent 像数字员工，也需要企业规则

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">权限</div>
<div class="text-sm mt-2">哪些系统、哪些信息可以访问。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">数据围栏</div>
<div class="text-sm mt-2">数据在哪里运行，如何与其他数据隔离。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">协作与管理</div>
<div class="text-sm mt-2">多个 Agent 并发时，任务如何分配与审查。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
浪潮的内部尝试包括黑客松与 Skill Hub：员工和 IT 团队为内部场景制作能力，成熟后再考虑复用给客户。
</div>

---
layout: two-cols-header
---

# 数字员工进入流程后，治理不能缺席

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
权限、数据安全、软硬件协同和并发管理，构成企业部署 Agent 的底座。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
现实阻力来自原有 KPI、不同岗位的接受程度，以及使用成本；这些都不是模型参数本身能解决的事。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
当 Agent 被视为一种数字劳动力，企业需要给它定义角色、边界和审查路径。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-governance.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# AI 转型可同时由上而下、由下而上

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-700 mb-3">从核心系统推进</div>

美的的观点是：既然企业已不再怀疑 AI 是否有用，获得管理层预算与支持后，可以直接在核心系统探索，而不必只从边缘试点开始。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-700 mb-3">从个人原型长出</div>

腾讯的 WorkBuddy 起于个人产品和小团队试用；原型效果得到验证后，再成为内部广泛使用的产品。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base">
同一家公司可以并行两种路径：稳定主营业务围绕指标部署，孵化项目则先做小产品，观察用户反馈与外部反应。
</div>

---

# 应用层要回答的，不只是模型能力

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-700 mb-3">一个具体场景</div>

长春一家婚纱摄影工作室想做营销 Agent。它需要的不只是聊天模型，而是带有上下文记忆、能执行任务、能产出方案的工具。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-green-700 mb-3">一连串实际选择</div>

推荐 WorkBuddy、Trae、Coze 或 Coder 时，要看用户的技术背景、软件的易用性、兼容性，以及安全和信任，而不只看模型能力。
</div>

</div>

<div class="mt-5 text-sm opacity-70">对广泛用户而言，Agent 仍是新事物；从能力到日常使用，中间还有许多产品工作。</div>

---

# 用户要的是一把适合手头任务的工具

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">模型的长处</div>
<div class="text-sm mt-2">用途开放，可延展到许多问题。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700">用户的期待</div>
<div class="text-sm mt-2">知道该怎样用，并得到确定的结果。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">产品的任务</div>
<div class="text-sm mt-2">把开放能力收束为固定工作流。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-base">
除了 coding，通用模型的能力边界仍不够清晰。应用产品要回答的，是具体用户用什么方式完成眼前的工作。
</div>

---
layout: two-cols-header
---

# 从通用能力到确定工作流

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
对非工程师而言，模型、协作工具和 Skills 的组合即使可行，也未必可直接交给用户操作。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
学习机和电子词典的类比说明：用户会为确定的现成方案买单，而不是自己拼装一套通用工具。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
产品价值在于把任务、上下文和操作方式组织好，让人知道下一步怎么做。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./application-gap.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 应用市场的空间，尚未被一种答案占满

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型厂商</strong><br>通用 Agent 与 coding 已经吸引了密集投入。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>垂直创业公司</strong><br>法律、金融等细分领域一旦出现高增长公司，竞争很快跟进。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>大型平台</strong><br>会把模型、云、协作产品和既有服务打通，寻找自身差异。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-base">
对谈没有把未来押在单一模式上：模型公司是否向下延伸，取决于组织规模、需求复杂度和模型能否独立交付个性化产品。
</div>

---

# 细分行业的需求仍可能留出位置

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-700 mb-3">水泥智能体的例子</div>

对谈提到，一家公司做的并非大语言模型，而是面向材料科学的时间序列模型；问题和数据类型与语言任务不同。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-green-700 mb-3">部署深度也是门槛</div>

即使通用模型取得这些数据，也未必会派人长期驻场水泥厂。现场知识、运行流程与服务方式都影响交付。
</div>

</div>

<div class="mt-5 text-sm opacity-70">对谈把复杂、深度且多样的需求留作问题：通用模型的泛化能力还要在这些场景中继续检验。</div>

---
layout: two-cols-header
---

# 多模型与多 Agent：按任务分工，而非一把梭

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
Kimi 提到的多 Agent 集群，是先设计流程，再分配任务、角色、上下文与能力，最后由综合审查角色收口。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
应用公司也在引入路由层：并非每项工作都要交给成本最高的模型。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
分工的目标包含结果质量与成本；系统需要根据任务选择合适的能力。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-routing.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Kimi 的三项押注：效率、上下文、集群

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">token 效率</div>
<div class="text-sm mt-2">同类任务用更少 token，或以相同 token 处理更复杂任务。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">超长上下文</div>
<div class="text-sm mt-2">把更长的任务材料和历史信息放进模型可用范围。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">多 Agent 集群</div>
<div class="text-sm mt-2">让不同角色分担流程，再综合整理与审查。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
对谈用 Kimi 的路线说明：模型竞争不只比较单次回答，训练和部署开始围绕一整套任务循环展开。
</div>

---

# 版本节奏改写了大公司的工作方式

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-lg font-bold text-red-700 mb-3">封闭大招的风险</div>

对谈认为，把团队关在房间里数月、等一次产品发布的做法，难以适应模型能力按月变化的节奏。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-700 mb-3">持续迭代的要求</div>

从春节到 6 月，嘉宾感受到已出现多轮版本变化。团队需要持续观察新能力，调整产品与部署选择。
</div>

</div>

<div class="mt-5 text-sm opacity-70">节目中的时间判断是嘉宾对行业节奏的现场感受，并非对所有模型厂商的统一结论。</div>

---

# 大公司正在彼此跨界，生态仍然拥挤

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">同一家公司</div>
<div class="text-sm mt-2">可能同时经营能源、数据中心、芯片、模型、云和应用。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">同一对关系</div>
<div class="text-sm mt-2">在一个领域竞争，在另一个领域又合作。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">同一个问题</div>
<div class="text-sm mt-2">原有主业、云、模型与应用怎样共同被市场认可。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
嘉宾形容当下竞争关系混杂；行业分工尚未稳定，各方都在试探边界。
</div>

---
layout: two-cols-header
---

# 开源对企业的意义：运行自主与数据边界

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
对制造现场而言，产线中断的代价很高。嘉宾用停电比喻关键系统不能把开关完全交给外部。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
本地可部署的开源模型，可作为企业内部运行 AI 的一种选择，也让数据不必全部交给模型公司。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
数据资产与业务上下文像企业配方；它们参与模型使用，却不等于应对所有外部主体公开。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./open-source-resilience.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 开源与商业化，正在形成组合关系

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">模型服务</div>
<div class="text-sm mt-2">常规 token 与不同形式的使用计划仍是收入来源。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">上接 Agent</div>
<div class="text-sm mt-2">把模型接进具体工作流与行业场景，形成交付能力。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">下接基础设施</div>
<div class="text-sm mt-2">部署、运行和管理也能成为服务的一部分。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
节目将开源与闭源描述为持续寻找平衡的两端：模型能力、成本、监管、社区和企业部署需求都在拉动策略变化。
</div>

---

# 个体焦虑来自能力边界的快速移动

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-lg font-bold text-red-700 mb-3">白领任务的变化</div>

coding、Agent 和内容生成的进展，使一部分从业者感到：过去由人编排、下达任务、组织流程的工作，开始被模型跨过。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-green-700 mb-3">稳定预期被松动</div>

过去选专业常被认为影响很长的职业周期；对谈认为，专业、工作和终身职业之间的关系正在变得不那么稳定。
</div>

</div>

<div class="mt-5 text-sm opacity-70">节目没有给出就业预测；嘉宾解释的是技术加速如何让个人对工作选择产生不确定感。</div>

---
layout: two-cols-header
---

# 人仍要保留对结果的第一反应

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
彭凯平在大会上谈到，善良、体验感和在场感会变得更重要；对谈据此延伸到人如何使用 AI。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
嘉宾担心，AI 写作会先替用户给出某段话是否令人惊讶、是否最重要之类的情绪判断。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
使用模型之后，人仍应亲自判断好坏、感受是否成立，并为取舍负责。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./human-judgment.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 内容的价值，可能更依赖品味与信任

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">标准化内容</div>
<div class="text-sm mt-2">嘉宾观察到，摘要和静态内容更容易被快速生产。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">个体表达</div>
<div class="text-sm mt-2">小范围的共同经验、个人风格与怪异之处，可能更受重视。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700">手工痕迹</div>
<div class="text-sm mt-2">字体、边框、版式等细节，仍会传递作者的选择与投入。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
节目把这种坚持放在一个很具体的尺度上：即使 AI 能做得不错，人仍可能因为在意而保留亲手完成的部分。
</div>

---

# 线下、长内容与现场感为何重新被提起

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-lg font-bold text-purple-700 mb-3">纯信息接收并非唯一目的</div>

直播、录播和电子版材料可能更清晰、更方便；但会议、比赛与线下活动仍提供同处一地的情绪感染和注意力。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-lg font-bold text-green-700 mb-3">播客提供另一种节奏</div>

嘉宾把长内容的增长理解为一部分人的选择：他们想要不那么预加工、也不那么追逐即时刺激的信息体验。
</div>

</div>

<div class="mt-5 text-sm opacity-70">线下活动和长内容提供另一种体验偏好；节目没有推断短内容或线上传播会被替代。</div>

---

# 生态的终局尚未出现，边界仍在形成

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700">今天</div>
<div class="text-sm mt-2">各类公司同时尝试模型、应用、云、工具与服务。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700">正在发生</div>
<div class="text-sm mt-2">参与者通过合作、竞争和试错，摸索自己能长期承担的环节。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700">可能的结果</div>
<div class="text-sm mt-2">行业分工与角色边界逐渐清楚，生态从混杂走向更稳定的结构。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
嘉宾没有给出时间表，只判断行业各方仍在相互磨合，分工与边界会在过程中逐渐清楚。
</div>

---

# 硬件为何再次成为重点

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-lg font-bold text-blue-700 mb-3">软件可以快速生产</div>

在嘉宾看来，软件正在被实时生成，供给的响应速度因此显著提高。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-lg font-bold text-orange-700 mb-3">硬件仍受物理限制</div>

制造、电力与供应链不能立即扩张。需求来到时，供给曲线未必能同步响应，这可能带来对硬件价值的重新评估。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-base">
硬件同时连接电力与上层需求。对谈将它视为 AI 生态中承上启下的枢纽，而不是软件时代的配角。
</div>

---
layout: two-cols-header
---

# 硬件连接需求，也受供给约束

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
AI 生态的上层需要算力、设备和基础设施；底层依赖电力和制造能力。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
物理建设的节奏不随模型更新而同步。供给弹性较低时，短时间内难以立刻补齐缺口。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
嘉宾因此关注硬件：它向下依赖电力，向上连接 AI 服务的需求与供给。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./hardware-hub.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 一场现场对谈，六个尚在展开的问题

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>组织</strong><br>先整理数据、流程、权限，再谈规模化部署。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>产品</strong><br>把通用能力收束成用户可直接完成的工作。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>模型</strong><br>效率、上下文、分工和路由共同影响系统表现。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>开源</strong><br>自主运行、数据边界与商业服务需要同时考虑。</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>个体</strong><br>工具更强之后，判断、品味和在场感仍须保留。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>硬件</strong><br>电力和制造让生态增长回到现实的供给条件。</div>

</div>

---

# 核心金句

<div class="text-sm opacity-70 mb-4">来自现场对谈，保留原话的语气与问题意识</div>

<div class="space-y-2 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">「没有所谓的标准答案」<span class="not-italic opacity-70">——谈 AI 生态仍在探索</span></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">「企业当中的上下文工程现在做得不好」<span class="not-italic opacity-70">——谈企业接入模型前的数据与流程</span></div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">「它不是螺丝刀」<span class="not-italic opacity-70">——谈通用模型与确定任务之间的距离</span></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">「不能被断电」<span class="not-italic opacity-70">——谈制造企业为何需要部署自主性</span></div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">「把你这个反应，这个第一反应留给自己」<span class="not-italic opacity-70">——谈人不应把好恶判断交给 AI</span></div>

</div>

---
layout: end
class: text-center
---

# 「软件正在被实时生产」

<div class="mt-6 text-lg opacity-80">因此，组织、产品、人的判断与硬件供给，都要重新安排。</div>

<div class="mt-10 text-sm opacity-50">AIEC 2026 现场对谈整理</div>
