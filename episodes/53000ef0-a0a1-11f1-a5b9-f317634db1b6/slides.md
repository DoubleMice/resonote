---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'One Type of Post-Quantum Cryptography Is Most Popular. Why Is Crypto Trying Out Three? | Illia Polosukhin & Charles Guillemet'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 后量子密码学：全世界用同一种，加密圈为何试三种？

<div class="text-sm opacity-60 mt-4">
Unchained · 2026 年 8 月 · 1 小时 3 分钟
</div>

<div class="text-xs opacity-50 mt-6">
Illia Polosukhin（NEAR 联合创始人）· Charles Guillemet（Ledger CTO）· 主持人 Laura Shin
</div>

<div class="text-xs opacity-50 mt-2">
量子威胁加速逼近：Google 论文、EigenLayer 竞赛、NIST 三种算法、未迁移比特币的终极难题
</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**量子威胁突然变真实**
2026 年 3-4 月 Google 论文只公开 ZK 证明；EigenLayer 竞赛里 AI 在 48 小时内找到算法

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**NEAR 已上主网**
第一个支持后量子签名的主流区块链，账户模型让它天生更容易换密码学

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**全世界只用一种算法**
NIST 标准化了三种：ML-KEM、Falcon、SPHINCS+——唯独区块链世界三种都要用

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Ledger 的硬件难题**
安全芯片为银行而生，后量子签名只能先固件级实现，下一代才有硬件级支持

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**未迁移的比特币怎么办**
Satoshi 币可能被偷、被冻结，还是冻结后重新铸造？三个选项都引发争论

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**公钥≠私钥≠安全**
"只有 500 万比特币暴露公钥"是错误论证——公钥本来就是公开的

</div>

</div>

---

# 达摩克利斯之剑：Shor 算法在靠近

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 悬了多年的威胁
Shor 算法能从公钥反推私钥，一直被当作悬在密码学头上的"达摩克利斯之剑"（*Damocles sword*）。过去它要求极大的量子算力，因此被认为非常遥远。

</div>

<div class="p-4 rounded border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-40">

### 两条曲线同时靠近
量子计算机本身的进展，加上 Shor 算法所需算力的大幅下降——Illia 说：<br>
"过去 20 年人人都说还要五年（*for past 20 years everybody says it's going to be in five years*）。"

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
<strong>为什么这次"五年"不一样</strong>：投入前所未有地大、AI 加速材料科学与物理研究、工具更好——<br>
Illia："整体上感觉比以往任何时候都更真实（*it feels a lot more real than ever before*），所有人都开始认真对待。"
</div>

---

# 两个变化同时发生：硬件进步 × 算法改进

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 变化一：量子计算机更近了
Charles：多种技术路线都有希望造出带多个稳定量子比特的机器；<br>
"过去几年的投资翻了好几倍（*the investments has been multiplied by 10*）"——进展肉眼可见，虽然离足够的量子比特还很远。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 变化二：Shor 算法更便宜了
Google 的研究让算法所需量子比特数"急剧下降（*drastically dropped*）"，EigenLayer 竞赛又把它进一步推进。<br>
AI 在研究这类系统性问题上极其高效——两条线都被 AI 加速。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>结果</strong>：Charles 说讨论风向变了——"现在很少听到有人说'这不是威胁，以后再说'，对话已经转向'怎么迁移'。"
</div>

---
layout: two-cols
---

# 2026 年 3-4 月：转折点的两个月

<div class="text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3">
<strong>Google 论文：连算法都没公布</strong><br>
• 时间在 3 月 / 4 月之间（Charles 说 "Google breakthrough in late March"）<br>
• 论文方如此谨慎，甚至没有展示算法本身<br>
• 只给出了"该算法存在"的零知识证明（*zero knowledge proof that the algorithm exists*）
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>EigenLayer 竞赛：AI 48 小时复现</strong><br>
• EigenLayer 办了一场面向 AI 的竞赛，让 AI 去找出这个算法<br>
• "他们真的找到了，而且在大约 48 小时内（*within I think 48 hours*）就赢了"<br>
• 此后持续改进——"从公钥恢复私钥"这条路被反复走通
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./quantum-timeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# NIST 2024 迁移令：全球只有加密圈在争论

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>起点：NIST 的迁移建议与强制令（2024 年）</strong><br>
Charles："把后量子迁移推到台前的是 NIST 的建议与强制令，那是在 2024 年。"当时主流反应是"迟早会迁，但不急"——因为量子计算机还很远。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>非区块链世界：没有任何争论</strong><br>
• 银行、国防、TLS 全都选用同一种算法：ML-KEM / MLDSA<br>
• Charles："这场讨论没有在任何别的地方发生，只在区块链世界。"<br>
• 加密圈却要同时面对三种 NIST 算法——这就是标题里"为什么试三种"的由来
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么区块链更紧迫</strong>：Charles——"我们使用密码学是为了建立对系统安全的信任。信任一旦被侵蚀，就必须升级。"而且区块链迁移要经过"社会共识"，比软件升级慢得多。
</div>

---

# "收获现在、解密以后"：为什么区块链反而更简单

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 互联网的问题：加密数据
攻击者现在就能把加密流量全部存下来，等量子计算机出现再解密——"收获现在，解密以后（*harvest now, decrypt later*）"。等得越久，暴露窗口越长。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 区块链的问题：只有签名
"区块链上并没有真正的加密（*there is no real encryption in blockchain*）"，威胁只针对签名。<br>
Charles："你只需要赶在量子计算机准备好之前准备好（*you just need to be ready before the quantum computer to be ready*）。"

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>技术简单，难在社会共识</strong>：选哪种算法、区块要不要变大、吞吐量受不受影响、迁移期限多长、到期后未迁移的币怎么办——这些才是真正的难题。
</div>

---

# "公钥就是公钥"：反驳 500 万比特币的安心说法

<div class="text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3">
<strong>流行的说法</strong>：Ethereum 地址是公钥的哈希且被截断，链上不一定看得到公钥；"只有约 500 万比特币暴露了公钥，所以只有它们有风险"。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Charles 的反驳：这是很糟糕的论证（*This is a very bad argument*）</strong><br>
• "公钥本来就不是用来保密的，它就是公开的（*a public key is not meant to be private, it's public*）"<br>
• 就算不在链上，公钥也会出现在各种后端、各种日志里<br>
• "所有与比特币相关的公钥都在世界上某个地方，不能假设它们私密"——都应该按暴露对待
</div>

</div>

<div class="mt-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">
<strong>Illia 补充的收集通道</strong>：用户把公钥发给 RPC 节点等服务的网络流量，目前用可被量子破解的加密保护——"收集现在、解密以后"地抓取 RPC 流量，就是收集公钥的现实途径。
</div>

---
layout: two-cols
---

# NEAR 的起点：账户与密钥分离的设计

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>起步时的远见</strong>：NEAR 刚创建时就决定不把自己绑死在单一密码学上。Bitcoin、Ethereum、Solana 都把密码学烙进"地址 ↔ 私钥"的映射；NEAR 选择账户 = 账户。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>访问密钥（access keys）机制</strong><br>
• 账户就像 Google / Apple 账户，可以有多种登录方式<br>
• 上线就同时支持 ECDSA 与 EdDSA——Ethereum 和 Solana 各自的底层算法<br>
• "十年前我们就盯着'五年后量子计算机要来'设计，所以加新密码学很容易"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./near-account.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 第一个上主网的后量子签名

<div class="text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3">
<strong>里程碑（访谈前几个月）</strong>：NEAR 带着"首个后量子签名支持"上了主网，用户现在可以用后量子安全的密钥（*post-quantum secure key*）在 NEAR 上持有资产。<br>
Illia："据我所知，这是第一次能在主流区块链（*major blockchain*）上做到这件事。"
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>为什么上链只是第一步</strong><br>
• 从区块链支持到整个生态普及需要时间：托管方、钱包、交易所都要接入<br>
• NEAR 与 Ledger 合作，保证用同一种签名方案、同一套工具<br>
• 目标：Ledger 成为这套方案的首个硬件支持（*first hardware support*）
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>社会共识的落点</strong>：签名支持只是用户访问账户的部分；要让生态都用同一种密码学、同一套工具，需要托管方、钱包、交易所一起行动——这才是最花时间的地方。
</div>

---

# 共识层仍用 EdDSA：性能是后量子密码学的软肋

<div class="text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3">
<strong>现状</strong>：NEAR 的共识层仍在使用传统密码学 EdDSA——因为那里最需要性能，网络开销的权衡最敏感。
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>目标与约束</strong><br>
• 现在 600 毫秒出块（*600 millisecond blocks*），未来一年目标 200 毫秒<br>
• 后量子签名更大、验证更慢，要在 200 毫秒内完成全部签名与验证并不容易<br>
• 理想方案：更快、更便宜、更小的密码学——整个研究社区都在找
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>作者概括</strong>：用户侧的签名（访问账户）可以先行迁移，因为频率低；共识层的每个区块都要签名验证，对性能的要求完全不同——所以 NEAR 把"用户签名"与"共识签名"分成两步走。
</div>

---
layout: two-cols
---

# NEAR Intents：一条链的后量子，35+ 条链的资产

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>跨链持有</strong>：通过 NEAR 账户，用户可以直接持有其他链的资产——Bitcoin、Ethereum、Solana、Tron、Ton "都在一个地方（*all in one place*）"，还能用一把 Ledger 统一管理。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>连锁责任</strong>：NEAR Intents 接入了 35+ 条链（*35 plus chains*），实际上持有这些链上的资产——所以它们也得后量子化，NEAR 才能提供同样的服务。
</div>

<div class="mt-3 p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>用户视角</strong>：NEAR 账户一旦后量子安全，名下所有资产都跟着安全（前提是各链自己完成迁移）。Illia："把种子短语埋进洞里，十年后挖出来，资产都还在。"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./near-intents.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# NIST 的三种算法：格基两个，哈希一个

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>三种标准，两种路线</strong>：NIST 标准化了三种后量子签名——两个基于格（lattice），一个基于哈希（hash）。Charles："这就是社区仅有的三个选择（*the three choices that the community has*）。"
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>非区块链世界零悬念</strong>：性能更好、更适合 MPC、更方便——"没有任何地方有争论，都会用 ML-KEM"。<br>
只有区块链世界：三种算法都被选用，还吵得不可开交。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-algorithms.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 分裂地图：三条链，三种选择

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**ML-KEM（格基）**
NEAR · Algorand
签名更小、支持 MPC；"目前唯一天然支持多方计算的算法"。MPC 能力是很新的结果，"需要经受时间考验"。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Falcon（格基）**
Solana 基金会
Solana 的核心诉求是极低延迟，所以选签名最短的 Falcon，"不影响 Solana 的延迟"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**SPHINCS+（哈希）**
Ethereum / Bitcoin 社区
更保守的安全假设，但标准版"签名巨大、计算和验证都贵"，必须改参数自造变体。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>结果</strong>：Charles——"生态里三种签名都会存在。作为钱包，我们必须全部支持（*we will have to support all of them*）。没有真正的争论余地。"
</div>

---

# 为什么只有区块链世界在吵？

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### 别处早就定案了
Charles："一套出色的密码学，全世界完整的安全基础设施都定在 MLDSA 上。"银行、国防、TLS 都在用同一套，没有人觉得需要选。

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 两个解释
**过度保守**：部分人担心格基密码学未来可能被 AI 或密码分析削弱，宁可选哈希。
**竞争**："每条链都在互相竞争，给用户提供不同的东西，本身就是竞争优势（*competitive advantage*）。"

</div>

</div>

<div class="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
<strong>反例</strong>：世界上有大量对延迟极其敏感的应用，但都没有选 Falcon——只有 Solana 因为延迟选了它。Charles："看到我们生态这么碎片化，真的很奇怪（*weird*）。"
</div>

---

# 格基 vs 哈希：保守派与务实派的对峙

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 哈希路线（Ethereum / Bitcoin）
- 哈希本身被研究很久，长期在产线中运行——安全感来自时间
- 格基密码学虽有三四十年历史，但"此前从未上过产线（*never in production before now*）"
- 担心：AI 可能在这里那里发现漏洞，所以要更保守

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 格基路线（NEAR / Algorand）
- 签名更小，计算更省
- 唯一能做 MPC 的路线：多方计算需要密钥分片，哈希签名"极不可能（*very unlikely*）支持"
- 机构采用（托管、跨链）几乎必然走 MPC——这是格基的现实优势

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Illia 的立场</strong>：为了让 Web3 以合理的方式协作，需要在格基上形成共识——因为"哈希签名对硬件钱包和 MPC 方案来说非常难支持"。
</div>

---

# MPC：机构采用的关键拼图

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>什么是 MPC</strong>：多方计算（multi-party computation）把密钥拆成多份，"没有任何单一节点能接触到完整密码学（*no single party*）"——这是托管机构与跨链场景的标配。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>当天的公告</strong>：NEAR 与 SafeWard 等团队合作，组成了一个覆盖托管方、银行、监管机构的联盟（*consortium*），在生产环境测试后量子 MPC——此前"还没有一个后量子 MPC 方案上过生产（*there hasn't been a post-quantum … for that yet … in production*）"。
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>为什么和算法之争绑在一起</strong>：哈希签名几乎不可能支持 MPC，只有格基（ML-KEM）可以——而 ML-KEM 上的 MPC 能力"是很新的结果，需要经受时间考验（*pass the test of time*）"。
</div>

</div>

---

# Ethereum / Bitcoin 的哈希路线：SPHINCS+ 不好用

<div class="text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3">
<strong>标准版的问题</strong>：SPHINCS+ 是 NIST 标准里的哈希签名，但"实现起来很糟糕（*bad to implement it*）"——签名非常大，计算贵、验证也贵。
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>所以各社区在改参数</strong>：用哈希签名的不同变体和参数，让签名"够安全、又不会太大"——但往往带来新代价：
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**有状态（stateful）**
钱包必须记录签名者的状态才能继续签名，体验和实现都麻烦

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**签名数量受限**
可以限制一把密钥能签多少次——又多一个要权衡的参数

</div>

</div>

<div class="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
Ethereum Foundation 和 Bitcoin 社区正在做这件事：找到合适的参数，让哈希签名达到"像样的安全级别、签名仍然偏大但可以接受"。
</div>

---
layout: two-cols
---

# Ledger 的处境：钱包必须支持全部三种

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>两条密码学使用线</strong>：Ledger 内部安全（设备防伪、连接基础设施）可以自选标准——直接用 MLDSA 签名 + ML-KEM 加密；用户签名区块链交易则必须跟着各链走。
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>三套都要实现</strong>：MLDSA（NEAR）、哈希签名（Ethereum / Bitcoin 变体）、Falcon（Solana）——作为操作系统提供给所有应用的密码学原语（SDK 层面），NEAR 的签名支持就是这么做的。
</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>硬件约束</strong>：安全芯片不是为后量子签名设计的——现有型号只能"固件级"实现，失去部分安全属性、速度更慢；下一代芯片才有硬件级支持。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./secure-element.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 安全芯片：一台为银行而生的小计算机

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>它是什么</strong>：安全芯片（secure element）就是一台极小的计算机——有 CPU、少量 Flash、少量 RAM、一个密码学加速器。内存少是故意的："只放安全部分、密码学部分，不跑完整应用。"
</div>

<div class="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>为何难</strong>：现有安全芯片按银行、身份识别的需求设计，硬件层面不认识后量子签名。要支持 MLDSA，只能在固件层实现原语，由小 CPU 用 RAM 和 Flash 硬算。
</div>

<div class="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>但可行</strong>：RAM 大小和计算时间都是约束，需要做优化——"最后我们证明了这件事是可能的（*we proved that it's … possible to do it*）"。SPHINCS+ 性能"真的很糟糕（*really terrible*）"，好在没人会用标准版。
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>路线图</strong>：当前设备全部固件级支持 → 下一代安全芯片把 MLDSA 和哈希签名做进硬件（快、安全属性完整）→ Falcon 即使下一代也只走固件（*will have to implement it at the firmware level*）。
</div>

---

# 物理攻击：偷走设备的人

<div class="text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mt-3">
<strong>威胁模型</strong>：Charles——"我是小偷，闯进你家，偷走你的 Ledger，然后想尽办法把密钥从设备里挖出来。"这正是物理攻击（*physical attacks*）要防的事。
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>为什么用安全芯片</strong>：从安全芯片里提取密钥"极其困难（*extremely difficult*）"——这正是选它的原因。不用安全芯片的硬件钱包，这类攻击"更可行、更容易"。
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>固件级 MLDSA 的取舍</strong>：能享受到部分安全芯片对策，但没有硬件加速器——不过对想提取密钥的攻击者来说，"差别不大，依然非常非常困难（*still very, very difficult*）"。
</div>

---
layout: two-cols
---

# 未迁移的比特币：三个选项，全都糟糕

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-2">
<strong>问题有多大</strong>：量子计算机一旦能破解签名，未迁移的币都会被偷。最刺眼的是 Satoshi 的币——早期没有种子短语，他没有逃生门。
</div>

<div class="mt-2 p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>选项一：什么都不做</strong><br>
不处理 → 币被偷 → "流动性问题、市场问题（*liquidity problem, that create a market problem*）"。
</div>

<div class="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>选项二：冻结</strong><br>
宣布任何人不能再花 → "可被看作私有财产问题（*private property problem*）"，产权立场强硬者会反对。
</div>

<div class="mt-2 p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>选项三：冻结 + 重新铸造</strong><br>
未迁移的 400-500 万枚在共识层继续铸造（*4 to 5 million Bitcoin*），而非只到 2176 年发完 100 万枚。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-options.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Charles 的选择：重新铸造，一石二鸟

<div class="text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded mt-3">
<strong>选项三为什么更好</strong><br>
• 不能让攻击者把几百万枚比特币砸进市场——"那会直接毁掉这个项目（*simply destroy the project*）"<br>
• 重新铸造还顺带解决"安全预算"问题：长期来看，矿工奖励可能不够维持链的安全
</div>

<div class="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Charles 的态度</strong>：他知道很多人不同意，自己也没有强烈立场——"但首先要决定下来（*we need to settle*）"。选项一非常危险："哪怕我非常支持私有财产，它给比特币带来的问题也太大了。"
</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>主持人的反应</strong>：Laura——"我同意，这是一石二鸟（*killing two birds with one stone*）的好办法。比特币确实有安全预算问题。"<br>
Illia："我同意，这确实是个好方案，只是我不认为大家真会选它。"
</div>

---

# Illia 的判断：冻结最可能，硬分叉最糟

<div class="text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded mt-3">
<strong>大概率结果</strong>：Illia——"冻结大概是最可能的（*freezing is probably like the most likely*）"；重新铸造是好方案，但"不认为可能性很大"。
</div>

<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>最糟的情况：达不成共识</strong><br>
• Bitcoin 的治理"非常流动（*very fluid*）"，要到矿工真正选择运行哪个客户端，才有最终共识<br>
• 威胁足够高时，会出现硬分叉，各方各自选边<br>
• Illia："作为社区，我们应该尽快定一个方案并落地，别再没完没了地讨论（*stop discussing too much*）。"
</div>

</div>

<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
<strong>为什么整个加密圈都在乎</strong>：Bitcoin 一旦被这样攻击，会摧毁整个加密世界的信任——"加密建立在'技术可信'之上，不是每个人都会审查每一行代码，而是一层层的集体信任"。
</div>

---

# ZK 证明种子短语：大家的逃生门

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-40">

### 原理
量子计算机只能破解"公钥 → 私钥"这条链路；"你的 24 个单词和私钥之间的关联，量子计算机无法打破（*the link between your 24 words and your private key cannot be broken by a quantum computer*）"。
若你能出示"拥有对应种子短语"的零知识证明，即使默认私钥支持被关闭，账户仍可继续使用。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### 但对所有链都适用，除了一种币
Charles："它对任何链都有效（*It works for everything, for any chain*）"——因为攻击者拿到私钥就能花币，根本不需要你的 24 个单词。
**但它保护不了 Satoshi 的币**：早期根本没有种子短语（*it doesn't protect all Satoshi coins for instance*）。

</div>

</div>

<div class="mt-4 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">
<strong>Illia 的观察</strong>：很多早期用户可能弄丢或没有种子短语，但至少"这是生态正在收敛到的逃生门（*escape hatch*）"。
</div>

---

# 加密瑞士 vs 跨链防线

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-40">

### Ledger：加密世界的瑞士
只要一条链的脆弱不影响另一条链的安全，就继续支持所有链——"我们真的想当加密世界的瑞士（*we really want to be like the Switzerland of crypto*）"，是否持有易受攻击的币，由用户自己决定。

</div>

<div class="p-4 rounded border-l-4 border-red-500 bg-red-50 bg-opacity-40">

### NEAR：跨链交易让问题更复杂
NEAR 允许资产跨链交易，被偷的币可以换成后量子资产，污染整体账本。所以 NEAR 一直在做异常检测，阻止被盗加密资产跨链流动——"我们无时无刻不被从朝鲜到普通黑客的人攻击（*from North Korea to regular hackers*）"。

</div>

</div>

<div class="mt-4 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">
<strong>应对策略</strong>：NEAR 的解法是"跑在前面"——推动标准化、提供 API 和即插即用的支持（*drop-in replacement*），让迁移变得容易，用可选性带动大家真的去迁。
</div>

---

# 本期核心金句

<div class="text-xs opacity-60 mb-2">这期对谈里最值得记住的几句——每条都能在本期 transcript 中找到原文：</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"过去 20 年，人人都说还要五年（*for past 20 years everybody says it's going to be in five years*）。"
<div class="text-xs opacity-60 mt-1 not-italic">— Illia Polosukhin，评估量子威胁的时间线为何突然变真实</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"区块链上没有真正的加密，问题只在签名——你只需要赶在量子计算机之前准备好。"
<div class="text-xs opacity-60 mt-1 not-italic">— Charles Guillemet（原文：there is no real encryption in blockchain / be ready before the quantum computer）</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"公钥不是用来保密的，它就是公开的——所有与比特币相关的公钥都应视为暴露。"
<div class="text-xs opacity-60 mt-1 not-italic">— Charles Guillemet，反驳"只有 500 万比特币有风险"的说法</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"你的 24 个单词与私钥之间的关联，量子计算机无法打破；它只打破公钥与私钥之间的关联。"
<div class="text-xs opacity-60 mt-1 not-italic">— Charles Guillemet，解释 ZK 种子短语逃生门为何对所有链有效</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"我们真的想当加密世界的瑞士。"
<div class="text-xs opacity-60 mt-1 not-italic">— Charles Guillemet（原文：we really want to be like the Switzerland of crypto），Ledger 支持所有链的立场</div>
</div>

</div>

---

# 谢谢观看

<div class="text-sm opacity-60 mt-6">
NIST 三种后量子算法 · NEAR 首个主流链主网支持 · Ledger 硬件路线图
</div>

<div class="text-sm opacity-60 mt-2">
未迁移比特币的三种选项 · ZK 种子短语逃生门 · "加密瑞士"与跨链防线
</div>

<div class="mt-8 p-4 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">

"整体上感觉比以往任何时候都更真实（*it feels a lot more real than ever before*）——所有人都开始认真对待。"

</div>

<div class="mt-4 text-xs opacity-50">
— Illia Polosukhin（NEAR）· Charles Guillemet（Ledger）· 主持人 Laura Shin · Unchained
</div>
