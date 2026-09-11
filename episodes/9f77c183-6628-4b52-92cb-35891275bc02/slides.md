---
theme: academic
colorSchema: light
diagramMode: static
title: Stacie Mintz：把质性基本面转成量化因子
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Stacie Mintz：<br>把质性基本面转成量化因子

<div class="mt-8 text-lg opacity-80">Flirting with Models · S7E33</div>
<div class="mt-3 text-sm opacity-70">PGIM Quantitative Solutions 量化股票主管谈：风险模型、基本面因子与 LLM 研究</div>

---
layout: default
---

# 从策略结构到文本信号

<div class="rn-note rn-note-wide" data-note-diagram="topics" role="group" aria-label="本期讨论的四个问题">
<div class="rn-note-cards grid grid-cols-2 gap-3 mt-4">
<div class="rn-note-card bg-blue-50 border-l-4 border-blue-500 p-3"><div><strong>模型为何要自建</strong><p>风险模型会改变组合，而不只是约束组合。</p></div></div>
<div class="rn-note-card bg-green-50 border-l-4 border-green-500 p-3"><div><strong>何为基本面量化</strong><p>每个因子要有经济逻辑，并适合特定公司。</p></div></div>
<div class="rn-note-card bg-purple-50 border-l-4 border-purple-500 p-3"><div><strong>怎样面对冲击</strong><p>多数时候坚持模型，少数情形由团队介入。</p></div></div>
<div class="rn-note-card bg-orange-50 border-l-4 border-orange-500 p-3"><div><strong>LLM 放在何处</strong><p>用它抽取文本信息，也要防范泄漏与幻觉。</p></div></div>
</div>
<p class="rn-note-caption">本期从 PGIM 的研究实践出发，讨论量化模型如何保留可解释的基本面判断。</p>
</div>

---
layout: two-cols-header
---

# 1996 年的起点：把行为偏差变成可研究的问题

::left::

PGIM 当时为一位多资产客户管理指数基金。客户认为主动经理的表现不够稳定，希望团队尝试指数之外的股票策略。

- 市场已熟悉低市盈率、高动量等异常现象。
- 团队把投资者过度自信、损失厌恶、锚定买入价等行为偏差，作为解释异常的线索。
- 关键不只是发现异常，而是判断它是否持续、在哪些股票上更有用。

策略于 1996 年上线；1999 年，团队发表有关行为偏差、估值与主动管理的论文。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="research-origin" role="group" aria-label="策略形成过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>客户难题</strong><p>寻找比指数更主动的做法。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>行为研究</strong><p>辨认偏差在哪些股票中更明显。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>系统化策略</strong><p>把可持续的异常转成研究框架。</p></div></div>
</div>
</div>
</div>

---
layout: two-cols-header
---

# 自建风险模型，是为了不让风险约束抵消研究结论

::left::

Mintz 说，组合由 alpha 模型与风险模型共同决定。团队早期同时看重成长与价值，却发现外部风险模型把价值暴露识别为风险，持续将其削弱，组合因而失去原本的平衡。

1999 年转向自建模型后，团队可以：

- 按自己的定义衡量并分散风险；
- 随数据和研究演进调整模型；
- 将客户的偏好或额外信息纳入风险管理。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="portfolio-construction" role="group" aria-label="风险模型对组合的影响">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>研究信号</strong><p>成长与价值本应在组合中平衡。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>外部约束</strong><p>把价值一侧视为风险并压低。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>自建模型</strong><p>按团队的风险判断配置与分散。</p></div></div>
</div>
<p class="rn-note-caption">风险模型并非组合构建后的附属环节；它会决定哪些 alpha 观点能够保留。</p>
</div>
</div>

---
layout: default
---

# 2007 年量化震荡暴露了拥挤风险

<div class="rn-note rn-note-wide" data-note-diagram="crowding" role="group" aria-label="量化策略拥挤的扩散过程">

```mermaid
flowchart LR
  unwind[量化对冲基金平仓] --> deleverage[更广泛的去杠杆]
  deleverage --> crowding[相似策略同时承压]
  crowding --> lesson[风险模型须重视分散]
```

<p class="rn-note-caption">Mintz 将 2007 年 8 月的事件描述为从一处平仓蔓延的去杠杆。PGIM 的不同风险模型没有隔绝冲击，但使其配置与许多同业不完全相同。</p>
</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
<div class="rounded bg-red-50 border-l-4 border-red-500 p-3"><strong>拥挤的来源</strong><br>若许多机构使用相近的历史风险判断，可能被引导到同一只看似较低风险的股票。</div>
<div class="rounded bg-green-50 border-l-4 border-green-500 p-3"><strong>模型的取向</strong><br>PGIM 当时更强调分散特质风险，而非断言哪只股票未来一定较安全。</div>
</div>

---
layout: default
---

# 金融危机后，研究标准加入了差异化与可实施性

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">
<div class="rounded bg-blue-50 border-l-4 border-blue-500 p-3"><strong>问题</strong><p>智能贝塔 ETF 能以较低成本提供简单因子暴露。</p></div>
<div class="rounded bg-purple-50 border-l-4 border-purple-500 p-3"><strong>研究方向</strong><p>从简单的估值或价格信号，扩展到质量、替代数据与公司基本面。</p></div>
<div class="rounded bg-orange-50 border-l-4 border-orange-500 p-3"><strong>筛选标准</strong><p>候选想法要符合投资理念，也要有差异、规模化条件与落地可行性。</p></div>
</div>

<div class="mt-5 rounded bg-yellow-50 border-l-4 border-yellow-500 p-3 text-sm leading-relaxed">
团队每年 12 月举办内部研究提案会：研究员提出三四个想法，资深与初级研究员、投资组合经理共同质询。它决定研究议程，而不是自动把表现最好的回测结果投入模型。
</div>

---
layout: default
---

# 基本面量化：因子必须说得清为何有效

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
<div class="rounded bg-green-50 border-l-4 border-green-500 p-3"><strong>目标公司的样子</strong><p>有成长前景、质量较高，且价格合理；模型试图系统化地复现传统选股者会做的判断。</p></div>
<div class="rounded bg-blue-50 border-l-4 border-blue-500 p-3"><strong>接受一个新因子的条件</strong><p>除了统计表现，还要理解其经济逻辑、适用的市场环境，以及它与现有因子的互补关系。</p></div>
</div>

<div class="mt-5 rounded bg-red-50 border-l-4 border-red-500 p-3 text-sm leading-relaxed">
模型的位置有限。一个缺乏解释、只是历史回测好看的信号，会挤占已有因子的权重，也难以判断它在未来压力期会怎样表现。
</div>

---
layout: two-cols-header
---

# 融资因子：同样增长，资金来源也有区别

::left::

金融危机后，团队把公司如何为增长融资纳入质量研究。

- 对一组增长公司，依靠经营现金流推进项目者，在其研究中往往优于反复向市场募资者。
- Mintz 的解释是：外部资金充裕时，企业可能继续投资边际回报较低的项目；受内部现金流约束时，取舍会更严格。
- 这个概念先以较简单的方法实现，之后随新增信息和技术继续演化。

该因子把融资方式视为一项与增长质量相关的候选信号，不对单一公司的融资行为作道德判断。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="financing-factor" role="group" aria-label="融资因子的经济逻辑">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>增长需求</strong><p>同一行业的公司都在投入扩张。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>资金约束</strong><p>内部现金流会迫使项目排序。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>质量线索</strong><p>观察融资方式与后续表现的关系。</p></div></div>
</div>
</div>
</div>

---
layout: two-cols-header
---

# 因子按公司所处阶段调整权重

::left::

PGIM 将因子归为成长、联结、质量与估值四组。分类便于沟通与业绩归因；实际模型中的相互作用更复杂。

同一套因子不会等权用于每家公司：

- 增长快、处于较早阶段的公司，更看重未来增长；
- 成熟、稳定的公司，更看重估值与买入价格；
- 质量在两端都重要。

这是一套每日、逐公司运行的系统化权重调整，不是投资经理的临时判断。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="adaptive-weights" role="group" aria-label="按公司生命周期调整因子权重">
<div class="rn-note-tiers">
<div class="rn-note-card"><div><strong>高增长、较早阶段</strong><p>成长因子权重更高；估值不是主要判断。</p></div></div>
<div class="rn-note-card"><div><strong>成熟、较稳定阶段</strong><p>估值因子权重更高；重视折价与收入流。</p></div></div>
<div class="rn-note-card"><div><strong>汇总为组合</strong><p>成长与价值的平衡，来自不同类型的股票。</p></div></div>
</div>
</div>
</div>

---
layout: default
---

# 联结因子：从公司之间的信息流寻找线索

<div class="rn-note rn-note-wide" data-note-diagram="linkages" role="group" aria-label="公司联结与信息传递">

```mermaid
flowchart LR
  event[公司 A 的新信息] --> company[公司 A]
  company --> supplier[直接供应商]
  supplier --> downstream[供应商的供应商]
  company --> peers[其他可测关系]
```

<p class="rn-note-caption">行业联动是最直观的例子。PGIM 还尝试识别跨行业、跨国家的客户—供应商等关系，并衡量关系强度，以判断信息冲击可能传到哪里。</p>
</div>

<div class="mt-4 rounded bg-purple-50 border-l-4 border-purple-500 p-3 text-sm leading-relaxed">
联结因子不是直接重复公司的成长指标：它从其他公司与其关系中，补充观察增长前景与冲击传导。
</div>

---
layout: default
---

# 不直接使用价格动量，改看事件附近的信息动量

<div class="rn-note rn-note-wide" data-note-diagram="momentum-comparison" role="group" aria-label="价格动量与信息动量的比较">
<div class="rn-note-compare grid grid-cols-2 gap-3 mt-4">
<div class="rn-note-card bg-red-50 border-l-4 border-red-500 p-3"><div><strong>价格动量</strong><p>价格变化里混有公司事件、行业冲击与投机噪声，未必都能归因于企业本身。</p></div></div>
<div class="rn-note-card bg-green-50 border-l-4 border-green-500 p-3"><div><strong>信息动量</strong><p>围绕公司特定事件观察价格反应，试图保留信息部分、排除较无关的波动。</p></div></div>
</div>
<p class="rn-note-caption">Mintz 说，团队的研究认为信息动量长期效果不弱于价格动量，但下行风险约为后者的一半。这是其因子设计同时考察风险与收益的例子。</p>
</div>

---
layout: default
---

# 数据越来越常见，难处转到加工与使用

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">
<div class="rounded bg-blue-50 border-l-4 border-blue-500 p-3"><strong>数据本身</strong><p>Mintz 认为独家数据过去更重要；如今数据较容易取得，但大规模获取仍有成本。</p></div>
<div class="rounded bg-yellow-50 border-l-4 border-yellow-500 p-3"><strong>加工选择</strong><p>需判断相关性、变换和标准化方式、时间窗口、时间加权，以及如何处理缺失值。</p></div>
<div class="rounded bg-green-50 border-l-4 border-green-500 p-3"><strong>使用位置</strong><p>还要决定因子在何种公司上更有效，而非把同一权重套到整个股票池。</p></div>
</div>

<div class="mt-5 rounded bg-purple-50 border-l-4 border-purple-500 p-3 text-sm leading-relaxed">
PGIM 的模型按地区约有 25 到 40 个概念，每个概念可能包含多个组成部分。团队宁愿让每项都有明确作用，也不希望堆叠数百个难以归因的信号。
</div>

---
layout: two-cols-header
---

# 市场冲击来临时：少改模型，也不能放弃判断

::left::

Mintz 把新冠疫情、迷因股热潮与 AI 视为会改变市场状态的基本面冲击。冲击难以事先预测，目标是让模型从不同角度观察公司，在不同环境中保持韧性。

- 新冠期间，团队强调不应因短期失效就推翻投资理念；人工裁量应当有限。
- 俄罗斯入侵乌克兰时，模型因估值便宜而看好俄罗斯，投资组合管理团队则认为需要调整。
- 事后复盘有时不会改变模型，有时会带来下一轮更能抵御冲击的研究线索。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="shock-response" role="group" aria-label="面对市场冲击的决策边界">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>冲击发生</strong><p>承认模型会有暂时不工作的时期。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>原则与例外</strong><p>一般坚持模型；特殊地缘情势由团队讨论介入。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>复盘研究</strong><p>找出可纳入下一版模型的教训。</p></div></div>
</div>
</div>
</div>

---
layout: default
---

# 回测不是通行证：先理解它在哪些时候会失灵

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
<div class="rounded bg-red-50 border-l-4 border-red-500 p-3"><strong>过于平滑的回测</strong><p>Mintz 对每年都表现良好的历史结果保持警惕：它可能隐藏了不合理的设定，而不是证明模型稳健。</p></div>
<div class="rounded bg-green-50 border-l-4 border-green-500 p-3"><strong>有弱点的回测</strong><p>若能解释弱点出现的原因，团队才能在未来相似的市场环境中知道模型的边界。</p></div>
</div>

<div class="mt-5 rounded bg-blue-50 border-l-4 border-blue-500 p-3 text-sm leading-relaxed">
新因子与新数据的历史可能只有五至七年，不再总能覆盖过去希望看到的二十年周期。对此，团队要求更深入地理解理论基础，并可能先以较低权重使用，积累更多观察。
</div>

---
layout: two-cols-header
---

# LLM 是研究工具，先有概念再选工具

::left::

团队不从 LLM 出发寻找用途，而是先明确希望加入模型或组合的概念、数据集与问题，再比较适合的工具。

- 从更简单的办法起步，再逐步增加复杂度；
- 在研究阶段理解工具到底改变了什么；
- 新因子的评估方式，决定了工具是否能安全地进入其余模型。

这套次序是为了避免强大的模型把原有、已验证的研究过程破坏掉。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="llm-discipline" role="group" aria-label="使用语言模型的研究顺序">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>投资概念</strong><p>明确想补充的基本面问题。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>工具选择</strong><p>从简单方法比较到更复杂模型。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>研究验证</strong><p>确认输出能否融入现有模型。</p></div></div>
</div>
</div>
</div>

---
layout: two-cols-header
---

# 把董事会构成这类质性信息转成可比信号

::left::

公司文本数据的覆盖面很广：财报电话会记录、新闻等都能提供信息。难点不在于取得文字，而在于抽取真正相关的内容，并让不同公司、行业与地区的结果可以比较。

董事会是一个例子。团队不只看履历，还试图描绘董事在不同董事会之间的联结：有价值的董事可能同时服务于多个企业，由此形成信息流动的渠道。

其研究发现，对经营困难的公司，董事会联结较强者往往比同业更有韧性。这是观察到的关联，而非对单一公司的保证。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="qualitative-to-score" role="group" aria-label="从文本到可比董事会信号">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>文本资料</strong><p>取得企业与董事会相关信息。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>联结提取</strong><p>识别董事会之间的关系与强度。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>可比评分</strong><p>在投资股票池中转为可比较的分数。</p></div></div>
</div>
</div>
</div>

---
layout: default
---

# LLM 输出要经得起时间、版本与重复提问的检验

<div class="rn-note rn-note-wide" data-note-diagram="llm-validation" role="group" aria-label="语言模型研究的验证控制">
<div class="rn-note-cards grid grid-cols-2 gap-3 mt-4">
<div class="rn-note-card bg-red-50 border-l-4 border-red-500 p-3"><div><strong>控制测试数据</strong><p>防范幻觉、前视偏差与记忆化；模型可能从线索猜出股票并倒推结果。</p></div></div>
<div class="rn-note-card bg-blue-50 border-l-4 border-blue-500 p-3"><div><strong>选择可外样本检验的模型</strong><p>模型应采用较新的技术，也要留出其发布后的测试时段。</p></div></div>
<div class="rn-note-card bg-purple-50 border-l-4 border-purple-500 p-3"><div><strong>交叉比较回答</strong><p>用多个模型回答相近问题，并测试同一模型对重复或微调提示的稳定性。</p></div></div>
<div class="rn-note-card bg-green-50 border-l-4 border-green-500 p-3"><div><strong>回到销售与盈利</strong><p>最终检查抽取的洞见能否与公司的销售或盈利建立联系。</p></div></div>
</div>
<p class="rn-note-caption">这些检查针对的是研究过程中的模型风险；它们不保证单一信号一定预测正确。</p>
</div>

---
layout: end
---

# 可解释性贯穿模型的每一层

<div class="mt-8 text-lg leading-relaxed opacity-85">
从风险模型、融资方式和公司联结，到 LLM 抽取的文本特征，Mintz 的标准一致：信号要有基本面解释，知道它适用于哪里、可能在哪些环境下承压，并能放回整个组合中检验。
</div>

<div class="mt-8 text-sm opacity-70">本期嘉宾：Stacie Mintz · PGIM Quantitative Solutions</div>
