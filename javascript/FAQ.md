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

## 自动装箱和拆箱

自动装箱（Autoboxing）和拆箱（Unboxing）是 JavaScript 在处理基本类型和包装类型之间进行隐式转换的过程。

1. __自动装箱（Autoboxing）__：
   - 自动装箱是指将基本类型值隐式转换为对应的包装类型对象。
   - 当我们使用基本类型的值调用其对应包装类型的属性或方法时，JavaScript 引擎会临时将基本类型值转换为对应的包装类型对象，以便能够调用对象上的方法和属性。
   - 例如，在访问字符串基本类型的属性时，JavaScript 引擎会临时创建一个 String 包装类型对象：

     ```javascript
     let str = "Hello";
     console.log(str.length);  // 输出 5，临时创建 String 包装类型对象
     ```

2. __拆箱（Unboxing）__：
   - 拆箱是指将包装类型对象隐式转换为对应的基本类型值。
   - 当我们使用包装类型对象参与运算或需要基本类型值时，JavaScript 引擎会自动从包装类型对象中提取对应的基本类型值。
   - 例如，在进行相等比较时，JavaScript 引擎会自动拆箱并比较两个基本类型值是否相等：

     ```javascript
     let numObj = new Number(42);
     console.log(numObj === 42);  // 输出 true，自动拆箱
     ```

自动装箱和拆箱在 JavaScript 中是隐式进行的，这使得基本类型和包装类型之间的转换更加方便。它使得我们可以在需要时使用基本类型的特性，同时也可以使用包装类型提供的方法和属性。但需要注意的是，在涉及到性能要求较高的情况下，显式地进行类型转换可能更加高效和可控。

## 为什么会有 BigInt 的提案？

BigInt（大整数）的提案是为了解决 JavaScript 中数字范围的限制。在 JavaScript 中，数字类型是基于 IEEE 754 标准的双精度浮点数，表示范围为 -2^53 到 2^53。这意味着 JavaScript 中的数字有一个有限的精度，不能准确表示超过这个范围的整数。

在某些情况下，需要处理超出双精度浮点数范围的大整数，例如在密码学、大数据计算、科学计算等领域。为了解决这个问题，JavaScript 提案委员会提出了 BigInt 的概念和相应的提案。

BigInt 是一种新的数据类型，用于表示任意精度的整数。它可以表示超过双精度浮点数范围的整数，可以执行大整数运算，如加法、减法、乘法和除法，而不会丢失精度。BigInt 的数据范围只受系统内存的限制。

BigInt 提案的目标是提供一种标准化的方式来处理大整数，使 JavaScript 可以在处理超出双精度浮点数范围的整数时更加可靠和灵活。它提供了一组操作符和方法，用于在 BigInt 上执行各种数值运算，以及将 BigInt 与其他数字类型进行转换。

需要注意的是，BigInt 是一种特殊的数据类型，与常规的数字类型（如整数和浮点数）不同，因此在使用和操作 BigInt 时需要特别注意其语法和规则。

## 如何判断一个对象是空对象

在 JavaScript 中，可以使用不同的方法来判断一个对象是否为空对象。下面列举几种常用的方法：

1. 使用 Object.keys() 方法：该方法返回对象中可枚举属性的数组。如果对象没有可枚举属性，那么返回的数组将为空数组。因此，可以通过检查返回的数组长度是否为0来判断对象是否为空对象。

```javascript
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
```

2. 使用 for...in 循环：通过遍历对象的属性，如果对象具有可枚举的属性，则判断对象不是空对象。

```javascript
function isEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
```

3. 使用 JSON.stringify() 方法：将对象转换为 JSON 字符串，然后检查字符串是否为空字符串来判断对象是否为空对象。

```javascript
function isEmptyObject(obj) {
  return JSON.stringify(obj) === '{}';
}
```

请注意，这些方法都是基于对象没有可枚举属性的前提下来判断对象是否为空对象。如果对象的原型链上有属性或者通过 Object.defineProperty() 方法定义了不可枚举的属性，上述方法可能会得出错误的结果。

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

## 箭头函数的 this 指向哪⾥？

箭头函数的 `this` 指向是在函数定义时确定的，并且在整个函数生命周期内保持不变。与常规函数（函数声明或函数表达式）不同，箭头函数没有自己的 `this` 绑定。相反，它继承了父作用域中的 `this` 值。

具体来说，箭头函数的 `this` 指向的是其外部包围函数（或全局作用域）的 `this` 值。这意味着，无论如何调用箭头函数，它始终引用的是最近一层非箭头函数作用域的 `this` 值。

考虑以下示例：

```javascript
function regularFunction() {
  console.log(this); // this 指向调用 regularFunction 的对象
}

const arrowFunction = () => {
  console.log(this); // this 指向外部作用域中的 this 值
};

const obj = {
  method: regularFunction,
};

regularFunction(); // this 指向全局对象（浏览器环境中通常是 window）
obj.method(); // this 指向 obj 对象
arrowFunction(); // this 指向外部作用域中的 this 值（在此处通常是全局对象）
```

在上述示例中，`regularFunction` 是一个常规函数，它的 `this` 值取决于调用它的方式，可以通过 `obj.method()` 来改变其 `this` 指向。而 `arrowFunction` 是一个箭头函数，它的 `this` 始终继承自外部作用域，无法通过调用方式改变其 `this` 指向。

需要注意的是，箭头函数不适合作为构造函数使用，因为它没有自己的 `this` 绑定，无法通过 `new` 关键字来实例化。

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

## ES6 模块与 CommonJS 模块有什么异同？

ES6 模块（也称为 ES Modules）和 CommonJS 模块是两种不同的模块系统，它们在语法和使用方式上有一些异同点：

异同点：

1. 导出和导入语法：ES6 模块使用 `export` 关键字导出模块中的变量、函数或类，使用 `import` 关键字导入其他模块中的内容。CommonJS 模块使用 `module.exports` 导出模块内容，使用 `require` 函数导入其他模块。

2. 加载时机：ES6 模块在静态分析阶段进行编译和解析，模块的依赖关系在编译时确定。CommonJS 模块在运行时加载和执行，模块的依赖关系在运行时确定。

3. 默认导出：ES6 模块支持默认导出和命名导出。一个模块可以通过 `export default` 导出一个默认的值，而不是具名导出。CommonJS 模块只支持通过 `module.exports` 导出一个默认值，而不支持命名导出。

4. 动态绑定：ES6 模块的导入和导出在编译时就确定了，它们是静态的。CommonJS 模块的导入和导出是动态的，可以在运行时根据条件进行加载和更改。

5. 值的复制与引用：ES6 模块在导入时会创建一个只读的引用，而不是对导出的值进行复制。这意味着 ES6 模块中对导出值的修改会影响导入模块。CommonJS 模块在导入时会复制导出的值，每个模块都拥有自己的副本。

6. 浏览器和 Node.js 支持：ES6 模块是 ECMAScript 标准的一部分，已经被现代浏览器原生支持。在 Node.js 中，需要使用 `--experimental-modules` 标志启用对 ES6 模块的支持。CommonJS 模块是 Node.js 的默认模块系统，也可以通过使用第三方工具（如 Babel）在浏览器中使用。

总体而言，ES6 模块和 CommonJS 模块有一些不同之处，尤其在导入和导出的语法和加载时机上有所区别。需要根据具体的运行环境和需求选择适合的模块系统。

## for...in 和 for...of 的区别

`for...in` 和 `for...of` 是两种在 JavaScript 中用于迭代的循环语句，它们之间有以下区别：

1. 用途：
   - `for...in`：`for...in` 语句用于迭代对象的可枚举属性（包括原型链上的属性）。它通常用于迭代对象的属性名称，而不是属性值。
   - `for...of`：`for...of` 语句用于迭代可迭代对象（如数组、字符串、Set、Map、Generator 等）。它用于获取可迭代对象的值，而不是索引或属性名称。

2. 迭代顺序：
   - `for...in`：`for...in` 循环按照对象属性的插入顺序迭代。但由于它会遍历对象的原型链，所以无法保证属性的顺序。
   - `for...of`：`for...of` 循环按照可迭代对象的迭代器规则，以定义的顺序依次迭代每个元素。

3. 迭代内容：
   - `for...in`：`for...in` 循环返回的是属性名称（字符串类型），可以通过对象的属性名称访问对应的属性值。
   - `for...of`：`for...of` 循环返回的是可迭代对象的值，可以直接访问每个元素的值。

4. 支持的对象类型：
   - `for...in`：`for...in` 循环适用于迭代普通对象的属性，包括原型链上的可枚举属性。
   - `for...of`：`for...of` 循环适用于迭代实现了迭代器接口（Iterable 接口）的对象，如数组、字符串、Set、Map、Generator 等。

示例代码如下：

```javascript
// for...in 示例
const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
  console.log(prop); // 输出属性名称 a, b, c
  console.log(obj[prop]); // 输出属性值 1, 2, 3
}

// for...of 示例
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value); // 输出数组元素的值 1, 2, 3
}
```

总结起来，`for...in` 用于迭代对象的属性名称，`for...of` 用于迭代可迭代对象的值。在处理对象时，`for...in` 循环会遍历属性和原型链上的属性，而 `for...of` 循环不适用于普通对象，只适用于实现了迭代器接口的对象。

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
