---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 与陈哲的「具身季报 26Q1」：宇树招股书、人形再思考、英伟达世界模型、高自由度灵巧手
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 具身季报 26Q1

## 宇树招股书、人形再思考、世界模型与高自由度灵巧手

<div class="mt-10 text-lg opacity-70">与陈哲（Peter）谈具身智能的供给、技术和资本</div>
<div class="mt-3 text-sm opacity-50">晚点聊 · 157</div>

---

# 为什么这期季报值得看

<div class="grid grid-cols-3 gap-3 mt-4">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
<div class="text-xs text-blue-700">01｜宇树</div>
<div class="mt-1 text-sm leading-relaxed">春晚的二十多台 G1，展示了量产本体与运控的一致性。</div>
</div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3">
<div class="text-xs text-green-700">02｜人形</div>
<div class="mt-1 text-sm leading-relaxed">双足的复杂度，是否真的高于它带来的空间与任务价值？</div>
</div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3">
<div class="text-xs text-orange-700">03｜灵巧手</div>
<div class="mt-1 text-sm leading-relaxed">高自由度、触觉和可复现的末端操作，正在成为研究入口。</div>
</div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3">
<div class="text-xs text-purple-700">04｜世界模型</div>
<div class="mt-1 text-sm leading-relaxed">视频生成模型让机器人先预测未来，再选择动作。</div>
</div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3">
<div class="text-xs text-red-700">05｜产业</div>
<div class="mt-1 text-sm leading-relaxed">供应链、端侧算力和美国制造能力，决定技术能否变成产品。</div>
</div>
<div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-3">
<div class="text-xs text-yellow-700">06｜资本</div>
<div class="mt-1 text-sm leading-relaxed">上市潮带来资源，也把估值与真实落地之间的距离摆到台前。</div>
</div>
</div>

---

# 五个被选中的 Q1 进展

<div class="grid grid-cols-3 gap-3 mt-4">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3"><div class="text-xs text-blue-700">本体与运控</div><div class="mt-1 text-sm leading-relaxed">宇树 G1 登上春晚，二十多台量产机器同步完成复杂动作。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3"><div class="text-xs text-orange-700">灵巧手</div><div class="mt-1 text-sm leading-relaxed">Shappr 在 CES 展示自主组装风车，触觉与高自由度成为焦点。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3"><div class="text-xs text-purple-700">世界模型</div><div class="mt-1 text-sm leading-relaxed">英伟达 DreamZero、DreamDojo 与 WAM 把视频生成引入动作生成。</div></div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3"><div class="text-xs text-green-700">实时任务</div><div class="mt-1 text-sm leading-relaxed">银河通用的人形机器人打网球，让全身感知—决策—控制进入具体场景。</div></div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3"><div class="text-xs text-red-700">电动 Atlas</div><div class="mt-1 text-sm leading-relaxed">Boston Dynamics 用模块化和冗余，重新思考人形机器人的制造。</div></div>
</div>

<div class="mt-5 text-sm opacity-70">陈哲的排序来自投资人与工程师的综合判断，不等同于纯学术论文排名。</div>

---

# 这场讨论真正比较的尺度

<div class="text-xs opacity-70">作者概括：具身智能的关键问题，正在从“能不能做”转向“能不能稳定交付”。</div>
<div class="grid grid-cols-3 gap-4 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
<div class="text-blue-700 font-semibold">一次演示</div>
<div class="mt-2 text-sm leading-relaxed">证明当前硬件、数据和控制方法能够组合出一个结果。</div>
</div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
<div class="text-green-700 font-semibold">稳定交付</div>
<div class="mt-2 text-sm leading-relaxed">同一能力能在不同机器、不同扰动和真实任务中重复完成。</div>
</div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
<div class="text-orange-700 font-semibold">生态标准</div>
<div class="mt-2 text-sm leading-relaxed">硬件、数据和开发环境被研究者反复采用，形成事实上的默认入口。</div>
</div>
</div>

---

# 宇树春晚的技术含量，不只在动作像人

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">动捕与模仿学习</div><div class="mt-2 text-sm leading-relaxed">真人动作先被记录，再转译给人形机器人。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">仿真强化学习</div><div class="mt-2 text-sm leading-relaxed">仿真器把粗糙的动捕数据变成更稳定、更鲁棒的 policy。</div></div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4"><div class="text-red-700 font-semibold">量产一致性</div><div class="mt-2 text-sm leading-relaxed">二十多台机器面对不同扰动，仍要同时完成弹射、回环和翻滚。</div></div>
</div>

<div class="mt-6 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">
春晚的难点不是把一台样机调到最好，而是把控制策略、硬件质量和装配误差一起压到量产机器可接受的范围内。
</div>

---
layout: two-cols
---

# 从真人动作到量产一致性

- 动捕或遥操作提供动作示范，减少从零探索的成本。
- 仿真强化学习反复处理扰动，把动作变成可执行的 policy。
- 最终考验落在 G1 本体：二十多台机器是否都能稳定复现。

<div class="mt-5 text-sm text-green-700">春晚把“算法效果”与“硬件一致性”放到了同一个舞台上。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./control-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 表演的证据边界

<div class="grid grid-cols-2 gap-4 mt-5">
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-5">
<div class="text-green-700 font-semibold">已经说明</div>
<ul class="mt-3 text-sm leading-relaxed">
<li>量产级本体可以执行高难度、长序列的固定动作。</li>
<li>视觉定位、运控和强化学习开始被放进同一个系统。</li>
<li>硬件质量控制本身已经成为可观察的竞争力。</li>
</ul>
</div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
<div class="text-red-700 font-semibold">还没有说明</div>
<ul class="mt-3 text-sm leading-relaxed">
<li>受到较大外部干扰时，机器人能否自主重新规划。</li>
<li>上肢操作、接触理解和复杂任务是否同样可靠。</li>
<li>表演训练能否迁移到没有预先编排的工作。</li>
</ul>
</div>
</div>

<div class="mt-5 text-sm opacity-70">舞蹈动作可以很复杂，但它仍然是预先安排好的动作序列。</div>

---

# 招股书里的业务迁移

<div class="text-xs opacity-70">宇树人形业务收入占比；数字为节目对招股书数据的复述。</div>
<div class="grid grid-cols-4 gap-3 mt-4">
<div class="rounded-lg bg-blue-50 p-4 text-center"><div class="text-3xl text-blue-700 font-semibold">&lt;2%</div><div class="mt-2 text-xs">2023 年</div></div>
<div class="rounded-lg bg-green-50 p-4 text-center"><div class="text-3xl text-green-700 font-semibold">27%</div><div class="mt-2 text-xs">2024 年</div></div>
<div class="rounded-lg bg-orange-50 p-4 text-center"><div class="text-3xl text-orange-700 font-semibold">51%</div><div class="mt-2 text-xs">2025 年前三季度</div></div>
<div class="rounded-lg bg-red-50 p-4 text-center"><div class="text-3xl text-red-700 font-semibold">约 63%</div><div class="mt-2 text-xs">人形业务毛利</div></div>
</div>
<div class="mt-5 grid grid-cols-2 gap-3 text-sm leading-relaxed">
<div class="rounded-lg border border-blue-500 bg-blue-50 p-3">四足机器人先提供现金流，人形机器人逐步成为更大的收入方向。</div>
<div class="rounded-lg border border-orange-500 bg-orange-50 p-3">高毛利来自科研市场的供需关系，不能直接等同于大规模商业化。</div>
</div>

---
layout: two-cols
---

# G1 的定义，先解决科研市场

- H1 约 1.8 米，G1 约 1.3 米；缩小身高也降低了整机质量。
- 更轻的本体减轻电机、运动性能与电池的压力。
- 对科研任务来说，小人形与全尺寸人形可以研究相近的问题。
- G1 因此是面向科教场景正向设计的产品，而不是把大机器人简单缩小。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./g1-design.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 硬件公司的护城河在量产之后

- 做出一两台样机并不难，难的是让上千台机器长期可靠地工作。
- 宇树在 G1 之前已经卖出数万台四足机器人，积累了电机设计、供应链与测试经验。
- 每台四足至少有 12 个电机；长期量产让这些零部件经历了真实验证。
- 这类时间成本难以压缩，硬件领先窗口可能比模型领先窗口更长。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hardware-moat.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 宇树为什么能活到具身热潮到来

<div class="grid grid-cols-2 gap-4 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
<div class="text-blue-700 font-semibold">经营先于想象</div>
<div class="mt-3 text-sm leading-relaxed">2019 年，宇树规模很小，却已经靠机器狗销售获得约 1000 万元收入并保持盈利。没有稳定收入，公司很难等到后来的具身热潮。</div>
</div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-5">
<div class="text-green-700 font-semibold">创始人长期专注</div>
<div class="mt-3 text-sm leading-relaxed">王星星没有急着追逐 AI 或消费端故事，而是持续把四足本体、核心零部件和产品做深。</div>
</div>
</div>
<div class="mt-5 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">节目中的经验判断是：模型公司的领先优势可能只有 3–6 个月，硬件公司的优势可能来自 12–24 个月的验证与供应链积累。</div>

---

# 下一阶段，宇树可能靠生态位继续赢

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">硬件标准</div><div class="mt-2 text-sm leading-relaxed">如果全球研究者持续用宇树本体做实验，G1 就会成为科研市场的事实标准。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">模型绑定</div><div class="mt-2 text-sm leading-relaxed">外部团队在 G1 上发布开源模型，模型生态也会反过来加强硬件的使用频率。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">智能跟随</div><div class="mt-2 text-sm leading-relaxed">陈哲判断，宇树在大脑部分长期采取跟随策略，也可能凭借本体与生态保持竞争力。</div></div>
</div>
<div class="mt-5 text-sm opacity-70">节目提到：宇树计划募资 40 亿元，其中 20 亿元拟投入大脑研究；这意味着它开始补上此前较弱的一环。</div>

---

# 打网球：从编排动作到实时闭环

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">速度</div><div class="mt-2 text-sm leading-relaxed">网球速度可达每小时 100 公里，机器人只有很短时间判断球路。</div></div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4"><div class="text-green-700 font-semibold">闭环</div><div class="mt-2 text-sm leading-relaxed">每次来球都不同，系统需要感知、决策、全身控制和挥拍连续工作。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">边界</div><div class="mt-2 text-sm leading-relaxed">演示依赖场外摄像头与外部算力，还不能直接代表端侧量产能力。</div></div>
</div>
<div class="mt-6 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">它的价值首先是把“现在的技术组合能做到什么”变成了可见的答案；下一步才是把外部设备和专门训练逐步压缩。</div>

---
layout: two-cols
---

# 全身运控开始合流

- 过去两年，locomotion 与 manipulation 更像两个独立系统。
- 今年开始，Figure、智元和英伟达等团队都在尝试统一模型。
- 一个模型同时处理身体运动和上肢操作，才更接近复杂任务需要的闭环。
- 陈哲认为，这个范式刚露出端倪，未来一年可能继续加速。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./whole-body.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 人形价值，重新落到空间与重心

- 过去的质疑是：工厂里只要两只手，轮子似乎就能解决移动。
- 但在同样需要搬运和上下取放的任务里，轮式底盘要用更大的重量对抗重心变化。
- 人形可以用身体和腿动态调节姿态，在狭窄空间里保持较小占地。
- 比较形态时，不能只比较腿与轮子，还要比较总重量、所需电机、触达范围和环境适配。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./human-form.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# Atlas 不必复制人的每一处限制

- 新版电动 Atlas 采用少数标准化旋转电机，并用性能冗余换取多功能。
- 头部与躯干可以 360° 旋转，左右腿甚至可以互换。
- 模块化同时降低生产、组装和现场替换的难度。
- 这套设计也回应了美国缺少熟练技术工人的制造现实：结构越简单，装配越可控。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./atlas-modular.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 美国公司的位置，不只由融资额决定

<div class="grid grid-cols-2 gap-3 mt-4">
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3"><div class="text-red-700 font-semibold">Tesla Optimus</div><div class="mt-1 text-sm leading-relaxed">Gen3 追求高自由度身躯与量产，手部方案成为硬件挑战。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3"><div class="text-purple-700 font-semibold">Figure</div><div class="mt-1 text-sm leading-relaxed">同时做本体和模型，Helix 试图统一低频到高频的全身运动。</div></div>
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3"><div class="text-blue-700 font-semibold">Boston Dynamics</div><div class="mt-1 text-sm leading-relaxed">电动 Atlas 继续推进本体，Google 合作补上模型与研究一侧。</div></div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3"><div class="text-green-700 font-semibold">Physical Intelligence</div><div class="mt-1 text-sm leading-relaxed">轻硬件、重模型与数据，重点在跨本体和动态环境的适应。</div></div>
</div>
<div class="mt-4 text-sm opacity-70">美国的困难还包括本土零部件与复杂硬件供应链不足；Figure 的高融资额也包含了重建制造能力的成本。</div>

---
layout: two-cols
---

# Optimus 的灵巧手，把仿生带进量产难题

- 绳驱把电机放到前臂，用腱绳模拟肌肉—肌腱结构，目标是更灵活的手指运动。
- 手腕和手掌的有限空间里，需要安排四十多根腱绳。
- 腱绳松动、柔变、磨损、替换与重新装配，都会影响一致性和维修成本。
- 仿生类比并不自动带来工程优势：电机和齿轮不是可再生的肌肉组织。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hand-challenge.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 触觉是模型之外的一条信息通道

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">视觉先猜</div><div class="mt-2 text-sm leading-relaxed">看到杯子或易拉罐，人可以先估计材质、摩擦和重量。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">接触再改</div><div class="mt-2 text-sm leading-relaxed">真正碰到物体后，手指根据位置、压力和滑动修正动作。</div></div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4"><div class="text-red-700 font-semibold">当前缺口</div><div class="mt-2 text-sm leading-relaxed">VLA 与世界模型的主流训练范式，仍主要围绕视觉与动作，触觉积累不足。</div></div>
</div>
<div class="mt-6 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">作者概括：世界模型可以补足“接下来会发生什么”的预测，但触觉仍要由具身系统自己采集、建模并接入末端控制。</div>

---
layout: two-cols
---

# System 2、System 1、System 0

- System 2 用文本做低频、高维的任务规划。
- System 1 结合图像、视频、机器人状态与任务描述，给出粗略轨迹。
- System 0 接收触觉和粗轨迹，在接触发生后控制每个手指与关节。
- 这套分层结构对应人的大脑、小脑与末端神经反应。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./system-210.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么灵巧手成为下一处研究入口

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">运动问题先被推进</div><div class="mt-2 text-sm leading-relaxed">四足运控、人形 locomotion 和两指夹爪已经积累了大量工作，研究者开始寻找下一道难题。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">操作需要更多自由度</div><div class="mt-2 text-sm leading-relaxed">复杂抓取、旋拧和接触任务，往往不能由低自由度夹爪完成。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">末端决定数据质量</div><div class="mt-2 text-sm leading-relaxed">手的结构、传感器和数据采集方式，会直接影响模型是否能学到可迁移的操作。</div></div>
</div>

---

# Shadow 的机会，和它必须克制的地方

<div class="grid grid-cols-2 gap-4 mt-5">
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-5">
<div class="text-green-700 font-semibold">成为研究标准的条件</div>
<ul class="mt-3 text-sm leading-relaxed">
<li>足够可靠，能完成复杂操作。</li>
<li>自由度足够高，并带有传感器和触觉。</li>
<li>成本、开发环境和复现条件可接受。</li>
</ul>
</div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5">
<div class="text-orange-700 font-semibold">产品路径的取舍</div>
<ul class="mt-3 text-sm leading-relaxed">
<li>Shadow 的手在 2025 年 ICRA 现场引起关注，海外研究者开始使用。</li>
<li>节目提到单只手约 5 万美元，部分学校通过补贴采购。</li>
<li>过早追求商业闭环，可能削弱与科研市场共同打磨产品的机会。</li>
</ul>
</div>
</div>

---
layout: two-cols
---

# 数据金字塔：越接近机器人，越准也越贵

- 遥操作数据最准确地对应机器人的关节和电机状态。
- Yumi、DexYumi 让人类操作与机器人末端保持同构，牺牲一部分自由度换取迁移质量。
- EgoScale 扩大第一视角人类操作数据，规模更大，但人与机器人之间仍有自由度差距。
- 互联网视频数量最多，却不一定包含可执行的机器人动作。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-pyramid.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据问题还没有被解决

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">规模目标</div><div class="mt-2 text-sm leading-relaxed">国内不少团队希望采集百万小时真实数据，但有效数据还要经过清洗、标注和筛选。</div></div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4"><div class="text-red-700 font-semibold">迁移缺口</div><div class="mt-2 text-sm leading-relaxed">人的手腕、手指和上半身自由度更开放，第一视角视频不一定能直接迁移到机器人。</div></div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4"><div class="text-green-700 font-semibold">仿真作用</div><div class="mt-2 text-sm leading-relaxed">仿真可以生成或扩充数据，但它是一种手段，不代表真实数据瓶颈已经消失。</div></div>
</div>
<div class="mt-6 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">当前更准确的结论是：行业看到了扩大数据的方法，还没有证明数据已经足够。</div>

---
layout: two-cols
---

# 世界模型，先预测再行动

- 世界模型的宽泛定义是：根据当前观测，预测未来会发生什么。
- 在机器人里，它可以把视频生成当作仿真器，脑补动作带来的环境变化。
- 预测结果既能用于动作仿真，也能帮助生成 policy。
- 这条路线把时间、因果和环境互动纳入了控制问题。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# DreamZero、DreamDojo 与 WAM 各自做什么

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">DreamDojo</div><div class="mt-2 text-sm leading-relaxed">把视频世界模型理解成仿真器，根据当前图像渲染未来世界。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">DreamZero</div><div class="mt-2 text-sm leading-relaxed">从视频与任务出发，输出机器人要执行的策略和动作。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">WAM</div><div class="mt-2 text-sm leading-relaxed">通过对未来的“脑补”建立因果推理，再生成与环境变化相符的动作。</div></div>
</div>
<div class="mt-6 text-sm opacity-70">节目中的判断是：这是一种脱离“文字描述—动作克隆”的新控制范式，但仍处在研究阶段。</div>

---
layout: two-cols
---

# VLA 与世界模型：两种智能互补

- VLA 以语言模型为骨干，把图像与文字映射为动作；它擅长语义描述，却容易受训练分布限制。
- 世界模型以视频生成模型为骨干，试图预测动作之后的环境变化。
- 语言对应更低频、更复杂的推理；视频对应更实时、更贴近环境的互动。
- 通用机器人同时需要两种能力，不能只押注其中一条。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./wm-compare.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 新范式的瓶颈：基座、数据与算力

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4"><div class="text-red-700 font-semibold">推理速度</div><div class="mt-2 text-sm leading-relaxed">节目提到 DreamZero 运行约 7 Hz；速度可以优化，但前提是先找到正确路线。</div></div>
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">开源基座</div><div class="mt-2 text-sm leading-relaxed">许多机器人世界模型使用 Wan 2.1 或 2.2，但它们并非为机器人视频生成而设计。</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">训练成本</div><div class="mt-2 text-sm leading-relaxed">视频数据、存储和反复试验都很重；复制几个 PB 数据本身就可能产生几十万元成本。</div></div>
</div>
<div class="mt-6 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">世界模型的理论上限更高，也更依赖大厂的算力、数据和训练配方；这让创业公司的切入方式必须更具体。</div>

---

# 创业公司的可行位置，在模型与本体之间

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">继续训练</div><div class="mt-2 text-sm leading-relaxed">不一定从零训练最大的视频基座，可以在已有模型上加入自己的数据继续训练。</div></div>
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4"><div class="text-green-700 font-semibold">解决耦合</div><div class="mt-2 text-sm leading-relaxed">触觉、灵巧手、末端执行器和真实场景数据，仍需要具身公司自己打磨。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">积累场景知识</div><div class="mt-2 text-sm leading-relaxed">长期具体任务中的数据与 know-how，未必会被所有大厂同时拥有。</div></div>
</div>
<div class="mt-6 text-sm opacity-70">大厂擅长寻找可规模化的方法，创业公司的价值可能来自那些难以抽象、却直接决定落地的细节。</div>

---
layout: two-cols
---

# 端侧算力：从云端统治到量产取舍

- 人形机器人实时推理目前更常采用英伟达车载芯片，如 Orin 或 Thor；Jetson 的算力被认为不够。
- 机器人模型的复杂度不低于自动驾驶模型，短期内还不到优先节省算力的阶段。
- 真正进入量产后，功耗、成本和供应稳定性会改变芯片竞争格局。
- 地平线、地瓜以及传统 ARM、MCU 方案，都可能在商用与消费机器人中占据位置。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./edge-compute.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 通用机器人可能走向高集中度

<div class="grid grid-cols-2 gap-4 mt-5">
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
<div class="text-blue-700 font-semibold">单任务机器人</div>
<div class="mt-3 text-sm leading-relaxed">无人机、扫地机、割草机和仓储机器人围绕明确任务优化，创业公司可以先在一个场景里积累光机电、精密工程与量产能力。</div>
</div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5">
<div class="text-orange-700 font-semibold">通用机器人</div>
<div class="mt-3 text-sm leading-relaxed">如果一个通用形态能覆盖足够多的任务，软硬件复利、规模和供应链会把市场推向少数赢家。</div>
</div>
</div>
<div class="mt-5 text-sm leading-relaxed">从单任务产品走向多任务产品，不只是增加一个功能，也会改变组织的技术结构与学习方式。</div>

---

# 上市潮把什么推到台前

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4"><div class="text-green-700 font-semibold">真实经营</div><div class="mt-2 text-sm leading-relaxed">宇树有真实用户、收入与产品交付，因此它的上市比单纯概念更能代表行业进入新阶段。</div></div>
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">人才与资本</div><div class="mt-2 text-sm leading-relaxed">成功退出的示范会吸引更多学生、工程师和投资进入具身智能。</div></div>
<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4"><div class="text-red-700 font-semibold">泡沫与淘汰</div><div class="mt-2 text-sm leading-relaxed">节目中的粗略统计是：估值超过 100 亿元人民币的具身公司已超过 20 家，但真正落地还需要时间。</div></div>
</div>
<div class="mt-5 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">陈哲同时提醒：具身的商业化距离仍比大模型更远，市场预期未来可能经历调整、吸收和淘汰。</div>

---

# 接下来两个季度，观察三个信号

<div class="grid grid-cols-3 gap-3 mt-5">
<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4"><div class="text-purple-700 font-semibold">世界模型结果</div><div class="mt-2 text-sm leading-relaxed">谁能拿出显著超越现有 VLA 路线的机器人演示或实验结果？</div></div>
<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4"><div class="text-orange-700 font-semibold">触觉操作</div><div class="mt-2 text-sm leading-relaxed">更多研究者拿到高自由度、带触觉的手之后，会出现哪些可复现的复杂操作？</div></div>
<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"><div class="text-blue-700 font-semibold">亦庄比赛</div><div class="mt-2 text-sm leading-relaxed">高密度的人形机器人运动比赛，是否会像汽车的 F1 一样催生新方案？</div></div>
</div>
<div class="mt-6 text-sm opacity-70">比赛的意义不只在表演，也在于给不同团队一个公开、可理解、可比较的技术场景。</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-2 mt-3">
<div class="rounded-lg bg-blue-50 p-2"><div class="text-xs text-blue-700">春晚与一致性</div><div class="mt-1 text-xs leading-relaxed">“其实我看今年春晚，我觉得最关键的是一致性。”</div><div class="text-xs opacity-50">陈哲｜谈二十多台 G1 同步完成动作</div></div>
<div class="rounded-lg bg-green-50 p-2"><div class="text-xs text-green-700">经营与生存</div><div class="mt-1 text-xs leading-relaxed">“宇树为什么是一家盈利的公司？是它不得不盈利。”</div><div class="text-xs opacity-50">陈哲｜回忆 2019 年的宇树</div></div>
<div class="rounded-lg bg-orange-50 p-2"><div class="text-xs text-orange-700">G1 的产品定义</div><div class="mt-1 text-xs leading-relaxed">“G1是宇树第一台真正为科研市场正向设计的机器人。”</div><div class="text-xs opacity-50">陈哲｜解释 G1 为什么难以被跟随</div></div>
<div class="rounded-lg bg-purple-50 p-2"><div class="text-xs text-purple-700">能力与价值</div><div class="mt-1 text-xs leading-relaxed">“当一个机器人真正实现某一种能力，当一个机器人真正稳定的交付某一种能力的时候，它可以做的事情，或者它可以创造的价值，会得到一个快速的释放。”</div><div class="text-xs opacity-50">陈哲｜解释他重新看待人形机器人的原因</div></div>
<div class="rounded-lg bg-red-50 p-2 col-span-2"><div class="text-xs text-red-700">Atlas 与形态</div><div class="mt-1 text-xs leading-relaxed">“人形机器人也不一定真的非要一定像人，它可以做一个超人，它可以超越人的某些结构”</div><div class="text-xs opacity-50">陈哲｜谈新版电动 Atlas</div></div>
</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-2 mt-3">
<div class="rounded-lg bg-orange-50 p-2"><div class="text-xs text-orange-700">仿生的边界</div><div class="mt-1 text-xs leading-relaxed">“你用一个不是肌肉的东西去模仿肌肉的表现，然后你预期它有同样的性能，这个本身就并不符合第一性。”</div><div class="text-xs opacity-50">陈哲｜讨论 Optimus 的绳驱灵巧手</div></div>
<div class="rounded-lg bg-blue-50 p-2"><div class="text-xs text-blue-700">触觉的作用</div><div class="mt-1 text-xs leading-relaxed">“触觉对于我们最终这个任务的实现是非常重要的。”</div><div class="text-xs opacity-50">陈哲｜解释视觉预测与接触修正</div></div>
<div class="rounded-lg bg-purple-50 p-2"><div class="text-xs text-purple-700">世界模型</div><div class="mt-1 text-xs leading-relaxed">“我们有一个基于现在的观测，可以预测未来会发生什么事情的这样一个模型，叫做世界模型。”</div><div class="text-xs opacity-50">陈哲｜给世界模型下一个宽泛定义</div></div>
<div class="rounded-lg bg-green-50 p-2"><div class="text-xs text-green-700">数据质量</div><div class="mt-1 text-xs leading-relaxed">“最精准的、最高效的数据肯定是机器人直接的遥操作数据”</div><div class="text-xs opacity-50">陈哲｜解释数据金字塔</div></div>
<div class="rounded-lg bg-red-50 p-2 col-span-2"><div class="text-xs text-red-700">市场形态</div><div class="mt-1 text-xs leading-relaxed">“赢家会高度收敛。”</div><div class="text-xs opacity-50">陈哲｜讨论通用机器人与复杂芯片的市场结构</div></div>
</div>

---
layout: end
---

# 留下一个还没有答案的问题

<blockquote>
我觉得这个到今天我还是没有特别清晰的答案。
</blockquote>

<div class="mt-6 text-sm opacity-70">陈哲｜关于人形是不是通用机器人的最优解</div>
<div class="mt-10 text-sm opacity-50">下一期季报，再用新的供给和新的证据检验它。</div>
