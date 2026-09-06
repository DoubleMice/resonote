---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "161: 原力灵机唐文斌：中国最早的 AI 创业者和他的具身新旅程"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 从旷视到原力灵机

## 唐文斌的具身新旅程

<div class="mt-6 text-lg opacity-70">
晚点聊 · 第 161 期
</div>

<div class="mt-3 text-sm opacity-60">
唐文斌｜原力灵机（0xrobot）联合创始人兼 CEO
</div>

<div class="mt-8 text-sm opacity-50">
2026 年 4 月 · 全长 2 小时 10 分钟
</div>

---
layout: default
---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从竞赛到创业</strong><br/>
唐文斌把编程竞赛里的解题反馈，带进了旷视和原力灵机的产品判断。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>从游戏到 Face++</strong><br/>
旷视先做体感游戏，再用开放平台寻找真正有价值的计算机视觉场景。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>To B 的长期教训</strong><br/>
价值要能算清，产品要能标准化；一次项目的成功不等于业务可以复制。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>具身原生模型</strong><br/>
原力灵机把互联网、自动驾驶和机器人数据放在同一条训练路径里。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>模型与真实场景</strong><br/>
具身智能要同时提升模型泛化，并让机器人在真实工作流中持续运行。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>一次新的下注</strong><br/>
2026 年的目标被压缩成两件事：提升 generalist 模型，并让一个场景用上 1000 台机器人。
</div>

</div>

---

# 竞赛首先教会他的，是把问题做完

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">新昌的机房</div>
唐文斌初二时，在新昌城关中学第一次接触 NOI。老师给竞赛生机房钥匙，很多同学去打游戏；他和另外两三个人发现，写程序本身更有吸引力。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">成就感的来源</div>
题目先在那里，方法需要自己构思；程序提交后，系统会马上告诉他是否通过。解法可以不同，优化也常常没有唯一答案。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>作者概括：</strong>这套反馈循环后来延伸成了工程师式的创业动机：先找到问题，再把能运行的解法交给真实场景检验。
</div>

---
layout: two-cols
---

# 竞赛训练的能力，后来迁移到创业

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>解法不止一种：</strong>编程题要求设计求解方法，标准答案并不是唯一目标。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>反馈很快：</strong>提交程序后，接受或错误会立即返回，思路可以反复调整。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>问题会继续变形：</strong>竞赛、优化、机器人调度，都要求在约束中寻找更好的方案。
</div>

<div class="mt-2 text-sm">
这也是唐文斌后来看待 AI 产品的方式：技术要进入场景，才能产生新的问题和反馈。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./engineer-to-startup.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 出题比做题难：评测本身也是产品

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">做题者</div>
一道题可能一两个小时就能完成。关键是找到方法，并在反馈里不断修正。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">出题者</div>
一道好题可能要准备一周。它要让约 200 名参赛者的分数拉开，还要有新意和足够清晰的区分度。
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm leading-relaxed">
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
只有真正做过题的人，才知道一道题哪里有难度，才可能设计出有体感的 judge。
</div>
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
这段经历连接到今天的具身评测：benchmark 不只是榜单，它决定团队能否看见真实进步。
</div>
</div>

---

# 三件小事把三个人推向创业

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-center">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700 mb-2">Kinect</div>
体感游戏在 2010 年前后很受关注，三个人开始想象手机也能识别人和动作。
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 mb-2">iPhone 4</div>
前置摄像头让手机可以同时看到用户的脸、手和动作，计算机视觉有了新的入口。
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700 mb-2">独立开发者</div>
许多移动应用已经证明，小团队也能做出产品；三个人先各自买一台 MacBook 开始试。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
他们最初做的是体感游戏，创业方向并不清楚；真正重要的是先开始，在做产品的过程中判断下一步。
</div>

---

# 游戏验证了技术，也暴露了方向

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">他们做了什么</div>
第一款游戏是乌鸦来了，后来又做了 3D 体感游戏街头速滑，还设想过视觉版的 Angry Birds。乌鸦来了曾进入 App Store 免费榜前三。
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
体感交互是技术展示，也让投资人看见了三个人的执行力。
</div>
</div>

<div>
<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-2">他们发现了什么</div>
三个人并不真正关心小游戏的策划、收费点和数值设计。游戏做得精致，却没有持续的工程成就感。
</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500">
2012 年年中，他们停掉所有游戏开发，把计算机视觉能力放到开放平台 Face++ 上，先让市场帮助他们找场景。
</div>
</div>

</div>

---

# Face++ 先开放，再寻找高价值场景

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">开放 API</div>
当时的人脸技术还没有成熟场景，团队把能力开放出来，让不同开发者一起试用。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-2">消费应用</div>
Face++ 曾为美图秀秀和美图手机提供关键点检测、瘦脸和放大眼睛等 SDK 能力。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">金融身份认证</div>
支付宝建设浙江网商银行时，需要用户在线开户，也需要金融级别的人脸识别。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">场景改变业务</div>
开放平台带来的最大价值，是让团队从展示技术转向解决客户真正愿意持续付费的问题。
</div>

</div>

---

# 一次业务跃迁：LFW 评测从 90–91 到 98–99

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-2">90–91</div>
<div>当时人脸识别团队在 LFW 上的大致水平。</div>
</div>

<div class="p-4 rounded bg-green-50 border-2 border-green-200">
<div class="text-3xl font-bold text-green-600 my-2">98–99</div>
<div>旷视采用深度学习后，把评测结果拉到的新区间。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700 mb-2">支付宝</div>
这个结果对应了线上开户的真实需求，技术优势第一次转成了有规模的业务。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
当时团队对深度学习仍然将信将疑，但他们给年轻成员空间去试，结果改变了公司对技术路线的判断。
</div>

---
layout: two-cols
---

# 技术壁垒要经过数据飞轮验证

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
纯技术差异可能只是时间差。别人过几天也能做出来，差异很难长期保持。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
身份认证有连续使用：支付宝之后，滴滴、Uber 等场景也需要确认用户身份。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
用户越多，系统见过的人越多，算法信号越丰富；当准确性继续提升，更多客户又愿意使用。
</div>

<div class="text-sm">
这解释了为什么身份认证可以形成长期门槛，而普通 SDK 业务更容易被追平。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 范浩强的加入：年轻成员进入试验一线

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">竞赛中的相遇</div>
唐文斌在人大附讲课时认识初一的范浩强。范浩强初三进入集训队，高一参加 IOI 并拿到第二名。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">高二加入创业公司</div>
因为提前保送、暂时没有新的学习安排，范浩强问唐文斌接下来做什么；唐文斌邀请他加入刚成立的旷视。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">强进组合</div>
范浩强和本科生周而进一起试深度学习，把人脸关键点检测和识别做出了明显效果。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
当技术还没有成熟经验可以借鉴时，动手快、足够聪明、愿意试错的人，往往比履历更重要。
</div>

---

# To B 的三个判断

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">价值要能计算</div>
客户要知道产品解决了什么问题，降本或增效能否用真实数据核算。虚假的 ROI 很难带来续约和复购。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-2">别占客户成本太大</div>
如果供应商占据客户成本构成的重要部分，客户更可能选择自研；只有足够强、难以替代的能力例外。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">警惕项目陷阱</div>
客户需求可以很多，但产品要区分标准化、配置化和定制化，否则每个项目都重做，业务就无法复制。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
对唐文斌来说，理想的 To B 业务应当是可复制的产品，不能依赖一次次交付的项目公司。
</div>

---

# 仓库业务的转折：把非标问题拆成标准模块

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div>
<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700 mb-2">最初像装修</div>
仓库的房子、流程和货物都不同，项目团队只能按客户现场定制方案。每个项目都不一样，规模化会很痛苦。
</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
非标交付不一定没有收入，但它会把研发、交付和维护成本锁在每个客户身上。
</div>
</div>

<div>
<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">后来像搭积木</div>
团队把仓库拆成入库、托盘存储、箱式存储和发货等环节，在每个环节提供标准化产品。
</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500">
集成商可以拿标准组件组合完整方案，客户现场仍有差异，但差异被控制在配置层。
</div>
</div>

</div>

---

# 物流效率取决于调度系统

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">为什么选择仓库</div>
托盘、箱子和单件商品让对象有一定标准化，仓库比更发散的开放场景更容易先让机器人工作起来。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">效率由系统决定</div>
机器人数量增加后，货物放在哪里、订单谁先处理、车辆怎样避让和协同，都会由调度系统决定。
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-4 text-sm leading-relaxed">
<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
这类调度本质上是优化问题，和竞赛训练中的约束求解有相似之处。
</div>
<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
团队把物流当作起点：先让机器人在较标准的盒子里被使用，再等待技术把它带到更开放的环境。
</div>
</div>

---

# 零下十度、每天四十公里：场景会自己说明问题

<div class="grid grid-cols-3 gap-3 mt-5 text-center text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-2">−10℃</div>
<div>天津仓库没有暖气，拣货员在很冷的环境里工作。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-2 border-orange-200">
<div class="text-3xl font-bold text-orange-600 my-2">40 公里</div>
<div>一个拣货员每天大约要在仓库里走这么远。</div>
</div>

<div class="p-4 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-2">200%</div>
<div>仓库人员一年流失率的说法，反映了岗位长期招人困难。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
机器人带来的价值包括减少用工、缓解招工压力、占用更少空间，并让仓库管理更稳定。国外的同类用工问题更严重。
</div>

---

# 优衣库项目：五轮投标、上千台机器人

<div class="grid grid-cols-4 gap-3 mt-5 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-bold text-blue-700 mb-2">2019 年</div>
旷视参加上海优衣库仓库投标。
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-bold text-purple-700 mb-2">五轮</div>
优衣库让供应商一轮轮提案和筛选。
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-bold text-orange-700 mb-2">上千台</div>
项目的机器人数量让调度复杂度显著上升。
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 mb-2">决胜点</div>
客户认可软件和算法对整体效率的作用。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这是一个典型的 To B 大项目：供应商要面对复杂方案、长期反馈和很高的交付风险，销售承诺会直接改变技术压力。
</div>

---

# 差点搞砸的项目，靠半年重做回来

<div class="grid grid-cols-4 gap-3 mt-5 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-red-50 border-2 border-red-200">
<div class="text-3xl font-bold text-red-600 my-2">100%</div>
<div>项目目标效率。</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200">
<div class="text-3xl font-bold text-yellow-600 my-2">40%</div>
<div>系统初次完成后的实际效率。</div>
</div>

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="text-3xl font-bold text-blue-600 my-2">半年</div>
<div>客户给团队延期的时间。</div>
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-bold text-green-700 mb-2">重做</div>
团队重新写过全部 code，最后把项目做成。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
项目的转机来自两个动作：承认技术风险，并让客户看到团队已经知道问题在哪里。真正的交付能力在失败之后才被验证。
</div>

---

# 过度承诺会把客户带进失败项目

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-red-700 mb-2">竞争中的错位</div>
一家供应商说能做，另一家如果直接说做不到，就可能被认为更弱。于是大家抬高承诺，客户的预期也被推到技术尚未达到的位置。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">信任后的做法</div>
当客户已经知道团队的能力，可以把风险说清楚，再一起做小规模实验。机器人失败后怎么接管，也要在方案里提前安排。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
To B 失败项目的反馈周期可能以半年甚至更久计算。项目失败后，供应商和客户都不愿公开谈论，市场因此很难看到完整的失败样本。
</div>

---

# 机器人要有用，必须跨过两道门

<div class="grid grid-cols-2 gap-5 mt-5 text-sm leading-relaxed">

<div class="p-5 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">第一道门：任务闭环</div>
机器人要在真实变化中完成客户需要的功能，不能只在某一次演示里成功。失败时，系统还要有处理异常的办法。
</div>

<div class="p-5 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">第二道门：账能算清</div>
客户要把机器人、人工、调度、维护和其他系统的总成本放在一起核算，确认长期使用仍然合算。
</div>

</div>

<div class="mt-6 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
如果只有一次成功演示，它更像 POC 或 PR；只有闭环和经济账同时成立，客户才会批量、持续使用。
</div>

---

# 从旷视机器人业务到原力灵机

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">2016 年：先从物流开始</div>
旷视把仓库作为更容易标准化的机器人起点，逐渐形成搬运型产品、客户和渠道体系。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">2024 年：开始新实验</div>
团队开始尝试用大模型驱动机器人控制，并做 RL 相关工作。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">2025 年春：新公司运营</div>
原力灵机在重组交易完成后开始正式运营，老股东保留了一部分新公司的股份。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-2">新的团队结构</div>
团队约 100 人，其中约 40% 来自原同事、60% 是新成员；公司预留 30% 期权池。
</div>

</div>

---

# 为什么老团队还在一起

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">长期配合</div>
唐文斌从范浩强初一、周而进初二时就认识他们；共同工作十多年，彼此知道能力和做事方式。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">共同积累</div>
旧团队拥有物流客户、真实场景和业务经验。这些积累让一起创业的成功概率更容易被判断。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">相互认可</div>
高人才密度可以减少流程摩擦，让强成员更快形成化学反应；但商业落地仍需要补上客户洞察和脏活。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这也是人才密度的边界：它能提高研发配合和迭代速度，却不会自动带来客户理解、交付质量和商业回报。
</div>

---

# 具身智能的变量：模型与大脑

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-2">技术变化总是来得更快</div>
深度学习、Transformer、智驾都曾经历怀疑期。唐文斌回顾说，真正的人才和注意力进入后，技术进展往往超过早期判断。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">当前瓶颈在智能</div>
机械臂和摄像头未必是最主要的问题；机器人能否理解任务、完成操作并在失败时保持可靠，取决于模型和算法能力。
</div>

</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-center text-sm leading-relaxed">
<div class="p-3 rounded bg-green-50 border-2 border-green-200"><strong>智能</strong><br/>技术变化带来的核心机会</div>
<div class="p-3 rounded bg-orange-50 border-2 border-orange-200"><strong>有用</strong><br/>问题能完整解决，账也能算清</div>
<div class="p-3 rounded bg-yellow-50 border-2 border-yellow-200"><strong>可信赖</strong><br/>安全、可靠，也包括足够的智商</div>
</div>

---
layout: two-cols
---

# 为什么要做具身原生模型

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
常见做法是在已经训练好的 VLM 后面接 action 模块，再训练 VLA。唐文斌担心，这会让动作训练改变原来的多模态能力。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
他的类比是：学生先完成普通教育，再突然被拉去只练体育；如果训练时不继续学习文化课，原有能力可能下降。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
原力灵机选择在 VLM 预训练阶段就加入机器人数据，并在 VLA 阶段同时训练 grounding、VQA 等能力。
</div>

<div class="text-sm">
这条路径的代价可能更高，但目标是让模型从一开始就同时理解数字世界和物理世界。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./native-training.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 真机数据优先，仿真数据有边界

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">当前主要依赖真机</div>
数据可以来自遥操作、手部设备、外骨骼，也可以来自以人为中心的穿戴式设备。不同类型的数据要混合成合适的配方。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-2">仿真的帮助取决于任务</div>
接触丰富、涉及非刚体、力觉和触觉的操作很难仿真，sim-to-real gap 会削弱训练收益；locomotion 和高层任务规划则更适合仿真。
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
仿真、视频、人类第一视角数据和真实使用产生的数据，都是可能的扩展路径。当前的取舍很明确：先以真机数据为主，同时保留对其他路线的开放态度。
</div>

---
layout: two-cols
---

# System 2、System 1、System 0

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>System 2：</strong>慢速思考、理解任务和拆解规划，大语言模型在这一层有明显优势。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>System 1：</strong>VLA 以大约 10 Hz 的中频方式执行动作，但这个频率未必足够驱动全部操作。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>System 0：</strong>处理力觉、触觉和更细动作，需要 100 Hz 以上的高频控制。
</div>

<div class="text-sm">
三层之间怎样传递信息，尤其是 System 2 如何给 System 1 和 System 0 提供合适输入，仍是开放问题。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./system-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 大模型公司能提供一部分，具身公司要把另一部分接上

<div class="grid grid-cols-2 gap-4 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">可以共享的能力</div>
任务理解、常识和规划与大语言模型关系紧密。模型公司可以在 System 2 这一层提供强能力。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">必须结合硬件的能力</div>
System 1 和 System 0 要处理动作、传感器和本体限制；看懂视频，不等于能在物理世界完成动作。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-yellow-700 mb-2">数据的鸡和蛋</div>
机器人不成熟，就难以被持续使用；没有持续使用，就没有失败、接管和改进数据。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">公司的分工</div>
具身公司要把模型、硬件、工作流和真实应用接成闭环，单靠模型发布不能解决整个问题。
</div>

</div>

---

# 从 specialist 走向 generalist，再谈 zero-shot

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">Specialist</div>
给模型某一个任务的数据，再把模型微调到这个任务上。当前很多算法还停留在这一层。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-orange-700 mb-2">Generalist</div>
给模型多个任务的数据，只用一个模型完成它们。原力灵机谈到的当前成功率约为 30%。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-purple-700 mb-2">Zero-shot</div>
模型没有见过任务训练数据，只根据提示完成新任务。唐文斌判断，现阶段还不能把它当作近期目标。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
顺序很重要：先把多任务泛化能力从约三成继续提高，再判断模型能否离开任务样本独立工作。
</div>

---
layout: two-cols
---

# 更适合具身落地的四类场景

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>容错较高：</strong>犯错后有人工或其他设备接手，客户不会因为一次失败就停掉整条流程。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>时间容忍：</strong>场景不要求机器人在严格节拍下持续完成动作。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>适度泛化：</strong>任务不能过于固定，否则非标自动化可能更合适。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>长时间作业：</strong>机器人需要持续工作，投资回报才有机会累积。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./scene-filter.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 物流提供了一个可兜底的系统

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
机器人先做任务；如果失败，调度系统可以把任务送到人工工位，或由远程人员接管。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
客户买到的是机器人、人工、工作站和调度共同组成的工作流，单台机器不必独立完成所有事情。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
兜底机制先解决连续运行的闭环，再把机器人、人工和维护成本放在同一张账上核算。
</div>

<div class="text-sm">
这和网约车网络相似：自动驾驶车辆、人类司机和调度系统共同完成服务。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./warehouse-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 硬件由场景约束，模型负责继续泛化

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
标准形态可能能力不够，也可能过度设计。相机、末端和移动方式都要从现场的真实限制出发。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
遥操作可以先回答硬件能不能完成任务：如果人操作这个本体也做不到，模型再强也无法越过硬件上限。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
高重心的机器人移动速度受限；有些任务让低重心 AGV 搬运，机器人原地操作，成本和速度反而更合理。
</div>

<div class="text-sm">
硬件要按模块组合：AGV、机械臂、传感器和末端执行器可以根据场景拼接。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hardware-modules.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 开源基础设施，是为了提高整个行业的迭代速度

<div class="text-sm leading-relaxed space-y-3 mt-2">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
DexBotic 建在 PyTorch 之上，为 VLA 和模仿学习提供统一配置、数据格式、训练和部署工具。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
RoboChallenge 把真实机器测试做成公开评测，让团队知道哪条算法路线真的在进步。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
开放代码和评测可以让同行复现结果，也让社区的使用和贡献反过来提高工具质量。
</div>

<div class="text-sm">
目前 DexBotic 已有一千多名外部开发者使用，高校也在采用。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./iteration-infrastructure.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 开源并不等于放弃竞争

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-blue-700 mb-2">竞争的对象在变化</div>
模型的当前状态会不断交换领先位置，真正难的是让数据、训练、推理、硬件和评测连起来，持续更快地迭代。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-green-700 mb-2">公开带来信任</div>
RoboChallenge 的测试和 DexBotic 的代码都能复现。同行可以拿同一套工具验证结果，榜单也就有了超出宣传的用途。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
旷视早期做过 MegaEngine，后来到 2018 年才开源，已经错过了建立生态的时间。唐文斌把这个经验带到今天：基础设施要尽早开放，社区才有时间形成。
</div>

---

# 从行业集聚到自己的下注

<div class="grid grid-cols-2 gap-5 mt-4 text-sm leading-relaxed">

<div>
<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>第一阶段：</strong>模型能力尚未统一，许多公司可以在不同 vertical 场景中生存。
</div>
<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>第二阶段：</strong>大模型能力增强，小模型和单一 vertical 的空间会逐渐收缩，行业开始集聚。
</div>
<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>更长期：</strong>模型平台、本体平台和场景公司重新分工，最终可能只剩个位数的全球平台型公司。
</div>
</div>

<div>
<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>原力灵机的取舍：</strong>不做表演路线，也谨慎看待汽车产线，因为那里既要求高节拍，也几乎不容错。
</div>
<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>低谷准备：</strong>储备足够资金，把资源押在真正相信的模型和场景上，同时保留能产生真实业务的路径。
</div>
<div class="mt-3 p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>2026 年目标：</strong>把 generalist 模型从约三成继续提高，并在一个真实场景里让 1000 台机器人持续使用。
</div>
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-4">这期对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic text-sm leading-relaxed">
“编程其实比打游戏更好玩。”
<div class="text-xs opacity-60 mt-1 not-italic">— 唐文斌，回忆初二进入竞赛机房</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic text-sm leading-relaxed">
“其实是个数据飞轮。”
<div class="text-xs opacity-60 mt-1 not-italic">— 唐文斌，解释身份认证业务的长期门槛</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic text-sm leading-relaxed">
“我们把所有的code都推倒重来了一遍。”
<div class="text-xs opacity-60 mt-1 not-italic">— 唐文斌，回顾优衣库项目延期后的重做</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic text-sm leading-relaxed">
“既不能短期太乐观，也不能长期太悲观。”
<div class="text-xs opacity-60 mt-1 not-italic">— 唐文斌，谈具身智能行业的预期管理</div>
</div>

</div>

---
layout: end
---

# 把机器人留在物理世界

<div class="mt-8 text-2xl italic leading-relaxed">
“我们叫打造智能的、有用的、可信赖的机器人。”
</div>

<div class="mt-6 text-sm opacity-60">
唐文斌｜原力灵机（0xrobot）
</div>

<div class="mt-8 text-sm opacity-50">
晚点聊 · 第 161 期
</div>
