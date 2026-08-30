---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'How Hyperliquid Benefits From Its New Deal With Coinbase Over USDC'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Coinbase × Hyperliquid 的 USDC 交易

## 从稳定币战争到"万物交易所"——一次价值 1.5 亿美元的对齐

<div class="mt-6 text-sm opacity-60">
Unchained · Alex Weslie (Artemis Analytics) · 2026-06
</div>

---
---

# 为什么这期值得关注

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**USDH→USDC：不到一年的翻转**  
Coinbase 收购 USDH 品牌资产，成为 Hyperliquid 上 USDC 的官方 treasury deployer——90% 收益流向 Hyperliquid 生态。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**$1.5 亿新收入来源**  
$5B USDC × 3.5% 利率 × 90% ≈ 每年 $150M 新增年化收入，Hyperliquid 收入结构从纯交易费向稳定币收益多元化。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Coinbase 的 $3000 亿赌注**  
Alex 在 Artemis 的最新研究报告：Coinbase 到 2031 年可能成为 $300B 公司，其中 $40 亿来自 agentic 收入。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**x402 协议 90%+ 市占率**  
Agent 支付协议 x402 占据链上 agentic 交易量的 90%+，Base 是主要结算层——但 Stripe、Google 正在追赶。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**Circle × Coinbase：从合作到竞争**  
Circle 上线 Arc (L2)、Circle BTC、Agent Stack——与 Coinbase 的 Base、cbBTC、x402 在三条战线正面竞争。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Hyperliquid 在 Perp 战争中存活**  
经历 EdgeX、Aster 等竞争对手的猛烈冲击后，Hyperliquid 仍占据 perps 市场 50% 份额，ETH 计价市场和 RWA perps 日交易量数十亿。

</div>

</div>

---
---

# USDH → USDC：发生了什么

<div class="mt-2">

## 2025 年 9-10 月：Hyperliquid 原生稳定币争夺战

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-3">
PayPal、Paxos、Athena、Sky 等团队竞相争取 USDH ticker。**Native Markets 最终胜出**——但带有一些争议。
</div>

<div class="mt-4">

## 2026 年 6 月：不到一年后

</div>

<div class="grid grid-cols-2 gap-3 mt-2 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Coinbase 的动作**  
- 收购 USDH 品牌资产  
- 成为 Hyperliquid 上 USDC 的 **官方 treasury deployer**  
- 显著增加 **质押 HYPE 的持仓**

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**对 Hyperliquid 的意义**  
- V2 稳定资产：**90% 收益** 流向 Hyperliquid 援助基金（vs 此前 USDH 的 50/50 分成）  
- HYPE 价格当日上涨 ~9%

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这个转变说明了一件事：Circle 和 Coinbase 愿意为 USDC 的**分发渠道**付出巨大的经济让步。
</div>

</div>

---
---
layout: two-cols
---

# 收益流：谁得到什么

<div class="text-sm space-y-2 mt-2">

**Circle 的分发经济学**
- 给 Coinbase：平台上 USDC **100%** 收益
- 给 Coinbase：平台外 USDC **50%** 收益
- 代价：显著的利润侵蚀

**新 V2 结构**
- 90% 收益 → Hyperliquid 援助基金
- 10% 覆盖成本
- 比旧 USDH 的 50/50 分账大幅改进

</div>

<div class="mt-3 p-2 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
Alex: "It goes to show the power of distribution for stablecoins."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./usdc-yield-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 餐巾纸数学：$1.5 亿从哪来

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### Hyperliquid 上 USDC
<div class="text-4xl font-bold text-blue-600 my-2">$5B</div>
<div class="text-xs opacity-70">桥接 + 原生铸造的 USDC 总量</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 年化收益率
<div class="text-4xl font-bold text-green-600 my-2">~3.5%</div>
<div class="text-xs opacity-70">当前无风险利率估算</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 流向 Hyperliquid
<div class="text-4xl font-bold text-orange-600 my-2">90%</div>
<div class="text-xs opacity-70">V2 稳定资产的分成比例</div>

</div>

</div>

<div class="mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 inline-block">
**$5B × 3.5% × 90% ≈ 每年 $150M 新增收入**
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**占现有收入的 ~25%**  
Hyperliquid 当前年化交易收入约 $600M。这笔新增收入等于一次 25% 的增长——但来自**非交易、非周期性**来源。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**更像 Coinbase 的商业模式**  
Coinbase 约一半收入来自交易、一半来自订阅和服务。Hyperliquid 正在向类似结构演进。
</div>

</div>

---
---

# 收入结构的范式转变

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded border-l-4 border-red-400 bg-red-50">

### 交易收入（周期性）
- 依赖市场行情
- 牛熊波动剧烈
- 难以预测和估值
- "cyclical trading revenues"

<div class="mt-2 text-xs opacity-60">
作者概括：这是所有交易所的传统收入来源
</div>

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50">

### 稳定币收益（经常性）
- 依赖 USDC 余额规模
- 相对稳定、可预测
- 更容易估值
- "a lot more easy to underwrite"

<div class="mt-2 text-xs opacity-60">
作者概括：更像 SaaS 的经常性收入模型
</div>

</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**这就是为什么 HYPE 涨了 9-10%**：市场在为一个"更容易估值"的收入流定价，而非仅凭交易量波动。
</div>

---
---

# 稳定币的分发权之争

<div class="mt-2">

## Circle 的付出与 Coinbase 的杠杆

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Circle 给 Coinbase 的条件**
- 平台上 USDC 收益：**100%** 归 Coinbase
- 平台外 USDC 收益：**50%** 归 Coinbase
- "They're really willing to give up a significant portion of their economics just to get distribution"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Coinbase 的回报**
- 拥有 Coinbase 平台的分发优势
- 现在延伸到 Hyperliquid 的分发渠道
- 通过质押 HYPE 获得的生态对齐

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Alex: "It ultimately comes down to like liquidity begetting liquidity."
</div>

<div class="mt-2 text-sm opacity-70">
Circle 和 Coinbase 的算盘：让 USDC 成为全链金融和支付的**头号稳定币**。为此，短期利润可以牺牲。
</div>

</div>

---
---
layout: two-cols
---

# Coinbase × Hyperliquid：竞争者还是盟友？

<div class="text-sm space-y-2 mt-2">

**两者都在成为"万物交易所"**

- 现货交易
- 永续合约
- 股票/ETF
- 预测市场

**但定位截然不同**

<div class="grid grid-cols-1 gap-2 mt-2">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
**Coinbase**：美国合规、需要 KYC、"primarily US-based sort of compliant institution"
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">
**Hyperliquid**：无 KYC、不服务美国客户、"outside of US jurisdiction, no-KYC platform"
</div>

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./everything-exchange.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# 为什么 Coinbase 选择对齐而非对抗

<div class="mt-2">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**Laura 的观察**："Even a couple years ago you could not imagine a public company that would have done this level of deal with a no-KYC, decentralized exchange that does not serve US customers."
</div>

<div class="mt-4 space-y-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**链上金融增长太快**。Coinbase 必须在这个蛋糕中分一杯羹——即使是通过一个不服务美国客户的平台。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**监管仍未定型**（尤其是在美国），但等待意味着错过。USDC 是目前最好的"入场券"。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**Base 虽然不直接竞争**，但长期来看可能与 Hyperliquid 正面交锋。但现在："let's just do this deal and get a piece of that pie which is growing very quickly."
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**质押 HYPE** 意味着 Coinbase 在生态中有切身利益——既竞争又对齐。
</div>

</div>

</div>

---
---

# "为什么 Coinbase 会赢"：$3000 亿的愿景

<div class="mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Alex 在 Artemis 发表的研究报告，描绘了 Coinbase 到 2031 年成为 $300B 公司的路径——约当前市值的 **6 倍**。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 宏观催化剂
<div class="text-xl font-bold text-green-600 my-1">$5T</div>
<div class="text-xs opacity-70">McKinsey 预测 2030-31 年 agentic commerce 总规模</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### 稳定币供给
<div class="text-xl font-bold text-orange-600 my-1">$3T</div>
<div class="text-xs opacity-70">Bain 预测 2030 年稳定币总供给</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Agentic 收入目标
<div class="text-xl font-bold text-purple-600 my-1">$4B+</div>
<div class="text-xs opacity-70">Coinbase 2031 年 agentic 年收入目标</div>

</div>

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
**USDC 市场份额持续增长**。即使在熊市中，Coinbase 平台上 USDC 的份额也在扩大——作为"受监管的避风港"。
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
**稳定币是 agent 交易的天然选择**。可编程、互联网原生美元，而传统银行卡/ACH 系统不适用于 agent-to-agent 支付。
</div>

</div>

</div>

---
---

# Agentic Commerce：Coinbase 的四层堆栈

<div class="text-sm mt-2">

<div class="grid grid-cols-1 gap-2 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**第一层：协议 — x402**  
占据链上 agentic 交易量的 **90%+**。主要竞争对手 Stripe MPP 今年 3 月刚推出。"Even a month into MPP's launch, x402 still dominates."
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**第二层：结算层 — Base Chain**  
"Base is the primary settlement chain for agentic payments today." 承载大量 USDC 吞吐。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**第三层：稳定币 — USDC**  
占 agentic commerce 交易量的 90-99%。Circle 与 Coinbase 的协议让 Coinbase 能从 USDC 横跨所有层获利。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**第四层：开发者工具和服务**  
Coinbase 孵化和建设了大量 agent 支付和构建工具——可以货币化的增值服务层。
</div>

</div>

</div>

---
---
layout: two-cols
---

# Agentic 堆栈视觉化

<div class="text-sm space-y-2 mt-2">

**Coinbase 的护城河逻辑**

- 在每一层都有产品或利益
- 早期的标准往往会自我强化
- x402 的先发优势能否持续？

**关键不确定性**
- Stripe 拥有庞大的商户网络
- Google 拥有 Android 的分发渠道
- Circle 也在建设 Agent Stack

</div>

<div class="mt-2 p-2 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
Alex 坦承：这是 "bull case" 而非 "base case"——"I think they can't just have an early lead and hope to win off of that."
</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agentic-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# Agentic Commerce 的竞争格局

<div class="mt-2">

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### Coinbase (x402)
- **市占率**: 90%+
- 孵化自 Coinbase
- Base 为主要结算层
- USDC 为默认货币

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Stripe (MPP)
- **2026 年 3 月刚启动**
- 拥有全球商户网络
- Tempo 支付基础设施
- 传统支付基因

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Google (AP2)
- Android 数十亿设备
- 操作系统级分发
- 移动端优势
- 支付生态

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
Circle 也有 Agent Stack。竞争正在白热化——"the space is so rapidly evolving... the competition will be increasingly heated."
</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**关键结论**：Alex 承认 x402 的 90% 市占率在现阶段是真实的，但不等于终极胜利。Stripe 的商户网络和 Google 的操作系统级分发是截然不同的优势——事情"几乎每周都在变"。
</div>

</div>

---
---

# Clarity Act 对 Coinbase 的影响

<div class="mt-2">

## 稳定币收益：妥协方案

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 获得的东西
- 可以基于**交易/活动**提供 USDC 收益
- Coinbase One 订阅者将受益
- 活跃交易者将受益
- Base 用户可能以某种方式受益

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">

### 失去的东西
- 不能在**闲置余额**上提供被动收益
- 对不活跃用户的吸引力降低
- 相比 Robinhood（可提供被动现金收益）处于劣势

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
**总体判断**："Overall net positive." 银行业游说集团试图完全禁止稳定币收益，Clarity Act 的妥协是**以活动为基础的收益**——可以接受的结果。
</div>

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Laura 提到：三位律师对 Clarity Act 通过概率的判断从 35% 到 90% 不等——不确定性仍然很大。
</div>

</div>

---
---

# Circle × Coinbase：从联盟到对手

<div class="mt-2">

## 三条战线的正面竞争

<div class="grid grid-cols-3 gap-3 mt-3 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### L2 之战
**Circle Arc** vs **Coinbase Base**

两条 L2 链争夺开发者和用户

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### BTC 产品之战
**Circle BTC** vs **Coinbase cbBTC**

两家公司各自的包装比特币产品

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Agent 堆栈之战
**Circle Agent Stack** vs **Coinbase x402**

双方都在争夺 agentic payments 标准

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**Omar (Dragonfly) 的判断**："How long until the Circle Coinbase marriage gets messy?" ——他预测最终会以"离婚"收场。Circle 上市后需要向投资人讲述更广泛的增长故事，而这必然与 Coinbase 正面碰撞。
</div>

</div>

---
---
layout: two-cols
---

# Circle × Coinbase 关系图

<div class="text-sm space-y-2 mt-2">

**当前状态**
- USDC 协议连接两者
- 8-9 月续约大概率通过（再延 3 年）
- 双向终止需双方同意

**Alex 的判断**
- 3 年内不会"离婚"
- "this marriage might end in a divorce—I think there's some truth to it"
- 但 3 年后是否续约："not sure I'll have the same confidence"

**Coinbase 的备选方案**
- 不完全拥有 USDC = 有灵活性
- Genius Act 通过后将出现其他合规稳定币
- 可与新伙伴合作

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./circle-coinbase-tension.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
---

# Hyperliquid：Perp 战争中的幸存者

<div class="mt-2">

## 竞争者的围攻没有打动它

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
"Mid to late last year we had this sort of explosion of, I guess like the perp wars... players like EdgeX, Aster, a plethora of exchange-backed perp DEXs."
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 结果
- Hyperliquid 仍占据 perps 市场 **~50% 份额**
- 即使在加密熊市中仍保持增长
- "it's really fascinating to see these 24/7 markets"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Arthur Hayes 的验证
- Hayes 使用 **交易量/未平仓合约** 比率判断交易真实性
- 按此指标，Hyperliquid 的真实交易量远超竞争对手
- "it's clearly out-competing"

</div>

</div>

</div>

---
---

# Hyperliquid 的新增长引擎

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### ETH 计价市场
- 加密原生资产的新交易对
- 不依赖 USDC 或法币入口
- 即使在熊市中依然有增长

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### RWA 永续合约
- 真实世界资产的链上交易
- "doing billions in volume per day"
- 包括黄金、石油等大宗商品

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 股票永续合约
- trade XYZ 等平台
- 24/7 全球市场
- 传统交易所无法匹敌的时间覆盖

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 预测市场
- HIP 4 上线后新功能
- "ultra-hyper-competitive space"
- Robinhood + Polymarket、Coinbase 也在布局

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
**周末交易石油？** "people have been trading oil on weekends, where no other exchange really offers that." Hyperliquid 的 24/7 全球市场是传统金融无法复制的优势。
</div>

---
---

# Hyperliquid 的护城河

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### ⚔️ 市场地位
- Perps 50% 市占率
- 通过竞争冲击波考验
- 真实交易量（Arthur Hayes 方法验证）

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 🏗️ 技术壁垒
- HIP 3、HIP 4 成功上线
- V2 稳定资产架构
- 高性能链上订单簿

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 🌐 社区与开发者
- "one of the strongest communities and developer ecosystems in the space"
- "really almost nothing quite like it"
- 社区驱动的治理和创新

</div>

<div class="p-4 rounded bg-purple-50 border-2 border-purple-200">

### 🏝️ 离岸利基
- 无 KYC 全球市场
- 美国监管无法触及
- Robinhood/Coinbase 无法竞争的空间

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
Alex 的结论："I really don't see anyone coming close to taking any of their share away anytime soon."
</div>

---
---

# 预测市场：下一个战场

<div class="mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Hyperliquid 刚部署了预测市场（outcome markets）——但这是"ultra-hyper-competitive spaces"。
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Robinhood
全栈预测市场

与 Polymarket 合作

受监管的美国平台

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

### Coinbase
收购了一家预测市场清算所

完整的合规路径

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### Hyperliquid
离岸、无需 KYC

全球 24/7 访问

新入场但社区强大

</div>

</div>

<div class="mt-4 space-y-2 text-sm">

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
**核心观察**：所有受监管的玩家（Robinhood、Coinbase）都在合规框架内运营。Hyperliquid 的离岸利基再次发挥作用。
</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
**关键不确定性**：预测市场是否会像 perps 一样形成网络效应？还是多个平台可以共存？
</div>

</div>

</div>

---
---

# 两条不同的成功路径

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-300">

### Coinbase 的路径

<div class="text-sm space-y-2 mt-2">

**合规至上**
- 美国监管框架内运营
- Clarity Act 利好
- 机构级信任

**多线收入**
- 交易 + 订阅 + USDC 收益 + agentic
- 目标 $300B 市值

**分发为王**
- Coinbase 平台 + Base + x402
- USDC 生态控制

</div>

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-300">

### Hyperliquid 的路径

<div class="text-sm space-y-2 mt-2">

**速度与灵活性**
- 无 KYC、全球覆盖
- 极速产品迭代

**社区驱动**
- 最活跃的开发者生态
- HYPE 代币对齐

**产品广度**
- Perps → RWA → 股票 → 预测市场
- 24/7 全天候市场

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
**作者概括**：这不是零和博弈。Coinbase 在合规框架内服务美国及受监管市场，Hyperliquid 在离岸市场以速度和产品广度取胜。USDC 交易让二者在稳定币这一层面对齐，但竞争远未结束。
</div>

---
---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"It goes to show the power of distribution for stablecoins."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Weslie，解释为什么 Circle 愿意为 Coinbase 的分发渠道付出如此高昂的代价</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"It ultimately comes down to like liquidity begetting liquidity."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Weslie，论为什么 Circle 和 Coinbase 都愿意牺牲短期利润来推动 USDC 成为头号稳定币</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"Seeing Hyperliquid diversify their revenue away from purely trading-based revenue is interesting... it's a lot more easy to actually underwrite a recurring revenue stream like stablecoin yield versus cyclical trading revenues."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Weslie，论 $150M 稳定币收益对 Hyperliquid 估值逻辑的改变</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"Even a couple years ago you could not imagine a public company that would have done this level of deal with a no-KYC, decentralized exchange that does not serve US customers."
<div class="text-xs opacity-60 mt-1 not-italic">— Laura Shin，论加密行业和监管格局的演变速度</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"I think they can't just have an early lead and hope to win off of that."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Weslie，坦承 Coinbase 在 agentic commerce 的先发优势不等于终极胜利</div>
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm">
"I really don't see anyone coming close to taking any of their share away anytime soon."
<div class="text-xs opacity-60 mt-1 not-italic">— Alex Weslie，论 Hyperliquid 在 perps 市场的护城河</div>
</div>

</div>

---
---
layout: end
---

# 谢谢观看

<div class="mt-8 text-lg opacity-70">
Coinbase 与 Hyperliquid 的故事，是加密行业成熟化的一个缩影
</div>

<div class="mt-4 text-sm opacity-50">
竞争与合作、合规与自由、分发与产品——在同一条链上并行不悖
</div>

<div class="mt-8 text-xs opacity-40">
← 返回 声笺 Resonote 浏览更多深度对谈解析
</div>
