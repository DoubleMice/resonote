---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 49. 谁在制造Anthropic、OpenAI？两万份简历读后感
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 49. 谁在制造 Anthropic、OpenAI？

<div class="text-xl opacity-80 mt-5">两万份 LinkedIn 简历读后感</div>

<div class="mt-12 text-base opacity-70">《财见之火》 · Raymond · 2026 年 8 月</div>

<div class="mt-5 text-sm opacity-60">从地点、学校、前雇主、职能与语言，勾勒前沿 AI 实验室的人才轮廓</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>数据边界</strong><br>约 1.9 万份可获取简历，不是公司名册。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>地理集中</strong><br>湾区占大头，伦敦、都柏林和亚洲节点补上全球网络。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>学校长尾</strong><br>头部学校密集，但一半员工来自 1,308 所学校。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>人才来源</strong><br>Google、Meta、AWS 和收购团队塑造了可见流入。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>岗位结构</strong><br>工程、研究、销售和共享职能，让三家公司的构成不同。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>华人估算</strong><br>背景、姓名和语言是三种不同的观察窗口，不能相互替代。
</div>

</div>

---

# 先看方法：这不是官方员工统计

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>样本从哪里来</h3>
主持人收集 LinkedIn 公开关联和档案信息；实际拿到约 1.9 万份简历。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>清洗后看趋势</h3>
约 1.7 万份档案保留可用字段。缺失、未更新和平台遮蔽都会影响结果。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>不能推出什么</h3>
它不能替代公司组织架构、官方人数或完整的人才流动记录。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base">
这组数据适合比较分布和方向；遇到小样本或归类判断时，应保留不确定性。
</div>

---

# 三家实验室在样本中的体量

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xl font-bold">Anthropic</div>
<div class="text-4xl font-bold text-purple-700 my-2">4,300</div>
<div class="text-sm opacity-70">可获取简历</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xl font-bold">OpenAI</div>
<div class="text-4xl font-bold text-red-700 my-2">8,400</div>
<div class="text-sm opacity-70">可获取简历</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xl font-bold">DeepMind</div>
<div class="text-4xl font-bold text-blue-700 my-2">6,500</div>
<div class="text-sm opacity-70">可获取简历</div>
</div>

</div>

<div class="mt-8 text-sm opacity-70 text-center">主持人把 DeepMind 作为参照：它与 Google 的履历和共享职能更难拆分。</div>

---
layout: two-cols-header
---

# 人才地图：湾区是中心，海外节点各有分工

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
湾区在可用档案中占 Anthropic 的 47%、OpenAI 的 60%。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
伦敦是两家的欧洲总部；都柏林更像销售或运营节点。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
亚洲分布不同：Anthropic 的东京人数较少，OpenAI 在新加坡的样本最多。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./city-distribution.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 地点字段更像一张会过期的地图

<div class="grid grid-cols-2 gap-4 mt-5 text-base leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>为什么只作参考</h3>
员工可能已搬去美国，但 LinkedIn 仍保留原籍城市；远程工作也会模糊所在地。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>仍然能看见什么</h3>
湾区的集中度和伦敦、都柏林、东京、新加坡的存在，足以说明实验室并非单一城市团队。
</div>

</div>

<div class="mt-6 grid grid-cols-4 gap-3 text-center text-sm">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">伦敦<br><strong>145 / 175</strong></div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">都柏林<br><strong>76 / 88</strong></div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">东京<br><strong>32 / 93</strong></div>
<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">新加坡<br><strong>OpenAI 104</strong></div>
</div>

<div class="mt-4 text-xs opacity-60 text-center">斜杠前后依次为 Anthropic / OpenAI；新加坡只给出 OpenAI 数字。</div>

---
layout: two-cols-header
---

# 学校来源：头部集中，但人才池并不只靠几所名校

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
以 Anthropic 为例，前十所学校合计占 20.9%；Stanford、Berkeley、MIT、CMU、Harvard 位于前列。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
前 60 所学校覆盖 47.9% 的员工，另一半却分散在 1,308 所学校。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
学校在履历中的出现频率，不等于人才能力、录取率或公司招聘偏好。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./education-long-tail.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 同一所学校，在两家公司里的可见度可能不同

<div class="grid grid-cols-2 gap-4 mt-5 text-base leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>OpenAI 的一个例外</h3>
滑铁卢大学在 OpenAI 的学校列表中排第六，但在 Anthropic 的样本里并不突出。主持人只提出了可能与附近机构或公司有关的猜测，没有给出定论。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>清华的可见样本</h3>
OpenAI 样本中有 23 人填写清华大学，占 0.3%。主持人提醒：许多人只写海外硕博，国内本科学历会因此漏记。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
不宜用某校出现的人数衡量其输送规模：教育字段本身带着填写习惯和学历选择造成的系统性缺口。
</div>

---

# 人才从哪里来：前雇主、收购与内部体系

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>Anthropic 样本</h3>
约 2,700 份档案标注前雇主；可见样本中，超过一半来自前 40 家雇主。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>OpenAI 样本</h3>
有 5,000 份档案带前雇主或明确毕业信息；前三名是 Meta、Google、Apple。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>DeepMind 参照</h3>
上份工作来自 Google 的人员占 44.6%，反映其与母公司的组织关系。
</div>

</div>

---
layout: two-cols-header
---

# 看得见的流入，不等于完整的人才流动

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Google 是两家样本中最显著的单一前雇主：OpenAI 426 人，Anthropic 258 人。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
Stripe 在 Anthropic 的可见前雇主中有 106 人；Statsig 被 OpenAI 收购后带来 129 人。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
这些数字来自不同公司、不同事件和不同筛选口径，不能彼此相加成市场份额。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./talent-sources.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# Google 像一座持续外溢的人才水库

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-700">426</div>
<div class="text-sm mt-2">OpenAI 样本中上一份工作在 Google 的人数</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-700">258</div>
<div class="text-sm mt-2">Anthropic 样本中上一份工作在 Google 的人数</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-700">44.6%</div>
<div class="text-sm mt-2">DeepMind 样本中上一份工作来自 Google 的比例</div>
</div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base leading-relaxed">
这不是 Google 员工总流失率。它只说明：在主持人收集到、且能读到前雇主的档案里，Google 反复出现。
</div>

---
layout: two-cols-header
---

# 第二梯队也在向前三家聚集

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
Scale AI 之前有 17 人去 Anthropic、25 人去 OpenAI、8 人去 DeepMind。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
Scale AI、xAI、Character AI、Cohere、Perplexity、Hugging Face、Mistral、Runway、Together 的人员出现在前三家履历中。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
这只是可见档案里的方向，不是对全部人员去向的普查；主持人认为跨三家流动的样本太小。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./tier-flow.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols-header
---

# 岗位结构：前沿实验室不只由研究员组成

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
Anthropic：工程 30%、研究 20%、销售与 BD 18%，运营与人力 12%。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
OpenAI：工程 38%、研究 21%。工程在可分类样本中的占比高于 Anthropic。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
DeepMind：研究 39.8%。主持人猜测，许多销售、产品、法务职能由 Google 承担。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./role-mix.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 分类规则会改变图表的含义

<div class="grid grid-cols-2 gap-4 mt-5 text-base leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>主持人的做法</h3>
把档案标题、个人描述和职位拼在一起，用关键词互斥归类；一次命中就停止继续分类。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>一个主观判断</h3>
资料只写 Member of Technical Staff、没有补充说明时，主持人把它归为研究，而非工程。
</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-3 text-center text-sm">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">4,000 多人<br><span class="opacity-70">职能分析样本</span></div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">约 70%<br><span class="opacity-70">有可分析信息</span></div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">约 2,000 人<br><span class="opacity-70">可明确分类</span></div>
</div>

---

# Anthropic 的商业化与安全岗位，比例上更显眼

<div class="grid grid-cols-2 gap-4 mt-5 text-base leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>销售与 BD</h3>
Anthropic 的销售和商务拓展占 18%。主持人把这一点与其偏企业客户的业务模式联系起来；这是解释，不是公司公布的组织策略。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>政策、法务与安全</h3>
Anthropic 的这类岗位占 6%。主持人最后又提到，AI 安全与对齐部门为 2.3%，比例约为 OpenAI 的两倍。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
2.3% 高还是低？主持人明确说无法判断。百分比说明了结构差异，不能单独证明安全投入是否充足。
</div>

---

# 语言字段：中文是填写出来的第二大外语

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-700">19.6%</div>
<div class="text-sm mt-2">Anthropic 档案标注会中文</div>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-700">27.7%</div>
<div class="text-sm mt-2">OpenAI 档案标注会中文</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-700">24.8%</div>
<div class="text-sm mt-2">DeepMind 档案标注会中文</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base leading-relaxed">
在主持人的排序里，西班牙语第一、中文第二、法语第三、德语第四。这个排序只针对 LinkedIn 中主动标注的语言，不是母语人口统计。
</div>

---
layout: two-cols-header
---

# 估算华人比例前，先拆开三种不同口径

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
明确中国背景：在中国读过书或在明确的中国公司工作过，得到 343 人。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
姓名口径：明确拼音姓名与常见拼音姓氏合计 2,952 人，占 1.9 万份记录的 15%。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
语言口径：标注会中文的人在三家中约占两成以上，但有人不填写语言，也有人会中文却没有中国教育或工作经历。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./chinese-estimates.excalidraw" class="w-[470px]" :darkMode="false" :background="false" />
</div>

---

# 343 人与 2,952 人，回答的不是同一个问题

<div class="grid grid-cols-2 gap-4 mt-5 text-base leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>明确背景的下限</h3>
343 人剔除了只在中国学中文、或在东南亚分支工作的非对应样本；OpenAI 170 人、DeepMind 134 人、Anthropic 39 人。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>拼音姓名的宽口径</h3>
1,520 个明确拼音姓名加 1,432 个常见拼音姓氏，可能包含在海外长大的华裔，也可能遗漏改用英文姓氏的人。
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-base leading-relaxed">
主持人将这些线索交叉对照后，谨慎猜测华人比例或在 20% 上下；这是一项估算，不是身份认定，也不是公司官方比例。
</div>

---

# 简历里看得见的一条典型路径

<div class="grid grid-cols-4 gap-3 mt-7 text-center text-sm">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">中国本科<br><span class="opacity-70">部分样本的起点</span></div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">海外硕博<br><span class="opacity-70">Berkeley、CMU、Stanford、USC、UCLA 等</span></div>
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">大型科技公司<br><span class="opacity-70">Google、微软、Meta、亚马逊、英伟达等</span></div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">近两三年加入<br><span class="opacity-70">三家前沿实验室</span></div>

</div>

<div class="mt-8 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这是一种主持人在档案中反复看到的经历组合，不是对每位华人员工的统一画像。学校和公司名单来自他列举的例子。
</div>

---

# 两家之间的跳槽：方向有趣，样本很小

<div class="grid grid-cols-2 gap-5 mt-7 text-center">

<div class="p-5 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-700">44</div>
<div class="text-base mt-2">Anthropic 档案中出现 OpenAI 前经历的人数</div>
<div class="text-sm opacity-70 mt-2">即 OpenAI → Anthropic 的可见样本</div>
</div>

<div class="p-5 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold text-red-700">9</div>
<div class="text-base mt-2">OpenAI 档案中出现 Anthropic 前经历的人数</div>
<div class="text-sm opacity-70 mt-2">即 Anthropic → OpenAI 的同口径样本</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
主持人认为流动方向或许有参考价值，但反复强调样本量很小。它不足以解释薪酬、岗位、时间或所有跳槽行为。
</div>

---

# 三家公司像不像同一家公司？

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>教育</h3>
都有头部学校，也都有大量分散的学校来源。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>地点与前雇主</h3>
湾区、Google 与大型科技公司在多个表里重复出现。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>职能与语言</h3>
工程、研究和中文相关指标的比例接近，但仍能看出商业化与组织归属的差异。
</div>

</div>

<div class="mt-7 p-4 rounded bg-red-50 border-l-4 border-red-500 text-base leading-relaxed">
主持人的总判断是高度同质化：许多表格遮住公司名后很难分辨。这意味着它们在争夺相似的人才池，也让细微的组织差别更重要。
</div>

---

# 这份简历库还回答不了什么

<div class="grid grid-cols-3 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>年龄与毕业年份</h3>
档案的字段不足，无法可靠统计员工年龄或毕业届别。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>内部晋升</h3>
简历记录没有提供完整的职位演变，因此看不见公司内部的成长轨迹。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>离职后的去向</h3>
主持人最想补上的，是员工离开 OpenAI 等实验室后创办或加入了什么公司。
</div>

</div>

<div class="mt-7 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-base leading-relaxed">
离职去向比入职记录更难抓取，却可能显示从业者愿意用下一站为哪个方向下注。节目在这里留下了一个数据产品问题，而不是给出结论。
</div>

---

# 核心金句

<div class="text-sm opacity-70 mb-3">以下均为节目逐字原话；它们也提醒读者先看数据边界，再看结论。</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">“窥一斑，它很难做到知全貌。”<div class="text-xs opacity-70 mt-1 not-italic">— 谈公开档案的缺失与近似性</div></div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">“学校分布是很长尾的，很多学校都只有一两个人。”<div class="text-xs opacity-70 mt-1 not-italic">— 谈 Anthropic 的教育来源</div></div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">“Google确实是这两家公司最大最大的人才的输出地。”<div class="text-xs opacity-70 mt-1 not-italic">— 汇总 OpenAI 与 Anthropic 的前雇主</div></div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">“第二梯队的实验室会往前三家跑。”<div class="text-xs opacity-70 mt-1 not-italic">— 谈可见的人才聚集方向</div></div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">“并不是每个人都做研究员的。”<div class="text-xs opacity-70 mt-1 not-italic">— 谈岗位分类的必要性</div></div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">“他们就是高度同质化。”<div class="text-xs opacity-70 mt-1 not-italic">— 对三家人才结构的总结</div></div>

</div>

---
layout: end
---

# 两万份简历之后

<div class="mt-8 text-2xl italic leading-relaxed">“我真的是看了两万多份简历，我现在脑子有点僵掉了。”</div>

<div class="mt-6 text-base opacity-70">— Raymond，节目结尾</div>
