---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 156：与 Henry 的「AI季报 26Q1」：OpenClaw、OpenAI 与 Anthropic 的三重对阵、自进化
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 156｜AI 季报 26Q1

## OpenClaw、OpenAI 与 Anthropic 的三重对阵，以及自进化的起点

<div class="mt-8 text-sm opacity-70">
晚点聊 · 嘉宾 Henry Yin · MOE Capital 创始合伙人
</div>

<div class="mt-4 text-xs opacity-50">
2026 年 3 月 · 1 小时 52 分钟
</div>

---
layout: default
---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>OpenClaw 改了入口</strong><br>
它把本地权限、聊天软件、定时任务和记忆放进同一个个人助理框架。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>竞争从模型扩展到产品</strong><br>
编码工具、开发者生态、企业信任、成本和分发，开始共同决定胜负。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>编码是 Agent 的能力底座</strong><br>
能写代码的模型，才能调用工具、操作环境，并处理更长的任务链。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>自进化出现可运行样本</strong><br>
Auto Research 将人设目标、模型改代码、训练和评估接成循环。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>推理成为系统工程</strong><br>
Agent 消耗的不只是模型推理，还包括执行代码、沙盒和 CPU 资源。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>组织已感到压力</strong><br>
硅谷的裁员、招聘和工作流程，正把 AI 使用能力变成明确的门槛。
</div>

</div>

---
layout: default
---

# 2026 年第一季度的三条主线

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold text-orange-700">01｜个人 Agent 出圈</div>
OpenClaw 将 Agent 放进飞书、WhatsApp、Telegram 等既有聊天入口，讨论从技术圈扩散到日常工作和生活。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold text-blue-700">02｜编码产品成主战场</div>
Claude Code 与 Codex 的竞争，连着模型能力、产品体验、用户数据和企业部署。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold text-purple-700">03｜自我改进有了实证</div>
Auto Research、AlphaEvolve 等案例让研究者重新讨论：AI 能否参与改进训练与研究流程。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
本期围绕同一件事展开：当 Agent 能执行更长的任务链，模型、计算资源与组织会怎样一起变化？
</div>

---
layout: two-cols-header
---

# OpenClaw 的新意在交互，不在单个技术组件

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
本地运行让它能访问文件和系统权限；这扩展了可完成的任务，也扩大了安全风险。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
它接入人们已经使用的聊天软件，用户不必先学一套新的界面。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
定时任务、长期记忆、工具调用和循环执行并非新发明；关键在于它们被组合进个人助理体验。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./openclaw-flow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: default
---

# 个人助理的价值，取决于能否接住碎片化生活

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>消息与日历</strong><br>
一位深度用户让 OpenClaw 定时扫描消息；识别到约会安排时，再创建日历事件。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>群消息摘要</strong><br>
对高频群聊生成摘要，让用户可以静音群聊，同时保留重要信息。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>价格与出行</strong><br>
该用户用它追踪商品价格、规划旅行，并根据酒店图片和个人偏好辅助选择。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>移动端输入</strong><br>
冰箱照片、餐厅位置等信息可以直接发进聊天窗口；这比先传到终端更顺手。
</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
访谈也给出限制：把工作流调到稳定可用，需要投入时间；本地权限则要求用户自行评估风险。
</div>

---
layout: default
---

# 中国的热度，来自入口、开源与成本的叠加

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>聊天优先的习惯</strong><br>
访谈者认为，中国用户长期使用微信等聊天产品，更容易接受在对话里调用个人助理。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>开源模型的组合</strong><br>
OpenClaw 可接入不同模型；受访者将中国模型的价格与可用性视为其在国内扩散的因素之一。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>复杂任务放大成本</strong><br>
Agent 往往需要多次调用模型。单次调用的价格差，会随着任务循环而被放大。
</div>

</div>

<div class="mt-5 text-sm opacity-70">
硅谷同样关注 OpenClaw，但 Henry 的观察是，研究人员未必把它当作技术突破；创业者和独立开发者更看重它打开的新分发方式。
</div>

---
layout: default
---

# 从编码到通用 Agent：把执行能力拉长

<div class="grid grid-cols-4 gap-3 mt-5 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">读懂需求<br><span class="opacity-70">上下文与规划</span></div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">调用工具<br><span class="opacity-70">API、浏览器、文件</span></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">写并运行代码<br><span class="opacity-70">修复、测试、重试</span></div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">交付结果<br><span class="opacity-70">跨越更长任务链</span></div>

</div>

<div class="mt-6 grid grid-cols-2 gap-3 text-sm leading-relaxed">
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
长上下文逐渐成为标配，但它只解决了信息容量。真实体验还取决于工具是否可靠、任务能否持续推进。
</div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
访谈中的判断是：若编码能力不足，模型就很难承担个人助理所需的执行与环境操作。
</div>
</div>

---
layout: two-cols-header
---

# OpenAI 与 Anthropic 的竞争，已经高出模型层

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
模型分数趋近后，单次基准测试不再足以代表实际用户体验。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
Claude Code 与 Codex 把竞争拉到开发者日常：谁能理解任务、调用工具、修复失败并交付结果。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
企业还会比较安全、合规、可靠性与推理成本；Google 的数据、分发和 TPU 也在这张牌桌上。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./competition-stack.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: default
---

# 有产品触手，模型才能获得优化方向

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>基准不是全部</strong><br>
文档解析、检索、工具调用等环节都可能让工作流失败，即使模型推理能力足够强。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>真实任务提供信号</strong><br>
自有产品和 API 能收集用户遇到的难题，再筛出更有价值的任务和轨迹。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>模型厂商趋向垂直整合</strong><br>
从模型到开发者工具、再到上层应用，既能避免只卖底层能力，也能形成迭代反馈。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
本期把这看成一场平台竞争：产品并非模型的展示柜，而是决定下一轮训练与产品取舍的信息来源。
</div>

---
layout: default
---

# Cursor 与 Kimi：开源基模进入核心产品

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold text-blue-700">访谈中的事件</div>
节目讨论了 Cursor 新模型使用 Kimi K2.5 的消息。受访者把这视作中国开源模型得到头部 Agent 产品认可的例子。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold text-red-700">争议不只在技术</div>
讨论集中在开源许可证、披露与合规。受访者认为，担心也可能来自外界对产品自研能力的判断。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 col-span-2">
<div class="font-semibold text-green-700">后续处理</div>
节目称 Cursor 后来承认问题并说明选择过程；Kimi 的公开回应较为正面。重点在于基模、微调、产品和商业合作如何重新分工。
</div>

</div>

---
layout: two-cols-header
---

# Auto Research 把研究循环拆成可运行的流程

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
Andrej Karpathy 先用 nanoGPT 把训练过程压缩到数百行 Python 代码，作为教学用的最小实验环境。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
在 Auto Research 中，人类通过 program.md 写下指导方针；Agent 读取历史结果，修改训练代码，再运行训练。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
实验以 bits per byte 为指标。单轮包含修改、训练和评估；结果决定改动保留还是撤回。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./autoresearch-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: default
---

# 自进化的进展，不等于人类退出回路

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>已显示出的能力</strong><br>
受访者介绍，Auto Research 在小模型实验中找到二十多项有效改动，把训练时间从两小时多降到一小时多，提升约百分之十到二十。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>人仍定义搜索空间</strong><br>
当前系统可以在给定目标和范围内高效搜索；选什么目标、搜哪一块空间，仍主要由研究者决定。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>多条证据在汇合</strong><br>
节目还提到 AlphaEvolve 用 Gemini 优化 Gemini 的 kernel，以及 Codex 参与调试自身等案例。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>范围过大时会失控</strong><br>
目标不够具体、改动范围变大时，模型可能把代码改坏，且无法自行恢复。
</div>

</div>

---
layout: default
---

# 最适合自动优化的任务，有三项共同条件

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold text-green-700">明确指标</div>
渲染速度、训练时间、查询性能等指标可以明确比较，避免模型只凭感觉判断好坏。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold text-blue-700">快速反馈</div>
每次改动后能立即跑测试，Agent 才能据结果继续搜索，而不是积累不可验证的修改。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold text-orange-700">可审查结果</div>
进入生产前仍要确认安全性，并让人能理解改动为什么有效。
</div>

</div>

<div class="mt-5 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
反例是网站深色模式：节目中的两个 Agent 各运行一小时多仍未完成。视觉是否舒适，需要人眼判断，难以形成干净的自动反馈。
</div>

---
layout: two-cols-header
---

# 持续学习有两条路径，代价并不相同

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>文本与记忆</strong><br>
技能文件、记忆和上下文容易查看、理解与修改，因此已被大量产品采用。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
它的限制也很直接：上下文会满，压缩会损失信息，积累的内容未必真正写进模型能力。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>更新部分权重</strong><br>
Test-Time Training 等探索尝试按特定输入更新一小部分权重，但每次推理的系统复杂度更高。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./learning-paths.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: default
---

# 持续学习与自进化，解决的是不同问题

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold text-blue-700">持续学习</div>
模型部署后能否继续获得知识、能力或用户偏好。它关心的是模型在使用过程中如何改变。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-semibold text-purple-700">自进化</div>
系统能否提出改进、实现改进并反复评估。Auto Research、AlphaEvolve 和 Darwin Gödel Machine 都落在这个框架里。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 col-span-2">
两者都还受限于规模与成本。受访者提到，部分权重更新目前只在少数小模型上验证；面向大模型与大规模个性化部署，仍需证明投入是否划算。
</div>

</div>

---
layout: default
---

# 世界模型的两类落点：交互媒体与具身系统

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-semibold text-orange-700">交互式媒体</div>
根据玩家行为实时生成下一帧、NPC 行为和剧情，让游戏世界对行动作出连续反应。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold text-green-700">具身系统</div>
一类工作关注从视频推导动作策略；另一类模拟环境，让机器人在模拟中完成改进循环。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 col-span-2">
节目列出 World Labs、Yann LeCun 参与的新公司、Google Dreamer 团队负责人创办的新公司等不同路线。它们分别侧重 3D 建模、表征、策略或环境模拟，尚未收敛为单一方法。
</div>

</div>

---
layout: default
---

# 计算的重心，从训练转向推理

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Blackwell 的数字</strong><br>
节目称，Blackwell 的推理性能提升 3.5 倍，推理 token 成本下降约 10 倍。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>KV Cache 仍有空间</strong><br>
节目提到 Google 的量化工作，可把 KV Cache 的存储需求降至原来的六分之一左右。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Agent 放大调用次数</strong><br>
个人助理会不断推理、调用工具和重试，因此基础设施优化直接影响可部署的成本结构。
</div>

</div>

<div class="mt-5 text-sm opacity-70">
这些是节目中的 Q1 数据与判断。训练仍在继续；大规模 Agent 使用让推理侧的吞吐、内存和成本成为更迫切的问题。
</div>

---
layout: two-cols-header
---

# 一个 Agent 是运行在计算环境里的系统

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
早期对话式产品主要请求模型；Agent 则会在计算环境中持续运行，并启动更多沙盒任务。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
GPU 支撑模型推理，模型生成的代码还要执行、测试、读写文件和调用工具。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
因此受访者把 CPU 视为 Agent 扩张的另一项需求：它负责运行代码和任务环境，而不只是生成 token。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-compute.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: default
---

# 技术进展已传导到组织：三组硅谷观察

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>Amazon</strong><br>
Henry 提到，年初 Amazon 裁员 1.6 万人，其中包括许多工程师。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>Block</strong><br>
节目称，Jack Dorsey 宣布裁员 40%，并将 AI 视为可以用更少人维持或提高产出的原因。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Meta</strong><br>
受访者描述 Meta 曾让员工集中学习 AI，并把 token 消耗当作团队效率指标；随后又宣布 20% 的裁员计划。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这些例子是节目嘉宾的观察与转述，并不能说明所有裁员都由 AI 单独造成；它们说明的是，管理层开始把 AI 使用纳入效率与资本开支的讨论。
</div>

---
layout: default
---

# 小团队的配置，正从人数转向能力与 Agent

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-semibold text-blue-700">招聘标准变化</div>
节目中的硅谷观察是：无论候选人是否写代码，是否会用 AI 工具已成为面试重点之一。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold text-green-700">质量与时间窗口</div>
快速增长的公司仍会招人，因为抢时间比压低人力成本重要；但更偏向寻找能带着 Agent 工作的高质量成员。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 col-span-2">
主持人补充的中国观察是，公司可能愿意花更多钱招顶尖人才，再由这些人才和 AI 协作。人数减少不代表用人成本按同一比例下降。
</div>

</div>

---
layout: default
---

# 律师案例：AI 先扩大的是小团队的处理能力

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>紧急任务</strong><br>
客户要求律所当日修改合同中的多项条款，次日早晨交付，否则合同取消。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>先找出冲突</strong><br>
团队借助 Claude 分析后发现，客户提出的若干要求彼此矛盾，因此可以提出异议。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>再完成文档</strong><br>
两三个人在两三个小时内完成修改和说明。案例强调的是协作效率，而非法律判断可以完全自动化。
</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
讨论的分界很清楚：需要处理人的关系、信任和现实责任的工作仍在；但文本密集、约束明确的任务，已经能被小团队更快地完成。
</div>

---
layout: default
---

# AI 的收益与压力，可能同时改变一座城市

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-semibold text-green-700">湾区房价的猜想</div>
节目谈到一种分化预期：高薪 AI 研究员获得更高报酬，供应稀缺的高价房可能受支撑；更广泛的就业压力则可能压低低价段需求。这只是讨论中的猜测。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-semibold text-red-700">不平等与 token 税</div>
Henry 提到给 token 征税的设想：若企业用大量推理替代工作，也应承担类似雇佣成本的社会责任。这是政策思路，不是既有制度。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
从裁员到房价，这一段把 Agent 放回社会场景：算力、资本和高技能人才的收益集中，可能让技术收益与风险同时加速分化。
</div>

---
layout: default
---

# 下一季度要验证什么

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>DeepSeek V4</strong><br>
节目预计它将在下一季度发布；高期待之下，关键是看实际结果能否支撑外界的预期。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Computer Use</strong><br>
受访者指出 CUB 分数仍处于较低水平，期待跨应用、无 API 的工作流取得更实用的进展。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>更简单的持续学习</strong><br>
研究者在寻找一种机制：像 skills 和 memory 一样容易使用，却比现有方法更有效。
</div>

</div>

<div class="mt-5 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
本期留下的悬念是：这些能力能否以低成本、可审查、可部署的方式进入真实工作流。
</div>

---
layout: default
---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60 mb-1">OpenClaw 的产品判断</div>
“Open Claw应该不是一个技术上的突破。我觉得它还是一个交互范式的突破。”
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60 mb-1">模型厂商的下一战</div>
“下一个阶段的竞争的话呢，可能关键确实不再是谁的模型更聪明，而是说谁的这个产品生态更深。”
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60 mb-1">编码与通用 Agent</div>
“coding agents are the real agents。”
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-60 mb-1">自进化的含义</div>
“这个是加速度的加速度。因为这个AI研究本身被自动化了。”
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60 mb-1">自动优化的前提</div>
“它有没有一个清晰的、可量化的优化目标。”
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-60 mb-1">持续学习的未知处</div>
“目前来看的话就是可能还没有人说已经完全掌握了这个配方是什么样的。”
</div>

</div>

---
layout: end
---

# 仍在寻找的，是一套足够简单的配方

<div class="mt-8 text-xl leading-relaxed max-w-3xl mx-auto">
“目前来看的话就是可能还没有人说已经完全掌握了这个配方是什么样的。”
</div>

<div class="mt-8 text-sm opacity-60">
Henry Yin · 谈持续学习与递归自我改进
</div>
