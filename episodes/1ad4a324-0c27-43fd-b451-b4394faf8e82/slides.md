---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'John Gu – Crypto Market Making & The Cold Start Problem (S7E30)'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# John Gu
## Crypto Market Making & The Cold Start Problem

<div class="mt-8 opacity-70 text-sm">

Flirting with Models · S7E30 · 2026-05

</div>

<div class="mt-12 text-xs opacity-50">

John Gu — Founder & CEO, Caladan · 200+ token launches · MIT → AlphaSimplex → Citadel → Tower → Singapore

</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>冷启动难题</strong><br/>
一个新 token 上线时没有 order book、没有参考价、没有可比标的、没有需求曲线——做市商如何向虚空报价？
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>200+ 次实战</strong><br/>
Caladan 已为超过 200 个 token 发行提供流动性，从第一天到第三十天的策略演化有清晰的 playbook。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>两种商业模式</strong><br/>
"做市即服务" vs "自营交易获利"——Loan+Option 模型和 Retainer 模型的激励机制完全不同。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>CEX + DeFi 双线作战</strong><br/>
同时在中心化订单簿和链上 AMM 池提供流动性，面对截然不同的对手方风险和基础设施。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 col-span-2">
<strong>适者生存的市场观</strong><br/>
从 Andrew Lo 的 Adaptive Markets Hypothesis 到 FTX 后时代，John 用"注意力转移"的框架理解每一次市场地震。
</div>

</div>

---

# John 的职业弧线

<div class="grid grid-cols-5 gap-2 mt-6 text-center text-xs">

<div class="p-2 rounded bg-blue-50 border border-blue-200">
<div class="font-bold text-sm">MIT</div>
<div class="mt-1 opacity-70">Computer Science<br/>Master's thesis with Andrew Lo<br/>Rollerblades to Goldman interview</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-2 rounded bg-green-50 border border-green-200">
<div class="font-bold text-sm">AlphaSimplex</div>
<div class="mt-1 opacity-70">Research Scientist<br/>Statistical arb & CTA<br/>Adaptive Markets Hypothesis</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-2 rounded bg-orange-50 border border-orange-200">
<div class="font-bold text-sm">Citadel</div>
<div class="mt-1 opacity-70">Principal Strategies<br/>M&A risk arb<br/>CEO-turnover signals</div>
</div>

<div class="flex items-center justify-center text-lg opacity-30">→</div>

<div class="p-2 rounded bg-purple-50 border border-purple-200">
<div class="font-bold text-sm">Tower Research</div>
<div class="mt-1 opacity-70">Asian markets HFT<br/>Fast feedback loops<br/>Brought him to Singapore</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<span class="font-bold">关键转折：</span>2016 年离开 Tower 时并没有下一份工作。朋友 Michael（后来的 co-founder）告诉他 crypto 交易所之间存在大量价差套利机会。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<span class="font-bold">从套利到公司：</span>Kimchi Premium（韩国 20-50% 溢价）+ 跨交易所短线套利 → 利润远超预期 → 决定建一家真正的公司。
</div>

</div>

---

# Adaptive Markets Hypothesis：市场是活的

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>Andrew Lo 的核心洞见</strong><br/>
市场不是一个静态均衡系统——注意力从一个东西转移到另一个，机会随之迁移。这定义了市场的相对有效程度。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>John 的终生心智模型</strong><br/>
"It's sort of one of the mental models that I use to think about markets."
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>FTX 崩盘后的应用</strong><br/>
"Collectively, attention shifted from one thing to another. It became much more fashionable and defensible to talk about risk."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>在 crypto 中的表现</strong><br/>
新 token 的风险几乎全是 idiosyncratic——因为它们被 day 1 到 day 10 的内部动态主导，还没被整体市场定价。
</div>

</div>

<div class="flex justify-center items-center">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 w-full text-sm leading-relaxed">

<div class="font-bold mb-2 text-base">Market Efficiency as an Ecosystem</div>

<div class="space-y-2">

<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
<span>注意力流动 = 资金流动</span>
</div>

<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
<span>机会转移 ≠ 机会消失</span>
</div>

<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>
<span>相关性是流动性现象</span>
</div>

<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>
<span>BTC 与传统资产相关性上升，因为持有者重叠</span>
</div>

<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
<span>小 token 的风险 ≠ 市场风险</span>
</div>

</div>

</div>

</div>

</div>

---

# Caladan 的诞生：一个有机的故事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>第一笔交易：Kimchi Premium</strong><br/>
韩国交易所的 crypto 价格比境外高 20-50%。但存在资本管制——韩元很难换成美元。John 靠之前在 Tower 做韩国市场的 contacts 拿到了通道。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>第二个机会：跨交易所套利</strong><br/>
"I built a very simple automated algorithm to take advantage of that, and it did a lot better than I thought it would."
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>关键对话</strong><br/>
妻子在度假时说："你可以把它当 lifestyle business，也可以 build a business。"John 选择后者——不是因为预见到 crypto 会爆发，而是因为一直想创业。
</div>

</div>

<div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>父母的故事</strong><br/>
父母 1980 年代从中国移民美国，几乎不会英语。父亲是交换学生，母亲在中国是医生却在美国做保姆。后来自己创立了 healthcare IT 公司，最多雇佣了五六百人。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
<strong>为什么叫 Caladan？</strong><br/>
原名叫 Alpha Lab，但太多项目用 "Labs" 后缀，容易被混淆。Caladan 是《沙丘》中 Atreides 家族的母星——"tough but fair"，而且是水星球，暗示流动性。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>自我认知</strong><br/>
John 承认自己并非远见卓识——"I was almost certain the trades themselves would disappear."真正的动机是用套利利润作为创业的跳板。
</div>

</div>

</div>

---

---
layout: two-cols
---

# 冷启动问题：向虚空报价

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**TradFi IPO**: DMM 已被指定、有参考价、有可比公司、有数十年监管基建——股票从"脚手架"上出发。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**Token Launch**: 没有 order book、没有可比标的、需求不确定、不知道谁持有——做市商面对的是一个"虚空"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Bridge**: 做市商用宽价差开始报价，用交易自身的反馈逐步缩窄价差、校准中间价——市场本身成了定价机制。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cold-start.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Day 1 做市 Playbook

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 信息发现
与项目方沟通：他们怎么看待自己的 token？交易所传达的"reasonable range"是什么？在缺乏信息的情况下，人们会锚定到那个价格。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 宽价差起步
"you can arbitrarily choose a mid and just quote really wide"——中间价不重要，买卖价差才是核心。用小尺寸、宽价差开始，慢慢收窄。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 用交易反馈校准
"We use the feedback from the trading itself to actually tune our mid." 市场本身的数据是最好的定价信号——比任何模型都直接。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>锚定效应不可忽视</strong><br/>
"Once that anchoring comes, it's a little bit sticky and adjust in time." 初始价格不是 path independent 的。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>几乎总是亏钱的</strong><br/>
"it's almost always a money-losing proposition"——所以做市商需要被项目方补偿。纯做市活动本身不赚钱。
</div>

</div>

---

---
layout: two-cols
---

# 分叉的市场结局

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">

**Path A — 自维持市场**：足够的有机交易量、分散的持有者结构、价格发现完成后趋于稳定——做市商可以转向盈利性交易。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**Path B — 鬼城**：没有真正的有机交易、库存高度集中、可能存在内部人操纵——做市商几乎无法应对。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

这是一个 <strong>spectrum</strong>，不是二元选择。最终结果取决于 interest、holders 数量和 token 本身的 mindshare。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-outcomes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 上币场所本身就是信号

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Tier 1（Binance, Coinbase）</strong><br/>
项目需要通过交易所严格的筛选。一旦上线，通常被市场视为积极信号。Binance 甚至被看作一个"distribution channel"——为 token 带来大量客户基础和关注度。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>有机交易量更可靠</strong><br/>
"you can sort of trust what you see more in the data more"——Tier 1 交易所的数据更真实，价格发现更可靠。
</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Tier 2 / 小交易所</strong><br/>
"wash trading is kind of endemic problem"——人们会质疑成交量是否真实。做市商很难校准定价。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Pre-market perps 的影响</strong><br/>
大项目在上 CEX 之前可能有 perpetuals 或链上价格发现。这让做市商可以提前参考市场定价——但仅限于有足够 mindshare 的大项目。
</div>

</div>

</div>

---

# 两种商业模式：服务 vs 交易

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 做市即服务 (MM as a Service)

<div class="mt-2 space-y-2">
<div class="p-2 rounded bg-white bg-opacity-60">

**目标**：bootstrap 一个新市场——就像 Uber 早期用高补贴吸引司机和乘客。

</div>
<div class="p-2 rounded bg-white bg-opacity-60">

**KPIs**: 必须维持 uptime、在特定 spread 上挂最小 size 的单子——让 taker 任何时候都能交易。

</div>
<div class="p-2 rounded bg-white bg-opacity-60">

**补偿**: 通常以 token 期权形式支付——做市商获得了 embedded delta。

</div>
</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 自营交易获利 (Trading for Profit)

<div class="mt-2 space-y-2">
<div class="p-2 rounded bg-white bg-opacity-60">

**目标**：从已有的有机交易中获利——可以以 maker 身份、taker 身份、或跨市场套利。

</div>
<div class="p-2 rounded bg-white bg-opacity-60">

**前提条件**：必须有<strong>有机交易</strong>存在——"the only way the liquidity is there is if there's organic trading"。

</div>
<div class="p-2 rounded bg-white bg-opacity-60">

**自由选择**: 可以选择参与哪个市场、以什么方式参与——与做市即服务的义务绑定完全不同。

</div>
</div>

</div>

</div>

---

---
layout: two-cols
---

# 两种结算模型

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**Loan + Option**：适用于大项目。做市商承担风险，通过 delta hedging 管理库存——从价格波动中获利。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

**Retainer**：适用于小项目。项目方承担 PnL 风险，做市商只收服务费（$2k-5k/月）——风险与回报完全分离。

</div>

<div class="p-2 text-xs opacity-60">
早期还有绑定特定价格目标的 bespoke deals——这些结构是让 TradFi 对 crypto 感到不适的原因之一。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./business-models.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 期权 = 用劳动支付的 VC 赌注

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一种角度看：</strong>"One way in which you can look at the option is that it's basically a VC bet, and you're paying for the option through labor rather than buying it outright from the token project."
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Caladan 的角度：</strong>期权让他们可以通过 delta hedging 来提供流动性——价格上涨时卖出，下跌时买入，从而<strong> dampen 项目的波动性</strong>。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>隐藏的真相：</strong>"the projects don't realize that what can go up quite quickly can come down quite quickly too"——做市商的 delta hedging 实际上在帮项目"刹车"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Retainer 模型的变通：</strong>Caladan 有时会告诉项目方"我们会假装持有期权来布局流动性"（synthetic hedge），让项目方对成本有更清晰的预期。
</div>

</div>

---

# 库存风险管理

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 已知信息
理解 tokenomics、多少 supply 可能释放、空投 farming 参与者的行为模式——你不是在真空中操作。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 部署策略
"it's not path independent"——同样数量的库存，不同的部署速度/价格会产生完全不同的缓冲效果。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 建立缓冲
初期和其他卖家一起卖出（delta hedging），但分散在时间中、最小化市场冲击。储备资金在价格下跌时买回，价格上涨时继续卖出。

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>核心矛盾：</strong>Option 模型的初期需要卖出 embedded delta——这意味着做市商在初期和其他空投卖家<strong>站在同一侧</strong>。关键区别在于他们是透明的、有时间节奏的，而不是 panic selling。
</div>

</div>

---

---
layout: two-cols
---

# 组合层面的风险管理

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>核心原则：</strong>"correlation is a liquidity phenomenon"——相关性随持有者结构变化。BTC与传统资产关联度上升因为同一批 risk-on/risk-off 投资人。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>Bucket 1 — Market Risk：</strong>BTC/ETH 等大 token，受整体市场偏斜影响。用 sign-based skew 调整定价（类似 Barra 因子的方向性近似）。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<strong>Bucket 2 — Idiosyncratic Risk：</strong>小/新 token 几乎不受宏观影响，被 day 1-10 内部动态主导。更紧的仓位边界——200+ token，每个持仓都很小。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>为什么够用：</strong>周转极快——"we're able to turn things around quickly, so generally the risk's pretty tight." Crypto 因子分解还不成熟，但快速周转让 pragmatic approach 可行。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-bucket-risk.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 钓鱼执法与对抗性环境

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>真实存在：</strong>John 在 TradFi 做 HFT 时就和一个"最大的 spoofers 之一"近距离共事——这个人交易了 ES 市场的 10-20%（全球流动性最好的市场之一），并能成功操纵获利。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>高级玩法：</strong>在主市场（如 ES）上盈亏平衡甚至小亏，但在受其影响的衍生市场（SPY 和所有跟随波动的股票）上获利——"tail wagging the dog"在 crypto 中间样存在。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>对策：桌选（Table Selection）</strong><br/>
"we're sort of operating a very adversarial environment, and this is where the table selection becomes very important."<br/>
在自营交易中，Caladan 极其谨慎地选择 token 和 venue——大量的过滤和市场分析来确定哪些市场有真正的 edge。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>从服务中分离：</strong>被项目方付费的做市服务是另一回事——不能因为市场环境差就退出。这也是为什么服务费是必要的补偿。
</div>

</div>

---

---
layout: two-cols
---

# FTX 后的世界

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

FTX 崩盘让 counter-party risk 从理论变成了<strong>一夜之间的生存危机</strong>。Caladan 在 FTX 上只有约 5% 的 equity，但 John 仍然疯了一样从其他交易所撤资。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**新基础设施**：
- Hidden Road — 承保 counter-party risk
- Copper / BitGo — 信用中介
- 更多双边交易关系——类似 FX/commodities

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

Perp DEXs（如 Hyperliquid）用链上智能合约透明托管——没有 centralized entity 可以挪用资金。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 text-sm leading-relaxed">

<div class="font-bold mb-3 text-base">FTX 后的市场结构变化</div>

<div class="space-y-3">

<div class="p-2 rounded bg-white bg-opacity-60">
<span class="font-bold">1. 风险意识跃迁</span><br/>
"risk became top of mind"——谈风险不再是唱衰，而是必要。
</div>

<div class="p-2 rounded bg-white bg-opacity-60">
<span class="font-bold">2. 信用基础设施</span><br/>
第三方保险 + 信用中介 + 双边关系——diverse 的信任网取代了单一中心化交易所。
</div>

<div class="p-2 rounded bg-white bg-opacity-60">
<span class="font-bold">3. Perp DEXs 崛起</span><br/>
链上透明执行 + 自托管——但 ADL 风险和 venue sprawl 带来了新的挑战。
</div>

<div class="p-2 rounded bg-white bg-opacity-60">
<span class="font-bold">4. 更像 FX/大宗商品</span><br/>
高度分散、高度碎片化、大量双边关系——做市商在中间扮演 flow 平衡的核心角色。
</div>

</div>

</div>

</div>

---

---
layout: two-cols
---

# DeFi vs CEX：两种做市世界观

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>CEX — 对手方风险是人类</strong><br/>
FTX 伤疤真实。ADL 风险与利润成正比——赚得越多越容易被平仓。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>DeFi — 对手方风险是代码</strong><br/>
Smart contract exploit 是永恒阴影。Caladan 依赖 battle-hardened 老协议。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<strong>Uniswap V2 → V3 进化</strong><br/>
V2 资本效率极低。V3 range-based → 极限下就是 limit order，回到 order book 逻辑。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>ETH vs SOL MEV 范式</strong><br/>
ETH: 拍卖机制，贿赂 block producer。SOL: 交易极便宜 → spam the chain。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cefi-defi.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Perpetuals：狗尾巴在摇狗

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Crypto 独有的金融创新：</strong>Funding rate + perpetuals 在 TradFi 中不存在——"the funding rates can just behave really, really strangely and super difficult to hedge." John 团队在这方面投入了大量研究时间。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>小现货 + 大衍生品 = 可操纵：</strong>
"imagine you have a very small spot inventory, maybe even just a few million dollars, but you have an open interest that's like an order of magnitude higher than that. If you manipulate spot inventory, you can affect a lot of economic outcomes for the holders of the perpetuals."
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Delta neutral 策略的风险：</strong>任何跨交易所的 long/short（如 funding rate arb）都面临极端风险——市场崩盘时，一条腿可能被 ADL 平仓而另一条腿还在，导致 catastrophic loss。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>这就是 premium 的来源：</strong>"it's one of the reasons why you're paid a premium"——你承担了集中清算缺失 + 高杠杆 + venue sprawl 三重风险。
</div>

</div>

---

# 结构化产品：Token 财政部的工具箱

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Token 基金会的困境：</strong>坐拥数亿美元的本币 token，但高度集中、可能 locked up、流动性极差。想变现但市场在盯着——就像 Elon Musk 宣布卖出所有 Tesla 股票，所有人都会恐慌。
</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Yield Generation</strong><br/>
大量资产以 crypto 形式持有，但这些资产通常没有收益——需要结构化的增值方案。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>运营成本覆盖</strong><br/>
如何在不 spoof 市场的情况下，系统性地卖出 token 来支付团队和基础设施开支？
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>信号管理</strong><br/>
通过 precommitment 程序向市场传达："我们不是在择时出货，这是计划内的常规操作。"
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Caladan 的做法：</strong>"What we're actually doing is monetizing volatility, monetizing convexity, and trading counterflow to where the market naturally trades."——结构的核心不是预测方向，而是<strong>交易波动率和凸性</strong>，同时让交易方向与自然市场流相反。
</div>

</div>

---

---
layout: two-cols
---

# Caladan 的三大业务线

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**MM as a Service**：200+ token 发行，uptime & size KPIs，覆盖 CEX + DeFi 双端。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">

**Prop Trading**：机会主义做市 + taker + CeFi-DeFi 套利。严格桌选——只在有 edge 的市场下注。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Structured Products**：OTC 衍生品，服务 token treasury / 基金 / 家族办公室。货币化波动率和凸性。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-3 text-xs">

**共享基础设施**：hedging 能力 + 信任/信誉（自营资本，从未用投资人资金，穿越多次牛熊）。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./caladan-ecosystem.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 做市商的污名化

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>零售交易者的普遍看法：</strong>做市商在"砸盘"、有幕后交易、操纵价格。John 坦言："there's maybe some truth to some of those perceptions"——因为做市商群体本身是 diverse 的，有不同的行为选择。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>"Active" market makers：</strong>确实有做市商主动"paint a picture"——通过控制现货库存来制造价格走势。John 称之为 <em>Reminiscences of a Stock Operator</em> 中描述的 pump and dump 的现代版本。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Caladan 的选择：</strong>"It's a pure business decision, not a moral one. People have different risk tolerances, and for us, we just thought it's not worth it."——不是道德高地，是风险收益不划算。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>"做市商"这个词本身有问题：</strong>"perhaps the key is not to use such an overloaded term to describe what it is that people do."——同一个标签下，有人是被动提供流动性，有人在积极操纵市场。
</div>

</div>

---

# 因果混淆：是 MM 在操控，还是市场选择了 MM？

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Twitter 上的 meme：</strong>有人给不同做市商的 token 画历史价格走势图——"这个 token 是 X MM 在运作，所以价格会走成这样。"这有点像辅导机构声称 99% 学员进了常春藤——很可能他们只是筛选了本来就能进的学生。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>John 的解读：</strong>"a lot of the initial price action isn't really within the control of the market makers."短期可以制造一些效果，但要在没有<strong> tightly controlled spot inventory</strong> 的情况下维持——几乎不可能。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>更深的结构性问题：</strong>做市商的价格 story-telling 只有在特定条件下才成立——库存高度集中、缺乏有机交易对手方、以及（致命的）小现货 + 大 perp 持仓结构。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>对 TradFi 参与者的启示：</strong>这些结构让 crypto 市场对 TradFi 背景的人 extremely difficult to navigate——不是因为技术复杂度，而是因为游戏规则完全不同。
</div>

</div>

---

# Crypto 在"速通" TradFi 的百年课纲

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>忠实复刻：</strong>"if you look at the structures and the things that have been built, it's pretty faithfully replicating a lot of what already exists in TradFi."——但不是盲目的复制，而是利用了两个优势：
</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>监管套利</strong><br/>
Perp DEXs 可以说"我们不托管任何客户资产"——这让事情可以跑得更快，但也意味着没有 circuit breaker。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>可编程货币</strong><br/>
关系被 codified——你可以看到它们在没有任何安全阀的情况下 play out。这产生了更多"原始"的 learnings。
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>John 的终局预判：</strong>Crypto 将复制 FX 和 commodities 的市场结构——高度分散、大量区域性子市场、缺乏中央清算、需要实物交割。做市商的核心角色不是"提供服务"而是<strong>以 principal risk 来平衡跨市场 flow</strong>。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>DeFi 的分叉：</strong>如果 DeFi 走向 permissioned——那它只是一个更好的 ledger 和 settlement layer，最终融入 TradFi。Permissionless 那一侧会变成一个 niche——永远存在，但资本量远小于今天。
</div>

</div>

---

# 给 Token 项目方的建议

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>两条路：</strong>
<br/>① Token 本身就是产品，其他都是营销——这种讨论没有意义。
<br/>② Token 是分配生态经济价值的机制——关键在于必须有<strong>真实的经济价值</strong>。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>John 的核心 advice：</strong>"make sure your project actually has real value and real revenue and real use, and that's what ultimately will drive kind of the token."——没有长期替代品可以绕开这一点。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>成熟中的信号：</strong>现在人们开始更关注 token 的实际机制和赋予的权利——不再是"trust me bro"的时代。但对 token 本身的过度关注仍然让团队分心，无法专注于产品的实际价值创造。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Hyperliquid 是最好的例子：</strong>"they started quite low, for example, like $3 or $2, and now it's at 40. It's not about going out with a bang."——有真实现金流的项目不需要开盘就爆炸。
</div>

</div>

---

# Token 的自反性：价格 = 产品 = 营销

<div class="text-sm leading-relaxed mt-4 space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>一个只在 crypto 中成立的现象：</strong>Nike 股票跌了不影响你买鞋。但 crypto protocol 的 token 跌了——人们就停止使用那个协议。价格健康本身就是产品的健康。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>但这不完全是 crypto 独有的：</strong>AMC/GameStop 靠股价上涨募集资本、获得 lifeline。员工持股的激励效果也取决于股价——"reflexivity is not just a thing about crypto markets."
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Token 的投机期权特性：</strong>token-based investment 比 equity-based investment 有更近期的流动性——即使项目失败了，token 一旦达到了 critical mass，可能还能保持一个"投机价值"。John 举了 BSV 的例子——团队已经没人了，但仍有 non-trivial 的市值。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>John 的立场：</strong>Token 确实有 marketing function，有 reflexivity element。但长期来看——"there's no substitute for the project itself actually being valuable."
</div>

</div>

---

# 个人执念：AI、心智模型、变化

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>AI 不只是搜索工具</strong><br/>
"I think you can fundamentally create different workflows for yourself that is, ultimately, a new way of approaching things."
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>一个朋友的实验</strong><br/>
把大量个人信息和偏好喂给 AI，"to almost build a virtual version of himself to kind of talk to himself about how he would approach certain decisions."
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>John 自己的想法</strong><br/>
"I'm a collector of mental models, so I really like this idea of feeding in a few guiding mental models and saying, you know, hey, what's going on?"
</div>

</div>

<div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<strong>《夜访吸血鬼》的启示</strong><br/>
活了几百年的吸血鬼首领说：人类最挣扎的是 "keeping up with change and the changing of times"。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
<strong>对下一代的担忧</strong><br/>
"So I don't envy my kids. Basically, they're going into a world where they'll have to struggle with a lot."——我们是否还在教孩子们对的东西？
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>变化太快了</strong><br/>
"you plan for one thing and you spend years planning for one thing, and it could change."
</div>

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
"It's not path independent. Once that anchoring comes, it's a little bit sticky and adjust in time."
<div class="text-xs opacity-60 mt-1">— 关于初始定价的锚定效应</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
"We're very passive, we're price takers, and it's almost always a money-losing proposition."
<div class="text-xs opacity-60 mt-1">— 做市即服务的经济本质</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
"Correlation is a liquidity phenomenon. BTC becomes more correlated with equity markets as it becomes more intertwined with traditional financial markets."
<div class="text-xs opacity-60 mt-1">— 风险管理的底层逻辑</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
"We're operating in a very adversarial environment, and this is where the table selection becomes very important."
<div class="text-xs opacity-60 mt-1">— 关于 spoofing、操纵与自保</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
"What we're actually doing is monetizing volatility, monetizing convexity, and trading counterflow to where the market naturally trades."
<div class="text-xs opacity-60 mt-1">— 结构化产品的核心逻辑</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
"Make sure your project actually has real value and real revenue and real use — that's what ultimately will drive the token."
<div class="text-xs opacity-60 mt-1">— 给所有 token 项目方的终极建议</div>
</div>

</div>

---

---
layout: end
---

# "It's not about going out with a bang."

John Gu · Flirting with Models S7E30 · 2026

<div class="mt-6 text-sm opacity-60">

← 返回 声笺 Resonote 浏览更多深度访谈

</div>
