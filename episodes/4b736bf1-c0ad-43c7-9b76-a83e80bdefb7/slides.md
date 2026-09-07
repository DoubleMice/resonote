---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 158：V4 发布前的 DeepSeek——人才竞争、组织特点和独特的 AGI 目标｜Solo
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# V4 发布前的 DeepSeek

<div class="text-xl opacity-70 mt-6">
人才竞争、组织特点与一个不一样的 AGI 目标
</div>

<div class="text-sm opacity-50 mt-8">
晚点LatePost · 第 158 期 · Solo · 31 分钟
</div>

---
layout: default
---

# 为什么这期值得花时间

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>人员流动</strong><br/>
不到 200 人的团队出现少量研发离职，真正引人注意的是他们去了哪里，以及 V4 仍在等待。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>激励机制</strong><br/>
上市潮让其他大模型公司的财富效应变得可见，也让 DeepSeek 的期权定价问题更紧迫。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>AGI 取向</strong><br/>
梁文锋追求模型智能上限，也把国产生态和回报不确定的原创探索放在重要位置。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>组织方式</strong><br/>
少加班、扁平管理、跨组协作，组成了一座更像实验室的小型组织。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 col-span-2">
<strong>新的压力</strong><br/>
Agent 应用竞争、产品触点和算力军备竞赛，都在重新定义强模型意味着什么。
</div>

</div>

---
layout: default
---

# 先看反常：一家不到 200 人的 AI 公司

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-semibold">不到 200</div>
公司总人数。研发团队有 100 多人，包含数据和 Infra；产品团队有小几十人。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-semibold">6–7 点</div>
没有特殊情况时，大部分员工平日会在这个时间左右离开公司。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-3xl font-semibold">少量离职</div>
研发团队近期有数人离开；人数不算多，但都进入了同行或竞对团队。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这三个事实放在一起，才构成节目讨论的主问题：当外部竞争加速时，DeepSeek 原本那套工作方式还能否维持？
</div>

---
layout: two-cols
---

# 不加班：把工作时长当作算力管理

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“一个人每天能高质量输出和工作的时间很难超过6到8个小时”
</blockquote>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
梁文锋的判断是，超出高质量工作区间后，疲劳会带来更差的决定；在 AI 研究里，错误判断还会浪费昂贵的算力。
</div>

<div class="mt-3 text-xs opacity-70">
这里讨论的是把人的状态和实验资源放进同一个管理问题里，而非福利宣传。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./work-compute.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 离职本身不多，参照系变了

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>过去的离职</strong>
<p class="mt-2">节目提到，之前几乎没有全职员工离开。已知的较早变动包括 2024 年 3 月离开的张博，以及 2025 年初加入小米的罗福利。</p>
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>近期的方向</strong>
<p class="mt-2">王炳轩去了腾讯，魏浩然和郭达雅也在离开前后被外界关注；阮充则在 2026 年 1 月官宣加入远融启行。</p>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>为什么被放大</strong>
<p class="mt-2">这批人员更直接地进入大型科技公司或同行团队，恰好撞上中国 AI 人才争夺最激烈的阶段。</p>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>不能推出的结论</strong>
<p class="mt-2">少数成员离开，不等于团队成组流失。节目明确澄清，近期成组流失的传闻并没有发生。</p>
</div>

</div>

---
layout: default
---

# V4 的等待，把人才新闻放大了

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>春节前后</strong><br/>
一个小参数版本已经交给部分开源框架社区适配。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>原先预期</strong><br/>
更大参数版本原本可能在 2 月中旬、春节前后发布并开源。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>节目判断</strong><br/>
V4 应该会在 4 月开源，至少会开源其中几个版本。
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm leading-relaxed">
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>社区信息</strong><br/>
至少可能有接近 300B 的版本，以及 500–600B 的版本。
</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>解读边界</strong><br/>
这些是节目根据社区信息做的判断，不把未发布版本的参数当成已确认事实。
</div>
</div>

---
layout: two-cols
---

# 人员流动背后的三层压力

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 mb-3">
<strong>外部：人才争夺</strong><br/>
大型科技公司同时提供现金、算力和更明确的岗位机会。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 mb-3">
<strong>内部：期权预期</strong><br/>
公司没有清晰估值时，协议里的期权很难和上市公司的股权直接比较。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>长期：目标共识</strong><br/>
研究员想持续参与强模型，而 DeepSeek 还要把资源投向原创、回报不确定的方向。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./talent-option.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 人才争夺：岗位、算力和时机一起定价

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>字节 Seed</strong>
<p class="mt-2">节目提到 Seed 已有约 1500 人。与其说人数一定很多，不如说值得探索的 AI 方向足够多，组织可以容纳更多研究员，前提是算力跟得上。</p>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>腾讯 AI 团队</strong>
<p class="mt-2">姚顺宇在 2025 年下半年加入并领军 AI 研发。新负责人需要建立团队，早期加入者也更可能拿到核心位置。</p>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 col-span-2">
<strong>规模不是单一答案</strong><br/>
节目把 Seed 与 DeepMind 的规模放在一起，说明组织能否容纳更多研究员，关键还在研究方向和算力资源，而不只是人数本身。
</div>

</div>

---
layout: default
---

# 实习工资把竞争变成可见的数字

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-semibold">5500 元</div>
节目群里流传的腾讯实习信息：清华姚班学生，日薪税前；节目没有把它确认成普遍报价。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-3xl font-semibold">4200 元</div>
同一讨论里提到的千问实习日薪，比较口径同样是每天、税前。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-semibold">4000 元</div>
主持人此前知道的记录：Seed 去年给部分顶尖实习生开出的日薪。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
如果 5500 元日薪属实、且一个月每天都上班，月收入会超过 10 万元。这个数字的意义不在于给出行业平均值，而在于让人才争夺的烈度变得可见。
</div>

---
layout: two-cols
---

# 期权的难题：协议存在，价格却不清楚

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“DeepSeek目前没有一个明确的公司估值和定价”
</blockquote>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
大多数公司的总包同时包含现金和股份或期权。DeepSeek 员工虽然签了期权协议，却难以判断这部分到底值多少钱。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
MiniMax 和智谱上市后，节目提到两家公司股价已上涨五六倍，市值来到约 2500–3000 亿元；阶跃星辰和 Kimi 也传出 IPO 计划。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./option-value.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 梁文锋的起点：量化交易先遇到深度学习

<div class="text-sm leading-relaxed mt-2">

<div class="grid grid-cols-2 gap-2">
<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500"><strong>2015</strong><br/>创立幻方量化基金。</div>
<div class="p-2 rounded bg-green-50 border-l-4 border-green-500"><strong>2016</strong><br/>开始用 GPU 跑深度学习实盘交易。</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500"><strong>2019</strong><br/>建立 1100 张 GPU 的萤火一号。</div>
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500"><strong>2021</strong><br/>幻方已有 1 万张 GPU。</div>
</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
2020 年看到 GPT-3 后，他认为扩大算力的方向已经很明确；买卡不只是服务量化投资，也是在满足对研究的好奇心。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./history-arc.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# GPU 像钢琴：买得起，还要有人弹

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“买卡就像买钢琴，一是买得起，二是因为有一群要在上面弹奏音乐的人”
</blockquote>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
钢琴指的是 GPU，弹琴的人指的是研究员。算力只有被研究者使用，才会变成新的实验路径。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
现在急着弹琴的人更多，曲子也更多：世界模型、持续学习、在线学习和更接近人脑的学习机制，都需要实验。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compute-piano.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 梁文锋把 AGI 拆成三条工作线

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“除了追求大模型的智能上限，他认为还有两个很重要的工作”
</blockquote>

<div class="mt-3 grid grid-cols-1 gap-2">
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><strong>智能上限</strong><br/>继续提高模型的推理与综合能力。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>国产生态</strong><br/>让模型和国产芯片、软件栈更好地协同。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>原创探索</strong><br/>尝试大厂或其他创业公司未必会优先投入的方向。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agi-objective.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 国产生态：从数据格式到算子库

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 mb-3">
<strong>V3.1 · 2025 年 8 月</strong><br/>
更新后采用 UE8M0 FP8 数据压缩格式；DeepSeek 在留言区说明，它面向下一代国产芯片设计。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>V3.2 · 2025 年 9 月底</strong><br/>
技术报告显示，底层算子库从 CUDA、Triton 换成了 Talent；Talent 是北京大学杨植团队发起的国产开源项目。
</div>

<div class="mt-3 text-xs opacity-70">
这里的重点在于把模型训练放进国产硬件与软件生态里一起设计，而不只是替换一个名词。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./domestic-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 原创探索的回报，可能不会马上出现

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“需要做一些当下回报不明确的方向”
</blockquote>

<div class="mt-3 grid grid-cols-2 gap-2">
<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500"><strong>Janus</strong><br/>较早探索统一多模态理解与生成。</div>
<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500"><strong>Prover</strong><br/>尝试形式化证明。</div>
<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500"><strong>OCR</strong><br/>2025 年连续发布两篇，探索复杂文档理解。</div>
<div class="p-2 rounded bg-green-50 border-l-4 border-green-500"><strong>脑科学</strong><br/>招募神经科学与脑科学背景顾问，探索更接近人脑的学习机制。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./original-search.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 独特目标与外界期待，有时并不重合

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>外界的期待</strong>
<p class="mt-2">一些人希望 DeepSeek 每次出手都像 R1 一样带来巨大冲击，把强理解成持续刷新排行榜。</p>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>梁文锋的取向</strong>
<p class="mt-2">他并不把追求最强、用性能碾压对手当成唯一目标；原创方向的回报本来就更不确定。</p>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>研究员的现实需求</strong>
<p class="mt-2">年轻研究员通常希望参与强模型、在受关注的技术报告上署名，并获得足够 GPU 做实验。</p>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>分歧落在哪里</strong>
<p class="mt-2">当研究方向的回报不确定、算力又有限时，组织目标和个人职业反馈不一定同时满足。</p>
</div>

</div>

---
layout: default
---

# 什么叫更强：benchmark 之外还有体感

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>跑分越来越难区分</strong><br/>
只看 benchmark，未必能判断模型在真实任务里是否更好用。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>Agent 改变评价</strong><br/>
进入智能体模型竞争后，执行任务的体验和稳定性变得更重要。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>产品带来长尾数据</strong><br/>
真实用户触点让模型遇到更多场景，也让强的标准变得多样。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
强不再只是同一张榜单上的名次；它还取决于模型进入了哪些工作流、被哪些用户反复使用。
</div>

---
layout: two-cols
---

# 模型能力要经过产品触点

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“产品触手带来的长尾使用案例和多样化的数据变得更重要了”
</blockquote>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
DeepSeek 过去更专注模型研发，产品投入相对少；它的 C 端产品仍然是典型 Chatbot。
</div>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
没有产品，就少了把模型放进不同场景的入口，也少了从长尾使用中得到反馈的机会。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./product-touch.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Agent 竞争中，DeepSeek 相对缺席

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>迭代节奏</strong><br/>
节目提到，从 2025 年初至当时，智谱、MiniMax、Kimi 分别更新了 5 版、4 版和 3 版模型；DeepSeek 的迭代频次明显更低。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>应用入口</strong><br/>
智谱、MiniMax、Kimi、阶跃星辰以及字节的飞书都做了 OpenClaw 相关应用，DeepSeek 没有在这些热门方向投入同等产品力量。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>并非能力归零</strong><br/>
V3.2 强化了 Agent 能力；问题在于产品、迭代速度和用户触点没有一起跟上。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>新的招聘信号</strong><br/>
2026 年 3 月中旬，招聘启事首次点名 Claude Code、OpenClaw、Manus，寻找 Agent 方向的模型策略产品经理。
</div>

</div>

---
layout: two-cols
---

# OpenClaw 使用量：一个有边界的样本

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
OpenRouter 统计的是 2 月 24 日至 3 月 26 日、共 30 天的模型消耗量。它能提供参照，但不代表每家公司的完整使用量。
</div>

<div class="grid grid-cols-2 gap-2">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><strong>前十</strong><br/>有 6 个模型来自中国公司。</div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><strong>整体排名</strong><br/>DeepSeek V3.2 排在第 12 位。</div>
<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><strong>免费模型</strong><br/>Step 3.5 Flash 排第一；Claude Large Preview 排第五，免费是重要原因。</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><strong>换个口径</strong><br/>剔除免费模型后，V3.2 在付费模型中进入前十。</div>
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-sample.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 产品团队开始被要求看见用户

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>时间点</strong><br/>
从 2025 年秋天起，梁文锋在公司里更多提到产品化和商业化。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>招聘变化</strong><br/>
产品团队开始出现 Agent 方向的模型策略岗位，要求持续跟踪行业前沿。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>使用经验</strong><br/>
岗位要求熟悉 Claude Code、OpenClaw、Manus 等 Agent 产品，说明产品触点正在进入组织视野。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这并不否定模型路线，只是把模型做得好和用户在哪里使用模型放到同一张图上观察。
</div>

---
layout: two-cols
---

# 算力：研究方向越多，资源约束越明显

<div class="text-sm leading-relaxed mt-2">

<blockquote>
“买得起这件事情已经在变化”
</blockquote>

<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
过去买 GPU 的优势正在被全球算力军备竞赛稀释。DeepSeek 与全球及中国核心大公司的算力差距，节目判断可能在拉大。
</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
需求却还在增加：语言模型之外，世界模型、持续学习、在线学习和更接近人脑的学习机制，都需要实验预算。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compute-piano.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 为什么有人留下

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>目标认同</strong><br/>
留下的人中，多数认可梁文锋追求 AGI 的方式，愿意做不完全由竞争驱动的探索。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>环境习惯</strong><br/>
相对宽松、从容的研究氛围，是 DeepSeek 不容易被替代的一部分。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>成就与投入</strong><br/>
研究员不想被落后恐惧驱赶，也希望持续产出有影响力的成果；两种愿望需要同时被看见。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>仍在观察</strong><br/>
人员变化说明压力存在，但还不足以证明 DeepSeek 的组织方式已经发生根本变化。
</div>

</div>

---
layout: two-cols
---

# 组织像一座开放实验室

<div class="text-sm leading-relaxed mt-2">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 mb-3">
<strong>扁平</strong><br/>
研究团队没有二把手，只有梁文锋和其他研究员两个层级；他既组织研发、协调资源，也直接参与基模架构研究。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 mb-3">
<strong>交叉</strong><br/>
数据、Infra 与基模架构紧密合作；大部分团队的周会对其他组开放。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>从想法到资源</strong><br/>
三五个来自不同小组的人可以先做小实验；公司认为方向值得继续，再给更多资源验证。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./research-organization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 小而年轻：这套组织为何能跑起来

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-semibold">172 人</div>
晚点曾梳理 DeepSeek 三代模型的研究者，包含实习生；其中 84 人的履历可被找到。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-semibold">超过七成</div>
在可找到履历的人中，本科或硕士背景超过七成，年龄小于 30 岁的也超过七成。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-3xl font-semibold">约十分之一</div>
在 V3 和 R1 之前，DeepSeek 以大厂约十分之一的人数、约三分之一到二分之一的人均工作时间进入全球第一梯队。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
小团队、年轻研究员和较少的工作时长，并不自动产生好结果；这里真正重要的是研究方向、组织协作和创始人的判断同时对齐过。
</div>

---
layout: default
---

# 核心金句（一）

<div class="grid grid-cols-2 gap-2 mt-3 text-xs leading-snug">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<blockquote class="m-0 text-xs leading-tight">“一个人每天能高质量输出和工作的时间很难超过6到8个小时”</blockquote>
<div class="text-xs opacity-60 mt-1">工作节奏：疲劳也会浪费算力</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<blockquote class="m-0 text-xs leading-tight">“DeepSeek目前没有一个明确的公司估值和定价”</blockquote>
<div class="text-xs opacity-60 mt-1">人才激励：期权缺少可参照价格</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500">
<blockquote class="m-0 text-xs leading-tight">“除了追求大模型的智能上限，他认为还有两个很重要的工作”</blockquote>
<div class="text-xs opacity-60 mt-1">AGI 目标：性能之外还有两条线</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<blockquote class="m-0 text-xs leading-tight">“需要做一些当下回报不明确的方向”</blockquote>
<div class="text-xs opacity-60 mt-1">原创探索：允许研究暂时没有答案</div>
</div>

<div class="p-2 rounded bg-yellow-50 border-l-4 border-yellow-500">
<blockquote class="m-0 text-xs leading-tight">“买卡就像买钢琴，一是买得起，二是因为有一群要在上面弹奏音乐的人”</blockquote>
<div class="text-xs opacity-60 mt-1">算力：资源与研究员必须同时存在</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<blockquote class="m-0 text-xs leading-tight">“在DeepSeek没有二把手，尤其是在研究团队，只有梁文锋和其他的研究员两个层级”</blockquote>
<div class="text-xs opacity-60 mt-1">组织：扁平结构的具体形状</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="grid grid-cols-2 gap-2 mt-3 text-xs leading-snug">

<div class="p-2 rounded bg-blue-50 border-l-4 border-blue-500">
<blockquote class="m-0 text-xs leading-tight">“强的标准和体感本来就越来越多样”</blockquote>
<div class="text-xs opacity-60 mt-1">产品触点让模型评价变得多元</div>
</div>

<div class="p-2 rounded bg-red-50 border-l-4 border-red-500">
<blockquote class="m-0 text-xs leading-tight">“在去年下半年到今年如火如荼的Agent应用竞争上，DeepSeek是相对缺席的”</blockquote>
<div class="text-xs opacity-60 mt-1">Agent：能力、产品与迭代速度的缺口</div>
</div>

<div class="p-2 rounded bg-green-50 border-l-4 border-green-500">
<blockquote class="m-0 text-xs leading-tight">“DeepSeek是一个真心想做研究的人在国内甚至是全球能找到的最好的地方”</blockquote>
<div class="text-xs opacity-60 mt-1">留下：研究氛围仍然有吸引力</div>
</div>

<div class="p-2 rounded bg-orange-50 border-l-4 border-orange-500">
<blockquote class="m-0 text-xs leading-tight">“买得起这件事情已经在变化”</blockquote>
<div class="text-xs opacity-60 mt-1">算力：过去的优势不再稳固</div>
</div>

<div class="p-2 rounded bg-purple-50 border-l-4 border-purple-500 col-span-2">
<blockquote class="m-0 text-[11px] leading-tight">“在V3和R1之前，DeepSeek其实是以大厂约十分之一的人数，约三分之一到二分之一的人均工作时间，做到了全球大模型的第一梯队”</blockquote>
<div class="text-xs opacity-60 mt-1">规模效率：节目对这套组织方式的概括</div>
</div>

</div>

---
layout: end
---

# DeepSeek 不必成为全村的希望

<div class="text-lg mt-8">
“DeepSeek就是DeepSeek，其实每家公司最后都会是它自己”
</div>

<div class="text-sm opacity-60 mt-5">
——曼琪在节目结尾写下的想法
</div>

<div class="text-sm opacity-70 mt-8">
期待 V4，但也把一家公司的目标、节奏和边界还给它自己。
</div>
