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

方法一：使用带 clear 属性的空元素

在浮动元素后使用一个空元素如`<div class="clear"></div>`，并在 CSS 中赋予.clear{clear:both;}属性即可清理浮动。亦可使用`<br class="clear" />`或`<hrclass="clear" />`来进行清理。

方法二：使用 CSS 的 overflow 属性

给浮动元素的容器添加 overflow:hidden;或 overflow:auto;可以清除浮动，另外在IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。

方法三：给浮动的元素的容器添加浮动

给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。

方法四：使用邻接元素处理

什么都不做，给浮动元素后面的元素添加 clear 属性。

方法五：使用 CSS 的:after 伪元素

结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发hasLayout。

给浮动元素的容器添加一个 clearfix 的 class，然后给这个 class 添加一个:after 伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。

## css3新特性

开放题。CSS3 边框如 border-radius，box-shadow 等；CSS3 背景如 background-size，background-origin 等；CSS3 2D，3D 转换如 transform 等；CSS3 动画如animation 等。

## 怎么样让一个元素消失，讲讲

1. display:none;

把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉。当display设置为none，任何对该元素直接的用户交互操作都不可能生效。

1. visibility:hidden;

该元素隐藏起来了，不会改变页面布局，仍占据原有空间，但不会触发该元素已经绑定的事件。

2. opacity:0;filter:alpha(opacity=0);

该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的它只是一种视觉隐藏，将元素变得透明。元素本身依旧占用它的位置。

3. z-index:-1000;

将元素隐藏不占据空间，会改变页面布局，不能进行交互事件

4. position:absolute;top:-1000px;left:-1000px;

 这个方法是通过将left和top的值设的很大，让元素定位到浏览器外面。不占据空间，不能点击
将定位方式设置为relative或者fixed然后将其定位到浏览器外面可以达到同样的效果，区别在于使用relative定位仍会占有原有的空间，而使用absolute以及fixed定位不占据空间

5. transform:rotateY(90deg);

使用3d旋转，使元素隐藏，旋转x轴也可以达到同样的效果，要注意的是，css3 3D转换元素进行使用的时候，必须给父元素添加transform-style:preserve-3d;perspective:1000px;用于提供3D空间，以及设置景深

6. transform: scale(0,0)

通过缩放达到元素消失的视觉效果，元素仍占据空间

7. width:0;height:0;overflow:hidden;

## display：table和本身的table有什么区别

Display:table 和本身 table 是相对应的，区别在于，display：table 的 css 声明能
够让一个 html 元素和它的子节点像 table 元素一样，使用基于表格的 css 布局，是我
们能够轻松定义一个单元格的边界，背景等样式，而不会产生因为使用了 table 那样
的制表标签导致的语义化问题。
之所以现在逐渐淘汰了 table 系表格元素，是因为用 div+css 编写出来的文件比用
table 边写出来的文件小，而且 table 必须在页面完全加载后才显示，div 则是逐行显
示，table 的嵌套性太多，没有 div 简洁

## 伪元素选择器与伪类选择器的区别

1. 伪元素选择器抽象创造了新元素，而伪类选择器没有。
2. 伪类选择器只能使用“ : ”，而伪元素选择器可以使用“ : ”或“ :: ”。
3. 伪类选择器是类似于添加类所以可以是多个；而伪元素选择器在一个选择器中只能出现一次，并且只能出现在末尾。
4. 所有伪类选择器实现的效果可以通过给标签添加class属性来实现；所有伪元素选择器实现的效果要用过新增标签来实现。

## inline-block、inline和block的区别

Block 是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding 水平
垂直方向都有效。

Inline：设置 width 和 height 无效，margin 在竖直方向上无效，padding 在水平方向
垂直方向都有效，前后无换行符

Inline-block：能设置宽度高度，margin/padding 水平垂直方向 都有效，前后无换行
符

## 用css实现一个硬币旋转的效果哪些方法

[旋转coin](https://codepen.io/GavinBirkhoff/pen/JjayBeg)

## 了解重绘和重排吗，知道怎么去减少重绘和重排吗

DOM 的变化影响到了预算内宿的几何属性比如宽高，浏览器重新计算元素的几何属性，其他元素的几何属性也会受到影响，浏览器需要重新构造渲染树，这个过程称之为重排，浏览器将受到影响的部分重新绘制在屏幕上 的过程称为重绘，引起重排重绘的原因有：

添加或者删除可见的 DOM 元素，
元素尺寸位置的改变
浏览器页面初始化，
浏览器窗口大小发生改变，重排一定导致重绘，重绘不一定导致重排，

减少重绘重排的方法有：

不在布局信息改变时做 DOM 查询，
使用 csstext,className 一次性改变属性
使用 fragment
对于多次重排的元素，比如说动画。使用绝对定位脱离文档流，使其不影响其他元素

## CSS画正方体，三角形

三角形

```
#triangle-up{
    width:0;
    height:0;
    border-left:50px solid transparent;
    border-right:50px solid transparent;
    border-bottom:100px solid red;
}

#triangle{
    width:0;
    height:0;
    border-top:50px solid blue;
    border-right:50px solid red;
    border-bottom:50px solid green;
    border-left:50px solid yellow;
}
```

[爆炸正方体](https://codepen.io/GavinBirkhoff/pen/eYLEjEK)
[正方体](https://codepen.io/GavinBirkhoff/pen/KKxvBZZ)

## relative 定位规则

如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

## css布局

六种布局方式总结：圣杯布局、双飞翼布局、Flex 布局、绝对定位布局、表格布局、
网格布局。

## css伪元素和伪类的区别

CSS伪类和伪元素都是用来向特定元素添加样式，但它们之间有一些重要的区别:

1. 目标不同：伪类使用冒号来表示，用于描述元素的一些特殊状态（例如: hover、:active等）。伪元素则使用双冒号来表示，用于向元素添加不存在于文档树中的内容（例如::before、::after等）。
2. 属性不同：伪类描述元素的某些特殊状态，因此它们通常比伪元素依赖于元素本身包含的信息。而伪元素则向元素添加了一些样式化的内容，通常不依赖于元素本身包含的信息。
3. 兼容性不同：在早期的CSS版本中，伪元素只使用单冒号表示，也就是说在使用这些旧版本的CSS解析器时，双冒号语法将无法正常工作。但是，CSS3引入了双冒号语法来区分伪元素和伪类，建议使用这种较新的写法来保证兼容性。

在实际使用中，伪类和伪元素可以组合使用，通过这种方式来实现更复杂的效果，比如::before结合:hover可以实现纯CSS的悬停效果等。

## :where() 和 :is() 函数的区别

这两个函数的区别在于 :where() 函数的优先级总是零，则 :is() 函数的优先级取决于其最特定参数的优先级。

## link 和@import 的区别

`<link>` 和 `@import` 都是用来引入外部资源（如样式表）的方法，但它们之间有一些重要的区别：

1. **引入位置：**
   - `<link>`：通常位于 HTML 文档的 `<head>` 部分，用于在页面加载时同时加载外部资源。
   - `@import`：必须写在 CSS 文件中，用于在加载 CSS 时加载其他 CSS 文件。

2. **加载时间：**
   - `<link>`：在页面加载时同时加载外部资源，不会阻塞页面的渲染。
   - `@import`：在 CSS 文件加载时才会加载其他 CSS 文件，可能会导致页面渲染被阻塞。

3. **浏览器兼容性：**
   - `<link>`：广泛支持，适用于所有现代浏览器。
   - `@import`：旧版本的浏览器可能不支持，特别是 IE5-IE9。

4. **权重：**
   - `<link>`：外部样式表的权重高于页面上的其他样式。
   - `@import`：`@import` 的样式权重低于页面上的其他样式。

5. **JavaScript 操作：**
   - `<link>`：可以通过 JavaScript 动态地添加或移除 `<link>` 元素。
   - `@import`：由于是 CSS 规则，不能通过 JavaScript 动态添加或移除。

6. **性能：**
   - `<link>`：并行加载外部资源，可以提高页面加载速度。
   - `@import`：串行加载，可能影响页面加载性能。

7. **用法：**
   - `<link>`：用于引入样式表、字体等外部资源。
   - `@import`：用于在一个 CSS 文件中引入其他 CSS 文件。

总的来说，推荐使用 `<link>` 来引入外部样式表，尤其是对于页面的主要样式表。而 `@import` 主要在特殊情况下使用，比如在已有的样式表中引入一些辅助的样式。

## 对CSS Sprites（CSS 精灵）的理解

CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张 大图中去，然后利用 CSS 的 background-image，background-repeat， background-position 属性的组合进行背景定位。
优点：

利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大提高了 页面的性能，这是 CSS Sprites 最大的优点； CSS Sprites 能减少图片的字节，把 3 张图片合并成 1 张图片的字节 总是小于这 3 张图片的字节总和。

缺点：

在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要 留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率 下的自适应页面，如果背景不够宽，很容易出现背景断裂； CSSSprites 在开发的时候相对来说有点麻烦，需要借助 photoshop 或其他工具来对每个背景单元测量其准确的位置。

维护方面：

CSS Sprites 在维护的时候比较麻烦，页面背景有少许改 动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免 改动更多的 CSS，如果在原来的地方放不下，又只能（最好）往下加 图片，这样图片的字节就增加了，还要改动 CSS。
