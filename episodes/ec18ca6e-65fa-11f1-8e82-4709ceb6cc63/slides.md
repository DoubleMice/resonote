---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'Claude Found a 4-Year Zcash Bug. Now It Won''t Audit DeFi: Uneasy Money'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Claude 发现了一个隐藏 4 年的 Zcash Bug，然后拒绝审计 DeFi

<div class="text-base opacity-60 mt-4">
Kain Warwick · Taylor Monahan · Luca Netz (Pudgy Penguins CEO)
</div>

<div class="text-sm opacity-50 mt-2">
Unchained Podcast · 2026 年 6 月
</div>

<div class="text-xs opacity-40 mt-12">
← 声笺 Resonote
</div>

---

# 为什么这期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**Fable 5 的安全"跳闸开关"**

Anthropic 最新模型 Fable 5 对安全话题采取一刀切拒绝策略——不再是判断意图，而是直接检测话题。对 DeFi 安全从业者是灾难。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**100 倍补贴的真相**

Kain 用实验证明：$200/月的 Max 订阅可以烧掉价值 $20,000 的 API 额度。AI 订阅的经济模型不可持续，补贴悬崖即将到来。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**朝鲜黑客盯上了你的 API Key**

朝鲜威胁行为者已经在系统性窃取开发者的 AI API 密钥——当 Glasswing 等前沿模型仅限少数企业时，API Key 就是通往超级武器的钥匙。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**Fable 5 的推理能力令人恐惧**

在处理由上百份文档组成的混乱规划问题时，Fable 5 展现了接近高级工程师水平的推理能力——Opus 4.8 和 Codex 5.5 都无法完成。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 col-span-2">

**作者概括**：这期节目横跨 AI 安全范式转型、补贴经济学、以及前沿模型的可及性困境——三个正在同时重塑软件行业的结构性力量。

</div>

</div>

---

# Fable 5 的"跳闸开关"

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**之前的 Opus**：判断你的**意图**——"我只要确信你在做善事，就帮你"
- 可以绕过：说"我是白帽"、"这是我的代码"、"协议已经被黑了，我在调查"
- 安全研究员 Taylor Monahan 说：*"we've always dodged the safeguards that are in Opus"*

</div>

<div class="p-4 rounded bg-red-100 border-l-4 border-red-600">

**Fable 5**：不判断意图，直接检测**话题**——"你在谈安全？我不干了"
- Taylor：*"with Fable, it literally like the second it's anything in the security realm, it just immediately downgrades. Like immediately."*
- 不是"防护"，是**跳闸开关**：*"They're like trip switches or something, like it detects a certain thing and it just goes I'm out of here."*

</div>

<div class="text-sm opacity-60 mt-2">
来源：Taylor Monahan 在节目中的描述，与 Kain 的实验一致
</div>

</div>

---
layout: two-cols
---

# 两种 AI 安全范式：意图 vs 话题

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">

**Opus 时代（意图检测）**

基于意图的安全策略本质上是**社会工程**可攻破的——你只需要说服模型"我是好人"。这是为什么它能被越狱。

</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**Fable 时代（话题检测）**

放弃意图判断，转为**关键词/话题触发**——更安全但也更粗暴。连合法的安全审计都无法进行。

</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500">

**根本原因**

Anthropic 很清楚意图检测"太容易被越狱"——*"they're not willing to risk it"*。所以选择了宁可错杀不可放过的策略。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./safety-paradigms.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# "它已经对你起疑心了"

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**模型会"记住"你**

Taylor Monahan 发现：如果 Claude 知道你是一个安全研究员，它会**预设**你在做安全相关的事情，在第一个提示就触发拒绝。

*"Because it knows me, right? It has like I have to like really fresh context it."*

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**生物学家的类似遭遇**

如果模型知道你是一个生物学家，它会在生命科学相关话题上同样拒绝合作——*"if Claude is aware that they're a biologist it's like we're not generating you shit probably"*。

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-red-50 border-l-3 border-red-400 text-sm">

**安全研究员**

一开口就被拒绝

</div>

<div class="p-3 rounded bg-red-50 border-l-3 border-red-400 text-sm">

**长期用户**

积累了"可疑"画像

</div>

<div class="p-3 rounded bg-green-50 border-l-3 border-green-400 text-sm">

**新用户**

可能骗过一两次

</div>

<div class="p-3 rounded bg-green-50 border-l-3 border-green-400 text-sm">

**非技术用户**

不受影响

</div>

</div>

</div>

---

# 安全困境：白帽被锁门外，黑帽呢？

<div class="mt-6 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**预期**：发布 Mythos 后，白帽可以抢先审计自己的合约——用前沿模型保护自己，赶在黑客前面。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**现实**：Fable 5 拒绝所有安全审计请求。白帽无法使用。但真的能保证黑帽没有越狱成功吗？

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**结论**：*"we're kind of back in the exact same place that we were a month ago when Mythos was announced — you don't get access to it to protect yourself, but probably some bad guys have access to it to wreck you."*

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700">白帽防御方</div>
<div class="text-xs mt-1 opacity-70">Fable 直接拒绝<br/>无法审计合约</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="font-bold text-red-700">黑帽攻击方</div>
<div class="text-xs mt-1 opacity-70">用多智能体越狱系统<br/>分解问题绕过检测</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="font-bold text-yellow-700">不对称结果</div>
<div class="text-xs mt-1 opacity-70">防御方弱 → 攻击方强<br/>安全通过隐匿失效</div>
</div>

</div>

</div>

---

# 朝鲜黑客在窃取你的 AI API Key

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**已经持续六个月以上**

朝鲜威胁行为者的策略发生了变化。以前是：
- 窃取登录凭证 → GitHub SSH Key → `.npmrc` 文件

现在是：
- **专门窃取 AI API Key 和 Token**

Taylor：*"they've actually been deliberately exfiltrating any API AI things like keys and stuff. They've been doing that for like over six months."*

</div>

<div class="grid grid-cols-2 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-3 border-blue-400 text-sm">

**过去**：偷 API Key 能干嘛？最多烧光你的额度——反正大家都能访问同样的模型。

</div>

<div class="p-3 rounded bg-red-50 border-l-3 border-red-500 text-sm">

**现在**：Fable 5 等前沿模型仅限 API 访问。偷到 API Key = 获得了受限模型的完全访问权限。

</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">

**Kain 的担忧**：Web2 大型企业里成千上万的员工都有登录权限，其中难免有工程师被攻破机器——*"like we have friends in North Korea who are quite good at this sort of thing"*。

</div>

</div>

---
layout: two-cols
---

# 拐点悖论：前沿模型的安全拐点

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">

**阶段 1：有限发布**

只有少数企业（如 Coinbase）通过 Glasswing 获得访问权限。此时防御方多于攻击方——白帽有机会先到。

</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**阶段 2：大规模发布**

当有权限的人足够多时——*"there's too many people with access to it and therefore it's more likely the threat actors get access to it than the people that need to defend it"*。

</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500">

**Kain 的观点**

在拐点之前就应该撕掉创可贴——让所有人同时获得防御能力，而不是只给少数人然后指望安全。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./inflection-point.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Kain 的补贴实验：$200 → $20,000

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**实验设计**

Kain 开设了一个 $200/月的 Max 订阅账号，设计了一个高负载工作流：用 500-600 个智能体并行分解整个代码库。在 4 小时内消耗了约 **2 亿 token**。

</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-4 rounded bg-green-50 border-2 border-green-200 text-center">
<div class="text-sm opacity-70">支付价格</div>
<div class="text-4xl font-bold text-green-600 my-2">$200</div>
<div class="text-xs opacity-60">每月订阅费</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200 text-center">
<div class="text-sm opacity-70">实际消耗</div>
<div class="text-4xl font-bold text-red-600 my-2">$5,000+</div>
<div class="text-xs opacity-60">仅一周的 API 等价消费</div>
</div>

</div>

<div class="p-4 rounded bg-red-100 border-l-4 border-red-600 mt-2">

**Kain**：*"it's subsidized to a level, it's a hundred x subsidized. It's crazy."*

如果继续这样用一个月，$200 的订阅可以烧掉价值 **$20,000** 的 API 额度。而且他没有触发任何限制。

</div>

</div>

---

# 100 倍补贴：数字说话

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

<div class="text-xs opacity-60">实验时长</div>
<div class="text-3xl font-bold text-red-600 my-2">4 小时</div>
<div class="text-xs opacity-70">即可烧掉 $5,000</div>

</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">

<div class="text-xs opacity-60">并发智能体</div>
<div class="text-3xl font-bold text-orange-600 my-2">500+</div>
<div class="text-xs opacity-70">并行分解代码库</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

<div class="text-xs opacity-60">月潜在消耗</div>
<div class="text-3xl font-bold text-yellow-600 my-2">$20,000</div>
<div class="text-xs opacity-70">四星期满负荷</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

<div class="text-xs opacity-60">补贴倍数</div>
<div class="text-3xl font-bold text-green-600 my-2">100×</div>
<div class="text-xs opacity-70">前所未有</div>

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xs opacity-60">限制触发</div>
<div class="text-3xl font-bold text-blue-600 my-2">0 次</div>
<div class="text-xs opacity-70">完全没有</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-xs opacity-60">重度用户月费</div>
<div class="text-3xl font-bold text-purple-600 my-2">$12,000</div>
<div class="text-xs opacity-70">某团队成员的实际 API 消费</div>

</div>

</div>

<div class="text-xs opacity-50 mt-4 text-center">
Kain 的 Infinex 团队中，有人每月 API 消费 $12,000——产出相当于 20 个工程师。但 $200 订阅用户可以获得同样的额度。
</div>

---
layout: two-cols
---

# 补贴悬崖：为什么 100 倍补贴不可持续

<div class="text-sm leading-relaxed space-y-3">

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**订阅模型的前提**

需要大量用户付费但不使用来补贴少量重度用户——就像健身房。但 AI 的重度用户消耗量**远超**传统软件的差距。

</div>

<div class="p-2 rounded bg-yellow-50 border-l-3 border-yellow-500">

**差距有多大**

传统 SaaS：重度用户 ≈ 10× 普通用户。AI 订阅：重度用户可以轻松达到 **100×** 的消耗差。这完全打破了交叉补贴模型。

</div>

<div class="p-2 rounded bg-blue-50 border-l-3 border-blue-500">

**即将到来的悬崖**

Fable 5 从 6 月 22 日起仅限 API 访问——这是首个不享受订阅补贴的前沿模型。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./subsidy-cliff.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Fable 转为纯 API：补贴时代的终结

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**6 月 22 日起**：Fable 5 将从 Max 订阅中移除，仅通过 API 提供。这是第一个**不享受订阅补贴**的前沿模型。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-green-50 border-l-3 border-green-400 text-sm">

**对于 AI 实验室**

几百万 $200/月用户如果不给前沿模型，会立刻流失。但他们已经被补贴惯了——当 Fable 用 20 分钟就花掉 $200 时，他们会愤怒。

</div>

<div class="p-3 rounded bg-red-50 border-l-3 border-red-500 text-sm">

**对于用户**

*"it's not like you're going to switch these people who are on a $200 Max plan to spending $10,000 a month in API credit — like that was not real revenue that you were foregoing"*

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**核心矛盾**：被补贴的用户不会自动转化为 API 付费用户。那些 $200/月的收入不是"被放弃的 $10,000/月收入"——它本来就是被补贴出来的。取消补贴后，收入会**缩水**，不是增长。

</div>

</div>

---
layout: two-cols
---

# 定价模型改变行为：订阅 vs 计量

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">

**订阅制：能做什么？**

固定成本 → 无成本焦虑 → 大胆尝试 → "无用的探索"正是创新之源。Taylor 说，即使不最大化使用，订阅的心理模型就是"随意用"。

</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**计量制：值不值得？**

每次使用都在花钱 → 自我审查 → *"second guessing myself all the time, right? Do I really need to do this?"* → 减少实验，倾向于确定性。

</div>

<div class="text-xs opacity-60 mt-2">
Taylor 的总结：从订阅切到计量，"不只是多付钱——是完全改变你使用 AI 的方式"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./pricing-mindset.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 散户的真实困境

<div class="mt-6 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Taylor 的切身体会**

作为一个目前没有稳定收入的人，Taylor 愿意为订阅花 $X/月——因为它是固定的。但如果每次使用都要计算成本，她就会开始自我怀疑：

*"The second you link them then it's like wait. Then I start realizing like I'm not doing anything that's like I'm producing things that are valuable to me and my colleagues and other people around the world, but like not literally valuable, right? No one's paying for them."*

</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<div class="p-3 rounded bg-green-50 border-l-3 border-green-400 text-sm">

**订阅制**

固定预算
大胆使用
创新来自随意探索

</div>

<div class="p-3 rounded bg-red-50 border-l-3 border-red-500 text-sm">

**计量制**

每步都在花钱
"我还是拿纸笔自己算吧"
—— Taylor

</div>

<div class="p-3 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm">

**净损失**

你生产的东西有价值
但不直接变现
——于是你不生产了

</div>

</div>

<div class="text-sm opacity-60 mt-2">
*"I'll just grab a pen and paper. Figure this out myself."* —— Taylor 对于切换到计量制的自然反应
</div>

</div>

---

# 企业的不同处境

<div class="mt-6 space-y-4">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**API 路径的优势**

Kain 的 Infinex 团队长期在 API 计量制下运行——已经开发出一整套效率系统：共享工作流、共享资源、避免重复造轮子。他们在补贴结束时处于**更好的位置**。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**订阅路径的劣势**

习惯了大手大脚花 token 的团队——*"you've been using it this like wastefully, profligately for the last year with like no sense of the cost of it"*。当真实成本暴露时，文化冲击巨大。

</div>

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**效率技巧**：*"making things more multi-player, like having shared resources, having shared workflows, like things so that everyone's not kind of reinventing all of the workflows"*

这些对 API 用户是基本功，对订阅用户是完全陌生的概念。

</div>

</div>

---

# 你的团队会因为没有 Fable 而离职

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Kain 在 Twitter 上写道**（半开玩笑但认真）：

"我不会去一家不给我 Fable 5 访问权限的公司工作。这将成为 deal breaker。"

</div>

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="p-3 rounded bg-green-50 border-l-3 border-green-400 text-sm">

**员工留存**

不给员工最好工具的公司 = 流失顶尖人才。Kain 说他恨 Facebook 恨了很多年，但如果他们提供 Fable 访问权限——*"maybe I can make some sacrifices"*。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-3 border-yellow-500 text-sm">

**企业成本**

Luca 的 Pudgy Penguins 每月花 $50,000 在 AI 上。但到了某个节点，每家公司都会问：这 $50K 的产出真的值吗？不仅是直接产出——还关乎员工留存。

</div>

</div>

<div class="text-sm opacity-60 mt-2">
Kain 把这个类比到传统就业：雇佣一个人有固定成本，不能随时开关——但你不会计较每次对话的"成本"。AI 正在走向相反的方向。
</div>

</div>

---

# Fable 5 的推理突破

<div class="mt-4 space-y-3 leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**测试问题**：Kain 给了 Fable 一个极其混乱的规划任务——两个月内由智能体生成的 **上百份文档**，包含过时假设、被推翻的方案、相互矛盾的设计决策。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Opus 4.8 的表现**：*"it looks at it and it just latches onto weird things and like can't think its way through"*。它会抓住某个过时的文档不放，陷入细节，无法在战略和实现层面之间切换。

Codex 5.5 同样失败。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**Fable 5 的表现**：读完全部上百份文档后，识别出哪些假设已经被推翻、哪些文档已过期、哪些设计决策已被替代——然后给出了清晰的架构建议，包括正确地判断应该重构而非 hack。

</div>

</div>

---

# 旧模型 vs Fable：规划问题对比

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-2 border-red-200">

<div class="text-center font-bold text-red-700 mb-3">Opus 4.8 · Codex 5.5</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-white rounded border border-red-200">❌ 抓住过时文档不放</div>
<div class="p-2 bg-white rounded border border-red-200">❌ 被 red herring 带偏</div>
<div class="p-2 bg-white rounded border border-red-200">❌ 无法区分已废弃的方案</div>
<div class="p-2 bg-white rounded border border-red-200">❌ 战略 ↔ 实现层面切换困难</div>
<div class="p-2 bg-white rounded border border-red-200">❌ 输出有明显的"机器味"</div>

</div>

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

<div class="text-center font-bold text-green-700 mb-3">Fable 5</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-white rounded border border-green-200">✅ 识别过时文档和无效假设</div>
<div class="p-2 bg-white rounded border border-green-200">✅ 基于 commit 时间判断文档时效</div>
<div class="p-2 bg-white rounded border border-green-200">✅ 正确区分旧功能 vs 新功能</div>
<div class="p-2 bg-white rounded border border-green-200">✅ 从细节到战略自由切换</div>
<div class="p-2 bg-white rounded border border-green-200">✅ 输出接近人类高级工程师</div>

</div>

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-4 text-sm">

**Kain 的震撼**：*"I was just like reading what it was writing I was like reading what like a a good senior engineer who had like really good context would say like and it felt almost human-like it was really kind of a bit scary."*

</div>

---

# 工作流优化：Opus + Haiku 组合拳

<div class="mt-6 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Taylor 团队的实践**：不把所有事情交给一个模型。

<div class="grid grid-cols-2 gap-3 mt-3">

<div class="p-3 bg-white rounded border border-blue-200 text-sm">
<div class="font-bold text-blue-700">Opus：做"苦力活"</div>
<div class="mt-1">深度分析、安全调查、连接数据点、遍历大量资料</div>
<div class="text-xs opacity-60 mt-1">*"all the details important. Every detail is important here"*</div>
</div>

<div class="p-3 bg-white rounded border border-purple-200 text-sm">
<div class="font-bold text-purple-700">Haiku / Sonnet：做"润色"</div>
<div class="mt-1">汇总报告、编写最终输出、让文本更"像人写的"</div>
<div class="text-xs opacity-60 mt-1">*"they just sound more human"*</div>
</div>

</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**关键洞察**：Opus 抓每一个细节——这是它的优势也是劣势。Haiku 和 Sonnet 会自然忽略不重要的细节，生成更流畅的总结。用 Opus 做分析，用 Haiku/Sonnet 做输出，是最佳组合。

</div>

<div class="text-xs opacity-50 mt-2">
Taylor 还指出模型名称本身就反映了性格：Sonnet 和 Haiku 是诗歌形式——更擅长"语言"；而 Mythos 这类命名暗示了不同的气质。
</div>

</div>

---
layout: two-cols
---

# AI 实验室为何如此行事：文化堆栈

<div class="text-sm leading-relaxed space-y-2">

<div class="p-2 rounded bg-green-50 border-l-3 border-green-500">

**底层：极其聪明但不实用的人**

极度聪明的自闭倾向者，以非传统方式看待世界——这是基线。

</div>

<div class="p-2 rounded bg-orange-50 border-l-3 border-orange-500">

**中层：海量资金 + 百万件事**

巨额资金倾泻而下 → 极度分心。同时发生一百万件事 → 无法专注。

</div>

<div class="p-2 rounded bg-red-50 border-l-3 border-red-500">

**顶层：无限推理 + 机器里的精灵**

这是连加密世界都没有的疯狂——你的机器在跟你对话，帮你做事。这又是一层额外的疯狂。

</div>

<div class="text-xs opacity-60 mt-2">
Kain 的类比：加密世界在 2018 年已经够疯狂了（快速移动、大量资金、不实用的人），AI 实验室在上面的基础上再加了一层"机器精灵"。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./lab-culture-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Pudgy Penguins 的 AI 实践

<div class="mt-6 space-y-3">

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**LomeliBot：公司大脑**

Luca 的 CTO（现总裁）Lorenzo 构建了一个覆盖整个组织的 AI 中枢——知道公司的一切信息。它每日生成报告、监控 token 消耗、可以在超预算时自动切断使用。

*"it kind of acts as like our Jarvis for our organization"*

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**AI 创意引擎**

Pudgy 积累了数千个数字资产。正在构建一个引擎，将这些资产喂给 AI 来生成新内容——以极低的成本持续输出。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xs opacity-60">月 AI 支出</div>
<div class="text-3xl font-bold text-green-600 my-2">$50,000</div>
<div class="text-xs opacity-70">预算上限</div>
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-xs opacity-60">专职安全</div>
<div class="text-base font-bold text-orange-600 my-2">Bo（8 个月）</div>
<div class="text-xs opacity-70">用 AI 不断挑战系统</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-xs opacity-60">Abstract Chain</div>
<div class="text-base font-bold text-blue-600 my-2">Tommy</div>
<div class="text-xs opacity-70">正在成为 AI 行家</div>
</div>

</div>

</div>

---

# Pump.fun 赏金市场：暗网的"预期后果"

<div class="mt-6 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**Pump.fun 推出了赏金市场**：用户发布任务、提供赏金，完成者获得报酬。听起来像一个正常的众包平台——但在 meme coin 的黑暗角落里，这变成了什么？

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-red-100 border-l-3 border-red-500 text-sm">
<div class="font-bold">tattoo Bounty Work</div>
<div class="mt-1">$2,000 奖金，要求在前额纹身"Bounty Work"。悬赏人拼错了单词——然后拒绝付款。最终靠 meme coin 弥补了 $15,000。</div>
</div>

<div class="p-3 rounded bg-red-100 border-l-3 border-red-500 text-sm">
<div class="font-bold">10,000 SOL 自杀赏金</div>
<div class="mt-1">有人发布了价值 10,000 SOL 的赏金，要求某人自杀。Pump.fun 平台上之前就发生过直播自杀事件。</div>
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Kain**: *"Pump.fun's like unintended? No, no, no. Intended, bro. Like these are intended consequences. We're gonna bring the periphery into the center."*

这不是市场的意外副作用——他们把黑暗边缘搬到了舞台中央。

</div>

</div>

---

# Humanity Protocol 被黑：一次全面失窃

<div class="mt-6 space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

**单一设备被植入恶意软件** → 大量私钥存储在同一设备 → 全部泄露。

黑客用这些私钥做了三件事：

</div>

<div class="grid grid-cols-3 gap-3 mt-2 text-center">

<div class="p-3 rounded bg-red-100 border-2 border-red-200">
<div class="font-bold text-red-700 text-sm">跨链桥被升级</div>
<div class="text-xs mt-1 opacity-70">修改桥的实现<br/>抽走所有资金</div>
</div>

<div class="p-3 rounded bg-red-100 border-2 border-red-200">
<div class="font-bold text-red-700 text-sm">H 代币被篡改</div>
<div class="text-xs mt-1 opacity-70">升级代币实现<br/>从所有持有人钱包中<br/>抽走全部 H 代币</div>
</div>

<div class="p-3 rounded bg-red-100 border-2 border-red-200">
<div class="font-bold text-red-700 text-sm">无限增发</div>
<div class="text-xs mt-1 opacity-70">偷走所有代币后<br/>又凭空铸造更多</div>
</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-3 text-sm">

**3/6 多签的讽刺**：六个签名者，需要三个即可执行——但实际上所有密钥在一台热设备上。Taylor 质疑：这到底是为了安全，还是为了**做样子**？*"it has to be for show, right?"*

</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3 space-y-3">这期对谈里最值得记住的几句：</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

*"with Fable, it literally like the second it's anything in the security realm, it just immediately downgrades. Like immediately."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Taylor Monahan，描述 Fable 5 的"跳闸开关"机制</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

*"They're like trip switches or something, like it detects a certain thing and it just goes I'm out of here."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Taylor，Fable 5 不是"防护"而是"紧急切断"</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

*"it's subsidized to a level, it's a hundred x subsidized. It's crazy."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Kain Warwick，通过实验证明了订阅补贴的极限</div>

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

*"I was just like reading what a good senior engineer who had like really good context would say like and it felt almost human-like it was really kind of a bit scary."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Kain，Fable 5 处理规划问题的表现让他感到不安</div>

</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的片段：</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

*"they've actually been deliberately exfiltrating any API AI things like keys and stuff. They've been doing that for like over six months."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Kain，揭示朝鲜黑客的新目标</div>

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

*"Pump.fun's like unintended? No, no, no. Intended, bro. Like these are intended consequences."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Kain，Pump.fun 赏金市场不是意外而是故意的</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

*"I'll just grab a pen and paper. Figure this out myself."*

<div class="text-xs opacity-60 mt-1 not-italic">—— Taylor，从订阅切到计量后的自然反应</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

*"the second you link them then it's like wait. Then I start realizing like I'm not doing anything that's ... not literally valuable, right?"*

<div class="text-xs opacity-60 mt-1 not-italic">—— Taylor，关于成本的自我意识如何扼杀创造力</div>

</div>

</div>

---

---
layout: end
---

# 谢谢

<div class="mt-6 text-base opacity-60">

前沿模型的发布策略比模型本身更值得关注——
安全性、可及性、经济性的权衡将定义 AI 的未来十年。

</div>

<div class="mt-6 text-xs opacity-40">

← 声笺 Resonote
</div>
