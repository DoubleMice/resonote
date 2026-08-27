---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '165: GEAR 高深远：世界模型、自进化循环、DreamDojo'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 世界模型、自进化循环、DreamDojo

<div class="mt-4 text-xl opacity-70">
晚点聊 LateTalk · 第 165 期
</div>

<div class="mt-3 text-lg opacity-60">
嘉宾：高深远 —— 港科大博士，NVIDIA GEAR Lab 成员，DreamDojo 联合一作
</div>

<div class="mt-8 text-sm opacity-50">
2026 年 5 月 · 全长 1 小时 49 分
</div>

---

# 为什么这期值得听

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**世界模型到底怎么分类？** 决策派、知识派、视频派……四大流派拆解，一句话讲清各自的立场与短板。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**为什么视频空间是正解？** 与语言并列的数据富矿，能直接继承 GPT、Gemini、Sora 的泛化能力。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**WAM 是什么？** DreamZero 把世界模型和 VLA 策略合二为一，被讨论为可能取代 VLA 的新范式。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**自进化循环：** Agent + 策略 + 世界模型三个组件接上之后，突破物理时间限制——高深远认为苗头可能就在今年。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**DreamDojo 首次拆解：** 用约 4.4 万小时人类第一视角视频给世界模型迁移泛化能力，还做到了实时。
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**评测之痛：** 世界模型没有 zero-shot benchmark，一个世界模型对应一台机器人本体——连研究者和投资人都难判断好坏。
</div>

</div>

---

# 世界模型：一个词，两种面孔

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div class="p-4 rounded border-l-4 border-blue-500 bg-blue-50 bg-opacity-30">

### 决策派

有一个 model 去模拟 world、模拟环境

- 核心能力：**根据历史预测未来**
- 预测过程受 **action 条件控制**
- 机器人输出动作、自驾输出轨迹、游戏角色输出技能

</div>

<div class="p-4 rounded border-l-4 border-green-500 bg-green-50 bg-opacity-30">

### 知识派

有一个 model，拥有 world knowledge

- 多模态大模型，能回答各种问题
- "你用各种维基百科上的问题问他，他基本上都知道"
- 自圆其说，但对决策的帮助有限

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
本集讨论的世界模型，专指"对决策有用"的那一种：action 条件控制下的未来状态预测。
</div>

---

# 对决策有用的世界模型：一个公式

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-center text-lg">
过去的历史 + 你要做的 action → <strong>预测未来的世界状态</strong>
</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**action 是什么？** "action 就是对世界的一个干预"。文本指令、自车轨迹、机器人关节动作，都是 action。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**文本也能当 action**：Sora 发布时用文本干预世界生成未来画面——"video generation as world simulator"。
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
但光有文本控制不够：真正做决策时，机器人输出的是 action、自驾输出的是轨迹——对决策有用的世界模型，输入得是 action 轨迹。
</div>

---
layout: two-cols
---

# 世界模型的四大流派

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**粒子表示**：最抽象，离数据最远
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**显式 3D**：World Labs 路线，游戏、自驾有优势
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**隐空间**：LeCun JEPA / AMI，高效但接不上现有基模
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**视频生成**：最 data-driven，目前最 promising
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./four-schools.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么视频空间是正解

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 数据富矿
与语言并列的 data rich 空间
从视频出发，往数据稀缺的领域做对齐
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 直接继承基模
GPT、Gemini、Sora 都能读懂视频
新造隐空间则"语言模型接不上……视频模型也接不上"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 效率会解决
视觉预测不再被认为很慢
芯片与工程优化持续推高实时性
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**通往 AGI 的思路**："从一些数据非常多的一些 domain 开始，然后往数据比较稀缺的一些这种 domain 去做对齐"——语言和视频是最富的两块，机器人 action data 相对稀缺。
</div>

---

# 世界模型为什么这两年火了

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### ① 生成模型发展
Sora 证明：从"啥都模拟不了"到能模拟逼真的物理规律——"video generation as world simulator"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### ② 数据到位
世界模型是模拟器，**差的轨迹数据也要学**
光有专家轨迹，学不出无偏的 action 模拟
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### ③ Policy 水平够格
策略足够强之后，世界模型才能帮它做泛化
此前"你其实也用不着世界模型"
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**递进关系**：视频生成开路 → 数据补足 → 策略成熟——三者交汇，世界模型从研究话题变成主流叙事。
</div>

---
layout: two-cols
---

# 策略与世界模型：互相咬合

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Policy（策略）**：根据观测输出 action。VLA、RLA、DreamZero 都是 policy。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**世界模型**：输入过去的 state + action，预测未来的世界状态。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
"policy 的输出是世界模型的输入，然后世界模型的输出是 policy 下一个时刻的输入"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
两者都可在端侧或云端部署；policy 输出越不乱，世界模型需要模拟的分布就越窄
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./policy-wm-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# WAM：合二为一的世界动作模型

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 输入
文本形式的任务描述
"把当前是什么任务告诉它"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 输出 ①
未来的视频
（world state 预测）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 输出 ②
未来的 action
（决策结果）
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**与 VLA 同级，但多输出未来状态**：严谨来说 WAM 不是 world simulator，功能定位和 RLA 一样是 policy；但它把未来的 world state 也输出来，可以当世界模型用。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**为什么合理**：人做决策有很多 action space——先想步骤（文本），再想手怎么动。文本也是一种 action，WAM 就是在文本 action 条件下的世界模型。
</div>

</div>

---

# 执行之前，先想象

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 高层：DreamZero 做步骤搜索
每个文本步骤都给出未来的状态，从中选出完成任务的**最佳步骤序列**
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 低层：DreamDojo 做轨迹优化
拿到子任务后，对接近速度、抓取角度和力度做**低层动作搜索**
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-yellow-50 border-l-4 border-yellow-500">
"你可以在你真正做之前，你先做一个 search"——"人脑中也在发生这个事情，但是可能人脑会发生的很快，所以说几乎没感觉到"。
</div>

<div class="mt-3 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
没有世界模型时，所有决策都是"先不管后果，就反正我做了就做了"；有了它，"你可以在做之前你就知道它的这个后果"——决策更泛化，也更安全。
</div>

---

# 世界模型的四个用途

<div class="mt-4 grid grid-cols-2 gap-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**① 想象式搜索**：执行前模拟不同 action 的后果，做更安全、更泛化的决策
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**② 评测**：替代真机部署，"拿算力然后去换这些高效性和公平性"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**③ 数据生成**：遥操作世界模型里的虚拟机器人，就能采到训练轨迹
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**④ 强化学习与自进化**：在虚拟世界里训练，突破物理时间限制
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-red-50 border-l-4 border-red-500">
具身智能目前最大的问题：评测很难、很不公平——每次都要真机部署，还得有人看着它；"那个人下班了"，就没法测了。
</div>

---
layout: two-cols
---

# 评测：拿算力换公平

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
**现实评测的不公平**：上午测和下午测光照不一样、摆放位置不一样、传感器校准不准——"所有的比较永远都是不公平的"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**世界模型评测**：状态存在电脑上，场景能重置到一模一样，比较完全公平
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
本质是拿算力，换高效性和公平性
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./fair-eval.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 数据生成：在世界模型里摇操作

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 以前
去遥操作一台**真的机器人**，录下 action 作为训练轨迹——要真机、要场地、要人盯
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 现在
世界模型里有一个**虚拟机器人**，"你只需要去摇操这个世界模型里的这个机器人，你就能得到这些数据"
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**设备在简化**：从完整摇操设备到"现在已经简化到手套了"——硬件越像人，采集越容易
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**干预数据**：policy 跑在世界模型里，人可以随时介入纠正，产出纠正轨迹继续提升 policy
</div>

</div>

---

# 自进化：突破物理时间限制

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
**机器人为什么不像大语言模型那样进化？** "它最大的问题就是它要被这个物理时间限制住了，就一天 24 个小时"——加上人还要上班下班。
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**QQ 农场式世界模型**："你晚上睡觉，它晚上也过了一天，这个东西都长出来了"——世界模型里跑仿真，不受下班限制
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**算力换时间**：算力越快，每天迭代轮数越多；卡更多，环境更多。"假如说世界模型它真的跟现实世界没有任何 gap 的话……跑一个月，可能会涌现一些东西出来"
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
未来具身智能一旦有自己的"虚拟世界"，就能像 LLM agent、AlphaGo 一样迭代进化——"突破了这个 7 天 24 小时的这个限制"。
</div>

---
layout: two-cols
---

# 自进化循环的三个组件

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Agent（VLM）**：定义"我现在这个 agent 要做什么 task"，并给世界模型预测出的未来状态打分
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**Policy**：输出 action——"拿杯子就是拿杯子"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**世界模型**：想象未来，把 action 对应的下一时刻世界状态模拟出来
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
以人类比："大脑的任务规划和思考就是 agent……人脑去控制身体的部分是 policy，而我们生活的环境就是世界模型"
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./self-evolve-loop.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 为什么循环还没转起来

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
三个组件各自的**泛化能力不够**，导致级联误差：agent 给不出可靠的 reward、policy 提不出可靠的 action、世界模型在复杂环境下预测不够逼真。
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**但迹象已经出现**：Gemini 级别的 VLM 已经能给 world state 打分；"他的这个想法跟我现在的想法是非常像的"，大家都在往泛化性推
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**临界点**："一旦它的误差累积到一个可接受的程度，整个循环就会变得越来越简单"——"我觉得可能就发生在今年"
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**先小后大**："单个任务上先跑通，然后相当于是把这个理论上的这个路线走通"，再连起来覆盖更多任务和场景。
</div>

---
layout: two-cols
---

# 飞轮转起来之后

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**policy 自动采数据**：policy 够强，就能自己在新环境里采集数据——"可能是很差的，但没有关系"，在可接受范围内动就行
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**世界模型压力变小**：policy 输出的 action 分布越来越窄，世界模型只需模拟这些动作——"几乎不会做一些错的 action 了"
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**反馈更准 → policy 更强**：循环进入"飞速的一个上升"阶段
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./flywheel.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 游戏路线：DeepMind 的打法

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 数据不受物理时间限制
"游戏的 data 你是无限造"——机器人造数据受物理时间限制，游戏没有
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 先游戏后机器人
Gemini 3 从键盘控制验证，SIMA 在游戏里验证 agent——这套 pipeline 理论上可平移给机器人
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 知识可迁移
人创作游戏时注入了大量 3D 知识；"你在游戏里学到这些决策知识其实跟你在现实生活中去做决策可能也是很像的"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
### GEAR 也做过
Natural Gym：把机器人的 VLA 训练成游戏 policy，"也非常的有用"
</div>

</div>

---

# 两大阵营的循环对应

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Google DeepMind

- **Agent**：Gemini（VLM，给状态打分）
- **Policy**：Sora 对应的游戏 agent / SIMA
- **世界模型**：Veo（"相当于是 DeepMind 的 Sora"）
- 所有东西都往 Gemini 上 align，先在游戏里验证

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### NVIDIA GEAR

- **Agent / 基模**：Cosmos（VLM + 视频基模）
- **Policy**：DreamZero（视频 backbone 的 WAM）
- **世界模型**：DreamDojo（action-conditioned）
- 通过 post-training 得到 action 输入输出

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-yellow-50 border-l-4 border-yellow-500">
**OpenAI**：Sora 团队重组进 robotics lab，"感觉最近好像又在 seriously 搞这个事情"；**Anthropic** 投入少，但走"我先搞一个很强的基模"的路线也不一定 miss。
</div>

---

# 通向 Physical AGI 的两条路线

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 路线 A：现在就碰机器人

- 直接做 robot 的世界模型和 policy
- "这可能是现在大多数出来的 startup 包括比如说像我们大家都在做的"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 路线 B：先做强基模

- 先解决虚拟世界的通用 agent，robot 是"最后一步的事情"
- 字节、AMI，可能还有 Anthropic
- 把文本当 action，基模本身就是一种世界模型

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**高深远判断**：两条路都 make sense——"视觉模态跟 action 其实有很强的这个对齐功能"，基模进展最终也能 solve robotics。
</div>

---

# 世界模型的三大瓶颈

<div class="mt-4 grid grid-cols-3 gap-3 text-sm leading-relaxed text-center">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
### ① 泛化能力
最重要，决定应用上限
物理理解 + 动作控制
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### ② 长程稳定性
交互多轮后误差累积
生成式世界模型的通病
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### ③ 效率
实时性
与视频生成主线对齐，会被行业解决
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
"后面两点我感觉还好，然后第一点泛化性我感觉是最重要，然后是决定这个世界模型能够应用的这个上限的"。
</div>

---

# 泛化的两半：物理理解 + 动作控制

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 物理理解的泛化

新场景、新任务、新物体也能模拟

- 机器人数据只有实验室里的玩具
- 没见过抹布、水瓶 → "它抓个抹布像抓个实体一样"
- 物理差 → 预测没意义 → 反馈不可靠

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 动作控制的泛化

公平地模拟所有 action

- 现有数据多是 VLA 用的专家数据，全是"对的"
- "你给它一个抖的它就是得抖，你给它一个丝滑的它就是得丝滑"
- 世界模型不该对动作有偏好

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-yellow-50 border-l-4 border-yellow-500">
**解法**：人类数据里大量"随便的动作"覆盖更宽的 action 分布（DreamDojo 的思路）；加上 policy 越强、需模拟的分布越窄，问题会自然缓解。
</div>

---

# 长程问题：柜子里的东西去哪了

<div class="mt-4 p-4 rounded bg-red-50 border-l-4 border-red-500 text-sm leading-relaxed">
"你把一个东西放到一个柜子里，然后你关上了，然后待会儿你又拿出来"——没有记忆的话，再打开柜门时，"那个东西在不在完全是一个随机猜的了"。
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**为什么是灾难**：policy 得不到可靠的世界预测，就得不到可靠反馈——"它得到的这个反馈都是一些 random 的一些信号"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**家庭场景何时能实现**：长期记忆更多是文本空间问题——Gemini / Claude 这类长 context 大模型更擅长记抽象位置；具身更关注单任务里怎么把动作变成高成功率
</div>

</div>

---

# 没有 zero-shot，就没有统一 benchmark

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 世界模型绑死机器人本体

"一个世界模型它就对应一个这个机器人本体"——宇树和星海图的自由度不一样，action space 不一样；连相机装在头还是脖子上都影响 zero-shot 能力

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 语言模型为什么能比？

输入输出空间天然统一——"你强行问它问题，它输出的都是语言"，所以能测一个超级大的表；视频生成同理

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**出路只有两条**：要么一个世界模型掌握所有机器人的 action space（zero-shot 全接上），要么所有团队收敛到同一台机器人——"到那个阶段的话已经是世界模型很强的一个阶段了"。
</div>

---
layout: two-cols
---

# 谁在押注世界模型

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**NVIDIA GEAR**：DreamDojo / DreamZero，Cosmos 基模，旗帜鲜明
</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Google DeepMind**：Gemini + Veo + SIMA，全部往 Gemini 对齐
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**World Labs（李飞飞）**：显式 3D，主攻游戏，机器人场景未必最优
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**AMI（LeCun）**：隐空间路线，为决策做新表征
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
**General Intuition**：Wayve GAIA 系，游戏世界模型；疫情期间攒了大量游戏数据
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./players-map.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# 高深远的世界模型之路

<div class="mt-4 space-y-2 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**2023 下半年 · 自动驾驶（上海 AI Lab）**：GenAD——"整个开源社区里应该是第一个"用 YouTube 互联网驾驶视频训练世界模型；Vista 继续打磨物理质量与 action 控制模态
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**游戏世界模型**：Eidetic World——自己搞 1000 多个游戏乱跑、源源不断生成数据，用 latent action 预训练
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**加入 GEAR Lab**：从去年开始实习，即将正式加入；AdaptWorld 的 latent action 与 Gear 的方向契合
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
**2025-2026 · DreamDojo / DreamZero**：人类视频迁移泛化 + 实时世界模型；DreamZero 探索视频 backbone 的 WAM 范式
</div>

</div>

---

# 为什么是 GEAR Lab

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 两次会议
24 年西雅图开会认识 Jim Fan，当时博二，还想自己多发一作 paper
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 新加坡再遇
今年毕业，对工业界机会更向往；"所以说第二次申请就没有面试"——第一次面过了
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 方向契合
AdaptWorld 的 latent action 与 Jo、Jim Fan 的 latent action policy 工作能接上——"research 这种 taste 或者说 style 我感觉跟我比较 match"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
### 时机
"也相当于你 policy 已经达到一定水平了，然后你可以用 world model 去跟它接起来去做一些事情"——正是做世界模型的好时间点
</div>

</div>

---

# DreamDojo：通用的世界模型预训练

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 目标
一个预训练好的通用世界模型，开源出去——大家有了新机器人，"微调一下之后就能用起来"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 突破 ①：泛化迁移
把人类第一视角视频里的新场景、新物体迁移给世界模型——这些在机器人数据里很少
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 突破 ②：实时
之前的世界模型要么实时但没泛化，要么有泛化但实时性差；现在"你可以连上摇操设备，然后你可以几乎实时的去控制它"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
### 部署价值
实时的世界模型可以在部署时做搜索——预测每个 action 的后果，提升模型性能
</div>

</div>

---
layout: two-cols
---

# DreamDojo 的三段式管线

<div class="text-sm leading-relaxed space-y-3">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
**Cosmos 基模**：NVIDIA 视频基座，预训练阶段已含第三人称视频——拿掉这个阶段"效果会差"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
**人类第一视角预训练**：EgoScale 约 4.4 万小时（44 千小时）人类视频，latent action 免标注
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
**机器人微调**：Fourier GR-1 数据微调——"world model 它可以吃下任何数据"，对质量和标注要求低
</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./dreamdojo-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---

# Latent Action：免标注的钥匙

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 简单粗暴
"用一种非常简单的方式对所有这种没有标签的数据打上一个 action 标签"——不管本体和视角，有多少视频就能给多少视频打标签，不损失 scalability
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 跨本体的直觉
《冰与火之歌》里布兰是易形者，进狼的身体、进乌鸦的身体；失去双臂的人能用脚做精细操作——人天生能适应新构型
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-yellow-50 border-l-4 border-yellow-500">
**局限**：latent action 是有噪声的表示，但"从 latent action 出发它可能是到各种各样不同 action space 一个比较自然的一个出发点，或者说比较居中的一个出发点"。
</div>

<div class="mt-3 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**什么时候不需要**：如果所有数据都有高质量标注、跨本体也不是痛点，"就没有必要到 latent action 去绕一圈"。高深远认为以后是不是还值得研究，"也打上个问号"。
</div>

---

# DreamDojo 怎么评测自己

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 没有公开 benchmark，就自建 6 个
评测从两个维度出发：**未来预测的真实度 / 物理合理性** + **被各种 action 的控制能力**
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 渐进验证
先内部 GR-1 数据看迁移迹象 → 再用开源 EgoDex 数据集验证更多物体 → 最后加人类数据扩大覆盖
</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-yellow-50 border-l-4 border-yellow-500">
**最终看下游**：世界模型的可靠性用 policy 的成功率表示——policy 出候选 action，世界模型"给它去选一个最好的 action"；世界模型很差时等于随机选，加不加它成功率差不多
</div>

<div class="mt-3 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**选 GR-1 不是因为它更好**：内部本来就有 GR-1 的数据集，构建评测集更容易；同时也提供了其他本体的实验结果——"其他本体也能用"
</div>

---

# 分布外问题，最后会消失

<div class="mt-4 p-4 rounded bg-blue-50 border-l-4 border-blue-500 text-sm leading-relaxed">
**对机器人是分布外，对人类互联网视频可能是分布内**——EgoScale 约 4.4 万小时人类视频覆盖了大量物体和场景，测试集里的物体"至少在这个数据里都会出现过，或者说类似的物体"。
</div>

<div class="mt-4 grid grid-cols-2 gap-4 text-sm">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### scaling law 视角
"你把整个互联网视频都训练进来之后的话，其实所有的问题它都是比如说在分布内做插值"——早年人工设计解决 OOD 的方式会被 scaling 取代
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### AGI 的定义
"最终 AGI 可能也就是这样，所有的问题都变成见过的问题"——世界模型吃下互联网视频，就是往这个方向走
</div>

</div>

---

# 世界模型之争：两拨人

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 只做 policy 派

"世界模型完全没有必要，就是我只要做 policy，就一直做 policy 做到底"

- Jim Fan 的顾虑：做一个 policy 做一个世界模型，比做一个 policy 要难得多

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 世界模型派（高深远）

世界模型不需要完美就能帮忙

- "它即使很 noisy，然后它泛化性还不够好，在某些 case 下它已经能够足够去提升这个 policy 了"
- 循环上升：两个模型一起变好，误差累积和反馈准确性都会改善

</div>

</div>

<div class="mt-4 p-3 text-sm rounded bg-purple-50 border-l-4 border-purple-500">
**为什么不用完美**：policy 越强，输出的 action 分布越窄，世界模型要模拟的空间越小——"拿杯子就是拿杯子"，压力会越来越小。
</div>

---

# 创业公司还有机会吗

<div class="mt-4 grid grid-cols-2 gap-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
### 成本在降
数据供应商很多，"价格也都会通过竞争打下来"；GPU 和模型效率持续发展——"最终这个也会变成一个大家都能做的事情"
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
### 组件可专精
loop 里有很多组件：设计一个好的 reward agent、一个泛化的 policy 或世界模型——可以选自己的专长 domain（比如家居）
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
### 小规模验证
用 data scaling law 先在小规模上验证通，"假如说有足够的信心把这个推到底的话，也是可以有很大的胜算"
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
### 但赢家不会多
"肯定还是会有几家单独胜出……可能就几家了"
</div>

</div>

---

# 核心金句

<div class="text-sm opacity-60 mb-2">这期对谈里最值得记住的几句：</div>

<div class="space-y-2 text-sm">

<div class="p-2 bg-blue-50 border-l-4 border-blue-500 rounded italic leading-snug">
"一旦它的误差累积到一个可接受的程度，整个循环就会变得越来越简单，就相当于是可以实现自进化。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 高深远，谈自进化循环的临界点，他认为可能就发生在今年</div>
</div>

<div class="p-2 bg-green-50 border-l-4 border-green-500 rounded italic leading-snug">
"你只需要去摇操这个世界模型里的这个机器人，你就能得到这些数据。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 高深远，谈世界模型替代真机采集数据</div>
</div>

<div class="p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded italic leading-snug">
"你给它一个抖的它就是得抖，你给它一个丝滑的它就是得丝滑。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 高深远，谈世界模型必须公平模拟所有动作，不能只见过专家数据</div>
</div>

<div class="p-2 bg-purple-50 border-l-4 border-purple-500 rounded italic leading-snug">
"所有的问题都变成见过的问题，对，就是这样就解决了。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 高深远，谈互联网视频规模下 AGI 的分布内化</div>
</div>

<div class="p-2 bg-orange-50 border-l-4 border-orange-500 rounded italic leading-snug">
"世界模型它即使很 noisy，然后它泛化性还不够好，在某些 case 下它已经能够足够去提升这个 policy 了。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 高深远，回应"做一个世界模型比做一个 policy 要难得多"的质疑</div>
</div>

<div class="p-2 bg-red-50 border-l-4 border-red-500 rounded italic leading-snug">
"就感觉要左脚踩右脚原地飞升了。"
<div class="text-xs opacity-60 mt-0.5 not-italic">— 主持人曼琪，听完自进化循环后的感受</div>
</div>

</div>

---
layout: end
---

# 世界模型，可能是通往 Physical AGI 的最后一环

<div class="mt-4 text-sm opacity-70">
"我觉得可能就发生在今年" —— 高深远
</div>

<div class="mt-6 text-xs opacity-50">
晚点聊 LateTalk · EP165 · 完整节目：https://podcast.latepost.com/165
</div>
