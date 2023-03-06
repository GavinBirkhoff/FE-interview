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

## 说一下块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置 margin 和 pading 以及高度和宽度

行元素：不会独占一行，width 和 height 会失效，并且在垂直方向的 padding 和margin 会失效。

## 多行元素的文本省略号

```css
/* 单行文本溢出显示省略号 */
.div1 p{
    white-space: nowrap; /* 文本超过容器最大宽度不换行(若文本自动显示在一行则不需要这个属性) */
    overflow: hidden;  /* 本文超出容器最大宽度的部分不显示 */
    text-overflow: ellipsis;  /* 文本超出容器最大宽度时显示三个点 */
}
/* 多行文本溢出显示省略符 */
.div2 p{
    word-break: break-word; /* 文本默认显示在一行时，需要添加该属性，让超出的文本换行 */
    overflow:hidden;
    display:-webkit-box; /* 让容器变成一个弹性伸缩盒子 */
    -webkit-line-clamp:2;  /* 最大显示的文本行数 */
    -webkit-box-orient:vertical;  /* 设置或检索伸缩盒对象的子元素纵向排列  */
}
```

## visibility opacity display

**visibility=hidden, opacity=0，display:none**

opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件的

visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件

display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

## 双边距重叠问题（外边距折叠）

多个相邻（兄弟或者父子关系）普通流的块元素垂直方向 marigin 会重叠

**折叠的结果为：**

>两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
>两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
>两个外边距一正一负时，折叠结果是两者的相加的和。

## position属性比较

**固定定位 fixed：**

元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed 定位使元素的位置与文档流无关，因此不占据空间。 Fixed 定位的元素和其他元素重叠。

**相对定位 relative：**

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

**绝对定位 absolute：**

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`。 absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。

**粘性定位 sticky：**

元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

**默认定位 Static：**

默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者z-index 声明）。

**inherit:**

规定应该从父元素继承 position 属性的值。

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
