---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "155: 至简动力贾鹏：从英伟达到理想，具身智能的六边形战士"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 155

## 至简动力贾鹏：从英伟达到理想，具身智能的六边形战士

<div class="mt-8 text-lg opacity-80">晚点聊 LateTalk · 2026 年 3 月 · 2 小时 48 分</div>

<div class="mt-10 text-base opacity-70">从 CUDA、自动驾驶量产到具身智能：一位工程负责人如何重新定义产品、数据与硬件</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>十年迁移</strong><br>从 NVIDIA 的端侧计算，到理想汽车的量产智驾，再到具身智能创业。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>产品决定数据</strong><br>只有真实用户在真实场景中使用，数据闭环才会不断产生。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>硬件仍是门槛</strong><br>一致性、可靠性和工艺成熟度，决定机器人能否进入规模部署。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>模型走向统一</strong><br>生成、理解、推理与动作不宜长期割裂为互不协同的系统。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>先做完整任务</strong><br>优先选择可标准化、可迁移的端到端工作，而非替代流水线上的单一工位。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<strong>组织也是产品</strong><br>项目制、共同决策与小团队协作，来自自动驾驶时期的实战经验。
</div>

</div>

---

# 一条连续的职业轨迹

<div class="grid grid-cols-4 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-sm font-bold">2008—2012</div>
<div class="text-xl font-bold mt-2">HPC 与 CUDA</div>
<div class="text-sm mt-2 opacity-80">读书期间组装数十到上百节点的高性能计算机器。</div>
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-sm font-bold">2015 年末</div>
<div class="text-xl font-bold mt-2">加入 NVIDIA</div>
<div class="text-sm mt-2 opacity-80">成为中国自动驾驶团队的首位正式员工。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-sm font-bold">2020—2025</div>
<div class="text-xl font-bold mt-2">理想汽车</div>
<div class="text-sm mt-2 opacity-80">参与自研高速 NOA、有图转无图与 VLA 等关键交付。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-sm font-bold">2025 年下半年</div>
<div class="text-xl font-bold mt-2">至简动力</div>
<div class="text-sm mt-2 opacity-80">把智驾的软硬件、数据与产品闭环搬到具身智能。</div>
</div>

</div>

---

# 从 CUDA 进入智能汽车

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>先是计算，再是汽车</h3>
贾鹏在高性能计算时期接触 CUDA 1.0、2.0，也为核爆炸、蛋白质折叠和天气海洋预报等任务做过算法加速。NVIDIA 看中的是这段端侧加速经验。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>汽车是新的端侧终端</h3>
NVIDIA 曾尝试手机端芯片。手机散热和功耗受限后，电池更大、散热条件更宽松的智能汽车，成为端侧计算的下一个候选场景。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
早期工作从背着开发板推广芯片和 SDK 开始，随后扩展到传感器标定、感知、定位与底层软件开发。
</div>

---
layout: two-cols-header
---

# 自动驾驶为何必须跨过量产

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
2015—2019 年，行业更像面向企业的研发阶段：做演示、跑通小范围场景，但没有足够的商业规模。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
2019 年后，新势力开始量产，芯片和软件才随装车规模获得真正的数据与反馈。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
这段经历影响了他后来的判断：技术能否迭代，取决于它是否已经进入用户手中。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./drive-stages.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols-header
---

# 从平台生态转向直接交付

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
NVIDIA 的强项是芯片、SDK 和生态：让客户在工具链上开发自己的应用。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
贾鹏后来选择车企，是因为供应商很难直接拿到终端用户的数据，也难以完整验证产品体验。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
特斯拉的启发在于预埋硬件、面向用户交付，并用不断回流的真实数据优化系统。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./two-routes.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 产品不是终点，而是数据入口

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>硬件预埋</h3>
FSD 的思路是，即便用户没有订阅，也先承担车端硬件成本，为后续数据采集留出条件。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>用户反馈</h3>
直接交付产品后，真实使用中的问题才会出现，团队才能知道模型应当改什么。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>持续迭代</h3>
更大的装车规模不只意味着收入，也意味着更完整的场景覆盖和更快的学习速度。
</div>

</div>

<div class="mt-6 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
在这套逻辑里，商业化和数据并不是两个部门各自追求的目标：产品卖得出去，才有机会持续获得真实场景的数据。
</div>

---

# NVIDIA 的长期投入：十年后才显现的回报

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>CUDA 的耐心</h3>
他回忆，CUDA 花了约十年才被广泛使用。早期团队会直接帮助开发者优化代码，用一个个具体场景建立生态。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>端侧业务的耐心</h3>
Jetson 和 Drive 在收入中长期占比很低，但公司仍持续投入。智驾真正大规模出量，也是较晚发生的事。
</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
贾鹏把这种能力归结为：创始人能把远期判断讲清楚，同时公司既有业务足以支持长周期探索。
</div>

---

# 选择理想：把技术放进产品闭环

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>2020 年加入</h3>
他在理想汽车上市前拿到 offer，9 月入职。除了老同事配合的基础，更重要的是对智能化与数据闭环的认同。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>智能化被视为核心能力</h3>
他转述，理想汽车将辅助驾驶视为后续竞争的重要组成；汽车首先要成为可移动的机器人，才谈得上更丰富的车内体验。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
他的出发点很直接：不只做平台能力，也想看见用户实际使用自己参与交付的产品。
</div>

---

# 80 人、100 天、高速 NOA

<div class="grid grid-cols-3 gap-3 mt-6 text-center">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-3xl font-bold">20—30 人</div>
<div class="text-sm mt-2">他加入时，理想辅助驾驶团队的规模。</div>
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-3xl font-bold">80 人</div>
<div class="text-sm mt-2">2021 年首场自研交付时的团队人数。</div>
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-3xl font-bold">约 100 天</div>
<div class="text-sm mt-2">从代码几乎为零到量产高速 NOA 的窗口。</div>
</div>

</div>

<div class="mt-6 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
这不是单纯压缩工期。团队把它视为内部创业的首场战役：目标、资源和交付节奏必须同步，供应商工程师也进入同一封闭开发节奏。
</div>

---
layout: two-cols-header
---

# 项目制的要点：同一目标下的临时合力

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
理想辅助驾驶团队以项目而非固定组织边界组织人手：从各处抽调合适的人，集中解决一个明确任务。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
高压交付之外，仍保留一部分人做前沿预研。端到端、VLA、双系统等方向先被探索，成熟后再转入产品。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
项目制并不等于没有分工；它强调在战役中把研究、工程、交付和供应链拉到同一张作战图上。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./project-battle.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 与供应商一起打第一仗

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>共同承担风险</h3>
在首次量产中，地平线征程 3、禾赛激光雷达与速腾 MEMS 激光雷达都属于新方案。相关团队派人共同封闭开发。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>不是挑最稳妥的伙伴</h3>
贾鹏的经验是，处在追赶位置的供应商往往更愿意把资源押到一场共同交付上；双方的紧迫感更容易对齐。
</div>

</div>

<div class="mt-5 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">
这里的关键不是某个零部件，而是高层能否把整车厂、芯片和传感器团队的目标、风险与资源放到一起。
</div>

---
layout: two-cols-header
---

# 有图转无图：从覆盖城市到覆盖道路

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
高精地图方案的扩张速度取决于地图生产，也受制于地图供应商的覆盖范围和节奏。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
当时同样付费的用户，可能因为所在城市没有图而得不到城市 NOA。贾鹏认为这是产品上无法长期接受的差异。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
无图团队先在深圳验证可行性；有图版本发布后，团队决定整体切换，再用回传数据补齐能力。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./mapless-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 无图切换不是一次平滑升级

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>能力先降</h3>
开放小路、园区和更多城市后，数据尚不足，产品体验会出现明显瑕疵。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>压力叠加</h3>
切换发生在 2023 年四五月，公司同时在裁员，团队需要面对产品与士气的双重压力。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>逐条闭环</h3>
团队把问题对应到数据和迭代方案，给出每项改善的预期时间。数周后，大部分问题得到处理，6 月开始推向更多用户。
</div>

</div>

---

# 离开理想，进入具身智能

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>为什么是 2025 年</h3>
贾鹏认为，自动驾驶已有相对成熟的数据闭环和量产路径；具身智能的技术与商业化尚未收敛，仍有从零到一的空间。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>为什么不是内部孵化</h3>
他想把精力与资源集中在一件事上。对成熟车企而言，具身智能是第二曲线；对初创公司，它必须是唯一的主线。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
他将具身智能的早期窗口与自动驾驶的早期创业潮作类比：技术范式、数据来源和安全边界尚在被验证，因此第一批参与者的窗口可能更长。
</div>

---

# 三位长期搭档，三条责任线

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>贾鹏</h3>
负责算法、模型与基础设施，把自动驾驶中的数据和模型经验迁移到具身智能。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>王佳佳</h3>
负责硬件、底层软件、运控与产品。硬件快速迭代是当前投入最重的工作之一。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>王凯</h3>
负责战略、管理、融资与外部资源。三人每周开战略会，把主要分歧留在会上解决。
</div>

</div>

---
layout: two-cols-header
---

# 六边形战士：技术之外的完整能力

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
贾鹏认为，具身智能从融资热潮进入面向企业的阶段后，单点模型能力不足以决定胜负。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
团队既要定义本体、收集数据、训练模型，也要做产品、客户交付和商业结构。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
所谓全栈，不是为了包揽一切，而是让硬件、模型、数据与市场反馈能够互相校正。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hexagon-team.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 快速融资背后，是持续交付

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>每月都有新结果</h3>
贾鹏说，团队大约每月拿出一次新东西。连续的工程进展，是外部判断早期团队是否可靠的重要依据。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>融资也要有节奏</h3>
团队把投资人分为财务、战略和产业协同等不同阶段，而不是在每个时点向所有人开放。
</div>

</div>

<div class="mt-5 p-3 rounded bg-red-50 border-l-4 border-red-500 text-sm">
高估值会带来更高要求。贾鹏认为，新团队不能以进入较晚为理由降低交付标准，硬件尤其需要靠连续试错快速积累经验。
</div>

---
layout: two-cols-header
---

# 先把底座打好，再谈上层应用

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
底座包含云端视觉模型、本体、零部件、训练框架和推理框架。它决定迭代速度，因此是创业前期的主投入。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
中间层是基础模型；上层才是把模型带到工厂、商超、服务业和物流等具体领域的适配工作。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
这套分层不是把工作切开，而是说明：上层效果依赖下层能否稳定、高效地支持数据、训练和部署。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./three-layer-stack.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 模型路线：走向生成、理解与动作的统一

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>双系统的教训</h3>
理想量产双系统后，团队发现两个模型频率不同，输出协同与联合训练都会变得困难。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>一体化 VLA</h3>
贾鹏希望模型同时承担对未来画面的生成、对当前环境的理解，以及面向动作的决策，而不是由多个系统手工拼接。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>不是原样使用通用模型</h3>
互联网图文训练带来的知识，并不等于具身智能需要的三维理解、空间推理和与环境互动的能力。
</div>

</div>

---

# 基础模型与垂域团队各做什么

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>通用层</h3>
大型平台更适合投入互联网数据、多模态生成与理解等基础能力。贾鹏提到，初创公司很难承担同等规模的基础模型投入。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>垂域层</h3>
本体数据、任务数据、动作生成和最终交付，仍需要贴着具体机器人与客户场景来做。这里也是数据飞轮形成的位置。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
他的判断不是大模型公司不会覆盖这个领域，而是产品化的脏活累活会长期留在垂域团队手里。
</div>

---

# 商业化会带来最稀缺的数据

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>真实场景</h3>
穿戴式设备、真机与合成数据可以启动训练，但很难覆盖用户现场会出现的全部长尾问题。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>产品规模</h3>
产品部署得越多，越有机会持续捕获那些无法提前想象的异常情况和任务变化。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>评估能力</h3>
收集数据还不够。团队还要在真实环境中确认：新模型是否真的比旧模型更好。
</div>

</div>

---
layout: two-cols-header
---

# 双芯片与影子模式：不打扰用户地测试新模型

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
一块芯片运行稳定版本，保证用户当前体验；另一块芯片在同一场景里运行新模型，但不接管产品。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
团队比较两套模型的输出，抓回存在偏差的数据，再判断新模型在哪些任务上改进、在哪些任务上退化。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
这让端侧硬件同时承担两件事：采集真实数据，也为新版本提供真实但不影响用户的测试场。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./shadow-mode.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 合成数据的边界：增广与验证，而非主要来源

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>适合做什么</h3>
罕见问题可以被扩增：一条少见样本，生成更多相似样本供训练使用。闭环测试和验证也适合在模拟中完成。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>不适合承担什么</h3>
贾鹏不认为合成数据足以覆盖主要训练来源，尤其不能替代示教数据。真实物理世界中的接触、操作与异常仍然难以完全重现。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
这不是否定合成数据，而是把它放在更明确的位置：补足稀缺样本，帮助验证系统，而不是代替真实任务和真实用户。
</div>

---
layout: two-cols-header
---

# 被低估的变量：硬件一致性与可靠性

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
同一厂商、同一型号的两只灵巧手，A 手上采集的数据放到 B 手重放，行为可能不同。这会把硬件噪声带入训练数据。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
他观察到，行业里的所谓量产仍多是数千台级别，和汽车每年数百万、上千万台的制造强度不同。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
要进入面向企业的大规模部署，本体至少要跨过一致性、返修率、寿命与工艺流程这些基础门槛。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./hardware-gates.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 此刻的本体：先匹配模型能力

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>半人形、轮式下肢</h3>
至简动力当前选择双臂加轮式底盘。贾鹏认为，这在现阶段应用里更通用、效率也更高，不必先追求人形的最高自由度。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>硬件要服从模型</h3>
如果本体自由度远高于模型可用的能力，硬件和算法团队会朝不同方向奔跑。先简化构型，才能让软硬件共同迭代。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
他也认为，特斯拉和宇树在更复杂构型上持续推进，对整个供应链有价值：它们会把关节、制造和工艺能力往前推。
</div>

---
layout: two-cols-header
---

# 商业场景要从完整任务开始

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
团队不优先进入一条既有流水线，替代其中一个节拍极快、容错极低的工位；现有硬件和算法还难稳定达到这种要求。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
更合适的是从取料到上料、下料、质检、去毛刺再回仓的完整任务。流程可重新梳理，模型也能积累可复用的任务能力。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
如果换到另一家客户仍是相似任务，只需补充数据并微调，产品才有可能标准化。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./end-to-end-task.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么工厂与商超仍有机会

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>柔性生产</h3>
工件经常变化、产线会接散件，传统写死动作的机械臂很难快速适应。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>物品泛化</h3>
当前更现实的组合是通用移动、识别不同物品，再完成抓取、夹取、搬运等简单操作。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>服务业成本</h3>
他举例称，欧洲普通服务人员的成本约为每月 3000 欧元；商超补货、整理货架和仓储摆放因此存在需求。
</div>

</div>

---

# 从面向极客到面向企业：先跨过两道门

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>门一：硬件可量产</h3>
本体要有一致性、可靠性和可维护性。否则小批量部署的返修成本会吞掉产品价值。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>门二：任务可达高分</h3>
通用基础模型在任意任务上可能只有六七十分；面对物理世界的独立任务，必须被适配到接近可用的高可靠水平。
</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
他预计 2026 年末到 2027 年初会看到向面向企业应用转换的信号，但这属于他的判断，不是已经发生的事实。
</div>

---

# 进家要排在更后面

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>第一阶段</h3>
在工厂、商超等较封闭场景，先解决移动、简单操作与物品泛化。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>第二阶段</h3>
随着灵巧手成熟，逐步处理更丰富的操作任务，再进入酒店、餐饮等半封闭服务场景。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>第三阶段</h3>
家庭里人与孩子靠近机器，安全与交互泛化必须先被解决。贾鹏给出的个人预期是 2030 年附近。
</div>

</div>

---

# 行业终局：开放生态与垂直整合可能并存

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>开放生态</h3>
通用多模态基础模型由大型平台投入，垂域团队带着自己的数据、工作流与本体做应用开发，类似 Agent 生态。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>垂直整合</h3>
另一类公司会像特斯拉一样，把模型、硬件、数据和产品做成闭环。不同本体形态与垂域需求，可能让市场不止剩下少数玩家。
</div>

</div>

<div class="mt-5 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
贾鹏的判断是：人形会是最通用的一类形态，但轮式、四足和履带底盘在特定工况下可能更高效。
</div>

---

# 早期组织：把每个人放进一片荒地

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<h3>不急着画层级</h3>
团队约 80 多人，硬件、算法和外部职能分别直接挂在三位合伙人之下。每个人可能同时扛两三件事。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<h3>先问能否开荒</h3>
面试时，贾鹏会先确认候选人是否相信具身智能的价值，也会问对方能否跳出原有专业边界，承担尚未定义清楚的工作。
</div>

</div>

<div class="mt-5 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">
项目制适合早期探索，但公司规模更大后，产品、商业和流程的横向协同会增加；贾鹏认为届时仍需要补上相应机制。
</div>

---

# 从工程负责人到 CEO：开始关心人和取舍

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<h3>责任从事扩展到人</h3>
过去主要把技术与产品做好；创业后，还要考虑招聘、资金、办公环境，甚至员工家人的突发需求。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>战略是要什么、不要什么</h3>
他把 CEO 的工作概括为在众多诱惑中作取舍：是否做灵巧手、是否进家庭、何时扩张，都必须服从当前阶段。
</div>

</div>

<div class="mt-5 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">
他承认自己原本更像专注单一问题的工程师，因此特意与负责管理、融资和交付的伙伴分工，让关键事项有人能够长期盯住。
</div>

---

# 2026—2028：机会、压力与成本结构

<div class="grid grid-cols-3 gap-3 mt-6 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<h3>技术收敛</h3>
他预计模型、数据采集与基础设施的做法会逐渐接近；硬件仍是最大的不确定项。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<h3>竞争加剧</h3>
他判断行业会经历融资与创业热潮，单点能力不足以穿越波动，团队需要同时具备技术、商业、组织与资金能力。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<h3>钱主要花在哪</h3>
数据采集成本相对可控；GPU、人才与硬件备货更重。贾鹏说，公司研发费用中超过三分之一用于 GPU。
</div>

</div>

---

# 核心金句（一）

<div class="text-sm opacity-70 mb-3">关于产品、数据与硬件的判断</div>

<div class="space-y-2 text-sm leading-relaxed">

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“技术最终一定要服务于产品”<div class="text-xs opacity-70 mt-1 not-italic">— 他解释为何从 NVIDIA 转向车企交付</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“数据是一切”<div class="text-xs opacity-70 mt-1 not-italic">— 他转述理想汽车在 2020 年的关键判断</div></div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded italic">“但是我感觉硬件远远没有到那一步”<div class="text-xs opacity-70 mt-1 not-italic">— 对具身智能量产准备度的观察</div></div>

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded italic">“合成数据这件事儿有用，但是它不是主力”<div class="text-xs opacity-70 mt-1 not-italic">— 对合成数据适用范围的限定</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“你基本最后花了90%的精力解决最后的10%的长尾问题”<div class="text-xs opacity-70 mt-1 not-italic">— 自动驾驶经验如何影响真实数据观</div></div>

</div>

---

# 核心金句（二）

<div class="text-sm opacity-70 mb-3">关于创业、效率与阶段判断</div>

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded italic">“我觉得我们是个六边形战士”<div class="text-xs opacity-70 mt-1 not-italic">— 对技术、战略、产品、品牌、组织与商业的要求</div></div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded italic">“从一个基础模型到单一任务上能做成一百分”<div class="text-xs opacity-70 mt-1 not-italic">— 他用来描述具身智能落地的关键路径</div></div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded italic">“整个公司的费用有三分之一以上是GPU的费用”<div class="text-xs opacity-70 mt-1 not-italic">— 训练资源而非采集本身，是当前更重的成本</div></div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded italic">“我觉得这个东西是需要敬畏的”<div class="text-xs opacity-70 mt-1 not-italic">— 他谈机器人进入家庭前必须先解决安全与交互泛化</div></div>

</div>

---
layout: end
class: text-center
---

## “我更期望的是从一个大家不被看好或者从零的一个状态，我能把它带到一个很好的状态。”

<div class="mt-6 text-base opacity-70">— 贾鹏谈自己更愿意打的 0 到 1 逆风局</div>
