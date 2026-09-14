---
theme: academic
colorSchema: light
diagramMode: static
title: Lucas Schuermann：用掉期替换永续合约
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 用掉期替换永续合约

## Variational 怎样把传统市场的流动性接到链上

<div class="mt-10 text-lg opacity-80">嘉宾：Lucas Schuermann｜Variational 联合创始人</div>

<div class="mt-4 text-sm opacity-50">Flirting with Models · 2026 年 9 月 · 1 小时 14 分钟</div>

<div class="mt-12 text-sm leading-relaxed opacity-70">本期讨论 Omni 的请求报价（RFQ）交易模式、链上现实世界资产（RWA）的流动性难题，以及一类把价格回报与融资成本分开的掉期产品。</div>

---
layout: default
---
# 这场讨论从四个问题展开

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">为什么用 RFQ</div>
Omni 由单一内部流动性提供者（OLP）报价，而不是让未知交易者在订单簿中相互成交。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">RWA 的流动性在哪里</div>
嘉宾认为，链上订单簿难以在短期内复制传统市场积累多年的深度，应直接连接传统做市商。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">永续合约为何不够用</div>
资金费率、指数定义、展期和休市时的价格发现，会让长期持仓成本难以预估。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">掉期怎样改变它</div>
价格回报与融资腿分开，并让链上的合约定义更贴近用于对冲的传统市场工具。
</div>

</div>

---
layout: two-cols-header
---
# Omni 将报价集中在 OLP 一侧

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Lucas 将 Omni 描述为类似经纪商的模式：用户发出询价，OLP 看到交易者、方向和规模后给出价格。请求报价（RFQ）是撮合方式；核心差异是由谁站在交易对手方。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">OLP 可以将相反方向的头寸内部抵销，把剩余风险再对冲到外部市场。嘉宾说，Omni 不以和用户对赌的 B-book 模式运作。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">平台不收 maker 或 taker 手续费，收入来自点差。嘉宾的主张是：已知的零售流与规模化对冲，能够让总执行成本保持竞争力；这仍取决于报价与对冲能力。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="omni-rfq-flow" role="group" aria-label="Omni 的询价与风险处理流程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>用户询价</strong><p>提交方向与交易规模。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>OLP 报价</strong><p>以单一交易对手方给价。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>处理净风险</strong><p>先内部抵销，再对冲余量。</p></div></div>
</div>
<p class="rn-note-caption">流程按 Lucas 对 Omni 的说明整理；它描述的是平台设计，不是每笔交易的逐笔披露。</p>
</div>
</div>

---
layout: default
---
# 已知交易方能缩小逆向选择，却不消除风险

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">流量分层</div>
公开订单簿的做市商不知道是谁在吃单，因而要防范拥有短期信息优势的交易者。OLP 试图把普通零售流与这类流量区分开。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">规模带来的空间</div>
嘉宾把内部抵销、外部连接和更低的对冲费率视为同一个规模效应；它同时影响点差与利润，而非只影响其中一方。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">API 仍要设防</div>
Lucas 说，未来 API 可以服务普通策略用户；若识别出套利或高频滥用，平台可能扩大报价、设置速度限制或限制访问，避免全体用户承担更宽的点差。
</div>

</div>

---
layout: two-cols-header
---
# RWA 的重点是接入传统市场，而非重建它

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">嘉宾把链上 RWA 订单簿的建深过程比作新交易所从很少的报价开始吸引做市商。热门品种可以形成深度，但可顺畅交易的标的仍有限，边缘标的的点差可能很宽。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">股票、外汇、商品等传统市场已有多层参与者与长期积累的流动性。Lucas 的方案让 OLP 直接面对传统市场的交易商，不要求这些参与者先迁到链上订单簿。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">休市与周末仍是例外：他承认，24 小时可交易是加密原生场所当前的优势；正常交易时段则更看重传统市场的深度。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="rwa-liquidity-connection" role="group" aria-label="RWA 交易从链上用户连接到传统市场流动性的路径">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>链上用户</strong><p>在 Omni 交易 RWA 暴露。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>OLP</strong><p>汇总头寸并决定对冲。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>传统交易商</strong><p>提供用于对冲的市场连接。</p></div></div>
</div>
<p class="rn-note-caption">嘉宾特别区分交易商与经纪商：他强调连接的是报价与风险承接的源头。</p>
</div>
</div>

---
layout: default
---
# RWA 从加密原生永续合约走向对齐的掉期

<table class="mt-4 text-sm">
  <thead>
    <tr><th>阶段</th><th>用户交易的工具</th><th>主要对冲来源</th><th>嘉宾强调的限制或目标</th></tr>
  </thead>
  <tbody>
    <tr><td>阶段一</td><td>RWA 永续合约</td><td>加密原生场所的聚合流动性</td><td>先匹配已有的 24 小时产品；不同平台的指数、资金费率和展期定义并不统一。</td></tr>
    <tr><td>阶段二</td><td>掉期</td><td>传统交易商的对冲工具</td><td>让用户合约与对冲工具的定义更接近，减少为基差差异预留的保护空间。</td></tr>
    <tr><td>后续方向</td><td>更多市场与更长交易时段</td><td>更多交易商、场所与连接</td><td>Lucas 预期传统市场会继续延长交易时段，但没有给出已完成的时间表。</td></tr>
  </tbody>
</table>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">阶段并非对现有永续合约的即时替换。嘉宾说，传统流动性也可偶尔补充永续合约的对冲；在容量有限时，优先放到定义更匹配的工具上。</div>

---
layout: default
---
# RWA 永续合约把几个不同的问题叠在一起

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">标的不是总有现货</div>
原油等品种常以近月期货为参照，合约需要展期。平台若采用不同的指数与展期规则，头寸之间就可能出现基差。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">休市时缺少外部锚点</div>
股票周末没有常规市场报价。嘉宾提到，平台会用静态价格、移动平均或其他指数设计来约束价格发现；这些做法各有取舍。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">资金费率难以直觉预估</div>
OLP 要同时面对自身用户端和多个对冲场所的资金流。Lucas 把跨场所规则的汇总与对齐视为聚合模式中的难题。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">这也是嘉宾提出掉期的起点：不再用资金费率把永续合约拉回指数，而是把标的的价格回报与融资成本分别写进合约。</div>

---
layout: two-cols-header
---
# 掉期把价格回报与融资腿拆开

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Lucas 将新产品比作总回报掉期：用户取得标的价格变动的暴露，融资腿则为保证金和杠杆提供成本。它以现金结算，并由 OLP 作为链上交易对手方。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">产品目标是尽可能传递标的回报，嘉宾特别提到股息、公司行动等现金流。对冲端则与传统市场的掉期、差价合约或类似工具衔接。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">与永续合约相比，定价不再依靠不断变化的资金费率去校正指数。Lucas 认为，合约定义对齐后，OLP 更容易直接使用传统市场流动性。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="swap-return-and-financing" role="group" aria-label="掉期由价格回报和融资成本构成">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>价格回报</strong><p>跟随标的价格，并计划传递相关现金流。</p></div></div>
<div class="rn-note-card"><div><strong>融资腿</strong><p>以有担保隔夜融资利率（SOFR）加点差计算持有成本。</p></div></div>
<div class="rn-note-card"><div><strong>对冲衔接</strong><p>以定义更接近的传统工具承接风险。</p></div></div>
</div>
<p class="rn-note-caption">这里的结构按访谈描述概括；实际费率、可交易标的与条款须以平台产品文件为准。</p>
</div>
</div>

---
layout: default
---
# 永续合约与掉期在近期仍服务不同需求

<table class="mt-4 text-sm">
  <thead>
    <tr><th>比较维度</th><th>RWA 永续合约</th><th>RWA 掉期</th></tr>
  </thead>
  <tbody>
    <tr><td>持仓成本</td><td>资金费率会随市场状态变化。</td><td>融资腿以 SOFR 加点差为基础，目标是比永续合约的资金费率更容易预测。</td></tr>
    <tr><td>交易时段</td><td>加密原生市场可提供 24 小时交易。</td><td>初期随传统市场的对冲与交易时段；Lucas 预计这一限制会逐步缩小。</td></tr>
    <tr><td>适合的偏好</td><td>需要周末交易，或策略本身需要资金费率与基差暴露。</td><td>更在意长期持有成本、传统市场深度与合约定义对齐。</td></tr>
  </tbody>
</table>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">嘉宾并未承诺取消永续合约。他设想，在传统市场能够覆盖更多时段后，掉期可能承接更多流量；基差交易等用途仍可能保留永续合约的需求。</div>

---
layout: default
---
# 融资腿可预测，不等于永远不变

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">基准会随利率环境调整</div>
Lucas 说，掉期的主要基准是 SOFR；货币政策改变美元资金成本时，融资腿也会随之调整。这与永续合约按实时市场状态变化不同。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">个别市场仍有复杂性</div>
商品等市场的隔夜持有、展期和融资结构更复杂。嘉宾预期大多数产品是 SOFR 加点差，但为处理这些情况可能保留小幅调整空间。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">容量也会影响加点差</div>
主持人举例说，单一股票总回报掉期的报价曾因资产负债表可用性而变化。Lucas 的预期是，平台规模和谈判条件能让自身费率更平缓；这是预期，不是保证。</div>

</div>

---
layout: default
---
# 一十亿美元容量是起点，也是一组约束

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">已签容量</div>
Lucas 说，Variational 已与传统交易商签下超过 10 亿美元的未平仓合约容量。这是首批商业协议，而不是任一单一标的可用的额度。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">抵押物彼此隔离</div>
他说用户余额放在独立的结算池智能合约中，不会再抵押；OLP 需用独立资产负债表为头寸提供抵押。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">扩张必须逐步放开</div>
交易商额度、平台自身资本、市场连接和风险限额都会限制规模。嘉宾说，会让掉期逐步增长，而不是一次性把风险上限推到最大。</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">节目中 Lucas 还报出约 5 亿美元的 RWA 永续合约规模、约 15 亿美元的平台整体规模。这些是嘉宾在访谈中的陈述，用于说明其扩张计划，未在节目中独立核验。</div>

---
layout: two-cols-header
---
# Omni 与 Pro 面向两种不同的市场结构

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Omni 面向零售，也面向难以直接接入一级机构交易对手方的全球中型机构、家族办公室和自营交易者。它以 OLP 的单一对手方报价与流动性聚合为核心。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">Lucas 还提到企业套保的情形：若工具有可预期的持有成本，非金融企业或许更愿意以链上 USDC 抵押外汇、油价等风险暴露。节目没有说明哪些企业已经使用该模式。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">Pro 的重点转到期权、结构化产品等场外衍生品。多家交易商围绕同一笔交易报价，平台处理结算与清算流程，不承担 Omni 式的单一流动性聚合角色。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="omni-and-pro" role="group" aria-label="Omni 与 Pro 的两种交易结构">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>Omni</strong><p>OLP 面对用户报价，并在外部处理净风险；重点是线性产品与交易执行。</p></div>
<div class="rn-note-card"><strong>Pro</strong><p>多家交易商彼此报价；平台承接场外产品的交易、结算和清算生命周期。</p></div>
</div>
<p class="rn-note-caption">两者都在尝试把衍生品工作流搬到链上，但交易对手方和平台价值不同。</p>
</div>
</div>

---
layout: end
---
# 掉期的扩张取决于三个同步条件

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-slate-800">
<div class="font-bold">合约定义对齐</div>
链上产品要能与传统市场的对冲工具相匹配，才能减少基差和资金费率带来的额外摩擦。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-slate-800">
<div class="font-bold">容量与风险限额增长</div>
交易商额度、OLP 资本和平台风险检查需要随实际使用逐步扩大。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-slate-800">
<div class="font-bold">交易时段继续延伸</div>
掉期的近期限制是传统市场时段；Lucas 把更广泛的 24 小时流动性视为后续方向，而非已经实现的能力。
</div>

</div>

<div class="mt-5 text-sm opacity-70">永续合约因此仍保留周末交易与基差策略的用途；访谈讨论的是一条可能提高长期持有可预测性的产品路线。</div>
