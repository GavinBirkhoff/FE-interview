---
sidebar_position: 2
---
# FAQ?

## 怎么让页面上的某块区域全屏展示？

可以通过 HTML5 提供的 全屏 API，将该区域元素通过 requestFullscreen() 方法切换到全屏模式。

## 怎么在页面上获取用户的定位信息？

要在网页上获取用户的地理位置信息，可以使用 HTML5 提供的 Geolocation API，或者使用百度地图、高德地图等 SDK 进行获取。

## html 文档中常见的 &nbsp; 是什么，有什么作用？

- 需要保持单词或短语不被拆开时（如人名、数字单位等）。
- 用于精确控制空格数量。
- 实现特定的排版或对齐需求。

## canvas 与 svg 在可视化领域优劣如何

选择 `<canvas>` 还是 `<svg>` 取决于具体的需求和应用场景。如果你需要高性能、动态更新的图形绘制，`<canvas>` 是更好的选择。而如果你需要可维护的矢量图形、灵活的样式和交互，`<svg>` 是更合适的选择。在实际应用中，也可以根据需要将两者结合使用，以发挥各自的优势。

## html 中前缀为 data- 开头的元素属性是什么？

`data-` 属性提供了一种简洁的方法来将自定义数据存储在 HTML 元素中，这些数据可通过 JavaScript 进行访问和操作，而不会影响页面的标准表现。它们是现代 Web 开发中用于处理元素相关数据的有用工具。

## link 标签有哪些属性，分别有什么作用？

- href：指定资源 URL。
- rel：定义文档与资源的关系。
- type：指定资源 MIME 类型（主要用于样式表）。
- media：定义样式表的媒体条件。
- sizes：定义图标的尺寸。
- as：指定预加载资源的类型。
- crossorigin：设置跨域请求处理方式。

## link 标签的 rel 属性中，preload 和 prefetch 这两个值的作用是什么？

- preload：优先加载当前页面需要的关键资源，以提升页面加载速度。
- prefetch：预取未来可能需要的资源，以提高未来导航的速度。

## HTML 部分标签中的 crossorigin 属性，作用是什么？

- crossorigin="anonymous"：请求不包含凭证，适用于公开资源。
- crossorigin="use-credentials"：请求包含凭证，适用于需要用户认证的资源。

## SSG 的理解

SSG（Static Site Generation，静态网站生成）是指在构建时预先生成静态页面，并将这些页面部署到 CDN 或者其他存储服务中，以提升 Web 应用的性能和用户体验。

具体来说，SSG 的实现方式通常包括以下几个步骤：

1. 在开发阶段，使用模板引擎等技术创建静态页面模板；
2. 将需要展示的数据从后台 API 中获取或者通过其他渠道获取，并将其填充到静态页面模板中，生成完整的 HTML 页面；
3. 使用构建工具（例如 Gatsby、Next.js 等）对静态页面进行构建，生成静态 HTML、CSS 和 JavaScript 文件；
4. 部署生成好的静态文件到服务器或者 CDN 上，以供用户访问。

相比于传统的动态网页，SSG 具有如下优势：

1. 加载速度快：由于不需要每次请求都动态地渲染页面，SSG 可以减少页面加载时间，从而提高用户体验和搜索引擎排名；
2. 安全性高：由于没有后台代码和数据库，SSG 不容易受到 SQL 注入等攻击；
3. 成本低：由于不需要动态服务器等设备，SSG 可以降低网站的运维成本和服务器负担。

需要注意的是，SSG 不适用于频繁更新的内容和动态交互等场景，但对于内容较为稳定和更新较少的网站则是一个性能优化的好选择。

## Dom 树的理解

- **DOM 树** 是文档的结构化表示，包含了文档的所有元素、属性和文本节点。
- **操作 DOM** 是通过 JavaScript 对页面内容进行动态修改和控制的基础。
- **了解 DOM 树** 的结构和操作可以帮助开发者更有效地处理网页的动态内容和交互。

## Node 和 Element 是什么关系？

Node与Element的关系，从继承方面思考可能清晰很多。

Element 继承于 Node，具有Node的方法，同时又拓展了很多自己的特有方法。

在Element的一些方法里，是明确区分了Node和Element的。比如说：childNodes与 children, parentNode与parentElement等方法。

Node的一些方法，返回值为Node，比如说文本节点，注释节点之类的，而Element的一些方法，返回值则一定是Element。

区分清楚这点了，也能避免很多低级问题。

简单的说就是Node是一个基类，DOM中的`Element`，`Text和Comment`都继承于它。换句话说，`Element`，`Text`和`Comment`是三种特殊的Node，它们分别叫做`ELEMENT_NODE`,`TEXT_NODE`和`COMMENT_NODE`。

所以我们平时使用的 html上的元素，即`Element`，是类型为`ELEMENT_NODE`的`Node`。

## 前端跨页面通信，你知道哪些方法？

前端跨页面通信的方法主要包括：

1. **Web 存储 API**：使用 `LocalStorage` 或 `SessionStorage` 存储数据，在不同页面之间共享。
2. **Cookies**：通过设置和读取 Cookie 值在同一域名下的不同页面间传递信息。
3. **PostMessage**：允许在不同的窗口之间发送和接收消息，通过 `origin` 限制接收范围。
4. **Broadcast Channel**：创建频道实现类似发布-订阅模式的通信，适合标签页和 iframe 之间。
5. **SharedWorker**：共享的 Web Worker，允许不同页面通过 `postMessage` 进行双向通信。
6. **IndexedDB**：浏览器提供的客户端数据库，允许在不同页面间存储和共享数据。
7. **WebSockets**：全双工通信通道，适合实时通信，客户端和服务器间实时数据传输。

## 什么是 DOM 和 BOM？

DOM（Document Object Model）和 BOM（Browser Object Model）是 JavaScript 中常用的两个概念，用于描述浏览器中的不同对象模型。

1. **DOM（Document Object Model）**:
   - DOM 是表示 HTML 和 XML 文档的标准的对象模型。它将文档中的每个组件（如元素、属性、文本等）都看作是一个对象，开发者可以使用 JavaScript 来操作这些对象，从而动态地改变页面的内容、结构和样式。
   - DOM 以树状结构组织文档的内容，其中树的根节点是 `document` 对象，它代表整个文档。`document` 对象有各种方法和属性，可以用来访问和修改文档的内容和结构。
2. **BOM（Browser Object Model）**:
   - BOM 是表示浏览器窗口及其各个组件的对象模型。它提供了一组对象，用于访问和控制浏览器窗口及其各个部分，如地址栏、历史记录等。
   - BOM 的核心对象是 `window` 对象，它表示浏览器窗口，并且是 JavaScript 中的全局对象。`window` 对象提供了许多属性和方法，用于控制浏览器窗口的各个方面，如页面导航、定时器、对话框等。
   - BOM 还提供了其他一些对象，如 `navigator`（提供浏览器相关信息）、`location`（提供当前文档的 URL 信息）、`history`（提供浏览器历史记录）、`screen`（提供屏幕信息）等。

总的来说，DOM 是用于访问和操作网页文档的对象模型，而 BOM 是用于控制浏览器窗口及其各个组件的对象模型。在 JavaScript 编程中，开发者通常会同时使用 DOM 和 BOM 来完成各种任务，如操作网页元素、导航控制、事件处理等。

## 简单描述从输入网址到页面显示的过程

当输入URL到页面加载完成，发生了以下几个关键过程：

1. **DNS解析**：浏览器将URL解析为对应的IP地址。这个过程涉及多级DNS服务器，从本地缓存开始，如果没有找到，则递归查询根域名服务器、顶级域名服务器，直到找到目标服务器的IP地址。
2. **TCP连接**：浏览器通过三次握手与服务器建立TCP连接。一旦连接建立，浏览器可以发送HTTP请求。
3. **HTTP请求**：浏览器构建HTTP请求报文，通过TCP连接发送到服务器。请求报文包含请求行、请求头和请求正文。
4. **服务器处理请求**：服务器接收HTTP请求，解析请求内容，执行相应的处理（如数据库查询、文件读取等），并构建HTTP响应报文。
5. **HTTP响应**：服务器将响应报文通过TCP连接发送回浏览器。响应报文包含状态码、响应头和响应正文。
6. **浏览器解析渲染**：浏览器接收到HTTP响应后，解析HTML文档构建DOM树，解析CSS构建CSSOM树，合并两者形成渲染树，然后开始渲染页面。
7. **连接结束**：当浏览器完成页面渲染或收到服务器关闭连接的信号时，浏览器会发送TCP连接关闭的信号，服务器收到后，双方断开连接。

## 简述 html 页面渲染过程

1. **解析 HTML** -> 构建 DOM 树。
2. **解析 CSS** -> 构建 CSSOM 树。
3. **合并 DOM 和 CSSOM** -> 构建渲染树。
4. **计算布局** -> 生成布局信息。
5. **绘制页面** -> 将内容绘制到屏幕。
6. **合成和显示** -> 合成图层并显示页面。
7. **JavaScript 执行** -> 执行脚本可能导致重绘或回流。

## HTML5 有哪些新特性？

- 新增语义化标签：nav、header、footer、aside、section、article
- 音频、视频标签：audio、video
- 数据存储：localStorage、sessionStorage
- canvas（画布）、Geolocation（地理定位）、websocket（通信协议）
- input标签新增属性：placeholder、autocomplete、autofocus、required
- history API
  - go、forward、back、pushstate

## `<!DOCTYPE html>` 标签有什么用？

`<!DOCTYPE html>` 是 HTML5 文档的标准声明，用于告知浏览器当前页面遵循 HTML5 标准。它帮助浏览器以标准模式渲染网页，确保一致的用户体验和网页表现。

## iframe是什么？有哪些优缺点？

`<iframe>` 标签提供了一种便捷的方法来嵌入外部内容和实现特定的布局，但它也带来了一些性能、安全性、SEO 和用户体验方面的挑战。合理使用 `<iframe>` 并考虑其优缺点可以帮助开发人员在实现页面功能和保持页面性能之间找到平衡。

## canvas在标签上设置宽高，与在style中设置宽高有什么区别？

canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面。

而style的width和height是canvas在浏览器中被渲染的高度和宽度。

如果canvas的width和height没指定或值不正确，就被设置成默认值。

## 如何禁用a标签跳转页面或定位链接?

当页面中a标签不需要任何跳转时，从原理上来讲，可分如下两种方法：

- 标签属性href，使其指向空或不返回任何内容。如：

```
<a href="javascript:void(0);" >点此无反应javascript:void(0)</a>

<a href="javascript:;" >点此无反应javascript:</a>
```

- 从标签事件入手，阻止其默认行为。如：

html方法：

```
<a href="" onclick="return false;">return false;</a>
<a href="#" onclick="return false;">return false;</a>
```

或者在js文件中阻止默认点击事件：

```
Event.preventDefault()
```

还可以在css文件中处理点击，不响应任何鼠标事件：

```
pointer-events: none;
```

## script 标签中， async 和 defer 两个属性有什么用途和区别？

在HTML的`<script>`标签中，`async`和`defer`两个属性都用于控制脚本的异步加载，但它们之间存在关键的区别，主要体现在脚本加载和执行顺序上。

async属性

- **用途**：`async`属性用于指定脚本应该异步执行，即脚本的加载和解析不会阻塞HTML文档的解析，并且脚本一旦加载完成就会立即执行，不等待DOMContentLoaded事件触发。
- **特点**：`async`脚本的加载和执行是独立的，不会按照在HTML文档中出现的顺序执行。如果页面中有多个`async`脚本，它们的执行顺序是不确定的。

defer属性

- **用途**：`defer`属性也用于指定脚本的异步加载，但与`async`不同的是，`defer`脚本会等到整个文档被解析完成后，才会执行。这意呀着，脚本的执行会按照在HTML文档中出现的顺序进行。
- **特点**：使用`defer`属性的脚本不会阻塞HTML文档的解析，同时保证了脚本的执行顺序，这对于依赖DOM元素或顺序执行的脚本非常有用。

区别

- **执行时机**：`async`脚本一旦加载完成就会立即执行，不等待其他脚本或DOM的加载完成；而`defer`脚本会等待整个文档解析完成后，按照在HTML文档中出现的顺序执行。
- **执行顺序**：`async`脚本的执行顺序是不确定的，多个`async`脚本可能会乱序执行；而`defer`脚本会按照在HTML文档中出现的顺序执行。

## 常用的 meta 元素有哪些？

- **字符集**：`<meta charset="UTF-8">`
- **描述**：`<meta name="description" content="...">`
- **关键词**：`<meta name="keywords" content="...">`
- **作者**：`<meta name="author" content="...">`
- **视口**：`<meta name="viewport" content="...">`
- **刷新和重定向**：`<meta http-equiv="refresh" content="...">`
- **网页权限设置**：`<meta name="robots" content="...">`
- **兼容性**：`<meta http-equiv="X-UA-Compatible" content="IE=edge">`
- **Open Graph** 和 **Twitter Card** 元素用于社交媒体优化：`<meta property="og:image" content="...">`、`<meta name="twitter:card" content="summary_large_image">`

## JSONP 的缺点

## 跨域（jsonp，ajax）

## 如何实现跨域

## dom 是什么，你的理解？

## 关于 dom 的 api 有什么

## 节点类型 nodeType - 返回值

## 如何对项目中的图片进行优化？

1. 图片压缩：使用适当的图像压缩算法来减小图像文件的大小。可以使用图像编辑工具，如 Adobe Photoshop、GIMP 或在线压缩工具来压缩图片。压缩图片可以减少文件大小，而不会显著降低图像质量。

2. 选择合适的图像格式：选择适当的图像格式可以降低文件大小。对于复杂的图像、照片等，使用 JPEG 格式，对于图标、线条图像等，使用 PNG 格式。避免使用无损格式如 BMP 或 TIFF，因为它们通常具有较大的文件大小。

3. 图片尺寸调整：根据需要调整图片的尺寸。如果在网页上显示的图片尺寸较小，可以将其调整为实际显示大小，以减少加载时间。

4. 响应式图片：使用响应式设计技术，在不同设备和屏幕尺寸上显示不同大小的图片。这样可以避免在移动设备上加载过大的图片。

5. 懒加载：采用懒加载技术，只有当图片进入可见区域时才加载它们。这样可以减少初始加载时间，提高页面加载速度。

6. CDN（内容分发网络）：使用 CDN 来存储和交付图片。CDN 可以将图片存储在全球各地的服务器上，以降低图片加载时间。

7. 图片缓存：启用浏览器缓存，以便当用户再次访问页面时，可以从缓存中加载图片，而不是从服务器重新下载。

8. 图片精灵：将多个小图标或小图片合并成一个大图，通过 CSS 的 background-position 属性来显示需要的部分。这样可以减少 HTTP 请求的数量。

9. 使用矢量图形：对于简单的图标和矢量图形，可以考虑使用 SVG（可缩放矢量图形）格式，它们可以在不失真的情况下进行放大和缩小。

## 常见的图片格式及使用场景

1. JPEG（Joint Photographic Experts Group）：适用于存储照片和彩色图像，具有较小的文件大小和较高的图像质量。广泛应用于网页上显示实际照片和复杂图像的场景。

2. PNG（Portable Network Graphics）：适用于图标、透明图像和简单图形，支持透明背景，具有清晰的边缘和线条。常用于需要保留图像细节和透明度的场景，但文件大小较大。

3. GIF（Graphics Interchange Format）：适用于简单动画、徽标和图标，支持多帧动画和透明背景。常用于创建简单的动画效果，对于复杂图像或照片的色彩表现和细节捕捉能力较差。

4. SVG（Scalable Vector Graphics）：适用于线条图形、图标和可缩放图像，基于矢量而非像素，可无损放大和缩小。常用于响应式设计和需要在不同分辨率和设备上显示的图像。

5. WebP：由 Google 开发的现代图像格式，提供更高的压缩效率。适用于减小图片文件大小，但在某些平台上的浏览器支持有限。

6. BMP（Bitmap）：无压缩的位图图像格式，存储每个像素的颜色信息。通常文件大小较大，适用于某些特定的应用场景，如在一些 Windows 应用程序中使用的图标。

7. TIFF（Tagged Image File Format）：常用的无损压缩图像格式，适用于存储高质量的图像和照片。常用于印刷行业和图像处理应用中，但文件大小较大，在 Web 上的使用相对较少。

## 行内元素有哪些？块级元素有哪些？空(void)元素有哪些？

**行内元素（Inline Elements）：**

- `<span>`
- `<a>`
- `<strong>`
- `<em>`
- `<img>`
- `<br>`
- `<input>`
- `<label>`
- `<button>`

行内元素通常不会独占一行，只会占据它所包含的内容的宽度。

**块级元素（Block Elements）：**

- `<div>`
- `<p>`
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- `<ul>`, `<ol>`, `<li>`
- `<table>`, `<tr>`, `<td>`
- `<form>`
- `<header>`, `<nav>`, `<footer>`

块级元素通常会独占一行，即使内容不填满也会占据整个宽度。

**空元素（Void Elements）：**

- `<img>`
- `<br>`
- `<input>`
- `<hr>`
- `<meta>`
- `<link>`
- `<area>`
- `<base>`
- `<col>`
- `<embed>`
- `<keygen>`
- `<param>`
- `<source>`
- `<track>`
- `<wbr>`

这些元素在使用时不需要闭合标签，因为它们没有内容。

## 常见的语义化标签

1. `<header>`：表示文档的头部，通常包含网站的标志、标题、导航等信息。
2. `<nav>`：表示导航链接，用于包含页面的导航菜单。
3. `<main>`：表示页面的主要内容，每个页面应该只包含一个 `<main>` 元素。
4. `<article>`：表示独立的文章内容，如博客文章、新闻文章等。
5. `<section>`：表示页面的一个章节，通常包含相关的内容块。
6. `<aside>`：表示页面的侧边栏或附加信息，通常用于放置辅助内容。
7. `<footer>`：表示文档的页脚，通常包含版权信息、联系方式等。
8. `<figure>`：表示一段独立的内容，通常用于包含图片、图表、嵌入的内容等。
9. `<figcaption>`：表示 `<figure>` 元素的标题或描述信息。
10. `<time>`：表示日期和时间，可以用于标记文章的发布时间等。
11. `<mark>`：表示需要强调的文本，通常会高亮显示。
12. `<strong>`：表示重要的文本，通常会加粗显示。
13. `<em>`：表示强调的文本，通常会斜体显示。
14. `<blockquote>`：表示长引用的块级内容。
15. `<q>`：表示短引用的内联内容。
16. `<code>`：表示计算机代码，通常会使用等宽字体显示。
17. `<pre>`：表示预格式化的文本，通常会保留空白和换行。
18. `<abbr>`：表示缩写词或首字母缩略词，可以添加 `title` 属性提供全称解释。
19. `<address>`：表示联系信息，通常用于包含作者、发布者等信息。
20. `<dfn>`：表示定义的术语，通常会添加 `title` 属性提供定义解释。

## Canvas 和 SVG 的区别

Canvas（画布）和 SVG（可缩放矢量图形）都是用于在 web 页面上绘制图形的技术，但它们有一些重要的区别：

**Canvas：**

1. **绘图方式：** Canvas 使用基于像素的绘图方式。您可以在画布上绘制像素，可以直接修改像素的颜色、位置等属性。

2. **实时绘制：** 绘制在 Canvas 上是实时的，一旦图像被绘制，就无法直接编辑单个图形。

3. **性能：** Canvas 在处理大量复杂图形时性能较好，因为它使用硬件加速，适合制作复杂的图形、游戏等。

4. **动画：** 对于动画，您需要手动更新画布上的内容，使用帧动画等技术。

5. **交互性：** Canvas 中的图形没有真正的 DOM 结构，所以在 Canvas 上的图形不会自动响应事件。需要编写 JavaScript 代码来处理交互。

**SVG：**

1. **绘图方式：** SVG 使用矢量图形方式，图形由数学描述构成，不同于 Canvas 的像素绘图。

2. **编辑：** SVG 图形可以轻松编辑，您可以通过更改属性或修改 SVG 代码来修改图形。

3. **性能：** 对于复杂的图形和动画，SVG 的性能可能较差，因为它是基于 DOM 的，可能在大量元素上产生较高的开销。

4. **动画：** SVG 支持内置的动画和过渡，您可以在 SVG 元素上应用动画，使其产生平滑的过渡效果。

5. **交互性：** 由于 SVG 使用 DOM 元素，所以可以直接添加事件监听器，使图形可以响应交互。

选择使用 Canvas 还是 SVG 取决于您的需求。如果您需要处理复杂的图形、游戏等，并且需要更好的性能，Canvas 可能更合适。如果您需要图形可以编辑、支持动画和交互性，SVG 可能更适合。另外，随着 Web 技术的不断发展，使用 Canvas 和 SVG 的场景可能会有所变化。

## 说一下 HTML5 drag API

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- ragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

## iframe 有那些缺点

尽管 `<iframe>` 标签在某些情况下是有用的，但它也有一些缺点，需要在使用时仔细考虑：

1. **安全性问题：**

   - **跨域安全性：** 如果嵌套的内容和包含它的页面属于不同的域，浏览器的同源策略会导致许多安全限制。因此，通过 `<iframe>` 加载来自其他域的内容可能会受到限制。
   - **点击劫持：** `<iframe>` 可能受到点击劫持攻击，其中攻击者通过将透明的 `<iframe>` 放在一个看似无害的页面上来欺骗用户进行点击操作。

2. **性能问题：**

   - **资源加载：** 加载 `<iframe>` 内容可能需要额外的网络请求和资源下载，可能会导致页面加载速度变慢。
   - **内存占用：** 如果页面中包含大量的 `<iframe>` 元素，可能会占用较多的内存，特别是在移动设备上。

3. **可访问性问题：**

   - **屏幕阅读器：** `<iframe>` 内的内容对于使用屏幕阅读器的用户可能不太友好，因为这些用户可能无法直接访问嵌套内容。

4. **搜索引擎优化问题：**

   - **SEO：** 对于搜索引擎优化（SEO）来说，`<iframe>` 中的内容可能不会被搜索引擎索引，因为搜索引擎通常不会深入到 `<iframe>` 中。

5. **响应式设计问题：**

   - **响应式布局：** 在使用响应式设计时，`<iframe>` 内容的大小可能难以适应不同的屏幕尺寸，可能需要额外的处理。

6. **脚本访问限制：**
   - **JavaScript 访问：** 在默认情况下，`<iframe>` 中的脚本无法直接访问包含它的页面，也无法通过常规手段直接与父页面通信，除非使用一些跨文档通信的技术。

## script 标签中 defer 和 async 属性的区别

script 标签存在两个属性，defer 和 async，因此 script 标签的使用分为三种情况：

```
<script src="example.js"></script>
```

没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。也就是说在渲染 script 标签之后的文档之前，不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载；

```
<script async src="example.js"></script>
```

有了 async 属性，表示后续文档的加载和渲染与 js 脚本的加载和执行是并行进行的，即异步执行；

```
<script defer src="example.js"></script>
```

有了defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。

![script](./img/script.png)

其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。

从图中我们可以明确一下几点：
1.defer和async在网络加载过程是一致的，都是异步执行的；
2.两者的区别在于脚本加载完成之后何时执行，可以看出defer更符合大多数场景对应用脚本加载和执行的要求；
3.如果存在多个有defer属性的脚本，那么它们是按照加载顺序执行脚本的；而对于async，它的加载和执行是紧紧挨着的，无论声明顺序如何，只要加载完成就立刻执行，它对于应用脚本用处不大，因为它完全不考虑依赖。

## 说一下web worker

## 如何解决＜a＞标签点击后hover事件失效的问题?

改变a标签css属性的排列顺序: link→visited→hover→active
各个阶段的含义：

a:link：未访问时的样式，一般省略成a
a:visited：已经访问后的样式
a:hover：鼠标移上去时的样式
a:active：鼠标按下时的样式

## 点击一个input，事件的触发顺序

1. mousedown： 当鼠标按下时触发。表示用户开始点击元素。
2. focus： 如果输入框之前没有焦点，点击会导致输入框获得焦点。
3. mouseup： 当鼠标释放时触发。表示用户完成点击。
4. click： 在 mouseup 之后触发。表示用户点击了元素。

## 有写过原生的自定义事件吗

```js
// 1.
// let myEvent = new Event('myEvent');
// 2.
// let myEvent = new CustomEvent('myEvent', {
//   detail: {
//     name: 'gavin'
//   }
// })
// 3.
let myEvent = document.createEvent('CustomEvent');
myEvent.initEvent('myEvent', true, true)

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('myEvent', function (e) {
  console.log(e)
  console.log(e.detail)
})
setTimeout(() => {
  btn.dispatchEvent(myEvent)
}, 2000)
```

## addEventListener和attachEvent的区别？

`addEventListener` 和 `attachEvent` 是用于在 JavaScript 中添加事件处理程序的两种不同的方法。它们在实现和用法上存在一些重要的区别：

1. **浏览器兼容性：**
   - `addEventListener` 是 DOM Level 2 标准的一部分，支持较新的浏览器。
   - `attachEvent` 是 IE 特有的方法，仅在 Internet Explorer 8 及其以下版本中有效。

2. **参数的不同：**
   - `addEventListener` 接受三个参数：事件名称、事件处理程序函数、和一个可选的布尔值，用于指定事件是在捕获阶段还是冒泡阶段触发（`true` 表示在捕获阶段，`false` 或省略表示在冒泡阶段，默认为冒泡阶段）。
   - `attachEvent` 接受两个参数：事件名称和事件处理程序函数。IE8 及其以下版本不支持事件捕获，所以 `attachEvent` 只能在冒泡阶段触发事件。

3. **事件处理程序内部的上下文：**
   - 在使用 `addEventListener` 时，事件处理程序函数内部的 `this` 指向触发事件的元素。
   - 在使用 `attachEvent` 时，事件处理程序函数内部的 `this` 指向全局对象 `window`。如果需要访问触发事件的元素，需要通过 `event.srcElement` 获取。

4. **事件处理程序的执行顺序：**
   - `addEventListener` 注册的事件处理程序按照它们被添加的顺序执行。
   - `attachEvent` 注册的事件处理程序执行顺序与添加的相反，即后添加的先执行。

考虑到跨浏览器兼容性，推荐使用 `addEventListener`，并在需要支持较旧的 Internet Explorer 版本时，通过条件语句同时使用 `attachEvent` 进行处理。例如：

```javascript
var element = document.getElementById('myElement');

if (element.addEventListener) {
  element.addEventListener('click', myFunction, false);
} else if (element.attachEvent) {
  element.attachEvent('onclick', function() {
    myFunction.call(element, window.event); // 通过 call 修改事件处理程序内的上下文
  });
}

function myFunction(event) {
  // 事件处理程序的代码
}
```

这样可以确保在较新的浏览器中使用标准的 `addEventListener`，而在老版本的 IE 中使用 `attachEvent`。

## DOM事件流是什么？

DOM（文档对象模型）事件流描述的是在文档中发生事件时，事件的传播路径或流程。DOM 事件流分为三个阶段：捕获阶段、目标阶段和冒泡阶段。

1. **捕获阶段（Capture Phase）：**
   事件从文档的根节点一直传播到触发事件的目标元素。在这个阶段，事件捕获从外向内进行。具体来说，事件会从最外层的祖先元素开始，逐级向目标元素传播。

2. **目标阶段（Target Phase）：**
   事件达到目标元素。这是事件的目标阶段，事件正好触发在目标元素上。

3. **冒泡阶段（Bubble Phase）：**
   事件从目标元素开始，逐级向外传播到文档的根节点。与捕获阶段相反，冒泡阶段是从内向外进行的。

事件流的三个阶段可以用下面的伪代码表示：

```plaintext
|-----------------------------|  (捕获阶段)
|          Root Element       |
|-----------------------------|
|          Ancestor1          |
|-----------------------------|
|          Ancestor2          |
|-----------------------------|
|          Ancestor3          |
|-----------------------------|
|          Target Element      |  (目标阶段)
|-----------------------------|
|          Ancestor3          |
|-----------------------------|
|          Ancestor2          |
|-----------------------------|
|          Ancestor1          |
|-----------------------------|
|          Root Element       |  (冒泡阶段)
|-----------------------------|
```

在实际使用中，通过 `addEventListener` 添加的事件处理程序可以选择在捕获阶段或冒泡阶段执行。默认情况下，事件处理程序在冒泡阶段执行。你可以通过将第三个参数 `useCapture` 设置为 `true`，将事件处理程序放在捕获阶段执行。

## 所有的事件都有冒泡吗？

并不是所有的事件都有冒泡的，例如以下事件就没有：

- onblur
- onfocus
- onmouseenter
- onmouseleave

## 如何阻止冒泡和默认事件(兼容写法)

阻止事件冒泡和默认行为可以通过事件对象的方法来实现。在不同的浏览器中，阻止冒泡和默认行为的方式有所不同。以下是一个兼容写法的示例：

```javascript
function handleEvent(event) {
  // 阻止冒泡
  if (event.stopPropagation) {
    event.stopPropagation(); // W3C标准
  } else {
    event.cancelBubble = true; // IE
  }

  // 阻止默认行为
  if (event.preventDefault) {
    event.preventDefault(); // W3C标准
  } else {
    event.returnValue = false; // IE
  }

  // 在这里可以添加你的其他事件处理逻辑
}

var element = document.getElementById('myElement');

// 添加事件处理程序
if (element.addEventListener) {
  element.addEventListener('click', handleEvent, false); // W3C标准
} else if (element.attachEvent) {
  element.attachEvent('onclick', function() {
    handleEvent(window.event); // IE
  });
}
```

在上述代码中，`handleEvent` 函数是事件处理程序。它首先使用 `stopPropagation` 或 `cancelBubble` 来阻止事件冒泡，然后使用 `preventDefault` 或 `returnValue` 来阻止默认行为。

注意事项：

- `event.stopPropagation()` 和 `event.preventDefault()` 是 W3C 标准的方法，适用于大多数现代浏览器。
- `event.cancelBubble` 和 `event.returnValue` 是 Internet Explorer (IE) 的方式，用于兼容旧版 IE 浏览器。

## 拖拽有哪些知识点

## offset、scroll、client的区别

## target="_blank"有哪些问题？

## children以及childNodes的区别

## HTMLCollection和NodeList的区别
