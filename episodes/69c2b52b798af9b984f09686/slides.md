---
theme: academic
colorSchema: light
diagramMode: static
title: 22. Token出海是赛博偷电？美国为啥电网建不好？- Ian | 电力侠
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Token 便宜，电从哪里来

## 美国电网、AI 数据中心与能源安全

<div class="mt-10 text-lg opacity-80">嘉宾：Ian（电力侠）｜北美输电公司电力系统从业者</div>

<div class="mt-4 text-sm opacity-50">柴险之火 · 2026 年 3 月 · 62 分钟</div>

<div class="mt-12 text-sm leading-relaxed opacity-70">一场围绕 Token 成本的讨论，最后落到更具体的问题：数据中心怎样接电、谁为电网扩容付费，以及美国为何难以把跨州的发电资源调到需要电的地方。</div>

---
layout: default
---
# 四个问题，沿着一张电网展开

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">Token 的便宜来自哪里</div>
电力是推理成本的一部分；嘉宾不把较低价格简化为电力出口。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">美国电网为何难连成一体</div>
旧设备可以维护，跨州输电却要同时解决许可、成本和利益分配。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">AI 数据中心带来什么压力</div>
接网后的峰值、可靠性和负载波动，会进入当地电网的规划问题。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">短期供电与长期能源安全</div>
天然气能较快启动；储能、可再生能源和核电对应不同的时间尺度。
</div>

</div>

---
layout: two-cols-header
---
# Token 出海不能只算电价

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Ian 的个人估计是：一笔 Token 收费中，真正的电力成本大致在 30% 至 50% 之间，也可能更低。这个比例不是行业统计，也不适用于所有模型和服务。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">基础设施、冷却、芯片、模型开发与服务定价也会影响最终价格。主持人还提到，不同厂商使用的芯片可能带来差异。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">嘉宾把 Token 的跨境销售类比为其他耗电产品出口：低电价会进入成本，但不会单独解释产品价格。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="token-cost-composition" role="group" aria-label="影响 Token 服务价格的多类成本">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>电力</strong><p>运行 GPU 与数据中心设施的能源开销。</p></div></div>
<div class="rn-note-card"><div><strong>设施与冷却</strong><p>机房建设、配套设备和散热系统。</p></div></div>
<div class="rn-note-card"><div><strong>模型与算力</strong><p>芯片、训练投入及厂商自身的定价。</p></div></div>
</div>
<p class="rn-note-caption">这是节目据嘉宾和主持人的讨论整理出的成本维度，并非一份可相加的统一成本表。</p>
</div>
</div>

---
layout: default
---
# 美国电网看起来老，不等于没有维护

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">建设年代早</div>
嘉宾说，许多输电线、变电站和开关在 20 世纪 60 至 80 年代已建成，整体框架延续至今。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">按设备寿命更换</div>
设备可使用 60 年甚至更久，电网公司以维护、监测和分批替换为主，而非整网推倒重来。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">长期新增需求有限</div>
嘉宾以过去二十年用电需求增长有限解释更新节奏；他提到的每年 1% 至 2% 只是非精确估计。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">AI 数据中心出现后，既有网络的容量和设备年龄才重新成为显眼问题。节目没有把设备老旧直接等同于电网无法运行。</div>

---
layout: two-cols-header
---
# 跨州输电卡在谁同意、谁出钱、谁受影响

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">美国有 ISO、RTO 和非 ISO/RTO 地区。嘉宾用它们说明：发电和系统运行由多个区域安排，并非全国一张统一电网。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">联邦能源监管委员会 FERC 能规划和提出建议，但嘉宾说它不能直接强制某州建设输电线。线路经过的州都需要许可。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">远距离输电往往需要直流技术；投资何时划算、沿线各州承担多少成本，都可能拉长协商。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="interstate-transmission-constraints" role="group" aria-label="跨州输电项目的三个约束">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>跨越区域</strong><p>线路需要经过多个州和不同运营区域。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>取得许可</strong><p>其中任一州不同意，原定路径就难以实施。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>分配成本与收益</strong><p>低成本外来电会改变沿线本地发电企业的利益。</p></div></div>
</div>
<p class="rn-note-caption">节目以华盛顿州水电向纽约输送的假设，说明跨州线路为何容易陷入协调。</p>
</div>
</div>

---
layout: default
---
# 其他地区的难题并不相同

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">日本：频率不同</div>
嘉宾提到关东、关西分别使用 50 赫兹和 60 赫兹；要连接两个系统，需要在中间设置直流转换。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">欧洲：互联更多</div>
嘉宾基于有限了解观察到，欧洲国家之间的互联程度甚至高于美国州际互联，部分原因是彼此依赖不同发电资源。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">新能源：需要更大范围调节</div>
主持人把风、光的波动与更大电网联系起来；嘉宾认为欧洲因资源互补而更适合互联。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">节目借这些案例区分三类约束：制度协调、技术接口和资源互补。</div>

---
layout: two-cols-header
---
# 所谓电网崩溃，节目区分了三个尺度

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">Ian 认为，美国、加拿大出现全国范围、长期无法恢复的停电不太可能；他没有把这种结果当成数据中心扩张的既成事实。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">山火烧毁输电线、极寒天气导致供电不足，可能造成局部停电或区域轮流限电。嘉宾说，这类情况各地都可能发生。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">数据中心增加后，嘉宾认为更显著的后果会是电价上升；当时的停电仍主要与自然灾害有关。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="outage-impact-scales" role="group" aria-label="节目区分的供电风险尺度">
<div class="rn-note-tiers">
<div class="rn-note-card"><div><strong>局部停电</strong><p>单个区域或设施因灾害、故障失去供电。</p></div></div>
<div class="rn-note-card"><div><strong>区域轮流限电</strong><p>供电紧张时，按区域安排中断以维持系统。</p></div></div>
<div class="rn-note-card"><div><strong>大范围长期停摆</strong><p>嘉宾认为北美发生这种情形的概率不高。</p></div></div>
</div>
<p class="rn-note-caption">分层用于澄清讨论对象，不代表风险会按固定顺序升级。</p>
</div>
</div>

---
layout: two-cols-header
---
# 数据中心自己发电，仍可能需要电网兜底

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">完全离网且自发自用的项目，不会占用当地电网容量，嘉宾认为也不会推高当地电价。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">更常见的安排是自建电站供一部分负载，同时保留并网连接。自有电力不足时，电网提供补充。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">高可靠性要求使完全自给更贵：设备故障时仍要持续运行，就需建设冗余发电能力。连接电网可降低这层冗余成本。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="data-center-power-options" role="group" aria-label="数据中心的两种供电安排">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>完全离网</strong><p>自建足够电源，自发自用；需要自行承担可靠性和环境审批约束。</p></div>
<div class="rn-note-card"><strong>自发电加并网</strong><p>平时可使用自建电源，不足时从电网补电；接网后会参与当地供需平衡。</p></div>
</div>
<p class="rn-note-caption">节目没有给出两种模式各自的占比或成本，因此不能据此断言哪一种在所有地区更优。</p>
</div>
</div>

---
layout: default
---
# 峰值需求把扩容成本带进居民账单

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">规划看最高负荷</div>
数据中心费率不仅看累计用电量，也看一年中的最高用电需求，因为峰值决定线路和设备要留出多大容量。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">扩容进入 rate base</div>
嘉宾用高速公路拓宽类比：电网投资先进入成本池，再由相关用户的费率分担。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">归因并不总是直接</div>
专为项目铺设的线路较容易让项目承担；系统稳定性所需的设备则较难量化到单一数据中心。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">节目提到，数据中心与居民用电属于不同费率体系；但当通用网络升级进入成本池，居民仍担心自己会分担由大型负载触发的投资。</div>

---
layout: two-cols-header
---
# 除了容量，训练负载还考验电网稳定性

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人把推理描述为较稳定的持续需求；模型训练则可能在很短时间从低负载升至满负载，训练结束后又回落。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">Ian 认为，这种大幅、快速的用电变化不同于多数传统负载，可能对电压等稳定性造成额外冲击。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">部分稳定设备通过辅助服务市场采购，嘉宾指出费用未必能直接归到数据中心，因此成本归因会变得困难。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="capacity-and-stability" role="group" aria-label="数据中心接网的两类电力约束">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>容量约束</strong><p>峰值负荷决定线路、变电站和发电资源是否够用。</p></div></div>
<div class="rn-note-card"><div><strong>稳定性约束</strong><p>负载快速变化可能需要额外设备调节系统状态。</p></div></div>
</div>
<p class="rn-note-caption">节目将这两类约束分开：前者较容易围绕专用设施计价，后者牵涉市场化的系统服务。</p>
</div>
</div>

---
layout: default
---
# 并网排队为何会拖到四至七年

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">已有拥挤地区</div>
嘉宾以弗吉尼亚为例，称已有大量数据中心的地区并网排期较长；四至七年是他了解的美国部分地区状况。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">可中断负载</div>
正在讨论的一种思路是让数据中心在系统紧张时优先断电，以换取更快接入；节目强调这尚未达成一致。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">表后发电</div>
自建电源可减少对电网供电的依赖，但并不自动跳过环境审批和接网要求。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">数据中心希望一至两年投产，与多年并网流程之间的时间差，是节目反复讨论选址、离网和替代供电方案的起点。</div>

---
layout: two-cols-header
---
# 多地同时排队，速度提升也会留下浪费风险

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">嘉宾解释，开发商可以在多个州同时申请环境与并网审批，而不是先建好实体数据中心再排队。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">等不同地点的流程推进后，项目方再选一个真正建设。这种做法让开发商不必把数年时间押在单一地区。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">代价是电网可能为最终被放弃的项目做准备；嘉宾举例说，若变电站已建而项目撤走，本地用户仍可能分担投入。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="multi-state-interconnection-queue" role="group" aria-label="数据中心多州并网申请的流程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>多地申请</strong><p>在多个州同步进入环境和并网流程。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>比较进度</strong><p>观察不同地点的审批与接网速度。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>选址建设</strong><p>仅在最终选中的地点落地，其他申请撤回。</p></div></div>
</div>
<p class="rn-note-caption">这是嘉宾描述的开发商排队策略；它不是实际建造流程的时间表。</p>
</div>
</div>

---
layout: default
---
# 离网也受环境规则约束

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">燃气机组的审批</div>
嘉宾以 xAI 的数据中心为例说明，离网自供电若依赖燃气发电机，排放仍会面对州级环境审批；不同州的审批力度不同。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">设备形态不会自动改变约束</div>
节目谈到把燃气机组放在卡车上的做法，但没有确认其合规性或能否长期使用。环境许可仍是选址时需要处理的条件。
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">离网解决的是对公共电网的直接依赖，不是对土地、排放和地方规则的豁免。嘉宾把这视为数据中心向审批较宽松地区聚集的原因之一。</div>

---
layout: default
---
# 德州是一个选址例子，不是一条万能公式

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">已有集聚与新增集聚</div>
嘉宾称传统数据中心较多的弗吉尼亚属于 PJM 区域；大型数据中心近年的选址中，德州和加州也较多。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">嘉宾提出的可能因素</div>
较低电价、土地审批和环境规则相对宽松，都是他认为可能影响德州吸引力的条件。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">没有归纳根本原因</div>
嘉宾明确说自己没有完成对德州选址原因的系统归纳，因此节目不把这些条件写成因果定论。
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">比特币矿场留下的已接电厂址也受到关注。嘉宾说，若转为 AI 数据中心，仍应重新评估电网影响，不能把两类负载视作完全相同。</div>

---
layout: two-cols-header
---
# 矿机能随电价停，AI 训练常常不能

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">主持人解释，比特币矿机对电价敏感：高价时可以关机，低价时再开，因此可能配合电网的低谷和高峰。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">他把 AI 训练描述为更刚性的需求：开始训练后会高负载持续运行，电价上升也未必能使其轻易停下。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">Ian 因而认为，即使原址已有变电站，矿场改为 AI 数据中心仍需要重新做可行性分析，重点是负载的冲击。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="bitcoin-mining-and-ai-load" role="group" aria-label="节目对矿机和 AI 训练用电特征的比较">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>比特币矿机</strong><p>主持人认为，其运行可随电价调整，价格高时有动机关停。</p></div>
<div class="rn-note-card"><strong>AI 模型训练</strong><p>主持人认为，训练启动后的负载更刚性，对网络冲击也更需评估。</p></div>
</div>
<p class="rn-note-caption">这是一场节目内的机制比较，不包含两类设施在所有地点的负载数据。</p>
</div>
</div>

---
layout: two-cols-header
---
# 储能既服务电网，也服务电价波动

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">美国和加拿大也有抽水蓄能。嘉宾提到，水力资源丰富的地区会采用蓄水储能；大型项目常位于垂直整合的电力区域。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">在能量市场中，电价的时点波动更大。储能可在光伏出力、电价较低时充电，在傍晚需求上升时放电。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">这类操作既能平滑部分供需，也能改善风电、光伏项目的收益。节目没有用储能规模来比较中美新能源能力。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="storage-and-price-timing" role="group" aria-label="储能随电价时段转移电能的过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>白天出力较多</strong><p>光伏供给增加时，电价可能较低。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>储能吸收</strong><p>将部分电能留到后续时段。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>晚高峰释放</strong><p>需求上升后再放电，参与市场结算。</p></div></div>
</div>
<p class="rn-note-caption">这是嘉宾对能量市场中储能用途的简化说明；实际调度还受设备和市场规则影响。</p>
</div>
</div>

---
layout: default
---
# 美国风电、光伏的瓶颈不只是储能

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">设备与人工成本</div>
嘉宾说，中国光伏板进入美国面临 200% 关税，加上本地人工，使项目成本变高。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold">税收激励的变化</div>
他把 ITC 的退税视为过去项目收益的重要部分，也认为政策收缩会削弱经济模型；这是一项嘉宾判断。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">天然气的替代选择</div>
嘉宾认为北美天然气资源较充足，因而没有同样强的动力用风电、光伏补足所有新增需求。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">Ian 的结论是：储能不是美国风电、光伏扩张慢于中国的主要瓶颈；成本、政策和能源资源条件更能解释他看到的差异。</div>

---
layout: two-cols-header
---
# 核电与天然气，分别对应慢而稳和快而受限

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">嘉宾了解的企业核电安排，主要是延长既有电站寿命或扩建，而不是从零建设一座专供 AI 数据中心的新核电站。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">从零建核电站的十年周期，难匹配数据中心一至两年的投产预期；嘉宾仍认为，它对美国长期电网并不算慢。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">天然气可作为短期供电来源，日后理论上也可转向风电或光伏。但资金、环境许可和地方政策都会决定项目能否推进。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="power-supply-time-horizons" role="group" aria-label="节目讨论的两种供电时间尺度">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>数据中心近期投产</strong><p>项目方希望一至两年内可用电，因此会寻求既有厂址、自建电源或更快接网。</p></div>
<div class="rn-note-card"><strong>电网长期建设</strong><p>核电等大型设施的规划期更长，嘉宾把它放在长期稳定与能源安全的讨论中。</p></div>
</div>
<p class="rn-note-caption">时间尺度不同，不能从短期项目的速度直接推导某种能源在长期体系中的价值。</p>
</div>
</div>

---
layout: default
---
# 能源安全取决于组合，也取决于持续的决策

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">单一燃料仍有价格风险</div>
嘉宾提到加拿大在 2020 年天然气价格上涨后电价随之上涨，用来说明产气地也未必摆脱价格波动。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">更完整的能源结构</div>
Ian 认为，新能源、天然气和核能的组合有助于提高能源安全；这是他对长期结构的判断。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">长期项目需要连续性</div>
主持人和嘉宾都把核电等长期建设与跨届政策共识联系起来：审批、建设和运行都无法在短周期内完成。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">节目没有预测未来五到十年的具体能源价格或装机规模。它保留的是一个条件：电力市场的局部制度可以精巧，但全国性基础设施需要跨区域、跨周期的协调。</div>

---
layout: end
---
# AI 的电力问题，先要分清三个层面

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-slate-800">
<div class="font-bold">产品价格</div>
电力会进入 Token 成本，却不是唯一变量。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-slate-800">
<div class="font-bold">接网成本</div>
数据中心的容量、峰值和波动，决定谁要扩容、谁可能付费。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-slate-800">
<div class="font-bold">长期安全</div>
供电方式与跨州协调，需要在数据中心的投产速度之外另算一笔时间账。
</div>

</div>
