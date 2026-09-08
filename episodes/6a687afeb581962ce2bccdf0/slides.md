---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: 44. 百大UP创业AI，流量真是护城河吗？- 图灵的猫｜王依然
coverDate: ""
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# 流量之后，AI 产品靠什么留下用户？

<div class="mt-8 text-2xl opacity-80">图灵的猫｜王依然</div>

<div class="mt-12 text-lg opacity-70">从创作者工具出发，讨论 PMF、模型竞争、AI 电影与硬件</div>

<div class="mt-18 text-sm opacity-50">台前是火星 · 2026-07 · 1 小时 10 分</div>

---

# 为什么这期值得听

<div class="grid grid-cols-5 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold">创作链路</div>
生成只是一个环节；素材检索、整理、剪辑和存储同样有需求。
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold">流量与 PMF</div>
创作者能带来首批用户，但不能代替留存和付费。
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold">模型竞争</div>
模型变强、成本下降，应用公司的竞争并不会自动减轻。
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold">AI 电影</div>
画面成本降低后，剧本、审美和镜头语言仍决定作品。
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold">硬件形态</div>
模型能力需要被装进具体设备，也需要重新划定权限边界。
</div>

</div>

---

# 生成只是创作流程的一段

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">生成之前</div>
找回本地素材、整理灵感、形成大纲，决定后续创作从哪里开始。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">生成之中</div>
模型可以起草、补全或理解片段；创作者仍要把内容改成自己的表达。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-lg mb-1">生成之后</div>
剪辑、归档、压缩与再次检索，决定素材是否还能被使用。
</div>

</div>

<div class="mt-6 text-sm opacity-70">王依然把创业视线放在生成模块之外：创作者的工作并不止于按下生成按钮。</div>

---
layout: two-cols-header
---

# 从素材到成片：工具覆盖整条链路

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">本地素材的内容远多于文件名；仅靠文件夹很难找回某段视频或图片。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">生成工具解决的是其中一站，检索、组织和复用也会直接影响创作效率。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">团队因此把创作工具理解为流程工具，而不是单一的视频生成入口。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./creation-chain.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 素材不是可以随手清掉的缓存

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">容量压力</div>
主持人举例：单轨视频播客约 30G，两轨约 60G；经过多个版本后，素材很快占满硬盘。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">留下再用的可能</div>
王依然认为素材不宜按垃圾文件处理。压缩后仍需满足参考视频的清晰度，并支持日后检索。
</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm leading-relaxed">这里的产品机会很具体：既节省空间，也不把创作者未来可能需要的资产一并删掉。</div>

---

# 从写作助手开始的第一轮尝试

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">目标用户</div>
团队从自媒体创作切入，先处理灵感定位、提纲分析与文本草稿。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">产品边界</div>
它没有定位成自动写完脚本的机器；用户需要参与确认和修改。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-lg mb-1">交互方式</div>
基于既有创作和上下文补全，也允许把初稿逐行改写。
</div>

</div>

---

# 人要能接住模型给出的草稿

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">逐行修改，而非整段重写</div>
用户可像批注文档一样标出不满意的句子，再让系统针对该处修改。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">让模型像编辑一样提出意见</div>
用户也能先带入自己的草稿，参考工具给出的意见完成修改，而非把判断交给模型。
</div>

</div>

<div class="mt-6 text-sm opacity-70">这套设计来自当时模型文本质量的限制，也反映了团队对创作者控制权的重视。</div>

---

# 场景理解不等于产品匹配

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">已有经验</div>
多年创作和 AI 开发经历，能帮助团队看到陌生人不易察觉的痛点。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">仍会遇到的限制</div>
自媒体创作被团队判断为存量且需求较窄；成熟创作者往往已有工作流，新手则可能直接使用通用工具。
</div>

</div>

<div class="mt-6 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">产品能否带来足够增量，取决于用户是否愿意改变现有做法并为此付费。</div>

---

# 两个被反复提起的产品启发

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">Granola</div>
王依然欣赏它从用户痛点出发删减功能，只保留两三个核心能力，也不依赖机器人进入会议。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">Tape</div>
它在 Product Hunt 早期并不显眼；王依然认为产品名、气质和贴合痛点的简洁体验都很重要。
</div>

</div>

<div class="mt-6 text-sm opacity-70">两者都把学习成本压得很低，也让用户很快感到具体好处。</div>

---

# 画布不是创作的全部

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-lg mb-1">画布适合展开</div>
节点、素材和选择可以在同一空间里发散；这符合找灵感和试方向的阶段。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">创作也需要收束</div>
大纲要形成连贯线索，成片也要做取舍。素材节点增多后，画布未必能帮助用户整理。
</div>

</div>

---
layout: two-cols-header
---

# 创作在发散和收敛之间往返

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">灵感阶段需要允许更多分支；大纲阶段则要求把线索收成一条能讲清的叙事。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">脚本仍会发生发散，剪辑又回到取舍和收束。一个界面不一定适合所有阶段。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">团队早期采用七到九个固定工作流节点，先让用户完成明确任务。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./creation-loop.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 无限画布还有工程上的边界

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">节点变多</div>
素材和节点累积后，用户不只要摆放，更需要寻找、筛选与重新组织。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-lg mb-1">画布变大</div>
缓存、存储和渲染效率都会成为问题；大的画布不能因为规模扩大而卡顿。
</div>

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">交互要匹配任务</div>
固定节点的工作流限制了自由度，但在任务清晰时也能降低学习成本。
</div>

</div>

---

# 本地权限会重塑产品形态

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">本地端的价值</div>
如果工具能读取本地素材，就可以整理资产、协助编辑，并减少反复上传大型文件的麻烦。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">权限同时带来风险</div>
能操作文件、应用和设备的代理，也可能删除文件或修改内容。便利和掌控权需要一起被设计。
</div>

</div>

<div class="mt-6 text-sm opacity-70">王依然将这看作应用从网页端向本地端发展的一个方向，而不是单纯把网页界面搬到设备上。</div>

---
layout: two-cols-header
---

# 模型变强，会淘汰表层的产品外壳

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">团队若不理解业务场景，只是在模型外面包一层很浅的需求，模型升级后就可能直接覆盖它。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">难以被替代的部分包括真实流程、数据、工程稳定性，以及团队在场景里积累的判断。</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">这个判断也解释了他为何对某些通用网页工具保持谨慎。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./hammer-test.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 模型成本下降，不等于应用压力变小

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">用户侧</div>
同类工具之间的调用成本下降，用户可能感到每次使用更便宜。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">公司侧</div>
所有竞争者都能拿到更低成本时，省下来的空间可能继续被投入营销、补贴和争夺用户。
</div>

</div>

<div class="mt-6 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">只有模型公司自己下场做应用时，成本与入口才可能被同一家公司同时控制。</div>

---

# 补贴把创作工具推向趋同

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-lg mb-1">用户会比较价格</div>
当工具能力接近，用户会在补贴、token 价格和新模型之间切换。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">公司的投入更重</div>
为了进入头部，团队可能需要承担大规模融资和持续补贴的压力。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">团队的选择</div>
王依然提到，他们孵化同类工具三个月后选择停止，不把全部声誉和资金押进这条路径。
</div>

</div>

---

# 百大 UP 主能带来的第一批资源

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">融资接触</div>
团队公开创业意向后，有投资人主动联系；他们后来仍决定在当时不拿钱。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">冷启动曝光</div>
一次视频或动态能带来成千上万次观看，这比小团队从零做增长更快。
</div>

<div class="p-4 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="font-bold text-lg mb-1">早期测试</div>
已有受众愿意进入内测，为产品提供第一轮真实使用反馈。
</div>

</div>

---
layout: two-cols-header
---

# 流量把用户带到门口，PMF 要靠产品留下人

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">创作者影响力有利于招募早期用户，也使产品发布能迅速获得关注。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">粉丝的信任可能抬高首轮付费意愿，但非粉丝进入后，付费会回到更接近市场平均的水平。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">留存、付费和用户是否愿意长期改变行为，才是产品能否继续投入的依据。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./traffic-pmf.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 粉丝信任是一份需要克制使用的资产

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">可以做什么</div>
喜欢创作者的人有时购买的不只是功能，也会为喜爱和情绪投射付费。它能帮助产品跨过最早的验证门槛。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">不能假设什么</div>
信任不能替代产品价值。王依然不愿用培训、卖课或小商品的方式消耗这份关系，也不愿让产品辜负它。
</div>

</div>

---

# 国内外同时试水，获得的是不同资源

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">国内</div>
既有影响力能较快带来数千乃至上万名首批用户，也支撑团队已有的业务和影响力。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">海外</div>
团队在北美、欧洲和东南亚尝试销售，并在 Twitter、TikTok、Product Hunt 发布；早期用户规模不如国内，但被视为更长的营收线。
</div>

</div>

<div class="mt-6 text-sm opacity-70">双线策略也带来成本：团队曾为国内外市场分别制作官网和设计，并经历备案等待。</div>

---
layout: two-cols-header
---

# Vibe coding 扩大了产品的两种形态

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">个人脚手架可以围绕个人要求快速生成网页或小工具，适合小圈子和一次性的需求。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">系统工程要承载大流量和复杂需求，仍离不开长期的工程投入与对系统的理解。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">王依然认为，前者的空间会迅速变大，后者暂时不容易由个人独立完成。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./product-layers.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 系统级产品仍要面对真实负载

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">人变少了</div>
早期做一个应用往往要产品、运营、设计、前后端和算法人员，vibe coding 已压低了小工具的门槛。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">问题没有消失</div>
高并发、稳定性、复杂数据和深层需求仍然需要工程能力，也会暴露 AI 编程工具的局限。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">产品定义扩展</div>
除了面向所有人的应用，也会出现只为个人使用的产品；成本主要是生成和 API 调用。
</div>

</div>

---

# 从创作者工具走向 AI 电影

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">想做的事</div>
在做一个新的剪映和拍一部两小时电影之间，王依然选择后者，并在筹划公司内部的 AI IP 尝试。
</div>

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-lg mb-1">仍有门槛</div>
模型让画面生产更容易，但不能替代对剧本、拍摄步骤和内容控制的长期理解。
</div>

</div>

---
layout: two-cols-header
---

# AI 降低制作成本，不能代替导演判断

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">生成能力主要改变了制作门槛：有审美和创作积累的人，更容易把原来难以制作的想法变成作品。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">王依然提到，实拍素材再交给 AI 参考，通常比纯提示词抽取更接近真实影像。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">叙事、分镜、镜头语言和审美仍在生成之前决定了作品的上限。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./film-making.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 画面进步后，故事反而更显眼

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">创意获得生产力</div>
过去有想法的人也许请不起演员、导演和团队。AI 让娱乐、鬼畜和脑洞类内容更容易被做成视频。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">观看仍然要被故事吸住</div>
王依然以丧尸电影为例：画面再好，如果剧情松散，观众仍会离开。游戏也一样，玩法不能由画面复杂度替代。
</div>

</div>

<div class="mt-6 text-sm opacity-70">技术让制作更容易；作品的差异更多落在创作者想讲什么、怎样讲。</div>

---

# 平台需要筛选，创作者也需要出口

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="font-bold text-lg mb-1">成本下降</div>
团队观察到，已有审美基础的创作者可以用较低成本完成过去难以负担的作品。
</div>

<div class="p-4 rounded bg-green-50 border-l-4 border-green-500">
<div class="font-bold text-lg mb-1">渠道增加</div>
短视频和内容平台为 AI 作品提供了新的发布入口，也减少了只靠传统宣发的限制。
</div>

<div class="p-4 rounded bg-red-50 border-l-4 border-red-500">
<div class="font-bold text-lg mb-1">质量仍是门槛</div>
平台若要推荐 AI 内容，重点不应只是用一句提示词生成，而应看剧本、镜头和分镜是否完成了创作。
</div>

</div>

---

# AI 焦虑常常关乎人的相对位置

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="font-bold text-lg mb-1">为什么感受更强</div>
节目把大学生和高度依赖数字化工作的群体视为更常发声的一部分；他们的焦虑容易形成回声室效应。
</div>

<div class="p-4 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="font-bold text-lg mb-1">担心的并不只是一份工作</div>
当非人类系统能完成许多任务，人会重新追问自己在工作里的作用、独特性和主体性。
</div>

</div>

<div class="mt-6 text-sm opacity-70">节目没有给出通用解方，而是把焦虑放回不同职业、家庭和使用场景中看待。</div>

---
layout: two-cols-header
---

# 硬件要把智能装进合适的外壳

::left::

<div class="space-y-3 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">王依然从软件转向关注硬件，认为手机、耳机、眼镜之外，还会出现服务小场景的设备。</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">他对泛情绪陪伴硬件保持谨慎，更关心录音卡、胸针或其他贴近现实使用的具体形态。</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">硬件前期投入和供应链更复杂，但一旦形成产品与制造协同，模仿门槛也会提高。</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw drawFilePath="./hardware-shell.excalidraw" class="w-[480px]" :darkMode="false" :background="false" />
</div>

---

# 核心金句

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">
<div class="text-xs opacity-60">创作链路</div>
“除了生成之外，往前走、往后走还有很多问题，还有很多场景待解决。”
</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">
<div class="text-xs opacity-60">创作界面</div>
“创作是一个发散、收敛、发散、收敛、循环的过程。”
</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">
<div class="text-xs opacity-60">产品匹配</div>
“我对于这个产品的理解不代表我的产品一定有PMF。”
</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">
<div class="text-xs opacity-60">应用竞争</div>
“短期来说对应用来说不一定是好事。”
</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">
<div class="text-xs opacity-60">创作者影响力</div>
“我们有时候其实不是为了这个产品买单。”
</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">
<div class="text-xs opacity-60">AI 电影</div>
“画面其实是最低的要求”
</div>

</div>

---
layout: end
---

# “我们现在电冗余了，但是，没有人知道应该如何做冰箱和做，彩电。”

<div class="mt-8 text-base opacity-70">王依然用这个比喻描述 AI 硬件：能力已经出现，产品形态仍待设计。</div>
