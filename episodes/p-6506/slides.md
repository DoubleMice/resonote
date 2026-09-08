---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: DHH：智能体工程、可塑操作系统与编程的下一步
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# DHH：当编程变成与智能体协作

<div class="text-xl mt-5 opacity-80">从手写 Ruby，到用自然语言塑造软件与操作系统</div>

<div class="mt-12 text-sm opacity-60">Lex Fridman Podcast #501 · 2026 年 8 月 · 5 小时 22 分</div>

<div class="mt-8 text-base">David Heinemeier Hansson（DHH）<br><span class="opacity-70">37signals CTO · Ruby on Rails 创始人 · Omarchy 发起者</span></div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>01 能力拐点</strong><br>他把 2025 年末之后的变化，看成从助手到能独立选路的转折。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>02 编程重心</strong><br>人类的价值从敲实现，移向定义问题、判断结果与保持系统形态。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>03 新工作台</strong><br>终端、并行任务、多台机器和异步协作，正在替换单线程的专注编写。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>04 架构仍重要</strong><br>在 token 有限的当下，清楚的边界仍会降低智能体后续修改的成本。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>05 Omarchy 实验</strong><br>他用安装速度、插件和故障诊断，测试一个面向智能体的 Linux 桌面。
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>06 人的处境</strong><br>生产率上升可能带来新需求，也可能让部分岗位消失；他主张直面这层不确定性。
</div>

</div>

---
layout: two-cols-header
---

# DHH 所感受到的三段跃迁

::left::

- 2025 年夏，他看到的是补全、聊天与更快的检索；工具没有改变自己写代码的方式。
- 11 月试用 Opus 4.5 后，他第一次觉得输出接近自己会写的代码。
- 到 2026 年夏，他更多描述问题与模糊意图，让模型提出路线；自己从持续驾驶变成判断与审阅。

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">这是 DHH 对个人工作流的阶段划分，不是对所有软件领域的能力承诺。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./agent-stages.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 变化不只在模型更聪明

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>智能体有了工具链</strong>

它能操作电脑、调用工具、检查结果，并在失败后继续尝试。DHH 认为，这种执行框架与模型能力同样改变了可交付性。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>人的注意力被释放</strong>

任务能分给多个子智能体并行执行；人不必守着一个窗口等待，而是处理问题、选择方向、验收输出。
</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">他以自己从怀疑到投入的经历提醒：同一模型，放进不同工作方式，感受会完全不同。</div>

---

# Vibe Coding 的边界：看不看实现

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>DHH 的定义</strong>

把任务交给智能体，自己不查看实现，他称之为 Vibe Coding。关键在于把实现层完全交给系统，而不在于是否使用自然语言。
</div>

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>另一种协作</strong>

在成熟的 Ruby 代码库里，他仍会检查关键实现、关心架构；这更接近智能体加速的开发，而非完全黑箱。
</div>

</div>

<div class="mt-6 text-sm opacity-70">同一位开发者可以在不同风险、不同熟悉度的领域，采用不同程度的审阅。</div>

---

# 实现交给模型，产品判断留给人

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>做什么</strong>

服务谁、要解决什么问题、第一版包含哪些内容。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>先做什么</strong>

取舍、优先级与交付顺序，决定系统最终是否真正可用。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>看起来怎样</strong>

用户体验、界面感觉与产品风格，不会自动从代码知识中长出来。
</div>

</div>

<div class="mt-7 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">DHH 的结论是：当智能体处理实现时，产品管理的能力反而更直接地决定软件成败。</div>

---
layout: two-cols-header
---

# 好的软件不是写出来后才被理解

::left::

- 他把敏捷开发的经验延伸到智能体时代：人们往往在真正使用软件后，才知道自己要什么。
- 因而起点不必写成过度细密的规格；先让系统形成一个可试用的东西，再用反馈修正。
- 智能体的价值在于把这种试错循环压缩得更快，而不是替人预先猜中所有需求。

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">这里说的模糊不等于没有目标；它指不把每条实现路径先锁死。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./outcome-loop.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 人类擅长在少量选项中作判断

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>先生成，再比较</strong>

DHH 认为，人面对三种方案时常能迅速判断偏好；但选择膨胀到二十种，判断会明显变难。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>把直觉放进循环</strong>

对可用性、比例和感觉的快速反应，未必能先写成完整规则，却能在试用时指导下一轮修改。
</div>

</div>

<div class="mt-7 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">因此，优秀的协作界面不只要会生成，也要让人低成本地比较、否决和重定向。</div>

---

# 手工雕琢的回报正在变化

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>过去的经济理由</strong>

整洁的架构更容易被小团队理解和改动；改一处不会牵连多处，成本与缺陷都更可控。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>今天还没有消失</strong>

DHH 不认为这种价值已经归零。智能体仍会受上下文、预算和已有坏结构影响，连续叠加低质量改动仍会形成混乱系统。
</div>

</div>

<div class="mt-6 text-sm opacity-70">他的判断带有时间条件：随着 token 与模型能力变化，手工维护每一行的经济回报可能继续下降。</div>

---
layout: two-cols-header
---

# 架构是智能体理解上下文的成本

::left::

- DHH 把当下视为 token 仍稀缺的阶段；智能体不可能无限次重读整个代码库。
- 清楚的模块边界让它更快定位影响范围，也让下一次改动不必从头建立理解。
- 他见过一连串看似可接受的 PR 叠在一起，最后使整体架构失去连贯性。

<div class="mt-5 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">它不能保证智能体会自动保持架构；这只是对现阶段工作条件的约束判断。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./architecture-context.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 对程序员岗位：两种可能同时存在

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>软件更便宜，需求可能扩大</strong>

DHH 提到杰文斯悖论：当做程序的成本下降，组织可能想要更多程序，于是需要更多做产品的人。
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>固定任务也可能少用人</strong>

若一家公司的任务量不变，生产率提高确实可能意味着更少的人完成同样工作；被替代者承受的损失是真实的。
</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">他拒绝把任何一边当作必然结果：供给扩张与岗位收缩，可能在不同公司、不同领域同时发生。</div>

---

# 给焦虑中的开发者：先回到当下

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>学状态前沿</strong>

动手理解今天的能力边界，而不是根据两次模型迭代后的世界替自己写判决书。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>保持建造</strong>

如果喜欢的是让不存在的东西出现，低成本实现会让可尝试的项目变多。
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>找到同伴</strong>

开源与共同建造能让人从孤立的焦虑中出来，也会抬高一个项目能设想的目标。
</div>

</div>

---

# 单线程心流，正在变成并行调度

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>过去：一题到底</strong>

手写代码时，他沉入一个问题，按顺序完成。这种连续专注是传统心流的入口。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>现在：等待也要被利用</strong>

智能体不会像键盘输入一样即时回应。人把等待时间交给下一项工作，在不同线程之间做决策和解堵。
</div>

</div>

<div class="mt-7 p-3 bg-purple-50 border-l-4 border-purple-500 rounded">DHH 不把这理解为少做工作，而是把人的工作换成更频繁的任务选择与质量判断。</div>

---
layout: two-cols-header
---

# 并行工作台：人是调度与判断的瓶颈

::left::

- DHH 从 tmux 的多个终端窗格起步，后来加入 Herder，用提醒了解哪些智能体完成或需要决定。
- 他用 KVM 和 Tailscale 把多台机器接入同一工作环境，降低新增计算资源的摩擦。
- 他估计自己同时处理约 16 条线程已接近认知上限；智能体越快，可舒适管理的线程越少。

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">16 条线程是他的个人工作体验，不应当被当作团队配置的基准。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./parallel-workbench.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 产出变多，不等于代码行数更有意义

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>他自己的对比</strong>

以前一小时也许只完成一个精心打磨的文件；并行运行后，同一时段会出现更多可审阅的变更。
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>他同时反对这个指标</strong>

DHH 明说代码行数是糟糕的衡量方式。问题不在产出多，而在多出来的产出是否解决了真实问题。
</div>

</div>

<div class="mt-7 text-sm opacity-70">在他的工具链中，Neovim 更像项目浏览器与上下文阅读器，而不是主要的写代码地点。</div>

---
layout: two-cols-header
---

# 终端为何在智能体时代重新重要

::left::

- 小工具可从命令行组合；智能体可以逐步调用、观察输出，再继续行动。
- 配置能保存、版本化并在新机器上重建；个人环境不再必须依靠一连串手工点击。
- DHH 不认为 TUI 会覆盖所有人。鼠标界面仍更适合第一次接触计算机的用户。

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">终端的优势在于可组合、可记录，并不要求每个用户都学习同一套界面。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./terminal-chain.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---
layout: two-cols-header
---

# Linux 的旧缺点，成了智能体的接口

::left::

- DHH 的说法很直白：Linux 的许多能力以配置文件和命令行工具呈现。
- 对人类新手，这些细节可能难找、难记；对能读日志、查源码、执行命令的智能体，它们更容易组合。
- 他因此认为 Linux 在智能体工作流上比高度锁定的桌面系统更顺手。

<div class="mt-5 p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm">这是 DHH 对三大桌面平台取舍的判断，重点是可编排性，不是对所有用户体验的排名。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./linux-agent.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# Omarchy：先造一台自己想用的电脑

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>有明确取舍的发行版</strong>

DHH 选择预装自己会用的录屏、剪辑、终端与智能体工具，而不是从一个空白桌面开始让用户逐项装配。
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>不是模仿 macOS</strong>

他的目标是给键盘、平铺窗口与智能体协作做一套有个性的默认环境，并不复制熟悉的桌面隐喻。
</div>

</div>

<div class="mt-6 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">他把产品名中的 Omakase 理解为主厨决定菜单：预设并非中立，却能减少刚开机时的选择负担。</div>

---

# 一分钟安装，为什么值得较真

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-center">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>42 分钟</strong>

他讲述一台新 Mac 完成更新、能装 Adobe Lightroom 前所花的时间。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>1 小时 35 分</strong>

他讲述另一台预装 Windows 的新 PC 从拆箱到可用所花的时间。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>约 1 分钟</strong>

他现场展示 Omarchy Quattro 的安装目标；随后还在测试约 12 秒的专用镜像。
</div>

</div>

<div class="mt-7 text-sm opacity-70">这些是 DHH 在节目中的对比与目标，用来说明他对启动和安装等待的厌恶，而非跨平台的标准化基准测试。</div>

---
layout: two-cols-header
---

# 把安装时间当作可拆解的问题

::left::

- 用户回答用户名、密码、时区时，安装器可以在后台预加载不依赖这些答案的内容。
- 他还通过缩小 ISO、移除未使用的字体变体、压缩驱动包来减少解压时间。
- 智能体被用来反复测试不同的安装次序与假设，寻找能再省一秒的地方。

<div class="mt-5 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">DHH 用清晰的秒数指标推动对底层约束的理解，并不主张所有产品都追逐安装速度。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./install-ladder.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 小处减重：从字体包到驱动包

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>JetBrains 字体</strong>

Arch 的完整字体包约 200 MB；他只用一个带 Nerd Font 补丁的等宽版本，估计可降到约 16 MB，因此另做精简包。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>NVIDIA 驱动</strong>

他提到重压缩两个驱动包，约节省 200 MB。构建归档可以慢一些，安装介质更小则会直接减少后续传输与解压。
</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">数字来自 DHH 的口述示例，意在展示逐项检查的工作法，不是完整的安装包清单。</div>

---

# 预装与从零开始是两种产品观

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>传统极简立场</strong>

用户自己选择每一个组件，系统保持空白。这适合享受搭建过程、愿意投入大量时间的人。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>DHH 的立场</strong>

刚装好就应当能做事：OBS、Kdenlive、Umacut、Neovim、Herder 与终端主题都可作为默认环境的一部分。
</div>

</div>

<div class="mt-7 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">他不否定自己配置 Arch 的乐趣，但认为面向更多用户的发行版需要有清晰、可用的起点。</div>

---

# 追求极致，先把约束拆开

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>看见物理边界</strong>

他拿 7 GB/s 的 NVMe 读取速度发问：离硬件极限还远时，为什么先接受漫长等待？
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>把目标变成游戏</strong>

从 15 分钟到两分钟、再到一分钟，明确的数字让优化变成一连串可验证的挑战。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>不预设停止点</strong>

他借跑进四分钟的里程碑表达：一个约定俗成的门槛被打破后，后续空间才会显露。
</div>

</div>

---

# Linux 故障诊断，正在变成智能体体验

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>过去的摩擦</strong>

晦涩错误信息常把用户带去论坛搜索；找到答案前，必须先学会判断哪些信息相关。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>DHH 看到的变化</strong>

智能体能从日志切到软件源码、定位出错位置，再整理可提交的报告。他说今年以来没遇到过它不能诊断的问题。
</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">这是一位重度使用者的经验，不应外推成每台 Linux 机器、每个软件故障都已可自动解决。</div>

---

# Omarchy 的崩溃观察器想做什么

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>应用崩溃</strong>

系统捕获出错事件，而不是只把一段日志留给用户。
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>询问授权</strong>

用户可决定是否让默认智能体开始诊断，避免把自动处理伪装成无条件后台行为。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>产出报告</strong>

智能体读取相关日志、检查源码，并可整理成带细节的 bug report 供用户提交。
</div>

</div>

---

# 一个未发布 bug 的故事

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>先触发了 GitHub 限制</strong>

一次 QA 同时发现 28 个真实问题，智能体在约 12 秒内集中提交，账号被 GitHub 视为疑似垃圾信息而受限。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>改走邮件后仍找到关键点</strong>

它检查 meese 的源码，发现维护者已修复但尚未发布的缺陷，并把问题说明发给 JDX；对方收到的是一份针对未发布软件的报告。
</div>

</div>

<div class="mt-6 text-sm opacity-70">故事同时说明能力与边界：并发执行会放大排查速度，也会更容易触发外部服务的速率限制。</div>

---

# 一次 Python 转 Rust 的现实检验

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed text-center">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>输入</strong>

终端屏保所用的 Python 库 Terminal Text Effects，以及无依赖、单一可执行文件的要求。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>Fable 的结果</strong>

DHH 说它在 45 分钟内完成首版，报告启动从 86 ms 降到 2 ms，执行约快 9.6 倍。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>后续</strong>

他又让其他模型复做，并继续跑自动研究，口述的最终执行提升约为原来的 46 倍。
</div>

</div>

<div class="mt-6 text-sm opacity-70">这些数值是一次特定转换任务的自述结果，不能代表任意语言迁移的速度、成本或正确性。</div>

---
layout: two-cols-header
---

# 不只选最强模型：把审阅独立出来

::left::

- DHH 认为 Fable 当时最强，尤其擅长制定长任务计划；Opus 5、GPT Sol、Grok、DeepSeek 等也能在不同成本与时延下完成任务。
- 他更在意来源不同的模型互相检查：一个负责实现，另一个负责审阅，之后还让 GitHub Copilot 再找问题。
- 类比人类协作：再好的开发者也会从可靠同事的 review 中受益。

<div class="mt-5 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">这里的模型排名反映录制时的个人体验，前沿模型的相对位置变化很快。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./review-loop.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 审阅的价值，从找错到要求更简单

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>自动测试不替代审美</strong>

DHH 认为当前工具链已会运行测试、发现不少错误；但他仍会看代码整体的形状、比例和复杂度。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>编辑式反馈</strong>

他常不亲手重写，而是指出一段实现看起来太复杂。智能体随后常能承认问题，并把方案缩短。
</div>

</div>

<div class="mt-6 p-3 bg-purple-50 border-l-4 border-purple-500 rounded">人不必逐字雕刻，仍能对结构、语气和最终形态负责。</div>

---

# 智能体也可以出现在协作软件里

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Basecamp 里的同事</strong>

DHH 说他们开始把智能体放进 Basecamp，像分配给同事一样给它待办事项。异步工具让人不会预期立刻得到回复。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>从对话框转向队列</strong>

聊天界面容易让人守着等待；待办、PR 与问题列表则天然适合并行推进、稍后集中验收。
</div>

</div>

<div class="mt-7 text-sm opacity-70">他并不认为终态已定：终端、聊天和项目管理系统可能各自保留一部分角色。</div>

---
layout: two-cols-header
---

# 当人是瓶颈，就让系统先整理候选项

::left::

- 他在做 Omabot，计划定期处理待办、PR 与 issue，而不是让每个动作都等待人工启动。
- 他提到让协调器和执行代码分开，在安全 VM 中处理不可信内容，减少外部输入污染模型的风险。
- 系统汇总准备好的 PR 或建议关闭的事项，DHH 再决定哪些应该继续。

<div class="mt-5 p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm">自动化先压缩候选集合，人仍负责权限、优先级与最终合并。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./human-gate.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 英语开始成为新的编程界面

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>他仍读代码</strong>

DHH 并没有停止读实现，尤其会审视关键系统部分；改变的是他向机器表达意图的主要媒介。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>他把自然语言当作工作语言</strong>

近几个月，他用英语描述目标、约束和问题。对他而言，语言的表达力让这个过程比 Ruby 更令人愉快。
</div>

</div>

<div class="mt-6 p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm">用英语编程是 DHH 的比喻，不表示自然语言已经替代所有形式化接口与验证手段。</div>

---

# 少一点规定路径，多一点表达意图

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>过度细化会损伤能力</strong>

他举 agents.md 与 Claude.md 的热潮为例：模型更强之后，冗长的人类指令可能从帮助变成束缚。
</div>

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>含蓄并非含混</strong>

像写作一样，好的提示可以传达风格、优先级与方向，同时把具体路径交给理解上下文的一方去推断。
</div>

</div>

<div class="mt-7 text-sm opacity-70">他的前提是对方足够聪明并能验证自己；在高风险系统中，人仍要明确限定权限、测试与验收条件。</div>

---

# 非确定性，在他眼中是创造力的来源

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>同一句提示不会总有同样答案</strong>

DHH 接受这种差异，认为它是生成新路径的条件，而不是只能被消除的缺陷。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>温度带来扰动</strong>

他把温度参数视为创造性的一部分：完全确定的系统不一定能产生意外但有价值的方案。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>判断必须跟上</strong>

既然输出会变，人就更需要试用、比较、审阅与回归测试，而非只相信第一次结果。
</div>

</div>

---

# 从网页完成注册：一次早期的未来预告

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>Kev bot 的路径</strong>

他让 OpenClaw 类的智能体访问 Fizzy。遇到没有邮箱的阻碍后，给出下一句指示：去 hey.com 注册邮箱，再回来完成注册。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>然后进入 Basecamp</strong>

智能体用网页接收邀请、加入项目并在 AI 房间自我介绍。整段过程当时约花 12 分钟，DHH 把它视为能力方向的展示。
</div>

</div>

<div class="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">他也承认当时体验还不够高效：浏览器路径慢、token 消耗高，CLI 与 MCP 在许多工作上仍更实用。</div>

---

# 移动端控制与家务机器人的边界

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>他实际在用的远程入口</strong>

Claude 的手机应用可以接上终端中启动的 Claude Code 会话，因此他能在外出时继续查看与推进工作。
</div>

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
<strong>他暂不追求全自动生活</strong>

他谈到别人把健康数据和 Tesla 接给智能体的故事：系统因喝水不足而改道去商店。这既有趣，也提示自主权限要有边界。
</div>

</div>

---
layout: two-cols-header
---

# 可塑操作系统：需求、变化、再试用

::left::

- DHH 希望用户能直接说出想要的股票面板、日历或工作方式，而不是先学会窗口系统、配置格式和插件 API。
- Omarchy 的插件机制与面向智能体的技能文件，尝试把扩展系统的门槛降到自然语言层。
- 他提到版本发布后三天已有 330 个插件；这显示参与热度，但不是对长期生态规模的预测。

<div class="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">理想状态是让系统随每轮试用继续改变，而非期待一次生成永久正确。</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./malleable-os.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# Linux 社区会有两种不同的乐趣

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>自己搭建一切</strong>

一些 Arch 用户享受花数百小时配置系统、打磨细节；DHH 认为这完全合理，也不应被新工具否定。
</div>

<div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>直接使用有主张的系统</strong>

Omarchy 面向的是另一个群体：希望拿到一个完整起点，再让智能体和插件继续改造的人。
</div>

</div>

<div class="mt-6 text-sm opacity-70">他希望两种社群共享 Linux 的技术基础，却不必有同一套目标、审美或工作方式。</div>

---

# Omakub 到 Omarchy：差异化更能吸引人

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>第一阶段</strong>

Omakub 建在 Ubuntu 之上，风格化、现代化，但仍接近传统桌面。
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
<strong>第二阶段</strong>

早期 Omarchy 需要先装 Arch，再执行安装；随后才做成可直接安装的 ISO。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>他观察到的反应</strong>

平铺窗口与智能体优先的明确方向，反而比模仿熟悉系统的路线带来更多吸引力。
</div>

</div>

---

# 早期采用者不是终点

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>先容忍不完整</strong>

DHH 把早期用户视为愿意玩新玩具的人：他们会发现问题，也会帮助项目从能用推进到好用。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>再等到转折点</strong>

他以 Linux 对硬件驱动的长期积累说明：持续修补能把最初看似玩具的东西，推到更多普通用户可接受的位置。
</div>

</div>

<div class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">他用这套叙述解释 Omarchy 的增长，但产品拐点何时出现仍不可精确预测。</div>

---

# 开放系统与 AI：DHH 的 Linux 乐观论

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>已有的基础</strong>

他指出 AI 基础设施与服务器早已大量运行在 Linux 上；桌面端没有同样普及，不代表底层能力不存在。
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
<strong>新的入口</strong>

当智能体能读懂配置、错误和源码时，过去令人却步的自由度可能转变成让个人系统可被重写的优势。
</div>

</div>

<div class="mt-7 p-3 bg-purple-50 border-l-4 border-purple-500 rounded">这也是他拥抱 AI 的核心动机：让人能改动更多东西，而不是让电脑封闭地替人完成一切。</div>

---

# 社交媒体的优化目标，也值得被审阅

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded">
<strong>奖励函数是停留时长</strong>

DHH 担心以参与度为目标的推荐系统，会学习推送最令人愤怒、最让人上瘾的内容。
</div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
<strong>习惯会反过来训练算法</strong>

他把短视频比作棉花糖实验：在诱发愤怒或欲望的内容上多停留，系统就会继续投喂同类内容。
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded">
<strong>主动调节输入</strong>

他曾停用 X 三周，并尝试把自己的输出与关注点转回技术、建造和乐观的内容。
</div>

</div>

---

# 在快速变化里，仍要记得时间有限

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
<strong>memento mori</strong>

Omarchy 的日历里藏着一个功能：除了显示一年已经过去多少，也可按预期寿命显示人生进度。DHH 设的默认寿命是 90 岁。
</div>

<div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
<strong>不为优化而优化</strong>

他谈到摘下 Oura Ring、减少对每项指标的追踪；重点是健康管理不应替代真实地生活、爱人与创造。
</div>

</div>

<div class="mt-6 p-3 bg-green-50 border-l-4 border-green-500 rounded">这条线把整期对谈拉回人本身：软件、速度和智能体都是工具，人的时间与关系才是使用它们的背景。</div>

---

# 核心金句（一）

<div class="text-sm opacity-70 mb-3">关于工作重心、判断与工具的五句话</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“几十年一事无成，几周却能走完几十年。”<div class="text-xs opacity-70 mt-1 not-italic">DHH 以此描述自己感到的能力跃迁。</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“软件就是产品管理。”<div class="text-xs opacity-70 mt-1 not-italic">实现交给智能体后，问题定义与优先级更显眼。</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“给我三个选项，我会选一个。”<div class="text-xs opacity-70 mt-1 not-italic">他用这句话概括人对少量候选方案的判断优势。</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“眼下，我们人人都受 token 限制。”<div class="text-xs opacity-70 mt-1 not-italic">这解释了为什么架构与上下文仍有现实价值。</div></div>

<div class="col-span-2 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“用智能体编程，需要一套不同的工具。”<div class="text-xs opacity-70 mt-1 not-italic">从单线程专注，转向并行任务、提醒与审阅。</div></div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-70 mb-3">关于 Linux、产品主张与自然语言的五句话</div>

<div class="grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“智能体热爱 Unix 哲学。”<div class="text-xs opacity-70 mt-1 not-italic">他认为命令行工具与小组件很适合被智能体编排。</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“Linux 里的一切，不是配置文件，就是 CLI 工具。”<div class="text-xs opacity-70 mt-1 not-italic">DHH 用这个判断解释 Linux 在智能体工作流中的可改造性。</div></div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“追求卓越，无须解释。”<div class="text-xs opacity-70 mt-1 not-italic">DHH 转述 Mitchell Hashimoto，用来说明他执着于安装速度。</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“我想拥有自己的电脑。更进一步，我想让它变形。”<div class="text-xs opacity-70 mt-1 not-italic">这是他对可塑操作系统的个人诉求。</div></div>

<div class="col-span-2 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“如果有一种语言比 Ruby 更美，那就是英语。”<div class="text-xs opacity-70 mt-1 not-italic">他用它概括从写实现到表达意图的转变。</div></div>

</div>

---
layout: end
class: text-center
---

# 把未来当作可以参与的事

<div class="mt-10 text-2xl italic">“未来终会到来，无论你喜不喜欢；不如选择为它兴奋。”</div>

<div class="mt-8 text-sm opacity-70">DHH 给开发者的建议：少预测遥远的形态，多学习、建造，并和同伴一起检验今天的工具。</div>
