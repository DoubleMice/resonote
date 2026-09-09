---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: AI抢走内存，K型消费下我们还要做硬件吗？---串台开始连接 LinkStart
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 抢走内存后，硬件还怎么做？

<div class="mt-6 text-lg opacity-70">
李楠 · 明浩 · 多方对谈
</div>

<div class="mt-4 text-sm opacity-50">
图灵志书 × 开始连接 LinkStart · 2026 年 7 月
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>AI 的外溢成本</strong><br>
数据中心争夺 HBM，消费电子面对更高的存储成本。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>K 型消费</strong><br>
低价与超高端仍有需求，中间价位承受更强挤压。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>换机周期变长</strong><br>
品牌更看重用户持续使用，以及售后和服务收入。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AI Agent 手机</strong><br>
它既是新交互的想象，也被寄望于重新刺激换机。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>软件效率</strong><br>
内存、网络和云服务的协同，成为低价硬件的产品课题。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>硬件的账本</strong><br>
从 AI 吉他到游戏主机，讨论回到成本、定价和健康规模。
</div>

</div>

---
layout: two-cols-header
---

# AI 数据中心如何把压力传到消费端

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">节目将这一轮涨价的起点放在 AI 数据中心：存储厂商需要生产 HBM，高带宽存储的需求很强。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">嘉宾的判断是，HBM 的高价格会改变产能与成本分配，消费端存储产品因而承压。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">这是一条访谈中的解释路径；节目没有给出各类存储产品的具体涨幅。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/memory-pressure.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 涨价发生在不同厂商的不同时间点

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">行业趋势</div>
嘉宾认为，存储紧张的趋势在前一年的第三季度已被业内普遍察觉。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60 mb-1">品牌选择</div>
一位嘉宾估计，苹果已承受约三个季度，才在年度大发布会前调整策略。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-60 mb-1">市场分化</div>
价格上涨不只影响销量，也会放大不同品牌之间的成本和毛利差异。
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-4 text-sm leading-relaxed">
讨论聚焦于厂商何时提价、何时缩减配置，以及最终由谁承担成本。
</div>

---

# 换机变慢，品牌转向经营活跃用户

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>过去的目标</strong><br>
手机品牌希望缩短换机周期。节目回顾，市场最热时，换机周期曾低于 12 个月。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>现在的目标</strong><br>
换机难以被驱动时，用户继续留在原品牌的设备上，也能带来后向收入。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>服务的作用</strong><br>
嘉宾以官方换电池为例：它延长设备使用期，也延长用户留在品牌体系内的时间。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>云服务的想象</strong><br>
若手机端接入 Cloud 类服务，持续使用的用户还可能转化为月费收入。
</div>

</div>

---

# K 型消费把压力推向中间价位

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>低价段</strong><br>
嘉宾不认为千元机会消失。需求仍在，但存储等成本上涨会让配置和定价更难平衡。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>中间段</strong><br>
节目认为，卡在中间的品牌要同时面对市场规模下滑、供应链缩减和竞争加剧。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>超高端</strong><br>
高毛利品牌有更大的缓冲空间，因此成本冲击相对更容易被吸收。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
K 型消费不是一个抽象的宏观标签：它决定同一轮成本上涨会落在谁身上，以及谁还有空间维持产品体验。
</div>

---
layout: two-cols-header
---

# 低价与超高端之间，谁承受成本挤压

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">嘉宾的判断是，低价手机和超高端手机都不会消失；中间价位的处境更困难。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">低价段需要保住可负担性，高端段可以用毛利缓冲；两者面对成本上涨的方式并不相同。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">因此，产品策略不能只看平均销量。配置、售价和利润要按具体人群分别计算。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/k-consumption.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 低价硬件的解法，落在软件与网络效率上

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>只减配置不够</strong><br>
当供应链成本上升、低价需求仍在时，单纯缩减配置很难解决产品体验与价格之间的矛盾。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>压榨软件效率</strong><br>
节目提出内存压缩、系统优化等方向，让有限硬件资源尽量维持流畅体验。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>使用高速网络</strong><br>
云端扩展存储、低价流量包等做法，被视为本地资源之外的补充。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>底层控制权</strong><br>
嘉宾认为，是否掌握核心系统，会影响厂商做全链路优化时的主动程度。
</div>

</div>

---

# AI Agent 手机被寄望于重新驱动换机

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">节目观察到，AI Agent 手机在这一年突然成为各家重点概念。嘉宾认为，这既有技术趋势，也带着市场压力。</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>产品层面</strong><br>
小米与华为都被提及：前者在产品想法上更积极，后者的落地完成度被评价更高。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>商业层面</strong><br>
在内存涨价和换机乏力的背景下，AI Agent 也被赋予让消费者重新购买新机的任务。
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">嘉宾对当前产品保留疑问：市场尚未充分回答，AI Agent 手机究竟会带来怎样不同的日常使用方式。</div>

</div>

---

# 创新在节目里是对趋势的判断

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">过去</div>
外观材料等小变化，曾经也能让一款产品卖出很大规模。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60 mb-1">现在</div>
成本上升和需求分层之后，产品要带来足以支撑购买的实际变化。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60 mb-1">嘉宾的定义</div>
所谓创新，来自对能力增长斜率与上限的判断，而不只是一个好听的点子。
</div>

</div>

---
layout: two-cols-header
---

# 语音交互要跨过准确率与场景两道门槛

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">李楠介绍，怒喵科技在做集成阵列麦的键盘方案，希望用户在桌面前轻声说话也能让 Agent 听清。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">方案包括消除环境音并识别语音。嘉宾判断，开源多模态模型的语音识别能力也会继续提高。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">他把语音看作可能替代一部分图形界面操作的输入方式；鼠标在 FPS 游戏里仍难被替代。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/voice-agent.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 鼠标不会消失，但会更集中于游戏场景

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>语音擅长的任务</strong><br>
当识别足够准确时，普通输入、指令和与 Agent 的交流可以减少键盘操作。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>鼠标保留的任务</strong><br>
节目把 FPS 游戏列为短期内难以替代的场景：低延迟、精细瞄准仍依赖鼠标。
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-4 text-sm leading-relaxed">
硬件品类会在大众输入以外找到新的位置；同一品类可以在高性能游戏等场景继续存在。
</div>

---

# 老硬件会转化为爱好与收藏

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>黑胶</strong><br>
嘉宾提到，黑胶唱片经历长期下跌后又上涨，有些购买者甚至没有播放设备。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>胶片与拍立得</strong><br>
昂贵的胶卷与老相机也被重新购买，使用价值之外还包含收藏与情感投入。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>键鼠</strong><br>
节目把机械键盘放入同一类讨论：小众爱好者会继续购买、保留和把玩。
</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-4 text-sm leading-relaxed">一些旧技术的规模会缩小，却仍可能在特定人群里重新有价格与热度。</div>

---

# 可预测的手机行业，难以制造惊喜

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">嘉宾用折叠屏举例：当产品路线几乎可以提前预期，讨论会失去新鲜感，行业也更难靠想象力拉动购买。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">他把苹果发布 iPhone 7 时的震惊感当作参照，强调当下手机产品的确定性变得很高。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">成本压力与需求分层，可能迫使厂商把注意力转回低价产品的实际效率和新交互，而不是只在参数表里微调。</div>

</div>

---

# 红米 K90 的争议，让内存涨价走到台前

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>发布后的反应</strong><br>
节目回顾，红米 K90 标准版发布当晚因价格受到批评；次日早上，雷军发放了 300 元优惠券。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>成本被公开讨论</strong><br>
嘉宾认为，那条微博让内存和硬盘成本上涨首次由有影响力的厂商直接说出。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>提价的边界</strong><br>
如果厂商不想失去低价用户，提价本身无法解决 K 型市场中的需求问题。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>产品方向</strong><br>
软件效率、云服务和移动网络，被讨论为压力下仍可尝试的路径。
</div>

</div>

---

# 大厂与小厂的时间差正在缩短

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>小厂先跑</strong><br>
嘉宾以 Nothing 为例：小厂更容易用 AI 功能、输入法或小组件吸引注意力，因为产品包袱较小。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>大厂的约束</strong><br>
面对数千万甚至上亿用户，合规、合法和稳定性都会减慢推出新功能的节奏。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>大厂也会下场</strong><br>
节目提到 Google I/O 上的应用生成、AI 键盘和小组件，把它们视为原本更像小厂会做的功能。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>新的竞争</strong><br>
在成本与增长压力下，大厂可能更快进入原本由小厂试错的产品区域。
</div>

</div>

---

# 互联网公司做一把 AI 吉他，也得面对硬件时钟

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">一位嘉宾所在的纯互联网团队做了一款主打 AI 功能的音乐吉他。从设想到真正做出产品，用了接近两年。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">问题在于，AI 音乐行业在这段时间里按季度更新。软件可以在线迭代，硬件却必须提前决定结构、器件和上市节奏。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">元器件涨价又把 BOM 成本带入决策。即使产品不使用最复杂的存储或芯片，采购层级与供货选择也无法回避。</div>

</div>

---
layout: two-cols-header
---

# 硬件的长周期，撞上 AI 的快迭代

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">吉他的案例把矛盾说得很具体：硬件从立项到成品接近两年，AI 音乐能力却可能每个季度都变化。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">软件更新能让第一代产品尽量跟上当前能力，但下一代功能与上市时间要在第一代上市前就开始决定。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">供应链、器件价格与 BOM 成本不会因产品来自互联网团队而消失；它们成为产品计划的一部分。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/hardware-clock.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 任天堂与 Steam：两种硬件定价处境

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>任天堂</strong><br>
嘉宾认为，任天堂长期使用性能不激进的硬件，再以软件优化和游戏内容支撑体验，因此涨价压力相对较小。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Steam Deck</strong><br>
节目提到其价格约为 7,000 元人民币，并以玩家批评为例，说明用户未必意识到主机常由厂商补贴。
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-4 text-sm leading-relaxed">
两者都指向同一个问题：硬件的标价取决于产品成本，也取决于厂商能否用软件、游戏或服务收回投入。
</div>

---

# 停止赔钱买量，重新计算硬件生意

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-60 mb-1">旧做法</div>
为扩大规模而用低价或补贴出售硬件，把盈利推给未来。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60 mb-1">眼前约束</div>
成本上涨、增长变慢后，厂商需要承认规模可能收缩。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60 mb-1">嘉宾的重点</div>
评估规模质量：硬件销售是否赚钱，留下的用户是否能支撑后续服务。
</div>

</div>

---
layout: two-cols-header
---

# 健康规模包含硬件利润与用户质量

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">嘉宾主张，硬件至少应在纯硬件层面赚钱；赔钱买量不该继续被当作默认策略。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">若增长不再优先，存量用户的质量更重要：用户是否活跃、是否有支付能力，都会影响后续收入。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">节目把 Token 后端付费视为值得观察的方向，同时指出它要建立在真实的用户支付能力上。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/quality-scale.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 豆包收费：从免费 Chatbot 到生产力工具

<div class="space-y-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">围绕豆包专业版，嘉宾先讨论了两类可能：为最强模型收费，或为特定场景和额度收费。</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>收费选择</strong><br>
节目认为，最终收费仍偏向生产力工具的思路，而不是从语音音色、陪伴等场景切入。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>本地付费习惯</strong><br>
嘉宾对国内用户为生产力工具付费的意愿持保留态度，因此定价并不轻松。
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">手机厂商若把 Cloud 类能力带到设备上，也会面对同样的问题：用户愿意为什么能力持续付费。</div>

</div>

---

# Agent 是另一场战役，用户与定价都未定型

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Chatbot 已教育用户</strong><br>
节目认为，豆包在国内 Chatbot 战场已有很强的位置，但这不自动等于 Agent 产品也会成功。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>新产品形态</strong><br>
各家模型厂商、Cloud 产品和工具型产品都在尝试不同方向，面向的用户可能与 Chatbot 用户不同。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>仍待厘清的问题</strong><br>
什么功能收费、不同产品之间如何关联、用户边界在哪里，节目都把它们视为尚未稳定的选择。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>硬件的机会</strong><br>
语音、键盘和手机会成为 Agent 的入口，但入口本身不能替代清楚的价值与定价。
</div>

</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><div class="text-xs opacity-60 mb-1">换机周期</div>“今天的换机周期其实已经接近四年多了”</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><div class="text-xs opacity-60 mb-1">消费分层</div>“整个社会的消费结构在迅速的K型化，无论是中美”</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-60 mb-1">语音输入</div>“能去到97%，那他就不愿意再打字了”</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-60 mb-1">创新标准</div>“真正的有效的能活下去的创新是预测”</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 col-span-2"><div class="text-xs opacity-60 mb-1">行业想象力</div>“手机行业最尴尬的地方是我们谈论这话题不性感”</div>

</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="text-xs opacity-60 mb-1">大厂节奏</div>“他们可能会比小厂慢六到九个月”</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><div class="text-xs opacity-60 mb-1">效率压力</div>“我们到了反向压榨那个整个软件和AI效率的时间点了，至少这三年”</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><div class="text-xs opacity-60 mb-1">元器件成本</div>“过去这一年多所有的元器件都在涨价”</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-60 mb-1">硬件生意</div>“硬件要纯纯纯硬件要能赚钱”</div>

</div>

---
layout: end
---

# “一定得去更认真地考察自己规模的质量”

<div class="mt-6 text-sm opacity-70">
在成本更高、增长更慢的周期里，硬件厂商要同时回答产品效率、用户留存与单品利润。
</div>
