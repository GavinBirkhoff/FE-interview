# FAQ

这里的问题很大可能会被移动到分类中做详细阐述

## 说一下图片的懒加载和预加载

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

## JS 的 new 操作符做了哪些事情

new 操作符新建了一个空对象，这个对象原型指向构造函数的 prototype，执行构造函
数后返回这个对象。

## 改变函数内部 this 指针的指向函数（bind，apply，call 的区别）

通过 apply 和 call 改变函数的 this 指向，他们两个函数的第一个参数都是一样的表
示要改变指向的那个对象，第二个参数，apply 是数组，而 call 则是 arg1,arg2...这
种形式。通过 bind 改变 this 作用域会返回一个新的函数，这个函数不会马上执行。

## JS 的各种位置，比如 clientHeight,scrollHeight,offsetHeight ,以 及 scrollTop, offsetTop,clientTop 的区别？

clientHeight：表示的是可视区域的高度，不包含 border 和滚动条
offsetHeight：表示可视区域的高度，包含了 border 和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
clientTop：表示边框 border 的厚度，在未指定的情况下一般为 0
scrollTop：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属性指定的父坐
标(css 定位的元素或 body 元素)距离顶端的高度。

## JS的节流和防抖

TODO

## JS 监听对象属性的改变

我们假设这里有一个 user 对象,
(1)在 ES5 中可以通过 Object.defineProperty 来实现已有属性的监听
Object.defineProperty(user,'name',{
set：function(key,value){
}
})
缺点：如果 id 不在 user 对象中，则不能监听 id 的变化
(2)在 ES6 中可以通过 Proxy 来实现
var user = new Proxy({}，{
set：function(target,key,value,receiver){
}
})
这样即使有属性在 user 中不存在，通过 user.id 来定义也同样可以这样监听这个属性
的变化哦。

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

## 如何实现sleep的效果（es5或者es6）

```js
// 1. while 循环的方式
function sleep(ms) {
  var start = Date.now(),
    expire = start + ms;
  while (Date.now() < expire);
  console.log("1111");
  return;
}
// 执行 sleep(1000)之后，休眠了 1000ms 之后输出了 1111。上述循环的方式缺点很明
// 显，容易造成死循环。
// 2. 通过 promise 来实现
function sleep(ms) {
  var temple = new Promise((resolve) => {
    console.log(111);
    setTimeout(resolve, ms);
  });
  return temple;
}
sleep(500).then(function () {
  //console.log(222)
});
//先输出了 111，延迟 500ms 后输出 222
// 3.通过 async 封装
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
  var temple = await sleep(1000);
  console.log(1111);
  return temple;
}
test();
//延迟 1000ms 输出了 1111
// 4.通过 generate 来实现
function* sleep(ms) {
  yield new Promise(function (resolve, reject) {
    console.log(111);
    setTimeout(resolve, ms);
  });
}
sleep(500)
  .next()
  .value.then(function () {
    console.log(2222);
  });

```

## 数组常用方法

push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等

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

## 不同数据类型的值的比较，是怎么转换的，有什么规则

TODO

## promise+Generator+Async的使用

TODO

## 有了解过事件模型吗，DOM0级和DOM2级有什么区别，DOM的分级是什么

JSDOM 事件流存在如下三个阶段：
事件捕获阶段
处于目标阶段
事件冒泡阶段
JSDOM 标准事件流的触发的先后顺序为：先捕获再冒泡，点击 DOM 节点时，事件传播顺
序：事件捕获阶段，从上往下传播，然后到达事件目标节点，最后是冒泡阶段，从下
往上传播
DOM 节点添加事件监听方法 addEventListener，中参数 capture 可以指定该监听是添
加在事件捕获阶段还是事件冒泡阶段，为 false 是事件冒泡，为 true 是事件捕获，并
非所有的事件都支持冒泡，比如 focus，blur 等等，我们可以通过 event.bubbles 来
判断
事件模型有三个常用方法：
event.stopPropagation:阻止捕获和冒泡阶段中，当前事件的进一步传播，
event.stopImmediatePropagetion，阻止调用相同事件的其他侦听器，
event.preventDefault，取消该事件（假如事件是可取消的）而不停止事件的进一步
传播，
event.target：指向触发事件的元素，在事件冒泡过程中这个值不变
event.currentTarget = this，时间帮顶的当前元素，只有被点击时目标元素的
target 才会等于 currentTarget，
最后，对于执行顺序的问题，如果 DOM 节点同时绑定了两个事件监听函数，一个用于
捕获，一个用于冒泡，那么两个事件的执行顺序真的是先捕获在冒泡吗，答案是否定
的，绑定在被点击元素的事件是按照代码添加顺序执行的，其他函数是先捕获再冒泡

## js消除异步传染性

## codePointAt()与charCodeAt()方法区别

## 如果 new 一个箭头函数的会怎么样

在 JavaScript 中，箭头函数是通过函数字面量定义的，它们没有构造函数。因此，无论如何使用 `new` 关键字来调用箭头函数，都会导致错误。

当你尝试使用 `new` 关键字来实例化一个箭头函数时，会抛出一个 `TypeError` 错误。这是因为箭头函数没有自己的 `this` 绑定，它们继承了父作用域的 `this` 值，并且无法被改变。使用 `new` 关键字来调用函数时，会创建一个新的对象，并将函数的 `this` 绑定到该对象上，但对于箭头函数来说，无法绑定新的 `this`，因此会导致错误。

以下是一个例子，展示了使用 `new` 关键字实例化箭头函数时会发生的错误：

```javascript
const ArrowFunc = () => {
  this.name = 'John'; // 错误：箭头函数没有自己的 this
};

const obj = new ArrowFunc(); // TypeError: ArrowFunc is not a constructor
```

总结来说，箭头函数不适用于被实例化，它们更适合作为匿名函数或用于简化函数语法。如果你需要创建可实例化的函数，应该使用常规的函数声明或函数表达式。

## new 操作符的实现步骤

在 JavaScript 中，使用 `new` 操作符来创建一个对象的实例时，会经历以下步骤：

1. 创建一个空对象：首先，一个新的空对象会被创建。

2. 设置原型链连接：新创建的对象会被设置其原型链（`[[Prototype]]`）指向构造函数的原型对象（`Constructor.prototype`）。

3. 将构造函数的作用域赋给新对象：`this` 关键字会被绑定到新对象上，使构造函数内部的代码可以访问和操作新对象。

4. 执行构造函数代码：构造函数会被执行，通过 `this` 关键字来对新对象进行属性赋值、方法定义等操作。

5. 返回新对象：如果构造函数中没有显式返回其他对象，则 `new` 表达式会自动返回新创建的对象实例；否则，返回构造函数中显式返回的对象。

下面是一个简单的示例，演示了 `new` 操作符的实现步骤：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const john = new Person('John', 25);
john.sayHello(); // 输出: Hello, my name is John and I'm 25 years old.
```

在上述示例中，`new Person('John', 25)` 执行过程如下：

1. 创建一个空对象 `john`。

2. 将 `Person.prototype` 设置为 `john` 的原型链。

3. 将构造函数 `Person` 的作用域赋给 `john`，使 `this` 关键字绑定到 `john`。

4. 执行构造函数内部的代码，将属性 `name` 和 `age` 赋值给 `john`。

5. 返回 `john` 对象。

这样，我们通过 `new` 操作符创建了一个 `Person` 的实例，并可以使用该实例调用构造函数原型对象上的方法。

## 扩展运算符的作用及使用场景

扩展运算符（Spread Operator）是在 ECMAScript 2015（ES6）中引入的一种语法，用于展开数组、对象、字符串等可迭代对象。它可以将可迭代对象拆分为独立的元素，方便在需要多个参数或元素的地方使用。

以下是扩展运算符的主要作用和使用场景：

1. 数组的展开：

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5, 6];
   console.log(arr2); // 输出: [1, 2, 3, 4, 5, 6]
   ```

   扩展运算符可以将数组中的每个元素拆分为独立的值，并用于创建新的数组。这对于数组合并、复制或在函数调用时传递多个参数非常有用。

2. 对象的展开：

   ```javascript
   const obj1 = { name: 'John', age: 30 };
   const obj2 = { ...obj1, occupation: 'Engineer' };
   console.log(obj2); // 输出: { name: 'John', age: 30, occupation: 'Engineer' }
   ```

   扩展运算符可以将一个对象的属性和值展开到另一个对象中，从而创建一个新的对象。这对于对象的合并、复制或创建带有额外属性的新对象很有用。

3. 函数调用时的参数传递：

   ```javascript
   function sum(a, b, c) {
     return a + b + c;
   }
   
   const numbers = [1, 2, 3];
   const result = sum(...numbers);
   console.log(result); // 输出: 6
   ```

   扩展运算符可以将数组中的元素作为单独的参数传递给函数。这样可以方便地将数组的元素传递给需要多个参数的函数，避免了使用 `apply()` 或手动解构的复杂性。

4. 字符串的展开：

   ```javascript
   const str = 'Hello';
   const chars = [...str];
   console.log(chars); // 输出: ['H', 'e', 'l', 'l', 'o']
   ```

   扩展运算符可以将字符串拆分为单个字符，生成一个包含每个字符的数组。这对于需要对字符串进行迭代或处理每个字符的场景非常有用。

需要注意的是，扩展运算符只能用于可迭代对象，包括数组、类数组对象（如类似数组的对象和字符串）和可迭代的内置对象（如 Set 和 Map）。在使用扩展运算符时，应根据需要选择合适的数据类型和使用场景。

## Proxy 可以实现什么功能？

Proxy 是 JavaScript 中的一个高级特性，它可以用于拦截、修改或增强对象的基本操作，提供了对对象的自定义行为和元编程能力。通过使用 Proxy，可以实现以下功能：

1. 属性和方法的拦截：Proxy 可以拦截对象的读取（get）、赋值（set）、删除（delete）等操作，使开发者能够在这些操作发生时执行自定义逻辑。例如，可以拦截对对象属性的读取操作，根据特定的规则返回相应的值。

2. 数据校验和保护：通过 Proxy，可以对对象进行数据校验和保护。可以拦截赋值操作，并在赋值前对数据进行验证，从而确保数据的完整性和合法性。

3. 对象扩展和默认值：Proxy 可以拦截对象属性的读取操作，提供默认值或根据需要生成新的属性，从而实现对象的扩展和属性的惰性初始化。

4. 函数调用的拦截：Proxy 可以拦截函数的调用操作，使开发者能够在函数调用前后执行自定义逻辑。这包括对函数参数的验证、函数调用计数等操作。

5. 迭代和遍历的控制：Proxy 可以拦截对象的迭代操作，例如 for...of 循环和使用迭代器的操作，从而控制对象的遍历行为。可以过滤或转换迭代器返回的值。

6. 隐藏和保护对象的私有属性：Proxy 可以拦截对象的读取和赋值操作，使开发者能够对对象的私有属性进行隐藏和保护，以防止直接访问和修改。

需要注意的是，由于 Proxy 是一个强大的功能，它的使用应慎重。不当的使用 Proxy 可能会导致代码复杂性增加和性能损失。在使用 Proxy 时，应确保清晰的设计和合理的用例，以避免不必要的复杂性和性能问题。

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

## 对 AJAX 的理解，实现一个 AJAX 请求

AJAX（Asynchronous JavaScript and XML）是一种用于在客户端和服务器之间进行异步数据交换的技术。通过 AJAX，可以在不刷新整个页面的情况下向服务器发送请求并获取数据，然后使用 JavaScript 更新页面的部分内容。

实现一个 AJAX 请求的基本步骤如下：

1. 创建一个 XMLHttpRequest 对象（或使用新的 fetch API）。
2. 设置请求的方法（GET、POST 等）和 URL。
3. 可选地设置请求的头部信息。
4. 注册一个回调函数来处理响应结果。
5. 发送请求到服务器。
6. 在回调函数中处理响应数据。

下面是一个使用原生 JavaScript 实现 AJAX 请求的示例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      console.log(response);
    } else {
      console.error('Error: ' + xhr.status);
    }
  }
};
xhr.send();
```

接下来，我们可以使用 Promise 对象来封装 AJAX 请求，以便更方便地处理异步操作。下面是使用 Promise 封装 AJAX 请求的示例：

```javascript
function ajaxRequest(url, method) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Request failed: ' + xhr.status));
        }
      }
    };
    xhr.send();
  });
}

// 使用封装的 AJAX 请求
ajaxRequest('https://api.example.com/data', 'GET')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
```

在上述代码中，我们创建了一个名为 `ajaxRequest` 的函数，它返回一个 Promise 对象。在 Promise 的回调函数中，执行 AJAX 请求并根据请求的结果调用 `resolve` 或 `reject`。然后，可以使用 `then` 方法处理成功的响应结果，使用 `catch` 方法处理错误。这种封装可以更好地处理异步操作的结果，使代码更具可读性和可维护性。

## 什么是尾调用，使用尾调用有什么好处？

尾调用（Tail Call）是指函数在执行的最后一步调用另一个函数。具体来说，尾调用发生在函数的最后一个操作中，并且没有其他操作需要执行。尾调用可以出现在函数的返回语句中，或者是函数调用表达式的最后一部分。

尾调用优化（Tail Call Optimization）是一种优化技术，旨在在函数调用时减少内存的使用和栈的增长。当一个函数调用发生在另一个函数的尾调用位置时，可以将当前函数的调用帧替换为被调用函数的调用帧，而不会增加栈的深度。这样可以避免栈溢出错误，同时减少了内存的使用。

尾调用优化的好处包括：

1. 减少内存占用：由于不需要保存每个函数调用的上下文，尾调用优化可以减少内存的使用。这对于递归函数特别有用，因为递归往往会导致栈溢出错误。

2. 提高性能：尾调用优化可以减少函数调用的开销，使得程序的执行更加高效。通过消除不必要的调用帧的创建和销毁过程，可以节省时间和资源。

3. 简化调试和代码阅读：尾调用优化可以使调用栈更加简洁和清晰，使调试和代码阅读更加容易。因为在尾调用优化的情况下，调用栈只会保留最后一次函数调用的信息，而不会堆积大量的调用帧。

需要注意的是，并非所有的 JavaScript 引擎都对尾调用进行优化。一些引擎对尾调用进行了优化，而另一些引擎可能没有进行优化。因此，在编写代码时，不能依赖于尾调用优化，而应该使用其他方法来避免栈溢出问题，例如使用迭代替代递归。

总结起来，尾调用是指函数在执行的最后一步调用另一个函数。尾调用优化可以减少内存的使用和栈的增长，提高性能，并简化调试和代码阅读。尽管不是所有的 JavaScript 引擎都支持尾调用优化，但在递归函数等情况下，尽量避免栈溢出错误仍然是一个好的编程实践。

## ajax、axios、fetch 的区别

`ajax`、`axios` 和 `fetch` 都是用于在 JavaScript 中进行异步网络请求的工具，它们之间有以下区别：

1. API 设计和语法：
   - `ajax`：`ajax` 并不是一个具体的库或工具，而是指异步 JavaScript 和 XML。它是一种基于原生 `XMLHttpRequest` 对象实现的异步请求方法，没有统一的 API 设计，开发者需要手动编写请求代码和处理回调。
   - `axios`：`axios` 是一个流行的第三方库，提供了简洁而强大的 API。它基于 `Promise` 实现，使用链式调用的方式进行请求配置和处理响应。
   - `fetch`：`fetch` 是现代浏览器提供的原生方法，用于进行网络请求。它基于 Promise 实现，使用 Promise 的方式进行请求配置和处理响应。

2. 浏览器兼容性：
   - `ajax`：`XMLHttpRequest` 是原生 JavaScript 提供的网络请求对象，具有广泛的浏览器兼容性。
   - `axios`：`axios` 是一个基于 `XMLHttpRequest` 的库，可以在现代浏览器和较旧的浏览器中使用。
   - `fetch`：`fetch` 是现代浏览器提供的原生方法，对于较旧的浏览器需要使用 polyfill 进行兼容处理。

3. 功能和特性：
   - `ajax`：由于 `ajax` 并不是一个具体的库，它的功能和特性取决于开发者自己编写的代码和所使用的请求库。
   - `axios`：`axios` 提供了许多高级功能，如拦截器、请求和响应的转换、取消请求等。它还提供了更友好的错误处理机制。
   - `fetch`：`fetch` 是一个简单的 API，提供了基本的请求和响应功能，但在某些方面功能相对较弱，如没有原生的超时控制和请求取消机制。

4. 请求和响应处理：
   - `ajax` 和 `axios`：`ajax` 和 `axios` 都提供了丰富的配置选项，可以设置请求头、请求方法、请求体等。它们可以使用回调函数或 Promise 来处理响应结果。
   - `fetch`：`fetch` 使用 Promise 来处理响应，它返回一个 Promise 对象，可以使用 `then` 和 `catch` 方法来处理响应结果。但它的 API 设计相对较低级，使用起来不够简洁和友好。

综上所述，`ajax` 是基于原生 `XMLHttpRequest` 的异步请求方法，没有统一的 API 设计；`axios` 是一个功能强大、易用的第三方库，基于 `XMLHttpRequest` 实现；`fetch` 是现代浏览器原生提供的方法，使用 Promise 实现。

## 对原型、原型链的理解

原型和原型链是 JavaScript 中的重要概念，用于实现对象的继承和属性查找。

1. 原型（Prototype）：
   - 每个 JavaScript 对象都有一个原型（prototype），它是一个对象，可以包含共享的属性和方法。
   - 对象可以通过 `__proto__` 属性访问它的原型。
   - 当访问对象的属性或方法时，如果对象本身没有该属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或方法或到达原型链的末尾（即 `null`）。

2. 原型链（Prototype Chain）：
   - 原型链是一系列对象的链接，每个对象都有一个指向其原型的引用。
   - 当访问对象的属性或方法时，如果对象本身没有该属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或方法或到达原型链的末尾（即 `null`）。
   - 每个对象的原型又是另一个对象，通过这种方式形成了一个层级关系，即原型链。
   - 原型链的终点是 `Object.prototype`，它是大多数对象的最顶层原型，包含一些常用的方法和属性（如 `toString()`、`valueOf()` 等）。

通过原型和原型链，JavaScript 实现了对象的继承和属性的共享：

- 当访问对象的属性或方法时，会先在对象本身查找，如果找不到，会继续在其原型上查找，然后在原型的原型上查找，以此类推，直到找到或到达原型链的末尾。
- 如果对象的原型上也没有该属性或方法，那么会继续在原型的原型上查找，直到找到或到达原型链的末尾。
- 这样就可以实现属性和方法的共享，避免在每个对象上都创建一份相同的属性和方法。

示例代码如下：

```javascript
// 创建一个对象 person
const person = {
  name: 'John',
  age: 30,
};

// person 对象的原型是 Object.prototype
console.log(person.__proto__ === Object.prototype); // true

// 在 person 对象上访问 toString 方法，由于 person 对象没有该方法，会在原型链上查找并找到 Object.prototype 上的 toString 方法
console.log(person.toString()); // "[object Object]"

// 创建一个对象 student
const student = {
  school: 'XYZ School',
};

// student 对象的原型设置为 person 对象
Object.setPrototypeOf(student, person);

// student 对象的原型是 person 对象
console.log(student.__proto__ === person); // true

// 在 student 对象上访问 name 属性，由于 student 对象没有该属性，会在原型链上查找并找到 person 对象上的 name 属性
console.log(student.name); // "John"

//
```

## 原型链的终点是什么？如何打印出原型链的终点？

原型链的终点是 `Object.prototype`。`Object.prototype` 是 JavaScript 中大多数对象的最顶层原型，它是原型链的末尾，没有自己的原型。

可以通过以下方法打印出原型链的终点：

```javascript
// 创建一个对象
const obj = {};

// 打印原型链的终点
let prototype = Object.getPrototypeOf(obj);
while (prototype !== null) {
  console.log(prototype);
  prototype = Object.getPrototypeOf(prototype);
}
```

在上述代码中，我们使用 `Object.getPrototypeOf()` 方法来获取对象的原型。通过一个循环，我们依次打印出每个原型对象，直到原型为 `null`，即到达了原型链的终点。注意，打印结果中会显示一些内置的原型对象，如 `Object.prototype`、`Array.prototype`、`Function.prototype` 等。

请注意，在控制台中打印整个原型链可能会导致很长的输出，特别是对于复杂对象或原型链较深的对象。因此，建议在实际开发中根据需求选择打印原型链的某个部分或特定对象的原型链。

## 对作用域、作用域链的理解

作用域和作用域链是 JavaScript 中关于变量访问和可见性的重要概念。

1. 作用域（Scope）：
   - 作用域是一个定义了变量和函数可访问性的规则集。
   - JavaScript 中有全局作用域和局部作用域。
   - 全局作用域是整个 JavaScript 程序环境中可访问的范围。
   - 局部作用域是在函数内部定义的范围，其中的变量和函数只能在该函数内部访问。

2. 作用域链（Scope Chain）：
   - 作用域链是一系列嵌套的作用域的集合，用于确定变量和函数的访问规则。
   - 当访问一个变量或函数时，JavaScript 引擎会先在当前作用域中查找，如果找不到，则会沿着作用域链向上一级一级地查找，直到找到该变量或函数或到达全局作用域。
   - 作用域链的顶端是当前作用域，底端是全局作用域。

3. 作用域和作用域链的影响：
   - 变量和函数在作用域内是可见的，可以被访问和使用。
   - 在一个作用域中定义的变量和函数可以被该作用域及其子作用域访问。
   - 子作用域可以访问父作用域中的变量和函数，但父作用域无法访问子作用域中的变量和函数。
   - 如果在当前作用域和父作用域中都找不到变量或函数，就会抛出一个 ReferenceError。

示例代码如下：

```javascript
// 全局作用域
const globalVariable = 'Global'; // 全局变量

function outer() {
  // 外部函数作用域
  const outerVariable = 'Outer'; // 外部函数作用域变量

  function inner() {
    // 内部函数作用域
    const innerVariable = 'Inner'; // 内部函数作用域变量

    console.log(innerVariable); // 可以访问内部作用域变量
    console.log(outerVariable); // 可以访问外部作用域变量
    console.log(globalVariable); // 可以访问全局作用域变量
  }

  inner(); // 调用内部函数
}

outer(); // 调用外部函数
```

在上述代码中，全局作用域包含 `globalVariable` 变量和 `outer` 函数。`outer` 函数作用域包含 `outerVariable` 变量和 `inner` 函数。`inner` 函数作用域包含 `innerVariable` 变量。变量可以在其定义的作用域及其父级作用域

中访问，但无法在子作用域中访问。通过作用域链的方式，内部函数可以访问外部函数和全局作用域中的变量。

## 对this对象的理解

`this` 是 JavaScript 中的特殊对象，它代表当前执行上下文中的对象或者说是当前执行代码所属的对象。`this` 的值在函数执行时动态绑定，取决于函数的调用方式。

下面是对 `this` 的一些常见情况和使用场景的解释：

1. 全局作用域中的 `this`：
   - 在全局作用域中，函数没有明确的调用对象，此时 `this` 指向全局对象（在浏览器中为 `window` 对象）。
   - 在严格模式下，全局作用域中的 `this` 值为 `undefined`。

2. 函数作为对象的方法调用时的 `this`：
   - 当函数作为对象的方法被调用时，`this` 指向调用该方法的对象。
   - 方法中的 `this` 可以用于引用该对象的属性和方法。

3. 函数使用 `call()`、`apply()` 或 `bind()` 显式指定 `this`：
   - 使用 `call()` 或 `apply()` 方法可以显式指定函数执行时的 `this` 值。
   - `call()` 方法接受多个参数，第一个参数指定 `this` 的值，后续参数为函数的参数。
   - `apply()` 方法接受两个参数，第一个参数指定 `this` 的值，第二个参数为一个数组，包含了函数的参数。
   - `bind()` 方法返回一个新函数，并预先指定 `this` 值。调用新函数时，`this` 将始终保持预先指定的值。

4. 构造函数中的 `this`：
   - 当函数作为构造函数使用时（使用 `new` 关键字），`this` 指向新创建的实例对象。
   - 在构造函数中，可以使用 `this` 来设置实例对象的属性和方法。

5. 箭头函数中的 `this`：
   - 箭头函数的 `this` 值继承自外层的作用域，与普通函数不同，箭头函数没有自己的 `this`。
   - 在箭头函数中使用的 `this` 实际上是定义时所在作用域中的 `this`。

注意：`this` 的值是在函数被调用时确定的，并且与函数的定义位置无关。所以在编写代码时，需要根据具体情况正确理解和使用 `this`。

## call() 和 apply() 的区别？

`call()` 和 `apply()` 是 JavaScript 中函数对象的两个方法，用于显式调用函数并指定函数执行时的 `this` 值。它们的区别在于参数的传递方式。

区别如下：

1. 参数传递方式：
   - `call()` 方法使用参数列表的方式传递参数，即将参数按照逗号分隔的形式依次传递给函数。
   - `apply()` 方法使用数组的方式传递参数，即将参数封装在数组中作为单个参数传递给函数。

2. 参数数量：
   - `call()` 方法可以接受任意数量的参数，第一个参数是要指定的 `this` 值，后续参数是函数的参数。
   - `apply()` 方法只接受两个参数，第一个参数是要指定的 `this` 值，第二个参数是一个数组，包含了函数的参数。

示例代码如下：

```javascript
function greet(message) {
  console.log(message + ', ' + this.name);
}

const person = {
  name: 'John',
};

// 使用 call() 方法调用 greet() 函数，并指定 this 为 person 对象
greet.call(person, 'Hello'); // 输出: Hello, John

// 使用 apply() 方法调用 greet() 函数，并指定 this 为 person 对象，参数以数组形式传递
greet.apply(person, ['Hi']); // 输出: Hi, John
```

在上述代码中，`greet` 函数使用 `call()` 和 `apply()` 方法分别调用，并指定了 `this` 值为 `person` 对象。通过传递不同的参数，可以实现对函数的显式调用并设置函数执行时的 `this` 值和参数。

总结：`call()` 和 `apply()` 方法的区别主要在于参数传递方式的不同，`call()` 使用参数列表传递参数，而 `apply()` 使用数组传递参数。根据具体的需求和参数的形式，选择合适的方法来调用函数。

## 异步编程的实现方式？

异步编程是一种处理异步操作的编程模式，用于避免阻塞主线程并提高程序的性能和响应性。在 JavaScript 中，有多种方式来实现异步编程：

1. 回调函数（Callback Functions）：
   - 回调函数是最基本的异步编程方式，通过将函数作为参数传递给异步操作，在异步操作完成后调用回调函数来处理结果。
   - 例如，使用 AJAX 请求数据时，可以传递一个回调函数，在数据返回后执行回调函数来处理数据。

2. Promise（ES6）：
   - Promise 是一种用于处理异步操作的对象，它表示一个尚未完成但最终会完成的操作，并提供了一种结构化的方式来处理异步代码。
   - Promise 有三种状态：pending（进行中）、fulfilled（已完成）和rejected（已拒绝）。
   - 通过使用 Promise 的 `then()` 和 `catch()` 方法，可以处理异步操作的成功和失败结果。

3. Async/Await（ES8）：
   - Async/Await 是建立在 Promise 之上的一种更高级的异步编程方式，它提供了一种更直观和同步的语法来编写异步代码。
   - 使用 `async` 关键字定义一个异步函数，函数内部可以使用 `await` 关键字等待一个 Promise 对象的完成，并以同步的方式获取结果。
   - Async 函数返回一个 Promise 对象，可以通过 `then()` 和 `catch()` 方法处理结果。

4. Generator（ES6）：
   - Generator 是一种特殊的函数，可以暂停和恢复执行，允许以迭代器的方式逐步执行异步操作。
   - 通过使用 `yield` 关键字，可以在 Generator 函数中暂停执行，并通过调用 `next()` 方法来恢复执行。
   - 可以结合 Promise 或其他异步编程方式来处理异步操作的结果。

5. Observables（RxJS）：
   - Observables 是一种用于处理异步数据流的编程模式，它提供了一种响应式编程的方式来处理事件和数据流。
   - Observables 可以表示一系列的异步事件或数据流，可以进行各种操作（如映射、过滤、合并等）来处理和转换数据。

这些都是常见的异步编程方式，每种方式都有其适用的场景和特点。在实际开发中，可以根据具体需求选择合适的方式来实现异步编程。

## 对 async/await 的理解

`async/await` 是 ECMAScript 2017（ES8）中引入的一种异步编程方式，它建立在 Promise 之上，提供了一种更简洁、更直观的语法来处理异步操作。

`async/await` 的基本理解如下：

1. `async` 关键字：
   - `async` 用于定义一个异步函数（Async Function），异步函数在执行时会返回一个 Promise 对象。
   - 异步函数内部可以使用 `await` 关键字来暂停函数的执行，等待一个 Promise 对象的完成，并以同步的方式获取其结果。

2. `await` 关键字：
   - `await` 关键字只能在异步函数内部使用，用于暂停异步函数的执行，等待一个 Promise 对象的完成并获取其结果。
   - `await` 后面可以跟随一个 Promise 对象，或者任何返回 Promise 对象的表达式，包括异步函数调用、Promise 链式调用等。
   - 在等待的过程中，`await` 表达式会阻塞函数的执行，直到 Promise 对象的状态变为 fulfilled（已完成）或 rejected（已拒绝）。

`async/await` 的特点和优点如下：

1. 代码简洁易读：相比于回调函数和 Promise 的链式调用，`async/await` 提供了一种更类似同步代码的写法，使异步代码更易于理解和维护。
2. 错误处理简单：使用 `try-catch` 块可以方便地捕获和处理异步操作中的异常，使错误处理更加直观和容易。

使用 `async/await` 的示例代码如下：

```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

在上述代码中，`getData` 是一个异步函数，内部使用了 `await` 关键字来等待异步操作的完成。`fetch` 函数返回一个 Promise 对象，我们使用 `await` 等待其结果，并使用 `response.json()` 获取响应的 JSON 数据。通过 `try-catch` 块，我们可以捕获和处理异步操作中可能发生的错误。

总结：`async/await` 是一种基于 Promise 的异步编程方式，通过使用 `async` 和 `await` 关键字，使得异步代码的书写更加简洁、可读，并提供了方便的错误处理机制。它是异步编程的一种更高级的语法糖，使得异步操作更加直观和易于编写。

## async/await 的优势

1. 可读性和可维护性：`async/await` 提供了一种更直观、类似同步代码的写法，使得异步操作的代码更易于理解和维护。它能够避免回调地狱（Callback Hell）和过多的嵌套，代码结构更加清晰和简洁。

2. 错误处理简单：使用 `try-catch` 块可以方便地捕获和处理异步操作中的异常。在传统的回调函数和 Promise 链中，错误处理比较繁琐，需要在每个回调函数或 `catch()` 方法中进行错误处理。而在 `async/await` 中，可以使用常规的 `try-catch` 结构来捕获异常，使错误处理更直观和易于管理。

3. 顺序控制和同步风格：使用 `await` 关键字可以暂停异步函数的执行，等待一个 Promise 对象的完成，并以同步的方式获取其结果。这使得可以按照顺序执行异步操作，代码逻辑更加直观和易于编写。同时，也可以在需要时使用常规的同步编程技术（如循环、条件语句等），而不需要过多的嵌套回调函数。

4. 异步代码组合：`async/await` 可以与其他异步编程模式（如 Promise、Generator）结合使用，提供了更灵活的异步编程方式。例如，可以在一个异步函数中使用多个 `await` 表达式等待多个异步操作的完成，然后按照需求进行组合和处理。

5. 更好的调试体验：由于 `async/await` 的代码结构更加清晰和简洁，调试异步代码变得更加容易。可以通过常规的调试技术（如断点调试）来逐行跟踪代码执行，更好地理解和排查问题。

总的来说，`async/await` 提供了一种更优雅、可读性更高的异步编程方式，使得异步操作的代码更加直观、简洁和易于维护。它改善了异步编程的体验，并减少了一些常见的异步编程问题，如回调地狱和错误处理。

## async/await 对比 Promise 的优势

`async/await` 是基于 Promise 的异步编程方式，相比于直接使用 Promise，`async/await` 具有以下优势：

1. 更简洁的代码结构：`async/await` 提供了一种类似同步代码的写法，使得异步操作的代码更加简洁、直观和易于理解。相比于 Promise 的链式调用，`async/await` 通过使用 `await` 关键字将异步操作的结果以同步的方式获取，使得代码结构更加扁平化。

2. 错误处理更简单：`async/await` 使用常规的 `try-catch` 结构来处理异步操作中的异常，使错误处理更加直观和容易。相比于 Promise 的 `catch()` 方法，`async/await` 允许在代码块中使用常规的异常处理机制，将错误处理与同步代码的错误处理方式保持一致。

3. 更好的顺序控制：使用 `await` 关键字可以暂停异步函数的执行，等待一个 Promise 对象的完成。这使得可以按照顺序执行异步操作，而不需要嵌套多层的回调函数或进行复杂的 Promise 链式调用。这种顺序控制的方式使得代码更加直观、易于编写和维护。

4. 更好的异步代码组合：`async/await` 可以与其他异步编程模式（如 Promise、Generator）结合使用，提供了更灵活的异步代码组合方式。可以在一个异步函数中使用多个 `await` 表达式等待多个异步操作的完成，然后根据需求进行组合和处理。

5. 更好的调试体验：由于 `async/await` 的代码结构更加清晰和简洁，调试异步代码变得更加容易。可以通过常规的调试技术（如断点调试）来逐行跟踪代码执行，更好地理解和排查问题。

尽管 `async/await` 提供了上述优势，但也有一些限制和注意事项，例如：

1. `async/await` 只能在异步函数中使用，无法在顶层作用域或普通函数中使用。
2. `await` 关键字只能在 `async` 函数内部使用，无法在普通函数或全局作用域中使用。
3. `await` 关键字只能等待 Promise 对象的完成，无法等待其他类型的异步操作（如定时器、事件等）。

总的来说，`async/await` 是一种更优雅、更直观的异步编程方式，相比于直接使用 Promise，它提供了更简洁的代码结构、更简单的错误处理、更好的顺序控制和异步代码组合的能力。它是异步编程的一种更高级的语法糖，使得异步操作更加直观和易于编写。

## 对象创建的方式有哪些？

在 JavaScript 中，对象可以通过以下几种方式进行创建：

1. 对象字面量（Object Literal）:
   使用花括号 `{}` 来定义一个对象，可以在花括号中添加属性和方法。

   ```javascript
   const obj = { 
     property1: value1,
     property2: value2,
     method: function() {
       // 方法的定义
     }
   };
   ```

2. 构造函数（Constructor）:
   使用构造函数创建对象，通过 `new` 关键字调用构造函数，并使用 `this` 关键字在构造函数中定义属性和方法。

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
     this.sayHello = function() {
       console.log(`Hello, my name is ${this.name}`);
     };
   }
   const person = new Person('John', 30);
   ```

3. Object.create() 方法:
   使用 `Object.create()` 方法创建一个新对象，以指定的原型对象作为新对象的原型。

   ```javascript
   const prototypeObj = { 
     property1: value1,
     property2: value2,
     method: function() {
       // 方法的定义
     }
   };
   const newObj = Object.create(prototypeObj);
   ```

4. 类（Class）:
   在 ES6 以后，JavaScript 引入了类（class）的概念，可以使用 `class` 关键字定义一个类，然后使用 `new` 关键字创建该类的实例对象。

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     sayHello() {
       console.log(`Hello, my name is ${this.name}`);
     }
   }
   const person = new Person('John', 30);
   ```

5. 工厂函数（Factory Function）:
   使用一个函数来返回一个新的对象，该函数被称为工厂函数，通过调用该函数可以创建多个类似的对象。

   ```javascript
   function createPerson(name, age) {
     return {
       name: name,
       age: age,
       sayHello: function() {
         console.log(`Hello, my name is ${this.name}`);
       }
     };
   }
   const person = createPerson('John', 30);
   ```

以上是常用的对象创建方式，每种方式都有自己的特点和适用场景。根据实际需求，选择合适的方式来创建对象。

## 对象继承的方式有哪些？

在 JavaScript 中，对象之间可以通过以下几种方式实现继承：

1. 原型链继承（Prototype Chain Inheritance）：
   通过将一个对象设置为另一个对象的原型，实现原型链继承。子对象将继承父对象的属性和方法。

   ```javascript
   function Parent() {
     // 父对象的属性和方法
   }
   function Child() {
     // 子对象的属性和方法
   }
   Child.prototype = new Parent();
   ```

2. 构造函数继承（Constructor Inheritance）：
   在子对象的构造函数中使用 `call()` 或 `apply()` 方法来调用父对象的构造函数，实现构造函数继承。子对象将拥有父对象的属性和方法。

   ```javascript
   function Parent() {
     // 父对象的属性和方法
   }
   function Child() {
     Parent.call(this);
     // 子对象的属性和方法
   }
   ```

3. 组合继承（Combination Inheritance）：
   结合原型链继承和构造函数继承，实现组合继承。通过调用父对象的构造函数来继承父对象的属性，并将父对象设置为子对象的原型，使得子对象可以继承父对象的方法。

   ```javascript
   function Parent() {
     // 父对象的属性
   }
   function Child() {
     Parent.call(this);
     // 子对象的属性和方法
   }
   Child.prototype = new Parent();
   ```

4. 原型式继承（Prototypal Inheritance）：
   使用 `Object.create()` 方法基于已有对象创建新的对象，实现原型式继承。新对象将继承原有对象的属性和方法。

   ```javascript
   const parent = {
     // 原有对象的属性和方法
   };
   const child = Object.create(parent);
   ```

5. 寄生式继承（Parasitic Inheritance）：
   在原型式继承的基础上，通过在新对象上添加额外的属性和方法，实现寄生式继承。新对象将继承原有对象的属性和方法，并拥有自己的属性和方法。

   ```javascript
   const parent = {
     // 原有对象的属性和方法
   };
   function createChild() {
     const child = Object.create(parent);
     // 在子对象上添加额外的属性和方法
     return child;
   }
   ```

6. ES6 的类继承（Class Inheritance）：
   在 ES6 中，可以使用 `extends` 关键字定义一个类的子类，实现类继承。子类将继承父类的属性和方法，并可以添加自己的属性和方法。

   ```javascript
   class Parent {
     // 父类的属性和方法
   }
   class Child extends Parent {
     // 子类的属性和方法
   }
   ```

以上是常用的对象继承方式，每种方式都有自己的特点和适用场景。根据实际需求，选择合适的方式来实现对象的继承关系。

## 哪些情况会导致内存泄漏

内存泄漏是指程序中已经不再使用的内存没有被及时释放，导致内存占用不断增加，最终导致系统性能下降或崩溃。以下是几种常见导致内存泄漏的情况：

1. 无限制的定时器或回调函数：如果使用定时器或回调函数时，没有及时清除或取消它们，就会导致内存泄漏。因为定时器或回调函数会继续持有对相关对象的引用，使得这些对象无法被垃圾回收器回收。

2. 未正确解除事件绑定：在使用事件绑定时，如果没有正确解除绑定，例如忘记使用 `removeEventListener`，那么事件处理函数仍然保持对目标对象的引用，导致目标对象无法被释放。

3. DOM 引用导致的泄漏：如果在 JavaScript 中保留了对 DOM 元素的引用，而这些元素却不再需要时，就会导致内存泄漏。在这种情况下，需要及时释放对 DOM 元素的引用，或者使用 `innerHTML` 或 `removeChild` 等方法从 DOM 结构中移除元素。

4. 循环引用：当两个或多个对象之间相互引用，而没有被其他部分访问到时，就会形成循环引用。在这种情况下，这些对象将无法被垃圾回收器回收，即使它们已经不再被程序使用。

5. 遗忘释放资源：如果在使用 JavaScript 的时候操作了一些底层资源，比如文件、网络连接、数据库连接等，但没有及时释放这些资源，就会导致内存泄漏。

6. 全局变量的滥用：将大量数据存储在全局变量中，而这些数据在之后的程序执行中不再使用，就会导致内存泄漏。全局变量不会被垃圾回收器回收，直到页面关闭。

7. 闭包的滥用：当函数形成闭包时，它会持有对其作用域中变量的引用，如果这些变量占用的内存很大，而函数又长时间存在，就可能导致内存泄漏。

要避免内存泄漏，可以采取以下措施：

- 及时清除定时器和取消回调函数的注册。
- 正确解除事件绑定，使用 `removeEventListener`。
- 避免创建不必要的全局变量，合理使用变量的作用域。
- 避免循环引用，注意对象之间的关联关系。
- 及时释放不再使用的资源，如关闭文件、网络连接等。

- 注意使用闭包时，避免滥用并确保及时释放不再需要的资源。

通过以上措施，可以有效预防和解决内存泄漏问题，保证程序的内存使用效率。

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

## JS中Map和Object的区别

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

## localStorage 和 cookie 到底哪个更安全

## javascript引擎工作流程

## 理解JavaScript的编译过程与运行机制

## 能不能手动实现一下instanceof的功能？

```js
function myInstanceof(left, right) {
    //基本数据类型直接返回false
    if(typeof left !== 'object' || left === null) return false;
    //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
    while(true) {
        //查找到尽头，还没找到
        if(proto == null) return false;
        //找到相同的原型对象
        if(proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
```

## for in 和 for of 的区别

1. for in 是ES5的语法，for of 是ES6的语法
2. for in 是无序遍历数组或对象的，也就是随机遍历，不按照顺序来； for of 是按照顺序遍历的
3. for in 是对key值遍历的，对于对象来说，遍历的是对象的key值，对于数组来说，遍历的是数组的下标； for of是对数值遍历的，不能遍历对象，可以遍历数组，是对数组的每一个元素数值遍历
4. for in会把数组或对象的原型上的属性或方法也遍历出来 ，对于对象来说，可以使用对象的hasOwnProperty()这个方法判断是否是自身实例属性，可以只对自身属性遍历，或者使用Object.keys()方法获取对象键值组成的数组，这个数组不包含原型的属性和方法；而for of 只会把当前数组自己本身的元素值遍历出来
5. 普通的for循环能使用break、continue、 return跳出循环，forEach中可以使用return跳出循环，无法使用break和continue；在for in和for of是可以使用break和return和continue

## forEach跳出循环体

1. 跳出本次循环

```
forEach 跳出本次循环，使用return
    [1,2,3,4,5].forEach(function(item,index){
        if(item == 3){
            return
        }
        console.log(3)// item == 3时，执行不到该部分，结束本次循环
    })

```

2. 跳出整个循环

```
forEach 跳出整个循环，需要抛出异常
try {
    [1,2,3,4,5].forEach(function(item,index){
        if(item == 3){
            thorw new Error(); //结束整体循环
        }
    })
} catch(e) {

}
```

3. 跳出嵌套循环

```
try {
    ["a","b","c"].forEach(function(item,index){

        try {
            [1,2,3,4,5].forEach(function(item,index){
                if(item == 3){
                    thorw new Error(); //结束整体循环
                }
            })
        } finally{}//try不能单独存在

        <!--catch(e) {-->
            //内层的catch不能存在，不然会捕获异常，只结束内层forEach
        <!--}-->

    })
} catch(e) { //在最外层捕获异常，可结束嵌套循环

}
```

## try...catch 可以捕获到异步代码中的错误吗？

1. **使用async/await：** 如果你在异步函数中使用了`async`关键字和`await`操作符，那么`try...catch`能够捕获异步操作中的错误。

```javascript
async function myAsyncFunction() {
  try {
    await someAsyncOperation();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

2. **Promise：** 如果你在使用Promise，你可以使用`catch`方法来捕获异步操作中的错误。

```javascript
someAsyncOperation()
  .then(result => {
    // handle result
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```

无论是使用`async/await`还是`Promise`，都可以捕获异步操作中的错误。但是需要注意的是，如果你在异步操作中使用的是回调函数而不是`async/await`或者`Promise`，`try...catch`是不能捕获异步操作中的错误的。

## 需要在本地实现一个聊天室，多个tab页相互通信，不能用websocket，你会怎么做？

TODO

## e.target 和 e.currentTarget 有什么区别？

e.target 触发事件的元素，e.currentTarget 绑定事件的元素。

## async、await 实现原理

async、await 是 co 库的官方实现。也可以看作自带启动器的 generator 函数的语法糖。不同的是，async、await 只支持 Promise 和原始类型的值。

## 如何确保你的构造函数只能被new调用，而不能被普通调用？

```js
function MyClass() {
  // 确保通过 new 调用, 在ES6后建议只用 new.target来判断
  if (!(this instanceof MyClass)) {
    throw new Error('MyClass must be instantiated with new');
  }

  // 构造函数的其他代码...
}

// 正确的用法
const obj = new MyClass();

// 错误的用法
const obj2 = MyClass(); // 这里会抛出一个错误
```

## 怎么实现图片懒加载？

TODO

## es5 中的类和es6中的class有什么区别？

TODO

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

## ES6中的 Reflect 对象有什么用？

TODO

## 说说你对 Object.defineProperty 的理解

TODO

## 为什么JavaScript是单线程？

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。

## requestAnimationFrame

TODO

## base64编码图片，为什么会让数据量变大？

TODO

## JavaScript脚本延迟加载的方式有哪些？

defer属性、async属性、动态创建DOM、js最后加载
