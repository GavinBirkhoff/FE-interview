# FAQ

## 画一条0.5px的线

1. 采用meta viewport的方式

1px像素线条 ：

```
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
```

0.5像素线条：

```
<meta name="viewport" content="width=device-width,initial-scale=0.5,user-scalable=0">
```

2. 采用 border-image的方式
首先需要自己制作一个0.5像素的线条作为线条背景图片。

```
p{ border-width: 0 0 1px 0; border-image: imageUrl 2 0 round; }
```

3. 采用transform: scale()的方式 推荐

```
transform: scaleY(0.5);
transform-origin: 50% 100%;
```

## link标签和import标签的区别

1. 本质区别：link是html的一个标签，除了导入css文件外，还可以定义其他事物，而import是css的法则，只供给css加载文件
2. DOM：DOM可以控制文档中的所有元素，可以插入link修改样式，不可以操作import
3. 权重优先级：link的修改样式的优先级高于import
4. 加载顺序：link导入的css文件随着页面加载而加载，import等到页面加载完毕，再加载
5. 兼容性：link作为html标签没有兼容性问题，而import不兼容ie5及以下

## transition和animation的区别

## Flex布局

## BFC（块级格式化上下文，用于清楚浮动，防止margin重叠等）

## 垂直居中的方法

## 关于JS动画和css3动画的差异性

## 说一下块元素和行元素

## 多行元素的文本省略号

## visibility=hidden, opacity=0，display:none

## 双边距重叠问题（外边距折叠）

## position属性 比较

## 浮动清除

## css3新特性

## CSS选择器有哪些，优先级呢

## 清除浮动的方法，能讲讲吗

## 怎么样让一个元素消失，讲讲

## 介绍一下盒模型

## position相关属性

## css动画如何实现

## 如何实现图片在某个容器中居中的？

## 如何实现元素的垂直居中

## CSS3中对溢出的处理

## float的元素，display是什么

## 隐藏页面中某个元素的方法没有影响

## 三栏布局的实现方式，尽可能多写，浮动布局时，三个div的生成顺序有

## 什么是BFC

## calc属性

## 有一个width300，height300，怎么实现在屏幕上垂直水平居中

## display：table和本身的table有什么区别

## position属性的值有哪些及其区别

## z-index的定位方法

## 如果想要改变一个DOM元素的字体颜色，不在它本身上进行操作？

## 对CSS的新属性有了解过的吗？

## 用的最多的css属性是啥？

## line-height和height的区别

## 设置一个元素的背景颜色，背景颜色会填充哪些区域？

## 知道属性选择器和伪类选择器的优先级吗

## inline-block、inline和block的区别；为什么img是inline还可以设置宽高

## 用css实现一个硬币旋转的效果哪些方法

## 了解重绘和重排吗，知道怎么去减少重绘和重排吗，让文档脱离文档流有

## CSS画正方体，三角形

## overflow的原理

## 清除浮动的方法

## box-sizing的语法和基本用处

## 使元素消失的方法有哪些？这个top是相对于父元素的哪个位置定位的

## 两个嵌套的div，position都是absolute，子div设置top属性，那么

## 说说盒子模型

## display

## 怎么隐藏一个元素

## display:none和visibilty:hidden的区别

## 相对布局和绝对布局，position:relative和obsolute

## flex布局

## block、inline、inline-block的区别

## css的常用选择器

## css布局

## css定位

## relative定位规则

## 垂直居中

## css预处理器有什么
