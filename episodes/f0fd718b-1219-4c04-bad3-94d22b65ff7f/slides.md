---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: "159: 马斯克Terafab太空算力、英伟达重拾CPU|与Fusion Fund张璐聊AI算力新趋势"
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 太空算力与 AI 基础设施的下一场整合

## 从 TeraFab 到企业级小模型

<div class="mt-8 text-lg">晚点聊 · 第 159 期</div>

<div class="mt-3 text-base">嘉宾：张璐｜Fusion Fund 创始合伙人</div>

<div class="mt-8 text-sm opacity-70">2026 年 4 月</div>

---

# 为什么这一期值得听

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
    <div class="font-bold text-blue-700">01｜TeraFab</div>
    <div class="mt-1">马斯克想把芯片、算力、模型和物理世界放进同一套生态。</div>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3">
    <div class="font-bold text-green-700">02｜太空计算</div>
    <div class="mt-1">太空数据中心有长期想象，但辐射、延迟、发射和维护仍是现实门槛。</div>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3">
    <div class="font-bold text-orange-700">03｜AI 工厂</div>
    <div class="mt-1">英伟达正在把 GPU、CPU、LPU、网络、存储和软件平台整合成系统。</div>
  </div>
  <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3">
    <div class="font-bold text-red-700">04｜异构算力</div>
    <div class="mt-1">Agent 让推理、工具调用和持续运行增加，CPU 与专用芯片重新变重要。</div>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3 col-span-2">
    <div class="font-bold text-purple-700">05｜企业落地</div>
    <div class="mt-1">高监管行业偏好本地部署的小模型，数据治理、医疗 AI 和 To B 创业因此加速。</div>
  </div>
</div>

---

# TeraFab 把问题推向 1 太瓦级

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-3xl font-bold text-blue-700">1 太瓦</div>
    <div class="mt-2 text-sm leading-relaxed">节目开场把 TeraFab 描述为 1 太瓦级的 AI 算力年产能计划。</div>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-3xl font-bold text-orange-700">80%–90%</div>
    <div class="mt-2 text-sm leading-relaxed">马斯克提出把这一比例的算力送入太空，并用太阳能供电。</div>
  </div>
  <div class="rounded-lg border-t-4 border-purple-500 bg-purple-50 p-4">
    <div class="text-3xl font-bold text-purple-700">3 月 21 日</div>
    <div class="mt-2 text-sm leading-relaxed">张璐围绕这项刚公布的计划，讨论太空经济和 AI 基础设施机会。</div>
  </div>
</div>

<div class="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  这不是一个单独的芯片项目。节目把它放在 SpaceX、Tesla 和 xAI 的生态整合中理解；1 太瓦更像对未来机器人、自动驾驶、卫星边缘计算和推理需求的预设。
</div>

---
layout: two-cols
---

# TeraFab 的核心是掌握完整链路

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>张璐把 TeraFab 放在一条更长的路线里：芯片先提供算力，基础设施承载算力，模型再把能力接到真实世界。</p>
  <p class="mt-3">她用 Google Gemini 的系统优势作参照：TPU、算力、模型和数据放在同一套系统里，更容易共同优化。</p>
  <p class="mt-3">马斯克关心的重点，是让自己的生态拥有算力供给，减少未来被外部资源卡住的风险。</p>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./musk-stack.excalidraw" />
</div>

---

# 太空数据中心的动机，既有产业也有监管

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <h3 class="text-lg">供给控制</h3>
    <p class="mt-2 text-sm leading-relaxed">马斯克希望自己拥有算力能力，不把生态扩展完全交给外部供应商。</p>
  </div>
  <div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
    <h3 class="text-lg">能源想象</h3>
    <p class="mt-2 text-sm leading-relaxed">太空可以接近太阳能，但发射、运行、维修和冷却成本仍然存在。</p>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
    <h3 class="text-lg">监管空间</h3>
    <p class="mt-2 text-sm leading-relaxed">张璐判断，太空管辖规则尚不清晰，带来的自由度可能也是动机之一。</p>
  </div>
</div>

<div class="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed">
  太空方案同时服务于产业愿景、算力自主和规则想象；它的价值不能只用电价来解释。
</div>

---

# 太空算力面对四道现实门槛

<div class="grid grid-cols-2 gap-3 mt-5">
  <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
    <h3 class="text-lg text-red-700">辐射</h3>
    <p class="mt-1 text-sm leading-relaxed">宇宙辐射和热辐射会影响芯片封装与性能，相关保护方案还需解决。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
    <h3 class="text-lg text-orange-700">发射</h3>
    <p class="mt-1 text-sm leading-relaxed">SpaceX 可以持续优化发射成本，但大规模送入轨道仍会放大投入。</p>
  </div>
  <div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
    <h3 class="text-lg text-yellow-700">运维</h3>
    <p class="mt-1 text-sm leading-relaxed">设备在太空发生故障后，维修和日常维护都比地面更难。</p>
  </div>
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <h3 class="text-lg text-blue-700">延迟</h3>
    <p class="mt-1 text-sm leading-relaxed">轨道距离会增加 latency；地面应用未必能承受这段额外链路。</p>
  </div>
</div>

<div class="mt-4 text-sm text-gray-600">张璐的判断是，短期仍有技术、成本和实际效用三类问题需要回答。</div>

---
layout: two-cols
---

# 先确定算力服务的对象

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>太空数据中心的可行性，取决于它为谁提供算力。</p>
  <ul class="mt-3 space-y-2">
    <li><strong>太空应用：</strong>卫星、太空工厂和机器人数量增加后，就近计算能减少数据往返。</li>
    <li><strong>地球应用：</strong>远距离连接会带来 latency，发射和维护成本也会直接进入账本。</li>
    <li><strong>先后顺序：</strong>太空经济与基础设施先成长，轨道数据中心才有更确定的需求。</li>
  </ul>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./space-use-cases.excalidraw" />
</div>

---

# 太空工厂是更近的应用想象

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
    <div class="text-lg font-bold text-blue-700">微重力的材料窗口</div>
    <p class="mt-3 text-sm leading-relaxed">在地球上受重力影响的晶体、材料结构和蛋白质结构，可以在微重力或无重力环境下获得新的实验条件。</p>
    <p class="mt-2 text-sm leading-relaxed">张璐把材料和医疗领域的瓶颈，都与这种新环境联系起来。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5">
    <div class="text-lg font-bold text-orange-700">机器人原生的生产场景</div>
    <p class="mt-3 text-sm leading-relaxed">把人送入太空，需要先建设安全、健康的生存系统；机器人可以先执行远程、危险和重复任务。</p>
    <p class="mt-2 text-sm leading-relaxed">因此，太空工厂天然需要 AI 和机器人协同。</p>
  </div>
</div>

---

# 太空经济的三个应用切口

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">卫星交通</div>
    <p class="mt-2 text-sm leading-relaxed">AI 管理卫星运行，处理碰撞风险和太空垃圾问题。</p>
  </div>
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">卫星数据</div>
    <p class="mt-2 text-sm leading-relaxed">矿产检测、山火预警和气象服务都可以使用卫星数据。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-lg font-bold text-orange-700">月球加油站</div>
    <p class="mt-2 text-sm leading-relaxed">机器人从月壤取水，再分离氢气与氧气，形成燃料补给的设想。</p>
  </div>
</div>

<div class="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  这些项目共同指向一个条件：通信、AI 部署和自动化机器人需要本地算力，太空数据中心只是其中一种可能的支撑方式。
</div>

---

# 太空经济的规则还没有完全成形

<div class="grid grid-cols-2 gap-3 mt-5">
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
    <h3 class="text-lg text-purple-700">规则空白</h3>
    <p class="mt-1 text-sm leading-relaxed">低轨有国际组织参与监管，但太空管辖边界仍不清晰。</p>
  </div>
  <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
    <h3 class="text-lg text-red-700">执行难题</h3>
    <p class="mt-1 text-sm leading-relaxed">已有卫星退出轨道的责任要求，谁持续监督和执行仍是问题。</p>
  </div>
  <div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
    <h3 class="text-lg text-yellow-700">资源问题</h3>
    <p class="mt-1 text-sm leading-relaxed">月球资源归属尚未形成清晰共识；轨道被大量占用后，后来者可能更难使用。</p>
  </div>
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <h3 class="text-lg text-blue-700">政治问题</h3>
    <p class="mt-1 text-sm leading-relaxed">地面建设需要国家审批和政治支持；太空方案可能提供更大的行动自由度。</p>
  </div>
</div>

---
layout: two-cols
---

# 马斯克想把公司组合成一套系统

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>SpaceX 有火箭和卫星，Tesla 有终端和工厂，马斯克还在推进机器人、芯片与算力。</p>
  <p class="mt-3">这些资产一旦共享数据、算力和工程能力，TeraFab 就不再只是一个芯片厂，而会支撑跨公司的生态协同。</p>
  <p class="mt-3">张璐把这种愿景理解为垂直整合：未来需求先被内部生态消化，再向外部应用扩展。</p>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./vertical-ecosystem.excalidraw" />
</div>

---

# 创业时机：先做基础设施，再等太空算力

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">
  <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
    <div class="font-bold text-red-700">太空数据中心：偏早</div>
    <p class="mt-1">张璐认为未来两三年仍难实现；轨道数据中心成熟可能还需七到十年的技术周期。</p>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
    <div class="font-bold text-green-700">AI 基础设施：更近</div>
    <p class="mt-1">软硬件优化、互联、能耗和系统整合，已经有更确定的客户需求。</p>
  </div>
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <div class="font-bold text-blue-700">太空基础设施：可观察</div>
    <p class="mt-1">创业公司可以先做数据中心之外的太空设施，再观察未来三到五年的生态成长。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
    <div class="font-bold text-orange-700">资本结构：先想清楚</div>
    <p class="mt-1">大集群需要重资本投入；创业公司要决定自己服务数据中心，还是承担自建周期。</p>
  </div>
</div>

---
layout: two-cols
---

# 基础设施机会从芯片延伸到集群效率

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>大规模 AI 集群的瓶颈不只在计算芯片，也在电力、通信、存储和运维。</p>
  <ul class="mt-3 space-y-2">
    <li>训练和推理都消耗电力，通信传输本身也会带来负载。</li>
    <li>受访者提到的 interconnect 和 optical switch，目标是让传输更快、耗电更低。</li>
    <li>作者概括：创业机会从单个芯片延伸到整套集群的效率优化。</li>
  </ul>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./infra-bottlenecks.excalidraw" />
</div>

---
layout: two-cols
---

# 创业公司要先选择服务位置

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>太空计算和 AI 基础设施都需要把资本、技术周期与客户确定性放在一起看。</p>
  <ul class="mt-3 space-y-2">
    <li><strong>服务数据中心：</strong>围绕硬件、软件、互联或运维做局部优化，切入点更窄。</li>
    <li><strong>自建数据中心：</strong>同时承担发射、设备、维护和资本周期，需求确定性要求更高。</li>
    <li>节目没有给出统一答案；创业公司的选择取决于资源和市场成熟度。</li>
  </ul>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./startup-choice.excalidraw" />
</div>

---

# 英伟达正在重新定义自己

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">公司定义</div>
    <p class="mt-2 text-sm leading-relaxed">Jensen Huang 在 GTC 强调，英伟达要做全栈 AI 基础设施公司。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">产品定义</div>
    <p class="mt-2 text-sm leading-relaxed">产品从 GPU 扩展到 CPU、网络、存储、CUDA System 和部署方案。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-lg font-bold text-orange-700">需求定义</div>
    <p class="mt-2 text-sm leading-relaxed">Token Economy 让模型使用阶段的推理基础设施成为长期需求。</p>
  </div>
</div>

<div class="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed">
  英伟达想让客户购买一整套 AI 工厂，而不只是从不同供应商分别采购芯片和服务器部件。
</div>

---
layout: two-cols
---

# AI 工厂的产品形态是系统组合

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>Blackwell Rubin 平台把 GPU、CPU、网络、存储和软件平台放在同一个系统叙事里。</p>
  <p class="mt-3">Groq 的 LPU 推理能力被纳入平台，作为面向低延迟和高吞吐场景的加速层。</p>
  <p class="mt-3">在这个组合里，英伟达销售的是部署方案和系统整合能力。</p>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./ai-factory.excalidraw" />
</div>

---

# 算力重心从训练移向持续推理

<div class="mt-5 overflow-hidden rounded-lg border border-gray-200">
  <table class="text-sm">
    <thead>
      <tr><th>访谈中的阶段</th><th>受访者回忆的比例</th><th>含义</th></tr>
    </thead>
    <tbody>
      <tr><td>早期讨论</td><td>训练约 70%–80%；推理约 10%–20%</td><td>训练消耗占主导</td></tr>
      <tr><td>当前阶段</td><td>训练与推理约各占一半</td><td>模型使用增加</td></tr>
      <tr><td>未来判断</td><td>训练约 20%–30%；推理约 60%–70%</td><td>推理成为持续负载</td></tr>
    </tbody>
  </table>
</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-blue-50 p-3">训练更像一次性的大额算力消耗。</div>
  <div class="rounded-lg bg-orange-50 p-3">Agent 持续调用工具后，推理会变成反复发生的消耗。</div>
</div>

<div class="mt-3 text-xs text-gray-600">以上比例是访谈中对趋势的回忆，不是完整的市场统计。</div>

---

# Agent 让 CPU 重新回到舞台

<div class="grid grid-cols-2 gap-3 mt-6">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <div class="font-bold text-blue-700">调用工具</div>
    <p class="mt-1 text-sm leading-relaxed">Agent 要不断读取数据、调用外部工具，CPU 负责大量调度工作。</p>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
    <div class="font-bold text-green-700">运行代码</div>
    <p class="mt-1 text-sm leading-relaxed">代码执行和任务编排增加了通用计算的比重。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
    <div class="font-bold text-orange-700">多 Agent 协同</div>
    <p class="mt-1 text-sm leading-relaxed">多个 Agent 协同，会带来更多实时调度和上下文处理。</p>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
    <div class="font-bold text-purple-700">强化学习与仿真</div>
    <p class="mt-1 text-sm leading-relaxed">强化学习和 simulation 也需要 CPU 参与环境运行与任务控制。</p>
  </div>
</div>

<div class="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed">
  英伟达重新加入 CPU 产品线，既为了补齐整机和整柜性能，也为了让客户直接购买完整 AI 工厂。
</div>

---
layout: two-cols
---

# 未来的 AI 应用需要异构计算

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>张璐提到，新的模型架构已经出现 CPU 效率高于 GPU 的特定场景。</p>
  <p class="mt-3">GPU、CPU、LPU、NPU 和 TPU 各自适合不同任务；统一平台与多种芯片可以同时存在。</p>
  <p class="mt-3">真正的竞争点，是整套系统能否把不同架构组合起来，并让开发者持续使用。</p>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./heterogeneous-compute.excalidraw" />
</div>

---

# 收购是英伟达补全系统的方式

<div class="grid grid-cols-3 gap-3 mt-5 text-sm leading-relaxed">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">Lampton AI</div>
    <p class="mt-2">被整合后成为 DGX Lampton Platform，指向英伟达的 GPU 云布局。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">Nexus Flow</div>
    <p class="mt-2">同样属于 AI 基础设施公司；具体整合细节因要求没有展开。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-lg font-bold text-orange-700">Groq</div>
    <p class="mt-2">2016 年成立，创始人曾参与 Google TPU 项目，长处是低延迟和高 Token 吞吐。</p>
  </div>
</div>

<div class="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  张璐所在基金去年有五家公司被收购，其中两家被英伟达收购；她认为英伟达看重的是产品进入生态后的系统价值。
</div>

---

# TPU 的优势，依赖 Google 的完整系统

<div class="mt-5 overflow-hidden rounded-lg border border-gray-200">
  <table class="text-sm">
    <thead>
      <tr><th>观察维度</th><th>Google 内部使用 TPU</th><th>第三方使用 TPU</th></tr>
    </thead>
    <tbody>
      <tr><td>优化条件</td><td>芯片、模型、数据和应用一起调优</td><td>缺少 Google 的全栈环境</td></tr>
      <tr><td>成本与性能</td><td>系统优化可以把成本压低</td><td>性能和成本都会打折扣</td></tr>
      <tr><td>开发体验</td><td>JAX 等软件与内部流程配套</td><td>开发者迁移和适配成本更高</td></tr>
    </tbody>
  </table>
</div>

<div class="mt-5 grid grid-cols-2 gap-3 text-sm leading-relaxed">
  <div class="rounded-lg bg-purple-50 p-3">谷歌在 TPU 上的积累已经超过十年。</div>
  <div class="rounded-lg bg-green-50 p-3">张璐判断，短期 TPU 难以对 GPU 形成有效威胁，但市场最终会需要多种架构。</div>
</div>

---
layout: two-cols
---

# 企业级 AI 的第一选择是可控部署

::left::

<div class="pr-4 text-sm leading-relaxed">
  <p>金融、医疗保健等行业监管严格，数据也更敏感，因此更需要本地部署或私有云。</p>
  <ul class="mt-3 space-y-2">
    <li>小模型只处理特定垂直任务，更容易控制延迟和幻觉。</li>
    <li>数据可以留在企业内部，减少全部上传云端的需要。</li>
    <li>模型规模更小，也会降低算力和电力消耗。</li>
  </ul>
</div>

::right::

<div class="w-[460px] h-[430px]">
  <Excalidraw drawFilePath="./enterprise-ai-loop.excalidraw" />
</div>

---

# 企业要把数据变成能用的资产

<div class="grid grid-cols-4 gap-3 mt-7 text-center text-sm">
  <div class="rounded-lg border-t-4 border-yellow-500 bg-yellow-50 p-3">
    <div class="font-bold">企业数据</div>
    <div class="mt-2 text-xs leading-relaxed">规模大，但结构和质量不一</div>
  </div>
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-3">
    <div class="font-bold">data curation</div>
    <div class="mt-2 text-xs leading-relaxed">整理、筛选和优化数据</div>
  </div>
  <div class="rounded-lg border-t-4 border-red-500 bg-red-50 p-3">
    <div class="font-bold">安全与隐私层</div>
    <div class="mt-2 text-xs leading-relaxed">让数据能在边界内流动</div>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-3">
    <div class="font-bold">行业应用</div>
    <div class="mt-2 text-xs leading-relaxed">把数据接入 AI 产品</div>
  </div>
</div>

<div class="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  张璐观察到，大企业已经意识到：手里有大量数据，只有完成整理、治理和 AI 接入，数据才会成为真正的数据资产。
</div>

---

# 预算增加，企业部署速度也在加快

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-2xl font-bold text-blue-700">45 家</div>
    <p class="mt-2 text-sm leading-relaxed">Fusion Fund 自 2018 年运营 CX 网络，成员包括约 45 家全球 1000 强企业的 CTO。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-2xl font-bold text-orange-700">120 亿美元</div>
    <p class="mt-2 text-sm leading-relaxed">交流中最高的一位企业负责人提到，这笔预算用于 AI 收购、技术整合、订单和战略合作。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-2xl font-bold text-green-700">3–4 个月</div>
    <p class="mt-2 text-sm leading-relaxed">张璐观察到，一些金融和保险公司能在这个周期内完成新的 AI 技术整合。</p>
  </div>
</div>

<div class="mt-6 text-sm text-gray-600">这些数字是受访者交流和案例的回顾，不代表所有企业的统一水平。</div>

---

# 医疗 AI 同时拥有数据和场景

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <div class="font-bold text-blue-700">高质量数据</div>
    <p class="mt-1">医疗有大量高质量数据，也有多样化应用场景，适合训练和部署垂直模型。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
    <div class="font-bold text-orange-700">产业合作</div>
    <p class="mt-1">Eli Lilly 与英伟达达成数十亿美元战略合作，推进 AI 与制药领域的结合。</p>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
    <div class="font-bold text-green-700">隐私方法</div>
    <p class="mt-1">医疗机构开始使用 Federated Learning，在利用数据的同时降低隐私风险。</p>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
    <div class="font-bold text-purple-700">产品供给</div>
    <p class="mt-1">张璐提到 ChatGPT、Claude 和 Anthropic 都在推出医疗相关的 AI 产品或应用。</p>
  </div>
</div>

---

# To B 创业的窗口来自数据边界

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-red-500 bg-red-50 p-4">
    <div class="text-lg font-bold text-red-700">大企业的顾虑</div>
    <p class="mt-2 text-sm leading-relaxed">传统行业不愿把核心数据交给大型科技公司，也不愿把全部数据上传云端。</p>
  </div>
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">创业公司的切口</div>
    <p class="mt-2 text-sm leading-relaxed">初创公司可以围绕一个垂直场景，在数据边界内和客户一起迭代。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">收入速度</div>
    <p class="mt-2 text-sm leading-relaxed">张璐称，有公司一年内收入从 0 增至 2000 万美元，团队还不到 10 个人。</p>
  </div>
</div>

<div class="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  To B 的优势不在于竞争者更少，而在于传统行业有明确的数据边界和具体的业务问题，初创公司可以据此找到切入点。
</div>

---

# 商业化入口塑造创业地理

<div class="grid grid-cols-2 gap-3 mt-5 text-sm leading-relaxed">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
    <div class="font-bold text-blue-700">硅谷的市场入口</div>
    <p class="mt-1">全球创业者可以把工程团队留在加拿大或欧洲，再利用美国企业市场完成商业化。</p>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
    <div class="font-bold text-orange-700">传统龙头在加速</div>
    <p class="mt-1">JPMorgan Chase 等银行，以及 Koch Disruptive Technologies 所在的企业集团，都在加快 AI 整合。</p>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
    <div class="font-bold text-green-700">合作周期缩短</div>
    <p class="mt-1">KDT 把新 AI 技术带入旗下企业，合作周期可以压缩到一两个月。</p>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
    <div class="font-bold text-purple-700">中美创业偏好</div>
    <p class="mt-1">张璐观察到，中国不少创业项目仍偏向互联网和移动互联网消费市场，美国创业者更聚焦企业市场。</p>
  </div>
</div>

---

# 并购给 AI 基础设施提供另一条退出路径

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-purple-500 bg-purple-50 p-4">
    <div class="text-lg font-bold text-purple-700">时间差</div>
    <p class="mt-2 text-sm leading-relaxed">张璐把 IPO 的常见周期描述为 7–10 年，并购则提供更早的退出可能。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-lg font-bold text-orange-700">基金案例</div>
    <p class="mt-2 text-sm leading-relaxed">基金去年有五家公司被收购，其中四家成立时间不到两年。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">回报案例</div>
    <p class="mt-2 text-sm leading-relaxed">张璐称这些项目给基金带来 10–20 倍收益；这是她对基金案例的回顾。</p>
  </div>
</div>

<div class="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
  这种退出机制会让人才和资金更快重新进入下一家公司，也解释了美国企业级 AI 市场的创业吸引力。
</div>

---

# 连续创业者把长期影响放在回报之前

<div class="grid grid-cols-3 gap-3 mt-6">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">超级创始人网络</div>
    <p class="mt-2 text-sm leading-relaxed">Fusion Fund 在 2015 年建立了一个 62 人网络，成员都是连续成功创业者。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">下一家公司</div>
    <p class="mt-2 text-sm leading-relaxed">张璐说，许多成员已经实现财富自由，更在意改变产业和长期影响。</p>
  </div>
  <div class="rounded-lg border-t-4 border-orange-500 bg-orange-50 p-4">
    <div class="text-lg font-bold text-orange-700">马斯克样本</div>
    <p class="mt-2 text-sm leading-relaxed">她把马斯克视为使命驱动型连续创业者：强愿景与高强度工作同时存在。</p>
  </div>
</div>

<div class="mt-6 text-sm leading-relaxed">对这类创业者来说，退出不是终点；它会把经验、资金和人才带到下一轮产业探索。</div>

---

# 张璐接下来关注什么

<div class="mt-5 text-sm leading-relaxed">接下来一个季度到半年，她会把大量时间放在看项目、管项目和支持三家公司上市；技术方向集中在三条线上。</div>

<div class="grid grid-cols-3 gap-3 mt-5">
  <div class="rounded-lg border-t-4 border-blue-500 bg-blue-50 p-4">
    <div class="text-lg font-bold text-blue-700">AI 基础设施</div>
    <p class="mt-2 text-sm leading-relaxed">重点看 inference cost、能源、memory、security 和系统整合等下一阶段瓶颈。</p>
  </div>
  <div class="rounded-lg border-t-4 border-green-500 bg-green-50 p-4">
    <div class="text-lg font-bold text-green-700">医疗 AI</div>
    <p class="mt-2 text-sm leading-relaxed">继续关注生命科学、制药自动化，以及微型或纳米机器人。</p>
  </div>
  <div class="rounded-lg border-t-4 border-purple-500 bg-purple-50 p-4">
    <div class="text-lg font-bold text-purple-700">太空科技</div>
    <p class="mt-2 text-sm leading-relaxed">未来两三年继续观察太空经济的迭代，以及太空基础设施的投资机会。</p>
  </div>
</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">
  <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
    <div class="font-bold text-blue-700">TeraFab 的算力动机</div>
    <blockquote class="!my-2 !p-3">“我想自己有算力能力，我不想被别人去卡住我自己算力未来发展的一个延展的空间”</blockquote>
  </div>
  <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3">
    <div class="font-bold text-red-700">太空数据中心的时机</div>
    <blockquote class="!my-2 !p-3">“我觉得不是一个好时机，我觉得还是有点太早。”</blockquote>
  </div>
  <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3">
    <div class="font-bold text-orange-700">英伟达的系统定义</div>
    <blockquote class="!my-2 !p-3">“它卖的并不是一张一块卡或者一个芯片，它卖的是一个完整的系统”</blockquote>
  </div>
  <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3">
    <div class="font-bold text-purple-700">企业部署条件</div>
    <blockquote class="!my-2 !p-3">“他们更需要的是，希望无论是AI应用或者是Agent它可以在本地化部署，或者是在它这个私有云去部署。”</blockquote>
  </div>
  <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 col-span-2">
    <div class="font-bold text-green-700">To B 创业的规模</div>
    <blockquote class="!my-2 !p-3">“有很多公司一年时间收入从0涨到2000万美金，团队可能还不到10个人。”</blockquote>
  </div>
</div>

---
layout: end
---

# 把算力放回真实约束

<blockquote class="mt-8">“改变世界的同时创造财富，但最重要的是改变世界。”</blockquote>

<div class="mt-5 text-sm opacity-70">张璐谈连续成功创业者的长期动机</div>
