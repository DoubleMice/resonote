---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'The AI Cold War, Odyssey Rips, Tyler Cowen Joins | Danny Yeung, Connor Love, Kahlil Lalji, Tarek Mansour, Tony Zhao'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 冷战、奥德赛影评、Tyler Cowen 圆桌

## Kimi K3 开源冲击 · 机器人洗衣 · GPU 远期曲线 · 代理人支付

<div class="text-sm opacity-60 mt-8">
TBPN 圆桌 · 2026 年 7 月 · 2 小时 41 分钟
</div>

<div class="text-xs opacity-50 mt-2">
Danny Yeung · Connor Love · Kahlil Lalji · Tarek Mansour · Tony Zhao · Tyler Cowen
</div>

---

# 为什么这期值得看

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>AI 冷战升级</strong><br>
Kimi K3 开源模型引爆中美 AI 竞争新阶段：是正当追赶还是倾销战争？
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Tyler Cowen 圆桌</strong><br>
经济学家谈开源不可禁、AI Maniacs 崛起、消极情绪传染与亿万富翁税
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>机器人突破</strong><br>
Sunday Robotics 洗衣折叠 99.1% 成功率，one-shot learning 能力从规模化预训练中涌现
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>GPU 远期曲线</strong><br>
Kalshi 构建计算力期货市场，计算力可能成为地球上最大的商品
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>代理人支付</strong><br>
Natural 获 $3000 万 A 轮融资，为 AI 代理搭建支付基础设施——12 个月内定局
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>美国动力主义</strong><br>
a16z 加码 $12 亿，Connor Love 加盟：国防制造硬件与 AI 的碰撞才刚刚开始
</div>

</div>

---

# Kimi K3：AI 冷战的新战线

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Moonshot 的 Kimi K3 于 7 月 19 日亮相**，在多项基准测试中追平甚至超越美国前沿模型。这是一个拥有 **超过 2.8 万亿参数** 的巨型开源模型，使用了名为 Kimi Delta Attention (KDA) 的线性注意力机制。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**关键数据**：
- 输入价格 $3/百万 token，输出 $15/百万 token——比前沿闭源模型便宜约 30%
- 在 Front End Arena 基准上一跃领先所有模型
- 上线 48 小时内需求超预期，Kimi 暂停新用户订阅

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>核心争议</strong>：这次发布是否推翻了"开源落后论"——即美国政府此前认为闭源模型正加速领先、开源模型逐渐掉队的判断？
</div>

</div>

---

# 两种叙事：天才还是战争？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 🟢 光明叙事

一群优秀 AI 研究员筹集了足够算力，发布了优秀模型。开源是吸引人才、获取关注、最终推动 API 商业化的合理策略——就像 Red Hat Linux 被 IBM 以 $300 亿收购。开源不等于不赚钱。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

### 🔴 黑暗叙事

算力通过芯片管制漏洞走私进入中国。数据从美国前沿实验室的 API 中经由壳公司提取。这是一场蒸馏攻击。开源策略是故意摧毁美国公司的地缘政治武器——AI 冷战已经打响。

</div>

</div>

<div class="mt-6 p-3 text-xs opacity-70 text-center">
Semi Analysis 分析：Kimi K3 的 2.8 万亿参数需要 NVL72 这种大规模 scale-up 集群来存储权重，对 NVIDIA 反而是利好。
</div>

---

layout: two-cols
---

# Kimi K3 的两面：竞争还是战争？

<div class="text-sm leading-relaxed space-y-3">

- **正当竞争论**：一群顶尖 AI 研究员，合法获取算力，以技术突破追赶前沿——就像中国在其他领域的追赶一样，是正常的全球化竞争
- **地缘战争论**：算力走私 + 数据渗出 + 蒸馏攻击——这不仅是竞争，而是精心策划的产业摧毁计划
- **现实**：证据尚不充分，两种说法可能各有部分正确。需要更多时间来判断哪种叙事更接近真相

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-narratives.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开源 AI：朋克精神还是地缘武器？

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

### 文化层面：开源 = 解放

> "There really is no debating that open source is just cool. It just feels punk rock. It feels like Napster."

开源 AI 代表了信息自由的互联网精神。就像每户人家曾经拥有全套《大英百科全书》一样，未来每户人家可能拥有自己的"天才机器"。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">

### 地缘层面：倾销还是竞争？

一方认为中国在 AI 领域实施**倾销策略**——补贴自家产业以低于成本的价格消灭竞争对手。另一方反驳：如果倾销导致垄断高价，反而会制造市场机会让新进入者竞争。真正的问题是：如果美国失去整个 AI 人才梯队和工业基础，重建需要一代人的时间。

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
美国政府的应对选择：直接禁令 → 采购规则 → 实体清单威胁 → 软性"爱国营销"。最可能的是走软性劝阻路线。
</div>

---

# Tyler Cowen：开源无法被禁止

<div class="mt-6 space-y-4">

<div class="p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">
"Open source is coming and is here whether we like it or not. The attempt to outlaw it or ban it or use sanctions against it is going to fail miserably."
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

**Tyler Cowen 的三个论点**：

1. **技术上不可行**：当模型可以跑在端侧设备上时（很快就能做到），禁令将毫无意义
2. **供应链已深度绑定**：大量美国企业已经在使用中国开源模型，包括 Thinking Machines 用中国开源模型作为训练流程中的一环
3. **开源其实是闭源的补充**：当人们担心美国闭源模型可以被撤回时，开源的存在让他们更愿意部分锁定在美国系统上

</div>

</div>

---

# 倾销辩论：一个贸易战的类比

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>倾销论</strong>（Growing Daniel）：中国在每个进入的行业都这样做——补贴自家产业，以亏损价消灭本地竞争，控制市场后提价。在钢铁和汽车行业已经发生过，在 AI 行业将是致命的。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>反倾销论</strong>（Growing Daniel 也被引用）：倾销是寻求保护的国内企业最常见的借口。即使没有政府补贴，BYD 也做出了好产品——这是公平竞争。
</div>

</div>

<div class="space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>无倾销陷阱论</strong>（Augustine LeBron）：如果中国以亏损价补贴开源，消灭 OpenAI 和 Anthropic，然后开始收取垄断价格——垄断价格时代会很短，因为会立刻有新进入者。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>贸易教训</strong>：Tyler Cowen 认为欧洲若对中国发动全面贸易战将输掉。更高的关税只会推迟结构调整，并且会通过抬高上游投入成本打击所有产业。
</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">
<strong>现实参照</strong>：欧洲汽车业的真正打击不是中国车卖进欧洲，而是中国消费者自己开始买中国车。保时捷卡宴在中国曾经热销，现在本地替代品正在占领市场。如果中国模型在中国本土被广泛采用，美国前沿实验室可能面临同样的"市场收缩"问题。
</div>

---

# AI Maniacs：未来属于年轻疯子

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Tyler Cowen 提出的概念：**AI Maniacs**——那些把所有业余时间用来掌握 AI 的年轻人。他们自己训练模型、创办公司，比"老师"懂得多得多。他说自己当天早晨刚和两个 AI Maniacs 交流过：一个 13 岁，来自阿布扎比；一个 17 岁，来自芬兰。

</div>

<div class="p-6 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-20">
"They spend their spare time mastering AI. They know way more than their so called teachers. They're starting companies or building models. They realize this is the future. You're going to have a large number of companies with quite a very small number of employees but pretty high revenue."
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

**AI Maniacs 将进入所有行业**：医学、法律、商业咨询、银行业——任何允许他们竞争的领域。国家的未来不在于产业政策，而在于国家能否"鼓励自己的 AI Maniacs"：允许年轻人迅速上升、不被轻视、能买到电脑、能获得资助。

</div>

</div>

---

# Tyler Cowen 的投资逻辑：越年轻越古怪

<div class="mt-6 space-y-4">

<div class="p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">
"With AI maniacs, I'm going younger and weirder. And I've also noticed Europe is doing pretty well on the AI maniacs metric."
</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-lg font-bold text-blue-600">年轻</div>
<div class="text-xs opacity-70 mt-1">AI Maniacs 是年轻人，他们更具玩心、更敢冒险。历史上伟大的新事物往往来自这样的群体，而不是按部就班的资深人士。</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-lg font-bold text-green-600">古怪</div>
<div class="text-xs opacity-70 mt-1">不按常理出牌的人最有可能发现新大陆。Tyler 寻找的是那些做非常规事情的人——他们不会等"最佳实践"。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-lg font-bold text-yellow-600">欧洲惊喜</div>
<div class="text-xs opacity-70 mt-1">Tyler 发现欧洲年轻人在 AI 代理人领域表现出色。ChatBot 没有吸引他们（太像文化产品），但 Agents 给了他们新的空间。</div>
</div>

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs leading-relaxed">
<strong>为什么年轻人更适合 AI？</strong> 他们更有"玩心"（playful），敢冒险。在群体层面他们可能犯更多错，但在发现真正重要新事物方面，年轻人会赢。就像 Tyler 所说，大部分人不应该成为企业家——但少数 AI Maniacs 将引发"大规模的地位重新分配"，这会对政治造成巨大冲击。
</div>

</div>

---

layout: two-cols
---

# AI 冷战的技术栈：每一层的博弈

<div class="text-sm leading-relaxed space-y-3">

- **应用层**：开源降低创业门槛，任何人都能构建 AI 应用——美国在创业生态上的优势依然是护城河
- **模型层**：Kimi K3 证明开源正在逼近闭源前沿——差距正在缩小，但尚未消失
- **硬件层**：NVIDIA GPU + 芯片管制是美国的物理杠杆——但走私和转售让管制效果打折扣
- **能源/数据中心层**：Tyler Cowen 指出数据中心为当地贡献了一半税收——建设数据中心对美国是好事

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ai-cold-war-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Vibecession：为什么经济好，情绪差？

<div class="mt-4 grid grid-cols-2 gap-4">

<div class="text-sm leading-relaxed space-y-3">

<div class="p-6 text-lg italic border-l-4 border-red-500 bg-red-50 bg-opacity-20">
"I call it negative emotional contagion. And you see it in many other eras of world history. It feeds on itself."
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**Tyler Cowen 的诊断**：
- 人们对国家、社会制度普遍持负面态度（军队除外）
- 信任度极低——COVID 和大金融危机期间被反复告知"一切没事"，但事实并非如此
- 财富积累、就业、股市、实际工资等指标"还好到不错"，并没有很糟糕

</div>

</div>

<div class="text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">
<strong>18-24 岁失业率</strong>已经回到大语言模型出现前的水平——AI 并没有摧毁年轻人就业。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>行业性转移</strong>正在进行：受教育程度高的人群在抱怨，因为新创造的工作不是他们想要或擅长的。但整体上，很多人其实做得更好。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-400">
<strong>一个反直觉的解读</strong>：如果真发生一次短暂衰退或市场回调，反而可能是一个"看涨信号"。人们会觉得"我一直觉得情况不好，现在终于对了，可以重新投入了"。但 Tyler 也警告：如果真发生糟糕的事，每个人都会说"我早告诉你了"，然后陷入更深的泥潭。
</div>

</div>

</div>

---

# 亿万富翁、公众观感与 Jonathan Swift

<div class="mt-4 space-y-4">

<div class="grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**加利福尼亚的亿万富翁税**：一项花费 $8000 万的游说活动正在试图阻止。Tyler Cowen 认为如果通过，将对加州造成巨大损害——很多民主党政治人物也不支持。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**Tyler 的建议**：不要道歉，继续做。"你也许会说有些亿万富翁活该被批评——但所有人都一样。成功就会被恨。"

</div>

</div>

<div class="p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20 flex items-center">
"Censure is the tax a man pays to the public for the privilege of being eminent."
<div class="text-sm opacity-60 mt-2 not-italic text-right">— Jonathan Swift</div>
</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-xs leading-relaxed mt-4">

**修建纪念碑有用吗？** 奥巴马刚建了一座纪念碑——有人因此更爱他吗？Tyler 认为，尽管他支持亿万富翁支持艺术、音乐和图书馆，但这不是让他们被爱戴的方法。Jonathan Swift 在 18 世纪就已经说清楚了：成功本身就会招致批评。

</div>

</div>

---

# Connor Love：美国动力主义的下一步

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Connor Love 从 Lightspeed 加盟 **Andreessen Horowitz 的美国动力主义（American Dynamism）团队**，担任 GP。团队拥有 **$12 亿新资本**，由四位 GP 协同运作。Katherine Boyle 继续留任。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-lg font-bold text-green-600">国防</div>
<div class="text-xs opacity-70 mt-1">从 Castelion 到 Anduril，新国防公司的订单量正以数量级速度增长。联邦政府正在"认真出手"。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-lg font-bold text-yellow-600">太空</div>
<div class="text-xs opacity-70 mt-1">K2 Space 等公司推动卫星发射量从千级向百万级迈进。WWI 飞机数量 vs 现代飞机：同样曲线。</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-lg font-bold text-purple-600">制造</div>
<div class="text-xs opacity-70 mt-1">Hadrian、Amkai 等解决制造业复兴。Connor："这个市场远未被定义，还有万亿级空间。"</div>
</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs leading-relaxed">

<strong>关键融资趋势</strong>：联邦政府通过战略资本办公室（OSC）和国防部新成立的经济开发单元（EDU），为国防供应链公司提供接近免息的债务融资。Connor 认为债务不是解决方案本身——公司必须有真正的技术提升——但资本市场的丰富程度是空前的。

</div>

</div>

---

# 无人机：一战时代的自主战争

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

**Connor Love 的类比**：今天的无人机战争处于"第一次世界大战水平"——就像一战期间的有人驾驶飞机数量与今天卫星数量一样，都处在指数增长的起点。国防部（DoD）目前拥有数千到数万架无人机，但正在**订购数百万架**。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**这不是一次性的问题**：无人机是可消耗的——造了一百万架，敌人会适应，然后你需要造新一代具有电子战抗性、更远航程、更强能力的产品。这是**持续数十年**的猫鼠游戏。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">
<strong>AI 与硬件的碰撞</strong>：Connor 指出 AI 正在进入国防硬件领域——但"把一个完全自主持枪机器人交给军队"在集成、政策和监管层面还有很多障碍。不会一夜之间发生，但一定会发生。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>真正的问题</strong>：不是预算够不够、市场大不大，而是这些公司能否真正交付大规模解决方案。"我们需要 40 座特斯拉工厂。我们需要建造数千台这样的设备。如果造不出真正的硬东西，不会有持久价值。"
</div>

</div>

</div>

---

# iMATE：史上增长最快的保健品

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 关键数字

- 与 **David Beckham** 联合创立，19 个月前起步
- **11 个月达到 $1 亿 ARR**（行业平均 3-5 年）
- **18 个月达到 $2 亿 ARR**
- 今年将超过 **$2 亿**（第二年全运营）
- **已交付 5200 万份产品**

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 全球策略

从第一天开始就是全球化公司——首日即向 **31 个国家**发货。现在覆盖 **43 个国家**。前五大市场：美国、加拿大、英国、澳大利亚、新加坡。每日交付 **20 万份**产品。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### General Catalyst $10 亿承诺

Danny Yeung 的母公司 Prenetics（纳斯达克代码 PRE）获得了 General Catalyst 的 **$10 亿增长承诺**，来自其 CBF（Customer Value Fund）基金。该基金此前曾与 Lemonade 和 Grammarly 合作。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 商业模式

GC 为每 $1 营销支出提供 $0.70 资金，基于客户留存数据承保未来收入风险。还款周期约 2-3 个月，利率约 **3.5%**。前提是拥有优秀的留存率队列数据。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 市场定价错配

尽管公司有 **$1.4 亿现金**，预计 $2 亿+ 营收，但 Prenetics 市值仅 $3.54 亿——Danny 认为私人市场与公开市场之间存在巨大定价脱节。

</div>

</div>

</div>

---

# Natural：AI 代理的支付基础设施

<div class="mt-4 space-y-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Kahlil Lalji**，Natural CEO 兼联合创始人，宣布获得由 Khosla Ventures 领投的 **$3000 万 A 轮融资**。Natural 为 AI 代理构建支付基础设施——代理可以存储余额、向其他代理或商家付款或请款、进行内外部账户转账。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="p-6 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-20">
"Agents execute a majority of global payment volume over the next decade."
</div>

<div class="p-6 text-lg italic border-l-4 border-red-400 bg-red-50 bg-opacity-20">
"That world is monopolistic or duopolistic in nature because payments are a highly network effects driven business. And that world is determined in the next, like, twelve months."
</div>

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs leading-relaxed">

<strong>为什么 Stripe 不够？</strong> Natural 的定位是同时构建"银行 + PSP + 网络"——相当于 JPMorgan + Stripe + Visa 的总和。代理人需要的是一个统一的架构，内置代理可能需要的所有支付原语，而不是在现有支付系统上拼凑。当前可以用 Natural 实现大部分代理支付场景，Q3 末将补全剩余能力。

</div>

</div>

---

# Kalshi：世界杯霸榜与 GPU 远期曲线

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">

### 世界杯成绩

在世界杯期间，Kalshi 在 **品牌搜索量** 上超越了 Coca-Cola、Adidas 等巨头——同时也在搜索热度上超越了 ChatGPT 和 Instagram。大多数用户并非交易者，而是用预测市场作为一种**理解事件动态**的机制。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 策略：极度灵活

没有预先制定的策略——一个小团队，从想法到执行在 **48 小时内**完成。一切根据事件进程动态调整。

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mb-3">

### GPU 远期曲线

Kalshi 正在构建**计算力期货市场**——列出从当前到未来数月的 GPU 价格预测市场，使用 Orin 公司的交易价格指数作为定价基准。这是所有传统大宗商品市场都有的标准化过程。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 谁需要这个？

- **自然多头**（GPU 持有者）：需要做空对冲
- **自然空头**（算力消费者）：需要锁定成本
- **投机者与套利者**：提供流动性（通常占市场 95%）

</div>

</div>

</div>

---

# 计算力：地球上最大的商品？

<div class="mt-4 space-y-3">

<div class="p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">
"Compute as a commodity is gonna probably be the largest commodity on the planet, and so the derivative market for it will probably be the largest derivative market on the planet, outpacing treasury futures."
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xl font-bold text-green-600">$1 万亿</div>
<div class="text-xs opacity-70 mt-1">当前全球计算力支出</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xl font-bold text-yellow-600">10 倍</div>
<div class="text-xs opacity-70 mt-1">2030 年预期增长倍数</div>
</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-xl font-bold text-red-600">10-15 倍</div>
<div class="text-xs opacity-70 mt-1">衍生品市场对现货市场的典型倍数</div>
</div>

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs leading-relaxed mt-4">

<strong>历史规律</strong>：每次在一个现货市场上叠加衍生品市场，衍生品市场通常达到现货市场的 **10-15 倍**规模。如果到 2030 年计算力支出达到 $10 万亿，衍生品市场可能是 $100 万亿级别——超过美国国债期货。

</div>

</div>

---

layout: two-cols
---

# GPU 远期曲线：从现货到衍生品

<div class="text-sm leading-relaxed space-y-3">

- **当前现货支出 ≈ $1 万亿/年**，预计到 2030 年增长至 $10 万亿
- 衍生品市场通常达到现货的 **10-15 倍**——计算力衍生品可达 $100 万亿级别
- Kalshi 正在构建 GPU 远期曲线，为算力消费者和生产者提供价格发现与风险对冲
- 当前曲线基本平坦——市场认为 GPU 算力供需节奏将保持稳定

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./gpu-forward-curve.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 预测市场 vs 情绪化叙事

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">
"The extreme makes for a good tweet, not a good trade."
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
Tarek 认为预测市场的核心价值是**去极化**。"你看 X 上的热帖，觉得 AI 要爆发或崩溃了。但你去看 GPU 远期曲线——基本是平的。市场告诉你，没那么夸张。"
</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>$200 万操纵案例</strong>：有人试图操纵 Spencer Pratt 的加州选举市场，投入 $200 万拉升价格。价格变动只持续了 **9 秒**——套利者立刻把价格修正回来。如果同一个人用这 $200 万去委托偏倚民调或买广告，效果会持久得多。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>皮肤在游戏中</strong>：预测市场之所以准确，是因为它创造了对正确答案的强激励。错了就亏钱，对了就赚钱——这与社交媒体上零成本的偏激叙事形成鲜明对比。
</div>

</div>

</div>

---

# 洗衣超智能：99.1% 的零样本成功率

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Tony Zhao**，Sunday Robotics 创始人兼 CEO，宣布了机器人洗衣折叠的重大突破：在 **785 次自主尝试**中，折叠成功率达到了 **99.1%**。这是首次同时实现**泛化性**（generalizability）和**可靠性**（reliability）——即在未见过的家庭、未见过的衣物上，模型的表现与训练环境一致。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="text-xl font-bold text-green-600">99.1%</div>
<div class="text-xs opacity-70 mt-1">折叠成功率（785 次测试）</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-xl font-bold text-yellow-600">零样本</div>
<div class="text-xs opacity-70 mt-1">模型在未见过的环境中部署</div>
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="text-xl font-bold text-purple-600">多种衣物</div>
<div class="text-xs opacity-70 mt-1">处理高度多样化的衣物类型</div>
</div>

</div>

</div>

---

# One-Shot Learning：从规模化预训练中涌现

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<div class="p-6 text-lg italic border-l-4 border-blue-500 bg-blue-50 bg-opacity-20">
"When we scale up pretraining, you can do one shot learning with these models. The model can extrapolate that to an unseen shirt on an unseen bed. It actually understands it."
</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

**什么是 One-Shot Learning？** 给机器人演示一次"我希望你这样叠衬衫"，它就能把这个新叠法泛化到一件完全没见过的衬衫、一个完全没见过的床面上。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

**为什么这是"涌现"？** One-shot learning 的能力不是被专门设计的——它是因为预训练数据和计算量被**规模化扩展**后自然出现的。这和语言模型中的 emergent abilities 是一个原理。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

**个性化前景**：今年底或明年初，用户可能可以通过一段视频、一张照片或一次演示来定制机器人的行为——"我就是希望我的衣物叠成这个样子"。

</div>

</div>

</div>

---

layout: two-cols
---

# 机器人能力的三个阶段

<div class="text-sm leading-relaxed space-y-3">

- **Level 1 — 单一环境**：在一个房间叠一种衬衫达到 99%——这已经有很多研究成果，但范围太窄
- **Level 2 — 泛化部署**：在任何房间叠任何衣物保持 99.1%——Sunday Robotics 当前状态，即将商用
- **Level 3 — 通用智能**：One-shot learning → 个性化 → 实体 AGI。用户通过一段视频就能定制机器人的行为

Tony: "99% 的数值本身没有意义——关键要看范围有多广、适应预算有多大。"

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./robotics-capability.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 实体 AGI：为什么洗衣是"最终 Boss"

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么从洗衣开始？

Tony 将洗衣称为一种"最终 Boss"——它难度极高（衣物柔软、形状各不相同、需要精细操作），但**容错率也高**。如果机器人弄乱了一件衬衫，这只是一件乱了的衬衫——它本来就是乱的。而烹饪则不同：打碎一个瓶子或撒一罐橄榄油需要清理。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 最小可行任务集

让机器人"值得存在于家庭中"所需的任务其实很少——洗衣服、装洗碗机、简单清洁。但一旦攻克这些，"千种技能"可以并行训练，因为洗衣任务的训练配方本身是高度通用的。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### "Research-Market Fit"

Tony 提出的概念：家务机器人的研究目标与产品目标实际上是高度对齐的。推动产品进步的研究同时也在推动通用智能研究——两者之间不存在冲突。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 99% 的正确含义

Tony 澄清了一个行业混淆点：99% 成功率本身没有意义——关键在于**范围**（需要处理的长尾情况有多长）和**适应预算**（是否允许在测试集上训练）。做某一件衬衫在一个房间里的 99% 和在任何房间叠任何衬衫的 99%，是完全不同的两个挑战。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 硬件无关的模型

Sunday Robotics 的训练数据集和控制模型与具体硬件形态无关——同一个模型可以控制当前的 Memo 机器人，也可能控制未来的"有腿版"Memo。

</div>

</div>

</div>

---

# 《奥德赛》：导演成了新的 IP

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 票房数据

- 首周末全球票房 **$2.64 亿**
- 北美开画 **$1.24 亿**——2026 年第三高
- 制作预算 $2.5 亿 + 全球宣发 $1.25 亿
- **53% 的观众表示导演是他们来看的首要原因**

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">

**华尔街日报的结论**：好莱坞顶级导演已取代 IP 成为新的"特许经营"。制片厂从痴迷于续集管理转向疯狂签约最有前途的电影人。

</div>

</div>

<div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>行业变革</strong>：漫威、速度与激情、变形金刚等系列票房下滑。Z 世代尤其对老化的 IP 和特效驱动的电影持怀疑态度——他们更追随有独特视角和真实表达的电影人。例如 Curry Barker（《Backrooms》）和 Ryan Coogler。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 mt-2">
<strong>Tyler Cowen 的评论</strong>：相对其他电影，"它梦幻而印象派"。但他对对话质量、选角和 Matt Damon 饰演奥德修斯的适配度感到失望。同时他承认：古典学者们"很高兴有人关注他们"——不同译本的《奥德赛》都上了畅销榜。
</div>

</div>

</div>

---

# AI 正在改变好莱坞

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**Netflix 披露**：2026 年已有约 **300 部作品**在制作中使用生成式 AI。最大应用集中在后期制作（post-production）。联合 CEO Ted Sarandos 表示，一部关于美国革命的纪录系列片使用了 **17 分钟 AI 增强画面**——用传统方法在财务上不可行。

</div>

<div class="grid grid-cols-2 gap-4 mt-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Netflix 的立场

AI 不是用来替代编剧、导演、演员的——而是电影制作软件的"下一代进化"，让制作团队可以创造以前"不可能或过于昂贵"的镜头。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 争议与社区标注

一位设计师用 Midjourney 制作了《奥德赛》主题海报，声称"去看了电影然后做了这些海报"，立刻被社区标注标记为 AI 生成。AI 在创意领域的边界仍在激烈争议中。

</div>

</div>

</div>

---

# Jacobian 猜想：AI 攻克的又一数学堡垒

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 发生了什么？

**Jacobian 猜想**——一个在代数几何领域存续了多年的著名数学问题——被找到**反例**。这意味着这个猜想被**证伪**了，而不是被证实了。一位在 Anthropic 工作的 AI 研究员使用 **Fable** 帮助完成了这一工作。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 一个完美的闭环

这位数学家在这个领域已经深耕了大约十年。Tarek 评论说："他们刚刚创造了 100 万个 Jacobian 猜想。你根本不知道接下来会发生什么。"

</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 flex flex-col justify-center">

### 对公众意味着什么？

对于那些仍然在问"我真的需要这些数据中心吗？我不喜欢 AI"的人——这种数学突破应该改变他们的看法。主持人开玩笑说应该把这件事放到广告牌上，放到 SagerBet 上——让怀疑论者看到 AI 的实质性贡献。

**但这也是一种讽刺**：很多人对 AI 的态度是"它还没做出什么了不起的事"——然后 AI 证伪了一个几十年的数学猜想，而大多数人对此没有反应。

</div>

</div>

---

# DeepSeek 创始人：说"不"的人

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

**梁文锋**——DeepSeek 的创始人——在大学期间拒绝了 DJI 创始人汪滔的联合创始人邀约。汪滔当时正在深圳的一个小工作室里研发飞行设备，后来创办了估值数百亿美元的无人机公司 DJI。

</div>

<div class="p-6 text-lg italic border-l-4 border-yellow-500 bg-yellow-50 bg-opacity-20">
"He turnt it down. The certainty was not performative. It was the kind that makes a man pass on a lottery ticket because he has already decided where he is going."
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs leading-relaxed">

梁文锋在 2008 年攻读研究生期间就坚信 AI 将改变世界——当时这还是一个被大多数人轻视的信念。他选择了"让金融市场变得高效"的道路，后来创办了 DeepSeek，最终改变了全球 AI 格局。

</div>

</div>

---

# Big Boogie 与 $500 万奖学金：数学上可能吗？

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### "Turn It Down" Meme

说唱歌手 Big Boogie 成为网络热梗的中心：据说他**拒绝了一所大学提供的 $500 万奖学金去学牙医同时还打鼓**。这个梗的幽默源于它听起来完全不可能——但主持人做了数学验算。

</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>数学上可行</strong>：需要同时满足以下条件——
- 10 年制颅面重建手术牙科项目（DDS + MD + 专科培训）
- 7 个未成年子女 + 2 个需照护成人亲属 + 1 位老年家属
- 轮椅无障碍住宿及学习设施
- 在瑞士、瑞典、日本的海外临床进修
- 在 Jacksonville University 的多个音乐团体中担任 percussionist

总费用：约 **$500 万**。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>他还是一样拒绝了</strong>——但主持人认为，Big Boogie 应该用音乐收入反过来在 Jacksonville 设立一个"Turn It Down 奖学金"。让这个梗完成一个完美的循环。
</div>

</div>

</div>

---

# 自动驾驶 vs 诉讼律师：安全的敌人

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="space-y-3">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">
<strong>令人震惊的发现</strong>：美国的诉讼律师正在**游说反对自动驾驶汽车**——因为自动驾驶太安全了。他们需要车祸造成的伤亡作为诉讼案源。美国司法协会（AAJ）近十年来一直是自动驾驶立法的主要反对者。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>Tyler Cowen 意见两极</strong>：Morgan & Morgan 的创始人靠车祸诉讼成了亿万富翁。还有一个人只做案源引流，不做实际诉讼，年收入 $3000 万。这是一门巨大的生意——而它的利润依赖于事故发生。
</div>

</div>

<div class="space-y-3">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>一个更复杂的解读</strong>：也许诉讼律师游说的真实目标是确保汽车制造商在法律上仍需承担责任——这样万一出事，仍然有人可以被起诉。这是一种更微妙（尽管可能仍然自私）的立场。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>Alex Tabarrok</strong> 在 Marginal Revolution 上对此发表了愤怒的评论。Nick Carter 写道："My jaw dropped reading this." 他们明确站在了"可预防死亡"的一边。
</div>

</div>

</div>

---

# 五个杯咖啡：美国心脏协会说没问题

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600">5 杯</div>
<div class="text-xs opacity-70 mt-1">每日安全上限<br>（约 500mg 咖啡因）</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600">40 杯</div>
<div class="text-xs opacity-70 mt-1">伏尔泰每日饮用量<br>（活得很好）</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600">0 杯</div>
<div class="text-xs opacity-70 mt-1">Tyler Cowen 一生仅喝过两次<br>（都在埃塞俄比亚乡间）</div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>华尔街日报报道</strong>：咖啡的安全性和健康益处证据持续增长——"对咖啡的好处甚至可能有益心脏健康"。"一开始总让人觉得这是一个浮士德式的交易——短期有效但长期会付出代价——但这次不是。"
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>咖啡因药片的经济效率悖论</strong>：咖啡因药片每杯等效只要 1 美分——但几乎零采用率。人们就是爱咖啡的口感、乐趣和仪式感。"这是简单的快乐"，尽管一杯要几美元。
</div>

</div>

---

# AI 与宗教：LLM 将创造新的教派

<div class="mt-4 space-y-3">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">

Tyler Cowen 预测 AI 在宗教领域的影响将是**教派化（sect-like）**而非创造新的大宗教。人们可以用 AI 代理在"不到一天"内编写自己版本的印度教典籍、什叶派伊斯兰教义，或者创造全新的宗教——带有仪式、圣书和实践指南。

</div>

<div class="p-6 text-lg italic border-l-4 border-purple-500 bg-purple-50 bg-opacity-20">
"Most won't catch on, but a few will. If half of 1% of the population does this, over time the whole religious landscape looks quite different. I think it will be more diverse and feel weirder and be less centralized in religious authorities."
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>历史先例</strong>：历史上曾有过"不同的摩门教版本"大量涌现的时期——有些至今仍然存在。LLM 将极大地降低这种"宗教创业"的门槛。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>Amish 反例</strong>：Amish 的成功依赖于外部社会的交叉补贴——如果美国 1/3 人口是 Amish，他们的体系将无法维持。他们的生活方式之所以可能，正是因为它规模小且紧密团结。
</div>

</div>

</div>

---

# 赌博：一个没有解决方案的问题

<div class="mt-4 space-y-3 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-400">

**Tyler Cowen 的判断**："赌博已经太过庞大了，我不知道怎么收回来。这是一个问题。" 但他也不会按下"禁止"按钮——历史已经证明禁令无效。他更寄望于社会规范的变化。"这是你不应该 one-shot 的东西。"

</div>

<div class="grid grid-cols-2 gap-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>比对烟草</strong>：禁烟运动之所以成功，是因为不吸烟的人讨厌别人在飞机上、电影院里点烟——这直接影响了他们的体验。但赌博没有这种"二手效应"——你甚至不知道旁边座位的人在手机上赌博。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>广告泛滥</strong>：在最近的 UFC 赛事中，几乎所有广告都是赌博广告。限制赌博广告是可行的（参照烟草广告限制），但在联邦、州和地方层面需要协调行动。问题在于赌博的负面社会影响尚未被精炼成一句响亮的口号——不像"吸烟致命"。
</div>

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

<strong>一个有趣的数据</strong>：即便是输了很多钱的赌徒，似乎也不恨他们的博彩公司或 APP。他们更倾向于去网络暴力那个踢丢关键球的球员——而不是去恨 DraftKings 的管理层。

</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期圆桌讨论中最值得记住的几句话：</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"Open source is coming and is here whether we like it or not. The attempt to outlaw it or ban it is going to fail miserably."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Cowen，论 AI 开源</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"With AI maniacs, I'm going younger and weirder."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Cowen，论 AI 投资</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"I call it negative emotional contagion. It feeds on itself."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Cowen，论 Vibecession</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Censure is the tax a man pays to the public for the privilege of being eminent."
<div class="text-xs opacity-60 mt-1 not-italic">— Jonathan Swift，被 Tyler Cowen 引用</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"Compute as a commodity is gonna probably be the largest commodity on the planet."
<div class="text-xs opacity-60 mt-1 not-italic">— Tarek Mansour，论 GPU 远期曲线</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic">
"Agents execute a majority of global payment volume over the next decade. That world is determined in the next twelve months."
<div class="text-xs opacity-60 mt-1 not-italic">— Kahlil Lalji，论代理人支付</div>
</div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-60 mb-3">更多不容错过的精彩发言：</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
"When we scale up pretraining, you can do one shot learning. The model can extrapolate to an unseen shirt on an unseen bed. It actually understands it."
<div class="text-xs opacity-60 mt-1 not-italic">— Tony Zhao，论机器人涌现能力</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
"The extreme makes for a good tweet, not a good trade."
<div class="text-xs opacity-60 mt-1 not-italic">— Tarek Mansour，论预测市场 vs 社交叙事</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
"You're going to have a large number of companies with quite a very small number of employees but pretty high revenue."
<div class="text-xs opacity-60 mt-1 not-italic">— Tyler Cowen，论 AI Maniacs 的未来</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
"Open source AI just feels punk rock. It feels like Napster."
<div class="text-xs opacity-60 mt-1 not-italic">— TBPN 主持人，论开源文化</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
"The certainty was not performative. It was the kind that makes a man pass on a lottery ticket because he has already decided where he is going."
<div class="text-xs opacity-60 mt-1 not-italic">— TBPN，论 DeepSeek 创始人拒绝 DJI</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-400 rounded italic">
"If you can't build real hard stuff, you're not going to have lasting value over time."
<div class="text-xs opacity-60 mt-1 not-italic">— Connor Love，论美国动力主义</div>
</div>

</div>

---

# 致谢

<div class="mt-30 text-center">

## 感谢阅读

本期 TBPN 圆桌涵盖了 AI 冷战、机器人突破、计算力市场、代理人支付和好莱坞变革——五个正在同时重塑世界的叙事线。

<div class="mt-8 text-sm opacity-60">
完整访谈收听：<a href="https://share.transistor.fm/s/898ba371" target="_blank">TBPN · 2026 年 7 月 20 日</a>
</div>

<div class="mt-12 text-xs opacity-40">
声笺 Resonote · 结构化播客笔记 · 自动生成
</div>

</div>

