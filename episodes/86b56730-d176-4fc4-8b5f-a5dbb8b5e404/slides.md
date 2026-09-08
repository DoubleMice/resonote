---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "148: 它石智航陈亦伦：具身的三道曙光和第一道关卡"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 具身智能先要越过数据墙

## 148: 它石智航陈亦伦：具身的三道曙光和第一道关卡

<div class="mt-10 text-lg opacity-70">晚点聊 · 2026 年 1 月 · 1 小时 25 分</div>

<div class="mt-16 text-sm opacity-50">从自动驾驶端到端，到人在真实场景中留下的操作数据</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><strong>端到端的来处</strong><br>2021 年的自动驾驶实验，让陈亦伦相信 AI 可以处理规划。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><strong>三道曙光</strong><br>运动控制、任务规划、端到端感知到动作，三条线开始汇合。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-3"><strong>第一道关卡</strong><br>模型扩张之前，行业要先获得足够多、与任务相配的数据。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>采集方案</strong><br>用手套和第一视角相机记录人做真实工作的过程，而非遥控机器人表演。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><strong>物理世界模型</strong><br>空间之外，机器人还要表示力、接触和动作造成的变化。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-3"><strong>落地尺度</strong><br>先从工业制造中柔软、立体且难自动化的工序开始检验价值。</div>
</div>

---

# 一条从机电到具身智能的路线

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>学生时期</strong><br>在清华读电子，赴美读机器学习；他同时迷恋能动起来的机械系统。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>先学做机器</strong><br>第一份工作接触电机、伺服控制和液压，机器人始终是他想做的方向。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-4"><strong>先解一个子问题</strong><br>自动驾驶让他看见：复杂的物理任务也能用数据与神经网络重写。</div>
</div>

<div class="mt-8 rounded-lg bg-stone-50 p-4 text-sm opacity-80">他离开华为后回到清华，并非放弃自动驾驶，而是等待机器人所需的技术和市场条件逐渐到位。</div>

---

# 2021：200 万行规则代码遇到上限

<div class="grid grid-cols-2 gap-5 mt-7">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-5">
    <div class="text-3xl font-bold">200 万行</div>
    <div class="mt-2 text-sm leading-relaxed">原有自动驾驶系统能完成复杂城市动作，但规则持续堆叠，发现问题的速度超过了解决问题的速度。</div>
  </div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-5">
    <div class="text-3xl font-bold">3 万行</div>
    <div class="mt-2 text-sm leading-relaxed">团队训练网络直接为无人车规划轨迹；在复杂人车混行场景中，车辆流畅通过。</div>
  </div>
</div>

<div class="mt-7 text-sm opacity-70">实验从约 100 辆车采集数据开始。数据积累到数千小时后，网络的表现开始出现变化。</div>

---
layout: two-cols-header
---

# 从人类驾驶到闭环规划

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><strong>难点不在感知</strong><br>感知可被看作有真值的开环问题；规划的每一步都会改变下一刻的环境。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>先采人怎么开</strong><br>团队让司机按好驾驶习惯完成任务，收集人类在复杂交通里的行为。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><strong>端到端的含义</strong><br>用网络从数据中学习规划，而非继续为每一种情形补一条规则。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/end-to-end-driving.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 三道曙光为何在 2022 年后汇合

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>运动控制已可行</strong><br>强化学习配合高并发仿真，让四足机器人和人形机器人的走路问题有了可复制的方法。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4"><strong>大模型能拆任务</strong><br>一句自然语言指令可以被分解为多个步骤，补上机器人过去缺少的任务规划能力。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-4"><strong>端到端有先例</strong><br>自动驾驶实验提供了一个子问题上的证据：感知到动作可以被统一学习。</div>
</div>

<div class="mt-8 rounded-lg bg-stone-50 p-4 text-sm opacity-80">三项技术尚未解决通用机器人，但它们让创业时点变得可讨论。</div>

---

# 运动控制：从复杂控制器到强化学习

<div class="grid grid-cols-2 gap-5 mt-7 text-sm leading-relaxed">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>过去的瓶颈</strong><br>传统全身控制系统复杂，机器狗的动作较为僵硬，能完成的行为有限。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>陈亦伦看到的变化</strong><br>ETH 等团队以强化学习直接控制全身运动，运动能力可随训练和硬件迭代提高。</div>
</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>仿真端</strong><br>高并发模拟器提供大量训练样本。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-4"><strong>硬件端</strong><br>硬件公司通过设计缩小 Sim-to-Real 差距，让训练结果更容易落到实体机器上。</div>
</div>

---

# 大模型补上任务规划

<div class="grid grid-cols-2 gap-5 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-5"><strong>自动驾驶已有外部工具</strong><br>去某个地点可以调用地图与导航数据库；路线已经被写成共享的地理信息。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-5"><strong>机器人要面对日常指令</strong><br>人说出一件要做的事，机器人需要自行拆解步骤；大模型在这类任务分解上表现突出。</div>
</div>

<div class="mt-7 rounded-lg bg-purple-50 border-l-4 border-purple-500 p-4 text-sm leading-relaxed">任务规划回答的是做什么、先后如何安排；它不替代接触、施力与执行层面的学习。</div>

---
layout: two-cols-header
---

# 三道曙光，仍缺一座数据桥

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><strong>运动</strong><br>机器人先能稳定地移动自身。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>规划</strong><br>语言模型帮助将意图拆成可执行的步骤。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><strong>端到端</strong><br>感知、状态和动作有机会在一套网络中衔接。</div>
  <p class="opacity-70">三者能否形成能力，取决于有没有足够多、足够贴近任务的训练样本。</p>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/three-dawns-embodied.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# VLA、世界模型与端到端：不是同一层概念

<table class="mt-6">
  <thead><tr><th>名称</th><th>陈亦伦在访谈中的理解</th><th>要处理的难题</th></tr></thead>
  <tbody>
    <tr><td>端到端</td><td>尽量用神经网络和数据串起整个问题</td><td>从感知到动作的整体学习</td></tr>
    <tr><td>VLA</td><td>视觉、语言与动作进入同一网络的表述</td><td>开放世界的理解与任务</td></tr>
    <tr><td>世界模型</td><td>根据当前状态与动作推演下一状态</td><td>人与物、车与车之间的交互</td></tr>
  </tbody>
</table>

<div class="mt-6 text-sm opacity-70">他的重点是先定义问题，再选技术；同一个名词在行业里常有不同用法。</div>

---
layout: two-cols-header
---

# 具身智能要越过三道墙

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-3"><strong>数据墙</strong><br>没有足够数据，复杂网络无从长出；这是他认为行业目前最先卡住的地方。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>算力墙</strong><br>数据到位后，才谈得上用足够算力吸收并压缩这些样本。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><strong>交互墙</strong><br>模型还要学会理解动作怎样改变世界，并在反馈中提高成功率。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/three-walls.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 数据量：从自动驾驶推到具身智能

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>早期信号</strong><br>自动驾驶实验在数千小时数据后，网络开始显示出新的能力。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>可用系统</strong><br>他称好的自动驾驶公司通常拥有 10 万到 100 万小时以上数据。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>个人估计</strong><br>若具身智能的复杂度更高一个数量级，所需数据至少可能达到 1000 万小时。</div>
</div>

<div class="mt-8 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm leading-relaxed">这是陈亦伦按自动驾驶经验作出的量级判断，不是行业已经实现的数据规模。</div>

---

# 三类数据路线，为什么他先排除两类

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>互联网视频</strong><br>量与质量未必足够；静态片段也难与某个具体长尾问题建立对应关系。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4"><strong>操作仿真</strong><br>图像渲染得逼真，不等于能模拟接触与交互；简单运动控制是他认可的例外。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>真实人类操作</strong><br>人完成本来就要完成的任务，数据带有真实环境和成功动作的上下文。</div>
</div>

<div class="mt-8 text-sm opacity-70">这是一套取舍，不是对所有视频或仿真的普遍否定；访谈讨论的是训练复杂操作的主要数据源。</div>

---
layout: two-cols-header
---

# 采数据要同时保留真实场景与真实动作

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><strong>真实场景</strong><br>在为训练而搭建的封闭环境中完成得好，换到工厂或其他地点可能就失效。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><strong>真实动作</strong><br>工作者为了把任务做好而行动；遥操作员则可能因延迟与设备限制做出不自然的动作。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-3"><strong>被动采集</strong><br>让人继续工作，设备记录行为，避免把机器人推入现场打扰流程。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/human-data-engine.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Human Centric 数据引擎记录什么

<div class="grid grid-cols-2 gap-5 mt-7 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>视觉</strong><br>第一视角相机记录人所见的物体、环境与手的相对关系。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>位置与姿态</strong><br>手的位置、朝向及每根手指的状态共同描述一次操作。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>触觉与力</strong><br>软物、线缆和布料会因施力改变形态；只知道位置并不够。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-4"><strong>可靠输入</strong><br>手被遮挡时，单靠相机无法定位，因此团队把传感器设计本身视为关键问题。</div>
</div>

---

# 为什么是五指手套，而非把人手降维成夹爪

<div class="grid grid-cols-2 gap-5 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-5"><strong>手套的目标</strong><br>记录双手完整的操作信息，再让模型把人的经验迁移给机器人；部署端面向灵巧手。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-5"><strong>夹爪的取舍</strong><br>采集门槛较低，但它让人只能按有限自由度操作，训练和部署都会受这层表示限制。</div>
</div>

<div class="mt-7 rounded-lg bg-stone-50 p-4 text-sm opacity-80">访谈中提到，人手有 20 多个自由度；陈亦伦把灵巧手视为更接近长期目标的执行终端。</div>

---
layout: two-cols-header
---

# 一次操作，需要多路信号共同刻画

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><strong>手的位置与姿态</strong><br>手在空间中的位置不能只靠相机估计；叠被子等场景会出现遮挡。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>每根手指的姿态</strong><br>抓取、捏合、转动与穿插依赖手指间的细微差异。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-3"><strong>触觉和施力</strong><br>机器人处理会变形的材料，必须把接触带来的反馈纳入模型。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/hand-signals.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 与遥操作相比，陈亦伦看重的是吞吐量

<div class="grid grid-cols-2 gap-5 mt-7 text-sm leading-relaxed">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-5"><strong>遥操作</strong><br>需要把机器人带到现场，再由人远程控制。访谈认为它受延迟、成功率和动作速度限制，也会打断客户流程。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-5"><strong>可穿戴采集</strong><br>人做自己的工作，设备被动记录。陈亦伦以单条可用数据的比例估算，这种方式的投入可低两个数量级。</div>
</div>

<div class="mt-7 grid grid-cols-2 gap-5 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>数据有效性</strong><br>他的说法是：可穿戴采到十条时，十条都可能可用；遥操作最多只有一条可用。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-4"><strong>成本构成</strong><br>硬件、数据采集与训练都要花钱；他称目前主要成本仍在算力。</div>
</div>

---

# 约 10 万小时：团队开始扩大采集

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>当前量级</strong><br>陈亦伦称团队已采集约 10 万小时数据。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>扩大前的验证</strong><br>团队先试小规模采集、提高数据浓度，观察到模型效果后才决定扩量。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4"><strong>硬件的作用</strong><br>将设备成本压到可接受的规模，才可能让采集量继续增长。</div>
</div>

<div class="mt-8 rounded-lg bg-purple-50 border-l-4 border-purple-500 p-4 text-sm leading-relaxed">他预计 2026 年会出现更大规模的数据采集。该判断是节目中的行业预测，实际进展仍取决于各团队的设备、场景和模型迭代。</div>

---

# 数据、传感器与执行器需要一起设计

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>模型决定要什么数据</strong><br>输入模态与训练目标会反过来要求相应的传感器能力。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>采集规模决定成本</strong><br>设备若要铺开，功耗、成本和佩戴体验都要一起解决。</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-4"><strong>数据决定执行器</strong><br>采集时降低自由度，部署端通常也会承受同样的表达限制。</div>
</div>

<div class="mt-8 text-sm opacity-70">这也是他对中国团队有信心的原因：具身智能把硬件、场景、本体、数据和算法放在同一项工程里反复迭代。</div>

---
layout: two-cols-header
---

# AWE：为物理世界分配更多模型容量

::left::

<div class="space-y-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><strong>时间、空间与力</strong><br>它石智航称其基础模型为 AI World Engine；模型重点表示物体占据何处、怎样受力和如何变化。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-3"><strong>动作改变对象</strong><br>挤压物体、整理线缆或操作布料时，动作会改变对象；下一步要基于变化继续判断。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><strong>动态推演</strong><br>模型让状态随动作演化，并为后续操作提供依据。</div>
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
  <Excalidraw drawFilePath="./public/awe-engine.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么他认为机器人应有自己的基础模型

<div class="grid grid-cols-2 gap-5 mt-7 text-sm leading-relaxed">
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-5"><strong>VLM 的长处</strong><br>大量图文问答数据训练出的模型擅长看图、理解语言和回答问题。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-5"><strong>具身任务的缺口</strong><br>机器人还要知道怎样接触、怎样施力、动作后物体会如何变化；这些经验来自操作数据。</div>
</div>

<div class="mt-7 rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4 text-sm leading-relaxed">他的论点是：若把机器人仅当作视觉语言模型外接一个动作头，就低估了物理世界任务的独立性。访谈中的 AWE 是团队当前的产品与研究方向。</div>

---

# 动作与行为：两种不同粒度的表示

<table class="mt-7">
  <thead><tr><th>层级</th><th>访谈中的类比</th><th>对长程任务的意义</th></tr></thead>
  <tbody>
    <tr><td>动作</td><td>底层执行器收到的电流、关节信号或轨迹</td><td>颗粒度小，直接驱动实体系统</td></tr>
    <tr><td>行为</td><td>类似战略相对战术，也像语义相对声波</td><td>将多个动作组织成更大单元，才容易向前推演更远</td></tr>
    <tr><td>语言</td><td>描述行为的高层表达</td><td>可帮助把意图同感知、行为与动作关联</td></tr>
  </tbody>
</table>

<div class="mt-6 text-sm opacity-70">这是陈亦伦解释模型设计的语言，不等同于行业对 action 的统一定义。</div>

---

# Scaling law 的顺序，不能跳过冷启动

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>先有数据增长</strong><br>具身数据尚未像互联网文本那样现成可取，因此需要先建采集能力。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4"><strong>再让算力吸收</strong><br>数据量上来以后，模型规模和训练算力才有更明确的扩张基础。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-4"><strong>最后处理交互</strong><br>模仿已有动作之后，系统还要通过反馈理解怎样提高成功率。</div>
</div>

<div class="mt-8 rounded-lg bg-stone-50 p-4 text-sm opacity-80">他认为大语言模型起得快，是因为文本数据已存在；具身智能的冷启动更多来自第一步的缺口。</div>

---

# 2025 到 2027：访谈中的行业时间表

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>2025</strong><br>更多团队认真开始为具身任务采数据、训练端到端系统。</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-4"><strong>2026</strong><br>陈亦伦预计数据采集会爆发，演示视频和垂直场景尝试也会增多。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>2027</strong><br>他以自动驾驶的节奏类比，保守估计这一年能看到具身任务上的明显效果。</div>
</div>

<div class="mt-8 rounded-lg bg-red-50 border-l-4 border-red-500 p-4 text-sm leading-relaxed">嘉宾将这张时间表作为预测；实际进展取决于团队的设备、场景和模型迭代。视频数量和融资合作都不能单独证明系统能在现场稳定创造价值。</div>

---

# 演示之外，工业客户看的是实际价值

<div class="grid grid-cols-2 gap-5 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-5"><strong>早期信号</strong><br>数据增加后，较小的垂直场景更容易先被打穿；行业会出现更多演示和试点。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-5"><strong>客户判断</strong><br>大客户更在意技术和产品能否形成可共享的收益，而不是一段制作精良的展示视频。</div>
</div>

<div class="mt-7 rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4 text-sm leading-relaxed">陈亦伦说团队 2026 年会聚焦把实际价值做出来。访谈没有披露具体客户名称或已落地的量化结果。</div>

---

# 第一批场景：已有机器人、仍有大量人工作的地方

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>工业制造</strong><br>这是团队希望先进入的场景；需求颗粒度较大，也有明确的生产力诉求。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>过去没被自动化的工序</strong><br>不少需求长期留给人，是因为旧式机器人难以处理柔软、接触丰富或变化多的任务。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>客户任务优先</strong><br>团队强调与合作方一起迭代，优先把具体问题做干净，而非泛泛展示能力。</div>
</div>

---

# 线束制造：一个典型的接触与形变任务

<div class="grid grid-cols-2 gap-5 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-5"><strong>为什么难</strong><br>线束是立体、柔软的对象。整理、装配、插接时，物体会受力变形，简单抓放无法覆盖全部工序。</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-5"><strong>为什么值得做</strong><br>汽车、冰箱、洗衣机、空调和服务器等带电产品都有线束；需求广泛且长期依赖人工操作。</div>
</div>

<div class="mt-7 rounded-lg bg-stone-50 p-4 text-sm opacity-80">陈亦伦举线束说明，具身智能的机会不只在平面、标准化的物料搬运，也在柔性立体加工的细小环节。</div>

---

# 合作能否成立，取决于有没有新增收益

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-4"><strong>技术与产品</strong><br>先解决客户真实且痛的任务，才有讨论合作方式的基础。</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-4"><strong>价值池</strong><br>陈亦伦用这个词指技术创新新增的收益；参与方需要能从中各得其所。</div>
  <div class="rounded-lg bg-red-50 border-l-4 border-red-500 p-4"><strong>表面合作的限度</strong><br>没有实际价值，投资、签约或联合发布也未必能带来持续部署。</div>
</div>

<div class="mt-8 text-sm opacity-70">从数据采集到工业落地，这期访谈始终回到同一件事：让模型在真实任务中表现得更好。</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><span class="opacity-50">端到端实验</span><br>“AI可以做planning了”</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><span class="opacity-50">大规模训练</span><br>“越复杂的系统，越多的数据，往往它的算法结构就会越简单”</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><span class="opacity-50">GPT 的启发</span><br>“我反而觉得GPT最伟大的事情是他们想出了next token prediction这个训练任务”</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><span class="opacity-50">技术选择</span><br>“每个技术是为了解决它的问题而生的”</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-3 col-span-2"><span class="opacity-50">行业判断</span><br>“具身领域的scaling law是非常明确的，它是一定可以到达的”</div>
</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 border-l-4 border-blue-500 p-3"><span class="opacity-50">数据原则</span><br>“真实场景这件事情是非常非常重要的”</div>
  <div class="rounded-lg bg-green-50 border-l-4 border-green-500 p-3"><span class="opacity-50">采集成本</span><br>“我们其实比它要省两个数量级”</div>
  <div class="rounded-lg bg-yellow-50 border-l-4 border-yellow-500 p-3"><span class="opacity-50">2026 年预测</span><br>“26年，就这种方式就会让数据大爆发”</div>
  <div class="rounded-lg bg-purple-50 border-l-4 border-purple-500 p-3"><span class="opacity-50">基础模型</span><br>“机器人这个行业本身它值得拥有一个自己的模型”</div>
  <div class="rounded-lg bg-orange-50 border-l-4 border-orange-500 p-3 col-span-2"><span class="opacity-50">数据与模型</span><br>“最懂数据的公司往往是最懂AI的公司”</div>
</div>

---
layout: end
---

# “从25年认认真真开始搞这件事情，到27年就一定会有效果”

<div class="mt-7 text-base opacity-70">陈亦伦以自动驾驶端到端的节奏，对具身智能作出的个人预测</div>

<div class="mt-14 text-sm opacity-50">晚点聊 · 148</div>
