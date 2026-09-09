---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 重估一切，文艺复兴---2026H1 AI行业观察
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 重估一切，文艺复兴

<div class="mt-8 text-xl opacity-80">2026 H1 AI 行业观察</div>

<div class="mt-14 text-sm opacity-60">屠龙之术 · 明浩 · 2026 年 7 月</div>

---

# 为什么这期值得关注

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 01 硬件回到舞台中央

AI 资本开支流向芯片、存储、网络和能源，旧硬件公司的估值被重新审视。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 02 投入先于现金流

主持人把 CapEx、折旧、自由现金流和债务放在同一张账上讨论。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 03 模型竞争更拥挤

前沿厂商加快发布节奏；开源与闭源也沿着不同成本结构竞争。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 04 世界模型分出三路

渲染、物理模拟和行动规划被放进同一个术语，技术目标并不相同。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 05 Agent 改写产品形态

用户从对话提示转向交代任务；规划、工具调用、执行和评判被串成循环。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 06 人与治理成为后半场议题

创新与安全、主权与互通、效率与就业，都会影响 AI 的扩散路径。

</div>

</div>

---

# 文艺复兴是这期观察的叙事框架

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed text-left">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 复制成本下降

印刷术降低知识复制成本；主持人以推理成本下降类比智能进入基础设施。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 赞助人回归

美第奇赞助艺术家；今天的巨头资本把资金投向算力、模型和应用。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 新表征方式

透视法改变绘画、建筑和地图；世界模型试图表征三维世界的状态变化。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 对人的重新提问

人文主义讨论人的位置；智能体扩展工作边界后，这个问题再次出现。

</div>

</div>

---
layout: two-cols-header
---

# 一笔 CapEx 如何流向 AI 基础设施

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人估计，Google、Meta、亚马逊、微软、Oracle 等公司的资本开支会继续扩大。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">投入不只购买 GPU；Agent 工作负载也带来内存、CPU、存储和定制芯片需求。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">资本最终落到芯片、存储、网络、云设施与能源等供给环节。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./capex-flow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# 资本开支预测为何一再被上调

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">2024</div>
<div class="text-sm mt-2">高盛统计中，市场预期增长 19%，实际增长 54%。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600">2025</div>
<div class="text-sm mt-2">主持人列举的预期为 20%，实际增长达到 73%。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-3xl font-bold text-orange-600">2026</div>
<div class="text-sm mt-2">节目判断增长可能达到 80% 至 100%，属于当时的市场预期。</div>
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">这些数字描述的是资本开支增速。主持人用它说明：供给侧的投资节奏仍在加快，不等于收入已经同步兑现。</div>

---
layout: two-cols-header
---

# 存储从数据中心的配角变成成本焦点

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">节目给出的成本构成中，存储占比从 AI 热潮前约 2% 上升到 2026 年约 18%。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">算力芯片仍占最大份额，为 42%；存储的变化来自需求与价格的双重上升。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">每代英伟达芯片带来的存储需求增长，也让供给侧成为市场关注点。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./datacenter-cost.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# 存储的利润修复与周期风险同时存在

<div class="grid grid-cols-3 gap-3 mt-5 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-600">−33%</div>
<div class="text-sm mt-2">节目称，美光在 2023 年第一季度的毛利率曾为负 33%。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">85%</div>
<div class="text-sm mt-2">节目称，到 2026 年 5 月，美光毛利率可达 85%。</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-3xl font-bold text-yellow-600">约 4 年</div>
<div class="text-sm mt-2">主持人提醒，存储过去常呈现约四年的扩产与需求周期。</div>
</div>

</div>

<div class="mt-5 text-sm opacity-80">同一组数据既解释了存储股为何受追捧，也保留了供给扩张后需求回落的风险。</div>

---

# 投入之后，收入先覆盖哪一层成本

<div class="grid grid-cols-4 gap-3 mt-5 text-center text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">资本开支<br><span class="opacity-70">建设数据中心</span></div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">折旧<br><span class="opacity-70">设备成本摊销</span></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">固定与运营成本<br><span class="opacity-70">日常经营支出</span></div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">毛利与利润<br><span class="opacity-70">投资回报空间</span></div>

</div>

<div class="mt-5 p-4 rounded bg-red-50 border-l-4 border-red-500 text-left leading-relaxed">主持人的判断是，截至 2026 年第二季度，AI 行业整体收入刚够覆盖巨额资本开支的折旧。收入与投入之间存在时滞，现金流因而成为下一阶段的压力测试。</div>

---

# 同一本资本账，分成两种判断

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 乐观一侧：先投入，后兑现

模型能力、渗透率和 Token 消耗仍在增长；过去的技术革命也常经历收入晚于基础设施投资的阶段。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 审慎一侧：需求与债务

企业应用的落地速度未必追上供给扩张；高杠杆云服务商的利息和现金流被主持人列为风险来源。

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">这不是对泡沫是否存在的定论。节目借美第奇银行的历史提醒读者：声望与现金流需要分别核算。</div>

---

# 模型竞争从一次发布变成高频迭代

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 能力边界继续外推

主持人称，最新 Claude、GPT 与后续 Gemini 模型已能在没有人类持续参与时执行十几个小时的任务。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 多模型共存成为常态

代码、推理、多模态与长上下文各有领先者；OpenAI、Anthropic、Google、Meta、xAI、Mistral 与新实验室都在竞争。

</div>

</div>

<div class="mt-5 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm text-left">本期把目光从单次跑分移到研究、执行与反馈的连续循环：这一循环可能缩短下一轮迭代时间。</div>

---
layout: two-cols-header
---

# 模型厂商的共同方向：把反馈接回训练

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人用 OpenAI 的能力分级讨论从智能体走向研究者：模型开始参与研究任务。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他也引用 Anthropic 的叙事：人类与 AI 共同训练之后，模型可能承担更多训练环节。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">自动改进仍是竞争方向，模型发布节奏加快也让这条路线受到更多关注。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./model-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# 中美模型竞争走出两条技术路线

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 硅谷：闭源前沿模型

节目把它概括为大规模算力、旗舰产品与订阅收入驱动的路线，模型厂商更常选择闭源。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 中国：开源与扩散

主持人观察到，中国多家模型厂商更常选择开源，强调高效、低价和更广泛的分发。

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">这组对比是节目对主导趋势的概括，不代表每家公司都按同一种策略行动。</div>

---
layout: two-cols-header
---

# 开源让竞争不止发生在模型发布时

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">开源模型可被后训练并带入垂直场景，能力比较会延伸到基础模型之外。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主持人举例，Harvey 与合作方后训练智谱 GLM 5.1，并在其法律榜单取得第一名。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">他还提到 Cursor 的模型被发现基于 Kimi K2.5 后训练，说明技术路径会相互渗透。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./open-source-flow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# 资本规模与技术流动并不在同一张表上

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-2xl font-bold text-blue-600">美国</div>
<div class="mt-2">节目估计，主要巨头的开闭源投入合计约 7,000 亿至 1 万亿美元。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-2xl font-bold text-orange-600">中国</div>
<div class="mt-2">节目估计，阿里、百度、腾讯与字节合计约 1,000 多亿美元。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-2xl font-bold text-purple-600">开源</div>
<div class="mt-2">模型权重可被后训练和再利用，技术影响不完全由资本规模决定。</div>
</div>

</div>

<div class="mt-5 text-sm opacity-80">数字来自主持人在节目中的估计；他同时强调，中美之间很难做到完全隔离。</div>

---
layout: two-cols-header
---

# 世界模型把预测对象从词扩展到状态

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">节目以 1420 年透视法为类比：它提供了表达三维空间的新方式，也改写了绘画、建筑和地图。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">世界模型强调原生多模态：文本、图像、视频从训练开始融合，并处理几何、物理与语义。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">它的目标可能是看得更真、模拟更准，或让机器人与自动驾驶系统做行动规划。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./world-models.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# 同叫世界模型，技术路线并未收敛

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 杨立昆

主持人概括其主张：在潜在空间预测状态，而非生成像素。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### DeepMind

哈萨比斯所代表的方向，更强调多模态理解与世界模型的结合。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 李飞飞与 World Labs

主持人将其放在三维空间表征的路线中观察。

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">视频模型、3D 生成、自动驾驶和具身智能公司都在使用世界模型这个词，但它们面对的产品问题不相同。</div>

---

# Agent 的变化：从回答问题到交代任务

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 过去的交互

用户写提示词，模型返回一段结果；任务大多在单轮对话内结束。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 现在的交互

用户交代任务，系统自行规划、协作、调用工具、执行、纠错和评判，人保留监督位置。

</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm text-left">主持人将 Chatbot 的阶段性退场视为共识，产品重心转向能推进任务的智能体。</div>

---
layout: two-cols-header
---

# 一个 Agent 系统如何把任务做成循环

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">规划决定任务被拆成哪些步骤，也可以指定多个智能体的分工。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">工具调用把模型连接到代码、数据和外部系统；执行由这一层向前推进。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">纠错与评判会把结果送回循环，决定继续、修正或交给人处理。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./agent-workflow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# Coding 是 Agent 竞争最集中的场景

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">8 倍</div>
<div class="mt-2">Anthropic 称，Claude Code 发布后，内部技术员工人均代码提交量增长 8 倍。</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">2025 下半年</div>
<div class="mt-2">主持人把 Claude Code 的发布视为一个可能被回顾的行业时刻。</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-600">Q2</div>
<div class="mt-2">节目认为，Anthropic、Codex 与 Cursor 的竞争在这一核心场景中非常激烈。</div>
</div>

</div>

<div class="mt-5 text-sm opacity-80">代码不仅是一个应用场景，也被主持人视为让 AI 执行训练与工作流程的通用执行层。</div>

---

# 软件生态开始为 Agent 准备接口

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 面向人的软件

界面负责让人浏览、操作和理解；应用的主要终端是人类用户。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 面向 Agent 的软件

CLI、MCP、A2A 等协议让工具和服务可被程序调用；开源项目也从 LLM 工具链扩展到 Agent 执行工具链。

</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm text-left">UI 仍服务人类用户；当执行者加入 Agent，软件还要提供一层可调用、可组合的接口。</div>

---

# 中国市场进入办公 Agent 的产品密集期

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 字节

Trae、Coze，以及节目提到的海外相关应用。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 阿里

Qoder、Moolerun、悟空；节目提到钉钉团队已整合其中三个产品。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 腾讯

Workbuddy、QQClaw、Marvelous 都被主持人列入观察名单。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 其他模型厂商

智谱有 ZCode、AutoGLM；Kimi 有 Kimi Code、Kimi Work。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 旧业务退场

豆包与千问下线原有智能体业务；主持人认为它们更接近提示词打包。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 产品关系仍在变化

功能、界面和目标用户相近时，产品整合与取舍会继续发生。

</div>

</div>

---

# Agent 的商业问题尚未有统一答案

<div class="grid grid-cols-2 gap-4 mt-5 text-left text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 尚待解决

通用 Agent 做什么场景、由谁付费、怎样定价、To B 与 To C 的取舍，节目认为都还没有定论。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 已出现的产品外观

主持人认为 Codex 已经示范了一种产品形态：用户交代目标，系统显示任务、执行过程与结果。

</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm text-left">产品外观的收敛，并不代表商业模式已经收敛。它只说明用户开始习惯把一段连续工作交给软件处理。</div>

---

# 治理议题来自三组现实张力

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 创新与安全

节目用伪造画像举例：规则需要区分具体滥用与图像生成能力本身。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 主权与互通

模型与数据天然跨境，各国立法节奏不同，多边协调因而更困难。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 效率与就业

AI 从代码走向金融、法律、医疗和企业服务，工作的分配与社会情绪随之变化。

</div>

</div>

<div class="mt-5 text-sm opacity-80">节目把这些矛盾放在反全球化与主权国家竞争的背景里讨论，并未给出单一治理方案。</div>

---
layout: two-cols-header
---

# 治理面对持续取舍

::left::

<div class="space-y-3 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">创新与安全要求规则识别风险，也避免把一般能力一并压缩。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">主权与互通牵涉跨境模型和数据，难以只依赖一国立法解决。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">效率与就业会把产品能力转化为更广泛的社会分配问题。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4"><Excalidraw drawFilePath="./governance-tensions.excalidraw" class="w-[460px]" :darkMode="false" :background="false" /></div>

---

# Token 消耗不能代替商业价值指标

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 眼前的比较

节目举例，美国头部企业软件公司每月 Token 成本约为 7,000 至 7,500 美元。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 同一口径的参照

节目给出的软件工程师月均工资约为 1.5 万美元；这里比较的是月度成本，不是能力高低。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 尚未确定的终点指标

主持人回顾千瓦时、点击与 DAU/MAU 的演变，认为 AI 仍在寻找能代表商业价值的指标。

</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm text-left">ROI、按结果定价和资本开支拐点，是节目留给下半年的重点问题。</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-2 mt-4 text-sm leading-relaxed text-left">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“每一年对于CapEx的预期都是低估的”<div class="text-xs opacity-70 mt-1 not-italic">谈基础设施投资持续超出市场预期</div></div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">“现在的收入只够cover折旧”<div class="text-xs opacity-70 mt-1 not-italic">谈投入、折旧与现金流之间的时滞</div></div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">“AI从预测下一个词转向了预测世界的下一个状态”<div class="text-xs opacity-70 mt-1 not-italic">谈世界模型的表征目标</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“纯Chatbot已经到头了”<div class="text-xs opacity-70 mt-1 not-italic">谈产品重心转向可执行任务的 Agent</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“Code吞噬一切”<div class="text-xs opacity-70 mt-1 not-italic">谈代码成为 Agent 的执行层</div></div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">“人还是万物的尺度吗？”<div class="text-xs opacity-70 mt-1 not-italic">谈智能扩展之后的人文主义提问</div></div>

</div>

---
layout: end
---

# “当智能不再稀缺之后，人的位置到底在哪里。”

<div class="mt-8 text-lg opacity-80">明浩把这场 2026 年的讨论，落在人的责任、手艺、关系与传统上。</div>
