---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'E230｜1万亿收入预期背后：英伟达的巅峰与软肋'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E230｜1万亿收入预期背后

## 英伟达的巅峰与软肋

<div class="mt-6 text-sm opacity-60">
硅谷101 · 2026年3月 · 洪军主持
</div>

<div class="mt-4 text-xs opacity-50">
Fusion Fund 张璐 · NVIDIA 前研究总监 Mark · ZFlow AI 肖志斌 · GMI Cloud Alex
</div>

<div class="mt-10 text-xs opacity-40">
四位嘉宾 — 芯片投资人 + 芯片设计师 + AI 芯片创业者 + GPU 云运营商 — 拆解英伟达万亿野心
</div>

---
layout: default
---

# 为什么这期值得你花时间

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>万亿订单 vs 物理极限</strong><br/>
Jensen 宣布 2027 年 Blackwell + Vera Rubin 累计订单至少 $1T。但 CoWoS 封装、HBM4 内存、电力配送全在瓶颈。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>推理取代训练成为主战场</strong><br/>
训练/推理支出比例从 80/20 反转至 20/80。推理是长期现金流，Agent 大规模部署将加速这一转变。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>软硬一体加速：7 芯片/年</strong><br/>
从两年一芯片到一年七芯片，AI 设计芯片、全栈反馈闭环、CUDA 生态 2 万+初创共同驱动。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>数据中心速度竞赛</strong><br/>
美国电网 "bone dry"，转向 behind-the-meter 就地发电。建设周期从 18 月压缩到 6 月，集装箱化革命。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed col-span-2">
<strong>竞争围剿与护城河</strong><br/>
Google TPU 系统能力更强 · OpenAI/Apple 自研芯片 · AMD + Groq LPU 蚕食推理 · 边缘 AI 崛起。英伟达的真正护城河：极致执行力 + 台积电 CoWoS 产能绑定。
</div>

</div>

---
layout: default
---

# GTC 2025：四个改变产业格局的数字

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">累计订单</div>
<div class="text-3xl font-bold text-blue-600 my-2">$1T</div>
<div class="text-xs opacity-70">Blackwell + Vera Rubin<br/>2027 年前累计</div>
<div class="text-xs mt-1 opacity-50">去年预测：$500B</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">新品发布</div>
<div class="text-3xl font-bold text-green-600 my-2">7 块</div>
<div class="text-xs opacity-70">Vera Rubin 平台<br/>一次同步发布</div>
<div class="text-xs mt-1 opacity-50">史上规模最大</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">推理效率</div>
<div class="text-3xl font-bold text-orange-600 my-2">10×</div>
<div class="text-xs opacity-70">NVL72 vs Blackwell<br/>每 token 成本</div>
<div class="text-xs mt-1 opacity-50">降至 1/10</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60">能效比</div>
<div class="text-3xl font-bold text-purple-600 my-2">35×</div>
<div class="text-xs opacity-70">token per watt<br/>性能提升</div>
<div class="text-xs mt-1 opacity-50">能耗持续下降</div>
</div>

</div>

<div class="mt-4 text-xs opacity-50 text-center">
来源：Jensen Huang GTC 2025 Keynote · 硅谷101 现场录制
</div>

---
layout: default
---

# 从 GPU 公司到 AI 工厂

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**张璐（Fusion Fund）**：Jensen 希望大家不要单纯把英伟达看作一个 GPU 公司。他想把英伟达打造成一个人工智能的基础设施公司，一个巨大的人工智能工厂。它的产出是未来工作的新定义的生产力——**token**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**从卖芯片到卖工厂**

英伟达不再只是卖 GPU，而是提供完整的 AI 工厂方案——DGX 小型工作站、模块化数据中心设计、全套打包加速落地。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**一万亿的逻辑**

$1T 对应的是整个 AI 基础设施市场——不仅仅是芯片，还包括 NVLink Switch、Ethernet Switch、软件、系统集成。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**背景**：2024 年整个半导体产业销售额仅 $600B。AMD CEO Lisa Su 预测数据中心 AI 加速芯片到 2030 年到 $1T。Jensen 说英伟达一家 Vera + Rubin 系统 2027 年就能到 $1T。

</div>

---
layout: default
---

# 需求暴增 vs 供给硬约束

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

### 🔥 需求端

<div class="text-sm mt-2 leading-relaxed">
- Agent 大规模铺设 → 推理需求暴增
- 长上下文、低延迟、实时在线 → token 消耗指数增长
- 企业级 AI 部署 → 训练+推理双重需求
- 多模态（视频/图像）→ 算力消耗远超纯文本
</div>

</div>

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 🧊 供给端

<div class="text-sm mt-2 leading-relaxed">
- 半导体产能扩张无法用钱砸——建厂、过程控制、优化有固定周期
- CoWoS 先进封装产能虽涨 3 倍仍不足
- 电力配送被监管卡住——美国电网 bone dry
- HBM4 内存刚量产，CX-7/CPU/CDU 全面缺货
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**核心矛盾**：需求端是指数级增长的万亿美元订单，供给端是半导体物理定律和电力基础设施的硬约束。**这不是软件问题，用钱砸不出时间。**

</div>

---
layout: two-cols
---

# 供应链瓶颈：从晶圆到电网

<div class="text-sm leading-relaxed mt-2">

**志斌（前阿里含光800 架构师）**：

- 3nm 产能跟得上，但 **CoWoS 是最大瓶颈**——虽已扩产 3 倍，仍在持续疯狂扩产
- HBM4 已量产（美光/三星），各家在做 HBM4e 定制方案
- 电力配送是最终瓶颈——美国电网 bone dry，大厂直接包核电站

**张璐（Fusion Fund）**：

> "半导体产能扩张周期无法用钱砸出来，预投资、开生产线、过程控制优化——这个周期是确定的。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./supply-chain-bottleneck.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# CoWoS、HBM4、3nm：卡在哪里？

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 🔴 CoWoS 先进封装

台积电 CoWoS 产能 2024 年至今涨了 **3 倍**，仍在疯狂扩产。但即便如此仍可能无法满足 $1T 需求。**英伟达拿到大部分 CoWoS 配额**——这是 Jensen 多年信任建立的壁垒。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 🟡 HBM4 内存

美光、三星、SK Hynix 三家已量产 HBM4，同时在做 HBM4e 定制化方案。HBM 需求挤占了 DDR 产能——**DDR4 去年至今涨价 100-200%**，SSD 也开始缺货。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 🟢 3nm 晶圆

TSMC 3nm 产能跟得上，良率可观。三星作为 second source 也可以补产能——但良率相对台积电差一些。Intel EMIB 封装技术也很好，但商业上尚未成立（台积电不想把晶圆给 Intel 封装）。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Mark（前 NVIDIA 研究总监）**：英伟达一直在同时评估每家 foundry 的技术能力，Blackwell 用三星可能是因为台积电产能排不进去，三星正好有产能——但这只是猜测。

</div>

---
layout: two-cols
---

# 训练 → 推理：一场正在发生的翻转

<div class="text-sm leading-relaxed mt-2">

**训练 vs 推理的本质区别**：

- **训练**：一次性投入，类似建厂。大规模并行矩阵运算，适合 GPU 高吞吐。
- **推理**：持续性现金流。每次调用都消耗 token，长上下文 + Agent 循环更甚。

**微软 CTO 的预判（2023-2024）**：
未来更多成本在推理层，而非训练。

**张璐（Fusion Fund）** 的观察：
- 2023 年：~80% 训练，~20% 推理
- 2025 年：~50/50
- 2026-2027 年：~20% 训练，~80% 推理

> "如果你看长期的现金流，那一定是来自于推理。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./training-inference-shift.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么推理将主导未来支出

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### Agent 的推理特性

Agent 不是调用一次就结束——它是**持续性 inquiry**，需要：
- 低延迟、快速反应
- 实时在线
- 长上下文窗口
- 多次调用形成工作流

每一次 Agent 决策都消耗 token，而一个复杂任务可能需要数十甚至数百次调用。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Token 经济学的爆发

- **Open Cloud/OpenClaw** 带来 token 使用量千倍增长
- 中国 "赛龙虾" 速度远超美国
- 多模态（AI 短剧、视频生成）token 消耗量 "非常可怕"
- 大模型公司（Kimi、GLM 等）主要营收已转向卖 token

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

Jensen 在 GTC 上说：过去两年推理计算量增加 **一万倍**，使用量增加 **一百倍**——计算需求合计增加 **一百万倍**。

</div>

---
layout: two-cols
---

# Groq LPU：SRAM 的剑走偏锋

<div class="text-sm leading-relaxed mt-2">

**志斌（前阿里含光800 架构师，2017 起做 AI 推理芯片）**：

**SRAM vs DRAM**：
- SRAM：静态存储，1-2ns 延迟，6 个晶体管/bit，成本高但无需动态刷新
- DRAM：1 个晶体管/bit，容量大成本低，延迟高，需要动态刷新

**Groq 的做法**：
- 完全去掉 DRAM——纯 on-chip SRAM 存模型参数和 KV cache
- Weight 在片内，无需每次推理重新 load——消除 communication 开销
- 极致互联扩展到大集群

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sram-vs-dram.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Groq：为什么对 Agent 工作负载如此重要

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### GPU 不适合 Agent 应用

**LLM 推理的两个阶段**：
- **Encoder**：适合 GPU 高吞吐批处理
- **Decoder**：逐 token 生成，每次需从 memory load 全部 weight——**大部分时间在做 communication，不是 compute**

GPU 的 communication 开销在 decoder 阶段成为瓶颈。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### LPU 的核心优势

1. **极低延迟**：token per second per user 比 GPU 高 30 多倍
2. **稳定延迟曲线**：长时间 Agent 工作流保持平稳
3. **低能耗**：John Hennessy（斯坦福前校长）预判——通信能耗将是计算的 **10 倍以上**

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**Jensen 的建议**：未来数据中心留 **25% 空间**给 Groq 和推理芯片。英伟达 2025 年底收购 Groq，3 月 GTC 即发布 LPU——整合速度惊人。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**未来是异构的**：GPU（encoder/training）+ LPU（decoder/inference）+ 光交换机 + 3D 堆叠封装——不同芯片对应不同算子。

</div>

</div>

---
layout: default
---

# 7 颗芯片/年：英伟达的速度引擎

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Mark（前 NVIDIA 研究总监）**：两年前 Jensen 说两年一颗芯片 → 一年一颗 → 现在一年出好几颗。

</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 🤖 AI 设计芯片

内部 **100%** 工程师使用 coding agent，去年初从零到全面覆盖仅用一两个月。专用 AI 项目辅助芯片优化——不再只是增强人力，而是根本性地改变了设计流程。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 🔄 全栈反馈闭环

英伟达不只是芯片公司——它有 CUDA 生态、企业级优化、2 万+初创社区。自我反馈体系把客户需求到芯片优化的周期大幅缩短。能做 20 件事，精准锁定前 3-5 优先级。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### ⛓️ 供应链深度绑定

每年提前与供应链沟通 roadmap，供应链跟着英伟达 guidance 走。节奏速度持续加快——从设计到量产的全链路优化。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**对比**：传统半导体公司一年能发 1-2 颗芯片已是优秀。英伟达一次同步发 7 颗——速度差距背后是 AI 驱动的全栈迭代模式。

</div>

---
layout: default
---

# ChipNeMo：AI 如何设计芯片

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 从 CNN 到 LLM 的进化

**早期（CNN/GNN 时代）**：AI 只能解决芯片设计的局部问题——布线预测、拥塞检测等。

**现在（LLM + Agent）**：
- 2023 年发布 ChipNeMo——收集 **20+ billion tokens** 内部数据，训练 Llama 和 NemoChat 模型
- Chatbot 与设计文档交互，理解需求
- Agent 写 RTL（硬件描述代码）
- 形成**通用设计能力**，而非局部优化

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 当前局限与方向

- RTL 代码质量 "还没有那么高，有一定的进步空间"
- 真正的难点：不仅生成设计，还要**优化得好**
- 类似于 coding agent 在软件领域的局限——能做出来，做精还需要数据和经验

**Mark**：质量提升的空间仍然很大，但方向明确——通用 AI 设计能力正在形成。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**不只是英伟达**：其他芯片公司也已启动类似流程，内部大范围覆盖 coding agent。

</div>

---
layout: two-cols
---

# 英伟达的加速飞轮

<div class="text-sm leading-relaxed mt-2">

**为什么英伟达能这么快？**

传统芯片公司：设计 → 生产 → 客户反馈 → 再优化，周期长。

英伟达模式：**自我加速的闭环**——
1. AI 工厂愿景定义方向
2. CUDA 生态 + 2 万+初创提供密集反馈
3. 内部 AI（ChipNeMo + coding agent）加速设计
4. 20 个选项中快速锁定前 5 优先项
5. 供应链深度绑定，提前沟通 roadmap
6. 一年 7 芯片同步发布

**"这不仅仅是芯片公司——这是一个吞噬自己创新周期并加速吐出的引擎。"**

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./nvidia-feedback-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 数据中心危机：土地与电力

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed mt-4">

**Alex（GMI Cloud 创始人）**：数据中心的铺设速度非常快，但最终瓶颈是 **Land and Power**。美国的 US Grid 已经是 "bone dry"——你不可能拿到 10MW 以上的电。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 为什么不是缺电，而是缺配送

- 美国不缺电——高压输电 330KV 充足
- 问题在 **distribution**：从高压到可用电（400V→800V）
- 建变电站影响整个州的 grid stability，需要漫长审批
- **美国电网由油气行业运营**——"他们不是 tech guys，动作没硅谷这么快"

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 解决方案：跳过电网

- **90% 新数据中心 behind the meter**——就地发电
- 天然气燃气轮机直接燃烧，现场建站
- 大厂开始**包核电站**——"你也别卖给 grid 了，全部给我"
- 几百 MW 到 GW 级别建设
- 柴油发电机/天然气机组直接先上

</div>

</div>

---
layout: two-cols
---

# 建设时间线：18 个月 → 6 个月

<div class="text-sm leading-relaxed mt-2">

**从钢筋水泥到集装箱的革命**：

- 传统方式已不存在——没人再用钢筋水泥盖数据中心
- 40 尺海运柜：**pre-rack CDU + fiber + HVAC + UPS** 全部预装
- 混凝土 → 白地板（4 个月）→ 上架服务器（2-4 个月）

**旧方式**：18-20 个月（greenfield → serving）
**新方式**：6-9 个月（container 即插即用）

英伟达每年提前与供应链沟通更新节奏，供应链跟着英伟达 guidance 走——**scaling 速度只会继续加快**。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./datacenter-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Neo-Cloud：GPU 云的新物种

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-4">

**Alex（GMI Cloud）**：传统云（AWS/Azure/GCP）是 CPU 云 + 存储云，用 VM 虚拟化——VM 吃掉 10% 算力。CPU 时代一台服务器 $2-3 万无所谓，但 **GB300 是一栋几百万美金的房子**——你承受不起 VM 的损耗。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### Neo-Cloud 的做法

- **K8s 裸金属管理**——客户拿到 100% 算力效率
- **RNCP（英伟达合作伙伴）**：全球仅 7 家，拿到最新 GPU first batch
- GMI Cloud：全亚洲第一家 GB300 万卡水冷集群
- 年底上线 NVL72 at scale
- 唯一一家亚洲+美国双集群的 RNCP

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 运营 GPU 云的核心能力

1. **有卡就是上线** — 第一优先级
2. **极度稳定的运维** — 20 万+ unique parts，每个 part 至少 5% 工厂故障率，几千台机器互联，non-zero chance of failure
3. **DevOps 快速排查** — 硬件坏？光模块坏？switch 坏？K8s 坏？客户搞坏？
4. **模型服务优化** — 集群化 inference、BD/EP 骚操作，打低 token 成本

</div>

</div>

---
layout: default
---

# 全面短缺：不只是 GPU

<div class="text-xs opacity-60 mt-2 mb-2">Alex（GMI Cloud）的供应链实况：锁定 2027 全部产能，但价格无法确定。到 2027 年底都不会好转。</div>

<div class="grid grid-cols-4 gap-2 mt-3">

<div class="p-2 rounded bg-red-50 border-2 border-red-300 text-center text-sm">
<div class="text-xs opacity-60">DDR4 内存</div>
<div class="text-lg font-bold text-red-600">+200%</div>
<div class="text-xs opacity-50">去年至今涨幅</div>
</div>

<div class="p-2 rounded bg-red-50 border-2 border-red-300 text-center text-sm">
<div class="text-xs opacity-60">SSD 存储</div>
<div class="text-lg font-bold text-red-600">缺货</div>
<div class="text-xs opacity-50">HBM 挤出效应</div>
</div>

<div class="p-2 rounded bg-red-50 border-2 border-red-300 text-center text-sm">
<div class="text-xs opacity-60">CX-7 Switch</div>
<div class="text-lg font-bold text-red-600">缺货</div>
<div class="text-xs opacity-50">lead time 拉长</div>
</div>

<div class="p-2 rounded bg-red-50 border-2 border-red-300 text-center text-sm">
<div class="text-xs opacity-60">Intel CPU</div>
<div class="text-lg font-bold text-red-600">缺货</div>
<div class="text-xs opacity-50">亮黄灯/红灯</div>
</div>

<div class="p-2 rounded bg-orange-50 border-2 border-orange-300 text-center text-sm col-span-2">
<div class="text-xs opacity-60">CDU 水冷方案</div>
<div class="text-lg font-bold text-orange-600">开始缺货</div>
<div class="text-xs opacity-50">液冷大规模部署推高需求</div>
</div>

<div class="p-2 rounded bg-orange-50 border-2 border-orange-300 text-center text-sm col-span-2">
<div class="text-xs opacity-60">HBM 内存</div>
<div class="text-lg font-bold text-orange-600">挤压效应</div>
<div class="text-xs opacity-50">HBM 抢占产能 → DDR/SSD 全面紧张</div>
</div>

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs leading-relaxed">

**Mark**：前几年叙事是 compute（GPU/TPU），去年的叙事是 compute 背后的物理瓶颈——memory、storage、光（CPO）、半导体测试设备、光测试设备。**现在所有物理瓶颈都是财富密码。**

</div>

---
layout: default
---

# Agent as a Service：SaaS 的末日？

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed mt-4">

**Jensen 在 GTC 提出新概念**：**"Agent as a Service"** —— 对应传统的 SaaS（Software as a Service）。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### SaaS 的致命缺陷

- **标准化的软件服务**：不管什么公司，用的都是一样的软件
- Agent 能做到**高度定制化和个性化**——短时间自动生成企业 CRM 系统
- 如果 SaaS 公司自身没有 AI 模型能力，大概率未来会消失

**张璐**：科技创新三阶段——基础技术 → 技术应用 → 商业模式。Agent 正触发第三阶段的变革。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 机会仍然存在

- SaaS 不只是产品，也是销售网络、售后服务、客户关系的集合体
- 有 AI 模型能力的 SaaS 公司仍有转型机会
- 创业者可以瞄准将被淘汰的 SaaS 公司市场份额
- **新的 SaaS 公司必须做剧烈改变**——把行业经验 + 算力 + Agent 结合

**志斌**：两个关键——算力优化（ROI）+ 行业经验与 Agent 平台结合。

</div>

</div>

---
layout: default
---

# AI 劳动力：未来的公司架构

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**张璐（Fusion Fund）**："未来的公司不只是有 human labor，还有 AI labor。卖软件用的是 IT 预算，但卖 AI 劳动力——你可以用到劳动力预算，市场更大。"

</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 招聘逻辑的改变

**Jensen 原话**：以后招聘工程师，除了年薪，还要告诉他有**多少 token 额度**——他可以管理多少个 Agent 实习生或员工。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 新型组织架构

核心团队可能只有 **20-30 人**。HR、CFO、财务等功能外包给 AI Agent——以项目形式存在，不是全职。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### CEO 的新能力要求

不仅要管人，还要**管 AI Agent**。定义哪些职位以人为主导（核心部门），哪些可以外包给 AI Agent。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**NVIDIA 内部**：Jensen 说内部工程师基本都用 Claude Code。Mark 证实——去年初从零到 100% 覆盖只用了一两个月。不光是英伟达，其他芯片公司也已启动。

</div>

---
layout: default
---

# Open Cloud：中国先跑，美国跟进

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 市场现状

- **Jensen 在 open source panel 上说**："中国已经开始赛龙虾了"——美国速度还没中国疯狂
- 中国：养龙虾 + coding agent 发展极快。Kimi、GLM 等大模型公司主要营收已是卖 token
- 美国：AI coding + 多模态 video models。基于云的 Agent 方案公司还在**种子轮**
- Alex：可能还需要 **1-2 年**才有更大爆发——"it's not even here yet"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 为什么上云是必然

- 现在是 Mac mini / DGX Spark 试玩阶段——early adopter 中的 early adopter
- 企业不可能给每人发一台 DGX——给团队配几台 server "very unscalable"
- "Privacy is overrated"——true users 更在意便利性
- 一键部署的 Agent 公司正在涌现——UI 做得非常好
- 最终全部上云，"and that revolution hasn't started"

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**英伟达的 Nemo Cloud**：张璐认为英伟达不是想抓应用层收入，而是想**确定 agent deployment 的规则制定地位**——成为一个安全准入层级，所有部署都要在它平台上推进。

</div>

---
layout: default
---

# Google TPU：最被低估的对手

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### Google 的优势（超过英伟达）

**志斌**：
- Google 2017 年发布 TPU，持续做了很多代——**做系统/云的能力，包括互联、垂直供电，超过英伟达**
- Google 的 moat 已从 kernel level 扩大到 system level
- 拥有 Gemini 模型、YouTube 视频——能力全方位
- TPU 外放给 Anthropic 等公司，对外可接受程度越来越大

**AI 辅助优化**让不同芯片的适配成本在降低。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

### 为什么英伟达仍然领先

**张璐**：
- Google 内部全栈优化效果最好——training 成本可能只有 ChatGPT 的 **1/3**
- 但其他公司用 TPU 做不到这么低的成本
- 英伟达作为第三方服务多家企业，CUDA System 可针对不同客户需求优化
- 科技公司用 TPU 也出于**供应商多样化**考虑——不希望只有一个供应商

**从终端用户角度**：目前 TPU 和 GPU 性能差距不大。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**对 Jensen 来说，Google、OpenAI（自研芯片）、Apple 都是实实在在的威胁。** 但英伟达的核心优势在于执行力。

</div>

---
layout: two-cols
---

# 英伟达的竞争格局

<div class="text-sm leading-relaxed mt-2">

**多面围剿，但中心稳固**：

- **Google TPU**：系统能力超越英伟达，威胁最大
- **OpenAI 自研芯片**：摆脱供应商依赖
- **AMD**：推理权重增长利好
- **Groq/LPU**：已被收购，专注推理/Agent
- **Qualcomm NPU**：边缘端 AI 部署，低能耗
- **Physical AI 芯片**：机器人赛道，尚未收敛

**张璐给创业者的建议**：找英伟达顾不上的短板——interconnect、switch、optical compute。帮它补全短板 = 收购机会。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./competitive-landscape.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 英伟达的软肋：哪些方向最脆弱？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 🔴 私有化部署 / 边缘 AI

- 传统行业（金融/医疗/制造）因监管和数据隐私要求，**偏好私有化部署**
- Qualcomm NPU 押注边缘端 AI 低能耗部署
- 老黄对边缘端私有化部署 "比较担心"——快速推出 DGX 小 box 和 workstation
- OpenClaw 的出现加速了 digital agent / digital robot 需求

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 🟠 推理权重的结构性转移

- AMD 等 CPU 厂商可能在推理增长中受益
- 新型模型架构在 CPU 上运行比 GPU 更高效
- 未来 CPU 使用量会逐渐增加
- **志斌**：未来数据中心绝对是异构的——GPU + LPU + 光交换机 + 3D 堆叠

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

### 🟡 资本裹挟的压力

**张璐**：市值到达一定量级后，CEO 必须在维持市值增长和长期技术创新投入之间权衡。短期的收入优化 vs 长线的技术突破——"这不只是英伟达，任何公司到了这个位置都会面临。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 🟣 Physical AI / 机器人芯片

- 机器人 AI 芯片市场尚未收敛
- 谁把控 Physical AI 入口，数据中心后面会被引流
- BoM 成本目前只占机器人 7-8%——还不是瓶颈
- **但有战略机会**——两年前市场不成熟，现在正在变化

</div>

</div>

---
layout: default
---

# 英伟达的两大核心护城河

<div class="text-xs opacity-60 mt-2 mb-2">志斌总结：英伟达的真正护城河不是 CUDA，而是两样东西。</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### ⚡ 极致执行力

- 硅谷执行力最强的芯片公司之一（与 Broadcom 并列）
- AI 设计芯片（ChipNeMo）加速迭代
- 一年推出 7 款芯片
- 全栈反馈体系——自我加速闭环
- 能做 20 件事，精准锁定前 3-5 优先级

**传统芯片公司一年 1-2 颗，英伟达一年 7 颗同步发布。**

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300">

### 🔗 供应链控制力

- **老黄与台积电关系特别好**——多年的信任
- CoWoS 产能大部分在英伟达手上
- 即使 AMD/Google 接到订单，产能优先给英伟达
- 每年提前与供应链沟通，供应链跟着英伟达 guidance 走
- 从设计到量产的全链路绑定

**半导体产能是卖方市场——谁能拿到产能，谁就赢。**

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**张璐**："英伟达已经不是 GPU 公司了——它是人工智能基础设施，就像大的电力厂一样。不管你用什么芯片层，你可能在未来都会用到它的基础设施层。"

</div>

---
layout: default
---

# CUDA 护城河：正在被侵蚀？

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 正在削弱的方面

**志斌（根据大厂工程师反馈）**：
- CUDA kernel level 的 moat **越来越弱**
- 用 AI 写的基本上可以 **90%+ 与手动优化相当**
- Coding agent 降低了 CUDA 优化的门槛
- 其他芯片厂商已做类似 CUDA system 多年

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 依然坚固的方面

**张璐**：
- CUDA 已形成**全体系**——不是简单的软件层
- 开发者社区——**community 凝聚力、向心力**
- Inception Program：17 年从几百家到 **2 万+初创**
- 其他厂商做了好多年也没做出来
- **硬件 know-how 和数据**：这些东西 coding agent 还没有

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**观众提问**：Anthropic 的 Claude Code 会不会很快写出一个 CUDA？护城河壁垒在被快速削弱吗？

**张璐的回答**：这已经不是最重要的问题了。英伟达变成 AI 基础设施后，护城河多了很多——CUDA 只是其中之一。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**与 Google 工程师的交流**：coding agent 可以帮忙，但从底层上 "你还是不敢把你底层的权限交出去。"——私有化部署对核心 IP 保护至关重要。

</div>

</div>

---
layout: default
---

# Jensen 的供应链铁腕

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Intel EMIB 的商业悖论**：业界想用台积电晶圆 + Intel EMIB 封装，但——
- 台积电不想把晶圆给 Intel 封装
- Intel 说"用我封装必须用我 foundry"
- 商业上不成立——但有 hyperscaler 验证过 EMIB 很好用

**三星作为 second source**：良率相对台积电差一些，但能满足不同芯片产线需求。

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

### 过去一年的投资叙事变化

- **之前**：compute（GPU、TPU、Broadcom）
- **去年到现在**：compute 背后的物理瓶颈——memory、storage、光（CPO）、半导体测试设备
- **接下来**：所有 bottleneck 都是二级市场的财富密码

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 华尔街提前定价

- GTC 后英伟达股价没怎么动——**华尔街模型早已拆出万亿数字**
- Jensen 的 $1T 不是惊喜，是确认
- 股价不动不代表没价值——说明预期已被充分定价

</div>

</div>

---
layout: default
---

# GPU 折旧：华尔街 5 年 vs 现实 8 年

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300 text-center">

<div class="text-sm opacity-60">华尔街的回答</div>
<div class="text-5xl font-bold text-orange-600 my-3">5 年</div>
<div class="text-xs opacity-70">对冲基金的标准折旧模型</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-300 text-center">

<div class="text-sm opacity-60">现实中的回答</div>
<div class="text-5xl font-bold text-green-600 my-3">7-8 年</div>
<div class="text-xs opacity-70">V100（2017/2018）仍在用</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Alex（GMI Cloud）**："你去 AWS 上看能不能租到 A100 或 V100。租得到的话，good job——that's rare。V100 是 17/18 年的产品，**7-8 年了还在用，使用率非常高。**"

**原因**：需求量太大——不是芯片过时了，是芯片根本不够用。折旧速度被供不应求的现实压慢。

</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-4">GTC 2025 现场讨论中最值得记住的几句话：</div>

<div class="space-y-3">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm leading-relaxed">
"他想把英伟达打造成一个人工智能的基础设施的公司，一个巨大的人工智能的一个工厂。他的产出是未来工作的一个新定义的生产力，就是 token。"
<div class="text-xs opacity-50 mt-1">— 张璐（Fusion Fund）谈 Jensen 的战略定位</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm leading-relaxed">
"训练更像是一次性的一个成本投入，但推理它其实是一个长期的一个现金流。如果你看长期的现金流，那一定是来自于推理。"
<div class="text-xs opacity-50 mt-1">— 张璐（Fusion Fund）谈推理的经济学本质</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm leading-relaxed">
"美国的 US 的 Grid 已经是 bone dry。90% 新的 data center 建设都是 behind the meter……全部都是用 container 的方式来做。"
<div class="text-xs opacity-50 mt-1">— Alex（GMI Cloud）谈数据中心电力危机</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm leading-relaxed">
"执行力特别强的芯片公司，英伟达、Broadcom 这两家公司执行力非常非常强。老黄跟台积电的关系特别好，所以它的 CoWoS 的产能其实拿到的大部分在他手上。"
<div class="text-xs opacity-50 mt-1">— 肖志斌（ZFlow AI）谈英伟达的真正护城河</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm leading-relaxed">
"CUDA 在 kernel level 的 moat 越来越弱了，因为大家用 AI 写的基本上可以 90% 以上的跟手动优化差不多。但是英伟达已经变成了一个系统公司。"
<div class="text-xs opacity-50 mt-1">— 肖志斌（ZFlow AI）谈 CUDA 护城河的演变</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm leading-relaxed">
"未来可能一个公司它的核心是二三十个人。HR、CFO、财务这些都可以外包给各种各样的 AI agent。你不仅要管人的人才，你还要管 AI agent。"
<div class="text-xs opacity-50 mt-1">— 张璐（Fusion Fund）谈 Agent 时代的组织架构</div>
</div>

</div>

---
layout: end
---

# 谢谢收听

<div class="mt-6 text-sm opacity-60">
本期节目不构成任何投资建议
</div>

<div class="mt-2 text-xs opacity-50">
硅谷101 · 洪军主持 · 2026年3月
</div>

<div class="mt-6 text-base italic opacity-70">
"The keynote's over, all we said is Jensen made a big mess..."
</div>

<div class="mt-4">
  <a href="../../" class="text-xs opacity-40 hover:opacity-80 transition">← 返回 声笺 Resonote</a>
</div>
