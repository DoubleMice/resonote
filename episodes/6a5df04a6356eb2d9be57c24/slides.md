---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 43.「26Q2」大模型半年报：RSI，Fable，5.2，混元3，龙猫，到处都是斩杀线 - 王铁震
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 26Q2 大模型半年报

## RSI、Fable、GLM-5.2、混元 3 与龙猫 2.0

<div class="mt-8 text-lg opacity-70">王铁震 · 台前之火 · 2026 年 7 月</div>

<div class="mt-12 text-sm opacity-60">一场关于模型能力、数据闭环与行业竞争位置的季度复盘</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**RSI 的边界**

模型可以反复试验，却仍需要人给出目标、抽象和外部信息。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**模型与人的分工**

代码由谁写不等于决策由谁做；架构与验收仍是关键环节。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**数据成为产品能力**

录屏、反馈和真实任务，可能构成下一代模型的训练来源。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**Harness 的竞争**

基础工具更容易复现，安全机制与操作体验才拉开差异。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**开源抬高基线**

能力差距缩小时，模型厂商更难仅靠 API 提价。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**大厂的第二张牌**

美团、腾讯等公司的训练工程与自有数据，正在改变竞争格局。

</div>

</div>

---

# RSI：让模型参与改进模型

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**Auto research**

让模型围绕某个指标做尝试，例如降低 loss。被优化的是外部任务；尝试本身并不一定改进。

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

**RSI**

模型参与改进自己的工具、推理、训练或工作流，人工参与比例可能下降，但目标仍须有人定义。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
王铁震用编译器自举作类比：先由人写出可用版本，之后软件用自身语言继续编译和迭代。
</div>

---
layout: two-cols-header
---

# RSI 更像一个带有人类输入的循环

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">模型可以执行、评估并重复尝试，但不能从封闭循环里持续得到新的判断。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">人类提供偏好、架构和验收标准；这些信息决定循环往哪里走。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">讨论中的 RSI 由人和模型持续协作；人类输入始终是研发循环的一部分。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/rsi-cycle-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 为什么完全自主会遇到瓶颈

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

**复杂度会累积**

模型不断补丁式地改代码，项目可能超过它的上下文和理解范围。

</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">

**新信息不会凭空产生**

闭环若没有新的实验、数据或人类判断，改进会逐渐失去方向。

</div>

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**衡量应看影响**

代码行数由机器生成，并不说明机器独立决定了关键设计。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
节目把人类参与比例视为观察 RSI 的线索，而不是把代码生成比例直接当作自主程度。
</div>

---

# 代码是谁写的，与谁负责决定是两回事

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**生成比例**

模型写代码很快。即使大部分代码来自 Claude Code，也可能是工程师逐条下达意图后的实现。

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

**决策比例**

人需要决定系统目标、模块边界和可接受的结果；这部分影响更接近项目的控制权。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
软件工程可能从人直接编写细节，转向人定义架构、模型完成具体实现。可解释性不会因此自动消失，但需要新的工作方法维护。
</div>

---
layout: two-cols-header
---

# 人要把抽象留在自己手里

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">王铁震把人类的作用归结为降低复杂度：把大量细节收束为少量不变量与模块关系。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">模型按照这些边界实现局部任务；它不应随意改动未被授权的模块。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">当设计在未来场景失效，人负责重新抽象，再把新的约束交给模型。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/abstraction-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 许愿式开发，适合一次性结果

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border border-yellow-200">

**适合的场景**

只需在有限样例中工作、完成后不再长期维护的任务。用户关心这一次是否可用。

</div>

<div class="p-4 rounded bg-red-50 border border-red-200">

**难以承受的场景**

长期演进的服务。修复一个问题时若破坏另一个模块，维护者既看不懂也无法预测后果。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
项目变复杂后，一次修改会波及哪些地方可能无人能判断；这才是长期维护的风险。
</div>

---

# 一个自举实验：先造 Harness，再碰推理与训练

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**第一步**

让 GLM-5.2 生成自己可使用的 Harness；现有 Claude 参与带领与校验。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**第二步**

尝试让小模型与其工具承担 GLM-5.2 的推理环节；节目称已有能跑的初始版本。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**第三步**

从 LoRA 等计算量较小的训练开始，再把性能偏好交给系统迭代。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
实验把工具、推理和训练逐段纳入同一条可观察的链路；它的范围仍限于这条自举实验。
</div>

---

# 模型擅长复用，不擅长无依据地开路

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border border-green-200">

**训练语料中出现过的任务**

例如已有范式的 CUDA kernel 或 Harness。模型可以调取、组合并把它实现出来。

</div>

<div class="p-4 rounded bg-red-50 border border-red-200">

**没有先例的新方向**

当目标缺少可参考路径时，模型容易在已有方案附近兜圈；研究者的判断决定是否继续探索。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
节目把 research taste 看作稀缺输入：它会决定把算力、时间和实验投入在哪个尚无把握的方向。
</div>

---

# 模型的进步，也在分发人的经验

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**局部发现**

有人在具体任务中写出有效的 skills 或 workflow。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**训练吸收**

模型厂商若把这些交互纳入训练，下一版模型可能在更多人手中复现该能力。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**广泛可用**

模型把分散的知识工作经验带到新的场景，但这不等于它独自创造了方法。

</div>

</div>

---
layout: two-cols-header
---

# Record and replay 指向一条数据循环

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">主持人举例：录下改简历或筛选简历的过程，再让系统重复相似操作。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">王铁震把产品方向概括为两件事：收集高价值交互数据，并把模型能力送进更多场景。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">同一条循环也带来隐私问题：哪些数据可收集、如何使用，决定了用户能否信任它。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/data-loop-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 本地运行，是另一种产品选择

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border border-green-200">

**访谈中的设想**

把可用模型和打磨好的产品装进设备，在本地芯片上运行；用户不必把每段语音都交给云端服务。

</div>

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**交换条件**

本地版本未必能力更强，但对长期使用者，硬件一次性投入可能比持续订阅更合算。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这是一种取舍：便利、模型规模与隐私保护不能被当作同一个指标比较。
</div>

---

# Harness 已会搭，难在长期打磨

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**基础结构可复现**

已有论文、帖子和开源实现进入训练语料后，模型更容易按接口拼出工具。

</div>

<div class="p-3 rounded bg-orange-50 border-t-4 border-orange-500">

**复杂体验更难复制**

应用交互、动画与边缘场景需要人持续观察，模型难以自己获得完整反馈。

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

**安全要求更具体**

工具既要执行命令，也要避免误删文件或越过用户的操作边界。

</div>

</div>

---
layout: two-cols-header
---

# Harness 是能力、安全与反馈的接口层

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">Claude Code 的安全小模型、Codex 的 sandbox，都是节目提到的不同保护思路。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">王铁震自己的做法是先检查命令，再放进 Docker 执行。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">因此差异不只来自模型，也来自每一步如何让用户看见、确认和纠正模型动作。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/harness-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 工具不会只剩一个，但头部体验会聚集

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**为什么不会完全垄断**

不同人对操作方式、工作流和风险控制的偏好不同。节目把它类比为 Vue 与 React 等前端生态。

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

**为什么不全靠手搓**

要把个人工具做得稳定、顺手，需要持续打磨；多数用户仍会选择少数成熟产品。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
TUI 之所以常是起点，是因为模型能自己运行、观察并反复得到文字反馈；图形界面则更依赖人工测试。
</div>

---

# Fable：能力提升不等于范式已变

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border border-red-200">

**安全能力的观察**

访谈提到 Fable 主打发现 0day 漏洞。给定可能出问题的文件后，开源模型也可能找出相似问题；差别在于能否在海量目标中主动定位。

</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

**发布叙事的判断**

王铁震认为其发布中营销分量很重。若产品与便宜的开源替代品差距不大，厂商需要说明自己为何值得被选择。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
讨论没有否认能力进步，而是把问题拆开：安全语料、模型规模、搜索范围与产品叙事，分别在发挥作用。
</div>

---

# 开源追赶，靠的是可复制的路线

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**已有路线更清晰**

预训练、偏好训练与强化学习的组合已被广泛讨论，不像早期 ChatGPT 那样突然出现。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**资源决定上限之一**

节目把算力、数据、研究人员列为能否持续训练强模型的基本条件。

</div>

<div class="p-3 rounded bg-yellow-50 border-t-4 border-yellow-500">

**差距会被压缩**

当开源模型规模与训练方法继续推进，闭源产品必须持续证明自己的额外价值。

</div>

</div>

---

# 中国模型迭代速度为何被重新讨论

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**节目中的现象**

王铁震认为，二季度中国模型的迭代速度已经上来；新模型若不能超过现有强基线，也难以获得发布声量。

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

**仍是条件判断**

他没有把原因归结为单一因素，只提出基础设施投入与模型结构效率都可能参与其中。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
季度排名变动很快，节目更关注谁拥有继续训练和持续迭代的条件。
</div>

---

# 开源把能力基线抬给所有参与者

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border border-green-200">

**对研发的意义**

权重、技术报告与架构探索让后来者可以从更高的 checkpoint 出发，再用自己的数据继续微调。

</div>

<div class="p-4 rounded bg-orange-50 border border-orange-200">

**对投资的难题**

若很多公司都能提供相近能力，第一名以外的厂商更难通过模型本身获得高定价。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
节目把模型比作供应链中的商品：开源让参与资格更普遍，却不会自动替任何公司准备好卡、数据和研究团队。
</div>

---

# 模型商品化，价格与份额会一起承压

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**能力相近时**

应用可以更容易替换 API，模型厂商的议价能力下降。

</div>

<div class="p-3 rounded bg-red-50 border-t-4 border-red-500">

**竞争者增加时**

多个闭源与开源模型同时可用，投资人会追问谁能长期保持领先。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**产品层仍有差异**

数据、工具体验、行业场景与算力配置，可能成为模型以外的选择依据。

</div>

</div>

---

# 龙猫 2.0：美团的训练工程信号

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**节目提到的规模**

龙猫 2.0 被描述为 1.6T 模型，在 5 万卡的国产卡集群上训练。这里的重点是训练工程，而不只是参数量。

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

**为什么被视为难题**

训练是长程任务，对 GPU 速度、卡间通信、数值精度与底层软件适配都有要求；推理的约束不同。

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
王铁震把完全不依赖 N 卡完成训练看作工程上的重要进展。节目没有将它外推为所有国产训练集群都已具备同等能力。
</div>

---

# 大厂做模型，既为了能力，也为了数据入口

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border border-yellow-200">

**业务数据带来独特任务**

主持人以点评为例：用户想知道商场里哪家咖啡店较安静，这需要产品掌握本地商户与评价等数据。

</div>

<div class="p-4 rounded bg-purple-50 border border-purple-200">

**数据孤岛塑造策略**

如果数据难以跨应用调用，各家拥有数据入口的公司，就更有动力训练自己的模型并把能力留在产品内部。

</div>

</div>

---
layout: two-cols-header
---

# 数据孤岛会让模型各自在产品里生长

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">应用内的搜索、交易、沟通与反馈，构成了高度具体的任务数据。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">数据不易打通时，通用助手拿不到完整上下文；产品公司则有把模型嵌回自家业务的理由。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">数据可用性不等于可以任意训练。隐私与合法使用是节目反复保留的条件。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/data-islands-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 混元 3 让数据价值重新显眼

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**结构没有大改**

节目认为，混元 3 与 Preview 的模型结构没有变化，却出现明显性能提升。

</div>

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**训练方法与数据变化**

王铁震据此推测，数据与训练方法对该次跃升的作用很大；这是一位体验者的判断。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**腾讯的数据入口**

微信、腾讯会议与 WorkBuddy 等产品产生交互；如何在隐私边界内使用，仍是决定效果的环节。

</div>

</div>

---

# 结构创新有时服务于成本，数据决定另一条上限

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border border-orange-200">

**节目中的推断**

当经典结构配合不同数据和训练方法也能显著提升时，部分架构研究可能更偏向降低成本，而非每次都直接提高能力上限。

</div>

<div class="p-4 rounded bg-green-50 border border-green-200">

**需要保留的边界**

节目也承认，研究团队会做更细的消融实验；外部观察者无法仅凭一次发布分离所有原因。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
数据量不是唯一指标。高价值任务、反馈信号、清洗标准和合规安排，共同决定数据能否变成训练收益。
</div>

---

# Coding 被讨论成了更广的自动化

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**程序员场景**

代码能编译、能运行，结果是否符合预期，都可以构成连续反馈。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**更多数字工作**

网页、报告、表格和前端设计的实现都离不开软件；模型生成代码由此可以影响更大范围的工作流。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**名称会变化**

主持人认为，人们最终可能把这种对话式委托理解为自动化，而不只是一种写代码工具。

</div>

</div>

---
layout: two-cols-header
---

# 写代码的反馈闭环，适合训练自动化能力

::left::

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">任务能被拆成可执行步骤，模型不只生成文本，还能运行并读取结果。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">编译、测试和输出差异为模型提供相对明确的反馈，因此更容易形成改进循环。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">多家厂商把 coding 放到优先级前列，因为它连接了付费场景、自动化与可测反馈。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/coding-loop-cn.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 模型厂商仍要回答三件朴素的事

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-t-4 border-blue-500">

**算力是否够用**

训练与服务都需要稳定资源；规模并不自动保证效率。

</div>

<div class="p-3 rounded bg-green-50 border-t-4 border-green-500">

**数据是否有反馈**

高价值数据来自具体任务、用户修正与结果验证，而不是单纯堆积文本。

</div>

<div class="p-3 rounded bg-purple-50 border-t-4 border-purple-500">

**研究与产品是否相接**

模型要把能力变成可用收入，仍需训练、Harness 与产品场景协同。

</div>

</div>

---

# 26Q2 留下的不是一张固定排名表

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border border-orange-200">

**已经发生的变化**

模型更能承担长程任务；开源能力逼近；更多产品公司开始把自有数据、训练工程和模型能力绑在一起。

</div>

<div class="p-4 rounded bg-blue-50 border border-blue-200">

**下季度仍要看什么**

Anthropic、OpenAI 与中国模型的迭代；大厂是否继续发模型；以及能力相近时，谁能把产品、数据和成本做成可持续业务。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这场复盘考察模型、数据、工具和组织如何一起缩短把智能放进真实任务的距离。
</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">关于 RSI、创造与数据循环</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“100%的一个RSI是不太可能达到的一个目标”<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震谈完全自主迭代的上限</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“它需要在这整个过程中不停的从外界摄取一些低熵的信息”<div class="text-xs opacity-60 mt-1 not-italic">— 人类输入与新信息仍在循环里</div></div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“它吃进去的语料实际上是它的，是它的枷锁”<div class="text-xs opacity-60 mt-1 not-italic">— 模型在未知方向上的限制</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“这是人类的原生的价值”<div class="text-xs opacity-60 mt-1 not-italic">— 人类缓慢探索未知边界的作用</div></div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于产品、工具与竞争</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“把尽量多的人类智能的交互数据收集上来”<div class="text-xs opacity-60 mt-1 not-italic">— 王铁震概括未来产品的一项工作</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“把模型的智能尽快的下发到每一个场景”<div class="text-xs opacity-60 mt-1 not-italic">— 另一项工作是把能力送进具体任务</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“今天Harness不难做，难做的是什么？难做的是用户体验”<div class="text-xs opacity-60 mt-1 not-italic">— 基础工具与产品打磨的差别</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“coding这个词用错了，不应该用coding应该用automation”<div class="text-xs opacity-60 mt-1 not-italic">— 主持人对 coding 语义变化的判断</div></div>

</div>

---
layout: end
---

# “它可能能力强很多，但是范式并没有强”

<div class="mt-6 text-sm opacity-70">— 王铁震谈 Fable 与现有模型的关系</div>
