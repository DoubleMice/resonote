---
theme: academic
colorSchema: light
diagramMode: static
title: Ben Wellington：Two Sigma 的复杂特征工程
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# Two Sigma 的复杂特征工程

<div class="mt-7 text-lg opacity-80">Ben Wellington · Flirting with Models S7E32</div>
<div class="mt-3 text-sm opacity-70">从原始数据到预测信号：LLM 如何改变量化研究的实验边界</div>
<div class="mt-8 text-xs opacity-50">2026 年 7 月 · 57 分钟</div>

---
layout: default
---

# 本期围绕四个研究问题展开

<div class="rn-note rn-note-wide mt-4" data-note-diagram="本期问题" role="group" aria-label="本期讨论的四个研究问题">
<div class="rn-note-cards grid grid-cols-2 gap-3">
<div class="rn-note-card bg-blue-50 border-l-4 border-blue-500 p-3"><div><strong>特征是什么</strong><p>把原始观察整理成可检验的经济假设。</p></div></div>
<div class="rn-note-card bg-green-50 border-l-4 border-green-500 p-3"><div><strong>怎样避免重复</strong><p>新信号要与既有信号保持足够差异。</p></div></div>
<div class="rn-note-card bg-purple-50 border-l-4 border-purple-500 p-3"><div><strong>LLM 改变了什么</strong><p>文本可被生成，探索成本随之下降。</p></div></div>
<div class="rn-note-card bg-orange-50 border-l-4 border-orange-500 p-3"><div><strong>规模化后的约束</strong><p>模型控制、过拟合与人的原创性仍要处理。</p></div></div>
</div>
<p class="rn-note-caption">Wellington 的岗位在特征生成层；访谈也涉及组织结构、模型基础设施和研究者的职业能力。</p>
</div>

---
layout: two-cols-header
---

# 特征把观察变成可验证的问题

::left::

在 Wellington 的用法里，特征是对可交易对象的一条、具有经济意义的事实。它不等于原始数据，也不保证预测有效。

一周的价格变化、波动率、分析师是否刚调整评级、新闻覆盖相对历史是否异常、公告在何时发布，都可以成为候选特征。研究者先用对公司行为的理解筛出值得问的问题，再检验这些问题是否有预测力。

他因此反对把所有原始数据直接交给算法：人的假设先收窄搜索空间，机器才更容易识别可用的信息。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="特征生成" role="group" aria-label="从原始观察到预测起点的三个阶段">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>原始观察</strong><p>价格、公告、新闻或分析师行为。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>经济假设</strong><p>判断哪种变化值得单独研究。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>候选特征</strong><p>作为预测模型的输入，再接受检验。</p></div></div>
</div>
<p class="rn-note-caption">特征是研究起点，不是对未来价格的承诺。</p>
</div>
</div>

---
layout: two-cols-header
---

# 共享平台让研究成果能被继续使用

::left::

Two Sigma 有多个产品和组合；Wellington 说，做 alpha 预测的研究人员并不围绕某一个组合单独优化。来自不同角度的预测会汇总，再由组合层决定如何交易。

这使团队有理由把有效的特征集、机器学习方法或工具推到共享平台，供其他团队检验和复用。共享平台要吸收更多研究成果，再让它们进入更大的组合决策。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="研究成果的去向" role="group" aria-label="竞争团队与共享平台的研究成果去向">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>竞争型团队</strong><p>Wellington 认为，团队彼此竞争时，可能更倾向于在本地保留技术与投入。</p></div></div>
<div class="rn-note-card"><div><strong>共享平台</strong><p>特征、算法和工具可被推送给其他团队，再进入更大的组合决策。</p></div></div>
</div>
<p class="rn-note-caption">这是他对两类组织激励的概括，不是把行业机构归为两种固定模式。</p>
</div>
</div>

---
layout: two-cols-header
---

# 数据更常见后，研究重点转向怎么使用它

::left::

Wellington 没有否认专有数据的价值：Two Sigma 仍有长期积累和自有来源。但他观察到，过去十五到二十年里，数据获取本身的相对权重有所下降。

在他的描述中，优势不是三层中的单独一层。数据、特征和算法相互配合；其中，把相同资料转成别人未想到的观察，越来越依赖研究者的创造力。

分析师的一个例子说明了这一点：不只看上调或下调评级，还可考察覆盖对象、工作经历或与公司之间的其他可验证关联。单条信号很微弱，许多不同的问题合在一起才可能有意义。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="预测研究的三层" role="group" aria-label="量化预测研究中的数据特征和算法三层">
<div class="rn-note-tiers">
<div class="rn-note-card"><div><strong>数据</strong><p>拿到什么信息；获取难度在变化。</p></div></div>
<div class="rn-note-card"><div><strong>特征与假设</strong><p>从信息中提出有经济逻辑的问题。</p></div></div>
<div class="rn-note-card"><div><strong>算法</strong><p>从特征中提取可预测的部分。</p></div></div>
</div>
<p class="rn-note-caption">三层不是可相加的收益份额；Wellington 强调它们在同一研究过程中交汇。</p>
</div>
</div>

---
layout: two-cols-header
---

# 新特征先要经得起假设和相关性检验

::left::

创意不等于无边界地枚举变量。Wellington 说，研究人员会带着先验：某个现象为什么可能影响价格？如果检验方向与先验相反，不能只靠事后解释把结果留下。

第二个门槛是正交性。新闻情绪看似是新信息，实际上可能只是财报结果的滞后回声；这种与既有信号高度相关的发现，不能算新的预测来源。

不同背景的人共同提出问题也很重要。物理、数学和计算机科学的训练会带来不同的观察角度，但每个想法都仍要经过同一套检验。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="候选信号的检验" role="group" aria-label="候选特征从想法到纳入研究的四步检验">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>提出机制</strong><p>说明为什么这一观察可能有经济含义。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>写明先验</strong><p>在看结果前明确预期与使用方式。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>检验结果</strong><p>不把不合预期的结果事后合理化。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">04</span><div><strong>检查相关性</strong><p>确认它没有重复已有信号。</p></div></div>
</div>
<p class="rn-note-caption">Wellington 将正交性视为研究起点，而非模型完成后的附加检查。</p>
</div>
</div>

---
layout: default
---

# 信号的有效期取决于传导速度和拥挤程度

<div class="rn-note rn-note-wide mt-4" data-note-diagram="信号生命周期" role="group" aria-label="从经济事件到信号衰减的可能路径">
<div class="rn-note-steps">
<div class="rn-note-card"><div><strong>经济事件</strong><p>例如门店客流变动，可能要到后续销售披露才被广泛理解。</p></div></div>
<div class="rn-note-card"><div><strong>市场反应变快</strong><p>更多参与者获得并处理同类数据，价格可能更早调整。</p></div></div>
<div class="rn-note-card"><div><strong>监测并调权</strong><p>组合层跟踪 alpha 衰减，决定该信号的交易权重。</p></div></div>
</div>
<p class="rn-note-caption">不同假设对应不同预测期限。Wellington 说，竞争会令一些特征加速定价，甚至不再可用。</p>
</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm leading-relaxed">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>期限先于建模</strong><br>研究门店访问时，要估计信息传导到同店销售等可见结果需要多久。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>衰减不靠直觉处理</strong><br>模型与组合会被持续监测；发现机会或衰减后，再用业务回报判断是否更新。</div>
</div>

---
layout: two-cols-header
---

# LLM 让数据也能成为可对话的文本

::left::

Wellington 的研究经历始于自然语言处理和文本数据。他认为，LLM 带来的变化不只是在既有文本上做得更好，还在于模型输出本身也会成为新的文本数据集。

表格、公司数据或其他结构化材料可以先被交给模型，再得到可讨论、可分析的文字描述。对长期研究文本信号的团队而言，可分析的信息来源因而变宽。

这不说明生成的内容必然可靠，也不说明数据优势自动出现；它首先扩大了可提出和验证的问题范围。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="语言化的数据" role="group" aria-label="结构化数据经语言模型形成候选文本特征">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>结构化材料</strong><p>数字、表格或其他可取得的数据。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>模型输出文本</strong><p>围绕材料生成可阅读、可提问的描述。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>研究候选</strong><p>把有意义的输出当作待验证的信息。</p></div></div>
</div>
<p class="rn-note-caption">这页描述研究接口的改变；能否形成有效特征，仍取决于后续检验。</p>
</div>
</div>

---
layout: two-cols-header
---

# 成本下降会重排研究清单，而非免除研究

::left::

Wellington 用 CEO 电话会中的眨眼频率举例，并明确说明这是一个假设案例。过去若要追踪这类微表情，可能需要专门的计算机视觉团队和数月投入；研究者即使觉得有趣，也会把它排在财报等高先验问题之后。

当原型开发、数据处理和特征构建的成本下降，原先搁置的大量想法可以重新排入清单。他认为，很多项目的速度可出现数量级提升。

但低成本只改变投入回报比。输出是否有意义、是否与已有信号重复，仍须用同样严谨的流程判断。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="研究成本重排" role="group" aria-label="人工智能降低探索成本后研究优先级的变化">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>成本很高时</strong><p>只优先做先验最强、最可能值得长期投入的问题。</p></div></div>
<div class="rn-note-card"><div><strong>成本下降后</strong><p>更多边缘想法变得可试，但不因此成为可交易信号。</p></div></div>
</div>
<p class="rn-note-caption">成本变化扩大了实验集合；验证标准没有因此降低。</p>
</div>
</div>

---
layout: two-cols-header
---

# 自动化若让所有人得到同一答案，组合会失去差异

::left::

制造纸箱时，稳定地复制同一个结果是优点；Wellington 认为，alpha 研究恰好相反。组合需要许多低相关的预测，所有研究者若用同一个按钮、同一份数据得出同一模型，速度再快也只是在重复同一种押注。

因此，他希望 AI 工具放大研究人员各自的背景、历史路径和判断。两个人面对同一资料，工具应允许他们借助不同上下文得到不同的研究路径，而不是把差异压平。

这也是他对 AI 护城河的回答：生成数据或特征的门槛会下降，接下来怎样选择、检验和组合，仍是经验密集的工作。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="AI 与研究差异" role="group" aria-label="人工智能工具可能收敛或放大研究差异的两种结果">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>统一按键</strong><p>相同输入产生相近输出，信号之间的相关性上升。</p></div></div>
<div class="rn-note-card"><div><strong>保留上下文</strong><p>不同研究者沿不同假设探索，工具帮助扩大各自的原创性。</p></div></div>
</div>
<p class="rn-note-caption">这是 Wellington 对研究工具的设计要求，不是对任何具体产品功能的描述。</p>
</div>
</div>

---
layout: two-cols-header
---

# 先碰到能力边界，才能在工具到来时立刻使用

::left::

面对今天尚且难做的研究问题，等待下一代模型看似能省去工程麻烦。Wellington 的看法是，仍应主动把问题推到当前工具的边界：做不出来时，团队会知道究竟缺少什么能力。

这样一来，新的能力出现后，团队不必重新寻找用途，而能把它放到已经定位的瓶颈上。对竞争激烈的 alpha 研究，领先市场十二到十八个月的窗口可能很有价值。

这里的十二到十八个月来自主持人提出的等待情境，不是 Wellington 对模型发布时间的预测；他的重点是，研究准备不能总落在工具迭代之后。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="能力边界的研究准备" role="group" aria-label="提前试探能力边界以准备后续工具的三个阶段">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>尝试高摩擦问题</strong><p>用现有工具推进，暴露无法完成的环节。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>定位具体瓶颈</strong><p>明确下一代能力最该解决什么。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>能力到来后接入</strong><p>把新工具放进已有研究路径，而非从零试探。</p></div></div>
</div>
<p class="rn-note-caption">这是一种研究准备方式；每个项目仍要衡量投入与机会成本。</p>
</div>
</div>

---
layout: two-cols-header
---

# AI 可以同时处理三千家公司各自的问题

::left::

大型样本通常更容易吸引量化研究，因为单一公司的机会看起来容量更小，也更难标准化。Wellington 提出，AI 或许能改变这项取舍：研究可以深入每家公司特有的线索，同时把这种深入扩展到许多公司。

他以三千家公司为设想规模。每家公司经过的分析路径可以不同，之后再把这些特异的观察归纳成销售前景等更一般的研究类别。

这是一项机会判断，并非 Two Sigma 已披露的策略表现；它指向的是传统大表格难以覆盖的、公司层面的细节。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="公司特异性规模化" role="group" aria-label="从公司特有线索到大规模研究的三个阶段">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>公司特有线索</strong><p>从一家公司的业务细节提出问题。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>逐家公司分析</strong><p>对三千家公司同时执行不同的分析路径。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>归纳研究类别</strong><p>把不同路径的结论连接到更一般的预期。</p></div></div>
</div>
<p class="rn-note-caption">规模化的对象是分析能力，不是把所有公司强行放进同一个解释。</p>
</div>
</div>

---
layout: two-cols-header
---

# 追赶前沿，也要能控制模型的生命周期

::left::

外部托管的前沿模型更新很快，但供应商可能调整版本、价格、路线图，甚至停用已被研究流程依赖的模型。Wellington 认为，最重要的取舍之一是能否掌控模型生命周期。

内部部署能提高控制力；外部模型又能让团队接触快速推进的能力边界。他主张技术栈可替换模型，避免把工作流锁在单一提供方上。

他还提醒，若不了解模型训练材料，回测会有前视偏差的风险：模型可能已把后来发生的负面事件带回过去的判断。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="模型部署取舍" role="group" aria-label="外部托管和内部部署模型的取舍">
<div class="rn-note-compare">
<div class="rn-note-card"><div><strong>外部前沿模型</strong><p>能力迭代快，但版本与服务安排由供应商决定。</p></div></div>
<div class="rn-note-card"><div><strong>内部部署模型</strong><p>生命周期与材料更可控，也要承担部署与能力差距的成本。</p></div></div>
</div>
<p class="rn-note-caption">Wellington 主张分散选择，并让系统能在不同模型之间切换。</p>
</div>
</div>

---
layout: two-cols-header
---

# 实验规模上升后，过拟合管理必须同步放大

::left::

更多模型和更低实验成本，也会让 p-hacking 的风险上升。Wellington 的判断很直接：如果一千个人各跑一千个实验，风险显然高于少数人做少量实验。

他并不把目标表述为彻底消除过拟合。模型用过去预测未来，未来又必然不同于过去；要紧的是测量过拟合程度，确认信号在噪声和环境变化下仍有足够稳健性。

Two Sigma 的做法包括统计检验、先验、模型和组合的持续监测，以及随着规模扩大而加强研究教育和检查。

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="规模化实验的控制" role="group" aria-label="规模化实验中控制过拟合的三个环节">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>预先约束</strong><p>用先验与统计检验约束发现过程。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>检验稳健性</strong><p>观察信号能承受多少环境变化与噪声。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>持续监测</strong><p>在模型和组合层测量偏离并调整。</p></div></div>
</div>
<p class="rn-note-caption">实验变快时，检查与教育也要随规模扩大；它们不是上线前的一次性手续。</p>
</div>
</div>

---
layout: end
---

# 研究者的价值将更多落在问题、判断与差异上

<div class="mt-7 grid grid-cols-3 gap-3 text-left text-sm leading-relaxed">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-slate-800"><strong>能提出问题</strong><br>把领域知识转成可检验的假设，而非只等待任务定义。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 text-slate-800"><strong>能使用 AI</strong><br>理解模型的能力与局限，把它用于扩大自己的研究速度。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-slate-800"><strong>能保留差异</strong><br>寻找与既有研究不重复的路径，并知道何时停止完善、转向新问题。</div>
</div>

<div class="mt-7 text-base opacity-80">Wellington 对初入行者的建议是：编码实现的相对价值会下降，但原创想法、领域知识与驾驭工具的能力，会决定这些工具最终服务于什么研究。</div>
