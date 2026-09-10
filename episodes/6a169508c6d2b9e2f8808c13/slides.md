---
theme: academic
colorSchema: light
diagramMode: static
title: AI行业的收钱、花钱与赚钱---串台赛博对话
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 行业的收钱、花钱与赚钱

## 从豆包收费，到模型、基础设施与应用如何分账

<div class="mt-10 text-lg opacity-80">庄明浩 × 高飞 × 兰溪 · 2026-05 · 56 分钟</div>

<div class="mt-12 text-sm opacity-70">这场串台讨论从一次面向用户的收费尝试出发，追问推理成本、资本开支、应用利润与中美市场条件。</div>

---
layout: default
---

# 一笔钱，要回答三道题

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 用户为何付费

推理每次都要消耗算力。订阅、额度、广告和渠道分销，分别怎样覆盖这笔持续发生的成本？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 训练的钱从哪里来

模型升级、芯片和数据中心的投入很重。大厂主业、外部融资与用户收入各自能承担多少？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 哪一层先有利润

电力、芯片、基础设施、模型和应用构成不同的成本与议价位置；应用还要面对获客和付费意愿。

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">三位讨论者没有把收费看成孤立的产品动作：它同时在测试中国用户的订阅习惯、模型服务的单位经济，以及产业链上谁承担风险。</div>

---
layout: two-cols-header
---

# 推理成本让免费模式难以无限延长

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">庄明浩把生成式 AI 与旧互联网产品区分开来：用户每提出一个不同需求，模型都要重新计算并生成结果，Token 消耗因此带来成本。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">月费订阅按平均使用量定价，但重度用户的成本可能远高于月费。额度上限、限速和叠加包，是服务商重新分配风险的办法。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">讨论的前提是，免费、小额订阅与高用量之间需要有可持续的边界；所有免费服务不必立刻停止。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="inference-cost" role="group" aria-label="生成式 AI 的推理成本路径">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>用户提出请求</strong><p>不同任务需要不同计算。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>推理产生 Token</strong><p>每次生成都有算力成本。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>定价设置边界</strong><p>月费、额度与加购共同承担成本。</p></div></div>
</div>
<p class="rn-note-caption">这是嘉宾用来解释收费压力的成本关系，不是单一产品的公开计费公式。</p>
</div>
</div>

---
layout: default
---

# 豆包收费，被看作一次市场试探

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 先有用户规模，才有试探空间

庄明浩认为，豆包在国内聊天机器人市场的用户基础，使它有条件测试面向大众的付费方式；这不是把收费简单归因为字节的短期资金压力。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 头部先收费，后来者才敢跟

兰溪的判断更直接：若领先产品始终免费，千问、元宝等竞争者会担心一收费就流失用户。先行者的选择会改变行业的定价空间。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 订阅制仍在被验证

讨论者把问题放回中国消费者市场：既有软件订阅渗透有限，AI 能否形成稳定的个人订阅收入，尚不能由一次定价得到答案。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 模型更新也能划分权益

一项设想是让付费用户更早使用新版本，免费用户延后升级或获得有限额度。付费差异由能力和可用性组成，而非只多卖一些 Token。

</div>

</div>

---
layout: default
---

# 价格的核心，是用户是否认同服务价值

<div class="grid grid-cols-3 gap-3 mt-4 text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-70">兰溪转述的当时传图</div>
<div class="text-3xl font-bold text-blue-600 my-2">64 元</div>
<div class="text-xs opacity-70">月度起步档</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-70">兰溪转述的当时传图</div>
<div class="text-3xl font-bold text-purple-600 my-2">200 元</div>
<div class="text-xs opacity-70">月度中间档</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-70">兰溪转述的当时传图</div>
<div class="text-3xl font-bold text-orange-600 my-2">500 元</div>
<div class="text-xs opacity-70">月度高档</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">兰溪明确说不确定这些价格后来是否调整。三档数字在节目中只是一个观察样本，不能视为当前的正式价目。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">节目里的分歧不在于某个整数，而在于服务能否匹配场景：生产力用户会为高频、高质量能力付费，日常问答用户未必需要同样的模型上限。</div>

</div>

---
layout: two-cols-header
---

# 广告和运营商，提供两条不同的收费路径

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">广告的难点不只是把广告位放进对话。嘉宾认为，现有系统依赖页面或搜索关键词；关联用户输入会涉及脱敏和更高的监管压力。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">运营商则可能把模型会员放进通信套餐，承担触达个人用户的分销角色。它更像渠道合作，不等同于运营商天然拥有模型收入。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">模型厂商仍要权衡：渠道能降低用户的付款心理门槛，也可能削弱自己与用户直接建立关系的能力。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="revenue-routes" role="group" aria-label="广告和运营商两种收入路径">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>广告</strong><p>把服务收入转到广告主，但要处理对话数据关联与合规问题。</p></div>
<div class="rn-note-card"><strong>运营商分销</strong><p>把会员并入套餐，利用运营商的个人用户触达能力。</p></div>
</div>
<p class="rn-note-caption">二者都是节目提出的可能路径，能否实施取决于模型厂商、监管与产品设计。</p>
</div>
</div>

---
layout: default
---

# 免费 Token 也有成本与质量的取舍

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 先让人能用上

庄明浩支持企业给员工报销模型使用费，也认为教育机构可以让学生先获得使用条件；他把学习 AI 比作练球，理解工具离不开实际操作。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 量大不等于有效

兰溪提出，普惠、盈利和质量难以同时拉满。只承诺大量 Token，却不说明背后模型的能力，不能说明用户得到的服务有多好。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 组织也有两难

学校和公司既担心成员因不用 AI 而脱节，也担心它改变作业、评估和工作流程。报销或配额只是入口，使用规则仍需另行建立。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">节目没有把全民免费 Token 当作确定的公共政策，而是把它放在组织培训、服务质量和资金来源必须同时成立的条件下讨论。</div>

---
layout: two-cols-header
---

# 资本开支越大，钱的来源越不能只靠订阅

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">庄明浩认为，科技巨头的芯片、数据中心和电力投入已碰到更硬的供给问题：产线、原材料和建设速度未必能立刻追上预算。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">因此，用户月费只能解释一部分现金流。训练下一代模型、扩建机房和购置设备，往往要求更长期的资金安排。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">三位把不同公司放在同一张资金图里比较，借此说明每种资金来源所能承受的周期不同。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="funding-sources" role="group" aria-label="AI 公司的三类资金来源">
<div class="rn-note-cards">
<div class="rn-note-card"><span class="rn-note-index">A</span><div><strong>成熟主业</strong><p>大型平台用既有业务的现金流支持投入。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">B</span><div><strong>外部资本</strong><p>融资为尚未成熟的模型业务争取时间。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">C</span><div><strong>用户收入</strong><p>订阅、API 与其他收费方式验证需求。</p></div></div>
</div>
<p class="rn-note-caption">同一家公司可以同时使用多种来源；节目讨论的是资金结构，不是完整财务披露。</p>
</div>
</div>

---
layout: default
---

# 为什么许多模型玩家还留在牌桌上

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 市场增长会容纳追赶者

兰溪认为，中国模型竞争尚未迅速拉开绝对差距。只要总市场继续扩大，非头部公司即使增速较慢，也可能获得融资、收入和后续选择。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 美国的淘汰感更强

他把美国的情况描述为头部公司跑得更快：一旦能力和资源落后，后来者就更难得到继续投入所需的支持。这是节目中的市场观察，不是固定格局。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 视频生成是讨论用的样本

嘉宾列举多家视频模型与产品公司：即使前面已有强势玩家，后续公司仍在融资和发布产品，投资人押注的是市场还没有完全定型。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 留在牌桌不等于已经盈利

融资热度、上市窗口和收入增长，可以延长竞争周期；它们不能替代长期的成本控制、产品优势和现金流。

</div>

</div>

---
layout: two-cols-header
---

# 订阅与 API，服务的是不同的连接方式

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">订阅直接面对个人用户，适合把模型能力包装成可感知的权益；但重度使用会迫使服务商设置额度，并持续校准价格。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">API 让应用和企业把模型嵌入自己的产品或流程。若 AI 应用出现更广泛的增长，调用关系会随之扩大。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">节目没有为二者给出唯一比例。庄明浩认为，中国的个人用户市场和美国较成熟的企业软件生态，会让不同公司的收入组合不同。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="subscription-api" role="group" aria-label="订阅和 API 的两种模型连接方式">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>订阅</strong><p>用户按周期购买服务；产品负责把能力变成可理解的权益。</p></div>
<div class="rn-note-card"><strong>API</strong><p>开发者按调用接入模型；价值由下游产品与企业流程共同实现。</p></div>
</div>
<p class="rn-note-caption">它们可以并存。占比取决于公司已有用户、企业生态和模型的实际使用方式。</p>
</div>
</div>

---
layout: default
---

# 五层产业里，应用的压力最贴近用户

<div class="grid grid-cols-5 gap-3 mt-4 text-center text-sm">
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>电力</strong></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>芯片</strong></div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>基础设施</strong></div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>模型</strong></div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>应用</strong></div>
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">主持人转述的五层框架中，庄明浩把芯片和基础设施视为当前较能获取收入的一端，并以英伟达、台积电为代表说明这种供给位置。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">数据中心的业务未必没有需求，但扩建通常伴随借款和高杠杆；当期收入与为扩张支付的利息，不一定同步好看。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">应用既要向模型和云付费，还要承担获客、运营与转化压力。嘉宾对它的长期空间保持期待，但认为短期最难把成本传给用户。</div>

</div>

---
layout: default
---

# 模型能否盈利，取决于训练与服务的时间差

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 单看已上线的服务

嘉宾认为，推理服务的毛利可以单独计算；当模型不再训练新版本时，服务收入有机会覆盖服务成本。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 竞争又要求下一轮训练

模型公司不能长期停在旧版本。为保持能力与市场位置而训练更大的下一代模型，会重新带来重资本投入。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 盈亏平衡是预测，不是已实现的事实

节目提到市场对 OpenAI、Anthropic 等公司的盈亏时间有不同预期，并把编程场景带来的收入增长视为可能改变节奏的因素。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 更靠前的问题变成 ROI

当市场开始追问大量模型调用和编程辅助究竟产出了什么，讨论的焦点已经从有没有需求，转向产出能否抵过新增投入。

</div>

</div>

---
layout: two-cols-header
---

# 中美商业化，先受不同的底层条件约束

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">庄明浩认为，中国电力体系的运营和既有建设成本，与美国更多由私营企业运营的电力市场不同；数据中心扩张在两地面对的成本和民生压力也不同。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">他承认中国在先进芯片能力上仍有差距，同时认为成本、资源调配和产业组织方式会影响这种差距如何传导到模型公司。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">在模型和应用层，他预期中国会有更多厂商分工与产品尝试；这是对可能路径的判断，不代表商业结果已经出现。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="market-conditions" role="group" aria-label="中美 AI 商业化的讨论视角">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>中国</strong><p>嘉宾更强调稳定供给、成本和多样的产品玩法。</p></div>
<div class="rn-note-card"><strong>美国</strong><p>嘉宾更强调资本驱动、回报率与高性能竞争。</p></div>
</div>
<p class="rn-note-caption">这是节目对市场条件的概括，不是对两国企业能力或单个项目成败的排名。</p>
</div>
</div>

---
layout: end
---

# AI 硬件的机会，要在试作与交付中检验

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-slate-800">庄明浩把中国硬件的潜在优势放在供应链和制造速度上：一个想法可以较快从样品走到产品，AI 则为原本功能有限的设备增加更聪明的控制能力。</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-slate-800">他也提到其中会出现很多不成熟甚至奇怪的产品。节目关心的是从想法、试作到上市的循环是否足够快，能否让玩具、学习设备和宠物设备等方向继续试错。</div>

</div>

<div class="mt-6 text-sm text-white opacity-80">这也是本期最后留下的商业问题：收费、融资和利润最终都要由具体产品能否被造出来、被使用并被持续购买来检验。</div>
