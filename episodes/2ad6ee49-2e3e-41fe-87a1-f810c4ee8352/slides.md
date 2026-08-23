---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '169: 访谈Cerebras早期投资人周楠：英伟达挑战者？Scaling Law的萌芽、被遗忘的百度美研'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 访谈 Cerebras 早期投资人周南

## 英伟达挑战者？Scaling Law 的萌芽、被遗忘的百度美研

<div class="mt-6 text-sm opacity-60">
晚点聊 LateTalk · 第 169 期 · 周南（Qualcomm Ventures 投资人）× 曼琪 · 2026-06 · 1h39m
</div>

---

# 为什么这期值得听

<div class="mt-2 text-sm opacity-70">
周南从投行转做 AI 投资整整十年：第一笔投资就是 Cerebras，起点是十年前的百度美研。本期从他亲历的尽调过程，回溯 scaling law 的萌芽与一个被地缘政治改写的故事。
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Cerebras 上市**  
5 月中旬 IPO，市值一度接近 1000 亿美元，被视作英伟达的挑战者。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**OpenAI 200 亿美元大单**  
2026 年 1 月签约；最早的投资人其实是 Sam Altman，2016 年就投了。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Scaling Law 的萌芽**  
2015 年底的 Deep Speech 2 论文，让百度美研第一次尝到"越大越强"的经验直觉。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**被遗忘的百度美研**  
2011 年成立、顶峰 250 多人，向 OpenAI、Anthropic、Inflection、Adept 输送了联合创始人。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**一个没做成的基金**  
OpenAI、Databricks、Scale AI 都曾躺在百度的 deal list 上，却因地缘政治没能投出去。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**非共识投资**  
"伟大的投资发生在没有形成共识之前"——这句话他用十年亲身验证了一遍。

</div>

</div>

---
layout: two-cols
---

# Cerebras：一整片晶圆做成的 AI 引擎

<div class="text-sm leading-relaxed">

- 核心创新是 **Wafer-Scale Architecture**："把一整片晶圆做成了一个巨大的AI计算引擎"，晶圆上有 84 个芯片无缝互联。
- 它不只是一家芯片公司，还做原生系统：芯片、服务器、散热、电源、编译器、软件栈。
- 要解决的问题：让大量计算单元和内存靠得更近，降低通信与数据搬运成本——这是它与传统 GPU 最根本的不同。
- 今天看 Cerebras，它更像一个"英伟达之外的颠覆性架构"，而非单块硬件。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./wafer-scale.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 一群大脑 vs 一个巨大的大脑

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
"GPU有点像是很多很多很强大的人类的这种脑袋瓜，但是它需要靠一个高速的网络去协作。而Cerebras它是一个非常非常巨大的一个大脑，尽量让计算和记忆都发生在同一个硅片上。"
<div class="text-xs opacity-60 mt-1 not-italic">— 周南解释 wafer-scale 与 GPU 架构的差别</div>
</div>

- GPU 的生态成熟、通用性强；Cerebras 的优势在减少分布式通信和内存搬运。
- 推理这类 AI workload 最吃内存带宽与通信延迟——正好是 Cerebras 的主场。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./one-brain.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 英伟达挑战者？——特定 workload 上的挑战者

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**挑战者的位置**  
"它是英伟达在一些特定workload上的挑战者，比如说inference，就是推理上的一个挑战者"——但做不了全栈生态的全面替代者。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**英伟达的护城河**  
不只是芯片，还有 CUDA、开发者生态、网络、系统、软件、客户信任和供应链——"这一整个一系列的一个生态，这个是它最强的护城河"。

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**Cerebras 的机会窗口**：当 workload 受限于内存带宽、通信延迟和推理响应速度时，它是非常优秀的选择——招股书显示它的推理速度比现有方案快很多。
</div>

---
layout: two-cols
---

# 算力大转移：从训练到推理

<div class="text-sm leading-relaxed">

- "现在你会看到一半以上的对于GPU需求都是用在推理上的"，训练不再是唯一叙事。
- "包括今年像这个AI agent的这种爆发，更加去激发了这个对于推理芯片的需求"。
- 推理需求从去年到今年大规模爆发后，Cerebras 的低延迟（low latency）和高吞吐（high throughput）从"备选"变成了"稀缺"。
- 两三年前估值只有数十亿美元，上市后一度冲高——周南认为这是需求变化，是"水到渠成"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./training-to-inference.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# OpenAI 的 200 亿美元订单

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"目前这个AI compute，AI的算力，它就是模型继续scale的一个瓶颈。就是现在算力稀缺是number one，是一个核心的一个大瓶颈。"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南解释 OpenAI 为什么对 Cerebras 感兴趣
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**不能依赖单一路径**  
"你都不能依赖单一路径"——任何 frontier lab 都需要供应链多样化和战略自主性，Anthropic 也在签 TPU。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**推理决定体验与毛利**  
推理的低延迟、高吞吐、cost per token 优化，直接决定产品体验和商业毛利——这正好是 Cerebras 的优势。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**订单细节**：2026 年 1 月签约，至少 200 亿美元；双方还做了架构设计层面的绑定合作。
</div>

---

# Sam Altman：Cerebras 最早的投资人

<div class="mt-4 p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"Sam Altman其实是Cerebras最早的投资人。Sam Altman在百度投之前，百度是2017年投的。在2016年的时候，Sam Altman就已经投了这家公司。"
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**时间线**  
OpenAI 2015 年 12 月成立，Sam Altman 成立没多久就投了 Cerebras——"他在那个时候就已经有相当的对于算力市场的一个vision了"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**不算关联交易**  
这是他个人投资，不是 OpenAI 投的；Sam Altman 投过不少硬件公司，本人也不算大股东。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**作者的概括**：当时就预见到"未来的模型会做得很大，不能只依赖英伟达一家芯片"——这与百度美研研究员们 2016 年给周南上的第一课，几乎是同一句话。
</div>

---

# 起点：百度美研的「第一课」

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"不能就只依赖于英伟达这一个芯片，因为未来会出现非常非常大的一个模型……如果说这个时候不去找这颗芯片的话，那么在十年以后、五年以后、十年以后就会形成英伟达独大的一个局面。"
</div>

<div class="mt-2 text-sm opacity-70">
— 2016 年，百度美研研究员给刚入行的周南上的第一课
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
周南 2016 年从投行转入百度美研（此前在 Barclays 做过阿里、京东那一波移动互联网上市潮）。他当时种下的种子是：找一个不同架构的芯片，作为英伟达之外的第二解决方案。
</div>

---

# 十年前的英伟达：为游戏而生

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 不是为深度学习设计
十年前英伟达"96%的那个叫做Die Area，不是专门用优化深度学习"，它更多为游戏和图形发明——处理非图形模型时并非最优解。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Andrew Ng 的背书
"如果没有Andrew当时的就是给英伟达背书，就大家就不会形成这个认知说哦，原来GPU是要被大规模可以用于这个AI的模型的训练的。"

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**十年后的现实**：英伟达已经是 "Five Trillion Dollar Company"，是大语言模型时代的王者——但研究员们当年担心的"英伟达独大"，最终真的发生了。
</div>

---
layout: two-cols
---

# Deep Speech 2：Scaling Law 的萌芽

<div class="text-sm leading-relaxed">

- 2015 年底百度发表 Deep Speech 论文（Dario 为一作）。周南加入时已发布，研究员们聊起过这个发现。
- 当时已清楚感受到："当模型更大，当数据更多，训练更久……模型的表现就会持续的提升。"
- 那时它是**经验性直觉**，还没被当作数学规律系统表达；后来在语言模型时代被验证、理论化，就是今天的 Scaling Law。
- "这个Scaling Law的诞生的这个萌芽就是当年的这篇Deep Speech的这个paper。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scaling-seed.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 三亿参数模型：训练要三个多月

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 当时的世界最大
百度美研训练的语言模型已经"将近300个million parameter了"——三亿参数量级，在十年前是很大的量级。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 训练慢得吓人
"为了要用GPU训练一个这样的模型，要至少三个多月的时间"；要调参看效果、迭代模型，就是好几个月。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**投资的启发**：想让模型能力快速迭代，就必须找到更强大的算力系统。带着这个判断，周南从 2017 年开始满大街寻找与 GPU 不同的算力方案。
</div>

---

# 千倍提速的承诺

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"那个时候我就在一堆的芯片公司中当时找到Cerebras的时候，Cerebras就说……能够让这个深度学习的训练提速一千倍。就是比如说你要用三个多月去训练的一个模型，可能用当时的这个Wafer Scale架构，大概几天几个星期就可以训练出来。"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南回忆 2017 年接触 Cerebras 时的第一印象
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**当时的创业潮**：寒武纪也是那前后成立的，全球都在做面向深度学习的 ASIC。但周南认为 ASIC 更多是推理芯片，而当时要解决的首要问题是训练——所以他的优先级是"能提升训练"的芯片。
</div>

---

# 三选一：为什么是 Cerebras

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Graphcore
2019-2020 年融资时也看过，思路与 Cerebras 很像；"它的这个效果就不如Cerebras这么好"，架构也没那么颠覆。2024 年被软银收购，5 亿美元。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Wave Computing
架构和理念跟 Cerebras 挺像，但团队有问题，被周南第一个淘汰——这家公司很早以前就不行了。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Cerebras
颠覆性架构 + 训练百倍千倍提速 + 强团队，三选一中信号最明显。

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**周南的直觉**："我要投的话我就是要投一个具有这种颠覆性的这样一个架构，然后真的能够让深度学习的训练能够使这个百倍千倍的这样一个提速"
</div>

---

# Andrew Feldman：非典型的芯片创始人

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 不是工程师出身
芯片公司创始人通常出身工程，但 Feldman 的强项是产品定义、组织团队、理解客户和坚持长期愿景。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 强信号
身边有两三个跟了他很多年的技术 co-founder；是 serial entrepreneur，前一家公司被 AMD 收购后带原班人马创业。

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### PhD 密度
"他们有当时的团队大概有80多个人吧，有将近70个人都是PhD"——周南见过 PhD 密度最高的一家公司。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 年纪是加分项
半导体周期很长，创始人经历一个完整周期至少十几年；"对于半导体创业来讲，这个经验和年纪我觉得是个加分项"。

</div>

</div>

---
layout: two-cols
---

# 尽调：把风险从第一性原理拆开

<div class="text-sm leading-relaxed">

- 周南带了多位百度 AI 研究员做深度尽调，把风险全部打散来讲：良率、散热、电源、编译器、客户为什么要买。
- "Andrew对这些问题完全不回避，他一个一个的拆开来，非常耐心的跟我讲"。
- "他可以不厌其烦的每天跟我讲两个小时，四个星期"——对一个芯片小白也如此。
- 投资 deep tech 不只是投宏大愿景，更要能拆清风险与对应的 mitigation 策略。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./risk-breakdown.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 只有百度能验证：simulator 上的语言模型

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 还没流片
当时 Cerebras 只有 simulator——所有 wafer 架构的构想都还没有实物。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 只有百度跑得动
pre-Transformer 时代，百度的语言模型是世界上最大的，基于自研的 PaddlePaddle（飞桨）架构——"只有百度能够说在他的架构上去跑这样的一个模型"。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**结果与后续**：simulator 上的信号比较正面（细节不能透露）；Greg Diamos——英伟达 CUDA 的 key driver、Deep Speech 2 作者之一——亲自参与验证并与 Cerebras 紧密合作，还有研究员后来直接加入了 Cerebras。
</div>

---

# 硬件风险的最坏情况

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 良率/流片失败
最坏情况都演算过："多花个六个月的时间，然后要多花个五到十个million"——公司现金流能扛住，风险可控。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 散热
水冷和系统设计当时已经出来了——办公室里放着一个巨大的液冷盒子，芯片只有那么点大。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 电源/短路
这么多芯片在一块晶圆上，万一短路怎么办？他们有软件方案：识别出短路芯片后，把任务重跑到冗余芯片上。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
**物理风险已做到可控**；研究员们补上的是 compiler 层面的测算——模型怎么映射到架构、怎么对接 TensorFlow、Caffe、PyTorch。周南说，没有美研的研究员，这部分风险他无法预测。
</div>

---

# 投决会：两天无痛秒过

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"把我的investment memo，大概十几页纸吧，就是中文一稿和英文一稿，在四个星期后我发给了投决会之后呢，应该就是不到两天的时间他们就拍板了……当时的投决会我觉得就是无痛秒过。"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南回忆 2017 年 8、9 月完成投资的过程
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**估值不便宜**  
当时估值差不多 7 亿美元——在 16、17 年那个背景下，都快要到独角兽了。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**高层的共识**  
投决会成员：CFO Jennifer Li、陆奇、Robin（李彦宏）本人；吴恩达 2017 年 4 月已离开百度，不在投决会上。

</div>

</div>

---

# 当时的回报测算：3-5 倍

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 2025 年市场预测
周南当时测算：2025 年 AI 训练市场规模约 22 billion 美元。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 市占率假设
按大约 20% 左右的市占率做测算。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 预期回报
对 Cerebras 的回报率预测是 3 到 5 倍。

</div>

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
**今天回头看**："2025年的这个AI的现在你看它的这个训练市场那是比22个billion大了不知道多少个量级了"——"我当时真的是小看了这个AI的整个这个腾飞的速度"。
</div>

---

# 2017-2019：艰难岁月

<div class="mt-4 p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"在17年到19年的时候，公司遇到了很大的挑战，就是出片也没出出来，各种风险层出不穷，一会儿是这个compiler搞不定，一会儿是这个wafer的这个流片遇到问题，什么都在delay。"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南在纽约 IPO 庆祝会上听到的早期投资人发言
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**风险下限基本都发生了**  
流片推迟大约一两年——当年风险测算的下限几乎全部兑现，团队的韧性是关键。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**董事会的耐心**  
早期董事会成员是 Benchmark、Foundation Capital、Eclipse。"想让一个计算芯片取得成功，真的是没有十年的时间它是很难实现的。"

</div>

</div>

---

# 反事实：如果流片更快

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"就比如说OpenAI当时在训练模型的时候，对吧，是老黄拿着这个GPU送过去了。如果那个时候已经有Cerebras，那就是Andrew Feldman拿着GPU送过去了，是不是？"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南对"流片更快会怎样"的回答</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**但历史没有如果**  
Frontier lab 的 GPU 集群和数据中心基建已经投下去了——"你要在这个时候去换到其他的芯片上去，它其实是一个非常大的系统风险"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**半导体的宿命**  
新架构要过物理制造验证，流片、编译器、规模交付一环都不能少——硬件公司就是这样厚积薄发。

</div>

</div>

---

# 战略转向：吃推理市场

<div class="mt-4 p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"Cerebras其实与其去掰扯这个训练，还不如把所有的精力都放在把这个推理的workload做好上……你去吃这个推理的市场，我觉得是个比较正确的一个决定。"
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**客户多是推理场景**  
Frontier lab 训练已用惯英伟达生态，换训练芯片风险大；Cerebras 现在大多数客户是推理场景。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**能搞定定制化 infra**  
OpenAI 的订单还没交付，需要定制化 infra——"他们在当年刚刚成立的时候，那80多个早期的这个员工里面，那么多的PhD里面，就有相当多的人是做infra的"。

</div>

</div>

---

# Cerebras Cloud：解决 adoption friction

<div class="text-sm leading-relaxed mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**硬件公司最大的挑战**："叫做adoption friction"——让客户买一套全新硬件、改软件栈、部署到自己的数据中心，周期会很长很长。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">

**云把复杂封装起来**：Cerebras 自己做云平台，把底层系统整个封装，客户直接调用 API，"可以立刻就是说plug in Cerebras的产品"。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**一站式**：对一个做模型的公司来说，找英伟达加周边云还是解决不了算力问题；用 Cerebras 方案加云，"那这样我就是有一个one stop solution"。

</div>

</div>

---

# Feldman 的表态：和所有人合作，除了英伟达

<div class="mt-4 p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"最近我看这个创始人就Andrew Feldman，他在Bloomberg的Tech峰会上非常强势的表态，我们会和所有人合作除了英伟达。"
</div>

<div class="mt-2 text-sm opacity-70">
— 主持人曼琪转述 Feldman 在 Bloomberg 科技峰会上的话</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**云的算力也紧张**  
英伟达有很强的生态与云渠道，CoreWeave、Nebius 这类 new cloud 的 GPU 供给已成为服务客户的 constraint——这给了 Cerebras 云业务延展空间。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**英伟达的动作**  
去年 12 月快速以 200 亿美元收购推理芯片公司 Groq，今年 3 月 GTC 上把 Groq 整合进算力平台——推理战场已经开打。

</div>

</div>

---
layout: two-cols
---

# 上限与下限

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**上限很高**：AI compute 需求非常大，推理上的上限"可能真的是无止境的"——"它如果后面到比如说five hundred billion，我是不会吃惊的"。

</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">

**下限要看交付**：wafer-scale 方案能否持续 scale？招股书风险披露显示客户还比较集中（如 G42 等几个大客户），没有其他芯片厂商那么 diverse。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**关注点**：能不能在稳定环境下持续交付、运营，并让客户真正用起来。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./upper-lower.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 百度美研：硅谷黄埔军校

<div class="text-sm leading-relaxed">

- 顶峰时期"应该有至少250多个人"，是全世界最顶尖的研究员在一起共事。
- 走出的人：Inflection 的 co-founder、Adept 的 co-founder、Meta FAIR 实验室的 founding member——"当然就不要讲OpenAI和Anthropic了"。
- "那个时候就是一堆神仙打架的年代，那个时候的人才密度，包括在Google DeepMind都是没有过的"
- 相当多人冲着 Andrew Ng 而来；他来了之后还带来了很多 DeepMind 的人才。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./baidu-alumni.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2020 年夏天那个电话

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"他们就给我打电话说，那那那个给你讲一个激动人心的事，GPT-3我们要练出来了……然后他就跟我说我们现在都想出来，我说为什么呀？他说因为我们不再信任Sam Altman，因为他们觉得他对安全这个事情就是很不重视"
</div>

<div class="mt-2 text-sm opacity-70">
— 2020 年夏天，百度美研前同事（Dario 的好友们）打给周南的电话</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**周南的建议**：跟当年一样——"要融很多很多的钱去买算力"；但他也直说，主流 VC 不会投这个钱。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**命运的分岔**：疫情最严重时没有疫苗，周南没能进城见面；后来 a16z 的投资人 ANJ 成了他们的个人天使——后面就是 Anthropic 的故事。

</div>

</div>

---

# 意难平：没做成的那只基金

<div class="mt-4 p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"如果这个基金做起来了，可能现在百度应该是全世界最牛的shareholder吧，会是在所有的这些frontier labs里面shareholder，确实是比较可惜，这可能是我比较有点意难平的一个事情。"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南谈那只没能募起来的百度 growth fund</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**deal list 上的名字**  
OpenAI 当时也在名单上（2017-18 年，陆奇曾是 Sam Altman 的 mentor）；还有很早 sourced 的 Databricks，连 Scale AI 都在 betting 名单上。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**没人 buy in**  
基金做不成后，周南拿着 thesis 聊了 Insight Partners、Sequoia、Benchmark——"没有一个人buy in，都说他们要投SaaS"——因为"在共识前太久了，就特别反共识"。

</div>

</div>

---

# 中美 AI 的分工

<div class="mt-4 p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"美国是在颠覆性创新上它更有优势，而中国在这个应用和追赶上更有优势，因为中国它是一个AI应用很大很大的一个场景"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南作为美国投资人的观察</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**中国的优势**  
工程能力强、能迅速追赶、落地场景多——比如 computer vision，街上遍布摄像头，模型与市场都非常强。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**百度的两个遗产**  
一个是坚持到现在的自动驾驶；另一个是昆仑芯——周南投 Cerebras 时，昆仑芯的负责人已经萌生了做芯片的雏形。

</div>

</div>

---

# 非共识的窗口越来越短

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 早期投资变难了
"现在AI已经是个共识了。当你是一个共识的时候……所有这个产业链上的人都会去想方设法去挖，说我还有没有什么样一个非共识的机会。所以这个窗口是越来越短的。"

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 窗口只剩一两个月
2025 年 2 月周南写给投资人朋友的信里列的方向（agent、video model、Fal 这类多模态 infra 等），"给你的投资机会的窗口期只有两到，一到两个月"。

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 今年的主题：砸 winner
Benchmark 刚宣布募 20 亿美元的基金，24 小时就融完了。"今年的一个投资主题就是砸这个winner，用大钱去砸winner"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 头部公司会越长越大
Anthropic 现在估值约一个 trillion 的量级，"它变成五个trillion我觉得是不奇怪的一件事情"；Fireworks、FAL、Basalten 这类 infra 公司已形成早期飞轮。

</div>

</div>

---
layout: two-cols
---

# 推理成本优化：下一个大战场

<div class="text-sm leading-relaxed">

- 推理占据算力很大一部分后，"推理成本的一个优化会是AI产业的一个很大的一个战场"——它会直接反映到 profit margin 上。
- 典型例子 Agam：去年 8 月成立，今年 3 月就被 Nvidia 收购；创始人是 MIT 教授韩松的学生，做推理优化。周南发现得早，但"卖得太快了"，没投上。
- 黄仁勋的五层蛋糕里，第三层就是"云和 infra"——推理优化与 cloud 结合最自然，能直接帮云上客户部署得更好。
- 周南在高通积累的端侧推理敏感度，让他对这一层特别关注。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./five-layer-cake.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Physical AI：aha moment 可能更早

<div class="mt-4 p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-50">

<div class="text-lg leading-relaxed">
"我认为这个physical AI的aha moment可能会到来得比自动驾驶给我们想象中要早一些……虽然它现在还有很多的问题，像这个data的这个瓶颈啊，包括软硬件结合的这些瓶颈啊，可是我认为这个aha moment会比我们想象中要早"
</div>

<div class="mt-2 text-sm opacity-70">
— 周南对机器人赛道的判断</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**准确度更宽容**  
自动驾驶必须做到 99.9 的准确性，否则会出人命；physical AI 对任务完成度和准确度的要求"稍微要宽容一些"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**泛化曲线更陡**  
语言模型的经验：百度当年测算要将近十年才能训出 Wikipedia 级别的模型，实际快得多——进步速度后面会呈现陡峭的曲线。

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**算力层的苗头**：physical AI 落地时"身上都挂著一个GPU，那我觉得是很耗电的一件事情"，需要 low latency、power efficient 的方案；周南还看到有创业团队在开做基于 CPU 的新推理芯片架构。
</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"不能就只依赖于英伟达这一个芯片，因为未来会出现非常非常大的一个模型。"
<div class="text-xs opacity-60 mt-1 not-italic">— 2016 年百度美研研究员的「第一课」，也是周南投资 Cerebras 的起点</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"GPU有点像是很多很多很强大的人类的这种脑袋瓜……而Cerebras它是一个非常非常巨大的一个大脑"
<div class="text-xs opacity-60 mt-1 not-italic">— 周南解释 wafer-scale 与 GPU 的本质差别</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"他可以不厌其烦的每天跟我讲两个小时，四个星期。"
<div class="text-xs opacity-60 mt-1 not-italic">— Andrew Feldman 把尽调风险一个一个拆开讲，让芯片小白也听懂</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"伟大的投资发生在没有形成共识之前。"
<div class="text-xs opacity-60 mt-1 not-italic">— 周南在 Cerebras 上市时的分享；他用十年亲身验证了这句话</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"physical AI的aha moment可能会到来得比自动驾驶给我们想象中要早一些。"
<div class="text-xs opacity-60 mt-1 not-italic">— 从语言模型的泛化曲线推演机器人的节奏</div>
</div>

</div>

---
layout: end
---

# 十年，一颗芯片

<div class="mt-6 p-6 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"想让一个计算芯片取得成功，真的是没有十年的时间它是很难实现的。"

</div>

<div class="mt-4 text-sm opacity-70">
— 周南，Qualcomm Ventures 投资人 · 晚点聊 LateTalk 第 169 期
</div>
