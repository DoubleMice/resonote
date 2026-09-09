---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: World Model-世界模型也有Scaling Law吗？
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# World Model：世界模型也有 Scaling Law 吗？

<div class="text-lg opacity-70 mt-6">
从大语言模型的成功经验，走到物理世界的数据、仿真与部署
</div>

<div class="text-sm opacity-50 mt-8">
《同舟之树》· 明浩 · 2026 年 6 月
</div>

---
layout: default
---

# 为什么这期值得花时间

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从文字走向物理</strong><br/>
语言模型预测下一个 Token；世界模型试图预测动作之后的物理状态。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>视频不等于理解</strong><br/>
逼真的画面可以服务人的眼睛，可靠的仿真和规划还要经受物理约束。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>数据是核心约束</strong><br/>
真实交互依赖车辆、传感器、场地和安全流程，不能像网页文本那样轻易扩充。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>路线尚未收敛</strong><br/>
JEPA、Genie 3 与 3D 空间表征，对模型如何表示世界给出了不同答案。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Momenta 的商业样本</strong><br/>
量产车辆、真实驾驶数据、模型训练与车企合作，构成节目关注的数据循环。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>GPT 时刻仍未出现</strong><br/>
自动驾驶、互动内容和机器人会按各自的安全责任与数据条件逐步推进。
</div>

</div>

---
layout: default
---

# 三个信号把世界模型推上台前

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>硬币实验</strong><br/>
影视飓风团队做了 100 多次实验；节目转述其中 70% 以上的硬币为正面，偏离了 50% 的直觉。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>融资热度</strong><br/>
田凡在 4 月和 6 月的两条即刻中，分别谈到基金内部的项目线与每天收到的世界模型 BP。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>招股书叙事</strong><br/>
Momenta 通过港交所聆讯后，节目把它的自动驾驶业务放进世界模型路线之争中讨论。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这些现象没有证明技术已经成熟；它们说明世界模型正在成为创业、投资与自动驾驶行业共同使用的讨论框架。
</div>

---
layout: default
---

# 热度来自大语言模型之外的新问题

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>模型公司的边界变清楚</strong><br/>
写作、编程、总结、推理和工具调用持续推进，但这些能力主要仍在语言与数字环境中发挥作用。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>New Labs 扩张</strong><br/>
节目转述 Menlo 在 5 月覆盖约 63 家 New Lab，累计融资规模达到数百亿美元量级。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>物理 AI 被单独下注</strong><br/>
节目转述 CB Insights 2024 年第一季度报告：这一方向在 AI 细分板块中占到约 11% 的项目投入。
</div>

</div>

<div class="mt-5 text-sm leading-relaxed opacity-80">
主持人把世界模型放在自主进化、具身智能、AI for Science 与模型基础设施并列的探索中：它们都在寻找语言模型之后可以继续扩展的能力边界。
</div>

---
layout: default
---

# 语言模型知道描述，世界模型试图理解运行

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>杯子的文字知识</strong><br/>
模型可以读到杯子能装水、摔落可能破碎、推倒会洒水。它从大量文本中学到的是这些描述的统计规律。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>杯子的物理状态</strong><br/>
光线怎样反射，材质和摩擦怎样改变运动，桌面、水泥地与冰面有何差别，都需要对真实环境的状态变化作出判断。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
节目借李飞飞的论述区分两件事：读过关于世界的文字，和从观察与互动中学到世界如何运作，不是同一种能力。
</div>

---
layout: default
---

# 关键问题：做一个动作后，会发生什么？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>雨夜避障的画面</strong><br/>
模型可以生成雨水反光、车灯扫过路面和镜头晃动。这是一段看起来可信的视频。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>自动驾驶的决策</strong><br/>
系统还要判断何时刹车、是否追尾、变道是否进入相邻车道、不同策略各自带来什么风险。
</div>

</div>

<div class="mt-5 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
节目把差别落在可交互性上：Agent 采取动作后，环境能否给出及时且符合物理规律的反馈。
</div>

---
layout: two-cols-header
---

# 渲染、仿真与规划，面向同一组世界知识

::left::

<div class="text-sm leading-relaxed mt-2">

- 渲染器输出像素，重点是视觉可信度。
- 仿真器输出环境状态，车辆轨迹、碰撞关系和交通规则都要合理。
- 规划器输出动作，决定机器人如何抓取、车辆如何加减速与转向。
- 节目认为三条线的边界正在靠近，因为它们都需要几何、物理、动力学与对象互动的知识。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./world-model-functions.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols-header
---

# 同为预测任务，数据入口却不相同

::left::

<div class="text-sm leading-relaxed mt-2">

- 大语言模型以网页、书籍、代码等文本为主要预训练材料，在给定上下文后预测下一个 Token。
- 世界模型还要接收传感器、动作和场景信息，在给定状态与动作后预测下一物理状态。
- 物理数据的采集要经过设备、场地、人力、安全与合规环节；模型扩展不能直接复刻文本数据的获取方式。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./token-state-data.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 物理数据的难处，不只是体量

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>采集成本</strong><br/>
自动驾驶要真实上路，机器人要真实操作，工业场景需要传感器、设备和流程配合。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>信息密度</strong><br/>
司机避让儿童的一句描述，落到视频、雷达、轨迹与标注时，会变成大量记录；有效事实可能只在短暂瞬间发生。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>安全长尾</strong><br/>
高质量样本既要多样，也要覆盖少见而风险高的情形，才能检验安全边界。
</div>

</div>

---
layout: default
---

# Scaling Law 的问题，落在一整套训练闭环上

<div class="grid grid-cols-4 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>预训练</strong><br/>
从真实世界的多模态记录中学习状态变化。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>训练环境</strong><br/>
构建能推演动作后果的仿真环境。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>强化学习</strong><br/>
以安全、效率、舒适等目标评价策略。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>泛化能力</strong><br/>
在开放环境中面对未见过的组合与长尾情况。
</div>

</div>

<div class="mt-5 text-sm leading-relaxed opacity-80">
节目关注的是整套训练闭环：数据是否可得、样本是否多样、训练是否闭环、结果是否可靠。
</div>

---
layout: two-cols-header
---

# 世界模型的 Scaling Law 更像高摩擦循环

::left::

<div class="text-sm leading-relaxed mt-2">

- 真实世界先提供交互数据，但采集过程本身昂贵且受场景限制。
- 训练前要从中筛选长尾与高质量样本；只靠一般路况或普通操作不足以说明安全边界。
- 模型和仿真环境相互依赖，安全检验后还要重新部署，才会产生下一轮反馈。
- 节目的判断是：摩擦来自数据成本、反馈速度、安全责任和长尾复杂度。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./high-friction-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 有演示能力，不等于已经出现涌现

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>节目观察到的能力</strong><br/>
一些模型已经能生成看似完整的世界、预测简单状态变化，并在特定任务里帮助机器人或自动驾驶系统行动。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>仍未解决的能力</strong><br/>
在开放世界中可靠地理解因果关系并行动，需要可持续的数据供给、多样样本和对长尾风险的处理。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
主持人将当前阶段类比为 GPT-2 左右：方向已吸引很多人和资本，距离面向大众、广泛被认可的产品仍有距离。
</div>

---
layout: default
---

# 三条路线，都在回答如何表示世界

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>杨立昆：JEPA</strong><br/>
在潜在空间预测状态变化，不直接生成像素。节目认为这条路计算效率较高，也更强调泛化。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>DeepMind：Genie 3</strong><br/>
以多模态和可操作环境为重点，在语言模型基础上叠加视觉、空间感知与强化学习。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>李飞飞：World Labs</strong><br/>
先建立 3D 空间表征，把空间与空间物理放在世界表示的基础位置。
</div>

</div>

---
layout: default
---

# 路线分歧来自不同的表示假设

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>潜在空间</strong><br/>
重点放在模型内部如何表示状态与状态迁移，减少对像素生成的依赖。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>可操作的多模态环境</strong><br/>
把生成、视觉、空间感知和行动放在同一演进过程中，便于展示交互结果。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>3D 空间表征</strong><br/>
优先构造可被观察和操作的空间，再讨论其中对象的关系和运动。
</div>

</div>

<div class="mt-5 text-sm leading-relaxed opacity-80">
节目没有给三条路线排出胜负。它把目前的分野理解为：世界模型尚处于技术定义和工程验证同时推进的阶段。
</div>

---
layout: default
---

# 自动驾驶为何可能较早落地

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>已在路上的数据点</strong><br/>
量产车在不同道路、天气、城市与交通环境中行驶，持续记录真实驾驶过程。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>安全要求明确</strong><br/>
车辆决策必须处理碰撞、车道、速度和他人反应；这使模型的可靠性检验具有明确对象。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>商业路径可见</strong><br/>
自动驾驶方案可以随量产车部署，业务收入也能为数据采集、模型训练和工程迭代提供支撑。
</div>

</div>

---
layout: default
---

# Momenta：节目选择的商业样本

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>超过 68 万辆</strong><br/>
节目转述招股书：截至 2025 年底，Momenta 安装车辆超过 68 万辆。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>超过 90 万台</strong><br/>
节目称，搭载 Momenta 系统的量产车辆规模已超过 90 万台。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>24 家车企</strong><br/>
节目转述其合作覆盖全球 24 家车企，并涉及全球前十大车企中的九家。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这些数字在节目中的作用，是说明自动驾驶企业可能拥有持续采集、多样化真实数据的起点；并不自动说明模型已能泛化到其他物理场景。
</div>

---
layout: two-cols-header
---

# Momenta 的价值主张：让数据循环转起来

::left::

<div class="text-sm leading-relaxed mt-2">

- 量产车辆带来收入，也产生真实驾驶数据。
- 数据用于训练和优化模型；更好的模型支撑车企合作和后续部署。
- 与单一车企相比，节目认为多车企、多车型、不同地区与驾驶风格的数据更有利于避免分布过窄。
- 这个循环的难点在于起点：没有客户与量产车，就没有足够的数据和模型进步。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./momenta-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 数据多样性，是飞轮的另一半

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>节目强调的差异</strong><br/>
Momenta 的数据来自不同车企、车型、价格带、区域和驾驶风格，而不是单一品牌或单一城市的行驶记录。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>模型训练担心的风险</strong><br/>
如果样本只覆盖一种车、一个城市或一类驾驶行为，模型难以在变化更大的环境中稳定工作。
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
多样性并不取消长尾问题。罕见危险场景仍需要被发现、记录、标注、重放与检验，才能进入训练和评估循环。
</div>

---
layout: default
---

# 现金流决定能否承受长周期

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>业务收入</strong><br/>
节目转述招股书：Momenta 的营收从 2023 年的七点几亿元，上升到 2025 年的二十几亿元。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>毛利水平</strong><br/>
节目提及的毛利水平，从 2023 年的 17.5 升至 2025 年的 71.6；同时，许可收入占比在提高。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
主持人把这类业务看作物理 AI 的资金基础：上车、测试、部署、合规、维护与厂商协作都需要长期投入，产品不能像网页应用那样一次上线后全球分发。
</div>

---
layout: default
---

# 工程化把模型放进不同车型

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>超过 100 款</strong><br/>
节目转述招股书：Momenta 已交付超过 100 款量产车型。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2022 年的节点</strong><br/>
节目称，其完成首个 10 万台量产用了 24 个月。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>后续交付速度</strong><br/>
节目称，当前最快可在不到 40 天完成 10 万台交付；原始口径未进一步展开。
</div>

</div>

<div class="mt-5 text-sm leading-relaxed opacity-80">
算法之外，还要适配不同传感器配置和车企流程，并同时满足量产质量、安全、成本与交付周期。节目将这些工作归为工程化能力。
</div>

---
layout: two-cols-header
---

# R7：预训练、仿真与强化学习的组合

::left::

<div class="text-sm leading-relaxed mt-2">

- 节目将 R7 概括为端到端大模型、强化学习和世界模型方向的结合。
- 第一步从大量真实驾驶数据中学习物理规律、常识和因果关系。
- 第二步在闭环仿真中推演动作后果，特别评估难以复现的长尾场景。
- 第三步让模型在接近真实的虚拟环境中反复试错，以安全、舒适、效率作为奖励目标。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./r7-three-layers.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从模块化系统到 R7 的路线演进

<div class="grid grid-cols-4 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>2022 年</strong><br/>
节目称，系统以深度学习和模块化设计为主。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>2024—2025 年</strong><br/>
引入端到端大模型，将感知和决策放进统一架构。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>R6</strong><br/>
将强化学习引入全流程，试图超越单纯模仿人类驾驶。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>R7</strong><br/>
把世界模型加入端到端模型与强化学习的组合。
</div>

</div>

<div class="mt-5 text-sm leading-relaxed opacity-80">
节目用这条路线说明：自动驾驶企业讨论世界模型时，关心的不只是生成内容，也包括在仿真环境中评价动作与策略。
</div>

---
layout: default
---

# 不同场景，会以不同速度落地

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>自动驾驶</strong><br/>
真实数据多，安全要求高，商业模式相对清楚；节目认为它可能较早跑通。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>互动内容</strong><br/>
游戏、虚拟世界与影视创作对生成体验的容错率较高，World Labs、Dream Machine、Genie 3 可能先在这里显示价值。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>机器人</strong><br/>
三维空间、柔性物体、手眼协调、材质与形变，都比车辆在道路上行驶增加了变量。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>工业仿真与数字孪生</strong><br/>
节目把它们列为更远的可能方向，也提到它们可能与 AI for Science 发生联系。
</div>

</div>

---
layout: default
---

# ChatGPT 时刻，需要四个可见条件

<div class="grid grid-cols-4 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>直接感知</strong><br/>
普通用户能明确体验到能力变化。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>低门槛</strong><br/>
产品容易获得、容易上手。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>通用性</strong><br/>
可处理大量不同类型的问题。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>产业扩散</strong><br/>
产业链各层出现广泛的使用与变化。
</div>

</div>

<div class="mt-5 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
主持人的判断是：世界模型正接近其中部分条件，但大众目前更多看到演示视频与宣传片，尚未出现人人可用、人人感到震撼的产品。
</div>

---
layout: default
---

# 世界模型可能有规律，但不是文本路径的复制

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>可以继承的直觉</strong><br/>
找到可预测的任务后，数据、模型、算力和训练环境可能共同提升能力；自动驾驶的闭环提供了可观察的样本。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>不能跳过的现实</strong><br/>
真实数据采集慢，场景相互差异大，安全要求严格。每个垂直领域都可能形成自己的数据壁垒与工程约束。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
节目最后把观察重点放回部署：谁能在安全、成本、性能与商业化之间维持稳定平衡，并让模型从真实环境中持续获得反馈。
</div>

---
layout: default
---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-70">李飞飞文章的原文，节目转述</div>

> the world is not made of words
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-70">从视频生成到可交互环境</div>

> 世界模型不单纯是一个视频生成模型，不是生成一段看起来很真实的视频就结束了。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-70">关于能力阶段</div>

> 截止到这个时间点，我觉得还没有出现涌现。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-70">关于扩展的阻力</div>

> 它更像一个高摩擦版本的scaling law。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-70">关于技术路线</div>

> 每一个厂商都有自己的主张。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-70">关于安全责任</div>

> 物理世界不允许你差不多，对吧？
</div>

</div>

---
layout: end
---

# ChatGPT时刻没有来。

<div class="text-lg opacity-70 mt-6">
世界模型的下一步，要在真实环境的反馈中慢慢检验。
</div>

<div class="text-sm opacity-50 mt-8">
明浩 · 《同舟之树》
</div>
