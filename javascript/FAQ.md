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

## eval 是做什么的

它的功能是将对应的字符串解析成 JS 并执行，应该避免使用 JS，因为非常消耗性能
（2 次，一次解析成 JS，一次执行）

## 对象深度克隆的简单实现

```js
function deepClone(obj) {
  var newObj = obj instanceof Array ? [] : {};
  for (var item in obj) {
    var temple =
      typeof obj[item] == "object" ? deepClone(obj[item]) : obj[item];
    newObj[item] = temple;
  }
  return newObj;
}
```

ES5 的常用的对象克隆的一种方式。注意数组是对象，但是跟对象又有一定区别，所以
我们一开始判断了一些类型，决定 newObj 是对象还是数组。

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

## JS怎么控制一次加载一张图片，加载完后再加载下一张

## 代码的执行顺序

## 如何实现sleep的效果（es5或者es6）

## 简单的实现一个promise

## Function.proto(getPrototypeOf)是什么？

## 实现JS中所有对象的深度克隆（包装对象，Date对象，正则对象）

## 简单实现Node的Events模块

## 箭头函数中this指向举例

## JS判断类型

## 数组常用方法

## 数组去重

## 闭包 有什么用

## 事件代理在捕获阶段的实际应用

## 去除字符串首尾空格

## 性能优化

## 来讲讲JS的闭包吧

## 能来讲讲JS的语言特性吗

## 如何判断一个数组(讲到typeof差点掉坑里)

## 你说到typeof，能不能加一个限制条件达到判断条件

## JS实现跨域

## JS基本数据类型

## JS深度拷贝一个元素的具体实现

## 之前说了ES6set可以数组去重，是否还有数组去重的方法

## 重排和重绘，讲讲看

## JS的全排列

## 跨域的原理

## 不同数据类型的值的比较，是怎么转换的，有什么规则

## null == undefined为什么

## this的指向 哪几种

## 暂停死区

## AngularJS双向绑定原理

## 写一个深度拷贝

## 简历中提到了requestAnimationFrame，请问是怎么使用的

## 有一个游戏叫做 Flappy Bird，就是一只小鸟在飞，前面是无尽的沙漠，上下不断有钢管生成，你要躲避钢管。然后小明在玩这个游戏时候老是卡顿甚至崩溃，说出原因（3-5 个）以及解决办法（3-5 个）

## 编写代码，满足以下条件： （1）Hero("37er");执行结果为 Hi! This is 37er （2）Hero("37er").kill(1).recover(30);执行结果为 Hi! This is 37er Kill 1 bug Recover 30 bloods （3） Hero("37er").sleep(10).kill(2)执行结果为 Hi! This is 37er //等 待 10s 后 Kill 2 bugs //注意为 bugs （双斜线后的为提示信息，不需要打印）

## 什么是按需加载

## 说一下什么是virtual dom

## webpack用来干什么的

## ant-design优点和缺点

## JS中继承实现的几种方式

## 写一个函数，第一秒打印 1 ，第二秒打印

## Vue的生命周期

## 简单介绍一下symbol

## 什么是事件监听

## 介绍一下promise，及其底层如何实现

## 说说C++,Java，JavaScript这三种语言的区别

## 什么是js的闭包？有什么作用，用闭包写个单例模式的原型是什么？在数组原型链上实现删除数组重复数据的方法 ## JS原型链，原型链的顶端是什么？Object的原型是什么？Object的原型

## promise+Generator+Async的使用

## 事件委托以及冒泡原理

## 写个函数，可以转化下划线命名到驼峰命名

## 深浅拷贝的区别和实现

## JS中string的startwith和indexof两种方法的区别

## JS字符串转数字的方法

## ES6箭头函数的特性级作用域（立即执行函数），ES6 呢 ## let const var的区别 ，什么是块级作用域，如何用ES5的方法实现块

## setTimeout和Promise的执行顺序

## 有了解过事件模型吗，DOM0级和DOM2级有什么区别，DOM的分级是什么

## 平时是怎么调试JS的

## setTimeout(fn,100);100毫秒是如何权衡的undefined与null的区别在哪，写一个函数判断变量类型 什么的缩写，JS的作用域类型，undefined==null 返回的结果是什么

## JS的垃圾回收机制

## 写一个newBind函数，完成bind的功能

## 怎么获得对象上的属性：比如说通过Object.key（）

## 简单讲一讲ES6的一些新特性

## call和apply是用来做什么？

## 了解事件代理吗，这样做有什么好处

## 如何写一个继承？

## 给出以下代码，输出的结果是什么？原因？ for(var i=0;i<5;i++) { setTimeout(function(){ console.log(i); },1000); } console.log(i)

## 给两个构造函数A和B，如何实现A继承B？

## 问能不能正常打印索引

## 如果已经有三个promise，A、B和C，想串行执行，该怎么写？

## 知道private和public吗

## 基础的js

## async和await具体该怎么用？

## 知道哪些ES6，ES7的语法

## promise和await/async的关系

## JS的数据类型

## JS加载过程阻塞，解决方法

## JS对象类型，基本对象类型以及引用对象类型的区别

## JavaScript中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？

## 怎么实现一个计算一年中有多少周？

## 面向对象的继承方式

## JS的数据类型

## 引用类型常见的对象

## es6的常用

## class

## 口述数组去重

## 继承

## call和apply的区别

## es6的常用特性

## 箭头函数和function有什么区别

## new操作符原理

## bind,apply,call

## bind和apply的区别

## 数组的去重

## 闭包

## promise实现

## assign的深拷贝

## 说promise，没有promise怎么办

## 事件委托

## 箭头函数和function的区别

## arguments

## 箭头函数获取arguments

## Promise

## 事件代理

## Eventloop
