---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: E248｜一个“催发货”AI要跑通260步，和阿里瓴羊彭新宇聊聊中国式FDE
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 一个催发货 AI 要跑通 260 步

## 和阿里瓴羊彭新宇聊聊中国式 FDE

<div class="mt-8 text-sm opacity-60">
硅谷101 · 2026年8月 · 1小时4分钟
</div>

<div class="mt-5 text-xs opacity-50">
嘉宾：彭新宇，阿里巴巴集团副总裁、瓴羊 CEO
</div>

<div class="mt-10 text-sm opacity-70">
从把系统交付给客户，走向让数字员工拿到业务结果
</div>

---

# 为什么这期值得关注

<div class="text-sm opacity-70 mb-3">这场对话把 FDE 从职位名称拉回企业现场：流程有多长，数据是否可用，结果怎样结算。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>一个电话，260 多步</strong><br>
催发货要穿过订单、仓库和多个平台；难点落在流程与数据的连接上。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<strong>FDE 的三种能力</strong><br>
AI 锐度、行业深度、数据宽度共同决定数字员工能否按业务目标工作。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>AI 实施像招员工</strong><br>
企业要给 Agent 权限、目标和裁量权，还要在上岗后持续复盘。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>标准化不等于千篇一律</strong><br>
平台提供共性环境，企业数据和岗位标杆决定最后的工作方式。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<strong>企业先算结果，再选模型</strong><br>
坐席费、效果费、模型成本和数据治理都要放进同一本账里。
</div>

</div>

---

# 从 C 端热闹转向 B 端账本

<div class="grid grid-cols-2 gap-3 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>主持人的开场问题</strong><br>
主持人提出一个企业软件市场的老规律：客户每花 1 美元购买软件，还要再花 6 美元把它用起来。AI 正在重新分配这部分投入。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>企业侧的判断标准</strong><br>
个人用户会追求新奇体验；企业要看重复工作能否被更高效地处理，最后还要回到账是否算得过来。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>瓴羊的定位</strong><br>
彭新宇把瓴羊描述为企业级增长 Agent，核心工作是围绕消费流通场景，帮助企业处理营销、销售、客服和运营。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>本集的中国样本</strong><br>
对话不讨论抽象的职位热度，而是拆开一家企业怎样识别问题、治理数据、训练 Agent，再让它进入真实流程。
</div>

</div>

---
layout: two-cols
---

# FDE 的价值来自三种能力的叠加

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>AI 锐度</strong><br>
知道模型、工具和 Agent 能做什么，也知道什么时候需要人工介入。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>行业深度</strong><br>
理解岗位流程和业务规则，知道每一步怎样影响订单、投放或客户服务。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>数据宽度</strong><br>
能治理企业数据、权限和上下文，让系统按业务目标持续调整。
</div>

<div class="mt-4 text-sm opacity-70">这三种能力合在一起，FDE 才能判断系统是在变好还是变差，并继续调教它。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fde-capabilities.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# FDE 不是给驻场运维换一个名字

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>传统运维的边界</strong><br>
传统运维首先保证系统正常运行。它面对的是已有系统的健康状态，变化通常不属于工作范围。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>FDE 要回答的新问题</strong><br>
系统是否沿着业务目标变好？哪里需要调整技能、数据上下文、记忆和权限？这些问题要求 FDE 同时理解业务与数据。
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>岗位溢价的来源</strong><br>
彭新宇的判断是，企业不会因为职位换名就多付钱；真正稀缺的是能把 AI、行业和企业数据放在同一套工作里的人。
</div>

<div class="mt-5 text-sm opacity-70">作者概括：FDE 的差别在于它是否对业务结果负责。</div>

---

# 交付对象从功能变成业务结果

<div class="text-sm opacity-70 mb-4">彭新宇把企业级 Agent 的实施拆成三个前提，结果必须能被验证。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>业务目标</strong><br>
先找到具体问题，再建立业务数字、历史记录和测评集。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>企业数据</strong><br>
在保护隐私的同时，让 Agent 能调用企业上下文和大模型能力。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>岗位标杆</strong><br>
把企业里最佳客服、最佳投手或最佳销售的工作方式设为起点。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
企业验收的对象不再只是系统有没有交付，而是成本是否下降、效率是否提高，或增长是否真的发生。
</div>

---
layout: two-cols
---

# 一个催发货电话，为什么要跑 260 多步

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
客户可能只收到一台空调，或缺少配件，也可能没有收到承诺的赠品。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
客服要核查订单、库房、派单和发货状态，还要在内部系统和外部电商平台之间来回确认。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
这个流程的难点不在礼貌话术，而在于 Agent 是否能把企业的系统、数据和动作串起来。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./cuifahuo-flow.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 260 多步里，95% 是可以反复训练的流程

<div class="text-sm opacity-70 mb-4">嘉宾说，这套流程能覆盖 95% 以上的常见场景，剩下部分才是新的异常。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>先把流程讲清</strong><br>
企业要把订单、库存、配件、赠品和赔款规则整理成客服能执行的标准。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>再把流程交给 Agent</strong><br>
Agent 负责在多个系统中查询和推进，减少新人培训与人工转派的重复工作。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>最后处理异常</strong><br>
少数新情况仍需人工介入；它们会成为下一轮训练和评测的素材。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
客服的工作价值既包括把话说好，也包括把问题解决。只有把后端流程打通，Agent 才能真正推进订单。
</div>

---

# 企业先找最耗人的地方

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<strong>耗人最多</strong><br>
电话、投诉和重复查询会占掉大量客服时间；适合先看人效和处理量。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>耗钱最多</strong><br>
赔款止损、营销投放和素材试验要看投入能否换来更好的经济结果。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>耗时最多</strong><br>
客户等不到结果就会退货或投诉；小时级、天级延迟都可以成为业务指标。
</div>

</div>

<div class="mt-6 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
作者概括：企业不需要先把所有流程都 Agent 化。更实际的顺序，是先选一个耗人、耗钱或耗时，而且结果容易度量的场景。
</div>

---
layout: two-cols
---

# FDE 把业务目标变成一条可复盘的闭环

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
第一步先选业务目标：处理量、成本、效率或增长必须有参照系。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
第二步把企业数据、流程、权限和岗位标杆整理成 Agent 可以使用的上下文。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
第三步让 Agent 上岗，再用真实结果评测，继续调整它的工作方式。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./business-result-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# AI 实施更像新雇一个员工

<div class="text-sm opacity-70 mb-4">传统软件交付后，客户还要自己学习怎样使用；企业级 Agent 从一开始就带着一组岗位能力进入公司。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>默认有技能</strong><br>
瓴羊把客服、营销、销售等 Agent 设计成有岗位经验的数字员工。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>企业给出边界</strong><br>
企业要给它权限、目标、审批范围和资金裁量权。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>上岗后继续运营</strong><br>
它要处理异常、接受复盘和学习新技能，交付并不等于工作完成。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这个比喻改变了企业的验收方式：企业要看工具能不能用，也要看数字员工能不能把工作做完。
</div>

---
layout: two-cols
---

# 给权限、目标和裁量权，Agent 才能上岗

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
如果企业的知识库、基础信息和权限边界混乱，数字员工进入公司后也无法判断下一步做什么。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
FDE 的工作包含梳理企业数据、管理上下文，以及确定 Agent 可以调用哪些系统和资金权限。
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
最终目标是让 Agent 在明确边界内自己推进任务，而不是每一步都等待一个新指令。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./agent-employee.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 没有数据治理，数字员工也会失去判断依据

<div class="grid grid-cols-2 gap-3 mt-5">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
<strong>问题不只在模型</strong><br>
企业的基础信息、知识库和历史流程如果没有整理，Agent 即使有很强的模型，也无法可靠地执行工作。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>Data for Agent</strong><br>
数据治理要让企业上下文变得可查、可用、可授权，而不是只做一套给人看报表的数据平台。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>好坏回到业务结果</strong><br>
数据平台是否有价值，要看它能不能帮助 Agent 接单、推进流程，并产生正的经济效益。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>瓴羊的历史积累</strong><br>
彭新宇说，团队过去多年为大量中大型客户建设数据平台，这些治理结果成为后续长出业务 Agent 的基础。
</div>

</div>

---
layout: two-cols
---

# 把优秀投手的经验变成可学习的循环

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
同一企业里，最好投手和普通投手的操作频率可能相差很大；单靠师傅带徒弟，很难把这种差异完整传下去。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
把历史行为数字化后，Agent 可以比较不同时间、平台和促销期的策略，再把有效行为纳入下一轮工作。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
学习、建模、执行、迭代构成一个持续循环；每次好坏案例都能改变下一次判断。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./learning-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 投手案例：差异藏在每一次微操作里

<div class="grid grid-cols-2 gap-3 mt-5">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
<strong>同一时间窗口</strong><br>
嘉宾比较了同一企业投手过去三个月的投放行为：最好投手做了超过一万次价格调整，普通投手只有一百多次。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500 text-sm leading-relaxed">
<strong>这不是简单复制按钮</strong><br>
投手每天还要采集竞品新品和价格，分析数据，做决策，再调整自己的投放策略。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
<strong>先做对照，再做 MVP</strong><br>
Agent 要在不同平台、时间和促销期里比较效果，通过 A/B test 找到值得保留的行为。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
<strong>平台提供了共性地基</strong><br>
电商平台已经把素材、价格、系统和数据的一部分标准化，FDE 可以把更多精力放在企业的具体工作上。
</div>

</div>

---
layout: two-cols
---

# 标准化环境，个性化工作

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
平台已经沉淀了大量共性能力，能覆盖投手工作中相当一部分的数据准备和系统学习。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
每家企业的目标、权限、流程和历史行为不同，FDE 要把这些上下文接入同一套工作环境。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
标准化负责降低重复建设，企业数据和岗位标杆负责决定 Agent 的具体动作。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./standard-personal.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 销售 Agent 要把一次拜访前后都串起来

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>拜访前</strong><br>
根据客户时长和区域安排路线，准备这次会面要用的材料和话题。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>拜访中</strong><br>
把交流内容和企业销售目标联系起来，判断下一步应该推进什么。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>拜访后</strong><br>
整理小结、录入系统，触发内部其他人员继续跟进。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
在一个制造业案例中，团队从原本表现最弱的省份开始试点。彭新宇说，这个省在当年上半年被评为最先进，最终拿到公司的销冠。
</div>

---

# 四类岗位，覆盖企业增长的主要链路

<div class="text-sm opacity-70 mb-3">瓴羊把企业消费侧的增长拆成售前、售中和售后，再把常见岗位预设成 Agent。</div>

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>售前：营销</strong><br>
投前做预算和渠道分析，投中管理素材，投后复盘并优化渠道。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>售中：销售</strong><br>
围绕新客、新购和转介绍，把试用、试驾等机会交给更合适的客户。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>售后：客服</strong><br>
处理交付履约、售后投诉和长期复购，让服务继续连接业务结果。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这些岗位之所以适合先做 Agent，是因为它们在不同企业里都存在，而且能用数据、技能和权限描述出清晰的工作边界。
</div>

---

# 四加 X：预设岗位能力，加上企业上下文

<div class="grid grid-cols-4 gap-3 mt-5 text-sm text-center">

<div class="p-3 rounded bg-blue-50 border-2 border-blue-200">
<div class="font-semibold text-blue-700">营销</div>
预设岗位能力
</div>

<div class="p-3 rounded bg-green-50 border-2 border-green-200">
<div class="font-semibold text-green-700">销售</div>
预设岗位能力
</div>

<div class="p-3 rounded bg-orange-50 border-2 border-orange-200">
<div class="font-semibold text-orange-700">客服</div>
预设岗位能力
</div>

<div class="p-3 rounded bg-purple-50 border-2 border-purple-200">
<div class="font-semibold text-purple-700">运营</div>
预设岗位能力
</div>

</div>

<div class="mt-5 p-5 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
<strong>X 是企业自己的数据资产和上下文管理。</strong><br>
它包括流程、权限、审批边界、资金使用规则和历史行为。FDE 要和企业一起梳理这些内容，让预设岗位真正能在企业里工作。
</div>

---
layout: two-cols
---

# Agent 上岗要一周逐步放量

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
第一天先从客户需求较少的时段开始，影响面可控，团队可以看见第一批异常。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
第二天进入工作高峰并使用全量数据，第三天扩大到八小时，持续复盘毛刺和投诉。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
一周后，团队把 Agent 的表现和企业最优员工的标准放在同一个参照系里。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ramp-up-week.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 上岗之后，Agent 仍然需要被教练

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>熟悉岗位</strong><br>
真实流程、异常边界和企业目标要先被拆出来，不能只看产品说明书。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>建立模型</strong><br>
团队把好的工作方式做成可测评的标准，再判断什么交给人、什么交给机器。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>持续复盘</strong><br>
异常、投诉、优秀处理和新技能都会进入下一轮调整，Agent 才能从工具变成工作同伴。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
嘉宾分享过一个实施案例：熟悉岗位和教练团加起来占了整个项目时间的约三分之二，真正的系统执行反而更快。
</div>

---

# 企业怎样推动 Agent：一号位先算总账

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>自上而下</strong><br>
业务一号位同时掌握业务费用和 IT 费用，可以把收入、人效、成本放在同一张账上，再推动财务、IT 和业务线一起改流程。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>自下而上</strong><br>
业务部门可能没有预算，IT 部门却有预算；如果双方的先进性和业务结果不一致，Agent 很难进入真实工作。
</div>

</div>

<div class="mt-5 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
彭新宇观察到，推进更顺利的案例通常由一号位明确场景、范围和目标，再让组织围绕这个目标重新分工。
</div>

---
layout: two-cols
---

# FDE 是一支组织，不是一个全才

<div class="text-sm leading-relaxed space-y-3 mt-4">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
一个人同时覆盖行业、业务、模型、数据和运营，时间会被切得太碎；更现实的做法是组织协作。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
BA 负责业务结果和流程，AI 架构师负责模型与人机边界，首席岗位专家负责调教和复盘。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
企业内部的 IT、CIO、CTO 和岗位专家都可以沿着这条路径向业务结果靠近。
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fde-organization.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 中国式 FDE，常常要从地基开始做

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>美国企业的既有地基</strong><br>
彭新宇提到，Salesforce、SAP 等信息化系统已经沉淀了不少工作流和数据标准，FDE 可以更多围绕已有系统交付。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>中国企业的现场</strong><br>
平台企业承担了部分 SaaS 能力，但不同企业的数据基础和流程标准差异更大，FDE 往往要从数据治理和流程梳理开始。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>付费与人才环境</strong><br>
中国大型企业普遍有自己的 IT 团队，外部团队要证明自己带来的业务结果；两国的付费习惯和人力成本不能直接换算。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>本地平台带来的优势</strong><br>
淘宝、天猫、企业微信等平台积累了流量和运营经验，懂这些平台的人更容易把 Agent 放进中国企业的真实工作里。
</div>

</div>

---

# 商业模式：坐席费和效果费都要落到账上

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>按坐席或工作量收费</strong><br>
客服场景可以拿原有的人力成本作参照，用相近的服务规模比较投入与原先效果。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>按业务效果结算</strong><br>
营销和投手场景可以把转化率、投放结果等指标作为参照，对超过原有人工作法的增长部分进行分成。
</div>

</div>

<div class="mt-5 p-4 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
合作要先做最小价值验证。客户能在自己的业务单元和数据单元里体验到结果，再决定是否验收、续费和扩大范围。
</div>

<div class="mt-4 text-sm opacity-70">作者概括：收费方式可以不同，但共同前提是企业能把投入、产出和持续使用放在同一个比较口径里。</div>

---

# 标准化、定制化和个性化的分界

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>标准化</strong><br>
把跨企业重复出现的流程、数据流和岗位能力整理成可复用的 Agent 环境。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>定制化</strong><br>
接入企业自己的系统、流程和上下文，让 Agent 能理解这家公司的具体业务。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>个性化</strong><br>
Agent 根据不同客户、不同异常和不同岗位标杆，给出不同的执行方式。
</div>

</div>

<div class="mt-5 p-4 rounded bg-green-50 border-l-4 border-green-500 text-sm leading-relaxed">
瓴羊不把重点放在为每家企业开发一套专有软件，而是先选择销售、营销、客服等增长场景，再把有共性的部分做成可复用服务。
</div>

---

# 模型选择也要放进企业总账

<div class="grid grid-cols-2 gap-4 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>系统部署和模型部署是两件事</strong><br>
Agent 系统可以部署在阿里云、公有云或企业自己的环境里；系统部署的位置不等于模型必须私有部署。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>私有部署先算需求</strong><br>
嘉宾提醒，大尺寸开源模型的参数规模可达 2 点几 TB，私有部署还可能需要几千万级别的初始化投入。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>模型由场景来挑</strong><br>
瓴羊会根据业务场景选择性价比合适的模型，不把最强模型当成每个问题的默认答案。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<strong>数据边界在 Agent 层管理</strong><br>
企业可以把客服、销售和营销 Agent 部署在自己的环境里，控制数据安全和合规；模型选择则继续比较效果与成本。
</div>

</div>

---

# 模型升级不能绕过企业验证

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<strong>先固定当前版本</strong><br>
Agent 绑定经过验证的模型，模型升级不会自动改变正在工作的流程。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<strong>再做人工确认</strong><br>
团队要比较升级前后的效果，确认新的模型确实带来足够收益，再安排切换。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<strong>最后检查企业边界</strong><br>
模型切换还会牵动流程、权限和管理边界；企业要的是稳定的工作输出。
</div>

</div>

<div class="mt-5 p-4 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
这也是 FDE 的持续工作：测评、对比、制定升级方案，再把新的模型能力放回真实业务里验证。
</div>

---

# 核心金句（一）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs text-blue-700 mb-2">FDE 的能力结构</div>
<div class="italic">“第一个，它是要有AI的锐度。第二个是要有行业的深度。第三个它是有数据的宽度。”</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs text-green-700 mb-2">交付标准的变化</div>
<div class="italic">“原来是交付功能，变成一个交付一个业务效果。”</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs text-orange-700 mb-2">客服流程的复杂度</div>
<div class="italic">“一个催发货的环节，最后客服售后这个环节大概有260多步。”</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs text-purple-700 mb-2">AI 实施的比喻</div>
<div class="italic">“其实它是我们新雇一个员工。”</div>
</div>

</div>

<div class="mt-4 text-xs opacity-50">以上引文均来自彭新宇在本集对话中的原话。</div>

---

# 核心金句（二）

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs text-blue-700 mb-2">Agent 的工作循环</div>
<div class="italic">“第一个是学习，就是数据采集。第二个呢就是建模。第三个呢就是执行。第四个呢就是迭代。”</div>
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs text-green-700 mb-2">交付之后的任务</div>
<div class="italic">“交付完一个Agent或者交付完一个系统才刚刚开始”</div>
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs text-orange-700 mb-2">一号位看到 MVP 之后</div>
<div class="italic">“没看到之前我不知道我要什么，但是这个就是我想要的。”</div>
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs text-purple-700 mb-2">企业采用 AI 的账</div>
<div class="italic">“能不能算得过来账。”</div>
</div>

</div>

<div class="mt-4 text-xs opacity-50">以上引文均来自彭新宇在本集对话中的原话。</div>

---
layout: end
---

# 企业已经从能不能用问到什么时候用上

<div class="mt-10 text-2xl leading-relaxed">
“原来都在讲怎么用，能不能用，现在直接跳过，什么时候开始帮我用上。”
</div>

<div class="mt-8 text-sm opacity-60">彭新宇 · 关于企业一号位在 Agent 时代的变化</div>
