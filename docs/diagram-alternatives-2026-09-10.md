# 视觉笔记图示替代方案

建议以少量共享 HTML/CSS 模板承载卡片、对照、步骤和时间线，以构建时导出的 Mermaid 承载复杂关系图。AntV Infographic 值得试点，但这次中文 SSR 样例暴露了排版问题，暂不建议全站采用。保留现有共享 Slidev 播放器。

[打开同内容样例对照](./diagram-alternatives-demo-2026-09-10.html)。对照页是一个独立 HTML 文件，内嵌图示和源码，无脚本、无字体 CDN，可直接用浏览器打开。

## 候选比较

| 方案 | 适合的内容 | 优点 | 对本站的限制 | 本次验证 |
| --- | --- | --- | --- | --- |
| 原生 HTML/CSS，共享少量模板 | 观点卡片、两方对照、步骤、时间线 | 复用 Vue/Slidev 和现有样式；中文由浏览器排版；无需新增绘图库 | 不适合任意连线和自动图布局；仍需文字长度、节点数限制 | 已制作中文步骤卡片，检查桌面与窄屏 |
| Mermaid | 流程、因果关系、时序、层级 | 简短文本描述；本仓库已通过 Slidev 安装；可离线导出 SVG | 视觉语言偏工程图；横向图在窄屏会整体缩小 | 11.16.0，本地 Chromium 导出并检查 |
| AntV Infographic | 列表、对比、时间线、信息图 | 现成模板较丰富；声明式内容；提供 Node SSR | 默认导出引用外部字体；系统字体回退测量存在风险；模板仍需约束 | 0.2.20，实际 Node SSR，保留失败排版和调整后的对照 |
| D2 | 架构、分组关系、复杂流程 | 文本语法、自动布局；本地 CLI；支持中文和自定义字体 | 引入新工具链；布局引擎能力不同；对简单卡片优势有限 | 核实官方文档；CLI 下载过慢，未完成本地渲染，不评价实测效果 |
| Graphviz | 拓扑、依赖、密集有向图 | 成熟的自动布局；本地原生 SVG 导出 | 更接近工程图；需要统一构建与查看字体 | 16.0.0，dot 中文 SVG 已检查 |

PlantUML 更适合 UML 和工程文档，本站当前没有必要再增加一种图示语法。Kroki 是多种渲染器的服务接口，不是新的图示表达方案；接入它不会自动解决中文排版或模板选择问题。

## 实测发现

内容取自 E249 的 `agent-journey.excalidraw`：自己搭 Agent 框架 → OpenClaw → Hermes → Slog（现名 Riff），保留四个节点的原说明。

### AntV 可以静态导出，但不能直接套默认配置

通过 `@antv/infographic/ssr` 的 `renderToString` 成功生成 SVG，不需要启动浏览器。默认结果包含指向阿里普惠体 CDN 的 `xml-stylesheet`，所以“SSR 导出成功”不等于“资源已全部内嵌”。

把 `themeConfig.base.text['font-family']` 设置为 `PingFang SC, Microsoft YaHei, sans-serif` 后，导出不再引用字体 CDN；渲染器同时发出字体未注册、使用回退测量数据的警告。截图中出现标题与节点说明重叠，以及“个人助理”的末字换行。仅凭这一个样例不能断定所有中文模板都有问题，也不能把重叠原因全部归于字体。

第二次保留正文，把标题交给页面，并将 `simple-horizontal-arrow` 的节点宽度由 140 调为 220，这张图的重叠消失。说明它有可用的调整路径，但需要经过验证的模板、字数限制和截图检查。两版均保留在对照页中。

AntV 样例 SVG 用 `foreignObject` 承载 HTML 文本。Chromium 内嵌显示已检查；其他浏览器、SVG 图片引用方式和 PDF 转换尚未验证。不要将此样例当成所有导出目标的兼容证明。

### Mermaid 与 Graphviz 可以承担关系图

Mermaid 使用根级 `htmlLabels: false`，通过现有本地依赖和 Chromium 导出，最终样例没有 `foreignObject`。Graphviz 使用本地 `dot -Tsvg` 和 PingFang SC，同样输出 SVG 文本。两者这张图的中文均可读，未见节点重叠。

两者都依赖查看设备上的字体；如要求跨平台像素一致，需要另行统一字体。系统字体方案减少网络依赖，不保证所有设备排版相同。

### 文件体积不等于加载性能

以下为同一段内容的单图数据；不同渲染器的样式并不相同，不构成像素等价比较。源码字节只计算图示文本，未包含通用渲染配置。

| 产物 | 源码字节 | SVG 字节 | SVG gzip 字节 |
| --- | ---: | ---: | ---: |
| 当前 Excalidraw JSON → 前次实验导出的 SVG | 13,111 | 33,975 | 13,891 |
| AntV 默认节点宽度，系统字体 | 365 | 6,268 | 972 |
| AntV 调整后，系统字体 | 376 | 5,699 | 906 |
| Mermaid | 238 | 15,898 | 2,997 |
| Graphviz | 522 | 4,059 | 1,274 |

Excalidraw JSON 本身 gzip 只有 1,283 字节；它的问题包括浏览器端渲染依赖，不能只比较 JSON 与 SVG 大小。前次 Excalidraw SVG 包含内嵌字体，其他样例用系统字体，这也是体积差异的来源之一。

本次没有在播放器内测首屏和翻页延迟，不承诺性能提升比例。独立对照页在阻断 HTTP(S) 请求的条件下完成 Chromium 截图，观测到的外部请求为 0；390px 窄屏没有页面横向溢出，但横向 SVG 缩小后文字明显过小。

原生卡片在独立网页里可以改为纵向排列。现有 Slidev 会缩放整张幻灯片，这个窄屏优势不会自动出现在播放器里，仍需明确播放器的移动端展示方式。

## 对现有架构的建议

1. 新笔记先选少量内容类型：卡片、对照、步骤、时间线、关系图。前四类优先复用共享组件和样式，让模型提供内容；关系图使用 Mermaid 文本。避免为每一种视觉变体新增组件。
2. 图示渲染放到构建阶段。HTML/CSS 随该集内容编译，Mermaid 导出静态 SVG。直接使用浏览器端 Mermaid 或 AntV 只是在更换运行时依赖，不能实现同样的部署收益。
3. 延续每集一个内容模块。小图可以随内容内嵌；较大图按集或按需加载。SVG 内嵌前要处理不同图的 ID 冲突。不要为每张图新增 JS chunk，也不要预加载全站图示。
4. 文件数收益来自打包方式。JSON 改为独立 SVG 通常还是一图一个文件；把 HTML 或小 SVG 合入该集内容模块才可能减少部署文件数，同时需要测量内容模块变大的代价。仓库源文件数与部署文件数应分开统计。
5. 同时调整生成规则和校验器。当前 `slides-task.md` 要求至少四页 Excalidraw，`slides-system-rules.md` 要求至少 20% 内容页使用 Excalidraw；校验器要求 addon，并只用 `<Excalidraw>` 统计图示页。共享播放器也有 addon 配置约束。应改成检查内容类型、引用和渲染结果，而非强制某个绘图库。
6. 旧笔记保留兼容，按编辑或重新生成逐步迁移。不要把手工坐标 JSON 自动转换成语义图并假定信息不变；图示含义需要检查。前次发现的 33 份笔记中 142 个独立 `layout:` 页面是另一项内容问题，换绘图库不会修复它。

下一步最有价值的实验是在一集真实笔记中覆盖卡片、对照、时间线和关系图，检查实际幻灯片尺寸下的可读性，再测部署文件数、内容模块大小、首屏和首次图示翻页。AntV 只需挑一两种模板加入这次实验；目前无需同时维护 D2、Graphviz 等多条生产管线。

## 来源与复现记录

- [AntV Infographic 仓库](https://github.com/antvis/Infographic)、[语法](https://infographic.antv.vision/learn/infographic-syntax)、[导出 API](https://infographic.antv.vision/reference/infographic-exports)。本次实际安装版本为 0.2.20，MIT；依赖仅安装在被忽略的实验目录。
- [Mermaid 文档](https://mermaid.js.org/intro/)、[Mermaid CLI](https://github.com/mermaid-js/mermaid-cli)。本次复用仓库的 11.16.0，没有新增根依赖。
- [D2 文本与中文](https://d2lang.com/tour/text/)、[字体](https://d2lang.com/tour/fonts/)、[布局引擎](https://d2lang.com/tour/layouts/)。未验证 TALA 的授权条件，建议不以它作为初始方案的前提。
- [Graphviz 输出格式](https://graphviz.org/docs/outputs/)、[字体说明](https://graphviz.org/docs/attrs/fontname/)。
- 本地实验源码、SVG、指标和截图：`logs/diagram-alternatives/`。可保留的单文件对照页包含各图的图示源码；AntV 的系统字体配置见上文，Mermaid 配置见本地 `render.mjs`。

本次仅新增研究文档和对照页，没有修改生产生成流程、根依赖或已部署站点，也没有提交此前尚未提交的优化。
