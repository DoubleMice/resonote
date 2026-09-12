---
theme: academic
colorSchema: light
diagramMode: static
title: Vol.84 数据不再是“后台的沉默基石”：OceanBase 与 00 后开发者眼中的 AI 变局
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Vol.84 数据不再是“后台的沉默基石”

## OceanBase 与 00 后开发者眼中的 AI 变局

<div class="mt-10 text-lg opacity-80">嘉宾：日昭（OceanBase CTO）、杨同学、吴洪涛</div>

<div class="mt-4 text-sm opacity-50">屠龙之术 · 2026 年 1 月 · 74 分钟</div>

<div class="mt-12 text-sm leading-relaxed opacity-70">一场从数据库竞赛出发的讨论：模型进入企业后，私有数据如何被管理、检索、核验，并接入真实业务流程。</div>

---
layout: default
---
# 从数据到 Agent：节目讨论的四个问题

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">企业为什么重新重视数据</div>
公共数据支撑了通用能力；企业自己的数据仍在模型之外，接入它们需要新的数据系统。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">混合检索解决什么</div>
向量、全文等方法要一起工作，让模型取得相关上下文，也让答案能回到原始资料。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">AI 编程怎样改变开发</div>
工具能更快读懂代码库、生成实现；需求描述、人工审查和基础能力没有消失。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">持续学习与 Agent 能走多快</div>
模型内部学习仍有不确定性；企业落地还要连接权限、私有数据与业务流程。
</div>

</div>

---
layout: two-cols-header
---
# 模型进入企业，先要找到私有数据

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">日昭区分了两类数据：预训练和通用应用主要利用公共数据；企业的业务数据通常不会进入通用大模型的预训练。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">聊天、编程和内容生成等场景较容易复用公共数据能力。涉及企业核心流程时，数据的管理、权限和结合方式都要单独处理。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">嘉宾认为，企业在核心流程中使用大模型仍处于早期：评估标准、构建方式和通用方案尚未定型。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="enterprise-data-path" role="group" aria-label="企业私有数据接入模型的三个环节">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>管理数据</strong><p>保留企业自己的数据边界与可用性。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>取得上下文</strong><p>按任务找到模型此刻需要的信息。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>接入流程</strong><p>把模型能力放进具体业务，而非停在演示中。</p></div></div>
</div>
<p class="rn-note-caption">这是根据嘉宾对企业应用的说明整理出的工作路径，不代表所有企业采用相同的实施顺序。</p>
</div>
</div>

---
layout: default
---
# 可被模型利用的数据，比过去更宽

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">结构化数据仍是基础</div>
交易与分析场景长期依赖这类数据，数据库的控制能力也建立在这里。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">半结构化与非结构化数据加入</div>
文本、图像、音频、视频等内容过去较难统一使用；大模型的泛化能力扩大了可用范围。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">数据库与模型共同处理</div>
日昭认为，数据库既要支持多模态数据，也要借助模型让用户的处理过程更简单。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">从用户视角看，文本、图像、视频和代码是一张需要使用的数据桌；底层技术仍可能采用不同方法，统一做法尚未出现。</div>

---
layout: default
---
# 企业 AI 缺的还是一套可复用的做法

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">没有统一评估</div>
嘉宾说，企业使用大模型常要按具体案例判断，尚不存在适用于所有场景的标准答案。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">没有固定构建语言</div>
模型、数据和业务怎样组合，仍需要在实际部署中反复摸索。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">标准要从实践中长出</div>
日昭期待更多企业采用数据加模型的方案后，逐渐形成行业解决方案与标准。
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">节目没有把企业应用效果不佳归因于单一因素。嘉宾的判断是：成本下降让更多企业想用模型，但底层系统和实施方法还在补课。</div>

---
layout: two-cols-header
---
# 从向量检索到混合检索：寻找可用上下文

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">OceanBase 比赛去年的题目偏向向量数据库：用 embedding 和 RAG 为模型补充信息。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">今年题目转向混合检索。日昭把它放进上下文工程：不只计算语义相似，还要按不同数据形态安排搜索。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">这些方法的组合并非已经定型。比赛的目标仍是围绕数据库内核优化，在 AI 业务场景中检验效果与性能。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="hybrid-retrieval-methods" role="group" aria-label="混合检索可组合的几类方法">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>向量检索</strong><p>利用语义相近性找到候选内容。</p></div></div>
<div class="rn-note-card"><div><strong>全文检索</strong><p>按文字内容和关键词补充定位。</p></div></div>
<div class="rn-note-card"><div><strong>图与标量索引</strong><p>节目列为可与前两者结合的其他搜索方式。</p></div></div>
</div>
<p class="rn-note-caption">嘉宾的重点不在某一种索引取代另一种，而在把数据能力与模型能力组合成可用工具。</p>
</div>
</div>

---
layout: two-cols-header
---
# 检索命中还不够：答案要能回到来源

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">一支参赛队把用户问题先改写得更清楚，再对混合检索结果重排序，以提高语义相关性。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">另一支队伍发现：模型给出的答案即使正确，相关文档和页码仍可能不稳定。只看答案会掩盖来源错误。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">他们先排序候选文档，再定位更可能出现答案的页码。检索链路同时要兼顾效率，不能无限增加步骤。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="retrieval-grounding" role="group" aria-label="从问题到可追溯答案的检索链路">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>提出问题</strong><p>测试问题对参赛者而言并不预先可见。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>检索与重排</strong><p>用混合方法缩小候选资料范围。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>定位来源</strong><p>回到相应文档和页码，核验答案依据。</p></div></div>
</div>
<p class="rn-note-caption">作者概括：图中合并了两支队伍分享的手段，用于说明一条可追溯的检索链路；并非任一队伍的完整方案。</p>
</div>
</div>

---
layout: default
---
# AI 搜索让数据库面对非精确性

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">传统任务</div>
数据库长期服务交易与分析，主要处理结构化数据，方法和理论已积累得较成熟。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">AI 场景</div>
在上下文中寻找与模型匹配的信息，更像搜索问题；嘉宾说结果难以保证百分之百准确。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">仍在探索</div>
方法尚未定型，参赛队的不同实现也让评委看到新的思路。来源定位成为控制风险的一层机制。
</div>

</div>

---
layout: two-cols-header
---
# AI 编程改变分工，没取消审查

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">学生提到，新的编程工具能读取更完整的代码库上下文，减少了手工摘取、粘贴片段的过程。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">OceanBase 的实践是大量采用 AI 编程。日昭认为，前端、实验性代码和部分中间件的效率提升尤其明显。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">涉及严谨要求的代码仍可能有缺陷。嘉宾把人工 review 和开发、测试、产品之间的协作方式列为接下来的问题。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="ai-coding-division" role="group" aria-label="AI 编程与人工审查的分工">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>工具擅长的部分</strong><p>阅读上下文、生成实现、快速试验与处理重复工作。</p></div>
<div class="rn-note-card"><strong>人要承担的部分</strong><p>讲清需求、理解执行过程、发现错误并决定是否合并。</p></div>
</div>
<p class="rn-note-caption">节目把这看作开发流程的重组，而不是把输出代码直接视为可交付结果。</p>
</div>
</div>

---
layout: default
---
# 基础能力仍决定能否校验 AI 的输出

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">描述需求</div>
参赛者的体会是，问题和需求说得越清楚，工具越容易生成可用结果。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">读懂流程</div>
一位原先偏手写代码的学生，仍会逐段理解 AI 生成的实现；这帮助团队继续优化方案。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">保持开放</div>
日昭认为，数据库理论和基础编程训练不会被替代；研发者还需要接触新的数据与模型方法。
</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">两位学生把 AI 当作日常工具，但没有把它与学习过程分开：能判断错误、理解逻辑，才知道该如何继续让工具修改。</div>

---
layout: default
---
# AI 让安全研究的接口变宽

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">研究对象在扩展</div>
学习网络安全的学生提到，学校接触到的新研究包括大模型安全、语音模态与其他多模态安全问题。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">企业系统多了一层接口</div>
主持人把模型与数据库、网络、交易系统的结合视为新的安全议题：这些原本更封闭的系统开始接入通用模型能力。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">问题尚未收敛</div>
学生的感受是，相关方向仍很宽、发展很快。节目没有给出一套可以覆盖这些问题的安全方案。
</div>

</div>

---
layout: two-cols-header
---
# 持续学习有两条路线，但一条还不稳定

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">节目指出，Continual learning 的定义尚不清晰。日昭把当前实践分成模型内部更新和模型结合数据库两条路线。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">对模型内部更新，他说多次微调后的结果难以预测，往往仍要由人检查；这一路尚未出现明确突破。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">他更关注上下文工程：数据库可以实时读写，随着数据变化为模型提供更新后的信息。这是嘉宾的实用路线，不是已被证实的最终答案。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="continual-learning-options" role="group" aria-label="节目讨论的两种持续学习路径">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>模型内部更新</strong><p>直接让模型吸收新信息；效果与自动化方式仍有较大不确定性。</p></div>
<div class="rn-note-card"><strong>数据库加上下文</strong><p>保存、读取并迭代外部信息，再与模型能力结合使用。</p></div>
</div>
<p class="rn-note-caption">两条路径的机制不同。节目没有断言后一条等同于模型本身已经学会了新知识。</p>
</div>
</div>

---
layout: two-cols-header
---
# 开源不是把代码直接放出去

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">日昭回顾，OceanBase 2010 年起先是蚂蚁内部项目；公司化后第二年才对外开源。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">准备开源时，团队要剥离内部依赖，处理代码质量与文档。这些工作让内部系统能被外部开发者理解和使用。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">他把持续竞争力放在团队解决用户问题的能力上，而非只把代码本身视为资产；也希望生态能继续试验这套工具。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="open-source-preparation" role="group" aria-label="内部项目走向开源的准备工作">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>通用设计</strong><p>团队称项目从开始就以通用数据库为目标。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>清理内部依赖</strong><p>让外部环境能独立使用代码。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>完善代码与文档</strong><p>把内部工程转成可协作的开源项目。</p></div></div>
</div>
<p class="rn-note-caption">步骤来自 OceanBase 的个案，不构成所有开源项目的固定流程。</p>
</div>
</div>

---
layout: two-cols-header
---
# 企业 Agent 的落地速度，取决于连接谁

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">日昭认为，通用 Agent 受益于通用技术能力，进展可以很快。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">把 Agent 接入企业则是另一类工作：要连通私有数据、权限、业务流程和底层基础设施，形成可复制的解决方案需要更长周期。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">他预计，搜索、风控和客服等场景正在接近更大规模采用的前期；金融、医疗等拥有高价值私有数据的行业可能更早受益。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="agent-deployment-contrast" role="group" aria-label="通用 Agent 与企业 Agent 的不同落地条件">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>通用 Agent</strong><p>围绕可泛化能力迭代，产品变化可能较快。</p></div>
<div class="rn-note-card"><strong>企业 Agent</strong><p>需要把数据、权限和流程接入系统，部署节奏受组织与工程条件约束。</p></div>
</div>
<p class="rn-note-caption">右侧预测均为嘉宾对 2026 年趋势的判断，不是行业采用率统计。</p>
</div>
</div>

---
layout: end
---
# 节目留下的工程问题

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed text-left text-slate-800">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">怎样找到依据</div>
混合检索不只追求相关答案，还要让使用者回到具体文档和页码。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">怎样让信息更新</div>
模型内部更新仍难预测；数据库提供的外部上下文是嘉宾正在探索的路径。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">怎样进入流程</div>
企业 AI 要同时处理私有数据、权限、审查与业务协作，不能只比较模型能力。
</div>

</div>
