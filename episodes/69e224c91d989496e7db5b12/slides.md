---
theme: academic
colorSchema: light
diagramMode: static
title: Vol.95 视频模型内卷、Agent爆发与大厂的焦虑---串台进击波财经
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 视频模型、Agent 与大厂焦虑

## 一场关于竞争速度、商业化与现实约束的讨论

<div class="text-sm opacity-70 mt-5">
屠龙之术 × 进击波财经 · 2026 年 4 月
</div>

<div class="text-xs opacity-50 mt-4">
嘉宾：庄明浩 · AI 创投从业者、屠龙之术主理人
</div>

---
layout: default
---

# 这期讨论的六个问题

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>视频模型为何先在中国卷起来</strong>
<div class="text-xs opacity-70 mt-1">高成本竞争拉高了继续留在赛场的门槛。</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Agent 为何从聊天走向任务系统</strong>
<div class="text-xs opacity-70 mt-1">模型之外的上下文、工具和反馈开始决定交付。</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>模型公司为何能被这样估值</strong>
<div class="text-xs opacity-70 mt-1">相对估值、标的稀缺和收入预期共同推高情绪。</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>大厂与软件公司在承受什么压力</strong>
<div class="text-xs opacity-70 mt-1">市场同时要求 AI 收入、产品入口与组织执行力。</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>硬件为什么跟不上软件</strong>
<div class="text-xs opacity-70 mt-1">产品立项和供应链按年推进，模型能力却按月变化。</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>繁荣叙事还缺什么验证</strong>
<div class="text-xs opacity-70 mt-1">用户规模、基础设施与财务回报尚未给出同一个答案。</div>
</div>

</div>

---
layout: two-cols-header
---

# 视频模型的竞争，先变成资金与耐力的竞争

::left::

<div class="text-sm leading-relaxed space-y-3">

庄明浩观察到，中国的视频模型厂商并非只有一两家：字节、快手、可灵、海螺以及多家初创公司都在投入。模型能力接近后，训练、推理和部署的成本让竞争更难退出。

美国一侧，他认为 Google 仍在多模态与视频方向持续投入；一些早期视频模型创业公司则开始转向聚合平台。Runway 被节目用作例子：平台接入多个模型，不再只售自家模型。

OpenAI 收缩视频方向，在他的解释中也与优先级有关：同时铺开的业务太多，而算力和组织资源需要回到核心模型战场。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="video-model-competition" role="group" aria-label="中美视频模型竞争状态">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>中国市场</strong><p>多家大厂与初创公司并行投入，短期不以盈利为先。</p></div>
<div class="rn-note-card"><strong>美国市场</strong><p>Google 仍在竞争；部分创业公司改做模型聚合服务。</p></div>
</div>
<p class="rn-note-caption">节目把差异归因于竞争者数量、资金储备和战略优先级，而非单一模型指标。</p>
</div>
</div>

---
layout: two-cols-header
---

# Agent 把重点从回答问题移到交付任务

::left::

<div class="text-sm leading-relaxed space-y-3">

节目沿用 OpenAI 的 L1 到 L5 分法，只讨论其中前三层：L1 是对话，L2 是带推理过程的回答，L3 则是能执行任务的 Agent。

庄明浩认为，用户开始关心 Agent 能否把事情做完，而非只关心它能否回答得漂亮。为此，系统必须理解任务标准和上下文，也要能接触文件、数据库、权限与电脑操作环境。

他用发动机与整车作比喻：基础模型和推理模型提供能力，但可用的任务系统还需要完整的操作环境。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="ai-capability-levels" role="group" aria-label="从对话到任务执行的能力层级">
<div class="rn-note-tiers">
<div class="rn-note-card"><strong>L1 对话</strong><p>围绕单次提问生成回答。</p></div>
<div class="rn-note-card"><strong>L2 推理</strong><p>给出推理过程与更复杂的答案。</p></div>
<div class="rn-note-card"><strong>L3 Agent</strong><p>围绕任务调用环境并交付结果。</p></div>
</div>
<p class="rn-note-caption">这是节目采用的解释框架，不是对所有 AI 产品的统一分级。</p>
</div>
</div>

---
layout: default
---

# Harness：模型之外的任务环境

<div class="text-sm leading-relaxed mt-3 mb-3">
节目提到 Harness 这个词，用来指模型外部那套让 Agent 能持续干活的结构。它没有标准答案，但目标是让系统能循环执行、发现偏差并修正。
</div>

<div class="rn-note rn-note-wide" data-note-diagram="agent-task-system" role="group" aria-label="智能体任务系统的三个组成部分">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>任务边界</strong><p>明确交付物、标准与限制。</p></div>
<div class="rn-note-card"><strong>执行环境</strong><p>读取上下文，使用文件、数据和权限。</p></div>
<div class="rn-note-card"><strong>反馈机制</strong><p>根据结果纠偏，决定继续或结束。</p></div>
</div>
<p class="rn-note-caption">模型厂商与外部开发者都在做这套结构；节目认为二者会相互影响，而不是简单分工。</p>
</div>

---
layout: default
---

# 模型公司的估值，先是一套相对参照

<div class="text-sm leading-relaxed mt-3 mb-3">
庄明浩提出过一个非常粗略的 1% 到 2% 参照：先找美国某一赛道最头部公司的市值，再把中国头部公司的估值放在其 1% 到 2% 附近比较。他强调，这个方法刻意没有计算收入、亏损或现金流。
</div>

<div class="rn-note rn-note-wide" data-note-diagram="model-company-valuation" role="group" aria-label="节目所述模型公司估值形成因素">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>相对参照</strong><p>用中美头部公司市值比例建立第一层锚点。</p></div>
<div class="rn-note-card"><strong>标的稀缺</strong><p>纯模型上市公司较少，资金集中追逐有限标的。</p></div>
<div class="rn-note-card"><strong>收入预期</strong><p>春节后的使用热度被市场理解为收入可能跳升。</p></div>
<div class="rn-note-card"><strong>情绪溢价</strong><p>相近公司的版本发布和涨跌会彼此强化。</p></div>
</div>
<p class="rn-note-caption">这解释的是节目观察到的定价逻辑，不构成财务价值判断。</p>
</div>

---
layout: two-cols-header
---

# 同一套估值叙事，也把风险推到未来

::left::

<div class="text-sm leading-relaxed space-y-3">

节目称，智谱和 MiniMax 从招股书反映的早期估值，已从这套 1% 到 2% 的粗略区间上行到约 5% 到 6%。庄明浩把上行归于稀缺、情绪和对 2026 年第一季度收入增长的预期。

他同时提醒，已披露财报主要反映此前年度，市场对新一轮收入的判断尚待后续数据验证。模型升级带来的股价联动，也未必能一直延续。

因此，节目并没有把高估值当作已经证实的商业成功，而是把它放回流动性和解禁节奏中观察。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="valuation-risk-windows" role="group" aria-label="节目所述的估值压力窗口">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>当前</strong><p>稀缺标的与收入预期支撑市场情绪。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>约六个月后</strong><p>首批基石投资人可能迎来解禁窗口。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>约十二个月后</strong><p>更广泛的解禁会考验买盘与基本面。</p></div></div>
</div>
<p class="rn-note-caption">这是受访者提出的潜在时间窗口，实际市场表现仍取决于模型、收入和整体情绪。</p>
</div>
</div>

---
layout: default
---

# 上市大厂面对的是另一张成绩单

<div class="text-sm leading-relaxed mt-3 mb-3">
庄明浩认为，市场没有按同一尺度看待所有公司。未上市公司可以持续投入而不必每季披露；阿里、腾讯等上市平台则会被追问 AI 对当期收入的直接贡献。他判断，后者目前的直接贡献仍很小。
</div>

<div class="rn-note rn-note-wide" data-note-diagram="platform-ai-scorecard" role="group" aria-label="不同公司面对的人工智能评估标准">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>未上市的投入者</strong><p>重点是持续投入、模型进展和下一轮融资空间。</p></div>
<div class="rn-note-card"><strong>上市的平台公司</strong><p>还要回答收入占比、财报节奏和旧业务的投入取舍。</p></div>
</div>
<p class="rn-note-caption">产品入口和生态仍是平台公司的优势，但组织调整与模型能力提升需要时间，不能只看一次产品跟进。</p>
</div>

---
layout: two-cols-header
---

# Anthropic 的企业路径，冲击的是既有软件预算

::left::

<div class="text-sm leading-relaxed space-y-3">

庄明浩把 Anthropic 近几个月的扩张归因于两件事：底层模型能力跨过了可用门槛，以及以编程方式解决任务的产品路线扩大到更多工作场景。

在这个叙事中，AI 编程产品不只服务工程师。用户同样是用一句任务描述换取结果，不必阅读底层代码；企业也可能把原本购买咨询、SaaS 或外包服务的一部分预算改为自行完成。

他以此解释 Anthropic 收入增长、软件股承压和 OpenAI 调整战略之间的关联，但也承认这是事后对竞争结果的解读。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="enterprise-and-consumer-ai" role="group" aria-label="企业与个人市场的两种人工智能商业路径">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>企业任务</strong><p>用 Agent 重做流程，预算可能从软件订阅转向内部执行。</p></div>
<div class="rn-note-card"><strong>个人产品</strong><p>依靠留存、时长、转化与个性化服务形成付费。</p></div>
</div>
<p class="rn-note-caption">节目认为企业单笔预算更大，因此两种收入曲线的差异会改变模型公司的战略重心。</p>
</div>
</div>

---
layout: default
---

# 成本优势存在，但模型竞争还没有进入稳态

<div class="text-sm leading-relaxed mt-3 mb-3">
主持人提出，中国厂商能否以更低成本做出足够好的模型。庄明浩认可成本是追赶过程中的直接优势，却认为能力曲线还在陡升，尚未到可以慢下来精细打磨的阶段。
</div>

<div class="rn-note rn-note-wide" data-note-diagram="china-model-competition" role="group" aria-label="节目所述中国模型竞争的三个条件">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>成本结构</strong><p>他用 1% 的投入量级说明中美成本差异可能很大。</p></div>
<div class="rn-note-card"><strong>能力仍在上升</strong><p>模型发布周期从半年缩短到数月，追赶还在加速。</p></div>
<div class="rn-note-card"><strong>付费开始改善</strong><p>用户愿意为算力、编程套餐和 Token 付费的迹象增多。</p></div>
<div class="rn-note-card"><strong>视频先给出信号</strong><p>节目提到 Seedance 2.0 短期多次提价，需求仍然存在。</p></div>
</div>
<p class="rn-note-caption">这些都是节目观察到的早期信号，不能据此断言质量与价格已经全面反超。</p>
</div>

---
layout: two-cols-header
---

# 硬件的时间表，落后于模型的时间表

::left::

<div class="text-sm leading-relaxed space-y-3">

软件模型可能几个月就换一代；硬件却要经历设计、开模、定产、铺渠道和销售。庄明浩说，正在热卖的产品很可能在更早的能力阶段就已经立项。

这使得 AI 玩具、眼镜等产品容易出现体验落差：消费者期待的是当下新闻里的 Agent 和模型，拿到手的却是按旧能力边界设计的设备。远程更新可以补一部分功能，但无法抹去产品定义时的限制。

他还提到，一些品类的退货率可能很高；加上直播和渠道成本、存储与芯片涨价，硬件公司必须承担更长的现金流压力。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="hardware-software-cycle" role="group" aria-label="模型迭代与硬件产品周期的错位">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>模型按月变化</strong><p>能力、产品形态和用户期待快速改变。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>硬件按年推进</strong><p>设计与供应链在较早阶段锁定规格。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>上市时形成落差</strong><p>产品常以旧一代能力面对新一代期待。</p></div></div>
</div>
<p class="rn-note-caption">节目用周期错位解释硬件体验不及宣传的现象，并非否定所有硬件形态。</p>
</div>
</div>

---
layout: default
---

# 眼镜和玩具暂时更多是在增强手机

<div class="text-sm leading-relaxed mt-3 mb-3">
节目没有否认硬件能改善某些场景，例如记录、拍摄、语音交互或连接车机；它质疑的是这些功能是否足以让普通人购买，并替代已经形成习惯的手机。
</div>

<div class="rn-note rn-note-wide" data-note-diagram="hardware-adoption-constraints" role="group" aria-label="人工智能硬件走向大众市场的限制">
<div class="rn-note-cards">
<div class="rn-note-card"><strong>核心体验</strong><p>眼镜先要看得清、戴得住，再谈智能功能。</p></div>
<div class="rn-note-card"><strong>购买理由</strong><p>特定车主或爱好者能受益，普通用户的理由仍不充分。</p></div>
<div class="rn-note-card"><strong>手机仍是枢纽</strong><p>许多设备依靠手机联网、查看内容或完成下一步操作。</p></div>
<div class="rn-note-card"><strong>规模尚有限</strong><p>小众用户可以支持品类，但不等于已经跨入大众市场。</p></div>
</div>
<p class="rn-note-caption">硬件的价值更接近补充既有生态；节目认为短期内看不到手机被整体替换。</p>
</div>

---
layout: end
---

# 需求扩张与现实约束，会同时存在

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed text-left">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-slate-800">
<div class="font-bold text-slate-800">扩张的一面</div>
<div class="text-xs text-slate-700 mt-1">视频模型仍有人愿意付费，Agent 开始进入工作流，AI 也在中国的内容、导览和办公生态中被日常使用。</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-slate-800">
<div class="font-bold text-slate-800">约束的一面</div>
<div class="text-xs text-slate-700 mt-1">算力、存储、数据中心建设和硬件周期都不是无限的；估值还要经受收入与流动性的检验。</div>
</div>

</div>

<div class="text-sm leading-relaxed mt-4 text-left">
节目借 AlphaGo 十周年回看技术冲击带来的焦虑，也保留了未决问题：更多人尚未真正使用 AI，而供给侧已经碰到许多物理和商业边界。下一阶段不能只用新故事或旧财务指标中的一项来判断。
</div>
