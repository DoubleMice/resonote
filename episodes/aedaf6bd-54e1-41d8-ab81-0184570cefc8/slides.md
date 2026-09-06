---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "160: 群核IPO后与黄晓煌聊这15年：被嫌弃的GPU、冠军酷家乐、空间智能、六小龙"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 被嫌弃的 GPU，如何走到空间智能

<div class="mt-6 text-xl opacity-70">
群核科技联合创始人兼董事长 黄晓煌
</div>

<div class="mt-3 text-lg opacity-60">
从酷家乐到空间智能：一场 15 年科技创业复盘
</div>

<div class="mt-8 text-sm opacity-50">
《晚点聊》· 2026 年 4 月 · 1 小时 40 分
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>GPU 起步</strong><br/>
2011 年，团队想把 GPU 做到云上，却先被投资人当成传统制造业。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>酷家乐定型</strong><br/>
业主用户持续流失后，设计师和装修公司留下来，产品在 2015 年转向 SaaS 收费。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>活下来策略</strong><br/>
面对大厂竞争，群核避开电商流量，转向工业 4.0 与出海。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>壁垒重排</strong><br/>
团队被挖走之后，黄晓煌重新判断算法、数据和客户服务各自的价值。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>空间智能</strong><br/>
SpatialLM 和 SpatialGen 试图把物理世界变成大语言模型可以处理的对象。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>六小龙与人才</strong><br/>
群核不把名气直接变现，而是用名气吸引算法人才，推进模型自研。
</div>

</div>

---

# 从一场创业比赛开始，直到云上的 GPU

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">2008 年</div>
<div class="mt-2 font-semibold">创业比赛</div>
<div class="mt-2">黄晓煌和朱浩在 UIUC 读书时参赛，做过防止驾驶员睡着的设备，拿到二等奖。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">2011 年</div>
<div class="mt-2 font-semibold">看见云计算</div>
<div class="mt-2">当时云计算主要使用 CPU，GPU 还没有普遍上云。这个缺口成了回国创业的起点。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">回国之后</div>
<div class="mt-2 font-semibold">先做出能用的东西</div>
<div class="mt-2">美国做过原型，但身份和融资都受阻。团队回国后继续围绕 GPU 渲染找场景。</div>
</div>

</div>

<div class="mt-6 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
作者概括：团队先抓住一项新技术，再让市场决定它落在哪个场景，商业计划是在试错中形成的。
</div>

---
layout: two-cols
---

# 被低估的 CUDA：技术价值先于市场共识

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
黄晓煌在 NVIDIA 工作时参与 CUDA 开发。当时公司正处于转型期，GPU 业务遇到天花板，通用计算也还没有形成市场。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
团队内部做应用时，CPU 速度可以被加速几十到上百倍；但 Intel 已经建立了强大的生态，外部用户很难迁移。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
黄晓煌看见的创业机会，就是把 GPU 的计算能力放到云上，让更多人可以使用它。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gpu-to-space.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 回国之后，技术要先找到付费场景

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">先做原型</div>
<div class="mt-2">团队把 GPU 渲染试到影视、家居建筑、仿真等场景，逐个做演示，再找用户交流。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">谁愿意付费，就先服务谁</div>
<div class="mt-2">早期团队没有一套成熟的方法论，判断标准很直接：哪个场景愿意为技术付钱，就先在那里继续。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">先活过融资期</div>
<div class="mt-2">回国一年多没有融到钱，王淮投了 50 万元人民币，IDG 投资后团队才停止大量外包，转而做产品。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">13 年底上线</div>
<div class="mt-2">产品在 2013 年底上线，2014 年开始增长，2015 年开始赚钱，技术才逐渐找到稳定的落点。</div>
</div>

</div>

---

# 酷家乐的用户，是被留存率筛出来的

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<div class="text-base font-semibold">最初：面向业主</div>
<div class="mt-3">团队最初希望让业主使用产品，再围绕流量做 O2O。实际使用后，很多业主在半年内流失。</div>
<div class="mt-3 text-xs opacity-70">用户来了，但没有长期留下。</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<div class="text-base font-semibold">后来：服务设计师与装修公司</div>
<div class="mt-3">持续留下来的用户主要是专业从业者。团队因此把产品重心转向设计师和装修公司，付费关系也从 C 端流量转向 To B 软件。</div>
<div class="mt-3 text-xs opacity-70">专业用户的留存，决定了产品的长期形态。</div>
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这次转向不是一次会议里规划出来的，产品使用后的留存结果把团队推向了更稳定的用户群体。
</div>

---

# 商业模式先跟随市场，后来回到软件本身

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">2013 年底</div>
<div class="mt-2 font-semibold">产品上线</div>
<div class="mt-2">团队仍然讲 O2O、流量和未来卖家具的故事，因为投资人熟悉这些叙事。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60">2015 年前后</div>
<div class="mt-2 font-semibold">资本环境改变</div>
<div class="mt-2">家具交易还没有真正开始，O2O 也开始被质疑。团队转向模仿 SaaS 收费，放弃继续讲电商故事。</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">2015 年底</div>
<div class="mt-2 font-semibold">现金流打平</div>
<div class="mt-2">卖软件比卖家具更符合团队的技术取向，年底现金流实现平衡，商业模式开始稳定。</div>
</div>

</div>

---

# GPU 的成本结构，逼出了按量付费

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">CPU 时代</div>
<div class="mt-3">同一套 CPU 服务更多用户时，边际成本可以下降。传统互联网产品因此适合包年或包月，用户多用一些，成本不会同步增加。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">GPU 时代</div>
<div class="mt-3">渲染每一张图都要占用算力。团队不得不限制图片尺寸，把高计算量任务放到夜间运行，在效果与成本之间做折中。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
AI 时代的按 token、按计算量收费，让用户逐渐接受使用多少付多少。对群核来说，这种收费方式缓解了 GPU 产品长期被迫牺牲效果的压力。
</div>

---
layout: two-cols
---

# 大厂竞争下，群核准备了两条退路

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
2015—2018 年，平台型客户曾经是最赚钱的客户群；后来互联网金融风险扩散，前十大客户中有八家倒闭。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
大厂进入家装赛道后，群核还经历了成批挖人，有些团队一夜之间消失，客户甚至找不到原来的联系人。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
团队因此把流量避开电商，转向工业 4.0、柔性生产和出海，并给线上业务与中国业务分别准备替代路径。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./survival-routes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 工业 4.0：把技术带进工厂

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">2016 年</div>
<div class="mt-2 font-semibold">立项</div>
<div class="mt-2">团队开始探索让设计图纸直接进入生产的路径，把渲染和设计能力延伸到制造环节。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">2018 年</div>
<div class="mt-2 font-semibold">加大投入</div>
<div class="mt-2">家装业务面对大厂竞争后，群核把重心转向工业软件，因为这类业务需要长期打磨。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">2020 年</div>
<div class="mt-2 font-semibold">工厂跑通</div>
<div class="mt-2">项目最终落地，图纸能够直接连接生产流程，技术投入变成了现场业务。</div>
</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
群核选择的是换一条能积累技术和客户经验的路，而不是在熟悉的赛道里继续和大厂打价格战。
</div>

---

# 不接 BAT 的钱，是在避免被卷进电商战争

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">百度</div>
<div class="mt-2">群核认为双方业务关系不大，因此没有接受百度的投资。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">阿里</div>
<div class="mt-2">2018—2019 年群核已经决定不做电商，接受投资可能带来电商方向的压力。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">腾讯</div>
<div class="mt-2">团队不希望卷入互联网平台之间的战争，所以也没有拿腾讯的钱。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
在投资人建议出售给大厂时，群核保留了独立选择赛道的空间。代价是短期少了资金和流量，换来的是更少的业务绑定。
</div>

---
layout: two-cols
---

# 竞争留下的结论：算法会扩散，数据会沉淀

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
渲染引擎团队被挖走后，对手几乎复制了产品。纯软件算法容易跟着人扩散，单靠算法很难形成稳固壁垒。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
户型、家居和设备数据不能被简单复制；网络效应和持续的客户服务，也会在长期合作中积累。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
黄晓煌一度因为被挖人而减少算法投入，直到大模型出现后才重新确认：模型算法与数据必须同时存在。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moat-engine.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 判断变化：先分周期与趋势

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-base font-semibold">先问：需求会不会消失</div>
<div class="mt-3">工业软件的热度会变化，但工厂的生产需求仍在，属于需求存在、景气度波动的方向。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-base font-semibold">再问：技术是否改变了生产方式</div>
<div class="mt-3">传统流程管理 SaaS 正被 AI 重写，产品形态和生产效率都在变化，影响已经超出市场冷暖。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-base font-semibold">周期性变化</div>
<div class="mt-2">可以在现金流允许时等待，保留能力，等需求再次回到市场。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-base font-semibold">趋势性变化</div>
<div class="mt-2">需要一号位推动重做产品、调整团队，把资源移到新的生产方式上。</div>
</div>

</div>

---

# 20—21 年的膨胀，来自好融资和好生意

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">钱容易融</div>
<div class="mt-2">市场情绪高涨，SaaS 产品好卖，团队获得了扩大招聘和投入的条件。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">业务看起来都在增长</div>
<div class="mt-2">酷家乐、房地产解决方案、工装解决方案和工业 4.0 同时推进，团队不断增加人力。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold">现金流会制造错觉</div>
<div class="mt-2">2019—2020 年谈地产客户时，几百万元甚至一千万元的合同款有时不签合同就能到账。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
后来行业调整，群核再次面对收缩。黄晓煌把这段经历视为周期教育：好卖的产品和充足的融资，都不能替代长期的现金流判断。
</div>

---
layout: two-cols
---

# AI 先击穿了流程式 SaaS

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
2023 年初，黄晓煌用 Copilot 写代码，发现原本需要团队完成的流程式企业软件，现在可能只需要自然语言描述就能生成一部分代码。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
群核在 SaaS 时代招聘的大约 80% 的人，集中在这类传统流程产品周围。产品被 AI 重写，团队也必须重新寻找位置。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
公司因此把重点从界面和流程转向模型与引擎，开始优先做能形成核心能力的产品。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-first.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 23 年初的选择：自研空间模型，或做大模型配套

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-base font-semibold">路径一：训练自己的空间模型</div>
<div class="mt-3">训练周期更长、投入更大，但模型和算法可以沉淀成自己的壁垒。群核后来把重心放到这条路上。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-base font-semibold">路径二：为大模型做配套</div>
<div class="mt-3">例如训练 LoRA 或处理图像，市场反馈可能更快，但新模型出现后，已有工作可能失去价值，团队需要持续拼速度。</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">自研模型：投入慢，能力更容易形成积累。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">配套服务：反馈快，但容易被更大的模型公司吸走团队。</div>
</div>

---

# 人才流失，让拼速度的业务自然停掉

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold">速度型业务的困境</div>
<div class="mt-3">团队围绕阿里或字节的模型做出产品后，成员很容易直接加入这些大公司。外部团队很难长期获得同等的内部支持。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">合成数据成为过渡业务</div>
<div class="mt-3">2023 年模型还没有训练出来，人才流失又严重。群核用已有的空间数据生成场景，再由人工修补模型暂时做不好的部分。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold">24 年把方向说清楚</div>
<div class="mt-3">团队决定自己掌握算法和模型，同时补齐数据工程与 GPU 基础设施，避免只做外部模型的薄层服务。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">商业模式也要换</div>
<div class="mt-3">公司逐步从月费、年费转向按渲染量或计算量收费，让收入方式更接近真实的算力消耗。</div>
</div>

</div>

---

# 24 年，模型、数据工程和 GPU 基础设施一起补课

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-semibold">约 60 人</div>
<div class="mt-2">目前负责算法和模型的团队规模。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-2xl font-semibold">不到 10 → 约 60</div>
<div class="mt-2">2023 年到后来，纯做算法和模型的人数大幅增加。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-2xl font-semibold">每年几千万元</div>
<div class="mt-2">黄晓煌估算的算力投入规模，单位是人民币。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-2xl font-semibold">三项能力</div>
<div class="mt-2">模型算法、数据工程、GPU 基础设施同时推进，空间智能才有完整底座。</div>
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
数字说明的是投入规模，不代表模型已经完成商业验证；团队仍然要在训练效果、人才和收入之间寻找平衡。
</div>

---

# 六小龙的名气，最后变成了人才入口

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60">2025 年</div>
<div class="mt-2 font-semibold">创始人放下业务</div>
<div class="mt-2">黄晓煌把大量时间投入招聘，主动读论文、找人、面试，而不是继续亲自抓所有业务。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-semibold">9 倍</div>
<div class="mt-2">C9 高校简历数量，相比 2024 年的增长。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-2xl font-semibold">20 倍</div>
<div class="mt-2">海外简历数量，相比 2024 年的增长。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
六小龙带来的变化体现在人才入口：更多人愿意了解群核，知名度降低了招聘时的陌生感，也减少了内部推进长期研发的阻力。
</div>

---

# 面试不看履历，先看能不能做出来

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">上机题</div>
<div class="mt-2">新的题目预计需要一个小时，目标是看候选人如何面对真实问题，而不是五分钟内答出标准答案。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">学习能力</div>
<div class="mt-2">看过论文不等于掌握方法。候选人需要把论文里的方法真正复现出来。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">动手能力</div>
<div class="mt-2">在复现的基础上继续优化，学习能力才会变成可检查的工程结果。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这是群核与大公司竞争算法人才时采用的标准：履历是入口，能否把问题做出来才决定是否继续投入。
</div>

---
layout: two-cols
---

# 空间智能的三层产品结构

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
底层是物理正确渲染、SpatialLM 和 SpatialGen，负责空间理解、推理、重建与生成。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
中间层把这些模型能力做成 API 与服务，让不同产品调用空间理解、编辑和渲染能力。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
最上层同时服务人类与机器：酷家乐、鹏拍、LuxReel 面向人的工作；SpatialVerse、Spatial Twin 面向机器和工厂。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./space-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 空间智能的主线：越接近物理世界，越难被纯软件替代

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">2018 年</div>
<div class="mt-2 font-semibold">开始研究空间数据</div>
<div class="mt-2">团队看到空间数据可以用于模型训练，随后开源数据集并做论文。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">2021 年</div>
<div class="mt-2 font-semibold">组建实验室</div>
<div class="mt-2">群核继续研究空间模型，但当时更多资源仍然投入房地产与建筑业务。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">2023—2024 年</div>
<div class="mt-2 font-semibold">转向空间智能</div>
<div class="mt-2">模型能力、空间重建和物理世界的连接成为公司新的核心方向。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
黄晓煌的判断是：离物理世界越近的产品，越需要尺寸、位置和交互关系，因此越不能只靠纯虚拟的软件流程替代。
</div>

---
layout: two-cols
---

# 三维生成与视频生成：两条不同路线

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
群核选择三维生成路线，因为三维场景有尺寸，可以交互，还能保留距离、位置和遮挡关系。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
视频生成的优势是画面精美、变化灵活，更接近视觉连续性。两条路线的能力侧重点不同，最终哪条路线占上风仍不确定。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
群核不与 Google 等公司正面竞争视频效果，而是押注三维模型在接近物理世界的场景中的用途。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./3d-video-routes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# SpatialLM：连接大模型与物理世界

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
黄晓煌认为，今天的大语言模型已经很强，但仍然不能稳定理解物理世界，也不能直接指挥设备在其中行动。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
SpatialLM 的任务，是把空间和物理关系翻译成大语言模型可以处理的脚本，让模型能继续推理。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
这个能力希望服务不同机器人、工厂设备和软件，让它们共同使用同一层空间能力。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-bridge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 机器人市场可能由许多形态共同组成

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">人形机器人</div>
<div class="mt-2">是具身智能的一种形态，但不等于全部市场。它更容易被公众看见，也更容易成为讨论中心。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">工业设备</div>
<div class="mt-2">吊车、机械臂、AGV 和叉车都可以具备不同程度的智能，不必先变成人形。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">客户密度</div>
<div class="mt-2">黄晓煌认为当前一两百家相关公司仍然太少。只有公司数量和量产需求都扩大，训练服务才可能形成更大业务。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
群核把空间能力做成可以被多种设备调用的底层服务，不预设某一种机器人的最终形态。
</div>

---

# 合成数据与真实数据，是技术选择

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">合成数据</div>
<div class="mt-3">欧美企业更常接受仿真和合成数据。真实场景扫描涉及隐私，法规也会影响数据来源。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">真实数据</div>
<div class="mt-3">国内不少机器人团队有自动驾驶背景，更习惯真实车辆和真实环境数据，因此更看重真机与实景。</div>
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
群核可以用多角度图像、视频和激光雷达重建空间，再把摩擦、材质等交互信号继续采集到虚拟环境里。数据来源不同，会改变模型和工程的选择。
</div>

---

# 从技术验证到商业规模，还差用户密度

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">扫地机器人：先验证技术</div>
<div class="mt-2">团队曾经用扫地机器人场景验证空间模型训练数据。它证明技术可行，但单独作为业务，市场规模不够大。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">工厂规划：扩大钉子</div>
<div class="mt-2">Spatial Twin 可以帮助工厂规划非人形机器人、设备排布和移动调度，客户不只来自人形机器人公司。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold">核心约束：投入很重</div>
<div class="mt-2">训练模型和做核心算法都需要大量算力与人才。如果用户面太窄，收入很难覆盖投入。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">商业目标：仍然要有利润</div>
<div class="mt-2">群核已经过了可以只靠融资烧钱的阶段。新业务可以少赚一些，但必须逐步形成利润。</div>
</div>

</div>

---

# 做什么，取决于三个判断标准

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-semibold">01</div>
<div class="mt-3 font-semibold">能用上核心技术</div>
<div class="mt-2">项目要能让 GPU、算法、模型或空间数据真正发挥作用。</div>
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-2xl font-semibold">02</div>
<div class="mt-3 font-semibold">能产生社会价值</div>
<div class="mt-2">团队不愿意把闲置 GPU 用去挖矿，因为那只是耗电，没有推动生产。</div>
</div>

<div class="p-5 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-2xl font-semibold">03</div>
<div class="mt-3 font-semibold">做得越久，积累越多</div>
<div class="mt-2">数据、网络效应和客户经验应该随业务增加，否则做十年和刚入场的差别不大。</div>
</div>

</div>

<div class="mt-6 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
技术探索可以先不看市场大小；一旦决定把它做成业务，就必须重新检查市场空间和利润条件。
</div>

---

# 创始人把自己放在科研与产品之间

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">工作重心</div>
<div class="mt-3">2023 年之后，黄晓煌把商业和用户工作交给其他合伙人，自己负责空间智能转型，把科研成果接到产品上。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-semibold">回报边界</div>
<div class="mt-3">他希望新技术在三年内出现一些商业回报；如果超过三年仍没有结果，就需要重新掂量。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">例外条件</div>
<div class="mt-3">空间智能从 2018 年开始研究，当前收入仍有限，但因为他判断这件事足够大，所以接受用少量人员提前研究。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">决策前提</div>
<div class="mt-3">能否长期投入，取决于对技术缺陷的判断：它是工程上可以解决的问题，还是原理上无法解决的问题。</div>
</div>

</div>

---

# 变革最难的部分，是旧团队与新方向之间的落差

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold">公司必须动</div>
<div class="mt-3">建筑和房地产业务承压时，群核一边关闭亏损部门，一边继续投入模型训练和顶尖人才，内部压力很大。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold">创始人不擅长快刀切换</div>
<div class="mt-3">黄晓煌更愿意培训旧团队、等待成员改变；他承认这种调整速度偏慢，于是把部分团队交给其他合伙人处理。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold">环境会影响判断</div>
<div class="mt-3">他知道自己容易受周围人影响，因此做空间智能决策时，会让真正懂空间智能、大模型和硬科技的人加入讨论。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold">长期信任也是资产</div>
<div class="mt-3">核心成员长期合作，带来稳定和共识；代价是当旧成员跟不上新方向时，组织调整会更痛苦。</div>
</div>

</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">早期融资</div>
<div class="mt-1">“你不讲O2O根本没人投资。”</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">长期生存</div>
<div class="mt-1">“活得久比活得亮眼更重要”</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">模型与数据</div>
<div class="mt-1">“算法是发动机，数据是燃料，你都得有，你少一个都不行。”</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60">六小龙计划</div>
<div class="mt-1">“我们不靠知名度去赚钱，但是我们希望靠知名度去吸引更多的人才”</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-60">产品路线</div>
<div class="mt-1">“离物理世界越近的越安全，离物理世界越远的纯虚拟的就很危险。”</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-60">SpatialLM</div>
<div class="mt-1">“把物理世界翻译成脚本，让大语言模型能够理解做推理”</div>
</div>

</div>

---
layout: end
---

# “把事情做成，把东西做出来，把产品做好”

<div class="mt-6 text-lg opacity-70">
黄晓煌
</div>

<div class="mt-8 text-sm opacity-70">
群核下一阶段的衡量方式：空间智能收入何时达到公司收入的一半
</div>
