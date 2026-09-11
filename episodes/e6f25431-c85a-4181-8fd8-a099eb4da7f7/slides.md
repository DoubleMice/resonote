---
theme: academic
colorSchema: light
diagramMode: static
title: Peter Hecht：可携式阿尔法如何解决另类策略的资金配置难题
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Peter Hecht：可携式阿尔法

## 另类策略的资金配置难题

<div class="mt-8 text-lg opacity-70">Flirting with Models · S7E31</div>
<div class="mt-3 opacity-50">嘉宾：Peter Hecht，AQR 北美投资组合解决方案组联席主管</div>

---
layout: default
---

# 一项组合工具，四个必须回答的问题

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>如何保留 β？</strong><br>配置长短仓分散策略，通常要卖出股票或债券；可携式阿尔法试图避免这一步。</div>
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>杠杆风险在哪里？</strong><br>重点不只是名义杠杆，而是压力下是否有现金满足保证金要求。</div>
  <div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>2008 年为何失灵？</strong><br>流动性错配与 β 估计失准，使组合并未维持原本设定的风险敞口。</div>
  <div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>财富客户如何使用？</strong><br>产品设计、仓位和再平衡都要让投资者能承受实际的相对回撤。</div>
</div>

---
layout: two-cols-header
---

# 可携式阿尔法把长短仓策略装进既有资产篮子

::left::

长短仓策略可以为股票和债券提供不同的收益来源，但它本身往往没有股票或债券 β，难以直接归入传统资产类别。

Peter Hecht 的定义是在该策略上叠加一份相对选定基准为一单位的衍生品 β。例如，股票市场中性策略加上标普 500 期货，整体仍以股票 β=1 为目标。

访谈常以标普 500 为例，是因为这类结构早期常被包装为美国大盘长仅主动管理的替代方案，并不表示债券 β 不能使用。阿尔法部分仍可能亏损。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="portable-alpha-composition" role="group" aria-label="可携式阿尔法由长短仓策略和一单位基准贝塔构成">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>长短仓阿尔法</strong><p>寻找不同于传统 β 的主动收益来源。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>β 覆盖层</strong><p>用衍生品维持所选基准的一单位 β。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>组合持仓</strong><p>可放入股票、债券或 60/40 配置中。</p></div></div>
</div>
<p class="rn-note-caption">这里的 β 可以是股票、债券，或两者的组合。</p>
</div>
</div>

---
layout: default
---

# 它要解决的是资金从哪里来

<div class="rn-note rn-note-wide" data-note-diagram="funding-problem" role="group" aria-label="两种配置长短仓分散策略的资金路径">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>单独配置长短仓</strong><p>卖出一部分股票或债券，换取分散策略；传统 β 因而低于原来的配置。</p></div>
<div class="rn-note-card"><strong>可携式阿尔法配置</strong><p>把资金投向长短仓策略，同时补回一单位 β；分散策略不必以放弃 β 为代价。</p></div>
</div>
<p class="rn-note-caption">Hecht 把这称为资金配置问题：投资者想要分散收益，但不愿因而偏离既定的股票或债券配置。</p>
</div>

<div class="mt-4 text-sm leading-relaxed">过去十年若大幅低配传统 β，结果可能很难被客户接受。这个结构意在把是否配置分散策略，与是否减持原有 β 拆开处理。</div>

---
layout: two-cols-header
---

# 名义上同为两倍，风险来源可以完全不同

::left::

Hecht 用饮料股举例：100 美元买入 200 美元可口可乐敞口，是把单一多头风险放大；100 美元买入 100 美元可口可乐、同时做空 100 美元百事，则同样有两倍名义敞口，但后者试图消除市场和行业的共同风险。

因此，长短仓杠杆不能与单纯加码多头等同。可携式阿尔法仍需在 β 调整后维持 β=1，而非悄悄变成相对基准更高的 β。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="leverage-comparison" role="group" aria-label="单一多头杠杆与长短仓杠杆的对照">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>单一多头</strong><p>200 美元可口可乐敞口；单一资产下跌会直接放大损失。</p></div>
<div class="rn-note-card"><strong>长短仓</strong><p>100 美元可口可乐加空 100 美元百事；风险取决于两边的相对表现。</p></div>
</div>
<p class="rn-note-caption">这是概念示例，不表示长短仓交易没有损失风险。</p>
</div>
</div>

---
layout: default
---

# 两道风险闸门：主动风险与可用现金

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>先定跟踪误差预算</strong><br>比较长仅主动管理和可携式阿尔法时，应在相同跟踪误差下比较。2% 与 6% 的跟踪误差不能用来判断哪一种结构更危险。</div>
  <div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><strong>再测压力下的现金</strong><br>策略遭遇不利行情时，必须有足够自由现金支付保证金和盯市损失，避免被迫去杠杆、在不利时点平仓。</div>
</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">相关性低不等于负相关。阿尔法与 β 可能同跌；在可承受的主动风险相同、且现金充足时，Hecht 认为回撤量级主要仍取决于承担了多少主动风险。</div>

---
layout: two-cols-header
---

# 2008 年的第一处断裂：覆盖层要现金，阿尔法池拿不出来

::left::

当时常见做法是：配置者自己或另聘管理人维持 β 覆盖层，长短仓对冲基金则由另一批管理人管理。两者彼此独立。

全球金融危机中，股票 β 下跌，衍生品覆盖层需要现金；但许多对冲基金有较长的赎回通知期和较低流动性。现金无法及时从阿尔法池取出，覆盖层就难以维持。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="gfc-liquidity-mismatch" role="group" aria-label="2008年可携式阿尔法的流动性错配">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>股票 β 下跌</strong><p>覆盖层出现盯市损失，需要补充现金。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>阿尔法池流动性低</strong><p>对冲基金赎回不能立刻满足现金需求。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>覆盖层承压</strong><p>资金不足时，衍生品头寸无法按计划维持。</p></div></div>
</div>
<p class="rn-note-caption">Hecht 有当时作为配置者实施该策略的亲身经验。</p>
</div>
</div>

---
layout: default
---

# 第二处断裂：以为是 β=1，实际可能已经高于基准

配置者若不知道阿尔法管理人的具体持仓，只能用滞后的收益回归估计阿尔法池的 β。回报被不太流动的证券平滑后，估计尤其容易偏低。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="beta-estimation-error" role="group" aria-label="贝塔估计偏低会导致覆盖层过大">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>实际阿尔法 β 为 0.4</strong><p>阿尔法池可能带有非刻意的多头偏向。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>回归估到 0.1</strong><p>配置者据此认为还需补 0.9 的 β。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>合计 β 变成 1.3</strong><p>对比 β=1 基准时，即使阿尔法为零也会明显落后。</p></div></div>
</div>
<p class="rn-note-caption">数字来自访谈中的假设例子，说明估计误差如何转为额外的市场暴露。</p>
</div>

---
layout: two-cols-header
---

# 单一管理人模式，把两项实施工作放在同一处

::left::

旧式双管理人结构中，阿尔法管理人并不知道覆盖层的存在；配置者既要估 β，又要协调保证金和流动性。

Hecht 所说的一站式方案由同一管理人管理阿尔法与 β 覆盖层。管理人了解阿尔法持仓，可把整体 β 调回目标，也能在同一账户内安排保证金。对终端投资者而言，它更像一项普通的股票或债券配置。

这减少的是实施环节的风险，不会消除主动管理本身的风险。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="implementation-models" role="group" aria-label="双管理人和单一管理人模式的差异">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>双管理人</strong><p>阿尔法与 β 覆盖层分开；估计、现金与报告的协调由配置者承担。</p></div>
<div class="rn-note-card"><strong>单一管理人</strong><p>管理人同时掌握阿尔法头寸与 β 覆盖层，更容易校准整体敞口。</p></div>
</div>
<p class="rn-note-caption">一站式并非唯一选择，但直接回应了 2008 年暴露出的协调问题。</p>
</div>
</div>

---
layout: default
---

# 融资成本看价差，不只看利率水平

在 Hecht 的长短仓股票例子中，投资者给出 100 美元，策略做多 200、做空 200。额外做多的融资成本与卖空所得现金的利息收入，在同一隔夜利率水平下可相互抵消。

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>基准利率两边同时出现</strong><br>借入资金支付隔夜利率；卖空所得现金也按接近该利率获得利息。利率从 0% 升至 5%，本身不是阿尔法额外面对的单边门槛。</div>
  <div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>真正的摩擦是报价价差</strong><br>主经纪商会在借款利率上加点，也会在现金利息上扣点。两边相对市场利率的价差，才是融资的持续成本。</div>
</div>

---
layout: two-cols-header
---

# β 的实现方式，是成本、税务与尾部风险的取舍

::left::

期货易于日内交易，但热门股指期货的隐含融资价差可能较高；访谈中以标普 500 为例，Hecht 提到年化约 70—80 个基点的量级。互换可高度定制，却带来更多交易对手风险。

直接持有现金股票可少付一部分衍生品价差，但会占用自由现金；基金若意外赎回，还可能带来短期已实现收益。选择不能只看省下多少基点，还要看压力情形下能否维持保证金缓冲。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="beta-implementation-options" role="group" aria-label="三种贝塔实现方式及其主要取舍">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>期货</strong><p>交易便利；热门基准的价差可能较高。</p></div>
<div class="rn-note-card"><strong>互换</strong><p>可定制；需要评估交易对手风险。</p></div>
<div class="rn-note-card"><strong>现金股票</strong><p>可节省价差；占用缓冲现金并有税务影响。</p></div>
</div>
<p class="rn-note-caption">不同基准、账户和税务状况会改变取舍。</p>
</div>
</div>

---
layout: default
---

# 阿尔法策略的选择，取决于想解决哪一种问题

<div class="rn-note rn-note-wide" data-note-diagram="alpha-strategy-selection" role="group" aria-label="三类阿尔法策略的选择条件">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>股票市场中性</strong><p>每日事前 β 接近零，逻辑较直观；适合刚开始采用此类结构的投资者。</p></div>
<div class="rn-note-card"><strong>多策略</strong><p>可覆盖选股、市场中性宏观、方向性宏观和公司套利；代价是更复杂的模型与治理要求。</p></div>
<div class="rn-note-card"><strong>趋势跟踪</strong><p>若需要危机期间的保护性特征，可考虑；但它的方向性 β 是有意保留的，可能需要向客户解释。</p></div>
</div>
<p class="rn-note-caption">Hecht 将趋势跟踪描述为拥有危机阿尔法证据的对冲基金子策略；这仍不代表每次下跌都能保护组合。</p>
</div>

---
layout: two-cols-header
---

# 组合多种阿尔法前，先检查它是否真带来新收益来源

::left::

Hecht 的起点是资本效率较高的多策略载体：在同一交易载体中覆盖多类对冲基金子策略，较容易管理整体风险与资金使用。

若投资者还想增强保护性，可在多策略之外补充管理期货趋势跟踪。专门管理人也可以加入，但应先分析其历史收益特征，确认没有与已持有策略高度重叠，尤其不能只因故事吸引人就加入。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="alpha-portfolio-construction" role="group" aria-label="阿尔法组合的构建顺序">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>多策略基础</strong><p>在同一载体中获得多类阿尔法来源。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>按目标补趋势</strong><p>只有需要额外保护性时才补充趋势跟踪。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>核验专门策略</strong><p>确认回报来源独特，避免尾部相关性被低估。</p></div></div>
</div>
<p class="rn-note-caption">组合数量不是目标；能否增加有效分散性才是。</p>
</div>
</div>

---
layout: default
---

# 仓位大小有两种起点，约束都落在承受能力上

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>把它当作主动管理</strong><br>若目的是替代美国大盘长仅主动管理，先设定投资者能承受的跟踪误差，再选择相应的阿尔法与仓位。</div>
  <div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>把它当作总组合工具</strong><br>若资产配置允许借入现金，股票、债券与另类策略的更分散组合可能需要借入资金提高总回报；可携式阿尔法是实施这类配置的一种路径。</div>
</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">Hecht 反复强调：理论上更有效率的配置，若投资委员会或客户在回撤时无法持有，就不是可执行的配置。</div>

---
layout: default
---

# 生命周期中，风险资产组合与保护需求可以分开思考

离退休较近时，重大回撤的后果更直接。Hecht 因而提出，投资者可以考虑让可携式阿尔法中具有保护性特征的趋势跟踪占比更高。

他也给出另一种框架：先在允许借入现金的条件下求出风险资产部分的高夏普比率组合；随着人力资本减少，用更多短期国债与这部分风险资产组合搭配以降低整体风险，而不必自动改变风险资产内部的权重。

<div class="mt-4 text-sm opacity-70">两种框架都是访谈中提出的配置思路，适用性取决于退休时间、风险承受能力和实际投资限制。</div>

---
layout: two-cols-header
---

# 产品要面对的现实：投资者会盯着每一项持仓

::left::

即使只给可携式阿尔法产品配置 5%、10% 或 20%，它对总组合增加的跟踪误差可能远小于产品自身的波动；但投资委员会和个人投资者仍会先问一项负收益持仓是否失效。

Hecht 认为，产品不能把阿尔法风险开到理论上可安全承受的最高值后，期待客户自动从总组合视角理解它。客户在阿尔法初次回撤时赎回，资本效率也无从谈起。

这也影响高波动另类策略与低波动、带 β 版本之间的选择。若高波动单项持仓会让客户在不利时点退出，Hecht 倾向于使用客户能持有的较低波动版本；但实际可选方案也取决于管理人提供什么形式的策略。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="line-item-risk" role="group" aria-label="单项体验与总组合影响的差异">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>单项持仓体验</strong><p>100% β 加较高跟踪误差阿尔法，表现会显著偏离基准。</p></div>
<div class="rn-note-card"><strong>总组合影响</strong><p>若只占总组合一小部分，新增主动风险会被仓位比例稀释。</p></div>
</div>
<p class="rn-note-caption">产品风险设定需要在资本效率与投资者可持有性之间取平衡。</p>
</div>
</div>

---
layout: default
---

# 用历史试驾，把抽象风险预算变成可讨论的回撤

跟踪误差是量化配置者熟悉的语言，却未必能让财富顾问直观判断客户是否承受得住。Hecht 的做法是用某个阿尔法策略的合理历史代理，按建议仓位回看过去的相对表现。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="historical-test-drive" role="group" aria-label="利用历史试驾评估可承受仓位">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>设定候选仓位</strong><p>先明确产品在客户组合中的比例与目标主动风险。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>回看历史情景</strong><p>用与阿尔法风险相近的指数或策略代理检验相对回撤。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>模拟真实决策</strong><p>问自己：客户或委员会在那种回撤下会否恐慌赎回？</p></div></div>
</div>
<p class="rn-note-caption">历史不能预测下一次结果，但能暴露行为约束是否与风险预算相冲突。</p>
</div>

---
layout: two-cols-header
---

# 每日流动的产品里，β 与阿尔法不必用同一节奏再平衡

::left::

如果产品承诺标普 500 β=1，且可以低成本交易高度流动的衍生品，Hecht 认为应严格控制 β 偏离。每位在不同日期申购的投资者都应获得接近同样的 β 敞口。

阿尔法端则要权衡模型目标、交易成本和换手。AQR 的做法是在靠近模型目标所获得的收益足以补偿成本时才交易；访谈中的例子是，某些策略大约两周调整一次即可维持 7% 的跟踪误差目标。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="rebalancing-tradeoff" role="group" aria-label="贝塔和阿尔法采用不同再平衡规则">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>β 覆盖层</strong><p>目标明确、工具流动性高；更严格地压低 β 偏离。</p></div>
<div class="rn-note-card"><strong>阿尔法组合</strong><p>只在改善模型敞口足以覆盖交易成本时调整；不同申购时点仍可能有些差异。</p></div>
</div>
<p class="rn-note-caption">再平衡频率本身会改变路径和成本，不能把所有部分都机械地按日调整。</p>
</div>
</div>

---
layout: end
---

# 可携式阿尔法的核心，是让分散化有可持续的资金与治理安排

<div class="mt-6 text-lg leading-relaxed">它保留既定 β，同时引入长短仓阿尔法；但这一承诺成立的前提是：主动风险与客户承受力相符、压力下有充足现金、β 敞口可被准确管理，且产品不会因为单项回撤而失去持有人。</div>
