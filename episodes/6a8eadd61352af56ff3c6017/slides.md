---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '152. 领读Kimi K3技术报告：从架构创新聊起，注意力美学、多教师蒸馏和开源MoE'
info: |
  张小珺 × 孙宇涛（清华大学博士候选人），
  从 Kimi K3 技术报告出发，串联十余篇论文的架构演进脉络。
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 领读 Kimi K3 技术报告

<div class="text-3xl mt-6 opacity-90">孙宇涛 × 张小珺</div>

<div class="mt-8 text-lg opacity-70 leading-relaxed">
注意力美学 · 多教师蒸馏 · 开源 MoE<br>
2.8T 参数 · 100B 激活 · 全量开源
</div>

<div class="mt-12 text-sm opacity-60">
清华大学计算机系博士候选人 · 上海创智学院普瑞学者 · 2026-08
</div>

---

# 这期节目为什么值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### ① K3 是什么
有效扩展到 2.8T 总参数、全量开源的 MoE 模型，激活参数约 100B，上下文 1M。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### ② 一节课讲完注意力演进
从 RetNet 到 Mamba、DeltaNet、Gated DeltaNet，再到 K3 的 Kimi Delta Attention。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### ③ 稳定性优先的工程哲学
Gated MLA、tanh-H 激活、Quantile Balancing——每个设计都在回答怎么训得稳。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### ④ 开源 MoE 的新路线
LatentMoE 压缩通信、MoE-EP 冗余专家均衡，推理收益比训练更大。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### ⑤ 多教师蒸馏
学生做题、老师批改的逆蒸馏，把异构 reward 变成同构模型再合板。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### ⑥ 不止论文
K2→K3 的战略转变、Kimi vs DeepSeek 的路线分化，还有一条"暴论"。

</div>

</div>

---

# K3 全景：一次"有效"的 2.8T scaling

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 总参数
<div class="text-4xl font-bold text-blue-600 my-2">2.8T</div>
<div class="text-xs opacity-70">MoE，全量开源</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 激活参数
<div class="text-4xl font-bold text-purple-600 my-2">100B</div>
<div class="text-xs opacity-70">发布时远超国内其他开源模型</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 上下文
<div class="text-4xl font-bold text-green-600 my-2">1M</div>
<div class="text-xs opacity-70">更大窗口，解决更复杂任务</div>

</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**什么是"有效"的 scaling？** 孙宇涛的对比：随便起一个 2.8T 的模型、跑 100B token 就放出来，那是无效的。K3 是在 2.8T 这个规模上做出了真正有效的 scaling——"**更大的模型才有更大的一个智能上限，如果别的东西没有做太错的话**"。

</div>

---

# 领读人：为什么是孙宇涛

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

清华大学计算机系博士候选人、上海创智学院普瑞学者。**2023 年开始研究 LLM 架构与预训练**（ChatGPT 发布之前方向就已定下），两三年间围绕"推理高效性"做了一系列架构工作：RetNet、Ultralight、Looped Language Model。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 行业范式之变

业界架构研究从性能导向走向效率导向：ImageNet 时代靠精妙设计提升表现；大模型时代，**"模型的参数量永远是一个最主要的一个因素"**，架构改进带来的性能提升相对微小，但推理性能差异巨大——这决定了部署形态。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 为什么热爱架构创新

"比较好玩"，而且能**四两拨千斤**——一个 chunk 递归计算形式本身也是 infra 层面的创新。不过他也坦言：到 2026 年，架构创新能做的越来越少了。

</div>

</div>

---
layout: two-cols
---

# 从全注意力到混合注意力

- 线性注意力的长上下文能力始终追不上全注意力 → 承认失败，两者混合
- **3:1** 是目前实验上比较 work 的方案（4 层里 1 层全注意力）
- 纯线性注意力的加速比上限 ≈ **4 倍**，想再高就得换路子

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

"混合注意力它其实虽然从架构上来讲是一种tradeoff，但是从最后模型本身的表现来说并不是一个tradeoff。"——保持一定全注意力比例，长上下文**无损甚至更好**，这也是它被大规模采用的原因。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hybrid-attention.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# RetNet：线性注意力的两个基石

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

孙宇涛的博士起点。当年的问题是：**线性注意力怎么在 general 场景下逼近全注意力的性能？** 两个答案，后来成为几乎所有线性注意力工作的标配：

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 基石一：衰减项

语言特性是**更近的位置权重更高**。线性注意力原本位置不敏感，引入与 token 位置有关的衰减后，能在有限状态空间里优先建模贡献最大的信息。之后 Mamba 又把它升级为位置相关的衰减。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 基石二：chunk-wise recurrent

全递归太慢、纯并行享受不到复杂度收益。**chunk 间递归、chunk 内并行**——复杂度收益和 tensor core 利用率两头都占。Mamba2、Gated DeltaNet 到 KDA 全沿用这个计算形式。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

结论也很诚实：作为纯线性注意力模型，"无疑是一个比较失败的一个尝试"。但也正是这个失败，把大家推向了混合注意力。

</div>

---
layout: two-cols
---

# 四年演进，一步一 credit

孙宇涛讲论文的习惯：**把 research 脉络打开**——每一项设计背后都有历史原因，每一项都有明确的 credit。

- 衰减项：RetNet 引入，之后基本都被保留
- 位置相关衰减：Mamba 的贡献
- 更高上下文容量：DeltaNet（delta rule）
- 可并行 kernel：Gated DeltaNet 解决 GPU 化难题
- K3 的 Kimi Delta Attention 站在链条终点

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

所有论文都建立在此前无数个 related work 的基础之上——这也是 Kimi 做得好的地方：客观引用前人工作，不削弱别人的贡献。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./attention-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Kimi Delta Attention：衰减从标量走向 channel-wise

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

直接读 KDA 的公式会觉得"特别特别长"，每个项都对应一段历史。相比 Gated DeltaNet，K3 的关键改动只有一处：**把衰减项从标量变成 channel-wise**——同一个 head 里，每个 channel 可以有不同的衰减系数。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 得到什么

channel-wise 衰减可以退化回均匀衰减，所以是**严格更强的能力上限**（formula 意义上严格更好）。

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 代价是什么

kernel 更难写。标量衰减一个 tile 只有一个变量、非常好处理；channel-wise 之后，**利用 tensor core 的方式要重新设计**。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

**作者概括**：KDA 的推理动机——把 GQA 的计算能力扩展一步，能力增强带来的 infra 麻烦，用模型表达范围内的权衡去消化，最后得到 K3 采用的形态。

</div>

---
layout: two-cols
---

# 一次典型的 co-design

- 想处理更 fine-grained 的衰减，Q/K 要乘衰减的**倒数变换**——用绝对位置表示相对位置（和 RoPE 同一思路："减二可以表示为这个三减五"）
- 于是 Q 或 K 一侧会除以一个很小的数，数值上要控制在 **BF16 动态范围**内才有效
- Kimi Linear 的设定：**16 个 token 的窗口**
- 数学反解：16 token 内最多允许衰减多少，正好不越界

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**结论**：算法层面主动限制衰减程度，让 kernelize 更通畅——模型与 infra 的 co-design，而不是单方面迁就。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./decay-window.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Gated MLA：给 MLA 加上训练稳定性

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

MLA 大家已经很熟：**DeepSeek V2 提出，主要目的是减少 KV cache 开销**，之后被 V3 和 Kimi K2 采用。K3 继续沿用，但加了一个门控操作——Gated Attention 最早来自 Anthropic，大家最买账的点是**训练稳定性**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 为什么稳定性 > 能力

"模型的能力其实本质上最主要的因素是模型的参数大小。所以说好一点差一点它都不如稳定性要重要。"——run 训不起来，前面所有 checkpoint 全废。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 正交设计

Gated 与 GQA/MLA 本身**正交**——不破坏 MLA 的推理性质，又能提升训练稳定性。K3 把两者结合，等于能跑的东西不动、再加一层保险。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：Gated 在 Anthropic 之后的多代模型里被反复验证，是被广泛接受的做法。

</div>

---

# MLA 之争：Agent 时代还要不要它？

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

Kimi 的卢福利曾对孙宇涛说：**Agent 时代 MLA 应该会被替代**——MLA 在推理阶段计算浪费太多，MTP 能把剩余算力更有效地用起来。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 孙宇涛的回应

"MLA它本身就是MQA的一个等价的一个形式"——本质上没有带来新东西，只是更好的 tradeoff。他认为 MLA 的收益，更好的 GQA 参数设计基本都能拿到。

</div>

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 那为什么 K3 还用？

"对于一个从工程或者说从组织管理上，**能跑的东西就不要动**"。MLA 在 K2 上验证过，没有大问题就暂不动——他也承认这是个"比较暂态的一个状态"。

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

卢福利的视角：MLA 在 H 系列芯片上为了访存/计算比例而设计，但"计算剩余的实在太多了"，MTP 能更有效利用。孙宇涛总结："我觉得它从来也没有是共识，**它只是一个选择**。"

</div>

---

# Attention Residual：残差连接的前世今生

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

ResNet 时代凯明就讨论过 pre-LayerNorm 与 post-LayerNorm 的稳定性问题：BERT 时代 post 结果略好，模型变大后 post 出现梯度消失，于是大家都转向 pre。**Attention Residual 不是简单的 LayerNorm 摆放区别**——苏剑林强调过这点，风险在于一旦触及 post-LayerNorm 的老问题，大 run 没人敢上。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 超集关系
attention residual 至少可以退化到 pre-LayerNorm，是**严格更强**的结果。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 推理免费
"对于推理来说基本是免费的"——不增加推理开销就能提升结果，大家上得没压力。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 反面约束
一切用更慢实现换更好表现的方法都会被 question——"我为什么不能去扩更大的size，这样还更简单一些"。

</div>

</div>

---
layout: two-cols
---

# 三条连接方式

- **DenseNet（黄高）**：深层聚合所有浅层状态——attention 时代之前，连接问题已经被想过了
- **Hyperconnection（微软）**：残差分支用比 hidden state 更大的容量——思想相当简洁，但"paper写的太抽象了，不太容易读"
- **Attention Residual**：把 DenseNet 的重部件换成轻量部件，用 block attention 解耦深度

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

孙宇涛被问到哪个创新性最强：**DenseNet 和 Hyperconnection**——大的框架，前人早就定好了。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./residual-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# LatentMoE：把通信量降下来

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

英伟达团队今年年初提出的方案。MoE 训练最大的挑战之一：**all-to-all dispatch 的通信开销**，随 hidden state 大小和激活专家数并行增长。EP 模式下这个 overhead 相当大，还反过来影响 infra 选型。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 思路

把 dispatch 的 hidden state 先压到**低维 latent（减小 2 倍、4 倍）**再分发；损失的参数量用两种方式补回：提高 FFN intermediate 维度，或拆更多专家、激活更多专家。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 为什么近似 free lunch

"一个恰当设计的LatentMOE的一个configuration，它其实是可以完全保持这个standard MOE的这样的一个结果的"——能力不变、通信大减，论文结果甚至更好。"它其实还是一个这个free lunch或者类似free lunch的这样的一个结构。"

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**训练 vs 推理**：训练优化 throughput，通信可以用 overlap 掩盖；推理的 latency 在 critical path 上，掩盖不掉——**推理的收益比训练更大**。

</div>

---
layout: two-cols
---

# 通信减小的连锁反应

- 训练：通信量小了，overlap 手段变得简单
- 推理：latency 不在 critical path 上多等通信
- 两个矩阵连乘的教训：**中间一定要加 normalization**（MLA 的低秩投影如此，LatentMoE 的压缩投影也如此，K3 用 RMSNorm 控制）

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">

两个矩阵连乘在表达能力上是 trivial 的（可以合并），但优化性质完全不同——经常训练不稳定。拆开写就必须配稳定手段。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./latent-moe.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# SiLU / tanh-H：把 MLP 的激活 bound 住

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

大模型训练里，FFN 的中间 hidden state 特别容易 **activation explode**——和优化器有关，也和精度有关：精度越低，中间态越容易出 outlier。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### DeepSeek V3：hard clip
SwiGLU 直接 clip 到 5-10，数学上严格限制上界，但比较粗暴。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### K3：soft clip
hard clip 升级成 **tanh-H**——平滑逼近上下界，把 MLP 中间所有 unbounded 环节都 bound 住，得到严格的数学上界。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 背景之争
K2 用 Muon 优化器后 QK outlier 容易爆炸，Moonlight 做了 QK clip 特化处理；Gemma、Starling 等用 QK norm。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**孙宇涛 vs 苏剑林**：孙认为 Muon 更容易引 outlier；苏剑林会反驳——任何优化器都一定会出现 outlier，模型架构上控制不了，"如果想严格控制的方法，它一定是直接从模型架构下手"。孙宇涛也承认这一点，所以在架构上把激活 bound 住。

</div>

---

# Quantile Balancing：分位数负载均衡

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

苏剑林博客里讲的技术（没有发论文）。背景是 Loss-Free routing：只用一个 **bias** 控制每个 token 选哪些 expert，但 bias 的更新是启发式的——没有严格的数学收敛标准，而且和前几层不太兼容。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Q-B 的做法

激活多了就把 bias 往下砍，少了就往上加——但更新量不是拍脑袋，而是**用线性规划直接推导 bias 应该长什么样**，最后得到一步解析形式。为了不泄漏信息，bias 不在当前 step 使用，下一步才生效。

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 两个优势

**不需要调参数**（Loss-Free 有个类似 learning rate 的更新参数，少一个变量）；负载均衡能力更优——底层第一层不需要再做成 dense（那是 Loss-Free 治不好底层而"不得不"的做法）。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**K3 的实现细节**（博客没写）：几十 million token 的大 batch 算精确分位数工程上不可能。K3 改为在**值域上切桶做 histogram 统计**（sigmoid 激活落在 0-1 区间，切 N 个桶），常数存储、计算高效，DDP 下容易扩展。

</div>

---

# Vision Encoder：从零训练 vs 用 SigLIP 2 初始化

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

用现成的大模型 Vision Encoder（比如 SigLIP 2）初始化，收敛更快——但 K3 团队发现：**直接用 SigLIP 初始化，模型的不稳定性比 native training 更大**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 从零训练

多花一些算力，但训练得当的话**结果不会有损**，甚至差不多或更好；gradient norm 分布更稳定，尖刺更少。

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 原生的兼容性

SigLIP 用 Adam 训练，而 K3 希望走**全 Momentum（Muon）的优化路线**——用 Adam 训练的模型能否用 Momentum 反推？结论是"比较原生的方式它肯定是最好的"。从零训练对 Muon 更兼容。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

**作者概括**：这是稳定性优先哲学的又一个例子——少一点收敛加速，换训练全程的稳定与可控。

</div>

---

# 为什么 K3 不用 Sparse Attention？

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### ① 收益小，开销大

Sparse 求 index 这一步相当昂贵，**Blackwell 上越先进的硬件 overhead 越大**——decode 阶段甚至不比 full attention 显著加速。GLM 的 GLM-Index-Cache 把 index 跨层共享（每四层、每八层共享一次）才把开销压下来。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### ② 混合架构下共享不显然

跨层共享 index 最简单的做法是相邻层复用，但 hybrid attention 里 full attention 层**并不相邻**——中间隔着很多线性注意力层，index share 是否有效、加速比够不够高，"相当question"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### ③ 没法 from scratch 训

Sparse Attention 现在都是 **post-train 从 full attention 转化**。K3 团队自己的实验也印证：跨层分摊 index 开销，才能吃到 sparse 的计算收益。

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**结论**：现阶段先不上，"留给接口之后再做也行"——用了 MoE 之后转化会更难，但这个口子没有堵死。

</div>

---

# 忒修斯之船：什么是 Transformer？

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

2017 年，这艘船刚下水的时候叫 Transformer——拼起来的是 **Attention 加 Residual**。八年九年过去，零件被一块块换掉：线性注意力、新的连接方式、新的激活、新的 MoE……按孙宇涛的说法，这艘船"跟Transformer已经离了"，"**相似度已经很低很低了**"——那是否还把它叫做 Transformer？他答：这当然是哲学上的一个问题。

</div>

<div class="mt-6 p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded text-xl italic leading-relaxed">

"我的暴论就是大模型可能没有太本质的创新了，后面都是一些改良型的进步。"

<div class="text-sm opacity-60 mt-2 not-italic">— 孙宇涛对行业未来的判断（节目中两处出现）</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

**为什么 K3 看起来像"集大成"**：因为是否还把它叫做 Transformer 都已经成了问题——定义早已模糊。现在的架构验证要靠 scaling 实验、工程细节、数据一起跑出来——单点拿出来不再是里程碑。

</div>

---

# K2 → K3：战略上的转变

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

K2 当时主要沿用 DeepSeek V3 的结构，发力点是模型 scaling 本身；K3 从观感上"跟K2大不一样"——引入了大量新的设计元素。孙宇涛的判断：**这是战略问题，不是能力问题**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### K2 的使命：把 base 做稳

1T training，当时比 DeepSeek V3 还大。先把整个 pipeline 做稳、把能力做出来，暂时不考虑更精益求精的创新。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### K3 的使命：精益求精

在稳的基础上追求优化。架构团队内部其实一直在做研究，只是看"以什么时候这个亮出来"而已——研究工作本来就是长期的，放在哪个模型里一起结合，是战略选择。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

集百家之长被孙宇涛看作科学的方式：想把模型做好，就不能只用自己的工作，"这个行业都是由大家集体推动的"——K3 对前人工作的引用方式，他自己评价是"比较客观或者比较真实地"。

</div>

---

# Scaling Law：WSD 还是 cosine decay？

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

MiniCPM 提出 WSD 之后，K3 之前几乎所有团队都在用。WSD 的洞察：**cooldown这个阶段它其实是模型学习最快的一个阶段**——那为什么不把更好的数据放到 cooldown 里训？这是 data schedule 和 learning rate schedule 的联动。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### WSD 的好处

learning rate 恒定，与要训的 token 数**无关**——训练中途可以自由切换：17T 改成 20T、提前发版、推迟发版，都不用提前定死。

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 但没那么美

"你跑17T可能余弦退火是最优的，你跑20T可能就是线性退火是最优的"——LR 其实和 token 数绑定，**任意扩展未必有效**。而且 WSD 多一个要调的变量：decay 比例。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**K3 的选择**：cosine decay——只有两个变量（token 数、max learning rate），"它其实更好调"。在大家都用 WSD 的时期，这是不太一样的 setting。

</div>

---

# K2 → K3 的数字：更大，而且更高效

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 总参数
<div class="text-3xl font-bold text-blue-600 my-2">1T → 2.8T</div>
<div class="text-xs opacity-70">大了不到 3 倍</div>

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 激活参数
<div class="text-3xl font-bold text-purple-600 my-2">~3 倍多</div>
<div class="text-xs opacity-70">来到 100B 量级，是提升最多的一项</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### Chinchilla 效率
<div class="text-3xl font-bold text-green-600 my-2">2.5 倍</div>
<div class="text-xs opacity-70">K3 相对 K2 的 scaling efficiency</div>

</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

这个综合结果来自架构 + training recipe + 数据策略的叠加。孙宇涛的注脚：**从模型能力本质上，参数大小还是最有效的方式**——"当然如果只看benchmark的话，你有无数种方式去达到一个对内或者对外一个满意的结果。但是从模型的能力本质上，模型的参数大小还是最有效的一个方式。"

</div>

---

# 长上下文：RoPE 下掉，NoPE 上位

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

K3 原生支持 128K 长上下文。位置编码的选择是亮点：Cohere 团队最早指出——hybrid attention 里，**线性注意力已经引入了位置信息**，全注意力层可以放心把 RoPE 拿掉。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### RoPE 的真相

"RoPE它并不带来任何的长文能力，**它甚至是损害长文能力的**。"它本质带来的是 recency bias——对短上下文建模特别有效，扩长文要调参数，不调参数硬外推结果很差。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### NoPE 的优雅

**不需要调整任何模型架构参数**就能达到长上下文效果——外推效果更好，长文效果也没问题，因为模型架构的参数选择与具体长度无关。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

孙宇涛的背书：看到论文第二天就去复现，然后也很 work——"当时我直接给了一个strong accept。我感觉我这几年可能都没有给过几个strong accept"

</div>

---

# Post-training：低精度该在哪个阶段引入？

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek V3
原生 FP8 训练。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepSeek V4
更激进：W4A8 原生训练。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Kimi K3
高精度训练，**SFT 阶段再引入 QAT**。

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 项目管理角度

大规模训练用高精度"无论如何也不会错"——更大规模的训练很难提前被精确验证，低精度带来的不可控因素是团队承受不起的。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 技术角度

"从from scratch刚开始就引入并不会带来任何模型能力的一个提升"——只要过了足够的训练量，W4A8 何时引入结果都差不多。**SFT 阶段引入更保险，且无额外损失**。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

RL 部分：Kimi 从 K1.5 到 K2.5 一直在做持续创新，K3 也充分引入——都是比较成熟的方案，节目里未展开。

</div>

---
layout: two-cols
---

# 逆蒸馏 = on-policy distillation

- **黑盒蒸馏**：拿 API 就能做，模型是黑盒，只能拿到输入输出
- **白盒蒸馏**：拿得到模型和任意中间状态
- **MiniLM 反其道而行**（董老师团队、微软亚洲院，作者是清华特奖）：让学生自己生成答案，老师**逐步纠正推理过程**——一种是老师讲课、学生把结果学进来，另一种是学生自己作答、老师逐步纠正
- 后来叫 **on-policy distillation**，从蒸馏工具变成了 post-training 的主流范式

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**作者概括**：OPT 最初用来做大模型蒸馏小模型（pro → flash）；但现在大家都做旗舰模型，变成了"自己蒸馏自己"。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./distillation.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 多教师合板：把异构的 reward 变成同构的模型

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

为什么现在流行"自己蒸馏自己"？两个原因，一个管理、一个技术：

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 管理：post-training 合板很难

pre-training 把数据合起来一起干就行；post-training 用了各种先进策略，直接合板难度大。**on-policy distillation 能把整个 post-training team 的管理简化**。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 技术：reward 异构，模型同构

训 math 用 verifiable reward，偏好用 reward model，每个能力的 reward 都是独特的。把它们**简化成不同的模型**就同构了——现在也不会为不同任务专门设计不同模型架构，多教师合板于是容易很多。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

不是 K3 首创——"现在大家这个是一个大家现在比较widely accepted的一个做法"：印象里小米、GLM 都是这么做的。

</div>

---

# Draft model：MTP、EAGLE3 与 DeepEAGLE

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

投机解码最初用一个无关的小模型 speculate 大模型——问题是**无法利用大模型的 hidden state**。EAGLE3 和 MTP 的思路：用大模型中间状态做 draft，小模型可以更小，或在相同参数下接收率更高。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### DeepEAGLE：接上 diffusion LM

diffusion language model 在小 batch/单用户场景更快，但 from scratch 训不好、且只能打小 batch throughput。DeepEAGLE 把两条脉络结合，优化 draft 的加速比。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### MTP 要在预训练就留接口

陈剑（DeepEAGLE 作者）的观点：draft model 需要借用大模型的推理能力，**MTP 接口要在 pretrain 阶段就引入**；draft 模型再用 KL loss 替代 next-token loss 特化微调，接收率更高。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

参考坐标：小米推出过**1000 tokens** 的方案——Transformer 团队的高融合算子（三四百 tokens）+ TensorRT + DeepSeek 投机推理叠加。孙宇涛认为 K3 的 draft model 优化"优化的不是很完善"。

</div>

---
layout: two-cols
---

# 线性注意力的并行有独特玩法

- chunk-wise recurrent 是线性注意力的必备算法：chunk 内并行、chunk 间递归
- 关键性质：**chunk 怎么拆，数学上完全等价**，拆法不受架构限制
- 于是可以拆两层：先按大 chunk 跨 GPU 递归（每卡 8K），卡内再拆 16-tile 并行
- KDA 的 8K 限制，正是为了 chunk 内部并行计算的高效性

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">

对比：full attention 的 CP（ring attention / zigzag）省不了跨 GPU 通信；linear attention 的 CP 更复杂，收益更细。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./kda-cp.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 把 infra 从非最优推向最优

- **dropless EP**：每个 token 自由选专家，卡间负载天然不均 → 执行时间不等、互相等待；通信还多一步告知对方收多少 token 的阶段
- 带 drop 的 EP 每卡完全均衡，但丢 token 对模型能力损失明显
- Kimi 的做法：**加少量冗余专家**——只需小比例冗余，就能保证卡间 token 数完全对齐（"像是一个比较经典的数据结构与算法的一个问题"）
- 用 **online planning** 提前规划哪些卡放哪些冗余专家

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

边界：卡间均衡 ≠ 专家间均衡（一张卡有多个专家）。想做到专家级均衡，就只能走有损策略。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./moe-ep.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 通信 overlap：架构选型决定工程方案

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

DeepSeek V3 为了藏通信做了两件很重的事：把 MOE 的 dispatch/combine 拆到原子计算层面手工重排，以及 **DualPipe** 的 pipeline 排布。K3 都没采用——因为架构变了，解法更简单。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 单 batch 内 overlap 就够了

LatentMoE 把通信量减小了特别多 → 不需要跟另一个 batch 的算力交叉，**用 shared expert 的计算把前向/后向通信 overlap 掉**即可。"推理的这个 critical path latency 它是免费的。"

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### PP 的不对称处理

单向 PP 天然不对称：靠前的 rank 进得早、activation 压力大。Kimi 不引入 DualPipe，而是把高占用 PP rank 的内存**转移到低占用 rank**——轻量方式避开复杂设计。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

"它其实也不是完全无损的"——即使通信和计算完美隐藏，计算也会相对慢一些。DPEP 的思路是用足够少的 SM 占用换更大的通信 throughput，让 overlap 跑得更快。

</div>

---

# Muon 与多模态推理的工程细节

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### Muon 切分是个问题

Muon 需要**全矩阵做牛顿式二次迭代**——某个 rank 上要把一个矩阵的所有参数都保存下来。而 Adam 是 element-wise，怎么切都不影响优化结果。所以 Muon 在 optimizer 层面做分布式切分，需要特殊处理。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### Vision encoder 的 CP

视觉 token 进大模型前会被压缩（32K → 8K），但压缩发生在 encoder 之后，encoder 内部计算更长 → **vision encoder 需要开 CP**，即使模型主干不需要。

</div>

</div>

<div class="mt-4 p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30 text-sm">

### PP 的位置：不放开头

VL native training 里，不同卡上视觉 token 比例差异大，会影响 DP 也影响 PP——把 vision encoder 放在**开头会破坏流水线打满**。K3 把它放中间或尾巴，让前面闲置的 PP 阶段提前算 encoder 后续步骤，规避第一个 PP 的巨大气泡。

</div>

---

# RL 的工程细节：docker 与 gradient buffer reuse

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

RL 本身涉及大量推理，与 inference 有 overlap；它对大规模 sandbox 有很细的要求：

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 每个 trajectory 一个 docker

RL 任务里每一个 trajectory 都对应一个自己的 docker——如何管理**大规模 docker**，是 RL infra 最麻烦的问题之一。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### gradient buffer reuse

完整 RL 有主模型、reference model、gradient + optimizer，可能还有 reward model，显存压力很大。K3 发现：**reference model 没有梯度**，求完 objective 就不再用——于是让它和 gradient buffer 共用一块内存（gradient buffer reuse for non-policy model forwarding）。

</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">

孙宇涛对论文详尽度的评价：这些细节不写，大家只能"沉迷于小道消息"私下打听；写出来，"大家就不需要去找小道消息了"。infer 上的事情本质上是确定性的，复现不难，难的是自己提出方案。

</div>

---

# 为什么 Kimi 显得"科学"？

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

孙宇涛认同 Kimi 的研究方式科学，并把原因归结到内部管理：大家公认 Kimi 是最强调**"模型内科"**的团队——让 pretraining 变得更科学：不同行为的 trace 以更可靠的方式获取，模型的不稳定性、collapse 现象可以**更明确地归因**。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 什么是科学

学术创新有明确标准：有明确的 evaluation、足够的变量控制、用更科学的方式说明有效性——这些"大家都是认可的"。

</div>

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50 bg-opacity-30">

### 什么是不科学

"基于某些利益需求然后把科学的方式都干掉了，那这就是不科学。"——他特指任何技术。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">

"这个团队非常团结"，而且"非常的能把劲往一处使"——"如果大家是这样的 motivation，你的判断方式自然而然就是科学的。"以及一句常被引用的话：Kimi 的团队氛围是"谁有道理谁说了算"。

</div>

---

# K3 vs V4：两种开源路线

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### DeepSeek：性价比路线

出了两档模型——1.2T 一档、更小的 Flash 一档，Flash 做得很好。**"目前还是更强调一个性价比"**。

</div>

<div class="p-3 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### Kimi：能力上限路线

"主要的精力还是尝试去**提升开源模型的一个能力的上限**"——也不是完全不考虑性价比，"至少说你模型的性价比不是一个最首要的一个考虑条件"——K3 的 API 相当贵，比别的模型贵多了。

</div>

</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded text-lg italic leading-relaxed">

"技术层面的东西只要大家不笨，都是知道什么是好什么是不好的"。"组织团队的走向则取决于人的选择"

<div class="text-sm opacity-60 mt-2 not-italic">— 孙宇涛谈 Kimi 与 DeepSeek 是否会分化</div>

</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">

K3 的定位：国内第一个把模型 scale 到一定程度、把 RL 全链路打通的——"你把激活多了三倍，把模型也扩大三倍，它就是下一个 level"。

</div>

---

# 100B 激活：一个非技术决定，但需要魄力

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

问 K3 最 impressive 的地方，孙宇涛的答案不是某个架构创新：**"他们把这个激活搞得特别特别大，就足足有 100 billion"**——比他预期的还要大。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### 非技术决定

"这个不依赖任何能力，就是你具体定多少激活这个本身它不是一个技术性的东西，就看你想要达到什么阶段的一个效果。"——在已有开源模型的基础上提升一个数量级，"**这个决定是一个非技术性的一个决定，但是这个是需要一定的魄力的**"。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 没有阶跃式创新

"科学研究是不存在阶跃性的提升的，只是说大家习惯把这个技术的渐进性提升的某些节点会成为一个 milestone。"有价值的技术创新 K3 都单写了论文，"K3 刚出来的时候我主要就 surprise 这个 size，别的我都不超过预期的"。

</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">

**核心观点**："你扩大模型size它本身不是创新，**你把这个东西做work它中间才有创新**。"——一个完全靠团队做起来的东西。

</div>

---

# 未来：size 继续涨，AGI 需要被定义

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### size 还会涨

"模型size毫无疑问还会继续扩大。"——只要大家能定义清楚一个能力（强coding、AI的coding），就能达成。"只要大家能定义一个能力就能去达成。"

</div>

<div class="p-4 rounded border-l-4 border-purple-400 bg-purple-50 bg-opacity-30">

### AGI 的最大问题

"AGI最大的问题就是它**没有被well-defined**。"如果定义到具身、真实物理世界交互，gap 还很大；在 language model 的 scope 里讨论，问题不大。

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-orange-500 bg-orange-50 bg-opacity-30">

### 不可能是无限大

"人类互联网上能集结到的所有的信息量，这个是有限的"——预训练数据有限，模型没有必要、也不可能无限。未来任务更难，可能拓宽到更宽的 bound。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 为什么去探索世界模型

个人选择：大模型已经没有太大的改良空间改进空间，"没有大的突破的话就没有大的这个credit"——世界模型问题更大，但"至少是一个新的东西"。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="px-3 py-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"我的暴论就是大模型可能没有太本质的创新了，后面都是一些改良型的进步。"
<div class="text-xs opacity-60 mt-1 not-italic">— 孙宇涛对行业未来的判断</div>
</div>

<div class="px-3 py-2 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"混合注意力它其实虽然从架构上来讲是一种tradeoff，但是从最后模型本身的表现来说并不是一个tradeoff。"
<div class="text-xs opacity-60 mt-1 not-italic">— 混合注意力被大规模采用的原因</div>
</div>

<div class="px-3 py-2 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"科学研究是不存在阶跃性的提升的，只是说大家习惯把这个技术的渐进性提升的某些节点会成为一个 milestone。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于技术里程碑与 K3 的定位</div>
</div>

<div class="px-3 py-2 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"更大的模型才有更大的一个智能上限，如果别的东西没有做太错的话。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 size 与智能的第一性原理</div>
</div>

<div class="px-3 py-2 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"有道理你就，对吧，谁有道理谁说了算嘛。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 Kimi 的团队文化</div>
</div>

<div class="px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"AGI最大的问题就是它没有被well-defined。"
<div class="text-xs opacity-60 mt-1 not-italic">— 关于 AGI 与能力的定义</div>
</div>

</div>

---

# 「技术永远是慢慢去提升的」

<div class="mt-8 text-lg opacity-80 italic leading-relaxed">
"技术永远是慢慢去提升，然后靠这个公司里的所有人，<br>
项目里的所有人，包括整个业界的同学一块去推动的。"
</div>

<div class="mt-12 text-sm opacity-60">
孙宇涛 × 张小珺 · 2026-08<br>
清华大学计算机系 · 上海创智学院
</div>
