---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 'AI Viruses, OpenAI First Device, WSJ Mansion Section | Samir Kaul, Patrick Wendell, Grant LaFontaine'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# AI 病毒 · OpenAI 设备 · 社交媒体天价罚款

## 三位嘉宾深度对谈：Samir Kaul · Patrick Wendell · Grant LaFontaine

<div class="mt-4 text-sm opacity-60">
TBPN · 2026年8月 · 1小时49分
</div>

---
layout: default
---

# 本期节目为什么值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-1">AI 制造全新病毒</div>
<div class="opacity-80">斯坦福/Arc 研究所首次用 AI 设计出自然界不存在的新病毒，生物安全门槛正在降低</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-1">Jeff Dean 创业</div>
<div class="opacity-80">谷歌传奇人物离开效力 27 年的公司，创办 Discovery Loop，获 Khosla 领投</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-1">OpenAI 首款硬件</div>
<div class="opacity-80">冰球大小的甜甜圈形态设备，$300-400，配备摄像头和传感器，预计 2027 年上市</div>
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700 mb-1">社交媒体天价罚单</div>
<div class="opacity-80">Meta 在新墨西哥被判超 9 亿美元，诉讼路径与 1998 年烟草大和解高度相似</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-1">AI 编程成本管理</div>
<div class="opacity-80">Databricks 联合创始人分享：智能路由降本 30%，每两周出现新效率模型</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-1">直播电商 $200 亿估值</div>
<div class="opacity-80">Whatnot 完成 5 亿美元 E 轮融资，75% 的百万卖家在 90 天内达到 $50 万年销售额</div>
</div>

</div>

---
layout: default
---

# AI 制造新病毒：科学突破

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 发生了什么

发表在 **Science** 上的研究：斯坦福大学和 Arc 研究所的研究人员训练了 AI 模型，让它识别天然病毒 DNA 的模式，然后用这些模式**生成全新病毒的基因序列**。

将合成的 DNA 注入细菌后，细菌产生了活的病毒——能感染其他细菌。

</div>

<div>

### 关键背景

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2">
<div class="text-sm font-bold text-green-700">安全限制</div>
<div class="text-xs opacity-80">AI 仅训练于噬菌体，排除感染人、动植物、真菌的病毒</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2">
<div class="text-sm font-bold text-blue-700">首次实现</div>
<div class="text-xs opacity-80">历史上第一次用 AI 设计在真实世界中运行的新病毒</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-2">
<div class="text-sm font-bold text-yellow-700">局限性</div>
<div class="text-xs opacity-80">基于 PhiX174 噬菌体，仅攻击细菌，对人类无威胁</div>
</div>

</div>

</div>

<div class="mt-3 text-xs opacity-50">
来源：New York Times / Science 期刊 2026年8月
</div>

---
layout: two-cols
---

# AI 病毒：加速与风险的分岔路口

<div class="mt-2" />

### 为什么这次不一样

科学家合成病毒基因组已有多年历史，但这次的核心差异在于**速度和成本**。

<div class="mt-2 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

主持人 John 提出了核心问题：如果病毒设计成本突然**降低一千倍**，正面可以重塑生物技术，负面则会降低生物安全门槛。

</div>

### 实际应用前景

- 病毒已被广泛用于**基因治疗的递送载体**
- AI 设计的病毒可能**扩展医疗工具箱**
- 噬菌体疗法可能替代抗生素

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./virus-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Discovery Loop：Jeff Dean 的新篇章

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Jeff Dean 是谁

- Google 第 23 号员工，效力 **27 年**
- 创立 Google Brain，领导 TensorFlow 和 TPU 开发
- 被 Samir Kaul 称为"涉及了 Google 所有重要的事"

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么现在离开

Samir Kaul 在节目中解释：Jeff Dean 和他的团队在 Google 工作了 27 年后，选择离开去"做不一样的事"。这个决定本身就标志着他们对这件事赋予了极高的意义——"否则为什么要拿自己的声望冒险？"

</div>

</div>

<div class="mt-4 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**Khosla Ventures 的投资逻辑**：Samir Kaul 说他们几乎**拒绝了所有 NeoLab**（后 OpenAI/Anthropic 时代成立的 AI 研究公司），因为看不到与前沿实验室的差异化路径。但 Discovery Loop 不同——它不是做通用模型，而是用 AI 解决**具体的科学研究问题**。

</div>

---
layout: two-cols
---

# Discovery Loop：科学研究的 AI 引擎

<div class="mt-2" />

### 核心思路

不追求通用 AGI，而是将 AI 作为**科学发现加速器**：

- 提出一个研究假设
- AI 并行运行成千上万次实验
- 实时获得结果反馈，改进假设
- 像编程一样迭代——能得到**即时正误验证**

### 应用领域

Samir 列举了潜在方向：核聚变磁铁新材料、更高效太阳能电池、电池材料、药物研发。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./discovery-research.excalidraw"
  class="w-[470px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

---
layout: two-cols
---

# Samir Kaul：Khosla 的投资哲学

<div class="mt-2" />

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### NeoLab 为什么大多不值得投

Samir 坦言很多 NeoLab 的创始人是超级巨星，但仅仅明星资历不足以支撑巨额估值。Khosla 几乎**全部跳过**了这些项目——看不出与前沿实验室有何差异化。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 风投应该接受失败

失败率不到 60%–70% 说明"没有承担足够的风险"。VC 的数学：只输 1x，但能在 OpenAI 这样的项目上赚 **1000x**。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 不做"派对轮"

把大部分基金投入数十亿美元估值的"派对轮"——"我会做空这种策略"。真正回报来自早期介入、帮助孵化、拥有 20% 以上股权。典型例子：Khosla 花 $500 万拿到 Rocket Lab **三分之一**，上市时拥有 28%，如今价值 300–400 亿。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vc-framework.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Pro Rata 不是默认选项：Khosla 的决策框架

<div class="mt-4">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

Samir Kaul 提出了一个在 VC 界罕见的观点：**按比例跟投（pro rata）作为默认选项是"可耻的"**。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-300">

### 📈 三倍 Pro Rata

**最好的公司**

团队强烈看多，最大程度加仓。这是你**能拿到的最大份额**。

</div>

<div class="p-3 rounded bg-red-50 border-2 border-red-300">

### 📉 三分之一 Pro Rata

**降温信号**

公司还行但不如预期，应该减少仓位。市场给了你在中途调整赌注的机会。

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-300">

### ⚖️ 默认 Pro Rata

**仅两种例外**

要么是最好公司的最大份额，要么是支持一轮融资时的强制要求。

</div>

</div>

<div class="mt-3 text-sm opacity-70 text-center">
Samir 用超级碗赌局做类比：如果允许你中场休息时改变赌注，不重新评估就是愚蠢的
</div>

---
layout: default
---

# Samir Kaul 给年轻创业者的建议

<div class="mt-4">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-lg italic">

"如果你有一个想法，如果你有一个联合创始人，**昨天就开公司**。别等。谁在乎？从哈佛退学，从 MIT 退学，都没关系。"

</div>

<div class="text-xs opacity-70 mt-1 ml-2">— Samir Kaul, Khosla Ventures</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 有想法就立刻行动

现在是最好的创业时机——AI 让许多职能比以往任何时候都更高效。不要等"准备好"，不要等"足够经验"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 没有想法？去能遇到联合创始人的地方

如果你缺乏信念或没有联合创始人，去 Google、去 OpenAI，以**学习、增强信念、找到联合创始人为目的**。一旦这两样齐备，就离开去创业。

</div>

</div>

---
layout: default
---

# Semi Analysis 对 DeepMind 的"死亡宣判"

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Semi Analysis 的结论

"就所有实际目的而言，我们相信 **DeepMind 已不再是前沿实验室**——由于 RL 团队大量离职和算力分配不足。Google 会继续发布模型，但**重新达到顶尖水平的概率已降至零**。"

多位高层离开：Jeff Dean、Noam Shazeer 等。Google 现在"无法留住顶级 AI 人才"。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 数据佐证

- Google 将超过 **20%** 的 TPU 产能长期卖给 Anthropic
- 只有约 **15%** 的云计算力分配给 DeepMind
- GCP 预计实现中高 30% 的 EBIT 利润率
- 未来几个季度可能新增 **$2500 亿** TPU 预订量

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**这看似矛盾**：Google 将算力卖给竞争对手 Anthropic，同时切断了自家实验室的资源。但主持人指出，如果 Google 的策略是专注云计算和芯片，等前沿模型竞争尘埃落定后再"收回"数据中心——这或许是一种**理性的后发策略**。

</div>

---
layout: default
---

# Google 的"哑铃策略"：云赚钱，AI 让路

<div class="mt-3">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">

Semi Analysis 的分析揭示了 Google 内部的战略分裂：**Google 管理层认为价值在基础设施（云、芯片），而非模型本身**。这与 Demis Hassabis 当初出售 DeepMind 时的期望形成鲜明对比——他曾测试 Mark Zuckerberg 是否"真正信仰 AI"，结果发现 Zuck 对 VR 同样兴奋，于是选择了 Google。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### 芯片

TPU 研发实力强劲，向 Anthropic 等竞争对手出售算力，订单积压千亿美元级

</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 云

GCP 是印钞机，EBIT 利润率超 30%，搜索和 YouTube 广告为数据中心扩容提供现金流

</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">

### AI 前沿

核心人才流失，算力被剥夺，但拥有 Anthropic 15% 股权（无投票权、无董事会席位）

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Google 在 Anthropic 的持股约为 14%，是纯粹的财务投资，甚至连董事会观察员都不是
</div>

---
layout: default
---

# OpenAI 首款硬件：冰球甜甜圈的野心

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 产品形态

- **外形**：冰球大小的甜甜圈状设备
- **价格**：$300–400
- **定位**：无屏幕的便携智能音箱
- **设计**：Johnny Ive 团队操刀
- **时间**：预计 2027 年上市

</div>

<div>

### 能力预想

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mt-2 text-sm">
<span class="font-bold">感知环境</span>：摄像头和传感器让 AI 实时了解周围发生的事

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mt-2 text-sm">
<span class="font-bold">个性化</span>：记忆主人的习惯和偏好，对话越来越定制化

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mt-2 text-sm">
<span class="font-bold">情感表达</span>：灯光和机械部件随回应**物理移动**，比 Alexa/Google Home 更"生动"

</div>

</div>

</div>

<div class="mt-3 text-sm opacity-70">
来源：Bloomberg Mark Gurman 报道
</div>

---
layout: default
---

# ChatGPT 硬件的集成挑战

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 mt-4 text-sm leading-relaxed">

主持人 John 分享了自己的体验：在 Codex 中完成工作后，想在手机上继续——但需要**手动把上下文窗口复制到 ChatGPT App**。他预计这个问题"几周内就会被修复"，但暴露了更深层的问题。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 当前割裂

ChatGPT（对话）、Codex（编码）、Work（个人助手）各自独立运行，无法共享上下文和状态

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 硬件需求

许多真实任务需要启动浏览器、抓取数据、编写代码、部署服务——不仅仅是单次 LLM 交互能完成的

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 乐观预期

到 2027 年设备推出时，这些集成问题应该已经解决，产品将呈现完整的 AI 协作能力

</div>

</div>

---
layout: default
---

# 社交媒体成瘾诉讼：Meta 面临 $9 亿罚单

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 最新判决

新墨西哥州法官命令 Meta 支付**超 9 亿美元**，并限制未成年人使用 Facebook 和 Instagram 的方式：

- $5.67 亿：用于修复平台造成的伤害
- $3.75 亿：此前陪审团裁定的民事罚款

</div>

<div>

### 诉讼潮正在升级

<div class="mt-2 space-y-2 text-sm">
<div class="p-2 rounded bg-red-50 border-l-4 border-red-400">
<span class="font-bold">2026年3月</span> — 洛杉矶陪审团判 Meta $420 万、Google $180 万给一名成瘾少女
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-400">
<span class="font-bold">2026年5月</span> — 肯塔基学区获赔 $2700 万（Meta+YouTube+TikTok+Snap 分摊），不承认责任、不强制改变产品
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-400">
<span class="font-bold">2026年8月</span> — 新墨西哥州判 $9 亿，附带行为限制
</div>
</div>

</div>

</div>

<div class="mt-2 text-sm opacity-70 text-center">
趋势清晰：金额在上升，判决在变严厉——从不承认责任到强制要求改变产品
</div>

---
layout: two-cols
---

# 烟草大和解：社交媒体的前车之鉴

<div class="mt-2" />

### 1998 年 MSA 模式

- 46 个州联合起诉烟草公司
- **核心逻辑**：不是患癌的人获赔，而是**各州医保系统**因肺癌支出剧增而索赔
- 结果：$2060 亿永久年度支付制度
- 限制广告和营销行为
- 州政府将未来收入**证券化为债券**

### 社交媒体的相似轨迹

- 学校因学生心理问题支出增加而起诉
- 各州医保系统可能跟进
- 路径高度相似：个体受害者 → 机构成本 → 系统性赔偿

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./tobacco-social-media.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Databricks：AI 编程的成本管理革命

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 mt-4">

### 问题：指数级上涨的成本曲线

Patrick Wendell 描述：在 Databricks 推行 AI 编码工具时，起初的最大挑战是**没人愿意用**。但一旦推广开来，成本开始**指数级增长**——消费定价意味着每个工程师在原则上可以花费无上限的金额。如果不加管控，成本将吞噬所有效率提升。

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 生产力收益明确

- 整体研发产出**接近翻倍**
- 某些高度优化的团队速度更快
- 通过追踪 PR 数量、功能上线、代码行数等综合指标验证

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 成本管控的关键

- 与 Coinbase、Uber 等早期大规模采用者交流
- 找到了**控制人均成本曲线**的有效技术
- 使用量持续增长，但人均成本保持平稳

</div>

</div>

---
layout: default
---

# 三大降本策略：从模型更新到智能路由

<div class="mt-4">

### 📊 策略一：拥抱模型进步（最有影响力）

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm mt-2">
Patrick 认为这是**迄今为止最有效的方法**——"每周大约发布 5 个新模型，其中每 1-2 周就有一个达到新的效率前沿。你什么都不用改变，突然之间同样的产出成本更低。"关键在于：**快速分析、基准测试、迁移流量到新模型**。
</div>

### 🔀 策略二：智能模型路由（额外降本 30%）

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-2">
不同模型在不同任务上有不同优势。Databricks 将路由技术产品化为 **Unity AI Gateway**，已有数千客户使用。路由模型本身是**极其轻量的小模型**，不会反向吃掉成本。
</div>

### 🏗️ 策略三：工程优化

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm mt-2">
传统工程优化手段持续挤压模型利用率。Patrick 强调路由业务**资产极轻**——不需要买 GPU，不需要大量资本支出，是典型的轻资产商业模式。
</div>

</div>

---
layout: two-cols
---

# 智能模型路由如何工作

<div class="mt-2" />

### 核心逻辑

- 每个任务经过小型、快速的路由模型判断
- 根据复杂度分配到最合适的模型
- 简单任务 → 小模型（便宜）
- 复杂推理 → 大模型（昂贵但必要）
- 开源模型填补性价比区间

### 为什么这很重要

在模型**利润空间不断压缩**的世界里，路由和优化是避开军备竞赛、同时捕获价值的路径。

Databricks 将研究重点放在**模型使用的实践问题**上，而非模型本身的训练。

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./model-routing.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 超越编程：企业 AI 的下一个战场

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm mt-4 leading-relaxed">

Patrick Wendell 指出，编码目前仍是 AI 成本的绝对主导，因为**软件是数字产物**——AI 可以不断迭代代码，累计增值，不会受限于人类的思考和回复速度。但下一波正在到来。

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 知识工作自动化

企业内部可能有**上千人每天处理数据**：查表格、跑查询、核对指标定义、用 Excel。这些工作正在被大量自动化。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 客服与 BI

客户服务和商业智能是下一批大规模采用场景。虽然不是最终交付物，但在流程图绘制、竞品分析等环节已广泛使用。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 设计与营销

即便不等同于最终出街稿，几乎所有 Fortune 2000 的营销团队都已在故事板和设计探索中使用生成式图像。

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
技术深度从软件工程师向下渗透：工程师 → 数据分析师 → 知识工作者 → 创意人员
</div>

---
layout: default
---

# Whatnot：$200 亿估值的直播电商巨头

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 最新融资

- **E 轮**：$5 亿
- **估值**：$200 亿
- **模式**：直播视频 = 无固定成本的实体零售店
- **规模**：数十万卖家在平台上建立大型业务

</div>

<div>

### 增长驱动因素

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
Grant LaFontaine 解释：直播是零售的终极媒介——像开一家**没有租金、没有装修费、没有固定成本的实体店**。卖家成长，平台就跟着成长。
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**年增长率**：公司**每年至少翻倍**已有六年半。即便面临大型社交媒体和电商平台的竞争，"我们只是继续专注于客户"。

</div>

---
layout: default
---

# Whatnot 卖家的"中间阶层"

<div class="mt-4">

### 打破创作者经济的幂律诅咒

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm mt-2">
Grant 指出，Whatnot 的**变现效率高出传统平台一个数量级**——因为直播直接产生销售额，而不依赖广告。这意味着你可以拥有少量观众但仍然经营一门真正的生意。
</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">

### 传统 YouTube

频道运营一年，日观看量数千，全年收入可能只有**三位数美元**（主持人 John 的亲身体验，2021年收入为 $3 per month）

</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">

### Whatnot 小卖家

每周直播几场、有稳定货源，全年销售额**轻松突破数十万美元**。首次直播如果没有 50 单销售就是做错了。

</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">

### 头部卖家

年收入超 **$100 万**的卖家中，**75% 在 90 天内达到 $50 万年销售速率**。最成熟的商家有 150-200 名员工。

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Grant: "如果你第一次直播没有卖出 50 单，你大概率是做错了。即使早期节目也能有大量销售，赚几千美元。"
</div>

---
layout: default
---

# Whatnot：真实性、制作价值和未来

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 真实性是不可替代的底线

"没人会从不信任的人那里买东西。信用卡输入是一个基于信任的决定。所以**真实性永远是核心**——但这不意味着人们不会提升制作水准。"

Grant 举例：MrBeast 被认为极端真实，尽管制作投入巨大。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 未来预测：两极分化

- **每个零售商都将有直播存在**——从夫妻店到大品牌
- 部分卖家将像 MrBeast 一样持续"升级游戏"
- 直播内容将同时变得更**高端**和更**朴实**

</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">

### 商业洞察：直播店 vs 实体店

"直播的经济模型与实体零售店大致相当。一般商店同时有 15-20 个人在购物。如果你有 15-20 个直播观众，经济模型就能成立。这就是为什么存在一个**巨大的中间阶层**——你不需要网红级的流量。"
</div>

---
layout: default
---

# Whatnot 的专注力与品类扩张

<div class="mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
即便融了 $5 亿、公司估值 $200 亿，Grant LaFontaine 强调 Whatnot 仍保持"**极度专注**"——团队大约 1400 人分布在 10 个国家，但他们明确知道什么该做、什么不该做。
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div>

### 正在推进

- 更多品类（高单价物品、汽车、酒类）
- 更多国家拓展
- 改善物流和购买体验
- 用户通过 Chromecast 投屏到电视

</div>

<div>

### 尚未投入

- 原生智能电视 App（"路线图上有"）
- 白标/嵌入式方案（"不排除但非优先"）
- 产品功能太多，"有成千上万件想做的事"

</div>

</div>

<div class="mt-3 text-xs opacity-60 text-center">
Whatnot 的护城河：持续六年的专注执行，即使面对 Meta、Amazon 等巨头竞争，每年至少保持翻倍增长
</div>

---
layout: default
---

# Authentic Brands Group：品牌"坟场"还是品牌帝国？

<div class="mt-4">

ABG 拥有超过 50 个消费者品牌及多位名人的肖像权和遗产，包括：

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm text-center">

<div class="p-2 rounded bg-blue-50 border-2 border-blue-200">

### 运动/街头

Tapout · Volcom · DC Shoes · Roxy · Billabong · Quiksilver · RVCA

</div>

<div class="p-2 rounded bg-green-50 border-2 border-green-200">

### 时尚/零售

Brooks Brothers · Nautica · Forever 21 · Eddie Bauer · Lucky Brand · Barneys · Saks Fifth Ave

</div>

<div class="p-2 rounded bg-purple-50 border-2 border-purple-200">

### IP/名人

Muhammad Ali · Elvis Presley · Marilyn Monroe · Shaquille O'Neal · David Beckham · Sports Illustrated

</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<span class="font-bold">批评者说</span>：ABG 是"标志性品牌的坟场"——很多品牌如果有正确的管理可以重回昔日辉煌，但在 ABG 手中只是被当成授权费来源。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<span class="font-bold">现实是</span>：冲浪和滑板品牌受冲击最大——不住在海边、不参与板类运动的年轻消费者并不关心这些品牌，他们关心的是 Chrome Hearts。
</div>

</div>

---
layout: default
---

# Khosla Ventures 的团队哲学

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 人才标准

- 所有 MD 都是**连续创业者，全部是技术背景**
- Samir 自己发过 4 篇 Nature 和 1 篇 Science 论文——"在看到损益表之前"
- 推崇**通才**而非专才——"专才型基金在风口期表现很好，但风口会过去"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 不做"功劳分配"

Samir 说 Khosla **拒绝追踪"谁做了哪个交易"**——这经常让 LP 抓狂。但他们的逻辑是：每个人技能独特，最好的卖给创业者的是"整个团队"。他们告诉创业者："你不只是在和 Samir 合作，你在和所有人合作。"

</div>

</div>

<div class="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 指标是创业者说了算

"你的最佳评估者不是我。如果 CEO 们打电话给我说'我们想要更多某某某的时间'或'他们带来了巨大价值'——那才是真正的评估。"

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 文化公式

"**带来价值，并且合作起来有趣**。我们每周五天在办公室。低自我。20 年来几乎没有人员流动、没有政变。"

</div>

</div>

---
layout: default
---

# 创始人该卖老股吗？天使投资人的艰难选择

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### Samir Kaul 的观点

- 天使投资人卖老股是**天使和创始人之间的私人约定**
- 如果天使财力雄厚且不需要现金，卖股会让他不舒服
- 创始人卖股需要更细致的判断

</div>

<div>

### 创始人卖股的判断框架

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
✅ $500 万以内 — 买房、孩子大学学费、给点压力释放 → 可能反而让他们更大胆
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm mt-2">
❌ 超过 $1000 万 — "不可接受"，Samir 需要"真正理解发生了什么事"
</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
主持人 Jordy 分享自己的困境：在过去六个月里多次想在新一轮中出掉全部仓位，但觉得"太粗鲁"，所以每次都选择"骑到底"。
</div>

---
layout: default
---

# 本期核心要点回顾

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-1">🧬 AI + 生物</div>
AI 首次设计出自然界不存在的新病毒——加速的同时降低了门槛。核心问题：工具本身中性，但谁来用、怎么用决定一切。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-1">🔬 Jeff Dean</div>
Google 传奇通过 Discovery Loop 探索 AI 驱动的科学研究。Khosla 投资逻辑：不要通用模型，要解决具体科学问题。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-1">🏛️ 诉讼模式</div>
社交媒体成瘾诉讼正在复制烟草 MSA 的路径。从个体受害者到机构成本，$9 亿只是开始。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-1">💻 AI 成本</div>
Databricks：智能路由降本 30%，每两周有新模型打破效率前沿。关键是快速迁移——树倒林中无人听。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700 mb-1">📺 直播电商</div>
Whatnot 证明直播让卖家赚到真金白银，不是广告分成。75% 百万卖家 90 天内达标。幂律仍然存在，但中间阶层比传统平台健康得多。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-1">💰 VC 哲学</div>
Samir Kaul：通才优于专才，失败率 60% 才是合理水平，pro rata 默认是可耻的。真正回报来自早期深度参与。
</div>

</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句话：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"这是历史上第一次，AI 被用来设计在真实世界中运行的全新病毒。"
<div class="text-xs opacity-60 mt-1 not-italic">— 主持人 John 总结 Science 研究的核心意义</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"Jeff 在 Google 工作了 27 年，参与了所有重要的事——Google Brain、TensorFlow、TPU。现在他们抬起头来做一件不同的事。这本身就说明了一切。"
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Kaul 解释为什么投资 Discovery Loop</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"我们这门生意最美的地方在于：只能输掉 1 倍的钱。但在 OpenAI 这样的公司上，我们可以赚 1000 倍。"
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Kaul 阐述 VC 的风险逻辑</div>
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm">
"如果你有想法、有联合创始人——昨天就开公司。别等。谁在乎？从哈佛退学，从 MIT 退学。"
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Kaul 给年轻创业者的建议</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">继续：</div>

<div class="space-y-3">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm">
"直播视频是零售生意的终极媒介——相当于一家没有固定成本的实体零售店。"
<div class="text-xs opacity-60 mt-1 not-italic">— Grant LaFontaine 解释 Whatnot 的核心价值</div>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded italic text-sm">
"在年收入超百万的卖家中，75% 在 90 天内达到了 50 万美元的年销售速率。"
<div class="text-xs opacity-60 mt-1 not-italic">— Grant LaFontaine 揭示 Whatnot 的增长速度</div>
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded italic text-sm">
"按比例跟投作为默认选项是**可耻的**。市场给了你在中场休息时改变赌注的机会，不评估就是愚蠢。"
<div class="text-xs opacity-60 mt-1 not-italic">— Samir Kaul 的 Pro Rata 哲学</div>
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded italic text-sm">
"就所有实际目的而言，DeepMind 已不再是前沿实验室——Google 现在根本无法留住顶级 AI 人才。"
<div class="text-xs opacity-60 mt-1 not-italic">— Semi Analysis 对 Google/DeepMind 的判断</div>
</div>

</div>

---
layout: end
---

# 谢谢观看

<div class="mt-8 text-sm opacity-60">

完整节目：[TBPN · AI Viruses, OpenAI's First Device, WSJ Mansion Section](https://share.transistor.fm/s/a03bb8de)

嘉宾：Samir Kaul (Khosla Ventures) · Patrick Wendell (Databricks) · Grant LaFontaine (Whatnot)

</div>

<div class="mt-6 text-xs opacity-40">
返回 [声笺 Resonote](/)
</div>
