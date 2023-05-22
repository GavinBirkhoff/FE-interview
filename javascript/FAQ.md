# FAQ

这里的问题很大可能会被移动到分类中做详细阐述

## 如何解决异步回调地狱?

promise、generator、async/await

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

## JS 的各种位置，比如 clientHeight,scrollHeight,offsetHeight ,以 及 scrollTop, offsetTop,clientTop 的区别？JS 的各种位置，比如 clientHeight,scrollHeight,offsetHeight ,以 及 scrollTop, offsetTop,clientTop 的区别？

clientHeight：表示的是可视区域的高度，不包含 border 和滚动条
offsetHeight：表示可视区域的高度，包含了 border 和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
clientTop：表示边框 border 的厚度，在未指定的情况下一般为 0
scrollTop：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属性指定的父坐
标(css 定位的元素或 body 元素)距离顶端的高度。

## 异步加载 JS 的方法

defer：只支持 IE 如果您的脚本不会改变文档的内容，可将 defer 属性加入到
\<script\>标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文
档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为
止。
async，HTML5 属性仅适用于外部脚本，并且如果在 IE 中，同时存在 defer 和 async，
那么 defer 的优先级比较高，脚本将在页面完成时执行。
创建 script 标签，插入到 DOM 中

## JS 的节流和防抖

TODO

## eval 是做什么的

它的功能是将对应的字符串解析成 JS 并执行，应该避免使用 JS，因为非常消耗性能
（2 次，一次解析成 JS，一次执行）

## 实现一个 once 函数，传入函数参数只执行一次

```js
function ones(func) {
  var tag = true;
  return function () {
    if (tag == true) {
      func.apply(null, arguments);
      tag = false;
    }
    return undefined;
  };
}
```

## 将原生的 ajax 封装成 promise

```js
var myNewAjax = function (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && readyState == 4) {
        var json = JSON.parse(xhr.responseText);
        resolve(json);
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        reject("error");
      }
    };
  });
};
```

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

## ==和===、以及 Object.is 的区别

1 ==
主要存在：强制转换成 number,null==undefined
" "==0 //true
"0"==0 //true
" " !="0" //true
123=="123" //true
null==undefined //true
2 Object.js
主要的区别就是+0！=-0 而 NaN==NaN
(相对比===和==的改进)

## setTimeout、setInterval 和 requestAnimationFrame 之间的区别

requestAnimationFrame与 setTimeout 和 setInterval 不同，requestAnimationFrame 不需要设置时间间隔，
大多数电脑显示器的刷新频率是 60Hz，大概相当于每秒钟重绘 60 次。大多数浏览器都
会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验
也不会有提升。因此，最平滑动画的最佳循环间隔是 1000ms/60，约等于 16.6ms。
RAF 采用的是系统时间间隔，不会因为前面的任务，不会影响 RAF，但是如果前面的任
务多的话，
会响应 setTimeout 和 setInterval 真正运行时的时间间隔。
特点：
（1）requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或
回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。
（2）在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这
当然就意味着更少的 CPU、GPU 和内存使用量
（3）requestAnimationFrame 是由浏览器专门为动画提供的 API，在运行时浏览器会
自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节
省了 CPU 开销。

## 实现一个两列等高布局，讲讲思路

为了实现两列等高，可以给每列加上 padding-bottom:9999px;
margin-bottom:-9999px;同时父元素设置 overflow:hidden;

## 自己实现一个 bind 函数

原理：通过 apply 或者 call 方法来实现。
1 初始版本

```js
Function.prototype.bind=function(obj,arg){
var arg=Array.prototype.slice.call(arguments,1);
var context=this;
return function(newArg){
arg=arg.concat(Array.prototype.slice.call(newArg));
return context.apply(obj,arg);
}}
```

2 考虑到原型链
为什么要考虑？因为在 new 一个 bind 过生成的新函数的时候，必须的条件是要继承原
函数的原型

```js
Function.prototype.bind=function(obj,arg){
var arg=Array.prototype.slice.call(arguments,1);
var context=this;
var bound=function(newArg){
arg=arg.concat(Array.prototype.slice.call(newArg));
return context.apply(obj,arg);
}
var F=function(){}
//这里需要一个寄生组合继承
F.prototype=context.prototype;
bound.prototype=new F();
return bound;
}
```

## 用 setTimeout 来实现 setInterval

每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。

setInterval的缺点，也就显而易见了：

使用setInterval时，某些间隔会被跳过（如果上一次执行代码没有执行，那么这次的执行代码将不会被放入队列，会被跳过）
可能多个定时器会连续执行（上一次代码在队列中等待还没有开始执行，然后定时器又添加第二次代码，第一次代码等待时间和执行时间刚好等于第二次代码执行）

```js
var timeWorker = {}
var mySetInterval= function(fn, time) {
// 定义一个key，来标识此定时器
var key = Symbol();
// 定义一个递归函数，持续调用定时器
  var execute = function(fn, time) {
     timeWorker[key] = setTimeout(function(){
        fn();
        execute(fn, time);
     }, time)
   }
  execute(fn, time);
  // 返回key
  return key;
}
var myClearInterval = function(key) {
  if (key in timeWorker) {
   clearTimeout(timeWorker[key]);
    delete timeWorker[key];
  }
}
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

## 代码的执行顺序

```js
setTimeout(function(){console.log(1)},0);
new Promise(function(resolve,reject){
  console.log(2);
  resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});
process.nextTick(function(){console.log(5)});
console.log(6);
//输出 2,6,5,3,4,1
```

参考[Event Loop 宏任务和微任务](./9.md)

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

## Function.proto(getPrototypeOf)是什么？

获取一个对象的原型，在 chrome 中可以通过_proto_的形式，或者在 ES6 中可以通过Object.getPrototypeOf 的形式。
那么 Function.proto 是什么么？也就是说 Function 由什么对象继承而来，我们来做如下判别。
Function.__proto__==Object.prototype //false
Function.__proto__==Function.prototype//true
我们发现 Function 的原型也是 Function。

## JS判断类型

判断方法：typeof()，instanceof，Object.prototype.toString.call()等

## 数组常用方法

push()，pop()，shift()，unshift()，splice()，sort()，reverse()，map()等

## 数组去重

法一：indexOf 循环去重

法二：ES6 Set 去重；Array.from(new Set(array))

法三：Object 键值对去重；把数组的值存成 Object 的 key 值，比如Object[value1] = true，在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。

## 事件代理在捕获阶段的实际应用

可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。

## 去除字符串首尾空格

使用正则(^\s*)|(\s*$)即可

## 能来讲讲JS的语言特性吗

运行在客户端浏览器上；
不用预编译，直接解析执行代码；
是弱类型语言，较为灵活；
与操作系统无关，跨平台的语言；
脚本语言、解释性语言；

## JS基本数据类型

基本数据类型：undefined、null、number、boolean、string、symbol

## JS的全排列

TODO

## 不同数据类型的值的比较，是怎么转换的，有什么规则

TODO

## null == undefined为什么

要比较相等性之前，不能将 null 和 undefined 转换成其他任何值，但 null == undefined 会返回 true 。ECMAScript 规范中是这样定义的。

## this的指向哪几种

默认绑定：全局环境中，this 默认绑定到 window。

隐式绑定：一般地，被直接对象所包含的函数调用时，也称为方法调用，this 隐式绑定到该直接对象。

隐式丢失：隐式丢失是指被隐式绑定的函数丢失绑定对象，从而默认绑定到 window。

显式绑定：通过 call()、apply()、bind()方法把对象绑定到 this 上，叫做显式绑定。

new 绑定：如果函数或者方法调用之前带有关键字 new，它就构成构造函数调用。对于this 绑定来说，称为 new 绑定。

【1】构造函数通常不使用 return 关键字，它们通常初始化新对象，当构造函数的函数体执行完毕时，它会显式返回。在这种情况下，构造函数调用表达式的计算结果就是这个新对象的值。

【2】如果构造函数使用 return 语句但没有指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果。

【3】如果构造函数显式地使用 return 语句返回一个对象，那么调用表达式的值就是这个对象。

## 暂停死区

在代码块内，使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

## requestAnimationFrame，请问是怎么使用的

requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。

## 游戏时候老是卡顿甚至崩溃，说出原因以及解决办法

原因可能是：
1.内存溢出问题。
2.资源过大问题。
3.资源加载问题。
4.canvas 绘制频率问题
解决办法：
1.针对内存溢出问题，我们应该在钢管离开可视区域后，销毁钢管，让垃圾收集器回
收钢管，因为不断生成的钢管不及时清理容易导致内存溢出游戏崩溃。
2.针对资源过大问题，我们应该选择图片文件大小更小的图片格式，比如使用 webp、
png 格式的图片，因为绘制图片需要较大计算量。
3.针对资源加载问题，我们应该在可视区域之前就预加载好资源，如果在可视区域生
成钢管的话，用户的体验就认为钢管是卡顿后才生成的，不流畅。
4.针对 canvas 绘制频率问题，我们应该需要知道大部分显示器刷新频率为 60 次/s,因
此游戏的每一帧绘制间隔时间需要小于 1000/60=16.7ms，才能让用户觉得不卡顿。
（注意因为这是单机游戏，所以回答与网络无关）

## 什么是按需加载

当用户触发了动作时才加载对应的功能。触发的动作，是要看具体的业务场景而言，
包括但不限于以下几个情况：鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大
小更改等。加载的文件，可以是 JS、图片、CSS、HTML 等。

## 说一下什么是virtual dom

用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，
插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树
进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的 DOM 树上，视图就
更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

## webpack用来干什么的

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当
webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其
中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## 简单介绍一下symbol

Symbol 是 ES6 的新增属性，代表用给定名称作为唯一标识，这种类型的值可以这样创
建，let id=symbol(“id”)
Symbl 确保唯一，即使采用相同的名称，也会产生不同的值，我们创建一个字段，仅为
知道对应 symbol 的人能访问，使用 symbol 很有用，symbol 并不是 100%隐藏，有内置
方法 Object.getOwnPropertySymbols(obj)可以获得所有的 symbol。
也有一个方法 Reflect.ownKeys(obj)返回对象所有的键，包括 symbol。
所以并不是真正隐藏。但大多数库内置方法和语法结构遵循通用约定他们是隐藏的。

## 什么是事件监听

addEventListener()方法，用于向指定元素添加事件句柄，它可以更简单的控制事
件，语法为
element.addEventListener(event, function, useCapture);
第一个参数是事件的类型(如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
事件传递有两种方式，冒泡和捕获
事件传递定义了元素事件触发的顺序，如果你将 P 元素插入到 div 元素中，用户点击 P
元素，
在冒泡中，内部元素先被触发，然后再触发外部元素，
捕获中，外部元素先被触发，在触发内部元素。

## promise+Generator+Async的使用

TODO

## 事件委托以及冒泡原理

事件委托是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托
到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是
减少内存消耗，节约效率
动态绑定事件
事件冒泡，就是元素自身的事件被触发后，如果父元素有相同的事件，如 onclick 事
件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会
一级一级根据嵌套关系向外触发，直到 document/window，冒泡过程结束。

## ES6箭头函数的特性

ES6 增加了箭头函数，基本语法为
let func = value => value;
相当于
let func = function (value) {
return value;
};
箭头函数与普通函数的区别在于：
1、箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值，这就意味着如
果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this， 2、箭头函数没有自己的 arguments 对象，但是可以访问外围函数的 arguments 对象
3、不能通过 new 关键字调用，同样也没有 new.target 值和原型

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

## call和apply是用来做什么？

Call 和 apply 的作用是一模一样的，只是传参的形式有区别而已
1、改变 this 的指向
2、借用别的对象的方法，
3、调用函数，因为 apply，call 方法会使函数立即执行

## JS加载过程阻塞，解决方法

指定 script 标签的 async 属性。
如果 async="async"，脚本相对于页面的其余部分异步地执行（当页面继续进行解析
时，脚本将被执行）
如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行

## JS对象类型，基本对象类型以及引用对象类型的区别

分为基本对象类型和引用对象类型
基本数据类型：按值访问，可操作保存在变量中的实际的值。基本类型值指的是简单
的数据段。基本数据类型有这六种:undefined、null、string、number、boolean、
symbol。
引用类型：当复制保存着对象的某个变量时，操作的是对象的引用，但在为对象添加
属性时，操作的是实际的对象。引用类型值指那些可能为多个值构成的对象。
引用类型有这几种：Object、Array、RegExp、Date、Function、特殊的基本包装类型
(String、Number、Boolean)以及单体内置对象(Global、Math)。

## arguments

arguments 是类数组对象，有 length 属性，不能调用数组方法
可用 Array.from()转换

## 箭头函数获取arguments

可用…rest 参数获取

## js消除异步传染性

## codePointAt()与charCodeAt()方法区别

## 使用箭头函数(arrow functions)的优点是什么？

## 说说async函数

1. 什么是 Async 函数？

Async 函数是一种异步函数，它使用 async 关键字在函数前进行修饰。它可以以一种更简单和直观的方式编写异步代码。Async 函数的返回值是一个 Promise 对象，可以使用 then 和 catch 处理。

2. Async 函数与 Promise 之间有什么区别？

Async 函数是 Promise 的一种语法糖，它提供了一种更简单和直观的方式来编写异步代码。Promise 是一个对象，它代表一个异步操作的最终结果，可以使用 then 和 catch 处理。

3. 如何在 Async 函数中使用 await？

在 Async 函数中，可以使用关键字 await 来等待一个 Promise 对象的解决。当遇到 await 表达式时，Async 函数会暂停执行，直到 Promise 对象被解决。

4. Async 函数的返回值是什么类型？

Async 函数的返回值是一个 Promise 对象。它可以是解决的 Promise 对象，也可以是拒绝的 Promise 对象，具体取决于 Async 函数的执行结果。

5. 在 Async 函数中可以使用哪些其他异步函数？

在 Async 函数中可以使用所有返回 Promise 对象的异步函数，例如 fetch、setTimeout、setInterval 等等。

6. Async 函数在什么情况下会抛出异常？

当 Async 函数中的任何一条语句抛出异常时，该函数将立即停止执行并返回一个拒绝的 Promise 对象。这个 Promise 对象将包含抛出的错误对象。

7. 在什么情况下我们应该使用 Async 函数？

通常情况下，当需要处理异步事件时，我们应该使用 Async 函数，因为 Async 函数提供了一种更直观和更易于理解的方式来编写异步代码。使用 Async 函数可以大大简化异步代码的编写和调试。
