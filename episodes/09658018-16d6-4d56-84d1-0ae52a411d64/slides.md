---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '163: 详解DeepSeekV4：Infra巨鲸、百万上下文走进现实、极致效率优化'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 详解 DeepSeek V4

<div class="text-xl opacity-70 mt-4">Infra 巨鲸、百万上下文走进现实、极致效率优化</div>

<div class="text-sm opacity-50 mt-8">晚点聊 · 第 163 期 · 2026 年 4 月</div>

<div class="text-sm opacity-60 mt-2">嘉宾：刘一峰（UCLA 博士生，模型架构）· 赵晨阳（RadixArc / sglang，Infra）</div>

---
layout: two-cols
---

# 为什么这期特别

<div class="text-sm opacity-60 mb-2">2026 年 4 月，DeepSeek V4 发布。两位一线 AI 从业者拆解技术报告。</div>

<div class="space-y-2 mt-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>四个新东西一起上</b>
混合稀疏注意力、Muon 优化器、MHC 结构、Triton + FP4，全部替换并跑通。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>百万上下文走进现实</b>
从"理论可行"变成"成本可接受"，Agent 与多步任务直接受益。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>两个极端数字</b>
单 token 推理 FLOPs 仅为 V3.2 的 27%，KV Cache 占用仅为其 10%。
</div>

</div>

::right::

<div class="space-y-2 mt-8 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>激活比例压到 3%</b>
总参数 1.6T、激活约 49B，把 MoE 的解耦推到更极端的位置。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>范式之辩</b>
"范式变化这个词在 AI 圈子被用得有点叙事过载了"——这是组合创新，不是新范式。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>一线视角</b>
架构方向（UCLA 博士）+ Infra 方向（sglang 核心团队），发布当天跑通推理与 RL 全链路。
</div>

</div>

---

# 两位嘉宾，两个互补的视角

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 刘一峰 · 模型架构

- UCLA 计算机博士生，之前在月之暗面和字节 Seed 参与基础模型研发
- 研究方向：预训练优化器与模型架构、RL agent 项目
- 关注点：MLA 的取舍、Muon、MHC、token-wise 压缩的算法价值

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 赵晨阳 · Infra

- RadixArc 工程师，sglang 开源推理架构核心开发者
- sglang 生态在全球部署超过 **40 万张 GPU** 做生产级推理
- 在 V4 发布当天就把推理和强化学习两条链路都跑通了

</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**节目定位**：本期不是发布会复述，而是把技术报告拆开，讨论"每个改动为什么存在、组合起来意味着什么"。

</div>

---
layout: two-cols
---

# 一句话看懂 V4 的定位

<div class="text-sm leading-relaxed space-y-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>延续范式，而非开创范式</b>
继续在 R1 开创的测试时扩展范式下，用组合创新与工程优化，让百万上下文从理论进入实用性新阶段。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>四个层面同时动手</b>
注意力、优化器、模型结构、Infra——每个方向都换了新东西。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>共同目标</b>
这四个事情共同让百万上下文从"理论可行"变成"成本可接受"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-features.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 范式之辩（一）：这个词被用得太多了

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"范式变化这个词在AI圈子被用得有点叙事过载了。"

</div>

<div class="text-xs opacity-60 mt-2 mb-4">— 刘一峰，谈 V4 是否构成范式变化</div>

<div class="grid grid-cols-3 gap-4 text-sm mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 什么才算范式
<span class="text-xs opacity-70">Transformers、Scaling Law、RLHF / Constitutional AI、Test-Time Scaling——十年一遇级别的更替。</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### R1 的范式意义
<span class="text-xs opacity-70">一年前在开源世界走通了 long scale reasoning，属于开创范式。</span>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### V4 自己的定位
<span class="text-xs opacity-70">坦诚承认 follow R1 开创的范式，在范式内解决更难的问题。</span>

</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**作者概括**：如果每隔半年就要为 AI 找一个新范式，只能说明这个领域的发展还远远不成熟。

</div>

---

# 范式之辩（二）：真正的问题是"还有什么要做"

<div class="mt-4 p-5 text-xl italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">

"我们现在不是说我们能不能做到，而是说我们不知道我们还有哪些需要做的。"

</div>

<div class="text-xs opacity-60 mt-2 mb-4">— 刘一峰，谈 V4 带给从业者的感受</div>

<div class="grid grid-cols-2 gap-4 text-sm mt-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>能力领域才是关键</b>
提出新的能力领域（如 agent 能力、幻觉控制），比单个 benchmark 更重要；一个新能力被刷爆，大概只要半年到一年。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>接下来一两年的主旋律</b>
像 V4 这种系统级别耦合的工程——把百万上下文拆成无数细散优化，再组合成整体能跑的东西。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：这条路"很工程"，但商业价值巨大——刘一峰认为这是未来 1-2 年最确定的方向。

</div>

---

# 消失的训练成本：一个信号的转变

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### V3 时代
<div class="text-4xl font-bold text-red-600 my-2">557 万美元</div>
<div class="text-xs opacity-70">V3 明确公布的最后一次训练成本（2025 年 2 月开源周配套文章）。</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### V4 时代
<div class="text-4xl font-bold text-blue-600 my-2">不再公布</div>
<div class="text-xs opacity-70">技术报告与官方博客都没有明确讲这个数字。</div>

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**两位嘉宾的解读**：DeepSeek 不再是一个需要靠成本叙事来定义自己的团队，转而希望用模型能力本身发声；而 557 万只是"冰山一角"——刘一峰说"研发成本肯定是最后一次训练成本的几十倍吧"。

</div>

---

# 为什么推迟了两个多月？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>发布节奏</b>
原计划争取春节发布，实际晚了两个多月。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>组合爆炸</b>
一次引入四个互相耦合的新 feature——注意力机制、优化器、模型结构、训练精度一起换新。任何一个单独上线都需要大规模 debug，四个一起上就是组合爆炸问题。
</div>

</div>

<div class="mt-3 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**Infra 视角的推测**：MiMo 优化器（注：即 Muon）在超大 MoE 上的稳定性、FP8 在 forward/backward 上的生产级稳定，都是公开层面极为前沿的尝试，工期被拉长并不意外。

</div>

<div class="mt-3 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**另一个亮点**：V4 原生支持国产芯片——报告在并行 EP 方案里提到"在华为昇腾上做了技术验证"，但指的是推理侧；训练是否用了国产芯片，报告没有写，外界推测仍以英伟达为主。

</div>

---

# 上手体感：比 V3 好得多，但代码仍有差距

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 全面变好
<span class="text-xs opacity-70">数学推理、代码编写、agent 指令执行都要比 V3 好得多，幻觉也明显更少。</span>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 与谁接近
<span class="text-xs opacity-70">能力上跟 GPT 比较接近，体感上接近 Kimi K1.6 等第一梯队开源模型。</span>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 仍有差距
<span class="text-xs opacity-70">代码层面与国外的 GPT 相比，还是有一定差距。</span>

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**外部评测的尴尬**：Arena 上 V4 Pro 排名约 23，略逊于同期发布的 Qwen 3.5 Max、MiMo 2.5、GLM 5.1；Artificial Analysis 的 Intelligence Index 约 52，同样低于 MiMo 2.5、Kimi K2.6。**刷榜不是目的，但排名差异确实存在。**

</div>

---

# 内部评测：一次罕见的坦诚

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**V4 报告里做了一段像 arena 一样的内部双盲测试**：公司不同工程师面临不同任务，自行选择模型并给反馈，最后整体对标了 Claude 4.5 / 4.6、GPT-5.5 等。

</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600 my-1">≈ Opus 4.5</div>
V4 的内部分数大概在这个水平，与 Opus 4.6 和 GPT-5.5 仍有差距。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-3xl font-bold text-yellow-600 my-1">9%</div>
有 9% 的工程师说不会将 V4 Pro 作为首选模型。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600 my-1">数据飞轮</div>
"被使用是有这种数据的最佳方式"——全世界只有极少数公司在编程上有数据飞轮。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**作者概括**：内部采用意愿比任何 benchmark 排名都更接近真实价值；这也解释了大模型公司彼此混用模型辅助编程的现象。

</div>

---

# 效率革命：两个关键数字

<div class="grid grid-cols-2 gap-6 mt-6 text-center">

<div class="p-5 rounded bg-green-50 border-2 border-green-200">

<div class="text-xs opacity-60">单 token 推理 FLOPs（相对 V3.2）</div>
<div class="text-6xl font-bold text-green-600 my-3">27%</div>
<div class="text-xs opacity-70">同样的 token 数量，算力开销大幅下降</div>

</div>

<div class="p-5 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs opacity-60">KV Cache 占用（相对 V3.2）</div>
<div class="text-6xl font-bold text-blue-600 my-3">10%</div>
<div class="text-xs opacity-70">缓存显存需求降了一个数量级</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>性质</b>：这是压缩与稀疏带来的注意力改进——它有一个重要前提，下一页细讲。

</div>

---

# 效率的前提：上下文越长，优势越显著

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>关键约束</b>：FLOPs 27%、KV Cache 10% 这类数字，只有在长上下文下才成立。如果你的实际测试场景只有几千 token，V4 相对 V3.2 的节省根本不会这么极致——第三方拿"8K 输入 + 4K 输出"测出的速度，反映不出 V4 的架构优势。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>短上下文没收益</b>
几 K token 现在是连 system prompt 都打不住的状态；但常规编程、文字处理的 token 长度，已经能明显感受到提升。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>Agent 是最大受益者</b>
多步复杂任务上下文动辄上百万 token，这些 agent 会很有收益。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：结论一句话——上下文越长，这个效率带来的优势会越发显著。

</div>

---

# Token 浪费：拿着高压水枪浇花

<div class="mt-4 p-5 text-xl italic border-l-4 border-orange-500 bg-orange-50 bg-opacity-20">

"现在的token浪费有种拿着高压水枪浇花的美感。"

</div>

<div class="text-xs opacity-60 mt-2 mb-4">— 刘一峰，谈推理 token 消耗持续膨胀</div>

<div class="grid grid-cols-2 gap-4 text-sm mt-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>单 token 省了，总量却涨了</b>
很多用户反映：解决同一个问题消耗的 token 比之前大不少，整体效率提升被部分抵消。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>为什么会变长</b>
训练目标奖励"完成任务"而非"少用 token"；token-wise 注意力压缩丢信息，也需要更多 token 补足。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>行业的警示</b>：K1.5 报告里就有"长度惩罚"（对更长回复做惩罚），但即便有这类技术，token 增长依然不可逆——刘一峰认为这背后是训练上值得思考的地方。

</div>

---

# 注意力架构之变：MLA 被放弃了

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>背景</b>：DeepSeek V2 提出 MLA（对 KV 做低秩压缩，节省 KV Cache），V3 沿用并 scale up；Kimi K2、M5 系列至今仍用 MLA。而 V4 放弃了 MLA，回到更接近原始 Multi-Head Attention 的 MQA 路线。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>ICLR 会场之问</b>
今年 ICLR 上仍有大量基于 MLA 的改进（如并行 MLA）。大家讨论：继续在 MLA 范式上"深挖或雕花"的研究还有没有意义？
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>结论</b>
几个月前大家都认为开源模型架构已收敛到 MLA；V4 的转身说明——模型架构本身还有非常大的改进空间。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>两个注脚</b>：V4 舍弃 MLA，推测与底层实现复杂度有关（token-wise 压缩合并到 MLA 上实现太复杂）；DeepSeek 此前提出的 Infini-attention 也未被采用——能力提升有限，对 infra 挑战却很大。

</div>

---
layout: two-cols
---

# 新注意力：SWA + 双压缩

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>SWA 滑动窗口</b>
每一层都在跑滑动窗口注意力，负责短程局部信息。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>CSA 稀疏路线</b>
序列维度做 4:1 压缩，再做 top-k 选取，锁定关键 token。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>HCA 稠密路线</b>
更激进：128:1 压缩后仍保持稠密注意力，提供语义概览。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>每层预定义</b>
同一上下文从不同层看，有的是稀疏层、有的是稠密层，分工协作。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attention-mix.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 稀疏 vs 线性：一场路线之争

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>直观例子</b>
从 token 1 到 token 1024：线性注意力每步都在压缩信息，需要压缩 1023 次；128 窗口的 SWA 只需跳 8 次，几乎无损。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>线性注意力的上限</b>
隐藏状态不断压缩，在推理、数学推导等长程任务上上限较低；多用于千问 3.5 这类"中腰型"模型。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>前车之鉴</b>
MiniMax 2.0 用过 Lightning Attention（混合线性注意力），2.1 改回全注意力；M-1 是线性模型，M-2 起都是全注意力——lmsys 博客称之为 No Free Lunch。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./sparse-vs-linear.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Infra 适配的硬仗：Day 0 跑通

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>背景</b>：sglang 生态是全球部署最广的开源推理框架之一（超过 40 万张 GPU）。V4 的注意力变化让前缀缓存、投机采样等既有机制全部需要重做。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>Shadow Redis 缓存架构</b>
三个异构 KV cache 池，为 SWA 和两种压缩（4:1 / 128:1）分别维护压缩状态，还要保证 prefill、decode、投机采样三个阶段同步。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>HiSPARS 卸载策略</b>
针对稀疏注意力设计的 KV cache offload：把 KV cache 预卸载到 host memory，长上下文场景吞吐做到 5 倍以上。
</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：赵晨阳的团队在 V4 发布当天就把推理与强化学习两条链路全部跑通，最终各家评测处于领先地位。

</div>

---

# 激活比例：压到 3%

<div class="grid grid-cols-5 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-gray-100 border-2 border-gray-200">
<div class="text-xs opacity-60">V3</div>
<div class="text-2xl font-bold text-gray-600 my-1">5.5%</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">MiniMax M-2</div>
<div class="text-2xl font-bold text-blue-600 my-1">4.3%</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xs opacity-60">GLM-5.1</div>
<div class="text-2xl font-bold text-purple-600 my-1">5.3%</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xs opacity-60">Kimi K2</div>
<div class="text-2xl font-bold text-yellow-600 my-1">3.2%</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">V4 Pro</div>
<div class="text-2xl font-bold text-green-600 my-1">≈3%</div>
</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>数字本身</b>：V4 Pro 总参数 1.6T，激活参数约 49B，激活比例刚过 3%，是这一波模型里最低的。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>背后的工程信念</b>：总参数越大，知识容量越高；激活参数越小，推理成本越低。MoE 的核心价值就是把这两个量解耦——V4 把这种解耦推到了更极端的位置。当然，激活比例并非越低越好：太低可能带来负载不均、训练不充分、路由抖动。

</div>

---

# 3% 背后：指数级上升的难度

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>稀疏比的变化</b>：从 V3 时代的 5:1、10:1、20:1，V4 已提高到 30 多比 1、接近 40:1。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>难度随数量指数上升</b>
"从5%到4%的难度是一个样子，然后从4%到3%是另一个，是远远的强。" 40:1 意味着大量冗余 expert，需要保证专家训练平衡与 token 路由平衡。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>Hash 路由</b>
前几层 MoE 改用 Hash 路由做 token 分配，从算法层面避免路由高度集中在少数专家的问题。
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：其他团队未必做不到，但 V4 选了最极致的路线；刘一峰认为"3% 的激活比例能稳定训练到这种程度，再次印证了工程的极致能力"。

</div>

---
layout: two-cols
---

# Muon：把矩阵当作整体来优化

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>AdamW 的局限</b>
对每个元素独立更新（动量 + 归一化），忽略元素之间的联系——同一矩阵里有的元素已收敛，有的还没收敛。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>Muon 的做法</b>
把整个矩阵看作一个整体来优化，各元素步调一致，优化更快；对线性层这类本质是矩阵乘法的二维参数特别高效。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>一维参数仍用 AdamW</b>
embedding、layer norm、bias 不是矩阵，Muon 管不了，交给 AdamW。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./muon-matrix.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Muon 的来龙去脉：从个人开发者到行业标配

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 提出：Keller Jordan
<span class="text-xs opacity-70">本来是个人开发者，24 年 12 月因这个成果被招入 OpenAI。早期版本需要为每个 module 单独调 learning rate，对使用者不友好。</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 普及：Kimi Moonlight
<span class="text-xs opacity-70">让 Muon 与 AdamW 结合，并基本确定了二者的 learning rate 比例系数：0.2。从此全局只调一个参数。</span>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 精调：V4 用 0.18
<span class="text-xs opacity-70">没有沿用 Moonlight 的 0.2，而用了更精确的 0.18。Muon 由此从理论创新走向大规模应用。</span>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**行业现状**：近期更新的开源模型大部分已改用 Muon，但还有一部分没来得及改——尤其是后训练 infra 很难改；预训练与后训练的优化器必须保持一致。

</div>

---

# Muon 的 Infra 代价：省显存，费工程

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>省了什么</b>
Muon 砍掉了二阶动量，optimizer state 从两倍掉到一倍，节省大量显存。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<b>费了什么</b>
每轮要在 momentum 上跑牛顿-Schulz 迭代再做正交化——不再是逐元素操作，而是完整矩阵的 GEMM。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

<b>分布式难题</b>：做 GEMM 必须拿到完整二维权重——如果参数被 TP、FSDP 切碎，还得先聚合回来再算。调度逻辑、checkpointing、checkpoint resume 的复杂度远超以前。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

<b>判断标准</b>："Muon优化器是检验一个团队工程优化上限的很好试金石"——这笔账值不值，取决于团队工程水平、显卡数量与模型规模。

</div>

---
layout: two-cols
---

# MHC：把层间信息流"车道"加宽

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>HyperConnection</b>
在原有 D 维信息流之上加一个 channel 维，层间宽度变为 D×C，推理能力显著提升。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>朴素版本训不稳</b>
数学原理导致梯度回传不稳定，社区反响不大——"因为训不好"。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>MHC 的解法</b>
加入 synchro 算法，把信息流 scale 限制为 1，正反向传播不爆炸不消失。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>另一条路线</b>
Kimi 的 Attention Residual 做跨层直连（类似 DenseNet）；刘一峰认为它上限更高，但 MHC 的 infra 实现更简单。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mhc-lane.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Triton：编译器层从"苦差事"变成战略层

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### CUDA：英伟达的护城河
<span class="text-xs opacity-70">性能最高，但开发维护成本也最高。同一块 4096×4096 矩阵计算，按 128×128 还是 256×256 拆分，不同硬件效率不同——kernel 就是让底层计算变快的手艺。</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Triton：门槛更低
<span class="text-xs opacity-70">大幅降低写 kernel 的门槛，牺牲部分表达力与极端性能。V4 报告提到：kernel 启动开销压缩到微秒级别，且带来位级可重现——对推理工程师 debug 很有帮助。</span>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 地位的翻转
<span class="text-xs opacity-70">编译器层曾被戏称为"非常非常苦"的事，如今成了前沿 AI lab 的默认选择之一——为 MHC 等新算法快速写 kernel 的边际成本大大降低。</span>

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：赵晨阳团队也为小 batch 解码用 Triton 写了 split-k kernel；Triton 是北大发起的开源项目，如今被全球前沿 lab 当作默认选择，国内硬件厂商也主动支持这类 DSL。

</div>

---

# FP4：走出硬件厂商的 PPT

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 位宽减半
<span class="text-xs opacity-70">BF16（16 位）→ FP8 → FP4，浮点存储位宽不断减半。显存容量与数据读取带宽的需求近似砍半，直接带来提速。</span>

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 为什么难
<span class="text-xs opacity-70">FP4 的数值范围非常狭窄，超大规模训练中容易梯度溢出或归零——以前业界很少直接使用。</span>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 工业标准
<span class="text-xs opacity-70">"FP4 已经算是正式走出了这个硬件厂商的PPT，成为开源语言模型世界真正跑通超级模型的工业标准。" GPT-OSS 也用，Blackwell 卡原生支持。</span>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：V3 是第一个把 FP8 做到超大量级的模型，V4 把 FP4 做出来了——往下还能压缩到什么程度，值得期待。

</div>

---
layout: two-cols
---

# QAT：训练时假装量化，采样时真量化

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>强化学习是两阶段循环</b>
采样（rollout）→ 打分 → 训练。采样在超大模型、长 token budget 下可能占到 70% 以上的时间。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<b>训练阶段：模拟量化</b>
优化器维持 FP32 主权重，计算前压到 FP4 再反量化回 FP8，让量化误差在训练中被适应。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>采样阶段：真实 FP4</b>
真正用 FP4 权重采样，斩断访存瓶颈；与最终发布的 checkpoint 一致。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./qat-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 极致到哪一步：W4A4 vs W4A16

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### DeepSeek V4
<div class="text-3xl font-bold text-green-600 my-2">W4A4</div>
<div class="text-xs opacity-70 leading-relaxed">按报告的说法，DeepSeek 做到了更极限的 W4A4——权重是 4 位宽、激活值是 8 位宽，在极致性能上走得更远。</div>

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### S-Lab / 行业对标
<div class="text-3xl font-bold text-blue-600 my-2">W4A16</div>
<div class="text-xs opacity-70 leading-relaxed">赵晨阳团队的 INT4 量化感知训练还在 W4A16（权重 4 位、激活 16 位）——"实事求是地讲……我们其实相比DeepSeek还是有一些这个差距"，他直言这会是自己团队继续攻坚克难的方向。</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：Kimi K2 也用过训练时伪量化 + 采样时真实量化的方案——"行业里大家还是趟过同一条河的，背后的艰辛难能可贵"。

</div>

---
layout: two-cols
---

# 后训练：先分裂，再蒸馏

<div class="text-sm leading-relaxed space-y-2 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>多目标优化之难</b>
同时优化的目标越多，梯度冲突越严重——一味 push coding，数学可能就差了。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>做法</b>
先训练擅长不同技能的小专家，再把小专家的"精华"蒸馏进统一的学生模型，显著提升最终能力。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>本质</b>
把复杂的联合优化，换成已收敛离散点之间的插值——工程上更稳定可控。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>同行都在做</b>
Kimi 有 multi-stage 专家聚合；学术界的模型聚合、model spawning 从 GPT-2 时代就有。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distill-split.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Evaluation 不是 Benchmark

<div class="mt-4 p-5 text-xl italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"We cannot optimize what we did not, what we cannot evaluate."

</div>

<div class="text-xs opacity-60 mt-2 mb-4">— 赵晨阳转述一位 NLP 研究者的告诫：不能优化我们无法评测的东西</div>

<div class="grid grid-cols-3 gap-4 text-sm mt-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>benchmark 会过时</b>
一个 benchmark 发布一两年就会饱和，是 finishing problem；evaluation 才是永远重要的事。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>可信危机</b>
大家都在"vibe checking"——感觉不出模型好坏，只能凭几次对话判断；模型乍看 benchmark 全 90+，实际差异很大。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>值得欣喜的事</b>
这几代模型没有做 degradation——先前好过的任务再也没有差下去过。
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

<b>V4 测了什么</b>：多步任务的稳定性、长程对话人格一致、工具调用的鲁棒性——"这也是 V4 能不能进入第一梯队的真正问题所在"。不做好 evaluation，行业会陷入"自欺欺人的恶性循环"。

</div>

---

# 国产芯片与开源生态：巨鲸的另一面

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>报告里唯一一处提到国产芯片</b>
讲并行 EP 方案时提到"在华为昇腾上做了技术验证"——这是推理侧；训练是否使用国产芯片，报告没有写，外界推测仍以英伟达为主。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<b>开源推理引擎的哲学</b>
"众口要调"：同一套框架要同时 serve DeepSeek、小米、MiniMax、Kimi 的模型，整合性比单模型优化更重要。
</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**开源的价值**：让整个领域更透明。推理侧开源与闭源差距不大；训练侧闭源仍领先不少——以前一个模型 2 月上线，可能到 5、6 月才有开源 RL 框架能跑起来，而这次 V4 发布当天就支持了 RL 全链路。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**：开源推理引擎性能提升，也会反过来 push 闭源推理引擎进步。

</div>

---

# 公司文化：不诱于誉，不恐于谤

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>发布时引用</b>
"率道而行，端然正己"——出自《荀子·非十二子》。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<b>博客前两句</b>
"不诱于誉，不恐于谤"——不听追捧，不惧质疑；从去年下半年大家期待发版至今，团队承受着内外压力。
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

<b>刘一峰的解读</b>：引用《道德经》的"为而不恃，功成弗居"——创造万物却不占为己有，功业有成却不自我夸耀。"我觉得他们一直都是一个非常值得学习的团队。"

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>一个佐证</b>：V4 致谢名单里离职人员不多，约 5% 的比例——相比其他公司，DeepSeek 的流动率相当低。"不诱于誉"不只是公司的信仰，研发人员自己也专心做好自己的事。

</div>

---

# 中美两条路线：性能与性价比

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-30">

### 美国：先冲性能
- 算力多，不需要做那么稀疏——稀疏会牺牲一定上限
- 先做到之前模型做不到的事，再想降成本
- 强项：agentic coding 的数据闭环（RLHF/RLAIF + 巨量高质量人类反馈数据）

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 中国：极致性价比
- 同样能力下，收费比美国模型小一个数量级
- 强项：架构创新的密度 + 令人啧舌的工程完成度
- V4 一个报告里同时换掉混合稀疏注意力、Muon、FP4 并全部跑通——"这种决心和执行力相当罕见"

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>竞争的底色</b>：很多人批评中美大搞"太空竞赛"——"很遗憾，只有中美能搞太空竞赛，没有任何国家能够玩得起这波的AI比赛。" 整个行业仍在盘桓向上。

</div>

---

# 商业模式：订阅制还是按 token 计费？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<b>陈阳的立场</b>
"我心里是 vote for 订阅制，订阅制是一个更好的商业模式"——先订阅满，再加 token 付费；大部分用户用不到订阅顶格，订阅制反而更赚钱。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<b>反方逻辑</b>
订阅定高了没人买，定低了公司亏——很多公司因此转向按 token 计费。两家都没有给出很好的结论，Claude Code 盈利如何"且待且看"。
</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<b>参照系：视频生成</b>：用完额度再买积分，影视从业者有刚需、接受度高——视频生成类产品的客单价比想象中高很多，用户粘性也大，更倾向订阅制；开源视频/语音模型与闭源差距很大，反而说明它们很赚钱。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**作者概括**：关注度和舆论都被 coding / 通用 agent 吸引走，但视频与语音可能是更"创业友好"的方向——ElevenLabs 这类公司在自己的空间里存在。

</div>

---

# V4 的遗产：什么会被记住

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

<b>刘一峰的看法</b>：最可能被记住的是 token-wise 的极致压缩——从单 token 内的降维升维，到跨 token 的整体压缩，V4 是第一个把它用到工业级模型上的。

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

<b>赵晨阳的看法</b>：长上下文、极致低激活比例、低单 token 成本——这个组合无论 architecture-wise 还是 inference-wise，都是 V4 留下的持久遗产。

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

<b>具体技术会换代</b>：混合注意力未必会以现在这种形式被一直采用——就像 MoE，是某个阶段的最优解，一两个 round 后可能被更优雅的方案替代，硬件也会反过来推动替代。

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

<b>最终的定位</b>："DeepSeek V4 率先验证了这种工程配方，还是会成为后续许多开源大模型的默认起点。在这个意义上面，DeepSeek 一直是开源模型的参考基准。"

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"范式变化这个词在AI圈子被用得有点叙事过载了。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘一峰，对"范式"这个词的严格定义</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"我们现在不是说我们能不能做到，而是说我们不知道我们还有哪些需要做的。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘一峰，谈 V4 带给从业者的感受</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"现在的token浪费有种拿着高压水枪浇花的美感。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘一峰，谈推理 token 消耗持续膨胀</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"率道而行，端然正己。"
<div class="text-xs opacity-60 mt-1 not-italic">— DeepSeek 发布时引用，出自《荀子·非十二子》</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">关于工程、评测与行业：</div>

<div class="space-y-2">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"We cannot optimize what we did not, what we cannot evaluate."
<div class="text-xs opacity-60 mt-1 not-italic">— 赵晨阳转述一位 NLP 研究者的告诫：不能优化无法评测的东西</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"离开了Claude这个世界完全没有下雨。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵晨阳，Claude 因账单下线改换 Codex 后的体验</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"为而不恃，功成弗居。"
<div class="text-xs opacity-60 mt-1 not-italic">— 刘一峰引《道德经》，评价 DeepSeek 的团队状态</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"one million token应该拿去做更重要的事情。"
<div class="text-xs opacity-60 mt-1 not-italic">— 赵晨阳，关于上下文的高效利用</div>
</div>

</div>

---
layout: end
class: text-center
---

# 详解 DeepSeek V4

<div class="mt-6 text-xl opacity-80 italic">

"DeepSeek 一直是开源模型的参考基准。"

</div>

<div class="mt-4 text-sm opacity-60">晚点聊 · 第 163 期 · 与刘一峰、赵晨阳对谈</div>
