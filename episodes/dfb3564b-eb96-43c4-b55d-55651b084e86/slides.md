---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'China''s AI Push Sounds Alarms, Airplane Seat Debate, Chris Best Joins | Ferdinand Dabitz, Kaiwei Tang, Steven Schwartz, Katie Roof, Zavain Dar, Chad Edwards'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 中国AI逼近，硅谷拉响警报？

TBPN 2026年7月21日特别节目

<div class="text-sm opacity-60 mt-2">
多位嘉宾深度对谈：从中国开源模型到Substack反水帖，从极简手机到材料发现
</div>

---
layout: default
---

# 为什么这期不容错过

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**🇨🇳 中国AI模型冲击**
Kimi K3 与 Qwen 3.8 Max 撼动美国前沿实验室地位，开源 vs 闭源之争白热化

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**🎣 Substack 反"AI水帖"**
Chris Best 谈 "Claude钓鱼" 与内容信任危机，平台推出 AI 检测功能

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**📱 极简手机复兴**
Light Phone 发布翻盖新机，Gen Z 引领"去智能手机化"运动

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**🚀 Gen Z 创业新范式**
WAP CLI 发布，年轻人用"不对称组合"模式同时经营多种生意

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**🔬 材料 + 生命科学**
Cusp AI（4.5亿融资）与 Dimension（8亿基金）：AI重新定义科学前沿

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**💰 美元清算与AI银行**
Augustus 1.8亿B轮融资，打造AI驱动的现代代理银行

</div>

</div>

---
layout: default
---

# 中国AI模型：警报声中的现实

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3">

**OpenAI 与 Anthropic 高管发出警告**

中国产廉价AI模型将导致"反乌托邦的AI未来"，构成不可接受的安全风险（来源：华尔街日报）

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**争论焦点**：是"反乌托邦开源"还是"解放性开源"？分析师认为两家公司（准备明年上市）只是想消灭竞争对手

</div>

</div>

<div class="text-sm leading-relaxed">

**近期关键事件**：

- **Moonshot AI 的 Kimi K3** 与 **阿里巴巴 Qwen 3.8 Max** 相继发布，在某些基准测试上与美国模型竞争
- 阿里巴巴是 Moonshot 的大股东——类似 Anthropic-Google 的投资关系
- 新模型为"开放权重"，允许用户下载并用公司数据定制
- 美国公司对（远低于同类美国产品的）中国模型的使用量激增

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>关键背景</strong>：美国开源前沿正在追赶中国。Thinking Machines Lab（前OpenAI技术主管 Mira Murati 领导）和 NVIDIA 的 Nemotron 3 Ultra 开始受到关注。
</div>

</div>

</div>

---
layout: two-cols
---

# "AI共产主义"：开源模型主导的未来？

Dean Ball（OpenAI 战略未来主管）在 X 发文引发轩然大波

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mt-3 text-sm">

**核心论点**：开放权重模型主导世界的一个可能结果是"完全AI共产主义"——这正是中国提出的方案：AI作为国家提供的数字公共基础设施，而非市场产品。

</div>

<div class="mt-3 text-xs opacity-70 leading-relaxed">

Ball 后来澄清他并非主张美国政府限制中国AI，但他指出了一个核心困境：

- 顶级AI公司筹集了数十亿美元来支付改进AI系统所需的庞大算力
- 如果大家都使用几乎免费的AI系统，就无法为持续的前沿AI发展提供资金

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-open-closed-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 监管俘获 vs 专利保护：两种叙事

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🛡️ 国家安全叙事

- 中国模型带来网络攻击风险、安全隐患
- Dario Amodei 在彭博采访中警告：拥有高级网络安全能力的免费可下载AI模型可能造成伤害
- 国家安全官员考虑将中国企业列入贸易黑名单、发布安全警告、签署针对开源模型的行政令

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 📉 监管俘获叙事

- **David Sacks**（风投家/白宫AI顾问）：Ball 的帖子实为"监管俘获策略的自白"
- "将监管不确定性武器化作为竞争工具，这完全不可接受"
- **George Hotz**："如果Anthropic把模型权重放到 Hugging Face 上（像中国人那样），我乐意使用。美国科技公司是忘了初心的租金攫取机器"
- **Nick Carter**："美国政府不欠任何大型实验室商业模式"

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-xs">
<strong>作者概括</strong>：这是本期最核心的争论——保护国家安全与维护市场竞争的边界到底在哪里？
</div>

---
layout: default
---

# 开源模型能被禁止吗？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**财政部长 Besson 的立场**（Fox 连线）：

"本届政府支持开源模型，但我们不支持知识产权盗窃。如果看到境外模型窃取我们伟大公司的成果，我们有能力对其制裁。"

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**实际的困难**：如何定义"侵权"？如果有一篇研究论文，你去实现它、训练它、微调它或用它引导自己的模型——在供应链的哪一步才算违规？Perplexity 快速基于 DeepSeek 做了 1776 微调版，这算不算？

</div>

</div>

<div class="text-sm leading-relaxed">

**类比：盗版的终结不是靠禁**

盗版的解决方案从来不是"禁止盗版"。你仍然可以下载种子文件——但 Apple TV、Spotify 和 Netflix 的产品体验太好了，大多数人最终选择每月付几美元。

**Bill Gurley 的质疑**：
"如果有盗窃，意味着发生了犯罪——但我不知道有任何诉讼被提起。一家公司不应被允许未经教育就宣布侵权。我不确信法院会认为按设计使用产品就是盗窃。这就是为什么这件事在华盛顿游说，而不是走正常的法院系统。"

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>历史先例</strong>：Cisco起诉华为复制路由器源代码和专利技术；T-Mobile起诉华为窃取手机测试机器人技术。美国公司起诉中国公司在美国法院是有先例的，但诉讼周期以年计，届时AI格局早已改变。
</div>

</div>

</div>

---
layout: default
---

# 镜像行动：中国也在考虑AI出口管制

<div class="mt-4">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-4 text-sm leading-relaxed">

根据《金融时报》报道，中国商务部（MOFCOM）已与阿里巴巴、字节跳动、智谱等AI公司商讨，限制向海外转移模型训练的关键数据，以及允许模型权重被下载。中国仍将允许海外客户访问模型和服务，但倾向于不开放权重。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Dean Ball 的胜利宣言**：

"两天之内，两个敌对国家的行为都印证了我的分析——人们不应该故意曲解我的分析为政策主张。"

Ball 的观点是：他只是根据自己的经验描述了事情可能如何发展，并非倡导特定政策。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**宏观图景**：

- 中美在AI领域形成镜像式博弈——双方都在考虑限制对方获取技术
- 开源/闭源的争论不再只是商业问题，而是地缘政治筹码
- 但正如一位评论者指出的：廉价产品对消费者和企业总是好事。问题是"前沿发展"的资金来源

</div>

</div>

</div>

---
layout: default
---

# 核心争论的四股力量

<div class="grid grid-cols-4 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">

### 🔓 开源派
开源模型让AI民主化
消费者受益、企业受益
不必为"前沿"实验室付溢价

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 🔒 闭源派
没有商业回报就没有前沿研发
数十亿基础设施投资需要定价权
安全可控

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### 🏛️ 安全监管派
开放模型带来网络攻击风险
中国模型可能被用于恶意目的
政府应当介入

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 🌐 竞争市场派
政府不应干预市场竞争
如确有IP盗窃，走法律程序
便宜AI对美国消费者是好事

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**根本矛盾**：四种立场在逻辑上可以同时成立——开源确实带来了价值，闭源确实需要商业模式支撑，安全确实值得关注，市场竞争确实应当保护。问题在于这四者如何平衡，以及在"谁"来判断平衡点上存在分歧。

</div>

---
layout: default
---

# 市场如何反应：投资者开始质疑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**股市承压**：

中国模型以远低于美国同类产品的成本，在美国企业中采用率激增。这促使部分投资者开始质疑 Anthropic 和 OpenAI 等顶级模型制造商的"持续竞争优势"（staying power）。

**连锁反应**：
- 前沿AI公司的商业溢价能力受到威胁
- 为基础设施投入的数万亿美元需要定价权来证明合理性
- 部分科技和AI公司股价上周下跌

</div>

<div class="text-sm leading-relaxed">

**谁来为AI军备竞赛买单？**

主持人 John 指出：开源派和闭源派各有道理。

- 如果Mythos GPT Cyber 花100万美元挖出一个零日漏洞——对小公司来说太贵了
- 但如果Google推出 Flash Cyber，成本大幅下降，中小企业可以直接用——这是消费者的胜利
- 市场上已经有了项目 Glasswing（闭源）、Flashlight Cyber（低成本调优版）等不同选择

**Nikesh Arora 的例子**：花了一百万美元用AI挖出了一个零日漏洞——"完全值得，但对小公司来说太贵了。"

</div>

</div>

---
layout: default
---

# Substack 向"AI水帖"宣战

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**Substack × Pangram**：推出 AI 检测集成功能。用户可扫描帖子、回复和评论，查看估计的AI写作比例。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mb-3 text-sm leading-relaxed">

**Pangram 的研究数据**：LinkedIn 上约 **40%** 的长文内容是AI生成的。Substack 的比例约为 **10%**，但 Chris Best 想防患于未然。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Substack 的使命**：构建文化的经济引擎。Chris Best："这触及了我们的核心使命。"

</div>

</div>

<div class="text-sm leading-relaxed">

**Chris Best 描述的体验**：

> "我在刷时间线、阅读内容，有时会有一种'人体异形入侵'的体验——我突然意识到自己在读的东西实际上完全是 Claude 生成的。这让人在网上阅读的体验变得更糟，因为你一直在怀疑：这是真的吗？我读到的真的是这个人相信的东西吗？"

**问题不在于使用AI本身，而在于欺骗**：

- 如果你预期与一个真人建立了真实的连接，实际上读的却是"没有人"写的东西——这就是问题
- Chris Best 将其命名为 **"Claude钓鱼"**（Claude Fishing）

</div>

</div>

---
layout: two-cols
---

# "Claude钓鱼"：内容信任的崩塌时刻

<div class="text-sm leading-relaxed">

**什么是"Claude钓鱼"？**

这不是关于AI使用本身的对错——Chris Best 的定义更精确：当读者以为自己在消费一个有血有肉的人的观点，结果发现他们读到的内容"实际上出自无人之手"——那个发现瞬间就是"Claude钓鱼"。

**关键在于"披露"会毁掉体验吗？**

如果你披露了使用AI，而读者仍然愿意付费订阅——那说明内容本身有价值。如果披露就会毁掉一切——那说明内容从一开始就是水帖。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./trust-spectrum.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 反水帖，其实是"亲AI"的立场

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**Chris Best 的核心观点**：

> "我认为反水帖本身就是亲AI的立场。你不会看到 Sam Altman 或 Dario Amodei 在到处发Claude生成的内容——不是因为他们不相信AI。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**一个类比：机械土耳其人**

历史上有过一个"反向Claude钓鱼"——18世纪的"机械土耳其人"象棋机器。表面上是AI下棋，实际上里面藏了一个真人棋手。Chris Best 用它来说明：真正有价值的从来都是背后那个"人"。

</div>

</div>

<div class="text-sm leading-relaxed">

**水帖不是"用AI辅助的内容"**：

- 如果你花时间与AI来回互动、深度研究、事实核查，然后写成稿件 → **这是AI辅助创作**
- 如果你只是说"帮我写一千条爆款LinkedIn帖子，别出错" → **这就是水帖**

**AI让你更高效，也让你可以更烦人**

> "AGI 里的 A 不应该是 'annoying'（令人烦人）的意思"

Substack 还推出了 **"我是如何创作的"声明**功能，作者可以声明：
- 我从不使用AI
- 我以某种方式使用AI
- 我广泛使用AI，但这是我能提供的独特视角

</div>

</div>

---
layout: default
---

# AI越强大，人类信任越值钱

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3 text-sm leading-relaxed">

**Chris Best 的判断**：

> "随着AI变得越来越强大，知道'我是在获取一个人的真实视角'就变得越来越重要。如果我不在乎是谁写的，我完全可以直接跟Claude聊天。问题是——哪个人类相信这些内容、为此负责、用自己的精力和时间在投入？"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

**Substack 的商业逻辑**：当你可以从AI获取任何内容时，"被信任的人类连接与视角"的价值反而**上升**。只要平台能持续奖励这种价值，它就是AI时代的赢家。

</div>

</div>

<div class="text-sm leading-relaxed">

**创作者在变化**：

- 有些 YouTuber 开始在视频描述甚至片头声明"我不使用任何AI"
- 观众对此感到安心——不是因为他们反AI，而是因为有太多"三分钟就发现是AI稿子"的糟糕体验
- **Tyler 的描述**："你会听到那些'Claudism'，那些AI味——即使对方只是在朗读脚稿，你也能感受到他们没花心思"

**付费订阅的社会契约**：

当你付费订阅一个人，你不仅在购买一个媒体产品——你在用一笔小钱让一个人可以"抛弃日常工作，专注深入理解一个行业"。如果他们某天决定偷懒水帖，那是违约。

</div>

</div>

---
layout: default
---

# Substack 在AI时代的商业逻辑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**Chris Best 的增长数据**："业务在增长，表现不错。"

**AI时代的商业模式悖论**：
- 有人担心"人们会直接跟AI聊天获取信息，不会花时间在Substack上"
- 但Chris Best看到的是**相反的趋势**：当你可以从AI获取任何内容时，"被信任的人类连接与视角"的价值在**上升**

**只要平台能持续奖励高质量的、有人类温度的内容，创作者和读者就都会留下来购买体验。**

</div>

<div class="text-sm leading-relaxed">

**付费订阅的深层含义**：

Tyler 提供了一个精准的观察：当你在Substack上订阅一个人，你付费的不只是"媒体产品"——你在用一笔小钱**让一个人可以放弃日常工作，专注深入理解一个行业**。这是一种社会契约。

如果创作者有一天决定用AI水帖来替代真正的工作，那就是对这种契约的违约——即使短期内看不出来，长期订户也会流失。

**Chris Best 的判断**：这种"AI味的反感"正在成为一种**后天习得的品味**——不是每个人都有，但会拥有它的人将越来越多。

</div>

</div>

---
layout: default
---

# Light Phone：让手机重新成为工具

<div class="text-sm leading-relaxed mt-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-4">

**Light Phone 发布 Light Flip**：299美元的翻盖极简手机（2027年4月发货），被称为"有史以来最不聪明的手机"——但 CEO Kaiwei Tang 更愿意称之为**简单手机**。

</div>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 📱 产品哲学

> "你的手机越聪明，你实际上越笨。"
> — Kaiwei Tang

工具应该像锤子一样：拿来用，用完放回去。你不会花五个小时刷锤子，好让锤子公司赚钱。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 🎯 设计三原则

1. **零广告**——所有工具都按此设计
2. **用户不成为"内容创造者"**——没有无限滚动的信息流
3. **每个工具都有意图**——音乐工具是MP3播放器而非Spotify；播客是教育工具

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 📊 用户画像

- **28% 的 Gen Z** 强烈希望获得非智能手机
- **26% 的千禧一代** 也有兴趣
- 越来越多用户将 Light Phone 作为**主力机**而非备用机
- 年轻人在"真实体验"活动中会对拿出智能手机拍照的人喝倒彩

</div>

</div>

</div>

---
layout: two-cols
---

# 极简手机与AI的矛盾平衡

<div class="text-sm leading-relaxed">

**Kaiwei Tang 的AI立场**：

> "我们设计 Light Phone 是因为看到人们对智能手机和社交媒体感到沮丧、焦虑、压力巨大，但没有出路。同样的逻辑也适用于AI——它可以是非常有用的工具，前提是它**节省我的时间**。"

**问题在于**：当前AI产品让人**工作更长时间**、**被通知不断轰炸**——这正是 Light Phone 要反对的模式。

**一个惊人的数据点**：在六个月的用户调研中，**没有一个翻盖手机用户提到需要AI功能**。"没有人想要手机上的AI按钮。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./co-design-stack.excalidraw"
  class="w-[440px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 十年不投广告：Light Phone 的有机增长

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 mb-3 text-sm leading-relaxed">

**零广告支出，十年增长 20%-50%/年**

所有增长都来自口碑、媒体报道和名人自发使用——包括：
- Aaron Paul（《绝命毒师》）
- Pete Davidson
- Ed Sheeran
- 各类自发传播的科技博主评测

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**不搞"计划性报废"**：

- 11年只发布了3款手机
- Light Phone 2 已售6年仍继续销售和软件升级
- 在布鲁克林本地提供维修服务
- "你上次升级你的锤子是什么时候？"

</div>

</div>

<div class="text-sm leading-relaxed">

**Kaiwei 的产品观**：

> "当你刻意使用某个工具时，体验就变得特别。为一个目的设计的物件，本身就让它变得特别。"

**关于播客中的广告**：

TBPN 主持人问：你们有播客功能——我们的播客里有广告，这算不算"被广告渗透"？

Kaiwei 承认这是一个"漏洞"，但强调核心逻辑一致：播客工具在 Light Phone 上被理解为**教育工具**，而非无限滚动的消费内容。

</div>

</div>

---
layout: default
---

# WAP CLI：一键启动一门生意

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**WAP 发布 CLI 工具**：将平台全部功能（支付收款、广告创建、资金流动、寻找真人劳动力）通过命令行接口暴露给AI代理。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Steven Schwartz 的愿景**：

> "旧思维是'想法容易、执行难'。我们正在实时看到这句话被颠覆。我们希望秘密完全在想法上——你只需要说'为有着疯狂发型的科技人开一家理发店'，其他所有执行环节都由平台处理。"

</div>

</div>

<div class="text-sm leading-relaxed">

**为什么是CLI？**

- WAP 是"API优先"的公司，API功能极其强大但UX一直没跟上
- 网站让很多人感到困惑——"让我觉得自己像个老年人"
- CLI 把全部功能带到终端，AI代理可以直接调用

**WAP的规模**：平台上每月产生 **4-5亿美元** 的收入。几乎所有收入都被用于广告投放。

**WAP Ads**：让商户在收到付款后立即程序化投放广告（不仅是Meta，而是整个互联网）。

</div>

</div>

---
layout: two-cols
---

# "他们的真正生意是'早入场'"

<div class="text-sm leading-relaxed">

**来自 Aporia 的趋势观察**（Steven Schwartz 赞为"最近最喜欢的观点之一"）：

> "Gen Z 创业越来越像经营一个不对称的'看涨期权组合'，而不是押注单一长期项目。在圣特罗佩和马贝拉海滩俱乐部遇到的人，一年做加密货币，下一年做Amazon品牌，然后是AI获客代理，然后是太阳能板——"
>
> "我以前觉得这是不严肃的创业。但他们中有人在这件事上变得真正擅长。他们的真正生意不是加密货币、AI或太阳能板——**而是'早入场'。**"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./portfolio-businesses.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Gen Z 的数据：极简手机不只是怀旧

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">

### 28%
Gen Z 强烈希望获得非智能手机

</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">

### 26%
千禧一代也有兴趣

</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">

### 12%
Gen X 有兴趣

</div>

</div>

<div class="mt-4 text-sm leading-relaxed">

**Kaiwei Tang 的现场观察**：

> "在纽约的一场倡导真实生活体验的活动中，表演者在台上，台下一名女性掏出智能手机想录像——全场对她发出嘘声。这不是短期现象，不是'复古感觉真好'的暂时情绪。这场由年轻人发起的运动正在随着AI和iPhone 45越来越大而变得越来越强大。"

**趋势判断**：Kaiwei 认为这个趋势"不会停止，只会越来越大"。Light Phone 的策略不是要求人们放弃科技——而是提供"不同场景下用不同工具"的选择。"就像我们有不同的鞋子、不同的汽车、不同的夹克。"

</div>

---
layout: default
---

# ✈️ 插曲：飞机座椅，该不该后仰？

<div class="grid grid-cols-2 gap-4 mt-3 text-sm">

<div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">

### 反方：后仰是反社会行为

- 2020年调查：**77%** 的受访者反对后仰（2014年仅41%）
- Tyler："不能因为你'可以'做就做——你会侵犯别人的空间"
- Josh Rothman（《纽约客》）：当你在15小时航班上，后排是一个带着幼儿的家庭……

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 正方：人人都后仰，空间守恒

- 如果每个人都后仰，每个人拥有相同空间
- "他们把按钮放在那里了——坐直比后仰更不舒服"
- "我在还是小孩的时候就等着安全带指示灯熄灭"
- Jordy："人人承诺舒适"

</div>

</div>

<div class="text-sm leading-relaxed">

**TBPN 的立场**：全员支持后仰。"这是个人舒适与人际信任的试金石。"

**拓展讨论**：
- 在飞机上点健怡可乐算不算反社会？（有可能洒到邻座）
- 带 JBL 音箱上飞机？
- 跟AI硬件对话算不算冒犯？
- 飞机上点热口袋披萨？"活在当下，享受微小的放纵。"

**Tyler 的荒诞终局测试**："如果飞机正在坠落，你会后仰吗？" → "最后的瞬间你才选择不尊重我？在我最脆弱的时候？"

</div>

</div>

---
layout: default
---

# 剪辑经济：注意力套利的新管道

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**Steven Schwartz 谈剪辑经济**：

WAP的API足够强大和开放，以至于用户自发创造了各种商业模式。剪辑是其中最火爆的应用场景之一——尤其是受Kick直播主的推动。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

**从剪辑到数据标注**：

Steven 认为剪辑只是"第一幕"。更大的机会在于**人类在环AI**——数据标注、陪伴教练等一切AI目前无法完成的任务，都可以通过WAP的支付基础设施大规模分发。

</div>

</div>

<div class="text-sm leading-relaxed">

**WAP用户的情绪：极度乐观**

> "我从未见过情绪达到这个高度。WAP用户很特别——因为他们很可能**真的在赚钱**。这和推出一个'vibe coded'应用然后祈祷用户来用完全不同。"

**对于传统媒体**：Steven 认为本地新闻台等"资源严重不足"的机构是剪辑工具的天然用户——如果WAP能让一键生成剪辑变得足够简单的话。

**目前的状态**：业务在国际市场"爆发性增长"，团队仍然很精简，"严重投入不足"。

</div>

</div>

---
layout: default
---

# 人类在环AI：数据标注与未来的工作

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**Steven Schwartz 的"第二幕"预言**：

> "如果剪辑是第一幕，那么更大的故事还在后面。当前被讨论得还不够多的话题是——对数据的**需求**有多么疯狂。"

**发展中国家的机会**：通过记录日常任务、提交数据，通过 WAP 获得收入——这是目前最赚钱的线上计件工作之一。

</div>

<div class="text-sm leading-relaxed">

**AI的原创性危机**：

> "人们正在意识到，AI并不具备'将任何事物从零提升起来'所需的原创性思维水平。它们花了数十亿美元来获取人们的想法。"

**数据 vs 想法**：在某些层面上，AI公司确实在"为人的想法付费"——但 Steven 认为"我们可以做得更好"。人类在环不应该是AI的补丁，而应该是**任何真正经济产出的起点**——因为一切始于某人的创意和独创性。

</div>

</div>

---
layout: default
---

# Katie Roof：独家新闻的黄金时代

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**Katie Roof 加入 Business Insider**：担任新设立的编辑职务，属于 Axel Springer 全球记者网络——内容将同步发表于 Politico、新收购的《每日电讯报》等姐妹出版物。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**Business Insider 的战略转型**（主编 Jamie Heller 领导）：

- 独家内容比例从 **40% → 80%**
- 更多独家新闻，更少聚合转载
- 锁定愿意为原创内容付费的受众

</div>

</div>

<div class="text-sm leading-relaxed">

**Katie 的独家新闻方法论**：

> "关键不是只追逐那些广泛传播的传言——每个人都能听到那些。我最大的独家新闻其实来自**预测接下来会发生什么**。我不会打电话说'我听到了某件事'——我会在深入交谈中抛出各种场景假设，有时对方会说'你说对了，这家公司确实在买那家公司'。"

**关于"被植入"的新闻**：

Katie 对准确性的重视超过对速度的追求："毁掉信誉比建立信誉容易得多。"她总会问自己：这个故事合理吗？消息来源是否有动机误导？

如果一个公司"希望估值100亿"，Katie 的经典回应是："我也希望自己值100亿。真正的问题是——他们能拿到100亿吗？"

</div>

</div>

---
layout: default
---

# 原创新闻在AI时代为何更值钱

<div class="mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-4">

**Katie Roof 的洞见**：

> "原创新闻（original reporting）比以往任何时候都更重要。因为无论技术怎么变、讲故事的格式怎么变——人们永远想知道世界上发生了什么。像我这样的记者，选择加倍投入**人类技能**而非仅仅是写作技能，所以我们仍然有价值：我做的事情是AI可能做不到的——拥有一个人脉网络，问出那些对方本来没打算分享的问题，然后告诉公众。"

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**AI记者能做独家吗？**

可能——如果某件事是对方"想"被报道的。但那更像是公关，而非调查新闻。大多数独家新闻的真相是：信源在被记者追问时才"顺便"确认。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**科技新闻的TAM在扩大**

AI和科技已经从财经版移到头版。即使你不是靠AI赚钱的投资者，你也会好奇它要把世界带往何处。这推动了更多媒体加倍投资科技记者。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**独家新闻的竞争加剧**

"2020-2021年我几乎能拿下大多数独家。现在做这件事的记者多了很多，第一名的难度大了。"但深度人脉和"预测式提问"是持久的壁垒。

</div>

</div>

</div>

---
layout: default
---

# Zavain Dar：8亿美元的科学投资哲学

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4 text-sm leading-relaxed">

**Dimension Capital**：Fund 1（2022年，3.5亿）→ Fund 2（2025年，5亿）→ Fund 3（2026年，**8亿美元**，法定硬上限38亿）。投资主题：**科学与计算的前沿**——从硅基芯片到下一代GPU/CPU、ML基础设施，再到世界模型、Neo Labs、生物科技和下一代药物。

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 🔬 生命科学 × 技术

Fund 1 聚焦"交集"（各占一半）；Fund 3 扩大为"并集"——既投纯技术也投纯科学。Zavain："我们正在见证对'什么是疾病'的重新定义。"

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 💊 两种商业模式

- **Chai Discovery**（Index/Sequoia/Kleiner联合领投）：以SaaS方式向药企销售AI服务
- **New Limit**：用类似技术，但以"端到端开发药物并最终商业化"为目标

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 🎯 "什么是对的"公开信

Dimension 最引以为豪的是一封致LP的信——"如果我们对了会怎样？"在充满地缘政治紧张和技术焦虑的时刻，退一步想象这些科学如何弯曲人类文明的弧线。

</div>

</div>

</div>

---
layout: default
---

# AI × 生物科技：老药新用与疾病定义的重塑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**两个同时成立的命题**：

1. **AI能更好地理解疾病机制** → 把已有的分子重新用于已知有效的靶点 → 老药新用
2. **大多数已知靶点"不可成药"**（undruggable）→ 历史上我们根本不知道如何设计分子来扰动这些蛋白质 → 未来5-7年，新一代AI公司（如Chai）将提供"扰动我们想扰动的东西"的技术

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**Zavain 比喻**："就像马匹适合不同的赛道（horses for courses）——有些公司走SaaS路线，有些走端到端药物开发路线，各自发挥优势。"

</div>

</div>

<div class="text-sm leading-relaxed">

**疾病定义的范式转变**：

- 10-15年前：肥胖不被认为是疾病，而是"行为问题" → 今天：肥胖是**全球最大药物市场**
- 20年前：皮肤病（如湿疹）被认为"不够严重" → 今天：Dupixent 是全球最大药物之一
- **RevMed** 今年早些时候针对胰腺癌的**三期临床数据惊艳**——这是基于加州一家生物科技公司在6个月内开发并展示的数据

**Zavain 对肽类药物的谨慎态度**：

> "任何时候往自己身体里注射东西，你都应该知道那是什么。关于科技圈流行使用肽类药物的传闻，我的猜测是——效果可能更多是安慰剂。我绝不会自己用，也不会让我的朋友和家人用。"

</div>

</div>

---
layout: default
---

# 疾病定义的范式转变：从"行为问题"到"最大药物市场"

<div class="text-sm leading-relaxed mt-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mb-4">

**Zavain Dar 的历史视角**：我们正在见证对"什么是疾病"的重新定义——这不仅影响科学研究，也改变了整个投资格局。

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

### 📅 10-15年前

肥胖不被认为是"疾病"——而是"行为问题"。药企和生物科技公司不投资这个领域，因为"它不是病"。

**今天**：肥胖是**全球最大药物市场**（GLP-1类药物）。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 📅 20年前

皮肤病（如特应性皮炎/湿疹）被认为"不够严重"，不值得开发药物治疗。

**今天**：**Dupixent** 是全球最大药物之一。没有人会再说皮肤相关疾病"不够严重"。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 📅 现在

- **抗衰老/长寿**：从"科幻概念"变为严肃投资领域
- **炎症/免疫学**：被重新认识为多种慢性病的底层机制
- **胰腺癌**：RevMed 今年数据显示AI驱动的药物开发产生了有意义的临床效果

</div>

</div>

</div>

---
layout: default
---

# Cusp AI：用AI搜索新材料

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4 text-sm leading-relaxed">

**Cusp AI 完成 4.5亿美元融资**（此前已获1亿美元A轮），由 Kleiner Perkins、NEA 和 **Jeff Bezos** 等投资。CEO Chad Edwards 将其描述为"材料的搜索引擎"——生成式AI平台，可以发现**全新的材料**。

</div>

<div class="grid grid-cols-2 gap-4">

<div class="text-sm leading-relaxed">

**Chad Edwards 的核心论点**：

> "我们日常讨论的所有事情——对智能的追求、能源转型、气候危机——如果追根溯源，都是**材料科学问题**。一块半导体芯片包含约60种不同元素，是99.99%纯度的硅。如果我们能找到更好的方法发现新材料，我们就能制造更好的芯片，提高太阳能电池的效率，开发气候技术。"

</div>

<div class="text-sm leading-relaxed">

**意想不到的市场拉力**：

> "我们从未打算做半导体公司。我们建立的是一个水平平台，但半导体行业**把我们拽向了半导体方向**。因为AI对芯片的需求是更高的性能、更高的能效——而所有这些归根结底需要更好的材料。"

**资本用途**：
1. **人才**（AI/ML顶尖人才争夺战）
2. **算力**（与NVIDIA深度合作）
3. **实验数据生成**（全球实验室网络，物理实验验证是基础）

</div>

</div>

</div>

---
layout: two-cols
---

# 材料科学的"生物科技模式"

<div class="text-sm leading-relaxed">

**Cusp AI 独特的商业模式**：

Chad Edwards 花了两年时间，让每一个客户合同都包含**版税条款**。投资者最初说："算了吧，这不可能行得通——大企业不会给你付材料版税。"

> "我的工作有点像VC——我们有一个材料组合。有些材料是近期有高商业潜力的，有些是更长期的前沿押注。如果有一个平衡的组合，收入轨迹会非常稳定。"

**对标的商业模型**：生物科技公司从药物销售中获得版税分成的模式，被Cusp首次引入材料科学领域。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./materials-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Cusp AI 的"反深科技"商业策略

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3 text-sm leading-relaxed">

**从量子计算学到的教训**：

Chad Edwards 之前创办了一家量子计算公司——那是"预营收"最极端的版本。所以他在Cusp刻意走了相反的路线："从第一天起就极其商业化，所有工作都以付费客户为基础。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**持续被"抢先投资"**：

> "每次我都说'我们接下来6-12个月不会再融资了'，结果几个月后就被抢先接触（preempted），一轮融资又来了。所以我放弃了预测下一轮什么时候发生。"

</div>

</div>

<div class="text-sm leading-relaxed">

**Chad 对两种商业模式都持开放态度**：

- 可预测的月度SaaS订阅收入（像Chai Discovery的路线）→ 提供基础收入
- 项目制的版税分成（Cusp当前的主模式）→ 可能更"块状"但天花板更高
- 两者可以共存——Chad并不排除未来同时采用两种模式

**平台定位**：

Cusp 并非自己建实验室——而是利用全球现有实验室网络。这样做的好处是"更快起步"、利用实验室已有的领域专家知识，并且许多客户自己也拥有实验室。

</div>

</div>

---
layout: default
---

# Augustus：1.8亿美元打造现代AI清算银行

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-4 text-sm leading-relaxed">

**Augustus 完成 1.8亿美元 B 轮融资**，估值达**10亿美元**。Tiger Global 等参与投资。CEO Ferdinand Dabitz 将公司定位为"美元的现代化理银行"——用AI重建全球美元清算基础设施。

</div>

<div class="grid grid-cols-3 gap-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

### 🌍 美元化复兴

过去20年，全球代理银行（correspondent banks）数量持续下降。9/11后，为非美国金融机构提供美元清算被视为高风险、高成本的业务——但这一趋势正在逆转。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

### 🤖 AI银行

花旗银行有数万名分析师在"电汇室"中处理支付文件和交易对账。Augustus 的愿景是用AI自动化这些高度手工的流程——为顾客创造更好的体验和更优的经济效益。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

### 🏦 稀缺的银行牌照

Augustus 获得**美国国家银行条件性批准**——这是2010年以来的第8家。已在欧元清算中处理数十亿欧元，客户包括一些最大的金融科技公司和金融机构。

</div>

</div>

</div>

---
layout: default
---

# 美元作为"软实力工具"：Augustus的政策逻辑

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="text-sm leading-relaxed">

**Ferdinand Dabitz 对美元化的解读**：

> "美元化有助于降低通胀（增加美元需求），同时它也是不可思议的软实力工具。我们对俄罗斯做的第一件事就是切断SWIFT和美元清算——我们不需要派遣坦克和士兵，就能影响局势。"

**特朗普政府的"美元化"立场**（Ferdinand的观察）：

> "特朗普政府在稳定币上的所有工作，很大程度上都是由美元化命题驱动的。如果能更有效地向海外分发美元，这对美国是好事——它是软实力工具，增加美元需求，抗通胀。"

</div>

<div class="text-sm leading-relaxed">

**一个"规范性问题"而非事实问题**：

当TBPN主持人问"在去全球化和关税战的时代，国际社会不是应该远离美国吗？"，Ferdinand 的回答揭示了一个关键洞察：

> "这不是一个'正在发生什么'的经验问题，而是一个'我们希望发生什么'的规范性问题。人们开始意识到我们想生活在一个美元化的世界里——这在过去20年里从来不是理所当然的。"

**Augustus 作为"公私合营"**：

国家银行并非普通公司——它必须在监管框架内运行。Ferdinand 将 Augustus 定位为美元公共政策的执行工具，而非仅仅是一家科技公司。

</div>

</div>

---
layout: default
---

# 侧面观察：品牌、文化与危机

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 🥤 可口可乐换标

新logo采用衬线字体、锐利边缘、全出血设计——被评论为"看起来像万宝路"。标志性转折：极简主义退潮，"衬线回归"。

**深层逻辑**：万宝路已30年无法做广告，但品牌资产深厚到足以被可口可乐"借用"而不惹上官司。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 🎬 IMAX 危机

70mm IMAX 投影机在尔湾过热停机。更严重的问题：**IMAX已无法制造新的投影机**——没有完整的工程图纸，大多数设计工程师已退休或去世，零件供应链已枯竭。

**解决方案**：只能维护和保持现有设备尽可能久地运行。这被评论为"真正需要再工业化的项目"。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🏢 Berghain 公开财报

德国法律规定，即使是私人公司也必须公开财务数据。知名柏林夜店 Berghain：2024年净利润**140万欧元**，年租金41.4万欧元，355名员工。

**启示**：社交媒体上自称"赚大钱"的创业者无法在德国LARP——因为财务数据是公开的。这让欧洲创业者可以更透明地"复制成功模式"。

</div>

</div>

---
layout: default
---

# 快讯：Google Gemini 3.6 与 Ramp 模型路由

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

**Google Gemini 3.6 Flash 发布**

Logan Kilpatrick 宣布：更高智能、更高token效率、更低价格——直接基于开发者反馈设计。

**更大的消息**：Google 已启动 **Gemini 4 的最雄心勃勃的预训练运行**。"对进展感到兴奋。"

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**Ramp 推出模型路由**

Braxton 评价为"神级产品扩展"：市场已厌倦token最大化、模型激增和主权问题。Ramp 的承诺一直是"节省时间和金钱"——CFO们越来越烦恼于"用最昂贵的模型回复天气查询"，这类支出也许该附上一份费用报告。

产品向非Ramp客户开放，可作为独立工具使用。

</div>

</div>

<div class="text-sm leading-relaxed">

**LLM隐写术：AI时代的秘密通信**

Reddit 上出现了一个有趣的工具演示：用LLM将加密信息嵌入看似普通的短信。加密文本先被转化为比特流，然后使用开源LLM，根据比特值选择不同的token来"水化"出表面正常的文本。

例如："我去市中心喝咖啡了，还挺好喝的。在想晚饭做什么，要不要来帮我一起做饭？"——实际上编码的意思是"他们上周抓到了Matthew，因为他发表了反对言论。"

</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"开放权重模型主导世界的一个可能结果是——完全AI共产主义。这正是中国提出的方案：AI作为国家提供的数字公共基础设施，而非市场产品。"
<div class="text-xs opacity-60 mt-1 not-italic">— Dean Ball, OpenAI 战略未来主管</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"美国政府不欠任何大型实验室一个商业模式。如果卖token的经济效益因蒸馏、廉价克隆和中国AI魔法而消失——美国企业和消费者会好好的。"
<div class="text-xs opacity-60 mt-1 not-italic">— Nick Carter（TBPN 主持援引）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"如果 Anthropic 把模型权重放到 Hugging Face 上（像中国人那样），我乐意使用。美国科技公司是忘了初心的租金攫取机器。"
<div class="text-xs opacity-60 mt-1 not-italic">— George Hotz (tinygrad)</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Claude 很棒。但如果我想和 Claude 聊天，我直接去聊就好了。我读你的内容，是因为我想要更多——我想要一个有血有肉的人的观点。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Best, Substack CEO</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"水帖不是用AI辅助的东西——水帖是'没有人相信'的东西，是你根本不在乎的东西。如果你只是说'帮我写一千条爆款LinkedIn帖子，别出错'——那就是水帖。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chris Best, Substack CEO</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多值得记住的观点：</div>

<div class="space-y-3 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"你的手机越聪明，你实际上越笨。工具应该像锤子：拿来用，用完放回去。你不会花五个小时刷锤子，好让锤子公司赚钱。"
<div class="text-xs opacity-60 mt-1 not-italic">— Kaiwei Tang, Light Phone CEO</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"他们的真正生意不是加密货币、AI或太阳能板——而是'早入场'。"
<div class="text-xs opacity-60 mt-1 not-italic">— Aporia 趋势分析（Steven Schwartz 引用）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"任何时候往自己身体里注射东西，你都应该知道那是什么。关于科技圈流行使用肽类药物的传闻——效果可能更多是安慰剂。我绝不会自己用，也不会让我的朋友和家人用。"
<div class="text-xs opacity-60 mt-1 not-italic">— Zavain Dar, Dimension Capital 创始合伙人</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"一块半导体芯片包含约60种不同元素，是99.99%纯度的硅。如果我们能找到更好的方法发现新材料，就能制造更好的芯片——所有的技术进步归根结底都是材料科学问题。"
<div class="text-xs opacity-60 mt-1 not-italic">— Chad Edwards, Cusp AI CEO</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
"美元是不可思议的软实力工具。我们对俄罗斯做的第一件事就是切断SWIFT——我们不需要派遣坦克和士兵。"
<div class="text-xs opacity-60 mt-1 not-italic">— Ferdinand Dabitz, Augustus CEO</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="text-sm opacity-60 mt-4">
TBPN · 2026年7月21日 · 2小时34分钟<br/>
从中国AI模型到极简手机，从材料科学到美元清算——<br/>
科技创投最密集的3小时现场对话
</div>

<div class="mt-8 text-xs opacity-40">
← 声笺 Resonote 返回主页
</div>
