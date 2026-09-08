---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "149: 具身模型哪家强？|与范浩强、高阳聊具身模型的测评、RoboChallenge，26 年具身展望"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 具身模型哪家强？

<div class="mt-4 text-xl opacity-70">
从 RoboChallenge 出发，讨论具身模型如何测、缺什么、何时可用
</div>

<div class="mt-3 text-lg opacity-60">
范浩强 · 原力灵机联合创始人　高阳 · 千寻智能联合创始人兼首席科学家
</div>

<div class="mt-8 text-sm opacity-50">
晚点聊 LateTalk · 第 149 期 · 2026 年 1 月 · 全长 1 小时 22 分
</div>

---

# 为什么这期值得听

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>真实世界怎么测？</strong> 同一动作换一个杯子、改一点光照，分数就可能混入环境差异。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>Table30 测什么？</strong> 30 个桌面任务用柔性物体、精确放置和状态记忆拉开模型差异。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>两种测评设定。</strong> RoboChallenge 做少样本微调，RoboArena 测零样本、分布式对比。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>分数怎样可信？</strong> 平台讨论开源复跑、最后一次提交与现场观察，来抵抗演示工程。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>数据从哪里来？</strong> 仿真、第一视角视频、可穿戴设备与遥操作的数据各有约束。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>2026 看什么？</strong> 嘉宾关注中国模型能否追赶，以及基础模型能否接近 GPT-3 阶段。
</div>

</div>

---

# 两条经历，汇到同一个问题

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>范浩强：从视觉落地到真实评测</h3>

他从 2012 年起参与旷视的计算机视觉创业；人脸识别准确率持续提升的经历，让他相信可复现的评测能支撑长期迭代。原力灵机把这个经验带到机器人测试。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>高阳：从机器人研究到基础模型</h3>

他在伯克利读博时从计算机视觉转向机器人研究，2020 年回清华任教，后联合创立千寻智能。他关心的是：怎样用标准化流程，让一个基础模型适应多种任务。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
两人的共同出发点：机器人已经能尝试许多任务，但行业还缺少能反映真实进步的公共标尺。
</div>

---
layout: two-cols-header
---

# 实体评测为何比数据集更难

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>环境会参与结果。</strong> 杯把形状、物体摆放、光照和机器状态都会改变一次执行。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>小改进容易被噪声盖住。</strong> 嘉宾以视觉模型为参照：算法提升有时只有 0.x% 或约 5%，测试不稳就难以判断进退。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>评测仍要标准化。</strong> 目的是把模型之间的差异看得更清楚，也让小幅改动有机会被辨认出来。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./eval-noise.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 当前测评追求的是趋势，不是小数点

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>先看代际差</h3>

模型能力明显不同，测试应能看出分数差距与运行状态的变化。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>再看敏感区</h3>

榜单最高分仍未到 60 分；范浩强说，测试刻意放在能放大差异的区间。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>不抢答精度竞赛</h3>

当行业还在早期，区分能做与几乎做不到，比比较 99% 与 99.5% 更有价值。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这也是 RoboChallenge 的定位：让真实执行形成足够多的观测，再用平均成功率观察模型能力的方向。
</div>

---

# Pi 的两次测试，给了团队不同信号

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

<h3>早期分数很低</h3>

范浩强回忆，Pi 0 在 Table30 的 30 项任务平均成功率只有 20% 多。团队曾担心：公开这样的分数，会不会让外界误判整个行业。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>Pi 0.5 让人看到进步</h3>

权重公开后，团队立即测试。范浩强的感受不只来自分数：站在旁边看机器人运行，也能察觉模型更灵活。对谈中提到，Pi 0.5 的平均成功率约为 42%。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
同一套任务、同一类真实执行，才让两代模型的变化成为可讨论的事实，而非各自剪出的演示片段。
</div>

---

# Table30 从生活清单里长出来

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>起点：几千条设想</h3>

团队先让员工列出希望机器人能完成的事情，再由数据采集团队逐项判断能否采集。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>收敛：30 个桌面任务</h3>

任务并非按拿杯子、拿球这类相近动作排列，而是刻意保留不同的失败原因。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>结果：考点分散</h3>

碎纸、插花、擦桌子、扫码等任务，把感知、操作、交互和记忆放到同一张表上。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
范浩强的事后判断是：来自日常生活的任务清单，恰好带来了更丰富的能力覆盖。
</div>

---
layout: two-cols-header
---

# 30 个任务如何拉开模型差异

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>柔性物体。</strong> 纸张会弯折、遮挡手部；采集示例也很难覆盖所有形态。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>精细操作。</strong> 杯子放入孔洞时，允许误差可能只有几毫米。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>物体间交互。</strong> 插花不仅要定位手和花柄，还要处理花柄与其他物体的接触。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>上下文记忆。</strong> 扫码前后画面近似，模型要记住自己是否已经完成动作。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./table30-capability.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 碎纸任务：纸会遮挡，也会变形

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

<h3>表面动作很简单</h3>

把纸插进碎纸机的缝隙。对人来说几乎不会失手，机器人却要在窄缝前持续调整手和纸的位置。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

<h3>失败点不只在抓取</h3>

纸张进入缝隙时会挡住对手部的视觉观察；柔性物体的状态又难以用有限示例穷尽。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这个任务把视觉遮挡、柔性材料和精确插入叠在一起，因此比拿起刚性物体更能暴露能力缺口。
</div>

---

# 扫二维码：动作不难，状态很难看见

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>任务</h3>

一只手拿物体，另一只手拿扫码枪，扫描后把物体放回。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<h3>观察</h3>

扫描前后，画面中的物体没有明显变化；只看当前帧难以分辨阶段。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>所需能力</h3>

模型要将此前的动作纳入判断，知道下一步该继续扫、停下还是放回。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
“所以这模型分不清说它刚才扫没扫。”
<span class="block text-xs opacity-60 mt-1 not-italic">范浩强解释扫码任务的难点</span>
</div>

---

# 单帧 VLA 的记忆缺口

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>当前常见做法</h3>

高阳说，很多开源 VLA 以少量图像帧作为输入，然后直接输出动作。对当前场景很敏感，却不天然保存过程状态。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<h3>补法仍在模型外</h3>

已有工作会保存更多帧，或用 Agent 记录此前发生的事；但这类记忆通常是工程模块，不是模型参数中的内建能力。

</div>

</div>

<div class="mt-4 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm italic">
“模型现在每，每过一帧它就忘一次。”
<span class="block text-xs opacity-60 mt-1 not-italic">高阳用扫码任务说明单帧输入的局限</span>
</div>

---
layout: two-cols-header
---

# 两种评测：微调后的技能，和零样本泛化

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>RoboChallenge：少样本微调。</strong> 平台给出固定任务与示例；参与者训练后，在同一环境中执行。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>RoboArena：零样本。</strong> 不先给任务数据，分布在各实验室的机器人按现场指令运行。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>统计方式不同。</strong> 前者可以平均同类任务的成功率；后者更多用同场地的模型两两对比，再汇总排序。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./benchmark-modes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# RoboChallenge 的一次测试怎样运行

<div class="mt-4 grid grid-cols-4 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>1. 固定任务</h3>

Table30 给出清晰的任务描述。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>2. 提供示例</h3>

每项任务最多约 1000 条演示数据。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>3. 参与者微调</h3>

团队自行选择基模、训练参数与控制逻辑。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>4. 远程执行</h3>

平台提供机器人控制 API，真机返回结果。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
平台刻意不替参与者完成微调：显卡、参数和训练手法都会影响结果，由参与者掌握这些变量更容易厘清责任边界。
</div>

---

# RoboArena 的难处，也正是它的目标

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>分布式不是把环境抹平</h3>

每个实验室在同一台机器人、同一个现场，比较两个算法的相对表现。跨场地结果不直接混成一个平均分。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

<h3>零样本对今天仍很苛刻</h3>

现场指定任务、不给示例数据，很多模型的成功率接近零；这时只能从动作表现中判断谁更有希望。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
两套系统关注不同问题：训练后能否稳定完成任务，以及模型能否直接适应陌生任务。
</div>

---

# 规模化真机测试，先遇到的是产能

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>10 月发布</h3>

范浩强说，RoboChallenge 在 10 月宣布上线。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>一两个月破万次</h3>

平台运行约一两个月后，已有 1 万多次不同测试记录。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>约 9 台、4 类机器人</h3>

当时设备包含双臂与三种单臂类型；提交后等待一两天成为现实约束。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
这组数字描述的是平台运营压力，不是模型能力排名：真正昂贵的是让真机反复执行、复位并保持测试条件可用。
</div>

---

# 分数可信度：平台留最小接口，社区做复跑

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>平台不代替参与者训练</h3>

RoboChallenge 只保留机器人控制 API。参与者可以自定计算架构与控制逻辑，平台避免为训练手法背书。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>好成绩需要可检查</h3>

团队希望上榜者公开取得成绩的模型代码，让其他人重新提交测试；允许误差，但大趋势应能重现。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
“我们规则上我们是取最后一次嘛。”
<span class="block text-xs opacity-60 mt-1 not-italic">范浩强谈平台为何不接受同一任务反复提交后只取最佳分数</span>
</div>

---
layout: two-cols-header
---

# 一段精彩演示，可能漏掉哪些条件

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>挑选成功片段。</strong> 同一任务尝试很多次，只保留一次成功的录制。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>剪辑与遥操作。</strong> 视频难以看出是否连续，也难以确认谁在控制机器人。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>生成内容。</strong> AIGC 让影像本身也需要额外验证。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>现场观察。</strong> 原始执行、固定镜头和可交互的远程观看，能补足部分信任缺口。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./demo-trust.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 演示验证仍是开放问题

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<h3>物理世界有额外攻击面</h3>

线上测试限制了参与者接触环境，但仍要防范人代替模型遥操作等问题。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>视频可以增加标记</h3>

对谈提到 iPad 时钟、一次性随机哈希值等做法，用来降低后期加速和挑选旧片段的空间。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>观看要能接近现场</h3>

社区讨论远程摄像头与交互式观察；这还没有成为一个成熟、通用的解法。
</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm italic">
“最好的方法就是带着大家站在这东西面前现场看。这是个唯一的ground truth。”
<span class="block text-xs opacity-60 mt-1 not-italic">范浩强谈判断演示可信度的底线</span>
</div>

---

# 2026 的主命题：把数据规模化

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>嘉宾借鉴语言模型的训练次序</h3>

先用大规模、覆盖面广的数据预训练；再用高质量数据监督微调；最后以强化学习提高任务成功率。高阳认为，机器人也可沿这个次序探索。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

<h3>约束在于具身数据不在网页上</h3>

机器人需要感知与动作配对的数据。采集场景、人、硬件和标注方式，都要由团队实际组织起来。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
“现在真的就是scaling data可能是26年最重要的一个主题。”
<span class="block text-xs opacity-60 mt-1 not-italic">范浩强的 2026 判断</span>
</div>

---
layout: two-cols-header
---

# 从预训练到后训练，路线正在收敛

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>广覆盖预训练。</strong> 吸收大量文本、视频或其他高覆盖数据，建立对世界的先验。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>高质量微调。</strong> 遥操作和可穿戴设备等数据，把感知与动作对齐到具体任务。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>强化学习。</strong> 在任务成功率上继续打磨；嘉宾将它放在发布前的可选阶段。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>细节未定。</strong> 基模、数据比例和具体算法仍有多条路线。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./data-training-path.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 四类数据，各自解决不同问题

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>仿真数据</h3>

可反复生成与控制条件；代价是场景要由专业人员搭建，多样性不容易扩大。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>人类视频</h3>

覆盖面可能很大，适合建立视觉与日常行为的先验；动作信号不如机器人操作直接。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>可穿戴设备</h3>

人在真实场景中工作时同步采集视角与动作，能把采集从固定实验室扩展出去。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>遥操作</h3>

操作与机器人本体更接近，适合高质量任务数据；设备、人力与组织成本也更高。
</div>

</div>

---

# 仿真难点：不是生成一张背景图

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>场景要被搭出来</h3>

每个仿真场景都需要专业人员布置物体、材质和交互条件。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<h3>动态世界更难</h3>

高阳提到，当前一些 3D/4D Gaussian 演示擅长静态巡游，对动态场景仍有限制。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>价值仍取决于差距</h3>

仿真轨迹与真实遥操作轨迹可能不同；机器人会议也常要求论文补充真机结果。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
两位嘉宾没有否定仿真路线：如果场景搭建足够容易、真实性足够高，它仍可能成为有效数据来源。
</div>

---

# 真机与离体采集，最后都要回答同一件事

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>原力灵机选择真机采集</h3>

范浩强说，团队延续了过去线下大规模采集的经验，以真机数据为主；关键问题仍是怎样找到场景与采集人员。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>Generalist 的离体式尝试</h3>

范浩强转述 Generalist 的公开说法：人用夹具而非机器人采集，已积累 27 万小时、每周可采 1 万小时。节目没有独立核验这些数字。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
路线可以不同，但两位嘉宾都把难题落在真实世界知识的覆盖：日常会遇到的物体、操作与环境，怎样进入训练数据。
</div>

---

# VLA 描述输入输出，不规定唯一架构

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>V：视觉</h3>

模型读取相机画面等视觉信息，理解对象与场景。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>L：语言</h3>

文字任务描述帮助模型明确目标和约束。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>A：动作</h3>

模型输出机器人要执行的动作；未来还可能加入触觉等输入。
</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
高阳强调，VLA 只是输入和输出的描述。底座可以来自 VLM，也有人讨论视频模型；具体训练方案仍是开放问题。
</div>

---

# 标准化流程，是基础模型的理想形态

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>基础模型的要求</h3>

千寻以一个基模统一微调 30 个任务，希望同一套训练流程可以处理不同操作，而不是为每个任务重造方法。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

<h3>对评测的含义</h3>

任务拆分仍有价值：高分不仅表示某个动作被学会，也检验同一方法面对不同失败模式时是否稳定。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm italic">
“无论想做什么样的东西，我希望有一个标准化的一个流程。”
<span class="block text-xs opacity-60 mt-1 not-italic">高阳解释基础模型的目标</span>
</div>

---

# 机器人时代的 coding，仍没有清晰答案

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

<h3>语言模型有高价值、可复制的场景</h3>

编程覆盖大量相近需求，单位价值高，也把整个 LLM 社区推得更快。机器人还没有出现同等集中、同等清晰的场景。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

<h3>机器人服务更分散</h3>

整理房间、家政、维修等需求涉及不同环境与动作组合；传统工业机械臂也已覆盖一部分固定工序。

</div>

</div>

<div class="mt-4 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
基础模型能力决定机器人能尝试什么，商业场景还要回答成本、可靠性与客户是否愿意购买。
</div>

---

# 叠被子：一个同时考模型和硬件的愿望

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>为什么选它</h3>

范浩强把早上起床后自动叠好被子，当作自己判断通用家务能力的具象标准。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<h3>先要举得起来</h3>

被子很重；机器人抓起它时不失稳，已经对本体负载和控制提出挑战。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<h3>还要处理柔性材料</h3>

折叠、翻面、展开都让视觉和接触状态不断变化，不能由单一演示推及全部情况。
</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
嘉宾提到 Pi 0 已能在工厂叠纸盒；从纸盒到家庭里的被子，既是任务变化，也是硬件条件的变化。
</div>

---
layout: two-cols-header
---

# 从实验室信号到客户相信，中间隔着什么

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>从业者先看到苗头。</strong> 一个动作还不完全听指令，却能在很多任务上表现顺畅，可能已预示基础能力在变强。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>公众常从演示推断产品。</strong> 一段叠衣服视频容易让人以为机器人很快能进家庭，但演示与持续服务之间有距离。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>客户需要可复现的价值。</strong> 范浩强说，真正重要的是客户相信能力可以支撑实际需求，应用才会扩大。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./adoption-gap.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 2026：两位嘉宾想验证的事

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

<h3>范浩强：能否出现具身的 DeepSeek 时刻</h3>

他期待中国团队在具身模型上追赶并出现明确的技术信号；他以计算机视觉的经历为参照，认为追赶曾在几年内发生。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

<h3>高阳：基础模型能否到 GPT-3 甚至 GPT-3.5</h3>

他把当前阶段类比为 GPT-2 左右：基础模型仍有缺口，但自己对未来几个月的实验保持开放而乐观的判断。

</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">
<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">范浩强也将当前阶段类比为视觉的 CIFAR：任务规模小、离真实应用还有距离。</div>
<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">高阳估计，让普通人真正看到具身能力破圈，可能还要 3 到 4 年；这是个人判断，不是时间表。</div>
</div>

---

# 核心金句（一）

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“每个task几乎你都能找出它的那个与众不同的难点是什么。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · Table30 的能力覆盖</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“所以这模型分不清说它刚才扫没扫。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 扫码任务与状态记忆</div>
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 italic">
“无论想做什么样的东西，我希望有一个标准化的一个流程。”
<div class="text-xs opacity-60 mt-1 not-italic">高阳 · 基础模型的目标</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500 italic">
“现在真的就是scaling data可能是26年最重要的一个主题。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 数据规模化</div>
</div>

</div>

---

# 核心金句（二）

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500 italic">
“第一个叫Cherry-pick，第二个叫视频剪辑，第三个叫遥操作，第四个叫AIGC。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 演示验证要防的四类问题</div>
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500 italic">
“最好的方法就是带着大家站在这东西面前现场看。这是个唯一的ground truth。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 他认可的验证底线</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500 italic">
“我觉得现在是视觉的CIFAR时期。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 他随后说 ImageNet 尚未出现，但从年份看不远</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500 italic">
“具身的DeepSeek moment能不能到。”
<div class="text-xs opacity-60 mt-1 not-italic">范浩强 · 他在 2026 年想验证的悬念</div>
</div>

</div>

---
layout: end
---

# 具身能力何时破圈？

<div class="mt-6 text-2xl italic">
“我自己的判断是可能会在3到4年左右。”
</div>

<div class="mt-4 text-sm opacity-60">
高阳的个人估计：这是普通人能明显感受到具身能力变化的时间尺度。
</div>
