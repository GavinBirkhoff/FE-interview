# FAQ?

## 说一下图片的懒加载和预加载

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

## JS 的各种位置，比如 clientHeight,scrollHeight,offsetHeight ,以 及 scrollTop, offsetTop,clientTop 的区别？

clientHeight：表示的是可视区域的高度，不包含 border 和滚动条
offsetHeight：表示可视区域的高度，包含了 border 和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
clientTop：表示边框 border 的厚度，在未指定的情况下一般为 0
scrollTop：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属性指定的父坐
标(css 定位的元素或 body 元素)距离顶端的高度。

## JS的节流和防抖

TODO

## 如何实现一个私有变量，用 getName 方法可以访问，不能直接访问

1. 通过 defineProperty 来实现

```js
obj={
name:yuxiaoliang,
getName:function(){
return this.name
}}
object.defineProperty(obj,"name",{
//不可枚举不可配置
});
```

2. 通过函数的创建形式

```js
function product(){
var name='yuxiaoliang';
this.getName=function(){
return name;
}}
var obj=new product();
```

## JS怎么控制一次加载一张图片，加载完后再加载下一张

```js
const imgArrs = ['imageurl1', 'imageurl2', 'imageurl3']
const loadImg = () => {
    if (!imgArrs.length)  return;
    const img = new Image()
    img.src = imgArrs[0]
    img.onload = () => {
        setTimeout(() => {
            document.body.appendChild(this)
            imgArrs.shift()
            loadImg()
        }, 2000)
    }
}
loadImg()
```

```js
img.onreadystatechange=function(){
if(this.readyState=="complete"){

}
```

## 数组去重

法一：indexOf 循环去重

法二：ES6 Set 去重；Array.from(new Set(array))

法三：Object 键值对去重；把数组的值存成 Object 的 key 值，比如Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

## 去除字符串首尾空格

使用正则(^\s*)|(\s*$)即可

## 能来讲讲JS的语言特性吗

运行在客户端浏览器上；
不用预编译，直接解析执行代码；
是弱类型语言，较为灵活；
与操作系统无关，跨平台的语言；
脚本语言、解释性语言；

## JS的全排列

TODO

## js消除异步传染性

TODO

## codePointAt()与charCodeAt()方法区别

TODO

## 常用的正则表达式有哪些？

1. 邮箱验证：

   ```regex
   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   ```

2. 电话号码验证（纯数字，可包含括号、空格和短横线）：

   ```regex
   /^(\+\d{1,3})?[\s-]?\d{1,}$/ 
   ```

3. URL 验证（包括 http、https、www 等）：

   ```regex
   /^(https?:\/\/)?(www\.)?[\w-]+\.[\w.-]+$/
   ```

4. 身份证号码验证（仅适用于中国大陆身份证）：

   ```regex
   /^(^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[0-9Xx]$)?$/
   ```

5. 邮政编码验证（中国邮政编码为 6 位数字）：

   ```regex
   /^\d{6}$/
   ```

6. IP 地址验证：

   ```regex
   /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
   ```

## 对 JSON 的理解

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，常用于将数据从一个应用程序传输到另一个应用程序。它以易于阅读和编写的文本格式表示结构化数据，并且易于解析和生成。以下是对 JSON 的理解：

1. 数据格式：JSON 使用键值对的形式来表示数据，其中键是字符串，值可以是字符串、数字、布尔值、数组、对象或 null。键值对之间使用冒号（:）分隔，多个键值对使用逗号（,）分隔。整个 JSON 数据被包含在花括号（{}）或方括号（[]）中，分别表示对象和数组。

2. 平台无关性：JSON 是一种与编程语言无关的数据格式，几乎所有的编程语言都支持解析和生成 JSON 数据。这使得 JSON 成为不同系统之间进行数据交换的通用格式。

3. 简洁性和可读性：JSON 的语法简洁、清晰且易于阅读。对于人类来说，编写和理解 JSON 数据相对容易，这使得调试和调用 API 等场景变得更加方便。

4. 数据交换和存储：JSON 通常用于在客户端和服务器之间传输数据。客户端可以将数据序列化为 JSON 字符串，然后将其发送到服务器进行处理。服务器可以解析 JSON 字符串，并将数据存储到数据库中或进行进一步的处理。

5. API 和配置文件：许多 Web API 和服务都使用 JSON 作为数据交换格式。通过使用 JSON，客户端可以与服务器进行通信，并以结构化的方式传递参数和接收响应。此外，JSON 也常用于配置文件，以存储和加载应用程序的配置信息。

6. 支持的数据类型：JSON 支持字符串、数字、布尔值、数组、对象和 null。这些数据类型的组合和嵌套能够表示丰富的数据结构。

需要注意的是，JSON 是一种数据格式，它描述了数据的结构和值，但并不包含行为或方法。在使用 JSON 数据时，需要将其解析为特定编程语言的对象或数据结构，以便进行进一步的处理和操作。

## JavaScript 脚本延迟加载的方式有哪些？

JavaScript 脚本的延迟加载是一种优化技术，它可以提高网页的加载性能。以下是几种常见的 JavaScript 脚本延迟加载的方式：

1. 使用 `async` 属性：将 `<script>` 标签的 `async` 属性设置为 `true` 可以使脚本在下载的同时不阻塞页面的解析和渲染。脚本将在下载完成后立即执行，但执行时可能会打断页面的渲染。

```html
<script src="script.js" async></script>
```

2. 使用 `defer` 属性：将 `<script>` 标签的 `defer` 属性设置为 `true` 可以将脚本的执行推迟到页面解析完成后。这样脚本将在文档完全解析和渲染完成后执行，不会打断页面的渲染。

```html
<script src="script.js" defer></script>
```

3. 动态加载脚本：通过 JavaScript 动态创建 `<script>` 标签并将其插入到页面中，可以实现按需加载脚本。可以在适当的时机使用 `createElement` 和 `appendChild` 方法来动态加载脚本。

```javascript
var script = document.createElement('script');
script.src = 'script.js';
document.body.appendChild(script);
```

4. 使用异步加载库：一些第三方库和工具提供了异步加载的功能，例如 RequireJS、LoadJS 等。这些库可以帮助管理和加载依赖关系，并在需要时按需加载脚本。

```javascript
// 使用 RequireJS 异步加载模块
require(['module'], function(module) {
  // 模块加载完成后的回调函数
});
```

需要根据具体情况选择适合的延迟加载方式。`async` 和 `defer` 属性适用于静态脚本的加载，而动态加载适用于动态生成的脚本或根据条件加载脚本。通过延迟加载 JavaScript 脚本，可以提高网页的响应速度和用户体验。

## 什么是 DOM 和 BOM？

DOM（Document Object Model）和 BOM（Browser Object Model）是两个与浏览器相关的概念：

1. DOM（文档对象模型）：DOM 是指将 HTML 或 XML 文档表示为一个树状结构的方式，使得开发者可以通过脚本语言（通常是 JavaScript）来访问和操作文档的内容、结构和样式。DOM 提供了一组 API，使得开发者可以使用 JavaScript 动态地创建、修改和删除文档的元素、属性和文本。通过 DOM，可以实现对网页的动态交互和改变。

2. BOM（浏览器对象模型）：BOM 是指浏览器提供的一组对象和方法，用于访问和控制浏览器窗口、浏览器的历史记录、浏览器的位置和尺寸、浏览器的导航等功能。BOM 提供了一些对象，如 window、navigator、location、history 等，开发者可以使用这些对象来操作浏览器的行为和属性。BOM 并没有由标准规范定义，不同浏览器可能提供不同的 BOM 实现。

总结来说，DOM 是用于访问和操作文档内容的 API，而 BOM 是用于访问和控制浏览器窗口和浏览器功能的 API。它们共同组成了浏览器提供给开发者的编程接口，使得开发者可以通过 JavaScript 来与网页和浏览器进行交互。

## escape、encodeURI、encodeURIComponent 的区别

`escape`、`encodeURI` 和 `encodeURIComponent` 是 JavaScript 中用于编码 URL 的方法，它们有一些区别：

1. `escape`：`escape` 方法用于对字符串进行编码，将字符串中的特殊字符转换为十六进制转义序列。它可以对整个字符串进行编码，包括字母、数字和特殊字符。然而，`escape` 方法已经被废弃，不推荐使用，因为它对非 ASCII 字符的处理不一致，不适用于完整的 URL 编码。

2. `encodeURI`：`encodeURI` 方法用于对整个 URL 进行编码，包括协议、域名、路径和查询参数。它用于将字符串转换为有效的 URL 字符串，对于大部分情况而言是足够的。`encodeURI` 不会编码某些特殊字符，如 `:/?#[]@!$&'()*+,;=`，以保留它们在 URL 中的含义。

3. `encodeURIComponent`：`encodeURIComponent` 方法用于对 URL 中的查询参数进行编码。它会对字符串中的所有非字母数字字符进行编码，以便安全地包含在 URL 的查询参数中。`encodeURIComponent` 包括对 `encodeURI` 不编码的字符的编码，如 `/`。

下面是一些使用示例：

```javascript
var url = "http://example.com/my page.html?name=John&age=30";
var encodedURL = encodeURI(url);
console.log(encodedURL);
// 输出："http://example.com/my%20page.html?name=John&age=30"

var encodedQueryParam = encodeURIComponent("Hello, World!");
console.log(encodedQueryParam);
// 输出："Hello%2C%20World%21"
```

需要根据具体的使用场景选择适当的方法。通常情况下，使用 `encodeURI` 对整个 URL 进行编码，使用 `encodeURIComponent` 对查询参数进行编码是最常见的做法，以确保 URL 的正确性和安全性。

## script标签中async与defer的区别

`async` 和 `defer` 是用于控制 `<script>` 标签的加载和执行行为的属性。它们具有以下区别：

1. **加载行为：**
   - `async`：带有 `async` 属性的脚本是异步加载的。当浏览器解析到带有 `async` 属性的脚本时，它会立即开始下载脚本文件，并在下载完成后立即执行脚本，而不会阻塞 HTML 文档的解析。多个带有 `async` 属性的脚本的执行顺序无法保证，因此它们之间的依赖关系需要通过其他方式处理。
   - `defer`：带有 `defer` 属性的脚本是延迟加载的。当浏览器解析到带有 `defer` 属性的脚本时，它会继续解析 HTML 文档，并在文档解析完成后按照它们在文档中的顺序依次执行脚本。`defer` 脚本的执行发生在 `DOMContentLoaded` 事件之前。

2. **执行时机：**
   - `async`：脚本在下载完成后立即执行，独立于 HTML 文档的解析进程。这意味着脚本的执行可能发生在 HTML 文档的解析过程中，因此它们不能保证访问或修改位于脚本之前的文档元素。
   - `defer`：脚本的执行发生在 HTML 文档解析完成之后，但在 `DOMContentLoaded` 事件触发之前。这意味着 `defer` 脚本可以访问和操作位于它们之前的文档元素。

3. **顺序保证：**
   - `async`：多个带有 `async` 属性的脚本的执行顺序无法保证，因此如果脚本之间有依赖关系，需要通过其他方式来处理依赖。
   - `defer`：多个带有 `defer` 属性的脚本会按照它们在文档中的顺序依次执行，因此可以确保脚本的执行顺序。

当浏览器解析到带有 async 属性的脚本标签时，它会立即开始异步加载脚本文件。在脚本文件下载的过程中，浏览器会继续解析和渲染 HTML 文档。一旦脚本文件下载完成，浏览器会立即中断 HTML 文档的解析，并开始执行该脚本。

这是 async 属性与传统的阻塞式脚本加载方式（没有 async 或 defer）的主要区别。传统的脚本加载方式会阻塞 HTML 文档的解析和渲染，直到脚本文件下载和执行完成。

需要注意的是，由于 async 脚本会在下载完成后立即执行，所以它们可能会在 HTML 文档的解析过程中执行。这意味着在脚本执行之前，它们无法访问或修改位于脚本之前的文档元素。如果脚本需要操作文档中的元素，可以将其放置在 body 标签的末尾，或使用 DOMContentLoaded 事件来确保脚本在文档解析完成后执行。

总结来说，`async` 属性用于异步加载和执行脚本，而 `defer` 属性用于延迟加载和按顺序执行脚本。你可以根据具体的需求选择适合的属性来控制脚本的加载和执行行为。

## 什么是BMP

BMP 是 Unicode 中的缩写，指的是"基本多文本平面"（Basic Multilingual Plane），也称为 Plane 0。BMP 是 Unicode 字符集的一个重要部分，包括 U+0000 到 U+FFFF（0到65535）之间的码点范围。

在 BMP 内，包含了大多数常见的字符，包括：

- 标准的拉丁字母（A-Z，a-z）
- 数字（0-9）
- 基本的标点符号
- 常见的特殊字符
- 控制字符

BMP 的设计目的是为了包括所有主要的世界语言和符号，以便在一个单一平面内进行表示，使得文本处理和字符编码更为简便。它包含了许多国际化的字符，包括拉丁字母、希腊字母、西里尔字母、汉字、日文假名、阿拉伯数字，以及各种符号和表情符号。

非常重要的是，BMP 包括了最常用的字符，使得大多数文本处理操作更加高效。非常规的或不常用字符通常位于较高的 Unicode Plane 中。

总结，BMP（Basic Multilingual Plane）是 Unicode 字符集的一个平面，包括 U+0000 到 U+FFFF 范围内的大多数字符，它涵盖了主要的世界语言和符号，以促进多语言文本的正确表示和处理。

## 聊聊前端字符编码：ASCII、Unicode、Base64、UTF-8、UTF-16、UTF-32

## javascript引擎工作流程

## 理解JavaScript的编译过程与运行机制

## JS代码中的use strict是什么意思？

use strict是一种ECMAscript5添加的(严格）运行模式，这种模式使得Javascript 在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个:

消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;消除代码运行的一些不安全之处，保证代码运行的安全;
提高编译器效率，增加运行速度;
为未来新版本的Javascript 做好铺垫。
区别:

禁止使用with语句。
禁止this关键字指向全局对象。
对象不能有重名的属性。

## “严格模式”是什么？

除了正常运行模式，ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

```
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。
```

"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

## 为什么JavaScript是单线程？

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。

## base64编码图片，为什么会让数据量变大？

TODO

## JavaScript脚本延迟加载的方式有哪些？

defer属性、async属性、动态创建DOM、js最后加载

## JavaScript中的 sort 方法是怎么实现的？

TODO

## js中数组是如何在内存中存储的？

TODO
