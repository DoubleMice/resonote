---
theme: academic
colorSchema: light
diagramMode: static
title: Vol.83 25页PPT记录一场中国AI“全明星赛”
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 一场 AGI Next 现场的四个问题

## 从模型路线，到 Agent、商业化与中美竞争

<div class="mt-10 text-lg opacity-80">讲述：明昊｜屠龙之术</div>

<div class="mt-4 text-sm opacity-50">43 分钟 · 2026 年 1 月</div>

<div class="mt-12 text-sm leading-relaxed opacity-70">明昊参加 AGI Next 后，以现场速记、照片和个人笔记整理出一份 25 页 PPT。本期播客复盘三场演讲与一场论坛，记录的是与会者当时提出的判断、预测与分歧。</div>

---
layout: two-cols-header
---

# 这份复盘怎样形成

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">AGI Next 由清华大学基础模型北京市重点实验室主办，智谱首席科学家唐杰召集。明昊在活动结束后赶往机场，决定把现场内容尽快整理成一期播客。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">三场演讲来自唐杰、月之暗面 Kimi 的杨植麟与千问技术负责人林俊阳；论坛由广密主持，杨强、唐杰、林俊阳、姚顺雨参与。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">张钹在最后作总结。这不是论坛逐字稿；以下内容保留明昊对发言的转述，也把预测与已经发生的事分开表述。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="episode-production" role="group" aria-label="播客中说明的资料整理过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>现场材料</strong><p>速记、照片、日记里的纪要与观点。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>Notebook LM</strong><p>先生成三到四份 PPT 文档。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>人工整合</strong><p>明昊加工后形成 25 页版本。</p></div></div>
</div>
<p class="rn-note-caption">这是讲述者描述的制作顺序，不代表论坛主办方的官方发布流程。</p>
</div>
</div>

---
layout: default
---

# 一场论坛，集中在四个尚无定论的问题

<div class="rn-note rn-note-wide mt-4" data-note-diagram="forum-question-map" role="group" aria-label="AGI Next 论坛的四个讨论问题">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>赛道为何分化</strong><p>模型公司面对消费者、企业与研究的重点是否正在分开。</p></div></div>
<div class="rn-note-card"><div><strong>下一范式是什么</strong><p>自主学习是否已是共识；它又究竟指什么。</p></div></div>
<div class="rn-note-card"><div><strong>Agent 怎样产生价值</strong><p>更长任务、企业部署和物理环境各自意味着什么。</p></div></div>
<div class="rn-note-card"><div><strong>中国能否领跑</strong><p>算力、人才、市场和创业环境会如何影响概率。</p></div></div>
</div>
<p class="rn-note-caption">广密围绕不同背景的四位嘉宾设计这四题；节目没有把它们归结为一个共同答案。</p>
</div>

---
layout: default
---

# 三场演讲指向同一片技术版图，重心并不相同

<div class="rn-note rn-note-wide mt-4" data-note-diagram="keynote-emphases" role="group" aria-label="三位演讲者强调的技术方向">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>唐杰：探索与持续学习</strong><p>从语言、编程走向 Agent；关注超长上下文、模型架构、记忆与自主学习。</p></div></div>
<div class="rn-note-card"><div><strong>杨植麟：Token 效率与长上下文</strong><p>Kimi 把训练和能力提升聚焦于单位 Token 的效率，以及更长的上下文与记忆。</p></div></div>
<div class="rn-note-card"><div><strong>林俊阳：真实需求与全模态</strong><p>千问按客户需求提供不同尺寸，并把多模态、推理、代码能力放在同一条产品演进线上。</p></div></div>
</div>
<p class="rn-note-caption">这是节目对三场演讲重点的归纳。它们共享对模型能力提升的关注，但没有提出相同的技术优先级。</p>
</div>

---
layout: two-cols-header
---

# 图像编辑是否可靠，要看未编辑部分有没有漂移

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">林俊阳把多模态放在较重的位置。他以一张含多个时间格的日常图像为例，说明模型需要把文字中的时间、动作与图像内容对应起来。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">更具体的检验来自社区：把模特举起的右手放下后，衣服、身体和面部应保持原样。若把原图和结果叠在一起仍显得模糊，说明未被要求修改的区域也变了。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">节目转述，千问在 2.51 版本用同类测试观察到漂移问题有所改善。这是一次编辑质量检查，不是对所有图像任务的性能排名。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="image-edit-stability-check" role="group" aria-label="图像编辑稳定性的检查过程">
<div class="rn-note-steps">
<div class="rn-note-card"><span class="rn-note-index">01</span><div><strong>指定局部改动</strong><p>要求把举起的右手放下。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">02</span><div><strong>叠加两张图</strong><p>检查脸部、衣服和身体是否重合。</p></div></div>
<div class="rn-note-card"><span class="rn-note-index">03</span><div><strong>判断编辑稳定性</strong><p>局部改变之外出现虚影，表示其余区域发生漂移。</p></div></div>
</div>
<p class="rn-note-caption">流程只说明节目提到的评估思路：编辑指令改变一处，其他区域应尽量保持一致。</p>
</div>
</div>

---
layout: two-cols-header
---

# 赛道分化：消费者端重体验，企业端重部署

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">姚顺雨以 To C 与 To B 划分第一个问题。他的观察是，消费者向聊天产品的答案与一年前相比未必有明显差别，因此未必都需要更强模型；模型与应用也更容易做成一体化产品。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">在企业侧，他看到更强模型进入业务的空间，例如编程；模型能力与应用环节的拆分也更明显。腾讯自身有许多业务场景，把模型能力用于这些场景以提高生产率，本身已是很大的任务。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">唐杰把这种差异压缩为从聊天走向做事：下一轮差异化要由 Agent 解决实际问题。林俊阳则提醒，技术负责人不宜替公司下结论，服务用户仍是出发点。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="consumer-and-enterprise-split" role="group" aria-label="姚顺雨区分的消费者与企业模型应用">
<div class="rn-note-compare">
<div class="rn-note-card"><strong>To C</strong><p>复杂上下文与记忆是姚顺雨提到的重点；模型和应用的耦合更强。</p></div>
<div class="rn-note-card"><strong>To B</strong><p>更强模型的部署仍有空间；编程是节目提到的代表场景。</p></div>
</div>
<p class="rn-note-caption">这是姚顺雨在论坛中的区分，不是对所有消费者或企业需求的统一描述。</p>
</div>
</div>

---
layout: two-cols-header
---

# 自主学习是方向，定义和路径仍在争论

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">姚顺雨说，online learning 与 continuous learning 在当时仍是含义宽泛的说法。他更愿意把它理解为数据、任务与奖励函数的问题，而非一个已经定型的新方法。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">聊天工具逐渐适应个人偏好，编程工具逐渐理解一家公司代码习惯，或许都可算广义学习；但他认为这只在特定场景中发生，而且是渐变过程。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">林俊阳把模型在环境中获取刺激与 AI for Science 联系起来：模型若能自己找材料、定问题、实验并产出报告，也会带来新的安全问题。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="continuous-learning-positions" role="group" aria-label="三位嘉宾对自主学习的不同判断">
<div class="rn-note-cards">
<div class="rn-note-card"><div><strong>姚顺雨</strong><p>概念尚未收敛；个性化和场景适配是已能观察到的信号。</p></div></div>
<div class="rn-note-card"><div><strong>林俊阳</strong><p>强化学习算力分配与科学研究循环值得关注，同时要处理环境带来的安全风险。</p></div></div>
<div class="rn-note-card"><div><strong>唐杰</strong><p>因 Scaling 效率遇到瓶颈，他预计 2026 年可能出现新的范式创新。</p></div></div>
</div>
<p class="rn-note-caption">三种说法的共同点是持续学习值得投入；分歧在于它现在是否已构成独立范式，以及何时会出现突破。</p>
</div>
</div>

---
layout: default
---

# Agent 的价值取决于部署深度，也受成本和迭代约束

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">企业部署还有空间</div>
姚顺雨的判断是，即使模型研发停在当时的水平，把既有能力更多渗透到 To B 场景，仍可能有 10 倍到 100 倍的空间。这是他对潜在部署的估计。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">任务可能走出电脑</div>
林俊阳预期 Agent 会更多进入非电脑环境，因而把问题延伸到物理世界、机器人与具身交互。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">成功不是只看能力</div>
唐杰提出，Agent 要同时平衡解决问题的价值、运行成本和迭代速度；三者失衡会限制实际采用。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">杨强以目标、规划以及人还是机器主导来划分 Agent 的四个象限，认为当时常见的产品仍处于较早阶段。节目没有把更长任务时长或物理部署视为已经兑现的行业事实。</div>

---
layout: default
---

# 中国能否出现全球第一的 AI 公司：乐观与警惕同时存在

<table class="mt-4">
<thead><tr><th>发言者</th><th>判断依据</th><th>限制或条件</th></tr></thead>
<tbody>
<tr><td>姚顺雨</td><td>对中国在算力、基础设施、人才等硬指标持续跟进持乐观态度。</td><td>光刻机、To B 交付和付费意愿仍是客观约束；他期待更多敢冒险的人才。</td></tr>
<tr><td>林俊阳</td><td>认为美国头部厂商已把更多研发算力投入下一代范式。</td><td>他估计中国在算力上与美国相差一到两个量级，并说中国公司成为世界第一的概率若到 20% 已算乐观。</td></tr>
<tr><td>唐杰</td><td>把人才冒险、较好的营商环境与长期坚持视为取得结果的条件。</td><td>这是对路径的期待，并非对领先结果的保证。</td></tr>
</tbody>
</table>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">同一问题中的差异并不只来自情绪：姚顺雨侧重已有资源和改善趋势，林俊阳侧重前沿研发投入与算力量级；两人使用的比较维度不同。</div>

---
layout: default
---

# 张钹把 AGI 的讨论从语言能力推进到可检验的行动

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><div class="font-bold">时空一致的多模态理解</div>模型理解与落地时，要让不同模态在时间、空间上彼此一致。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><div class="font-bold">可控的在线学习与适应</div>学习过程应能被控制，而不是只追求持续变化。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><div class="font-bold">可验证的推理与长期执行</div>推理和长程规划要能在复杂任务中接受检查。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><div class="font-bold">可校准的反思与元认知</div>模型需要能反思并校准自己的判断。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><div class="font-bold">跨任务的强泛化</div>能力不能只停留在单一任务或单一语言交互。</div>

</div>

<div class="mt-4 text-sm leading-relaxed">张钹的框架从语言模型走向 Agent：目标是让系统在复杂环境中完成复杂任务。这五项是他提出的 AGI 能力要求，而非节目报告的现有模型清单。</div>

---
layout: two-cols-header
---

# 技术路径之外，张钹把治理对象也放回人类社会

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>作者概括：感知与交互</strong><br>张钹列出的多模态、具身与交互，处理系统怎样感知环境并与环境发生作用。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>作者概括：证据与知识</strong><br>检索与证据落地、结构化知识对齐，要求推理能回到材料和知识结构。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>作者概括：执行与约束</strong><br>工具执行与落地、对齐与约束落地，分别指向行动能力和行动边界。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<div class="rn-note" data-note-diagram="ai-social-subjects" role="group" aria-label="张钹提出的人工智能社会角色三个层次">
<div class="rn-note-tiers">
<div class="rn-note-card"><div><strong>功能到行动主体</strong><p>AI 已有功能，并在行动能力上继续提升。</p></div></div>
<div class="rn-note-card"><div><strong>规范与责任主体</strong><p>能力增强后，规范和责任如何界定仍待处理。</p></div></div>
<div class="rn-note-card"><div><strong>意识与体验主体</strong><p>若 AI 有意识或体验，人类怎样相处是更远的设想。</p></div></div>
</div>
<p class="rn-note-caption">张钹认为眼下应做的是对齐与治理，并特别强调治理的重点是从事 AI 研究和使用 AI 的人。</p>
</div>
</div>

---
layout: end
---

# 现场形成了方向感，没有形成统一答案

<div class="grid grid-cols-3 gap-3 mt-6 text-left text-sm leading-relaxed opacity-90">

<div class="p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20"><div class="font-bold">较多共识</div>从语言交互走向能执行任务的 Agent；长上下文、多模态和学习能力仍是重要投入方向。</div>

<div class="p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20"><div class="font-bold">仍有分歧</div>自主学习是否已构成新范式、Agent 如何兑现经济价值、中国何时能领跑，都没有现场结论。</div>

<div class="p-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20"><div class="font-bold">共同的约束</div>算力与研究效率、部署成本、市场付费、对齐与治理，会一起决定技术判断能否成为现实。</div>

</div>
