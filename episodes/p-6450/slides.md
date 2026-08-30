---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '#496 – FFmpeg: The Incredible Technology Behind Video on the Internet'
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---

# #496 – FFmpeg: The Incredible Technology<br>Behind Video on the Internet

<div class="mt-6 text-lg opacity-70">
Jean-Baptiste Kempf & Kieran Kunhya
</div>

<div class="mt-2 text-sm opacity-50">
Lex Fridman Podcast · 4h24m · May 2026
</div>

<div class="mt-10 text-xs opacity-40">
← 声笺 Resonote
</div>

---
layout: default
---

# 为什么这期特别

<div class="grid grid-cols-2 gap-3 mt-4 text-sm leading-relaxed">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**FFmpeg：互联网视频的隐形骨架**

YouTube、Netflix、Chrome、Discord、OBS——几乎所有处理视频的地方，底层都跑着 FFmpeg。一个完全由志愿者维护的开源项目，支撑了互联网超过 90% 的视频处理流程。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**VLC：60 亿次下载的传奇播放器**

没有广告、没有追踪、什么格式都能播。从 DVD 到火星探测器的画面，从一个法国大学校园的网络项目，变成了全世界人电脑上那个戴着交通锥的橙色图标。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**手写汇编的艺术**

Dav1d 解码器包含 24 万行手写汇编代码，性能比 C 编译器自动生成的代码快 62 倍。在摩尔定律终结的时代，这群工程师选择直接跟 CPU 对话。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

**开源精神 vs 万亿公司**

Google 用 AI 生成安全报告轰炸志愿者；微软 Teams 在 bug tracker 上标"高优先级"然后只给几千美元。一个 10–15 人的核心团队，维护着整个世界依赖的基础设施。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**逆向工程的考古学**

没有文档、没有源码，只有几十 MB 的二进制 blob。乌克兰开发者 Kostya 一个人逆向工程了 GoToMeeting 的专有编解码器——对着反汇编器逐指令调试，像考古学家用刷子还原古代文明。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**视频正在吞噬世界**

从 MPEG-2 到 AV2，每一代编解码器提升 30% 压缩效率。视频占互联网流量的 80%+。理解 FFmpeg，就是理解现代互联网的物理基础。

</div>

</div>

---
layout: default
---

# FFmpeg 是什么？

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

**核心组件**

<div class="mt-2 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**libavcodec** — 编解码库，包含几乎所有已知的音视频编解码器

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**libavformat** — 容器/封装格式库（demux/mux），处理 MP4、MKV、MOV 等

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**libavfilter** — 滤镜库，裁剪、缩放、叠加、调色……

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**ffmpeg CLI** — 命令行工具，像一门编程语言

</div>

</div>

</div>

<div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">

**作者概括**: FFmpeg 本质上是一套低层次的多媒体处理工具箱。它不是一个"产品"，而是一个库——被嵌入到 VLC、Chrome、智能电视、OBS 以及几乎所有处理视频的软件里。

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-sm">

**关键数据**: FFmpeg 自诞生以来约有 2000–3000 人贡献过代码，任何时候活跃的核心开发者约 10–15 人。它运行在从火星车到粒子加速器的所有地方。

</div>

<div class="mt-3 text-sm opacity-70">

FFmpeg 的命令行工具本身就是一门语言——可以指定数百个参数，构建复杂的滤镜图（filter graph），实现堪比 After Effects 的后期处理。

</div>

</div>

</div>

---
layout: two-cols
---

# 视频播放的四大阶段

<div class="text-sm mt-4 space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**① 获取字节流** — 从 URL、文件、DVD 等来源读取原始数据。VLC 的设计哲学：**不信任任何输入**，因为网络流可能损坏、文件可能不完整。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**② 解封装（Demux）** — 将字节流拆分成音频轨、视频轨、字幕轨。VLC/FFmpeg **忽略文件扩展名**，直接探测内容——一个 .mp4 文件里可能装着完全不同的东西。

</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400">

**③ 解码（Decode）** — 将压缩数据还原为原始像素和音频采样。先判断能否用 GPU 硬解（约 45% 文件不能），不能则走软件解码路径：反熵编码 → 反量化 → 反变换 → 运动补偿。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**④ 渲染（Render）** — 将原始画面送到显卡和屏幕，音频送到声卡和扬声器。每帧只有 **16 毫秒**的截止时间——错过一帧就会导致画面花屏。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./video-pipeline.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 容器 vs 编解码器

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### 容器（Container）

<div class="text-sm mt-2 space-y-2">

- 也叫 **Muxer/Demuxer**，是"文件格式"的技术名称
- 将音频轨、视频轨、字幕轨打包在一起
- 常见容器：**MP4、MKV、MOV、AVI、WebM**
- MP4 脱胎于 Apple 的 MOV；MKV 由 VideoLAN 社区的 Steve Lhomme 创建
- VLC/FFmpeg **不看文件扩展名**，直接探测内容

</div>

</div>

<div>

### 编解码器（Codec）

<div class="text-sm mt-2 space-y-2">

- Coder + Decoder = Codec，负责实际的压缩和解压缩
- 一个容器可以装不同的编解码器（理论上）
- H.264 的正式名称是 **MPEG-4 Part 10**，也叫 AVC
- 行业自己把命名搞复杂了——所以普通人经常混淆 MP4 和 H.264
- 实际上 99% 的 MP4 文件 = H.264 视频 + AAC 音频

</div>

</div>

</div>

<div class="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
99% 的 MP4 文件就是 H.264 + AAC 音频。混淆容器和编解码器不是你的错——是行业把命名搞成了一团乱麻。
</div>

---
layout: default
---

# 视频压缩的核心思想

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 空间冗余

同一帧内，相邻像素往往相似。黑色背景上的每个像素都一样——不需要每个都存一遍。编解码器将图像分成**块（block）**，对每个块做变换和压缩。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 时间冗余

前一帧的云和后一帧的云是同一朵云。**P 帧和 B 帧**只存储相对于参考帧的变化量。这使得压缩比可以达到惊人的 **100x–200x**。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 感知冗余

人眼对亮度比对颜色更敏感。所以编解码器工作在 **YUV 色彩空间**而非 RGB——Y 是亮度，U 和 V 是色度。仅这一步就将数据量减半，而大多数人看不出区别。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**核心洞察**: 视频压缩不是 zip 那样的无损压缩——它是有损的。目标不是完美还原，而是在人眼察觉不到的前提下，丢弃最多的信息。每一代编解码器比上一代**节省约 30% 的码率**，但编码所需的计算量可能增加 **100 倍**。

</div>

---
layout: two-cols
---

# 视频压缩的三大支柱

<div class="text-sm mt-3 space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**空间冗余（Spatial）** — 同一帧内相邻像素往往相同。编解码器将画面分成块（block），对每块做 DCT 变换、量化。解码出错时的方块伪影就是块边界。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**时间冗余（Temporal）** — 前一帧的云和下一帧的云是同一朵云。P/B 帧只存变化量。更多内存 = 更多帧间比较 = 更好压缩 → 100x–200x。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**感知冗余（Perceptual）** — 人眼对亮度比对颜色敏感。YUV 色彩空间（非 RGB）将色度分辨率减半。仅此一步 = 数据量减 50%，而人眼察觉不到。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./compression-types.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# I 帧、P 帧、B 帧

<div class="text-sm mt-3 space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**I 帧（关键帧）** — 完整的独立画面，像一张 JPEG。不需要参考其他帧就能解码。通常每隔几秒才出现一次。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**P 帧（预测帧）** — 只参考**前面**的 I 帧或 P 帧。存储的是"跟前一帧相比哪里变了"。数据量远小于 I 帧。

</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400">

**B 帧（双向预测帧）** — 可以同时参考**过去和未来**的帧。这意味着解码顺序 ≠ 显示顺序——解码器必须先解码未来的参考帧才能解码当前的 B 帧。这是最反直觉的设计。

</div>

</div>

<div class="mt-4 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm">

**GOP（图像组）**: FFmpeg 对 H.264 的默认 GOP 约为 250 帧——一个完整的 I 帧后面跟着几百个预测帧。还有一种叫 **Intra Refresh** 的技术，连 I 帧都不发，图像的不同区域在流中逐步刷新。

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./ipb-frames.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# VLC 的诞生：一个法国大学校园的传奇

<div class="text-sm mt-4 leading-relaxed">

1990 年代，法国顶尖工程师学院 **École Centrale Paris** 的校园完全由学生自治管理——包括网络、广播、甚至供电。校园最初使用的 **Token Ring 网络**在玩《Doom》和《Duke Nukem》时延迟太高，学生们被迫寻求升级。

1995 年，学生们从一家法国公司获得建议：用卫星天线接收电视信号，解码后在局域网上分发。他们搭建了 **Network 2000** 项目——基本可以认为是世界上最早的视频流媒体服务之一，**比 YouTube 早了整整十年**。

项目完成后，两名学生 Christophe Massiot 等人决定继续推进，创建了 **VideoLAN** 项目。VLC 最初是 VideoLAN 的**客户端部分**（VideoLAN Client），2001 年在与校方艰苦谈判后开源。

Jean-Baptiste Kempf 2003 年进入这所学校时加入项目，后来创建了非营利组织 VideoLAN，将项目从学校独立出来。在项目几乎消亡的 2005 年，整个 VLC 只剩下**两个活跃开发者**。

</div>

<div class="mt-4 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
从只有两名开发者、几乎死掉的项目，到 60 亿次下载、地球上最广泛使用的软件之一。这是开源史上最伟大的逆袭故事之一。
</div>

---
layout: default
---

# "我拒绝了数千万美元"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

Jean-Baptiste Kempf（JB）多次拒绝了能让 VLC 变现的巨额报价——最后一笔数额"令人咋舌"。对方的话术是："用这些钱你可以再做一个新的开源项目。"

JB 的理由很简单：

</div>

<div class="mt-3 space-y-2 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**道德底线**：来找他的都是捆绑流氓工具栏、修改搜索引擎、植入广告的"灰色"公司——没有一家像 Netflix 那样提出正当的合作方案。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**没有背叛的资格**：VLC 不是他一个人创建的——它是几代学生的接力成果。他没有权利为了个人利益毁掉几千名贡献者的心血。

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**自洽的人生**：JB 说自己需要晚上能安心入睡。他不是反对赚钱——他创办了好几家公司——但赚钱的方式必须是正当的。

</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 text-sm italic">

"Maybe it's my upbringing, maybe it's my parents' fault — but I believe there is right and wrong. This was the right decision at the time, and it still is. I want to be proud of what I've been doing."

<div class="mt-2 text-xs opacity-70 not-italic">
— Jean-Baptiste Kempf
</div>

</div>

<div class="mt-3 text-xs opacity-60">

这个决定在 Reddit 上成了一个 meme——JB 戴着 VLC 交通锥帽被 P 成巫师，配文："JB, the creator of VLC media player, refused tens of millions of dollars in order to keep VLC ads free."

</div>

</div>

</div>

---
layout: default
---

# VLC 的极端兼容性：500+ 插件与 50+ 操作系统

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### VLC 的设计哲学

VLC 的核心非常小——约 100 万行代码——但通过 **500+ 插件**实现了难以置信的功能广度。这种模块化架构使得任何人都可以用 C、C++、Objective-C 甚至 Rust 编写插件。

**支持的格式**：除了 FFmpeg 提供的所有编解码器，VLC 还支持 DVD（libdvdcss）、蓝光（libbluray）、各种字幕格式、网络协议（HTTP、RTSP、UDP 等）。

</div>

<div>

### 比微软和苹果支持更多操作系统

<div class="space-y-2">

- **Windows**: XP 到 Windows 11
- **macOS**: 10.7 到最新版（26）
- **iOS**: iOS 9 到 iOS 26
- **Linux / BSD / Solaris**
- **OS/2** — 世界上大概只有 10 个 OS/2 用户，其中一个是 VLC 维护者
- 要在 iOS 9 上编译，需要混合多个版本的 Xcode 和 SDK

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">
JB: "这个不到十人的小团队，比 Google 或 Apple 支持的 OS 版本还要多——而他们拥有近乎无限的资源。我们的目标是让旧硬件继续工作——不该逼用户为了看视频而买新设备。"
</div>

---
layout: default
---

# 开源许可证：社区的宪法

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 许可证的两大家族

<div class="space-y-2 mt-2">

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**宽松型（Permissive）**: MIT、BSD、Apache —— "代码给你，随便用"。适合 JavaScript 生态、BSD 操作系统。

</div>

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**著佐权（Copyleft）**: GPL、LGPL、AGPL —— "用了我的代码，你的修改也要开源"。FFmpeg 和 VLC 主要使用 GPL/LGPL。

</div>

</div>

</div>

<div>

### JB 将 libVLC 从 GPL 改为 LGPL

<div class="space-y-2 mt-2 text-xs">

- **商业原因**：游戏引擎想嵌入 VLC 播放视频，但不想被迫开源整个游戏。LGPL 允许这样做。
- **iOS 原因**：Apple App Store 的服务条款与 GPL 有法律冲突。
- **过程极其艰难**：需要联系**超过 350 名贡献者**——有人已经去世，JB 不得不找到去世者的父亲（一名工厂工人）解释情况并获得签字。

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-2 border-yellow-400 text-xs">

许可证是社区唯一所有人都同意的东西——它是社会契约。贸然改许可证会摧毁社区的信任基础。

</div>

</div>

</div>

---
layout: default
---

# 交通锥：史上最好的"最差 Logo"

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<div class="text-sm leading-relaxed">

VLC 的交通锥标志是互联网文化中最具辨识度的图标之一。JB 分享了一个数据：VLC 官方网站 **25% 的流量来自搜索 "Cone Player"**——很多人不知道 VLC，只知道"那个锥子播放器"。

曾经在愚人节，VideoLAN 开玩笑说要换掉交通锥，改用一台推土机作为 Logo。结果收到了**超过 10,000 封邮件**抗议。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

"我去印度、中国的偏远乡村，人们不认识 VLC——但他们认识那个锥子。"

</div>

</div>

<div>

<div class="text-sm leading-relaxed">

这个 Logo 的哲学意义在于：所有视频播放器的图标都是"电视屏幕上的播放按钮"（YouTube 就是这样）。但 VLC 选择了一个**荒谬的、滑稽的、不合理的**图案——正是这种反叛让它成为一个文化符号。

交通锥成了 meme，meme 成了文化。二十年后，人们看到交通锥还会想起："哦对，那是个视频播放器。"

JB 说他保留了大量的周边交通锥，甚至有人把 RFID 芯片嵌入小锥子里，插到播放器上就能播放《星球大战》。

</div>

</div>

</div>

---
layout: default
---

# FFmpeg 的人物志

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### Fabrice Bellard
**创始人**，2000 年创建 FFmpeg 的概念。这位法国天才程序员还写了 QEMU、TinyCC，以及用纯软件计算圆周率到 27000 亿位的世界纪录。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### Michael Niedermayer
**2000 年代的核心**。实现了对 DivX、Xvid、Windows Media、RealPlayer 等无数格式的支持——在那个"每个播放器只能播一种格式"的年代，FFmpeg 一个库搞定一切。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### Kostya Shishkov
乌克兰天才逆向工程师。独自逆向工程了 GoToMeeting 的专有编解码器——**20–30MB 的二进制 blob**。他的一句话是："binary specification"——二进制本身就是规格书。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### Loren Merritt
x264 的核心开发者。创造了 assembly 的轻量级抽象层，让手写汇编可以跨操作系统编写一次。他来自华盛顿大学，让 x264 成为有史以来最优秀的视频编码器。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### Henrik Gramner
Intel 工程师向 Intel 请教 x86 汇编问题时，Intel 的回答是："你们有 Henrik，为什么来问我们？"他知道所有 SIMD 指令在所有 CPU 代际上的周期数。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### Martin Storsjö
ARM NEON 汇编的顶尖专家。他做了一件匪夷所思的事：**在手机上用虚拟键盘写汇编代码**，一边看着孩子在游乐场玩。

</div>

</div>

---
layout: default
---

# 逆向工程：用考古学家的方式解码视频

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 什么是逆向工程一个编解码器？

<div class="space-y-2 mt-2">

- 你有一个专有的二进制文件（如 GoToMeeting 的 .exe），没有文档、没有源码
- 你需要找到负责解码的那部分代码——在几十 MB 的二进制 blob 中找到正确的函数
- 用反汇编器打开，**逐条指令**在 CPU 层面调试
- 想办法 hook 进去，把解码后的原始 YUV 数据 dump 出来——这将是后续验证的"标准答案"
- 在虚拟机里暂停整个系统、dump 内存——因为有些编解码器有 DRM 加密

</div>

</div>

<div>

### Kostya 的方法论

<div class="space-y-2 mt-2">

- 他从 **几百 MB 的二进制文件**中识别出反熵编码、DCT 变换、帧内预测、运动补偿等模块——仅靠模式识别
- 他说："这个看起来像我在 WMV 里见过的 DCT 变换……"
- 在很长一段时间里，解码器没有任何输出——纯靠内存调试
- 如果猜错了 buffer 中系数的存储方式，可能会在错误的路径上走很久
- 他的代码充满了**内部笑话**——包括关于 JB 的玩笑

</div>

<div class="mt-3 p-2 rounded bg-green-50 border-l-2 border-green-400">

**为什么重要**：GoToMeeting 的记录文件是 Windows 32 位的 .exe 格式。10–15 年后，你想在 Android、iPad 或 RISC-V 上播放这些会议录像——怎么办？逆向工程是唯一的答案。

</div>

</div>

</div>

---
layout: default
---

# 什么是汇编？为什么它快 62 倍？

<div class="text-sm mt-4 leading-relaxed">

当你写 C 代码时，编译器会将它翻译成机器指令。当你**手写汇编**时，你直接写 CPU 执行的指令。

FFmpeg 社区使用的是一种特殊的汇编：**SIMD**（Single Instruction Multiple Data，单指令多数据）。

</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<div class="p-3 rounded bg-blue-50 border-l-2 border-blue-400 text-sm">

**标量运算**（普通 C）：一条指令处理一个数据
- `ADD 5, 10` → 只得到一个结果

</div>

<div class="p-3 rounded bg-green-50 border-l-2 border-green-400 text-sm mt-2">

**SIMD 运算**（汇编）：一条指令处理 16 个数据
- 同时对 16 个像素加 5 → 快 16 倍起步
- 视频是像素网格，天然适合 SIMD

</div>

</div>

<div>

<div class="p-3 rounded bg-red-50 border-l-2 border-red-400 text-sm">

**实测数据**：FFmpeg 中的手写 SIMD 汇编函数比等效的 C 代码快 **10x 到 50x**，有一个具体函数达到了 **62x**。

编译器自动向量化不是"差 5% 或 10%"，而是**差一个数量级**。

</div>

</div>

</div>

---
layout: two-cols
---

# 汇编 vs 编译器

<div class="text-sm mt-3 space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**不是优化，是虐待硬件** — FFmpeg 社区使用**密码学指令**来做视频处理，使用**与预期完全无关**的 CPU 指令来完成工作。这是"你和处理器之间没有任何东西"的纯粹状态。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**绕过调用约定** — Dav1d 在库内部创建了自己的函数调用约定，跳过操作系统标准的寄存器保存/恢复流程，节省了 L1/L2 缓存的加载和存储操作。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**运行时 CPU 检测** — 同一份二进制文件在运行时检测 CPU 能力（AVX-512、NEON、SVE、RISC-V...），动态选择最优汇编代码路径。

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**Karpathy 因此学了汇编** — 在看了 FFmpeg 的推文后，Karpathy 开始学习汇编。这是对一个话题最好的致敬。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./assembly-speed.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# Dav1d：24 万行手写汇编的奇迹

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 背景

AV1 编解码器发布时，业界（包括 Google、Netflix、Amazon）普遍认为它**太复杂了，必须用硬件解码**。JB 带领一个小团队（Ronald、Henrik、Martin 等）决定做一个极致的软件解码器来证明他们错了。

结果：**3 万行 C 代码 + 24 万行手写汇编**。所有主流指令集（x86、ARM、RISC-V）都有各自的手写汇编版本。

</div>

<div>

### 影响

<div class="space-y-2">

- 运行在约 **30 亿台设备**上
- 用 1–2 个 CPU 核心就能流畅解码 720p AV1 视频
- Netflix **30% 的视频**已经是 AV1 格式
- YouTube **50% 的视频**使用 AV1
- 项目口号：**"Every cycle matters"**（每个时钟周期都重要）

</div>

<div class="mt-3 p-2 rounded bg-yellow-50 border-l-2 border-yellow-400 text-xs">

**代码组成**：79.9% 汇编 · 19.6% C · 0.5% 其他。这是"视频编解码器应该有的样子"。

</div>

</div>

</div>

---
layout: default
---

# FATE：FFmpeg 的自动化测试矩阵

<div class="text-sm mt-4 leading-relaxed">

**FATE** = FFmpeg Automated Testing Environment。FFmpeg 需要运行在无数种配置组合上：不同的操作系统、编译器、指令集……

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">
<strong>macOS</strong><br>
iOS 9→26, tvOS, Apple Clang 多版本<br>
由 JB 办公室的 Mac 主机运行
</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">
<strong>Windows</strong><br>
XP→11, Visual Studio, Intel 编译器<br>
32 位和 64 位
</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">
<strong>Linux</strong><br>
GCC 多版本, Clang, 各种发行版<br>
glibc 和 musl
</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">
<strong>ARM</strong><br>
ARM32, ARM64, Apple Silicon<br>
各种 NEON 变体
</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400">
<strong>RISC-V / PowerPC</strong><br>
新兴架构 + DEC Alpha<br>
历史兼容性
</div>

<div class="p-2 rounded bg-yellow-50 border-l-2 border-yellow-400">
<strong>特殊问题</strong><br>
编译器 bug 会生成错误的机器码<br>
微小差异会逐帧放大
</div>

</div>

<div class="mt-3 p-3 rounded bg-gray-50 border text-sm">

**所有 FATE 测试机器都由志愿者提供。** 这不是一个公司运营的 CI 系统——它是开源社区自行维护的分布式测试网络。因为视频帧之间有依赖性，编译器的一个小 bug 可能导致整个视频出现严重花屏。

</div>

---
layout: two-cols
---

# FFmpeg + VLC：双星系统

<div class="text-sm mt-3 space-y-3">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**FFmpeg → VLC**：VLC 内部使用 FFmpeg 的 libavcodec 和 libavformat 来解码视频。编译 VLC for Windows 时，总代码量约 **1600 万行**，其中 VLC 自己的仓库只有约 100 万行——其余全是 FFmpeg 等依赖。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**VLC → FFmpeg**：VLC 给了 FFmpeg 海量的用户覆盖、各种稀奇古怪文件的测试样本、历史上的捐赠资金支持，以及来自用户的实际需求（如"GoToMeeting 播不了"）。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**x264（VideoLAN 项目）→ FFmpeg**：约 80% 的 FFmpeg 编码流程依赖 x264。很多人和企业选择 FFmpeg 就是因为它能调用 x264。x264 的巨大成功极大推动了 FFmpeg 的普及。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./binary-star.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# x264：改变互联网视频质量的编码器

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 心理视觉革命

学术界和工业界曾痴迷于 **PSNR**（峰值信噪比）这种纯数学指标。但问题在于：追求 PSNR 会导致编码器把画面**模糊掉**——给所有像素加一点点误差比在某些地方出现大误差在数学上"更好"。

x264 的开发者们（尤其是 Loren Merritt）做了一件当时被视为异端的事：**用肉眼来判断画质**。他们在自己的笔记本电脑上对比画面，不看数学指标。

</div>

<div>

### 两项关键创新

<div class="space-y-2">

- **心理视觉率失真优化（Psy-RDO）**: 在编码决策中模拟人类视觉感知，保留人眼敏感的高频细节。
- **自适应量化（AQ）**: 将码率从复杂区域（如草地）重新分配到人眼更关注的区域（如人脸）。

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**开发者动机**: x264 的很多优化驱动力来自**动漫**——动漫有大量渐变色彩和锐利线条，传统编码器会产生严重的色带（banding）。开发者们想让自己收藏的动漫看起来更好。

</div>

</div>

</div>

---
layout: default
---

# Park Joy：区分高手和普通人的测试序列

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

**Park Joy** 是由瑞典电视台在 HD 时代初期使用胶片拍摄的免费测试序列——不吝成本的高品质制作。

画面内容：一群人沿着河边跑步，有树木、水面反光、草地、运动、光影变化的叶子……几乎包含了所有编码难度的极端情况。

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">

至今还没有任何公开测试序列能超越 Park Joy 的全面性。它是视频编码界的"标准试金石"。

</div>

</div>

<div>

### 为什么这个序列如此重要

- 高 PSNR 的编码器会把所有细节糊成一片
- 开启心理视觉优化和自适应量化后，画面**天差地别**
- x264 的开发者们说："我不想在 3 万美元的专业监视器上测试——我想让它在**别人家里的笔记本屏幕**上也看起来很好。"
- x264 至今仍是所有新编码器（AV1、AV2、VVC）的参照基准

</div>

</div>

---
layout: default
---

# 标准 vs 实现：H.264 不是 x264

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 标准（Standard）≠ 实现（Implementation）

- **H.264** 是一个**标准**——一份描述比特流应该长什么样的文档
- **x264** 是一个**编码器**——一个将这些规则付诸实践的软件
- **FFH264** 是 FFmpeg 中的 H.264 **解码器**
- 同样：AV1 是标准，Dav1d 是解码器实现

</div>

<div>

### x264 为什么统治了世界

x264 是 VideoLAN 项目（和 VLC 同属一个组织），由 Laurent Aimar 在 École Centrale Paris 发起。它的成功来自几个因素：

- **时机**：在 HD 视频和 Core 2/Nehalem CPU 时代推向成熟
- **心理视觉指标**：比任何竞争对手更早放弃了纯数学指标
- **开源社区反馈循环**：用户（尤其是动漫字幕组）直接推动优化方向
- 至今仍是 H.264 编码的黄金标准

</div>

</div>

---
layout: two-cols
---

# 编解码器的进化

<div class="text-sm mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**MPEG-2 (1990s)** — 标清时代，DVD 和卫星电视的基础。解码可以是不精确比特级的，这是行业后来承认的重大错误。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**H.264/AVC (2003)** — 高清时代的开端。压缩比远超 MPEG-2，至今仍是互联网视频的主力。x264 编码器统治了软件编码世界。

</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400">

**H.265/HEVC (2013)** — 4K 时代的答案。但专利池分裂为多个竞争实体，许可费暴涨，导致 Google/Netflix/Amazon 决定：**自己做一个免费的。**

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**AV1 (2018)** — 免版税的革命。40–60% 的带宽节省 vs H.264。YouTube 50% + Netflix 30% 已迁移。编码复杂度的代价是巨大的（约为 H.264 的 100 倍），但编码一次、播放亿万次。

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**AV2 / VVC (2024+)** — 下一代。再省 30%。VVC 走传统专利路线；AV2 延续免版税路线。JB 已在 CES 上演示了 VLC 播放 AV2。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./codec-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 专利雷区：为什么 AV1 必须存在

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 多媒体是专利的"雷区"

多媒体和 5G/电信是全世界专利密度最高的两个领域。因为编解码器的核心是**数学和矩阵运算**——而你可以为几乎任何数学技巧申请专利。

H.264 时代的专利许可还算"合理"。但到了 HEVC 时代，出现了**三个互相竞争的专利池**（MPEG-LA、HEVC Advance，还有 Nokia 等独立权利方），许可费暴涨且没有上限。

</div>

<div>

### 后果

<div class="space-y-2">

- YouTube/Netflix 每年可能面临**数亿美元的专利费**
- HP 决定从 Windows 笔记本中移除 HEVC 支持
- JB 计算过：如果 VLC 要支付所有编解码器专利费，**每个用户需要付 200+ 欧元**
- VLC 能存活的一个关键原因是：**法国不承认软件专利**（数学方法不能被专利保护）

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500">

**作者概括**: 这就是 Alliance for Open Media（Google、Netflix、Amazon、Apple、VideoLAN 等）诞生的原因——与其每年交几亿美元专利费，不如花这些钱自己做一个免版税的编解码器。

</div>

</div>

</div>

---
layout: default
---

# 档案保存：FFmpeg 作为数字罗塞塔石碑

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 一千年后还能播放

英国的 **BBC Domesday Project** 将大量数据存储在 BBC Micro 计算机上。仅仅 15–20 年后，就没人有合适的软件来读取它了——需要专门找人逆向工程。

档案保存社区（以 Dave Rice 和 City University of New York 为核心）的洞察：**FFmpeg 是用 C 写的，而 C 是最接近数学和逻辑的语言。** 一千年后，C 编译器可能仍然存在——就像拉丁语一样。

</div>

<div>

### FFV1：专为档案保存设计

档案社区资助开发了 FFV1 无损编解码器：

- **数学上可证明的无损**：每一帧都可以和原始素材逐比特比对
- **错误恢复**：即使磁带或硬盘出现 bit rot 翻转了一个比特，也只影响部分帧而非整个视频
- **快速软件编解码**：不依赖特定硬件
- **GPU 加速编码**：由档案社区出资开发
- 英国电影协会（BFI）等机构已将 FFmpeg + FFV1 作为标准归档方案

</div>

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-sm col-span-2">

这些档案工作者面临巨大的道德压力：**70 年代和 80 年代的磁带正在物理退化，而全世界的磁带读取头数量根本不够**。他们必须选择保存什么、丢弃什么——这是对人类历史的数字化管理。

</div>

---
layout: default
---

# Google AI 安全漏洞风波

<div class="text-sm mt-4 leading-relaxed">

2024 年，Google 开始用 **AI 自动生成安全报告**，提交给 FFmpeg 这个完全由志愿者维护的开源项目。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

**问题一：AI 生成的漏洞报告轰炸**

AI 在一款 1990 年代的游戏编解码器上发现了"高危"漏洞。报告极其冗长，几乎是对志愿者的拒绝服务攻击。漏洞的严重性被一律标为最高级——"CRITICAL"、"你会被黑"。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

**问题二：先公开再修复**

Google 在漏洞修复之前就向媒体宣传他们的 AI 有多厉害。标准的 90 天漏洞披露期限被机械应用——完全不理解志愿者驱动的开发模式。

</div>

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**问题三：只发现问题，不修复**

安全研究人员发现漏洞后会拿到百万美元赏金，去 DEFCON 拿奖——但没有人帮志愿者修复。用 Alex Strange 的话说，修复者得不到任何荣誉和回报。

</div>

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-sm">

**积极结果**：FFmpeg 的推文引发了广泛关注。Google 随后做出了改变——开始发送补丁，并为修复漏洞设立奖励。捐款显著增加。这场"国际说唱对决"产生了实质性正面影响。

</div>

---
layout: default
---

# 微软 Teams：把开源当客服

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 发生了什么

微软 Teams 的一名产品经理在 FFmpeg 的公开 bug tracker 上提交了一个问题，**标为"高优先级"**，并强调这个问题影响了"很多人在微软使用的产品"。

FFmpeg 社区回复：我们可以签支持合同。微软回应：**一次性支付几千美元**。

</div>

<div>

### 深层问题

<div class="space-y-2">

- 大公司把开源项目的 bug tracker 当成**付费供应商的 Jira 系统**
- 他们假设 FFmpeg 是像 Adobe 一样有 SLA 的商业供应商
- 公司内部的 **OSPO**（开源项目办公室）没有做好内部教育
- 没有人停下来问："我们是不是应该每年给 FFmpeg 几百万美元？"

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

JB 的态度："我们不是你的供应商。如果你想让我成为供应商——没问题，我会给你一份合同。我创办了五家做这件事的公司。"

</div>

</div>

</div>

---
layout: default
---

# 开源维护者的心理健康

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 维护者倦怠是真实存在的

- **Daniel Stenberg**（curl 维护者）一直在对抗"AI slop"——AI 生成的假 bug 报告和垃圾补丁
- **XZ 后门事件**：攻击者通过在深夜反复骚扰唯一的维护者，最终让他因精力耗尽而交出 commit 权限
- JB 收到过**死亡威胁**和白色粉末信件（2009–2010 年，因停止支持 PowerPC 版 VLC）
- 大量开源基础设施依赖一两个人的无偿维护——libxml 已无人维护，"整个互联网都在用它"

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 text-sm italic">

"There is one guy maintaining all the time zones for everyone, who is in the middle of Nebraska or South Dakota. The mental health of open source maintainers is something that large corporations don't care about or don't see."

<div class="mt-2 text-xs opacity-70 not-italic">
— Jean-Baptiste Kempf
</div>

</div>

<div class="mt-3 text-xs leading-relaxed">

JB 说收到死亡威胁后曾问自己："为什么？我做了什么？"那件事对他的母亲造成了极大的恐慌。但也恰恰是这些经历锻造了他——"我现在可以承受很多仇恨，我没问题。"

</div>

</div>

</div>

---
layout: default
---

# VLC 拼图滤镜：每个功能都有人用

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 一个高中老师教的贝塞尔曲线

VLC 有一个叫 **puzzle filter（拼图滤镜）** 的功能——把画面变成拼图游戏，你可以点击并移动拼图碎片。它是由法国南部一位高中数学老师写的，用来教学生**贝塞尔曲线**。

代码质量很好，2010 年被合并进了 VLC。五年后，JB 收到一封邮件："你好 JB，VLC 的拼图太简单了——只有 256 块。"

于是就有了一个 commit：JB 把最大尺寸改成了 **256×256**。

</div>

<div>

### 当你有几亿用户

<div class="space-y-2">

- **ASCII 输出模式**：在没有 GUI 的服务器上调试组播网络时非常有用——SSH 连到路由器上跑 VLC，看画面是不是绿的来判断数据流
- **命令行模式**：完全不用图形界面操作

</div>

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**作者概括**：每一个功能，不管多小众，都有人用。当你有几亿用户时，有人会用到每一个功能。

</div>

</div>

</div>

---
layout: default
---

# 哪里都有的 FFmpeg 和 VLC

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 🚀 火星

NASA 的火星 2020 漫游车使用 FFmpeg 压缩照片。他们专门写了一篇论文解释为什么选择"尽可能多的商用现成技术"——FFmpeg 已是**多行星开源软件**。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### ⚛️ CERN 大型强子对撞机

CERN 使用 VLC 监控 27 公里环形隧道上的模拟摄像头。2010 年 JB 和 Laurent 去参观时，花了一个小时就修好了他们的配置问题——然后他们被带着参观了反物质和粒子对撞机的一切。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

### 🏎️ F1 围场

几乎所有 F1 车队的维修区都在使用 VLC 播放实时画面。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🚀 SpaceX

SpaceX 和欧洲航天局使用 VLC 监控火箭发射。

</div>

<div class="p-3 rounded bg-red-50 border-l-4 border-red-500">

### 🎖️ 美军

在阿富汗战争期间，一名美军人员给 JB 发邮件说 VLC 的更新破坏了他们的电影服务器——"VLC 对前线部队的士气非常重要"。JB 专门给他们做了一个修复版本。

</div>

<div class="p-3 rounded bg-yellow-50 border-l-4 border-yellow-500">

### 🔒 CIA

WikiLeaks 的 Vault 7 泄露文件显示，CIA 曾制作了一个被篡改的 VLC 版本——加了一个 DLL 来窃取用户文档。VideoLAN 被迫发表声明："唯一安全的 VLC 来源是官方网站。"

</div>

</div>

---
layout: default
---

# 政府后门请求与安全哲学

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### "不行"——两次

JB 透露，**两个情报机构**曾要求他在 VLC 中加入后门。他的回复比"不行"更不礼貌。

VideoLAN 的编译流程到了近乎偏执的程度：
- 在**从未连接互联网**的机器上编译
- 从**编译编译器本身**开始
- 使用双签名机制
- 曾经有（相信是非西方国家的）政府机构试图将伪造的二进制文件推送到 VideoLAN 的服务器上——这让他们更加警惕

</div>

<div>

<div class="p-4 rounded bg-red-50 border-2 border-red-300 text-sm italic">

"If we had to compromise our software, we would shut it down. This is clear."

<div class="mt-2 text-xs opacity-70 not-italic">
— Jean-Baptiste Kempf
</div>

</div>

<div class="mt-3 text-xs leading-relaxed">

JB 的"禅"来自于一个思维习惯：**总是想最坏的情况**。"我会死吗？不会。我会伤害别人吗？不会。那就算了。律师不高兴了？他们能拿走什么？VideoLAN 的 5 万美元吗？源码已经在外面的世界了，不可阻挡。"

</div>

</div>

</div>

---
layout: default
---

# Kyber：让距离消失

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### JB 的新创业项目

Kyber 的目标是**超低延迟的远程机器控制**——不只是视频流，而是让距离在感知上消失。

**技术栈**：
- 单一 QUIC 连接（基于 UDP），在一个 socket 上同时传输视频、音频和控制指令
- 免去 TCP 队头阻塞和 HTTP 队头阻塞
- 内置时钟漂移补偿——当机器人有 5–10 个摄像头时，所有传感器的同步至关重要
- 前向纠错（FEC）：超量传输少量数据，允许丢包而不重传（重传 = 延迟）

</div>

<div>

### 4 毫秒玻璃到玻璃

<div class="space-y-2">

- **目标**：4ms 端到端延迟（240Hz）
- **当前实现**：Windows→Windows/Mac 到达 7ms
- **瓶颈**：NVIDIA 硬件编码器约 3.5ms + Intel 解码器约 2ms = 总共已 5.5ms
- 要实现 4ms，需要更快的编码器或不同的方案

</div>

<div class="mt-3 p-3 rounded bg-green-50 border-l-4 border-green-500 text-xs">

**开源 + 商业双许可**：AGPL（开源产品可免费使用）和商业许可（闭源产品付费）。小的爱好者和创业公司可以免费使用；大公司付费获得支持和 IP 保障。

</div>

</div>

</div>

---
layout: default
---

# 自适应流媒体：没那么复杂，也没那么简单

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 基本工作原理

自适应流媒体（如 YouTube、Netflix 使用的 ABR）的核心逻辑并**不复杂**：下载一段（segment），计时，如果耗时超过 50% 就降到更低分辨率。

真正的挑战在于：
- **心理层面**：什么时候升回高码率？频繁切换比一直低码率更令人烦躁
- **音频更敏感**：从全频 AAC 降到使用频谱带复制的压缩版时，耳朵能立刻察觉——声音变"薄"了
- **体育直播**：需要实时编码、推到 CDN、可能有 DRM、要适配各种设备，没有 QA 时间

</div>

<div>

### 广播 vs 流媒体

<div class="space-y-2">

- **卫星广播**：链路大小固定，连一秒钟的带宽突发都不能有——编码器必须输出精确恒定的码率
- **实时编码**：编码一次、推送到 CDN、不同分辨率 × 不同设备——每个环节的延迟累加
- Kieran 的评价："如果你能接受 10–20 秒延迟，流媒体其实没那么难。真正困难的是我们正在做的事——把延迟压到 4 毫秒。"

</div>

<div class="mt-3 p-3 rounded bg-blue-50 border-l-4 border-blue-500 text-xs">
在音频和视频之间，人们对音频的瑕疵更敏感——一个音频杂音会被立即察觉。但人们看 30fps 的体育直播也能忍受，这让 Kieran 感到惊讶。
</div>

</div>

</div>

---
layout: default
---

# 汇编学习：像学语言一样学底层

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### Kieran 的 ASM Lessons

Kieran 创建了一套汇编课程，因为市面上的汇编教材都太"语法导向"了——像一本词典一样逐个解释每条指令。

他的方法论：**像学语言一样学汇编**。你学语言不是从语法规则开始的——你是从"你叫什么名字？"开始的。

课程的特点：
- 面向**实际问题**，不是学术练习
- 前提知识只需要**高中数学和 C 语言的指针**
- 16 岁的高中生 Daniel Kang 曾贡献过 FFmpeg 中的汇编代码——"这里没有门槛"

</div>

<div>

<div class="space-y-2">

- 使用 **x86inc.asm**（Loren Merritt 为 x264 开发的框架），屏蔽了不同操作系统的调用约定差异
- 重点放在 **SIMD 向量化**上，不浪费时间在中断处理和不相关的指令上
- 已有学习者通过学习这套课程提交了他们的第一个汇编补丁

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-xs">

**JB 的洞见**：即使你之后再也不写汇编，理解汇编也会让你成为一个更好的程序员——因为你将真正理解计算机的架构，理解 L1/L2/L3 缓存、内存层次和 CPU 流水线。

</div>

</div>

</div>

---
layout: default
---

# Rust：乌托邦还是实用工具？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### Kieran 的观点

<div class="p-3 rounded bg-blue-50 border-l-2 border-blue-400">

Rust 很像**世界语（Esperanto）**——一个过于理想化的方案。社区过于关注自我重要性，而不是解决实际问题。

"原型很容易——真正造一辆电动车，需要做得和现有方案一样好甚至更好。Rust 还没到那个阶段——它只有一个编译器实现，不能随机破坏 ABI。"

</div>

</div>

<div>

### JB 的观点

<div class="p-3 rounded bg-green-50 border-l-2 border-green-400">

Rust 是一个"更好的 C++"，在内存安全和所有权方面做得非常好。从零开始的新项目用 Rust 很棒——JB 的新创业公司 Kyber 就是用 Rust 写的。

但**重写是原罪**：阅读代码比写代码难一个数量级。你到了一个复杂的代码库，不理解前面所有的智慧和商业逻辑，就觉得"我要重写"。然后你很快做到 80%，90% 开始变慢，最后 1% 花了 99% 的时间。

</div>

</div>

</div>

<div class="mt-3 p-3 rounded bg-yellow-50 border-l-4 border-yellow-500 text-sm">
此外，像 Dav1d 和 x264 这样的项目包含海量手写汇编——即使把 C 部分全部用 Rust 重写来获得内存安全，汇编代码仍然可以跳转到任意内存地址，完全摧毁安全模型。JB 认为真正的方向是"安全汇编"——在编译时检查汇编代码的边界。
</div>

---
layout: default
---

# FFmpeg 的分裂与和解：Libav 往事

<div class="text-sm mt-4 leading-relaxed">

2011 年，FFmpeg 社区发生了一次重大分裂——一部分开发者创建了 **Libav** 分支。这不是因为技术分歧，而是关于**项目治理、领导风格和开发流程**的争论。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

**分裂是开源的常态** —— GCC 曾分裂为 EGCS 然后合并回 GCC 3；KHTML 分裂为 WebKit 又分裂为 Blink。许可证允许的分裂是一种健康的安全阀——它打破了社区的僵化状态。

</div>

<div class="p-3 rounded bg-orange-50 border-l-4 border-orange-500">

**从用户角度看很困惑** —— Ubuntu 曾经从 FFmpeg 切换到 Libav，然后又切回来。普通用户只是在终端里看到命令变了，完全不知道为什么。

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

**最终是双赢** —— Libav 的大部分开发成果最终被合并回了 FFmpeg。社区对代码审查和推送流程的争论在那之后彻底解决了。所有活跃的 Libav 开发者都回到了 FFmpeg。今天的 FFmpeg 比分裂前更强大。

</div>

</div>

---
layout: default
---

# 动漫、字幕和开源文化的交集

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 为什么动漫对开源多媒体如此重要

在 Crunchyroll 等正版平台出现之前，动漫的传播几乎完全依赖**粉丝字幕组（fansub）**。这些爱好者需要：
- 从日本 DVD 上抓取视频
- 用开源工具编码
- 自己翻译和制作字幕
- 处理日语汉字 + 假名注音（ruby）+ 英语的复杂字幕排版

x264 的很多优化（尤其是色带消除和渐变处理）直接来自动漫编码的需求——动漫的色彩渐变在传统编码器中效果极差。

</div>

<div>

### Aegisub 与字幕文化

Aegisub 是一个专门为动漫字幕制作设计的开源项目——它是粉丝字幕组的标准工具。

<div class="mt-3 p-3 rounded bg-purple-50 border-l-4 border-purple-500 text-xs">

**作者概括**: 这再次验证了一条规律：很多伟大的开源项目不是从"我要改变世界"开始的，而是从"我想让我的动漫看起来更好"开始的。热爱是开源的第一驱动力。

</div>

</div>

</div>

---
layout: default
---

# 为什么人们贡献开源？

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### 三个驱动力

<div class="space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**① 热爱主题** —— 多数人是因为喜欢看视频/动漫而开始的。JB："我建议所有想参与开源的人：做你热爱的东西。我做 VLC 是因为我爱电影。"

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**② 最好的学校** —— FFmpeg 的代码审查是地球上最严格的编程教育。如果你能写好 FFmpeg 的 C 代码和汇编，你写任何东西都会是一流的程序员。Andrew Kelly 在 FFmpeg 的经历之后创造了 Zig 语言。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**③ 看得见的成就感** —— "你在咨询公司做一个下载电费账单的门户网站——你不会想跟奶奶讲这个。但如果你说'我写的代码让你能在笔记本上看电影'——奶奶能理解。"

</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 text-sm italic">

"The world is a museum of passion projects."

<div class="mt-2 text-xs opacity-70 not-italic">
— John Collison (Stripe co-founder)
</div>

</div>

<div class="mt-3 text-sm leading-relaxed">

Tim Sweeney 在一次回复中写道："Many things in the world only happen because an awesome person decides to do it. This is the case with VLC."

在软件世界里，一个人的激情项目可以产生比所有部分之和更大的放大效应——网络效应、全球化协作、以及真正的零边际成本分发，这让开源软件成为人类合作最惊人的例证之一。

</div>

</div>

</div>

---
layout: default
---

# 多媒体 = 人类感官的数字表示

<div class="text-sm mt-4 leading-relaxed">

JB 和 Kieran 对多媒体的定义远超当前的音频和视频。VLC 已经有一个**触觉（haptic）插件**——用于 4D 影院和主题公园的液压运动座椅。这是未来方向的一个预演。

</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-sm">

<div class="p-3 rounded bg-blue-50 border-l-4 border-blue-500">

### 🧠 脑机接口

Neuralink 等 BCI 技术将需要"大脑编解码器"——把神经信号压缩、传输、解压。JB 预言："会有 VLC for Neuralink，会有 FFmpeg -i input format human_brain。"

</div>

<div class="p-3 rounded bg-green-50 border-l-4 border-green-500">

### 👃 嗅觉流

Demuxer 会有新的轨道类型——odor track。左右鼻孔各一个通道——立体嗅觉。编码器需要优化"人类嗅觉感知模型"。

</div>

<div class="p-3 rounded bg-purple-50 border-l-4 border-purple-500">

### 🤖 机器人感知

RGB-D（深度）编解码器、点云视频（point cloud）、体积视频（volumetric video）——这些已经在积极研发中。Kyber 已经在做超低延迟的机器人远程操控流。

</div>

</div>

<div class="mt-3 p-3 rounded bg-orange-50 border-l-4 border-orange-500 text-sm">

**核心哲学**：多媒体不局限于音频和视频——它是一切**有时间维度、代表人类感官体验的东西**。如果未来出现了新的感官传输方式，它就会进入 FFmpeg 和 VLC 的架构。

</div>

---
layout: default
---

# 给新一代工程师的话

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 为什么要学底层

<div class="space-y-3 text-sm">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**摩尔定律已经终结**。CPU 不再自动变快——你只能加更多核心。要获得性能，你必须**往下走到更底层去优化**。汇编的价值正在回归。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**AI 能 vibe code 写 CRUD 应用**，但不能优化硬件——因为它没有足够多的汇编训练数据。Kieran 说 LLM 目前处理汇编的表现是："你让它修，它改一下，然后你问'比特精确吗？'——它又做同样的事。"

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**这里的门槛比你想象的低**。16 岁的高中生可以贡献汇编代码。你不需要在名校读博士——你需要的是**高中数学 + C 指针 + 去读 K&R**。

</div>

</div>

</div>

<div>

<div class="p-4 rounded bg-yellow-50 border-2 border-yellow-300 text-sm italic">

"We don't care who you are, where you're from. We care about the quality of your code. Maybe you're a dog — I don't care. I need to look at your code."

<div class="mt-2 text-xs opacity-70 not-italic">
— Jean-Baptiste Kempf
</div>

</div>

<div class="mt-3 p-4 rounded bg-purple-50 border-2 border-purple-300 text-sm italic">

"Our goal is to make something that is insanely complex technically and make it easy to use."

<div class="mt-2 text-xs opacity-70 not-italic">
— Jean-Baptiste Kempf，论 FFmpeg 和 VLC 的使命
</div>

</div>

<div class="mt-3 p-4 rounded bg-red-50 border-2 border-red-300 text-sm italic">

"FFmpeg — nothing is beyond our reach."

<div class="mt-2 text-xs opacity-70 not-italic">

</div>

</div>

</div>

</div>

---
layout: two-cols
---

# VLC 的时间线：从校园恶作剧到 60 亿下载

<div class="text-sm mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**1995** — Network 2000：学生们用卫星天线将电视信号流转发到校园局域网。比 YouTube 早十年。演示只持续 40 秒——因为 45 秒后就会崩溃。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**1996–2001** — VideoLAN 项目创立，历时三年才说服校方开源。此时互联网泡沫正在膨胀——有很多公司靠视频技术赚了巨额财富。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**2003–2005** — JB 入学并加入；2005 年项目几近消亡，只剩两名活跃开发者。JB 决定赌上自己的人生把它救活。

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**2009–至今** — VLC 1.0 发布后爆发式增长。现在：60 亿+ 下载量，数十亿用户，所有主要操作系统。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./vlc-timeline.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 开源许可证：从宽松到著佐权

<div class="text-sm mt-3 space-y-2">

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**MIT / BSD** — 最宽松。拿代码去做任何事。JavaScript 生态和 BSD 操作系统的最爱。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**LGPL（GNU 宽通用公共许可证）** — 修改库本身需要回馈社区，但使用该库的应用不需要开源。FFmpeg 和 libVLC 使用此许可证。

</div>

<div class="p-2 rounded bg-red-50 border-l-2 border-red-400">

**GPL / AGPL** — 最强著佐权。任何衍生作品必须开源。Linux 内核使用 GPL。Android 选择了更宽松的 Apache。

</div>

<div class="p-2 rounded bg-purple-50 border-l-2 border-purple-400">

**作者概括** — 在开源社区里，许可证是"唯一所有人都同意的东西"——它是社区的宪法和社会契约。JB 为了将 libVLC 从 GPL 改为 LGPL，联系了 350 多位贡献者，包括一位已故开发者的父亲。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./licensing-spectrum.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 编解码器的哲学：不是单一算法，是工具集合

<div class="text-sm mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

现代编解码器（AV1、VVC、AV2）不再是单一的算法——它们是**编码工具的集合**。不同的内容类型（屏幕共享、真人视频、动画）需要不同的工具组合。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

编码器的任务是：在数十种可用工具中，找出哪个组合对当前画面压缩效果最好。这就是为什么 AV1 编码复杂度约为 H.264 的 **100 倍**。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

这也是为什么每一代编解码器在特定场景下可以有超常表现——例如屏幕录制场景下的 AV1 增益可达 70–80%，远超平均的 30%。

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./codec-evolution.excalidraw"
  class="w-[460px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: two-cols
---

# 开源社区：分布式的激情工程网络

<div class="text-sm mt-3 space-y-2">

<div class="p-2 rounded bg-blue-50 border-l-2 border-blue-400">

**来自世界各地** — FFmpeg 有来自叙利亚战区（电力分时供应）、印度乡村、欧洲各地的贡献者。没人关心你是谁——只关心你的代码质量。

</div>

<div class="p-2 rounded bg-orange-50 border-l-2 border-orange-400">

**1% 留存率** — 1000 个贡献者中只有约 10 人会留下来长期维护。核心社区只有 5–15 人。剩余 99% 的人因换工作、结婚、生子、意外而离开。

</div>

<div class="p-2 rounded bg-green-50 border-l-2 border-green-400">

**为何坚持** — ① 热爱（动漫、电影）→ ② 最好的编程学校 → ③ 几十亿人用的成就感。JB："你做咨询公司写电费账单门户——你不会想跟奶奶讲。但如果你说'我让你能在笔记本上看电影'——奶奶能理解。"

</div>

</div>

::right::

<div class="flex justify-center items-center h-full pl-4">
<Excalidraw
  drawFilePath="./binary-star.excalidraw"
  class="w-[480px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: default
---

# 核心金句（一）

<div class="text-sm opacity-60 mb-4">这期 4 小时 24 分钟的对谈里最值得记住的几句：</div>

<div class="space-y-2">

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"Everything we've just said in the past couple of minutes, every sentence is someone's lifetime's work. There are books about every sentence."
<div class="text-xs opacity-60 mt-1 not-italic">— Lex Fridman，在听完视频解码流程的概述后</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"We don't care who you are, where you're from. We care about the quality of your code. Maybe you're a dog — I don't care. I need to look at your code."
<div class="text-xs opacity-60 mt-1 not-italic">— Jean-Baptiste Kempf，论 FFmpeg/VLC 社区的纯粹 meritocracy</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"If we had to compromise our software, we would shut it down. This is clear."
<div class="text-xs opacity-60 mt-1 not-italic">— JB，在被两个情报机构要求加入后门之后</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."
<div class="text-xs opacity-60 mt-1 not-italic">— Linus Torvalds，Lex 在结尾引用的名言</div>
</div>

<div class="p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm italic">
"Every cycle matters."
<div class="text-xs opacity-60 mt-1 not-italic">— Dav1d 项目的口号，24 万行手写汇编背后的哲学</div>
</div>

</div>

---
layout: default
---

# 核心金句（二）

<div class="text-sm opacity-60 mb-4">更多值得铭记的：</div>

<div class="space-y-2">

<div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm italic">
"The world is a museum of passion projects. Everything out there is a passion project — and open source, you can just do that so much faster."
<div class="text-xs opacity-60 mt-1 not-italic">— John Collison (Stripe)，由 Lex 引述</div>
</div>

<div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm italic">
"Many things in the world only happen because an awesome person decides to do it. This is the case with VLC."
<div class="text-xs opacity-60 mt-1 not-italic">— Tim Sweeney (Epic Games)，在 Twitter 上评论 VLC</div>
</div>

<div class="p-3 bg-green-50 border-l-4 border-green-500 rounded text-sm italic">
"Teenagers have written more assembly in FFmpeg than Google engineers."
<div class="text-xs opacity-60 mt-1 not-italic">— FFmpeg Twitter 账号</div>
</div>

<div class="p-3 bg-orange-50 border-l-4 border-orange-500 rounded text-sm italic">
"We work for the greater good, we work for everyone."
<div class="text-xs opacity-60 mt-1 not-italic">— Jean-Baptiste Kempf，论开源社区的目标</div>
</div>

<div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded text-sm italic">
"25% of the website traffic that comes to our main website is 'Cone Player'. So many people don't know VLC — they know the Cone Player."
<div class="text-xs opacity-60 mt-1 not-italic">— JB，论 VLC 交通锥标志的辨识度</div>
</div>

</div>

---
layout: end
---

# 谢谢

<div class="mt-8 text-lg opacity-70">
FFmpeg · VLC · VideoLAN
</div>

<div class="mt-2 text-sm opacity-50">
开源多媒体 · 为每一个人
</div>

<div class="mt-12 text-base italic opacity-60">
"Don't regret anything. Regrets are a tax on your mind.<br>Learn from your mistakes, but don't regret."
</div>

<div class="mt-2 text-xs opacity-40">
— Jean-Baptiste Kempf
</div>
