---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 147：OiiOii闹闹谈 AI 创作工具与内容社区
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# OiiOii：从动画创作工具走向内容社区

<div class="mt-8 text-xl opacity-80">闹闹谈 AI 动画、创作控制权与社区留存</div>

<div class="mt-14 text-sm opacity-60">晚点聊 · 第 147 期 · 2026 年 1 月</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 路径改写

AI 创作不必沿用短视频时代先社区、后工具的顺序。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 动画供给

长期专业化的动画制作，正在遇到更低门槛的生成工具。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 创作控制

OiiOii 让用户看见并编辑工作流，保留导演式的参与感。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### PUGC 缺口

自媒体创作团队有持续产出和付费意愿，却缺少动画生产力。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 模型编排

不同模型分别擅长保留风格、角色或稳定执行，需要工程分流。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 社区目标

爆款带来新增，足够多且足够丰富的内容才能把用户留下来。

</div>

</div>

---

# 一条持续十余年的动画线索

<div class="grid grid-cols-3 gap-4 mt-8 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 2014 年前后

闹闹离开微信后学了半年动画；因制作环境与收入问题，没有直接进入动画公司。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 内容与工具

他做过极限运动内容，也在字节参与剪映与抖音特效业务，近距离观察创作者的生产方式。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 回到动画

在 B 站了解动画创作者生态后，他看到 AI 有机会降低动画的制作门槛，于是做 OiiOii。

</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
产品经验、内容制作和动画爱好，在生成式 AI 的能力变化中重新汇合。
</div>

---
layout: two-cols-header
---

# 短视频时代的顺序，不能原样搬到 AI 创作

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
闹闹做剪映时，看到的是抖音先形成内容消费，再长出工具与模板生态。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
如今用户已习惯丰富内容。一个只供试玩、内容单调的 AI 社区，很难形成持续消费。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他的推演是：先用创作工具生产可消费内容，再以这些供给支撑社区留存。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./path-shift.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 内容消费的门槛已经提高

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 早期社区可以容纳单调

抖音早期的内容消费还不充分，用户可以因为新鲜感接受重复形式；当时剪映模板沿着已有内容生态成长。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### AI 社区要先解决可看性

模型生成从展示效果逐渐转向被讨论的内容本身。工具若能持续产出多种可消费内容，社区才有承接新增的基础。

</div>

</div>

<div class="grid grid-cols-3 gap-3 mt-6 text-center text-sm">
<div class="p-3 rounded bg-blue-50 border border-blue-200">消费习惯：内容丰富</div>
<div class="p-3 rounded bg-purple-50 border border-purple-200">产品起点：创作工具</div>
<div class="p-3 rounded bg-orange-50 border border-orange-200">长期目标：内容社区</div>
</div>

---
layout: two-cols-header
---

# Agent 工具按成片目标组织流程

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
传统 GUI 工具更像工程台：用户自己完成一连串操作，替代性较强。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
闹闹把 Agent 工具类比为模板：先确定要做的内容类型，再把专业能力包装进过程。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
同一类提示词仍会生成不同结果，因此模板提供方向，也保留生成内容的差异。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./director-workflow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols-header
---

# 动画领域的供给，长期被制作门槛压住

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
动画对绘画、3D 建模和专业软件的要求很高，工具长期朝更专业的方向发展。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
闹闹在 B 站看到，即使 Live2D 很难用，动画 UP 主仍愿意投入时间制作，说明创作意愿已经存在。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
他的判断是，AI 可把一部分制作门槛降下来；当供给增加，动画内容的消费规模也可能随之扩大。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./animation-supply.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 从启动到内测上线，产品用了约两个半月

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">8 月</div>
<div class="text-sm mt-2 opacity-80">开始做 OiiOii</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600">2.5 个月</div>
<div class="text-sm mt-2 opacity-80">闹闹对研发周期的回顾</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">11 月 10 日</div>
<div class="text-sm mt-2 opacity-80">访谈中提及的正式上线日</div>
</div>

</div>

<div class="mt-8 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
产品并非一开始就确定为今天的多 Agent 形态。团队先确定要做动画，再在 UGC、漫剧与 PUGC 等切入点之间寻找适合自己的位置。
</div>

---

# 可见工作流，是产品体验的一部分

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不把全过程藏在后台

闹闹认为，从头到尾自动完成一条片子的能力还未成熟；每个节点仍需要人配合和判断。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 让用户像导演一样工作

用户能看到角色、分镜等环节，也能修改节点。产品希望降低执行负担，同时保留作品由自己出发的感受。

</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-3 text-center text-sm">
<div class="p-3 rounded bg-purple-50 border border-purple-200">看见进度</div>
<div class="p-3 rounded bg-orange-50 border border-orange-200">编辑节点</div>
<div class="p-3 rounded bg-yellow-50 border border-yellow-200">继续迭代</div>
</div>

---
layout: two-cols-header
---

# 多 Agent 的难点，是稳定与自由同时存在

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
一个 Agent 可能有多种能力：分镜 Agent 既能做图，也能做视频；系统必须判断任务交给谁。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
工作流要保证交接顺序稳定，避免遗漏必要步骤。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
用户可能从角色出发，也可能在中途改动；流程因此要允许回到合适的节点。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./director-workflow.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 团队起步时没有优先选择漫剧

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 剧本能力

闹闹认为漫剧强依赖判断爆款的剧本能力；团队起步时不具备这项强项。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 流量生意

漫剧通常依赖投流与变现节奏，初创团队也缺乏这方面的人才和经验。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 客制化负担

面向头部工作室时，每家工作流不同，产品容易变成重度定制服务。

</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
漫剧公司在内测后仍会来询问。OiiOii 可以覆盖其中从剧本到大量分镜的一段工作，但团队的目标并非直接交付一条成片。
</div>

---
layout: two-cols-header
---

# PUGC 是工具最先瞄准的生产缺口

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
UGC 在当时的用户体量、推理成本与社区留存条件下仍不充分。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
面向 PGC 或漫剧头部工作室，产品会走向按客户工作流适配的重服务。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
PUGC 自媒体账号既有做视频的动力，也有为效率工具付费的动机，处在两端之间。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./pugc-gap.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 一个可被量化的生产效率缺口

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">180–200 万</div>
<div class="text-sm mt-2 opacity-80">闹闹调研到的全网 ACG 类账号量级</div>
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-3xl font-bold text-yellow-600">2–3 人</div>
<div class="text-sm mt-2 opacity-80">他描述的一类账号常见团队规模</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">一日十更</div>
<div class="text-sm mt-2 opacity-80">团队提出的理想效率上限</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
闹闹也强调，即使达不到一日十更，动画内容做到一日两更也会显著改变生产节奏。历史、财经、职场、教育与科普等题材，因难以实拍而可能受益。
</div>

---

# 对漫剧客户，优先交付素材与信息量

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 可服务的环节

一些漫剧团队愿意把剧本输入系统，取走大量分镜，再自行下载、剪辑和完成后续制作。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 产品的取舍

OiiOii 将这类需求的重点放在高效率生成可编辑的内容素材；成片由客户自行完成。

</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-3 text-center text-sm">
<div class="p-3 rounded bg-purple-50 border border-purple-200">剧本输入</div>
<div class="p-3 rounded bg-orange-50 border border-orange-200">大量分镜</div>
<div class="p-3 rounded bg-yellow-50 border border-yellow-200">人工剪辑</div>
</div>

---

# 内容生态需要多种表达

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 漫剧的明确目标

闹闹将漫剧理解为更接近短剧的生意：剧本、投流与爆款要素会主导产品动作。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### OiiOii 的内容取向

团队想先服务 ACG 新媒体创作者，容纳原创、二创、搞笑短段落与不同垂类表达，让流量由用户各自的能力决定。

</div>

</div>

<div class="mt-7 grid grid-cols-4 gap-3 text-center text-sm">
<div class="p-3 rounded bg-blue-50 border border-blue-200">原创故事</div>
<div class="p-3 rounded bg-purple-50 border border-purple-200">二次创作</div>
<div class="p-3 rounded bg-orange-50 border border-orange-200">知识表达</div>
<div class="p-3 rounded bg-yellow-50 border border-yellow-200">轻量搞笑</div>
</div>

---

# 风格选择是一套内容取向

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 熟悉的 IP 风格

团队希望覆盖乐高、辛普森、Family Guy 等大众熟悉的表达方式，方便用户进行二次创作。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 插画式表达

闹闹也偏好可观赏性强的插画风格；这类风格转为视频的训练数据较少，制作难度更高。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 多种动画语言

小型 3D、像素、手绘、水墨与水彩等风格，都被视作能让创作者尝试的方向。

</div>

</div>

---
layout: two-cols-header
---

# 模型没有万能解，编排本身就是产品能力

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
MJ 的手绘风表现强，闹闹认为它更擅长保留风格，但保持角色特征较弱。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
4o 与 Nano 的自然语言编辑更容易固定角色，但风格发散性较弱。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
当用户上传两张参考图、分别要求角色与风格时，系统需要按目标组合模型，不会只调用一种模型。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./model-routing.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 图像环节，先用工程规则换稳定性

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 图像不完全交给 Agent 判断

闹闹说，图像任务对稳定性要求高；让 Agent 自主选择虽可行，却会带来不可接受的出错概率。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 把条件列成分支

团队先理解不同模型的边界，再把常见输入、目标与模型选择写进工程规则中，完成稳定的分流。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
视频环节则尝试了智能选择：第一版约有六个视频模型，任务 Agent 会依据分镜要表达的内容判断调用对象。图像与视频采用不同程度的自动化，是对稳定性要求不同的结果。
</div>

---

# 把意外结果当成动画语言的一部分

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 观察好结果

当模型产生了好的画面，团队会回看它出现的条件，并强化相应的风格表现。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 放弃不成立的风格

如果某个方向在视听上缺少效果，团队会暂时把它从可选风格中去掉。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 保留可用的惊喜

若结果偏离预期却能表达情绪或带来惊喜，团队也会保留，因为动画对反常识的运动更包容。

</div>

</div>

---

# 工具阶段服务社区的供给准备

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 先扩展创作者与内容

工具阶段要让更多人能持续生产不同类型的动画内容，解决未来社区里缺少可刷内容的问题。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 再用运营带来新增

社区上线后可以用策划和爆款引入新用户；新增进入后，才需要依靠内容丰富度完成留存。

</div>

</div>

<div class="mt-7 grid grid-cols-3 gap-3 text-center text-sm">
<div class="p-3 rounded bg-green-50 border border-green-200">先有可刷内容</div>
<div class="p-3 rounded bg-purple-50 border border-purple-200">再做社区入口</div>
<div class="p-3 rounded bg-yellow-50 border border-yellow-200">运营带来新增</div>
</div>

---
layout: two-cols-header
---

# 社区循环里，留存靠内容承接

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
闹闹预计，做工具约半年后才会走向社区。工具的任务是扩大创作者群体与内容供给。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
爆款内容能够把用户带进来，但如果进入后没有足够内容可消费，播放结束后用户就会流失。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
因此社区产品的早期工作既要做传播，也要让用户有连续浏览和继续创作的理由。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./community-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 内测的反馈，来自高频直接互动

<div class="grid grid-cols-3 gap-4 mt-7 text-center">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-3xl font-bold text-purple-600">124 个</div>
<div class="text-sm mt-2 opacity-80">访谈时提及的测试反馈群编号</div>
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-3xl font-bold text-blue-600">约 150 个</div>
<div class="text-sm mt-2 opacity-80">闹闹估计的测试与合作社群总数</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold text-green-600">2 个</div>
<div class="text-sm mt-2 opacity-80">他亲自回复创作者问题的群</div>
</div>

</div>

<div class="mt-7 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
在大平台，反馈容易被聚合成数据；这次内测中，闹闹把大量时间放在阅读和回复用户意见上，希望直接感受创作者的真实问题。
</div>

---

# 小 B 需求与海外，是后续两条探索线

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 先处理小 B 的实际需求

漫剧公司与游戏公司可能购买工具。游戏公司愿意授权资产，让创作者围绕资产做二次创作和传播；闹闹不打算一开始就投入大 B 服务。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 海外先找内容与人群的节奏

访谈时，团队计划在次年 1 月中下旬开始试探海外市场，并预期需要更长时间理解当地人群与内容偏好。

</div>

</div>

---

# 在微信和极限运动创业之间，先学会做内容

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 产品经理离开微信

闹闹在微信做了约三年产品经理。因为喜欢动画，他离职学动画，却发现当时动画公司的工作条件很难支撑自己的生活需求。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 从极限运动内容开始

他随后做极限运动相关内容，拍摄圈内头部人物。回看那次创业，他认为选题偏早，相关运动在后来才更受关注。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这段经历留下的是从产品人转入内容制作的学习过程：拍摄、剪辑和制作都要从头摸索。
</div>

---

# 剪映与抖音特效，提供了创作者工具的现场经验

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 剪映的组织

闹闹说自己对剪映的主要贡献之一，是筛选并组织适合做这款产品的人；他加入时产品已有 500–600 万 DAU。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 特效的产品化

他所在组织接手抖音特效业务后，做过实时变漫画、变老、变小孩等效果，并建立从技术调研到上线评估的机制。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 工具与平台联动

剪映模板和抖音特效，让他观察到工具、投稿和社交关系如何一起影响内容传播。

</div>

</div>

---

# 大平台的组织协同，也有它的边界

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 共同目标能快速调动资源

闹闹回忆，2019 至 2022 年间，字节的部门墙相对较弱；运营、市场和技术可以围绕同一特效项目协作，数据基础也支持细粒度的分发判断。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 创作者服务变得分散

后来创作者同时可能是商家、直播用户、广告主或生活服务商家，组织调整使相关能力分散到不同业务。只保留产品能力，难以把完整的创作者服务组织起来。

</div>

</div>

---

# B 站验证了动画创作者的供给潜力

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 了解产能的一扇窗口

闹闹去 B 站的原因，是想了解中国动画 UP 主和工作室的制作能力；他认为没有这种整体认知，就难以真正做动画产品。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### AI 动画的可能性

他在这段经历中再次确认：动画的产能有限，创作者愿望却很强。B 站的创作者与消费者质量让他看到一个值得继续探索的方向。

</div>

</div>

---

# 触底后的经验，影响了创业节奏

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 高峰时的担忧

极限运动创业在 2014 至 2016 年增长不错；闹闹却担心电商与线下活动的基础不够扎实。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 下行时的调整

业务后来确实回落。他把那段经历看成比单纯从零到一更重要的训练：先承受波动，再找到着陆与恢复的力量。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 重新处理问题

经历过低点后，他认为自己不再先被结果吓住，而能把注意力放回可接受的后果和具体改良动作上。

</div>

</div>

---

# 平静如何改变处理问题的方式

<div class="grid grid-cols-2 gap-4 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 焦虑会放大想象中的结果

闹闹说，人在焦虑时容易把无常和负面结果想得比实际更严重，难以专心解决眼前的问题。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 把注意力放回一步步的改进

他在 2016 年底开始接触禅修。对他而言，安全感与平静让人能够聚焦细微行动，业务恢复也才有实际的起点。

</div>

</div>

<div class="mt-7 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这种经历也影响了他的取舍：产品早期先做团队有把握的动画创作工具，暂不进入自己不擅长、又高度依赖剧本和投流的漫剧路径。
</div>

---

# 核心金句

<div class="space-y-2 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">
“这种完全一致的推演它可能有部分是成立的，但有一部分是不成立的。”
<div class="text-xs opacity-60 mt-1 not-italic">路径判断：短视频时代的经验不能原样复用</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">
“供给一旦上去，它的消费的量级一定会扩大。”
<div class="text-xs opacity-60 mt-1 not-italic">动画供给：工具降低门槛后的预期</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">
“创作者他要享受，享受一点点创作感。”
<div class="text-xs opacity-60 mt-1 not-italic">产品形态：自动化之外保留参与感</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">
“我们想把创作者当成导演，他在控制整个团队。”
<div class="text-xs opacity-60 mt-1 not-italic">工作流：用户看见并调整各个节点</div>
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">
“天天都在做排列组合题。”
<div class="text-xs opacity-60 mt-1 not-italic">技术现实：多模型、多 Agent 与可编辑流程的组合复杂度</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">
“留存还是会比爆款更重要。”
<div class="text-xs opacity-60 mt-1 not-italic">社区目标：丰富供给比一次播放更关键</div>
</div>

</div>

---
layout: end
class: text-center
---

# “我觉得比0到1要宝贵太多了。”

<div class="mt-6 text-lg opacity-80">闹闹谈创业经历里最重要的收获：从低点恢复的能力。</div>

<div class="mt-14 text-sm opacity-60">晚点聊 · 第 147 期</div>
