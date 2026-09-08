---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "154: 从千问变动到「AI 英雄传」|与 DINQ 高岱恒聊传奇 AI 研究员们"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 从千问变动到「AI 英雄传」

## 与 DINQ 高岱恒聊传奇 AI 研究员们

<div class="mt-10 text-lg opacity-70">晚点聊 · 第 154 期 · 2026 年 3 月</div>

<div class="mt-18 text-sm opacity-50">嘉宾：高岱恒（Sam）｜DINQ 创始人、前阿里达摩院算法工程师</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 千问变动

团队变动后，DINQ 上与千问相关的搜索量上升；人才流动如何被市场感知？

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 开源生态

模型、数据集、应用与评论汇聚的平台，为什么像 AI 时代的 GitHub？

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 作品定价

论文、代码、模型与项目，正在成为研究者被发现和议价的公开凭据。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 英雄传视角

Sam 从技术作者的反差经历里，寻找研究者如何成长、坚持与转向。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 人才搜索

招聘方从具体论文、项目或条件出发，在分散的公开信息中寻找候选人。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 工作形态

当模型压缩需求对齐与执行时间，长期岗位会不会转向更短的任务协作？

</div>

</div>

---

# 一次团队变动，怎样传到人才市场

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DINQ 的观察

<div class="text-3xl font-bold text-blue-600 my-2">3 倍</div>

Sam 说，变动后与千问相关的搜索量约为此前三倍。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 搜索内容

<div class="text-3xl font-bold text-orange-600 my-2">约两三千条</div>

查询围绕团队成员，以及千问既有论文的作者信息。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 热门方向

<div class="text-lg font-bold text-purple-600 my-2">大模型 · 强化学习 · Agent</div>

图像和语音相关查询相对更少；主要搜索者是 HR 与猎头。

</div>

</div>

<div class="mt-6 text-sm opacity-70">这些数字来自 Sam 对其产品查询的描述，展示的是一次变化被招聘市场捕捉到的速度，而非人才去向的统计。</div>

---
layout: two-cols-header
---

# 千问的影响力，来自模型家族与使用反馈

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">Sam 以 Hugging Face 和魔搭社区的下载量为例，认为千问已进入全球开源模型的第一梯队。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">从小尺寸模型到图像、视频、推理和 Embedding，较完整的家族让研究与部署有不同入口。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">对算力有限的学生和研究者，能直接调用或复用的开放模型，会影响论文中的实验选择。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./qwen-ecosystem.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 对学术界，开放模型会变成默认选项

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 从可用到常用

Sam 提到，2023 年下半年起，已有团队在论文中写入千问模型；当更多人沿用同一工具，它就接近事实标准。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 从模型到研究环节

模型可以充当 Agent 的核心组件，也可进入其他实验链路。研究者看重的是能否完成任务，不只是榜单名次。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">NeurIPS、CVPR 等会议的论文，是 Sam 判断模型影响力的观察窗口。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">具身智能也会需要低延迟、低算力消耗的端侧模型尺寸。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">“下载量”不是模型能力的全部，却能显示生态是否持续采用。</div>

</div>

---

# 魔搭社区：不只是一个模型货架

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 承载什么

在 Sam 的理解中，Hugging Face 和魔搭社区都在承载模型、数据集和应用；应用还可以以 Spaces 等形式被直接体验。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 反馈什么

下载、调用、点赞和评论会留下使用信号。平台能借此判断前沿开发者与研究者正在关心哪些项目。

</div>

</div>

<div class="mt-4 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">Sam 认为，托管推理和存储可以带来直接收入；但对阿里而言，魔搭的战略价值更可能在于连接开发者、模型和技术反馈，而不只是单项服务的收入。</div>

---

# 模型团队与大组织：一段需要协商的关系

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 研究者的目标

做出能署名、能被同行使用的成果；它可能是一篇论文、一个训练框架，或一个开源项目。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 组织的目标

把算力、数据、产品和商业节奏放进同一套优先级，持续改进模型在真实任务上的表现。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 张力所在

研究者需要探索空间；组织则要决定资源究竟投向开源、模型性能，还是 Agent 的使用能力。

</div>

</div>

---
layout: two-cols-header
---

# Sam 的比喻：研究工作坊与资源提供者

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">Sam 把前沿研究者比作追求代表作的工匠或艺术家：离开组织后，作品仍是最能说明能力的东西。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">大型组织提供算力、数据和协作环境；研究者以技术判断和实验推进，产出可被外界检验的成果。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">这不是历史事实的等同，而是 Sam 用来理解研究者与商业组织关系的一种比喻。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./workshop-relation.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 在这个市场里，作品正在替简历说话

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 能力的凭据

一作论文、训练框架、数据处理工具、模型项目，都可能成为研究者独立完成问题闭环的证据。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 评价的变化

Sam 认为，学历和工作经历仍会被参考，但公开成果在前沿岗位的定价中越来越重要。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 发现的入口

招聘方会在 GitHub、论文和开源社区里寻找痕迹；作品让非传统背景的人也有被看见的机会。

</div>

</div>

---
layout: two-cols-header
---

# 从作品到机会：公开贡献形成一个循环

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">做出一个可用的项目，首先带来的是同行反馈，而不是一份自动到来的 offer。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">但公开贡献让技术负责人能直接判断项目、代码或论文的质量，减少只靠履历猜测的环节。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">被联系、进入新的协作，再反过来带来下一件作品。Sam 把这看作创作者的正反馈。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./works-discovery.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Sam 的起点：从土木到 AI，不是一条预设路线

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 2017 年

Sam 当时担心继续原来的方向难以找到工作；恰好遇到 AI 课程与 AlphaGo 之后的上一轮热潮。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 先从视觉任务入手

毕业后，他做过图像检测、目标理解和行人重识别等工作，并开始寻找能留下个人痕迹的项目。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 后来的选择

他把这段经历归为难以规划的路线：不是先设定身份，再按图索骥，而是在开源贡献中逐步获得反馈。

</div>

</div>

---

# PyTorch：从改拼写错误开始的开源正反馈

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 为什么选 PyTorch

2018 年前后，Sam 看中动态图带来的断点调试能力：写神经网络时能更早发现问题。相较之下，他把 TensorFlow 的静态图体验视为更难排错。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 第一次贡献很小

他承认自己当时看不懂底层代码，于是逐个文件查找英文拼写错误。几处修改被合入主仓库，成为继续投入的起点。

</div>

</div>

<div class="mt-4 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm">先得到一次真实而微小的反馈，再把目标从拼写修正推进到图像、视频技术的开源贡献——这是他讲述个人经历时最清楚的一条递进线。</div>

---

# DeepFaceLab：一个项目怎样改变问法

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 参与时间

Sam 说自己在 2019 年参与 DeepFaceLab，主要负责算法部分。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 面向非技术用户

项目把影视级换脸流程尽量封装成脚本操作，让不懂代码的人也能完成合成。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 作品带来的变化

项目之后，外部开始主动联系他讨论机会；技术负责人更关心他做过什么，而不先追问学校和专业。

</div>

</div>

---

# 一段代码，为什么会引出一篇人物故事

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### StyleGAN 的迁移

2019 年，Sam 想把 NVIDIA 的 StyleGAN 从 TensorFlow 迁移到 PyTorch。迁移版本获得数百到上千个 GitHub star。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 从代码回溯作者

他被代码质量打动，继而去寻找作者 Teemu Karras 的经历；发现这位研究者并不符合他预设的湾区资深工程师形象。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">这类反差是 Sam 开始收集 AI 人物故事的原因：技术成果有出处，而人的路径常常比默认叙事复杂。</div>

---

# Alec Radford：在主流之外押注下一词预测

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 当时的实验室主流

Sam 讲述，早期 OpenAI 里强化学习得到较多正反馈：机器人、游戏等任务都能展示结果。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 另一条路线

Alec Radford 持续做 next token prediction。Sam 提到，GPT-1 曾向 ICLR 投稿被拒，GPT-2 以博客形式发布。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 故事的重点

Sam 不把它讲成单纯的天才叙事：在同伴不断有成果的环境里，选择不热门方向也意味着承受更长的等待。

</div>

</div>

---

# 「AI 英雄传」关心的不是名人名单

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 反差让故事可记住

Sam 会追问重要技术的作者来自哪里、此前做过什么。没有大学文凭的 Teemu Karras、华沙大学读大三时大量贡献 PyTorch 的 Adam Paszke，都改变了他的预设。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 叙事不代替证据

人物经历能帮助理解技术选择，却不应把偶然路径包装成可复制的成功公式。Sam 自己也把这些搜集称作工作之外的消遣。

</div>

</div>

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">他曾用荷兰风车画像祝贺一位 OpenAI 的技术联合创始人获奖，又在 2025 年 2 月前往 OpenAI 办公楼附近，希望接触 Jason Wei 等研究者。好奇心和持续联系，是这套“英雄传”方法的一部分。</div>

---

# 供给增长后，人才发现先要解决信息分散

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 投稿量的体感

Sam 回忆，ICLR 在 2020 年的投稿量约一两千篇；到访谈所处年份，他记得已超过三万篇。这个数字是他的估计。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 渠道在增多

论文之外，研究者还会在 GitHub、Hugging Face、Google Scholar、OpenReview 与不同社交平台留下信息。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 搜索的难处

信息不是不足，而是分散。尤其对非名校背景的年轻人，如何把这些痕迹聚合并让对的人看到，是招聘的实际难题。

</div>

</div>

---
layout: two-cols-header
---

# 一个人的公开足迹，如何变成可搜索画像

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">论文、代码、模型社区和个人表达分别记录不同能力；任何一个渠道都不完整。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">DINQ 的当前定位是信息聚合、展示与搜索，而不是已经完成所有撮合环节的交易平台。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">聚合的价值在于缩短发现时间：让招聘方从自然语言需求出发，看到可核查的公开轨迹。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./researcher-traces.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 造赛车的人，与驾驶赛车的人

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 研究者：造 F1 赛车

Sam 用这个比喻指代做算法、训练框架、基础设施与模型的人。他们把复杂系统做出来，但其影响未必马上被大众感知。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 应用创作者：驾驶赛车

当模型落在整理邮件、订餐或开发工具等具体任务上，用户更容易感到价值。Sam 因而认为，应用创作者的公众影响力往往更大。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">这不是对两类工作的高低排序，而是对 AI 阶段变化的描述：模型能力成熟后，谁能把能力带进具体体验，也会进入人才市场的视野。</div>

---

# 前沿研究的日常，是一套昂贵而脆弱的实验系统

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 失败来源很多

训练效果不佳，可能来自数据、集群、参数优化，或 MoE 结构中的细节；很难把一次失败归因给单一环节。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 算力放大压力

Sam 用一次实验动用四千张卡举例：工程和研究判断之外，还要面对任务中断、资源浪费的心理压力。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 公司为何愿意高价找人

主持人提出，优秀团队的实验设计和技术判断若能提高算力利用效率，高薪就可能有经济上的解释；Sam 没把它简化为单一动机。

</div>

</div>

---

# 天价薪酬带来的，不只是羡慕

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 对研究者

Sam 说，他接触到的一部分人会把高薪视作尽快积累自由研究条件的机会：先集中工作几年，再退出 KPI 驱动的节奏。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 对组织

薪酬并没有消除压力。模型要在基准测试、训练资源和产品竞争中持续推进；报酬也可以被理解为对这种持续压力的补偿。

</div>

</div>

<div class="mt-4 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">访谈没有给出“钱究竟打动谁”的定论。Sam 的回答是：这是人类历史上罕见的报酬水平，他也不确定它会怎样长期改变人的选择。</div>

---

# 能坚持，不等于把每一次实验都当成决战

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 长期判断

研究者要能在一段时间没有成果时继续做下去；热门方向的快速反馈，未必等于更有影响力的工作。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 平常心

复杂系统里错误很多。Sam 的建议是接受日常试错，不让每一个问题都耗尽精力。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 小环境

他还强调与志同道合者建立联系：在高密度竞争中，能够继续交流与工作，本身就是一种支持。

</div>

</div>

---

# DINQ 的前身：先做一个让人认识自己的小工具

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 2025 年春天

Sam 做了 Ding Roast：用户输入 Google Scholar、GitHub 或领英账号，获得经历分析与辣评。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 为什么有人来玩

在研究员高薪引发讨论的时期，很多人想知道自己的经历会怎样被衡量，也会拿朋友或知名研究者做比较。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 产品线索

用户愿意留下来，说明他们需要更好地理解和展示自己。Sam 由此转向更完整的人才信息产品。

</div>

</div>

---
layout: two-cols-header
---

# DINQ 当前做什么：把多源信息放进一次搜索

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">招聘方用自然语言描述方向、成果或经历；系统在论文、代码和其他公开资料里组织线索。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">对个人，聚合页面是低成本的分发入口：更容易被潜在的团队或项目发现。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">Sam 明确说，产品当时还处在信息聚合、展示和搜索阶段，真正的匹配会一步步继续做。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./dink-loop.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 招聘方如何搜索：美国更具体，中国更像筛选

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Sam 看到的海外用法

一些 CTO 或招聘经理直接拿一篇论文来搜：找作者、联系方式，以及相近方向的贡献者。起点是一个明确的技术信号。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 他看到的国内用法

查询更常写成一组条件，例如学会、研究方向、项目经验、年龄或社交活跃度。系统需要从较宽的候选池里筛选。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">这是 DINQ 用户查询所呈现的倾向，不足以概括所有公司的招聘习惯。Sam 也指出，按条件筛选常会重新强化学历等可量化锚点。</div>

---

# 资料很多，不等于一个人容易被找到

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 研究足迹很碎

一个人可能同时维护 GitHub、Hugging Face、Google Scholar、OpenReview、知乎、B 站、YouTube、X 等多个渠道。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 聚合解决什么

不是再增加内容，而是把已有内容组织成便于理解和比较的档案；Sam 用 Linktree 的 link in bio 说明这种思路。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 给年轻人的机会

如果研究者来自不那么显眼的学校或地区，公开作品加上清晰聚合，至少能降低被发现时的信息摩擦。

</div>

</div>

---
layout: two-cols-header
---

# 招聘代理的价值，发生在反复澄清需求时

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">起点可以是一篇论文，也可以是“找懂 Agent Flow 的人”这类较宽的描述。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">若第一批候选人不合适，招聘方补充或移除特征，代理再继续收窄。这比一次性关键词检索更接近真实工作流。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">Sam 把目标说得很具体：无论输入有多模糊，系统都应在对话中帮助用户找到想联系的人。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./search-iteration.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# “公开构建”与升学：两种不同的安全感

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 公开构建

Sam 认为，持续把好作品放到公共空间的人，有更高的被发现概率；但这条路的波动也更大，适合的人是少数。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 稳健路线

继续升学能带来导师、同学和研究资源。访谈并不否认它的优势，只是提醒：职业市场变化可能快过个人按既定路径积累的速度。

</div>

</div>

<div class="mt-4 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">Sam 的结论有一个前提：真正能靠公开作品被直接发现的人并不多。作品路径和教育路径并非互斥，而是提供不同的机会结构。</div>

---

# 当 AI 改变劳动，招聘也会重新定义“匹配”

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 原来的难点

复杂知识工作里，甲方往往不知道自己真正要什么；需求需要在长期协作中逐步磨合。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Sam 的推演

如果模型让需求对齐和执行都更快，原本需要数月的任务有可能压缩到数周；这是他提出的可能性，不是事实判断。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 匹配对象会变化

平台不只帮公司找长期雇员，也可能帮助有能力的人接到更具体、周期更短的任务。

</div>

</div>

---

# 未来招聘可能更关心什么

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 任务能力

非头部岗位常常先问：你能不能解决眼前的问题？这比抽象地问“你是谁”更接近用工方的需求。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### AI 原生经验

Sam 提到，一些创业公司会关心候选人的 token 消耗、所用产品和自动化经验，把它们当作了解工作方式的线索。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 指标不能代替判断

这些信号只是一叶知秋。论文引用、模型使用量或 token 消耗都可能遗漏重要能力，仍需要结合具体作品阅读。

</div>

</div>

---
layout: two-cols-header
---

# 从长期雇佣到动态任务：这是一个待验证的方向

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">过去的岗位关系往往包含长期培养、责任与协作；它不会因为工具变强就立刻消失。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">Sam 的判断是，AI 会加快一部分智力劳动的需求确认和执行，组织因而可能更多采用项目、顾问或外包式协作。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">若这种变化发生，人才产品的核心就会从简历撮合，延伸到人、任务与机会的持续匹配。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./task-market.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="text-xs opacity-50 mb-1">DINQ 的实时观察</div>“目前可能是千问吧。”</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-50 mb-1">研究者的工作方式</div>“就是他完整地在做一个作品。”</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-50 mb-1">作品改变交流方式</div>“我觉得非常舒服的一点是，就当你有了作品，没有人会面试你写代码这种东西了，因为不重要了。”</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><div class="text-xs opacity-50 mb-1">面对天价薪酬</div>“我说实在我不知道，因为就是人类历史上很难有一个时期就是搞智力的这个人能拿这么多的钱，好像很少。”</div>

</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="text-xs opacity-50 mb-1">给研究者的建议</div>“我认为最最大的一个点其实就是你得真喜欢、愿意坚持。”</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="text-xs opacity-50 mb-1">如何看待短期排名</div>“因为这我认为还是一场无限游戏嘛，无限游戏你为什么非要执着在明天就拿到第一名，那是短暂的第一名，对吧。”</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="text-xs opacity-50 mb-1">面对技术变化</div>“只能做好就是当下觉得比较重要的事情，有乐趣的事情。”</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><div class="text-xs opacity-50 mb-1">关于公开构建</div>“你一定不会被埋没，你只要真的在做一些好的东西，一定会有人找你，这是必然。”</div>

</div>

---
layout: end
class: text-center
---

# 留下作品，也照顾好自己

<div class="mt-10 text-xl leading-relaxed">“只能做好就是当下觉得比较重要的事情，有乐趣的事情。”</div>

<div class="mt-8 text-sm opacity-50">高岱恒（Sam）｜晚点聊第 154 期</div>
