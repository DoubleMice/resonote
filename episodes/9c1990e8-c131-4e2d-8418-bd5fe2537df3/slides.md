---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "151: MuleRun 陈宇森：Claude Code带来Agent创作新范式，未来的软件是日抛式的"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 151: MuleRun 陈宇森

## Claude Code 带来 Agent 创作新范式

<div class="mt-10 text-lg opacity-80">未来的软件是日抛式的</div>

<div class="mt-4 text-sm opacity-70">晚点聊 LateTalk · 2026 年 2 月 · 1 小时 47 分钟</div>

<div class="mt-14 text-sm opacity-70">从 Agent Marketplace 的转向，到一位连续创业者如何重新理解速度、产品门槛与用心。</div>

---

# 为什么这期值得听

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 创作范式变了

陈宇森将 Claude Code 看作通用智能体：它不只写代码，也可在合适环境里完成电脑上的工作。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 长尾需求有了成本结构

开发门槛下降后，一个人、几个人使用的工具也可能值得制作。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Skills 不是提示词目录

它把复杂任务拆成按需加载的方法、工具与接口，也带来评测和安全问题。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 交易入口仍未定型

货架适合已知需求；对话更适合从模糊的工作问题开始匹配智能体。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 平台要交付稳定性

交易平台不只是上架：还要评测完成率、监控质量、处理反馈与退款。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 创业经验回到产品里

从长亭到游戏与数据安全，再到 AI，陈宇森把失败归结为没有投入足够心力。

</div>

</div>

---

# 从 Vibe Coding 产品转向 Agent 平台

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 最初的判断

2024 年底，Cursor 的产品市场匹配让团队看到：编程能力可以把模型带进更多应用场景。MuleRun 一度做过类似 Lovable 的 Vibe Coding 产品。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 内测后的收缩

同一提示词在自家产品、Lovable 与 Bolt.new 上往往给出相近结果。团队没有找到明显优于既有产品的路径。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新的问题

如果模型已能执行大量电脑任务，瓶颈就转向：谁把领域知识、工作步骤和使用环境组织成可复用的智能体？

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 产品定位

MuleRun 的回答是建设创作、部署与交易的场所，而非重复制作一个通用编程助手。

</div>

</div>

---

# 长尾软件的成本结构被改写

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-stone-50 border-l-4 border-yellow-500">

### 过去：先找大共性

开发成本高，一款软件通常需要服务上千甚至上万人的共同需求，才足以覆盖投入。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 现在：小群体也可做

陈宇森认为，Vibe Coding 让为 10 人、50 人，甚至一个人制作工具变得可能。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 平台要解决的事

将一个人的工作经验与模型判断结合，让有相同问题的人直接使用，而非重新从电脑操作开始。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
他把这类场景比作 3D 打印：不必只有大规模工业制品，少数人真正需要的东西也可以被生产出来。
</div>

---
layout: two-cols-header
---

# 创作一个智能体，需要四层东西

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">用户不必先学参数、拖拽、循环和条件；首先要能说清需求与实际工作过程。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">技能把操作某个软件、处理一种文档或调用接口的做法带进任务。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">运行环境提供浏览器、软件和权限边界，让模型能真正执行，而非只给建议。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">任务、技能和环境合在一起，才可能稳定交付一个可复用的结果。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/agent-stack.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Marketplace 的原始难题：供给不够丰富

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 先有交易能力

平台已经有注册用户和部分上架供给，也支持 n8n 工作流、LangGraph 智能体等方式部署。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 但创作与上架仍重

人工参与、审核与不同部署方式都拉长流程；供给没有达到团队设想的丰富程度。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 因此回到创作者工具

让普通人用自然语言描述任务、选择所需技能与环境，才可能产生超级长尾的供给。

</div>

</div>

---

# 自动化真正难在中间的业务判断

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-stone-50 border-l-4 border-yellow-500">

### 传统软件能固定步骤

客服、销售、供应链人员都在用 IM、CRM、ERP；过去的自动化适合清晰规则和固定输入。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 工作常常需要判断

例如发现缺货后是否补货，不是单靠按钮和流程图就能穷尽的判断，规则也难写完整。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 模型补上胶水层

在标准流程和软件之间，模型可以依据工作知识处理一些过去需要人来做的判断。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 全自动化的差异

访谈认为，智能体若能稳定完成整段流程，就能持续运行并复制任务实例；这与半自动化不同。

</div>

</div>

---
layout: two-cols-header
---

# 运行环境决定智能体能做什么

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">没有浏览器，Claude Code 无法完成网页上的操作；有了环境，模型才能把标准步骤写成代码执行。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">云端适合工作场景：为智能体单独创建账号，并限制账号可访问的信息和权限。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">桌面端则更容易接触日历、文件与登录凭据，也因此要求用户给予更高信任。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/runtime-boundary.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Skills：把长任务拆成按需加载的能力

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 一长段提示词的风险

复杂任务依赖很长的提示词时，上下文压缩可能丢失信息；窗口变长也会影响模型判断。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Skills 先提供目录

智能体先看每个技能解决什么问题的简介，在遇到相关任务时，再读取具体说明与资源。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 文档之外还有工具

一个 Skill 可以附带程序、工具或 API：能交给确定性工具做的事，就不必让模型硬算。

</div>

</div>

---
layout: two-cols-header
---

# Skills 的价值，在于少读而读对

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">技能不是一次塞进所有上下文。模型先根据任务与技能简介，判断该读哪一份。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">选中技能后，才加载浏览器操作、表格处理或接口调用的具体方法。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">访谈将这件事放在 Context Engineering 的范畴：珍惜上下文，把它留给确实需要判断的部分。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/skills-loading.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# Skill Marketplace 需要评测，也需要安全审计

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 同一任务不止一个 Skill

以订餐厅或把 PDF 转成 PPT 为例，网上可能有多个候选方案。MuleRun 想在相同任务下比较它们的表现。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 不能只看功能

Skill 若在用户电脑上执行，还要检查是否藏有危险行为，例如借 Shell 回连获取控制权。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 官方与生态共同供给

常用能力可以由官方维护；发现生态中的优秀方案后，也可以配合运行环境把它做得更稳定。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 目标很具体

对特定任务，交给用户的应是同类里表现较好、且不会伤害运行环境的技能。

</div>

</div>

---

# 高完成率的路线：让代码做确定的事

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 模型负责判断与编排

它判断当前任务该怎样处理、该调用什么工具，并据此写出或选择执行代码。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 代码负责确定结果

数值比较、格式转换等可用程序得到结果的任务，不该塞进大段提示词后交给模型猜测。

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">
这也是 MuleRun 对生产场景的取向：用大量 SOP 承担确定步骤，再交给模型处理难以用规则穷尽的判断。
</div>

---
layout: two-cols-header
---

# 交易平台的护城河，是质量闭环

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">上架前要评测给定任务的完成率。陈宇森举例：有的任务应做到运行 100 次只错一次，或 1000 次只错一次。</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">上线后还要持续监控。用户评论和失败反馈，能补上评测覆盖不到的真实情况。</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">若产品频繁失败，平台需要下架；交易进一步扩大后，还会面对退款等问题。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/quality-loop.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 双边市场从哪里启动

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 供给方的疑问

平台没有用户时，创作者为什么要把智能体放进来运行？

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### 需求方的疑问

货架上没有足够多能解决问题的东西，用户为什么要留下？

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 团队看到的早期信号

他们在少数场景里观察到几个或十几个高频使用者；下一步一边深挖场景，一边缩短供给流程。

</div>

</div>

---

# Agent 工具的几条路径

<div class="grid grid-cols-3 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### n8n

访谈将它放在工作流创作工具中。它可以在不同环境运行，但面向普通人的创作与部署仍有门槛。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Dify

陈宇森认为它更专注企业内部工作流：企业软件不宜暴露到外部，部署环境与安全是关键条件。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Coze

访谈中的观察是，它早期依赖低代码，近期也在向用需求直接生成内容的创作方式移动；生态仍更封闭。

</div>

</div>

<div class="mt-4 text-sm opacity-70">这是陈宇森对相邻产品路径的个人观察，不是对各家公司当前产品能力的完整评测。</div>

---

# Nano Banana：门槛本身就是生意

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 一个看似简单的流程

桌面手办图流行时，用户要先能访问 Gemini 或 Google AI Studio，再从网上找到合适提示词并正确使用。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 创作者把步骤封装起来

平台上一位创作者把上传图片、调用提示词和取回结果串成小工作流，按次收费；热度高时使用量也上升。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 价值不止模型能力

很多人知道新工具很有趣，却不知道如何进入、搜索和操作。封装让能力变成可直接使用的服务。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 早期需求的形状

陈宇森举过 Midjourney 代做头像的例子：当工具尚有门槛，懂工具的人会成为普通用户与模型之间的中介。

</div>

</div>

---

# 日抛式软件：从复用成品走向按需制造

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-stone-50 border-l-4 border-yellow-500">

### 近期：小而常用

访谈没有把未来一步跳到终局。短期先做让少数人每天用得舒服的工具或智能体。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 更远：为特定目的生成

软件可能只为一个具体任务而生，完成后不再保留；产品的单位从长期软件转向一次次执行。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 成本不会自动消失

3D 打印消耗线材，生成和执行智能体消耗 Token 与算力。陈宇森认为短期 Token 很难便宜到无感。

</div>

</div>

---

# Agent Builder：站在 Base Agent 之上

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Agent Loop

智能体不是一次回答就结束。它会按循环与模型交互、拿到中间结果，再依据条件继续处理。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### Context Engineering

复杂任务要节省上下文：何时读取什么信息、何时压缩、何时转交工具，都会影响完成质量。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### Tools

Playwright 让模型可操作浏览器；图像模型 API 让它可生成图片。工具决定它能与什么系统交互。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### MuleRun 的取舍

团队没有从底层重造所有循环，先借助 Claude Code 这类 Base Agent，并把编辑、技能与环境做成更易用的云端工具。

</div>

</div>

---
layout: two-cols-header
---

# 从任务描述到可分享的智能体

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">创作者定义任务，必要时用示例补足判断标准；这是领域知识进入系统的入口。</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">从市场中选择已评估的 Skills，并配置需要操作的浏览器、软件或云端资源。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">由 Base Agent 组织任务循环，产物可即时分享给朋友；进入市场前再经审核。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/agent-builder.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 降低门槛，不等于降低技术要求

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 可达性改变传播

陈宇森用 DeepSeek 与 OpenAI O1 的对比说明：技术能力之外，免费、可传播和对普通人易达，也会决定产品是否破圈。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 技术团队容易忽略的点

团队曾希望懂领域知识的人用 n8n 或 LangChain 创作，但发现他们即使经历 Vibe Coding 的发展，仍常卡在开发与部署。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 体验带来的新供给

Agent Builder 先把能用的组件放在一起，减少每个人都要跨过的开发与部署卡点。

</div>

</div>

---

# Claude Cowork 与 MuleRun：相似的底层，不同的位置

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 共同点

两者都把原本偏命令行的 Agent 能力带给更多非程序员用户；陈宇森把 Claude Cowork 视为这一趋势被验证的信号。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### Claude Cowork 的位置

它在桌面应用里利用本地信息，可处理创建文件、整理下载目录、读取日历并准备会议等任务。

</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">

### MuleRun 的位置

团队更聚焦云端工作与浏览器操作，希望把权限明确限定在某个任务所需的账户和环境中。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 不只是换一层界面

陈宇森的区分是：客户端 UI 让人更容易使用既有能力；MuleRun 还试图预置工具、环境与创作流程。

</div>

</div>

---

# 从货架走向对话，入口会如何变化

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-stone-50 border-l-4 border-yellow-500">

### 货架的问题

当供给从几十个增长到上百个智能体，新用户仍可能不知道从哪里开始；点了几个无效结果，就会离开。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 对话的设想

用户先说自己要解决的事情。系统若能直接完成就执行；若有预制智能体更适合，就匹配调用；再不然才引导创建。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm leading-relaxed">
在这个设想里，Marketplace 不会完全消失，而会退到二级入口，供已明确知道自己想找什么的用户浏览。
</div>

---
layout: two-cols-header
---

# 对话入口背后，仍是一套生态

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">表面上是一个能对话的通用助手；底层却要识别任务，决定是否调用某位创作者预制的智能体。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">这能免去用户反复打磨复杂提示词，也让平台从搜索商品转为先帮助完成工作。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">难题转为经济系统：按上架定价很直观，但按一次调用分配收益，团队仍在探索。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./public/conversation-market.excalidraw" class="w-[460px]" :darkMode="false" :background="false" />
</div>

---

# 新版内测后的第一个变化：构建与分享合在一起

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 旧流程

先在 n8n、LangGraph 等工具里创建，再将产物部署到平台；这对没有开发背景的人依然复杂。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 新流程

Base Agent 与环境由平台管理后，用户用接近自然语言的交互创建任务，完成后即可分享给别人使用。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 首日还不证明需求

访谈时产品刚测试一天，团队尚未看到大量目标用户；运营同事用它做 KOL 调研，是一个内部使用例子。

</div>

</div>

---

# MuleRun 寻找领域知识密度更高的智能体

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 陈宇森的取舍

他不看好把网页和小游戏当作主要内容的路线：简单应用能快速做出，但承载的工作知识较少。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 他要的供给

招聘、客服、运营等领域的人，把线下经验、SOP 和判断条件编进智能体，帮助别人完成工作。

</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### General Agent 并非终点

通用助手可以做基础任务；长尾需求则可由特定智能体补上。访谈把两者视作可并存的层次。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 竞争也是时间题

团队承认许多人会走向同一方向，关键在于产品优先级、执行速度，以及何时将创作者工具推到用户面前。

</div>

</div>

---

# 从长亭到 MuleRun：创业轨迹不是直线

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 20 岁

从浙江大学毕业后创业，参与创办网络安全公司长亭科技。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 2014–2019

长亭持续发展，2019 年 10 月被阿里云收购；陈宇森随后在阿里工作近两年。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 第二次创业

他同时做游戏公司和数据安全公司。游戏第一个项目失败后关闭；第二段经历也面临挑战。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 重新出发

2023 年关闭公司前状态很差，之后回到阿里、观察 AI，再和团队开始探索 MuleRun。

</div>

</div>

---

# 失败让他重新敬畏陌生行业

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 先前的成功带来自信

长亭的技术基础来自安全竞赛与长期积累。进入游戏后，他一度认为自己可以同时把两家公司都做好。

</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 第一款作品没有做对

团队一开始就想做有创新玩法和题材的 PC 游戏，投入较多；后来回看，他认为不该对第一次尝试过分笃定。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 行业经验不能跳过

他引用游戏行业里的常见提醒：前十款游戏很可能都不好。对新领域，应允许自己用失败换取理解。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 后来的原则

先做能力与认知匹配的事，不让融资规模或其他外部条件迫使团队去做一个更大的、却不认同的选择。

</div>

</div>

---

# 下坡路里，韧性来自承认失败与朋友陪伴

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">

### 2023 年的低谷

关闭公司前，他经历严重失眠和强烈自我怀疑。团队走下坡路时，内部信任与凝聚力也在消耗。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 不把账上的钱硬花完

尽管公司仍有资金，他判断自己没有状态，也不认为继续消耗资金能提高翻盘概率，因此选择结束。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 陪伴比劝告有用

朋友察觉他的状态后，约他打游戏。对他而言，这种相处和分心比重复的安慰话更能缓解困境。

</div>

</div>

---

# 重新创业：把宏大目标拆成下一步

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">

### 当下的里程碑

团队希望先把创作者工具做得足够简单，让没有代码能力的人也能为自己的工作问题制作智能体，并丰富供给。

</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">

### 时间判断

访谈时，陈宇森希望在半年内看到这件事的好结果；他不把宏大目标当作每天的行动指南。

</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">

### 对 2026 年的期待

他期待模型在编码和使用工具的可靠性上继续增强，也期待出现把模型能力真正变成生产力的大型 AI 原生应用。

</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 个人的工作方式

他总结，创业者要亲自下水、持续接收反馈；一次判断被验证或推翻后，再修正下一步。

</div>

</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500"><span class="opacity-50">判断</span><br>“其实现在最强的general agents是Claude Code。”</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500"><span class="opacity-50">软件形态</span><br>“代码只是为了执行特定目的而完成”</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500"><span class="opacity-50">可靠性</span><br>“很多事情你不该让大模型做，你该让代码做。”</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500"><span class="opacity-50">产品未解题</span><br>“市场其实核心是该以分享为主还是交易为主。”</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500"><span class="opacity-50">速度</span><br>“创业的机会核心是在非共识变成共识之前你把它先干出来。”</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500"><span class="opacity-50">创业复盘</span><br>“就一定要用心”</div>

</div>

---
layout: end
class: text-center
---

# “你只有不停地去逼自己才有可能有一线生机。”

<div class="mt-8 text-sm opacity-70">陈宇森把这句话留给自己的下一次创业，也留给仍在验证假设的人。</div>
