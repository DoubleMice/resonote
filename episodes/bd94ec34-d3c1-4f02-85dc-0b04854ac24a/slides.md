---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "152: 千寻智能韩峰涛：具身模型淘汰赛和落地的非共识"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 152: 千寻智能韩峰涛

## 具身模型淘汰赛和落地的非共识

<div class="mt-10 text-lg opacity-80">晚点聊 LateTalk · 2026 年 2 月</div>

<div class="mt-4 text-xl">嘉宾：千寻智能创始人兼 CEO 韩峰涛</div>

<div class="mt-14 text-sm opacity-70">一位经历过工业机器人周期的创业者，如何把 2026 年押在数据、基模与速度上。</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 01｜不是先谈订单

韩峰涛把行业的第一道关卡放在数据供给，而非短期营收。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 02｜大脑优先

机器人本体仍要自己做，但具身模型被视为决定规模的核心。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 03｜真实数据路线

视频、可穿戴设备、遥操作与强化学习构成一套数据配方。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 04｜落地是探索

宁德时代的插拔检测既验证场景，也让模型获得真实反馈。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 05｜周期留下的教训

磨刀工作站技术很强，却只有八台需求；市场大小不能事后再补。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 06｜淘汰赛的尺度

在他看来，2026 年先比模型能力和数据加速度，随后才是放量。

</div>

</div>

---

# 从工业机器人走来，先看见了市场的边界

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2014 年

<div class="text-3xl font-bold text-blue-600 my-2">8 万台</div>

<div class="text-sm opacity-70">韩峰涛回忆，中国当年工业机器人年销量约为 8 万台。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2024 年

<div class="text-3xl font-bold text-green-600 my-2">30 万台</div>

<div class="text-sm opacity-70">他给出的中国年销量约为 30 万台，国产份额已超过 50%。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 关键限制

<div class="text-xl font-bold text-orange-600 my-3">机器人太笨</div>

<div class="text-sm opacity-70">能做的任务窄，制造业中大量工作仍无法交给机器人。</div>

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
第一次创业让他形成一个判断：进口替代可以推动出货与国产化，但若能力只覆盖少数固定工序，市场空间和利润都会受限。
</div>

---

# 一次国产替代，并不自动等于大生意

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 全球销量

<div class="text-3xl font-bold text-blue-600 my-2">50 万台</div>

<div class="text-sm opacity-70">韩峰涛称，2024 年全球工业机器人总销量约为 50 万台。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 单台价格

<div class="text-3xl font-bold text-orange-600 my-2">2 万美元</div>

<div class="text-sm opacity-70">这是他用来估算全球市场规模的平均单价。</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 合计市场

<div class="text-3xl font-bold text-red-600 my-2">100 亿美元</div>

<div class="text-sm opacity-70">他的结论是，行业有价值，却同时面对有限空间和充分竞争。</div>

</div>

</div>

<div class="mt-5 text-sm opacity-80">这些数字来自韩峰涛在访谈中的估算，意在说明工业机器人的市场体量与大规模消费品不同。</div>

---
layout: two-cols-header
---

# 从控制器到物理世界大模型

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
上一轮智能机器人依靠力控、3D 视觉和规则控制，能解决少数高难度任务。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
韩峰涛认为，ChatGPT 之后的大模型才提供了开发通用机器人的全栈技术基础。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
千寻想做的，是让模型理解物理世界，再控制不同形态的机器人完成工作。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./evolution-path.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么这次把重点放在大脑

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 他熟悉的是硬件

韩峰涛做过一体化关节、整机和机器人控制器。按经验，他本可以继续做本体或零部件。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 他押注的是模型

他的判断是：这轮具身智能最大的机会在大脑。更强的模型才能扩大机器人可以胜任的工作范围。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这不意味着硬件可以缺席。面向早期客户，千寻仍要交付完整机器人，才能控制性能、体验，并直接拿到现场反馈与数据。
</div>

---

# 中国创业公司的另一条约束

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 只卖模型，客户很难买单

客户不会单独采购模型，再找另一家机器人公司拼成可用方案。行业早期，性能与销售都难以拆开。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 先做成中等规模的公司

韩峰涛认为，中国的大厂普遍会自建能力。创业公司必须把阶段性的技术优势转为一个细分市场中的位置。

</div>

</div>

<div class="mt-5 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
他的路径因此是模型、本体与商业化同时具备：先用完整产品接住客户，再把技术优势变成可复制的产品能力。
</div>

---

# 十万台，是他给中等规模公司设的门槛

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 年销量目标

<div class="text-3xl font-bold text-purple-600 my-2">10 万台</div>

<div class="text-sm opacity-70">韩峰涛用这个量级定义能与大厂周旋的中等规模机器人公司。</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 内部时间表

<div class="text-3xl font-bold text-blue-600 my-2">2030 年</div>

<div class="text-sm opacity-70">他预计创业公司需要在约五到六年内达到这一位置。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 终局判断

<div class="text-3xl font-bold text-green-600 my-2">5–8 家</div>

<div class="text-sm opacity-70">这是他对全球综合性机器人大厂数量的主观看法。</div>

</div>

</div>

---
layout: two-cols-header
---

# 有了本体，才能让数据变成闭环

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
客户买的是可工作的机器人，而不是孤立的模型。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
自有硬件让团队能看见性能问题，也能从现场获得反馈数据。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
模型更新后再回到现场验证，才形成产品与训练互相推动的循环。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./deployment-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 选合伙人，也是在为二十年做准备

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 通讯录筛选

<div class="text-3xl font-bold text-blue-600 my-2">6,000+</div>

<div class="text-sm opacity-70">韩峰涛从自己的微信联系人中逐一寻找能介绍 AI 合伙人的人。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 初步接触

<div class="text-3xl font-bold text-orange-600 my-2">100+</div>

<div class="text-sm opacity-70">2023 年大半年里，他前后见了 100 多位候选人。</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 最终磨合

<div class="text-3xl font-bold text-purple-600 my-2">十几次</div>

<div class="text-sm opacity-70">他与高阳反复讨论分工、分歧和长期承诺后决定共同创业。</div>

</div>

</div>

---

# 信任如何成为纠错机制

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 把意见先当成善意

韩峰涛对信任的解释很具体：同事提出意见或建议时，不先进入防备状态。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 错误更容易被别人指出

他认为，人不容易自己发现错误；更常见的情况是别人指出问题，而团队能否接受决定了纠错速度。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这也是两位创始人如何处理直觉冲突的组织答案：把不同意见视作对事不对人的信息，而不是权力争夺。
</div>

---
layout: two-cols-header
---

# 全栈能力，最后要在客户现场接起来

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
千寻所说的全栈，指 AI、硬件与客户理解必须同时具备。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
模型决定机器人能否理解空间和调整轨迹；本体提供执行能力；现场决定任务是否值得做。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
任一环节脱节，模型表现、交付成本或场景规模都会成为瓶颈。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./brain-body.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 行业很早期，为什么已经这么喧闹

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 估值先行

韩峰涛观察到，行业尚未规模交付，但市场给出的估值已快速上升。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 路线未定

有人做大脑，有人优先做落地，也有人做硬件或传感器，投资人的判断并不一致。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 认知开始收敛

在他的叙述中，2025 年下半年以来，更多资金开始把具身模型和数据当作核心。

</div>

</div>

---

# 他的非共识：2026 年先看模型，不先看收入

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前位置

<div class="text-2xl font-bold text-blue-600 my-2">类似 GPT-2</div>

<div class="text-sm opacity-70">韩峰涛用这一类比描述具身模型的基本能力仍在早期。</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 2026 年重点

<div class="text-2xl font-bold text-purple-600 my-2">性能爬坡</div>

<div class="text-sm opacity-70">先用数据和预训练把基本能力推高，再减少每个场景的定制工作。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 大规模落地

<div class="text-2xl font-bold text-green-600 my-2">27 年下半年至 28 年</div>

<div class="text-sm opacity-70">这是韩峰涛的主观预期，并非行业已经达成的时间表。</div>

</div>

</div>

---
layout: two-cols-header
---

# 他给出的能力爬坡顺序

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
先解决数据，才有机会做足够规模的预训练。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
基本能力达到可用水平之后，微调、推理与具体任务的工作量才会下降。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
最后才是把模型批量部署到一个明确的应用场景，而非逐台做项目交付。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-roadmap.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 真实数据路线：不是只选一种采集方式

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 视频数据

让模型观察人类如何做事，学习动作与常识；千寻把它用于预训练。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可穿戴设备

让人工作时同步记录动作，是团队试图低成本、大批量获取真实数据的主路径。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 遥操作与强化学习

遥操作提供高质量微调数据；机器人在真实场景中失败的案例，再回流为训练信号。

</div>

</div>

---

# 为什么不把仿真放在主路径

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 技术判断

韩峰涛认为，仿真到真实环境之间的差距难以完全补齐。机器人要接触物体，误差会在交互中累积。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 类比自动驾驶

他以自动驾驶为参照：即使车辆不需要接触环境，真实数据仍是重要来源；机器人处理接触任务时更难只靠仿真。

</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这是一条团队路线选择，不是对其他数据方法的普遍否定。访谈中也提到，行业内有公司更侧重仿真数据。
</div>

---

# 从 20%—30% 到 95%，可穿戴设备要先变得可用

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 早期可用性

<div class="text-3xl font-bold text-red-600 my-2">20%–30%</div>

<div class="text-sm opacity-70">韩峰涛称，早期数据相对遥操作只能达到这个可用区间。</div>

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 迭代次数

<div class="text-3xl font-bold text-blue-600 my-2">近 100 次</div>

<div class="text-sm opacity-70">设备、切段标注、质检和算法一起调整，而不是只改模型结构。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 目标结果

<div class="text-3xl font-bold text-green-600 my-2">95%</div>

<div class="text-sm opacity-70">他称，可穿戴设备的数据可用性已从 30% 提升至 95%。</div>

</div>

</div>

---
layout: two-cols-header
---

# 可穿戴设备是一套数据配方

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Umi 类设备主要记录手部动作；若只训练双臂，这类数据有用，但覆盖有限。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
外骨骼可获得更多手臂构型信息；动捕则面向更精确的全身数据。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
千寻把这些设备组合使用，并用较低成本传感器与算法做全身数据采集。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./data-recipe.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 数据规模的下一步，关键在采集加速度

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 已有视频数据

<div class="text-3xl font-bold text-blue-600 my-2">20 万小时</div>

<div class="text-sm opacity-70">韩峰涛说，团队过去两年积累了这一量级的视频数据。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2026 年计划

<div class="text-3xl font-bold text-green-600 my-2">100 万小时</div>

<div class="text-sm opacity-70">目标是用可穿戴设备采集真实工作数据。</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 对照量级

<div class="text-3xl font-bold text-purple-600 my-2">100 倍</div>

<div class="text-sm opacity-70">他用 1 万小时遥操作数据作对照，说明计划中的数量级跃升。</div>

</div>

</div>

---

# 商业化不是主线，却不能等到最后

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么大部分资源仍投向基模

在访谈中，韩峰涛说公司超过 80% 的资源用于突破数据瓶颈；对 2026、2027 年，他预计约 90% 的精力会放在基本能力提升。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 为什么仍要试客户场景

机器人不是只有模型。产品形态、市场需求和首批任务必须提前摸清；一些工厂与物流数据也只有进入现场后才有机会采集。

</div>

</div>

---

# 宁德时代：现场交付同时为模型补数据

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 开始探索

<div class="text-3xl font-bold text-blue-600 my-2">2025 年元旦</div>

<div class="text-sm opacity-70">韩峰涛说，团队在这一时间开始与宁德时代推进合作场景。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 从接触到验收

<div class="text-3xl font-bold text-orange-600 my-2">11 个月</div>

<div class="text-sm opacity-70">其中包含现场交付、非模型工作和工程改造的时间。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现场原则

<div class="text-xl font-bold text-green-600 my-3">研发到现场</div>

<div class="text-sm opacity-70">团队在工厂写代码、改模型，而不是把模型交给远端人员处理。</div>

</div>

</div>

---

# 从近 200 道工序中，选出插拔检测

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 能测试端到端模型

无需先为现场做非标自动化改造，机器人可以直接接替人完成任务。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 需要力控

插拔动作本身需要力控能力，能够检验机器人本体与模型的配合。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 节拍较慢、容错较高

第一次没有插入时可以重试；插头较大，也降低了损坏风险。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 可以收集强化学习数据

机器人上真实产线后，失败案例能回流，跑通数据到模型的整个链路。

</div>

</div>

---

# 工程交付与标品之间，差的是基模

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 基模较弱时

一个场景需要专门采数据、做后训练与工程化，宁德时代项目因此配了专门小分队，复制成本很高。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 基模更强时

韩峰涛设想的产品是标准机器人、模型和数据管理能力。客户可在其上微调和部署自己的任务。

</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
他估计，基于 2025 年上半年的模型，宁德场景需要两到三个月；基于当时最新模型则可能缩短到一个月。这是嘉宾的项目判断，不是已完成的计时结果。
</div>

---
layout: two-cols-header
---

# 把最后一百米，变成客户能自己走的路

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
直接派研发做最后一百米交付，能解决早期问题，却难以低成本复制。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
千寻希望把标准机器人、具身模型与数据管理能力做成平台。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
客户拿到平台后自行采集、微调和部署，相当于在物理世界构建自己的 Agent。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./deployment-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 具身机器人要处理专机难做的任务

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 专机适合固定环境

以零售取物为例，传统方案要求货架整齐、间隙充足、放置位置固定；它通常只能做取放，难以盘点或应对变化。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 具身模型瞄准泛化

酒店清洁、收毛巾、整理物品这类任务，场景与动作都在变化。韩峰涛把这种泛化能力视为具身机器人的切入点。

</div>

</div>

---
layout: two-cols-header
---

# 先到 B 端，家庭真正的障碍是安全

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
韩峰涛认为，动力电池、物流、酒店和零售更适合作为早期场景：市场大、客户集中且有付费能力。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
他对模型进入家庭环境的能力较乐观，但认为产品进入家庭还要处理隐私与安全。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
几十公斤的机器人可能倾倒；其电池容量约为电动自行车的三倍。这些是比任务能力更直接的家庭门槛。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./market-selection.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 磨刀工作站：技术到顶，市场只有八台

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 技术任务

<div class="text-xl font-bold text-blue-600 my-3">陶瓷刀磨削</div>

<div class="text-sm opacity-70">需要精确视觉、力控与轨迹规划，韩峰涛称团队后来超过了三菱的效果。</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 全球需求

<div class="text-3xl font-bold text-red-600 my-2">8 台</div>

<div class="text-sm opacity-70">他用这个案例说明：技术难度和可销售市场不是同一件事。</div>

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 留下的原则

<div class="text-xl font-bold text-orange-600 my-3">先选大市场</div>

<div class="text-sm opacity-70">若每个行业都要深度定制，商业化本身也无法规模化。</div>

</div>

</div>

---

# 大厂入场前，创业公司依靠什么

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 他的时间判断

韩峰涛预计，28、29 年后，大厂可能把具身作为更重要的战略投入。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 创业公司的窗口

在大厂资源大规模进入之前，团队要用速度把技术领先转为产品、数据和市场位置。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 2026 年的筛选

他给出的标准包括 AI 背景、足够资金、数据生产速度，以及可落地的商业化计划。

</div>

</div>

---

# 传统机器人经验，要向数据驱动让位

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 一次内部冲突

早期团队没有足够自有机器人采数据。韩峰涛起初不愿购买外部机械臂，高阳则认为模型不能等，必须先采数据迭代。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 后来的边界

韩峰涛逐渐把具身视作 AI 赛道：空间理解和轨迹规划交给模型；小脑只负责基础运动学与动力学。

</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
这次转变也解释了为何数据要与自有本体开发解耦：机器人的构型可以不同，但模型的学习不能停下来。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-70 mb-3">关于行业阶段、数据与速度</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">“26年模型才是爆发的元年”<div class="text-xs opacity-70 mt-1 not-italic">— 对 2026 年竞争主题的判断</div></div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“数据的加速度更重要。”<div class="text-xs opacity-70 mt-1 not-italic">— 评价数据能力时，看生产速度而不只看存量</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“在你解决卡点之前，你要聚焦；在你解决卡点之后，你要看速度。”<div class="text-xs opacity-70 mt-1 not-italic">— 解释团队为何在前两年先压住战线</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“速度是我们唯一的优势”<div class="text-xs opacity-70 mt-1 not-italic">— 面对大厂可能入场时的创业公司判断</div></div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic col-span-2">“我们百分之九十的精力都会放在基本能力提升上”<div class="text-xs opacity-70 mt-1 not-italic">— 对预训练与商业化资源分配的表述</div></div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-70 mb-3">关于客户、市场和组织</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">“全球一共只有八台的需求。”<div class="text-xs opacity-70 mt-1 not-italic">— 回看陶瓷刀磨削工作站时的市场教训</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“你这玩意儿跟我没关系啊。”<div class="text-xs opacity-70 mt-1 not-italic">— 韩峰涛转述客户对脱离现场方案的反馈</div></div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“见过客户之后，见过客户，等客户跟你要你我付了钱东西在哪之后，一定会改变的。”<div class="text-xs opacity-70 mt-1 not-italic">— 他谈第一次创业者如何获得商业判断</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“基模太弱了。”<div class="text-xs opacity-70 mt-1 not-italic">— 早期现场工程成本高的根源</div></div>

</div>

---
layout: end
---

# “在大厂下场之前把自己变成中厂。”

<div class="mt-6 text-lg opacity-80">韩峰涛把这段窗口期定义为：用数据和模型能力换取速度。</div>

<div class="mt-10 text-sm opacity-70">晚点聊 LateTalk · 第 152 期</div>
