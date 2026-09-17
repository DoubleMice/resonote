---
theme: academic
colorSchema: light
diagramMode: static
title: E251｜推理芯片之战：聊聊Groq、Cerebras与OpenAI三大路径与Bill Dally的设计哲学
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# E251｜推理芯片之战

<div class="text-xl mt-6 opacity-90">Groq、Cerebras 与 OpenAI 的三种取舍</div>

<div class="mt-10 text-sm opacity-70">硅谷101｜嘉宾：Mark、子阳</div>

<div class="mt-3 text-sm opacity-70">讨论范围：云端大模型推理</div>

---
layout: default
---

# 推理芯片要回答的四个问题

<div class="rn-note rn-note-wide mt-4" data-note-diagram="topics" role="group" aria-label="本期讨论的四个问题">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>为什么推理受带宽限制</strong><p>生成阶段要反复读取模型权重，和训练时的大规模并行不同。</p></div></div>
<div class="rn-note-card"><div><strong>SRAM 如何改变系统</strong><p>把存储移近计算单元，换来带宽，也压缩了单芯片容量。</p></div></div>
<div class="rn-note-card"><div><strong>三条路线在牺牲什么</strong><p>Groq、Cerebras 与 OpenAI 分别把取舍放在调度、制造和能耗上。</p></div></div>
<div class="rn-note-card"><div><strong>怎样衡量一套方案</strong><p>从单颗芯片的纸面指标，回到每个 token 的成本和单用户速度。</p></div></div>
</div>
</div>

---
layout: two-cols-header
---

# 同一次提问，推理有两段不同的工作

::left::

用户输入提示词后，模型先处理已知文本。这一段称为 <strong>prefill</strong>：许多 token 可以并行计算，GPU 能较充分地发挥算力。

随后进入逐词生成的 <strong>decode</strong>。下一个 token 依赖上一个 token 的结果，过程具有自回归的顺序约束；每生成一个 token，模型权重又要从存储介质读向计算单元。

两位嘉宾把这一差别概括为：训练和 prefill 更看重计算并行度，decode 更容易卡在读取模型的带宽上。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="inference-stages" role="group" aria-label="大模型推理的两个阶段">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>输入提示词</strong><p>文本中的 token 已知。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>Prefill</strong><p>可并行处理，适合高算力吞吐。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>Decode</strong><p>逐个生成，反复读取整套权重。</p></div></div>
</div>
<p class="rn-note-caption">阶段的计算形态不同，因此不必由同一种硬件承担全部工作。</p>
</div>
</div>

---
layout: default
---

# GPU 的批处理：提高吞吐，也会拉长单用户等待

GPU 不适合只为一个用户生成一个 token。为了让大量计算单元同时工作，系统会把许多用户的请求组成一个批次，再并行计算这一批请求的下一个 token。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="gpu-batching" role="group" aria-label="GPU 批处理与单用户延迟的关系">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>汇集请求</strong><p>系统收集多个用户的生成任务。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>按批计算</strong><p>一次读取权重，处理这一批请求的同一生成步。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>用户等待批次完成</strong><p>单个请求的顺序生成，仍受整个批次节奏影响。</p></div></div>
</div>
</div>

---
layout: default
---

# 存储选择：容量、带宽与位置不能同时最大化

<div class="rn-note rn-note-wide mt-4" data-note-diagram="memory-tradeoffs" role="group" aria-label="DRAM、HBM 与 SRAM 的存储取舍">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>DRAM</strong><p>容量大、成本低；离计算单元更远，读写速度较慢。</p></div></div>
<div class="rn-note-card"><div><strong>HBM</strong><p>把 DRAM 紧邻计算芯片封装，提供高带宽和大容量，但采购成本高。</p></div></div>
<div class="rn-note-card"><div><strong>SRAM</strong><p>可集成在计算芯片内，连线短、带宽高；同样容量占用的芯片面积很大。</p></div></div>
</div>
<p class="rn-note-caption">节目中的比较针对云端推理；端侧设备还要受体积与单机价格约束。</p>
</div>

---
layout: two-cols-header
---

# 把 SRAM 做成系统：容量问题转成通信问题

::left::

嘉宾认为，SRAM 的带宽性价比来自更靠近计算单元的存储位置；代价是单颗芯片容纳的权重有限。要把一个大型模型放进 SRAM，就需要把权重分散到大量芯片上。

他们介绍的创业方案以约数千颗芯片为尺度：每颗芯片存一部分权重，隐藏状态依次穿过芯片网络。系统设计的难点不再只是存下模型，而是让芯片间传输不成为新的瓶颈。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="distributed-sram" role="group" aria-label="分布式 SRAM 推理系统的工作过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>权重分片</strong><p>模型参数放在多颗芯片的 SRAM 中。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>隐藏状态传递</strong><p>数据沿芯片网络经过对应的计算。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>输出下一个 token</strong><p>网络带宽决定系统能否兑现 SRAM 的优势。</p></div></div>
</div>
<p class="rn-note-caption">这是嘉宾正在探索的系统级设想，并非已经发布的性能结果。</p>
</div>
</div>

---
layout: two-cols-header
---

# Groq：用静态调度换取确定性，MoE 带来新摩擦

::left::

嘉宾将 Groq 的路线概括为围绕编译器设计硬件：在运行前安排各时钟周期的计算与通信，运行时减少调度开销；SRAM 和同步时钟也让读取时间更可预测。

问题在于，MoE 会在运行时为每个 token 选择少数专家。专家选择无法在编译阶段完全预知，而模型又不能都放在一颗 SRAM 芯片内。静态计划需要为这种动态路由留出余量，可能出现空转并损失性价比。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="static-scheduling-moe" role="group" aria-label="静态调度与动态专家路由的张力">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>编译时可见</strong><p>计算与通信预先排布，追求低延迟和确定性。</p></div></div>
<div class="rn-note-card"><div><strong>运行时才确定</strong><p>MoE 的专家选择随 token 改变，需要动态路由。</p></div></div>
</div>
<p class="rn-note-caption">嘉宾的判断是：这会影响资源利用率，并不等于静态路线失去价值。</p>
</div>
</div>

---
layout: default
---

# Cerebras：把更多核心放进晶圆，制造成本随之上升

嘉宾把 Cerebras 的思路理解为另一种解决大规模通信的办法：把大量计算核心放进一整片晶圆，缩短原本跨多颗芯片的物理距离，并提高片内连线带宽。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="wafer-scale-tradeoffs" role="group" aria-label="晶圆级设计的收益与代价">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>通信距离变短</strong><p>原本跨机柜或跨芯片的连接，更多在晶圆内部完成。</p></div></div>
<div class="rn-note-card"><div><strong>需要容错设计</strong><p>产品要绕过晶圆上的部分缺陷核心，也要配套新的软件与机柜方案。</p></div></div>
<div class="rn-note-card"><div><strong>良率抬高单位成本</strong><p>若整片晶圆达不到可接受的缺陷条件，投入的制造成本无法像普通芯片那样分摊。</p></div></div>
</div>
<p class="rn-note-caption">嘉宾认为，晶圆级系统的低延迟优势必须与制造良率和系统工程成本一起计算。</p>
</div>

---
layout: two-cols-header
---

# 一套推理系统，最终要算每个 token 的账

::left::

两位嘉宾不建议只看芯片的峰值算力、带宽或容量。面向云端推理，用户真正购买的是系统在给定时间内产出 token 的能力。

他们优先看两个结果：单用户每秒能生成多少 token，以及系统生产每个 token 的价格。利用率、编译器和互联会影响这两个结果；功耗的重要性则取决于当地能源是否稀缺。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="total-cost" role="group" aria-label="数据中心总成本的两部分">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>资本开支</strong><p>采购芯片、服务器和数据中心设施。</p></div></div>
<div class="rn-note-card"><div><strong>运营开支</strong><p>运行期间的电力、散热等能源消耗。</p></div></div>
</div>
<p class="rn-note-caption">总成本除以计划生命周期内产出的 token，才接近部署者关心的单位经济性。</p>
</div>
</div>

---
layout: default
---

# 对 Agent 而言，更快不只意味着更早显示答案

人类阅读速度有限，普通对话的输出超过约百 token 每秒，用户未必能直接感到差异。但嘉宾指出，思维链和 Agent 的许多 token 并不给人阅读，而是供模型内部推演或交给另一个 Agent。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="speed-and-reasoning" role="group" aria-label="在相同截止时间内提高推理速度的意义">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>外部期限不变</strong><p>例如一分钟内给出答复，或在市场变化前完成判断。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>单用户生成更快</strong><p>系统在同一时间窗口内能完成更多顺序推理步骤。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>可安排更多内部工作</strong><p>嘉宾预计模型可用更多 token 推演，或让多个 Agent 执行任务。</p></div></div>
</div>
</div>

---
layout: default
---

# 模型在变，芯片先瞄准相对稳定的部分

<div class="rn-note rn-note-wide mt-4" data-note-diagram="model-hardware-scope" role="group" aria-label="模型变化如何影响硬件范围选择">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>注意力机制仍在演进</strong><p>嘉宾观察到 Transformer 的注意力侧仍有频繁的算法变化。</p></div></div>
<div class="rn-note-card"><div><strong>FFN 与 MoE 较为稳定</strong><p>他们的方案更倾向处理 Transformer 的非注意力部分，并与其他硬件配合。</p></div></div>
<div class="rn-note-card"><div><strong>扩散模型是另一类负载</strong><p>图像、视频生成往往更计算密集，可能适合不同的硬件范式。</p></div></div>
<div class="rn-note-card"><div><strong>RL 不必然改写芯片</strong><p>若训练方法不改变模型结构，嘉宾认为对架构选择的影响较小。</p></div></div>
</div>
<p class="rn-note-caption">这是一种产品范围选择：先为变化较慢、需求明确的工作负载设计，再处理其余模型。</p>
</div>

---
layout: two-cols-header
---

# 纸面算力为什么常常跑不满

::left::

嘉宾借用 Roofline 模型说明：当工作负载需要的数据来得不够快，矩阵乘法单元只能等待，峰值算力就无法兑现。推理还由大量细碎算子组成，频繁调度也会带来额外损耗。

因此他们同时提到两类利用率：MFU 观察矩阵计算的使用程度；MBU 观察访存带宽是否被吃满。带宽满载并不表示算力也满载，二者取决于芯片为工作负载配置的比例。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="utilization-bottleneck" role="group" aria-label="带宽瓶颈导致算力闲置的过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>数据到达太慢</strong><p>本地 HBM 或跨芯片互联的传输跟不上。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>矩阵单元等待</strong><p>计算核心没有可用输入，只能空转。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>实际利用率下降</strong><p>峰值算力与真实任务表现出现差距。</p></div></div>
</div>
</div>
</div>

---
layout: default
---

# 从用户场景反推：芯片只是系统设计的一环

<div class="rn-note rn-note-wide mt-4" data-note-diagram="chip-design-process" role="group" aria-label="从需求到芯片交付的设计顺序">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>定义工作负载</strong><p>确定模型、客户要求和交付时点的需求。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>先设计服务器与集群</strong><p>节点规模、互联、供电和散热决定单芯片约束。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>落实到芯片与交付</strong><p>微架构、编译器、验证、封装和整机工程依次展开。</p></div></div>
</div>
<p class="rn-note-caption">子阳在 Amazon Trainium 的经历，让他把软件栈和用户体验放在反推链条的起点。</p>
</div>

---
layout: default
---

# 新推理架构为何有机会出现，仍要跨过哪些门槛

<div class="rn-note rn-note-wide mt-4" data-note-diagram="new-chip-conditions" role="group" aria-label="新推理芯片的有利条件与现实约束">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>工作负载更集中</strong><p>嘉宾认为，Transformer 的重复层结构让专用优化比面对数千种 CPU 应用更可行。</p></div></div>
<div class="rn-note-card"><div><strong>软件门槛可被压低</strong><p>面向少数关键算子和运行时的优化，正受到 AI 编程工具的加速。</p></div></div>
<div class="rn-note-card"><div><strong>CUDA 可以被绕开</strong><p>嘉宾预计，推理部署会更愿意用软件便利交换更低的 token 成本和更高性能。</p></div></div>
<div class="rn-note-card"><div><strong>制造与供给仍是硬约束</strong><p>设计正确不等于能规模交付；流片、先进封装和供应链能力都会决定产量。</p></div></div>
</div>
</div>

---
layout: two-cols-header
---

# OpenAI Teren：把异构收进一颗更通用的芯片

::left::

节目补录时，两位嘉宾根据公开资料解读 OpenAI 与博通发布的 Teren。他们认为这是一颗偏通用的推理芯片：Prefill、Decode、Attention 与 FFN 都在同一颗芯片内完成，并用 HBM4 提供带宽。

这与 SRAM 系统级异构的出发点不同。嘉宾的解释是，美国数据中心更受电力供给约束，OpenAI 因而更优先关注每单位电力能产出多少 token，即使为容量、通用性和带宽投入更高的硬件成本。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="openai-teren-tradeoff" role="group" aria-label="系统级异构与芯片内异构的对比">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>SRAM 系统级异构</strong><p>不同芯片分担不同阶段，优先追求带宽的单位成本。</p></div></div>
<div class="rn-note-card"><div><strong>Teren 芯片内异构</strong><p>同一颗通用芯片可关闭或降功耗部分单元，优先提高能效。</p></div></div>
</div>
<p class="rn-note-caption">嘉宾也指出，长上下文的 KV Cache 容量会动态增长，因此不适合优先放进 SRAM。</p>
</div>
</div>

---
layout: default
---

# Bill Dally 的原则：局部性决定数据该放在哪里

Mark 将导师 Bill Dally 的方法归结为先找系统中最难、影响最大的限制，再明确为了突破它可以牺牲什么。局部性是其中一条基础原则：数据离计算越近、被再次使用的机会越大，系统越容易高效。

<div class="rn-note rn-note-wide mt-4" data-note-diagram="locality" role="group" aria-label="时间局部性、空间局部性与推理解码的关系">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>时间局部性</strong><p>刚使用过的数据，短时间内可能还会再次使用；CPU cache 利用了这一点。</p></div></div>
<div class="rn-note-card"><div><strong>空间局部性</strong><p>访问一段数据后，邻近数据也可能很快被访问。</p></div></div>
<div class="rn-note-card"><div><strong>Decode 的反例</strong><p>嘉宾认为，自回归生成削弱了这两种算法层面的局部性。</p></div></div>
<div class="rn-note-card"><div><strong>架构上的补偿</strong><p>把权重放进靠近计算的 SRAM，是用物理位置弥补局部性不足。</p></div></div>
</div>
</div>

---
layout: default
---

# 研究与创业：同一个技术问题，有两种完成方式

<div class="rn-note rn-note-wide mt-4" data-note-diagram="research-and-startup" role="group" aria-label="研究与芯片创业对工程问题的不同要求">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>研究：以最小代价获取知识</strong><p>Mark 说，设计分析往往能在流片前判断技术瓶颈；失败不一定说明问题不值得解决。</p></div></div>
<div class="rn-note-card"><div><strong>创业：完成剩余的工程</strong><p>供电、散热、封装、测试和量产未必改变原理判断，却决定产品能否交付。</p></div></div>
</div>
<p class="rn-note-caption">Mark 受到 Bill Dally 的影响，更重视寻找系统级难题与可接受的取舍，而不把 GPU 当成唯一答案。</p>
</div>

---
layout: end
---

# 推理芯片之争，落在不同的稀缺资源上

<div class="mt-8 grid grid-cols-3 gap-3 text-left text-sm leading-relaxed">
<div class="p-3 rounded bg-green-900 border-l-4 border-green-500"><strong>Groq</strong><br>用静态编译和 SRAM 争取确定性与低延迟，面对 MoE 的动态路由。</div>
<div class="p-3 rounded bg-purple-900 border-l-4 border-purple-500"><strong>Cerebras</strong><br>用晶圆级系统缩短通信距离，也承担良率和整机工程的成本。</div>
<div class="p-3 rounded bg-orange-900 border-l-4 border-orange-500"><strong>OpenAI Teren</strong><br>以通用性和能效为先，把更多异构能力放进单颗芯片。</div>
</div>

<div class="mt-7 text-base opacity-90">节目给出的共同尺度是系统结果：单用户生成速度、每个 token 的成本，以及部署地点的能源约束。</div>
