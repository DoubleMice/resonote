---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '180: 具身智能的金钱游戏：进展难测、收入催熟与 IPO 竞速'
coverDate: ''
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 具身智能的金钱游戏

<div class="text-lg opacity-70 mt-4">进展难测、收入催熟与 IPO 竞速——两位报道作者拆解行业全景</div>

<div class="mt-8 text-sm opacity-60">
晚点聊 · 子南、玉萌（《晚点 LatePost》记者，报道《具身智能的金钱游戏》作者）
</div>

<div class="mt-2 text-xs opacity-40">
主播：曼琪 · 晚点 LatePost 编辑部圆桌
</div>

<div class="mt-6 text-xs opacity-40">
“质疑泡沫，理解泡沫，拥抱泡沫，享受泡沫”——第五步是什么，还没有人回答
</div>

<div class="mt-6 text-xs opacity-40">
2026-09 · 第 180 期
</div>

---
layout: default
---

# 这期聊什么：一场由金钱主导的竞速

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**钱融得多，研发花得少**
头部公司融资超 50 亿元，研发一年约 3000 万元。大家比的像德州扑克里谁口袋深，而不是谁技术先进。

</div>

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

**进展难测**
没有公认 benchmark，普通人接触不到产品。行业可能在极大高估与极大低估之间摇摆。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**收入先于技术成熟**
全行业最大客户是地方数据采集中心；机器人公司与零部件厂商互为供应商加客户。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**IPO 竞速**
宇树上市之后，确定已有投行在工作的公司达 14 家，都想赶在牛市窗口里上市。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**一级攒局，二级拷问**
融资像“攒局”一样布阵营；二级市场则开始追问可验证的收入、订单与复购。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**谁在认真做事**
从研发数字、销量统计到马斯克的量产指引，本期逐项拆给你看。

</div>

</div>

---
layout: default
---

# 不对劲的感觉：钱很多，但花得很少

<div class="mt-4 p-4 rounded bg-amber-50 border-l-4 border-amber-500 text-lg">
“大家拿了很多钱，但是大家花钱很少。”
<div class="text-xs opacity-60 mt-1 not-italic">记者与多位从业者交流后形成的第一印象</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

一位采访对象把这场竞赛比作打德州：比谁口袋深。

**“比谁的筹码多，而不是说比谁的技术更先进。”**

比谁估值更高、谁更早上市——好像不是在报道科技赛道。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**“我们报道的不是一个科技赛道，我们报道的是一个融资驱动的东西。”**

行业里谈论最多的是融资，不是技术。有信源反问记者：

“你觉得这个行业还有几个是认真做事的人？”

</div>

</div>

---
layout: default
---

# 两组难看的数字：算力八家，数据零次

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 千卡集群：8 家
<div class="mt-1">“整个行业有千卡以上集群的公司就八家。”这是记者向算力提供方打听来的口径。</div>
<div class="mt-1 text-xs opacity-70">文章发出后，有人告诉记者：<strong>八家都多了。</strong></div>

</div>

<div class="p-4 rounded bg-amber-50 border-l-4 border-amber-500">

### 十万小时：0 次
<div class="mt-1">今年 4 月，一位二级市场信源转述某具身公司创始人的话：整个行业“就没有用过十万小时以上的数据去跑过一次模型”。</div>
<div class="mt-1 text-xs opacity-70">这与许多公司公开的数据口径相左——有没有数据、有没有用起来，是两回事。</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 五万小时 vs 一万小时
<div class="mt-1">一家自称行业前两名的数据公司，今年上半年“累计生产了五万小时的数据”，签过的最大订单却只有“一万小时”。</div>
<div class="mt-1 text-xs opacity-70">产量很大，订单很小——数据这门生意有多少真需求，要打个问号。</div>

</div>

</div>

---
layout: default
---

# 为什么进展测不准：具身没有 LLM 的观测条件

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 大语言模型：随处可测
- 有公开 benchmark，模型发布后大家自己测
- 开放权重模型开源可试
- 普通人用得上产品，谁好谁坏有手感

<div class="text-xs opacity-70 mt-2">“开放权重模型，大家可以自己去测，自己去试。”</div>

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 具身智能：难以复现
- 没有公认 benchmark（有一些，但不被大家认可）
- to B、物理实体又贵又重，普通人接触不到
- 同一个模型换硬件，表现可能不一样

<div class="text-xs opacity-70 mt-2">“它复现本身就更难，成本更高。”</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
后果：进展要么被极大高估，要么被低估，中间还有很大空间可以讲故事、吹泡沫。
</div>

---
layout: default
---

# 高估与低估之间：摇摆的行业，摇摆的道心

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 两种打法并存
- 一派认为该扎扎实实押注并验证技术方向
- 一派要在窗口期内多融资、做大收入、先上市
- 上市公司的身份更安全，融资渠道更好

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### “道心也会摇摆”
看到“某某大哥”换打法也受资本认可、有人才愿意加入，本来想好好做技术的人也会动摇。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

一位创始人换路线，对外有一个很微妙的说法——

**“他会告诉别人说我迭代了。”**

<div class="text-xs opacity-70 mt-1">不会告诉你换了一条路线——“大家就是还蛮会表达的。”</div>

</div>

---
layout: two-cols
---

# 剪刀差：融资 50 亿，研发三千万

<div class="mt-2 text-sm space-y-2 text-[15px] leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

报道中的一家头部公司：研发投入一年约 **3000 万元**，累计融资**超过 50 亿元**。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

“你把钱都放余额宝，一年都有五千万”——最差的理财，利息就够覆盖研发成本。

</div>

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

症结是判断力：很多公司“缺乏去做那个技术bet，就是你押注到底投什么方向的一个判断力”。没有判断，研发预算自然投不出去。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d1-money-flow.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 研发投入对照表：机器人 vs 蜜雪冰城

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 宇树：1.45 亿元
<div class="mt-1">“宇树去年研发投入是 1.45 亿元。”来自招股书，公开可查。</div>

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 蜜雪冰城：1.05 亿元
<div class="mt-1">“蜜雪冰城去年研发投入是 1.05 亿元。”一家卖奶茶的公司，研发投入和头部机器人公司同一量级。</div>

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 智元：约 5 亿元（非公开）
<div class="mt-1">“智元的研发投入应该是会比宇树要多的，去年可能是五个亿左右。”团队约 1300 人，人力成本更高。</div>

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**编辑部内部梗**：提到那家研发 3000 万的公司，主编说“我们晚点研发投入都比这个多”——把记者工资算作研发投入的话。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**两种投法**：技术驱动型围绕明确判断做系列验证，从 demo 到产品；资源型如智元多方向都做，靠资源试错——各有合理性，但多数公司卡在判断缺位这一步。

</div>

</div>

---
layout: default
---

# 钱花到哪儿去了：春晚、广告与回购条款

<div class="mt-4 p-4 rounded bg-amber-50 border-l-4 border-amber-500 text-lg">
“上春晚没问题，都要上春晚就有问题。”
<div class="text-xs opacity-60 mt-1 not-italic">一位宇树人士的话（报道转述）——一个上春晚是广告，都上春晚就没效了</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**单家 6000 万元以上**
宇树、松延动力、银河通用上春晚，“大概每家的花费是至少在 6000 万以上的”。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**够干两年研发**
按 3000 万/年的研发水平，“上个春晚就够那个公司就继续干两年”。投资人对这种花钱方式感到心疼。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**钱是有成本的**
“据我所知这些融资它基本上都是有回购协议的。”达不到投资人要求，创始人要想清楚自己兜不兜得住。

</div>

</div>

---
layout: default
---

# 去现场看进展：70 秒的轴承与两秒的转身

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 三次拜访，感觉不到进步
有公司记者连着去三次：“我感觉不到它比之前的很明显的进步是什么。”十几分钟、半小时的演示，外行根本看不出门道。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 70 秒 vs 2 秒
一家成立不到一年的公司，用机械爪把轴承放进塑料盒——“这个东西做了 70 秒”。

主编问：这机器人到底能替代几个比亚迪工人？记者反问：快递分拣员拿东西转身放下，两秒都不需要吧？

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

**“如果我是投资人，我应该不会投这个。”**

<div class="text-xs opacity-70 mt-1">不过单点快照说明不了趋势——关键要看技术的加速度，而加速度恰恰是最难看清楚的部分（作者概括）。</div>

</div>

---
layout: default
---

# 加速度的验算：马斯克晚了 18 个月

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-amber-50 border-l-4 border-amber-500">

### 一再推迟的时间表
按马斯克最初的说法，Optimus 三代去年一季度就该至少完成设计定型。按记者跟进，实际到今年 6 月底才实现——“他至少晚了 18 个月吧”，过程中还降低了要求。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 发布频率暴露信心
曾经一周发一次机器人照片或视频，现在很久没发。他此前一定高估了技术进步的斜率（记者推断）。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**“我常常会迟到，但我一般都会做到。”**（马斯克常说的话，现场被转述）

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

对这句话的回应是：“我觉得看大家等不等得起吧。”

</div>

</div>

---
layout: two-cols
---

# 收入催熟：三种主要来源

<div class="mt-2 text-sm space-y-2 leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

港股 18C 上市要求收入 **2.5 亿港币以上**；而技术的实际应用与成熟度还比较低。大体量收入是怎么实现的？

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**① 地方数据采集中心**——去年全行业最大客户。记者粗略印象：占行业收入盘子三到四成以上（转述口径）。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**② 科研教育 + 迎宾导览**——宇树公开可见的确定性收入，质疑最少。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**③ 制造业场景**——一家头部创业公司，近四成收入来自这里。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d2-revenue-map.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 数据采集中心：各取所需的闭环

<div class="mt-2 text-sm space-y-2 leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**通用做法**：地方政府与机器人公司合资成立数采公司——政府出钱或出地，合资公司实际运营。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**地方政府的账**：一台机器人要配人盯着、配人操作，就业很具体；没有污染、不占地方、有税收。

</div>

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

**机器人公司的账**：拿到设备订单与收入，还约定优先买回数据（数量与时限事先谈好）——数据有买家，模式才转得起来。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d3-data-center.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 数采中心的账本：一台 40–50 万，四个中心凑一家 IPO

<div class="grid grid-cols-4 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

<div class="text-xl font-bold text-blue-600 my-1">40–50 万</div>
<div class="text-xs leading-relaxed">卖给数采中心的机器人单价（有贵有便宜，这是听到的口径）</div>

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

<div class="text-xl font-bold text-green-600 my-1">≈ 5000 万</div>
<div class="text-xs leading-relaxed">常见规模 100 台的总投入，对地方国资不算大钱</div>

</div>

<div class="p-3 rounded bg-amber-50 border-2 border-amber-200">

<div class="text-xl font-bold text-amber-600 my-1">200 个岗位</div>
<div class="text-xs leading-relaxed">“100 台机器人我就创造 200 个就业岗位”，一台约配 2 名操作员</div>

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

<div class="text-xl font-bold text-purple-600 my-1">80+ 个</div>
<div class="text-xs leading-relaxed">到去年底公开能找到的数采中心——自贡（与优必选合作）、攀枝花都在名单上</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

“凑四个这样的地方政府的数据采集中心，这个公司就够 18C 的收入了”——四个中心约 2 亿元，逼近 2.5 亿港币门槛（约两亿多人民币）。

</div>

---
layout: default
---

# 数采中心的裂缝：空转、散伙与技术换代

<div class="grid grid-cols-3 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 开工率不足
“采那么多数据我卖不出去”，人力成本却一直要付——那就先不开工。回本周期算不过来，有的数采中心把机器人转卖给了别的单位。

</div>

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

### 散伙的省会案例
中部某省会买了 8000 万元机器人，今年初数采散伙，机器人卖给周边院校当教具。财务上可能亏，认知上不算亏——地方至少知道了这事的深浅。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 技术换代
需求转向 Ego 数据与 World Model 数据，真机采集需求变少，有公司主动压低这部分收入。像 GPU 一样：“你买了很多 V100，可能过了两年之后就没有人用 V 卡了。”

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

技术路线没有收敛，原有投入可能白费；也正因如此，新公司还在不断出现。这是具身行业的风险，也是它的活力所在。

</div>

---
layout: default
---

# 质疑最少的收入：科研、教育与迎宾

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 两块确定性收入
宇树公开可见的收入大头：卖给科研机构、学校，以及迎宾导览（跳舞）。这两块质疑最少——跳舞、研究都是真实需求，价值明确。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 科研市场被低估的价值
收入之外，“整个行业技术最前沿的人，如果用的是你的硬件”——未来最适配先进技术的，很可能就是你，有机会成为这个领域的基础设施提供方之一。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

担心的人说科研体量不大；但作为起步市场它是合格的。看宇树这类公司，不能只数科研带来的收入，它带来的更长远价值更重要。

</div>

---
layout: two-cols
---

# 制造业收入：互为对方的供应商加客户

<div class="mt-2 text-sm space-y-2 leading-relaxed">

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

一家收入体量不小的具身创业公司，“它有将近四成的收入是来自于一些制造业场景”。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

机器人公司把机器人卖给制造业零部件公司，零部件公司把零部件卖回给机器人公司——“互为对方的供应商加客户”。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**量是凑出来的**：一个机器人公司要对接几百家供应商。“两千台我一百个供应商一人买二十台不就两千台”——20 台干不了什么，拆机、测试、产线上放几台而已。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d4-mutual-loop.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 制造业公司为什么掏钱：转型与估值

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-amber-50 border-l-4 border-amber-500">

### 比建厂划算
产能过剩时，“我花十个亿去建个厂，还不如我花五个亿我去投个机器人公司”。投完顺势进入新领域：搞机器人事业部，向全行业卖零部件，转型成机器人供应链。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 估值差是核动力
“你估值可能就是汽车十五倍，机器人三十倍。”沾点汽车，市值就低；挂上机器人，倍数立刻不同——哪怕老板不想套现，融资做现金储备也划算。

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

有零部件公司董秘卖完机器人产品就对分析师喊话：**“我不是汽车行业的公司了，我现在是一个机器人公司。”**——请按机器人供应商的倍率来估值。

<div class="text-xs opacity-70 mt-1">资本市场看重预期：“有想象空间很重要”。对上市公司来说，机器人收入常常是“花钱买一个期待”。</div>

</div>

---
layout: default
---

# 长盛轴承：800 万零部件，换来 5 倍股价

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">

宇树上完春晚，市场翻它的财报：**“宇树等机器人公司只买了长盛大概八百万的零部件”**——但长盛轴承的股价从底部涨上来“翻了五倍吧”。

<div class="text-xs opacity-70 mt-1 not-italic">机器人贡献的收入不高，市值涨幅却非常夸张——2025 年前后资本市场对机器人的追捧到这种程度</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**体量不能太大**：“你就算买一万台机器人，大家都不会把你当个机器人公司。”宁德时代买了也是看主业估值。这套玩法适合市值几百亿的中型公司——比如“市值可能就三百亿”，PE 翻倍就是六百亿。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**可复盘的案例**：三花智控与 Optimus 合作前“是一个一千亿出头这样的规模”，如今是 A 股机器人体量最大的公司之一。巨头做机器人是长线布局，短期市值没反应；中型公司才有弹性。

</div>

</div>

---
layout: two-cols
---

# 智元的分级经销体系：销售额定级别

<div class="mt-2 text-sm space-y-1.5 leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**按销售额分级**：VAP 两千万、金牌一千万、银牌五百万、认证两百万——“两千万的话就是 VAP”。口径只看销售额，自购也算：“你自己买一千万就是帮他卖了一千万啊。”

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**级别换资源**：货源更多、智元的支持更多——卖给谁、怎么卖、怎么维护，都要厂商配合教。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**闭环**：均胜电子、宁波华翔、卧龙电驱都是 VAP，同时是零部件商与股东——买机器人花 5000 万，投资升值可能回来 5000 万，还“离 IPO 也更近”。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d5-tier-ladder.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# IPO 竞速：为什么必须做大

<div class="mt-4 p-4 rounded bg-amber-50 border-l-4 border-amber-500 text-lg">
“它就必须奔着做大去了”——融了这么多钱，要给所有人一个交代。
<div class="text-xs opacity-60 mt-1 not-italic">回购条款压在头上：技术不确定，研发投不下去，融资和 IPO 是唯一看得清的方向</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**排队规模**：宇树之外，“已经有投行在上面工作的是十四家”——这还是能确定的口径，有上市想法的更多。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**18C 门槛不高**：港交所 18C 于 2022 年 10 月提出、2023 年 3 月生效，收入要求 2.5 亿港币（约两亿多人民币）。机器人均价 20–30 万/台，凑收入不算难——但它只是最低门槛。

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">

牛市有窗口：“我们如果从 24 年 9 月开始算的话，现在我们牛市有 20 多个月了。”错过这轮，行情下来再上，估值打折还是小事，“那都有可能上不了”。

</div>

---
layout: default
---

# 巨头的特权：可以不卖机器人

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 特斯拉、小鹏、小米：不卖
做机器人的巨头们，“现在其实这些公司是不卖机器人的”。对马斯克来说机器人是研发投入，今年本就没有出售计划——“没有人会去算他要卖多少”。

巨头有现金流支撑研发，也已经上市，没有收入与 IPO 压力。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 创业公司：必须有收入
“创业公司还是需要有收入。”技术进展不确定、融资停不下来，上市前的每一段路都要靠收入续命。

谁从容、谁着急，决定了这个行业里两种完全不同的活法。

</div>

</div>

---
layout: default
---

# 预期落差：2026 年 10 万台 vs 8 月造 300 台

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 马斯克带崩了预期
他最初喊出“2026 年 10 万台”，供应链立刻按计算器：与你合作，一个零部件卖多少钱，直接乘 10 万。结果“他现在搞到 8 月份才造 300 台”——按 ARR 年化 3600 台，“3600 台跟 10 万台差 30 倍”。

</div>

<div class="p-4 rounded bg-amber-50 border-l-4 border-amber-500">

### 谁的锅
“因为他之前把大家的预期拉得太高了。”机器人进展本就不及预期，供应链企业“大部分肯定都是业绩不如预期的”。

二级市场的朋友开始说：“大家看看国产链吧。”

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**国产指引更稳**：邓总（智元机器人邓泰华，节目附录确认）给出“1.6 万台”指引——对照他们去年约四五千台的产量，不算激进。“目前为止邓总的信用记录比马斯克好吧。”

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**无法证伪**：“你不能去质疑，这东西没有办法证伪。”指引靠的是信用记录，不是可核验的事实。

</div>

</div>

---
layout: default
---

# 收入与预期的含金量：机器人行业没有预期

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 没有锚的定价
“机器人行业是没有预期的。”别的行业有“今年能赚多少”的锚，达不到就跌；机器人行业对它的预期一直在调整。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 二级市场做波段
“我会做波段”——一直买入卖出。事后来看，一直拿着不动反而是亏的。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### To B 的灰色地带
二级市场朋友的话：“To B 生意就是你想卖多少就卖多少。”——只要两个公司说好。主播当场提醒：“这个发言比较危险啊。”

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 基本面还没到
“它的应用没到爆发的状态。”有机器人收入的公司不少，但收入是否可持续，取决于应用什么时候真正起来。

</div>

</div>

---
layout: two-cols
---

# 销量之谜：八千台的统计是怎么来的

<div class="mt-2 text-sm space-y-1 leading-relaxed">

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">

汽车行业“每周就得发一次销量”，精确到个位；机器人行业没人统计销量。

</div>

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">

**外资分析师怎么数**：翻公告看谁买了，再挨个问买家——“他大概问了八十几个公司”。

</div>

<div class="p-2 rounded bg-amber-50 border-l-4 border-amber-500">

凑出来的数字：去年底国内人形机器人“大概是八千台左右”——宇树、智元断崖式领先，第三名优必选，百台级。

</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">

“出货量不能算真实的销量”——压在渠道里不算卖出去；特斯拉去年“也就几百台的产量”。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d7-sales-count.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 一级市场：融资像“攒局”

<div class="mt-2 text-sm space-y-1.5 leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

不像传统风险投资押注风险与独立判断——具身融资常有一位“攒局的人”（FA 或活跃机构人士），从第一轮就布好阵营。

</div>

<div class="p-3 rounded bg-amber-50 border-l-4 border-amber-500">

**T0 产投 6~8 家**：智元、自变量、乐聚、银河等——代表确定的订单。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**T0 VC 10~15 家**：红杉、高瓴、顺为、春华、源码等——代表技术上的认可。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

每轮 3+3 上牌桌，“可以为后面的几次的融资背书”——豪华阵容一出，后面的机构就会跟投。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./d6-syndicate.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 从竞争到合作：高瓴与红杉同轮出现

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 罕见的同框
大模型时代，“高瓴和红杉一起投的项目其实还是挺少的”。到具身阶段，公开信息里同轮出现更多——比如“他们投在同一轮的就有像它石，然后无界，米清智能和魔角科技”，同一批机构也同时是星动纪元、智元的股东。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 竞争为什么消失
投资人的回答是：“大家一起赚钱有什么好排斥的。”——只要你投得够前，在这些公司的预期里，估值一定会很快上升。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**条款越来越硬**：有机构被要求“承诺连续多轮领投”。一位朋友觉得这个要求很没有道理，最后没有投。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**也有人拒绝**：部分 T0 机构会拒绝 Club Deal。他们最看重的还是“创始人的定力”——在泡沫里是否仍专注在做的事。

</div>

</div>

---
layout: default
---

# 二级市场的拷问：泡沫走到第几步

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">

**最受关注的试金石**：“宇树上市后六个月内的他的价格的走势。”回到公开市场就是被充分定价：早期炒高价格的人会慢慢退场，留下的价格“更趋近于他自己的一个内在的价值的”。

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**二级调研不聊故事**：“他们就会去找一些可验证、可量化的东西”：今年研发投多少、明年投多少、收入预期与来源、在手订单，“这个领域它复购的概率有多少”——回答不上来细节的，不买。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**泡沫四步曲**：“质疑泡沫，理解泡沫，拥抱泡沫，享受泡沫”——第五步是什么？报道的结尾用了这句话，节目里没有人给出答案。二级的人在泡沫里“找到他自己相信愿意下注的人”。

</div>

</div>

---
layout: default
---

# 两类投资人，一种预期管理

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 赚主题钱的人
“有一类投资人他就是想赚一个主题的钱”——投这个行业，希望尽快退出。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 坚信价值的人
“还有一批投资人我相信他是非常坚信具身这个行业的价值”——不因能否上市而紧张，只周期性地确认创始团队还在认真做技术、纯粹推进。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**回到传统 VC 的一笔**：红杉种子轮 2019 年投宇树——那时行业还没有共识，人们看到的是“王兴兴拿着机器狗，他做出一个产品后那个激动的样子”。这笔投资“还是很接近传统的风险投资的判断标准的”。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**王兴兴管预期**：他在公开场合说，行业“两到三年之内会有一些应用落地吧”——这个预期比投资人定价时的预期低，但可能也更靠谱。

</div>

</div>

---
layout: default
---

# 接下来一年要回答的问题

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 技术：1000 万小时见分晓
“我们如果有个 1000 万小时的数据，然后我们可能就能验证这个模型到底有没有 scaling。”头部公司距这个目标已经不远——之前看不清楚的技术问题，今年可能会有一些答案。

</div>

<div class="p-4 rounded bg-amber-50 border-l-4 border-amber-500">

### 市场：宇树 6 个月的走势
上市 6 个月后，宇树是真的到 3000 亿元，还是比现在还低？它是整个行业定价的风向标。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 格局：新公司还会冒出来
“因为技术没有收敛，所以有很多新公司还在不断的出现。”对比之下，大模型的新公司窗口在 23 年下半年基本就关闭了。具身的牌局还远没定型。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 终局：多少人愿意买
“一个股票能不能上市其实就看有多少人愿意买吧。”愿意买的前提，是产品与技术给出更明确的价值——如果具身真像大模型一样成熟，早该出现赚翻的“卖水人”了（“如果具身它像大模型一样的话”）。

</div>

</div>

---
layout: default
---

# 核心金句

<div class="text-sm opacity-60 mb-3">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
“比谁的筹码多，而不是说比谁的技术更先进。”
<div class="text-xs opacity-60 mt-1 not-italic">— 受访对象谈这场竞赛：大家像打德州一样比谁口袋深</div>
</div>

<div class="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
“要么有可能会被极大的高估，要么有可能会被低估”
<div class="text-xs opacity-60 mt-1 not-italic">— 进展难以观测的行业，估值注定在摇摆中</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
“上春晚没问题，都要上春晚就有问题。”
<div class="text-xs opacity-60 mt-1 not-italic">— 一位宇树人士谈行业内卷式的营销（报道转述）</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
“我常常会迟到，但我一般都会做到。”
<div class="text-xs opacity-60 mt-1 not-italic">— 马斯克，被现场转述；嘉宾的回应是“看大家等不等得起”</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
“行业里面可能两到三年之内会有一些应用落地吧”
<div class="text-xs opacity-60 mt-1 not-italic">— 王兴兴（宇树 CEO）在公开场合管理预期</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
“质疑泡沫，理解泡沫，拥抱泡沫，享受泡沫”
<div class="text-xs opacity-60 mt-1 not-italic">— 报道结尾的泡沫四步曲；第五步是什么，没有人回答</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="text-sm opacity-60 mt-4">
子南、玉萌 ·《晚点 LatePost》记者 · 晚点聊第 180 期 · 2026-09
</div>

<div class="mt-4 text-xs opacity-40">
“一个股票能不能上市其实就看有多少人愿意买吧。”——金钱游戏最终的裁决，是产品与技术给出明确的价值
</div>
