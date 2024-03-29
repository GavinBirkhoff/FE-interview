---
sidebar_position: 2
---
# FAQ?

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

在浮动元素后使用一个空元素如`<div class="clear"></div>`，并在 CSS 中赋予.clear`{clear:both;}`属性即可清理浮动。亦可使用`<br class="clear" />`或`<hrclass="clear" />`来进行清理。

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

## 常见的 CSS 布局单位

当涉及到CSS布局时，以下是一些常见的单位，以及它们的用法和示例：

1. **像素（px）**：
   - 用法：固定尺寸，常用于精确布局。
   - 示例：`width: 200px;`

2. **百分比（%）**：
   - 用法：相对于父元素的尺寸进行布局，用于响应式设计。
   - 示例：`width: 50%;`

3. **视窗宽度单位（vw）**：
   - 用法：相对于浏览器窗口宽度的百分比单位，用于响应式布局。
   - 示例：`font-size: 5vw;`

4. **视窗高度单位（vh）**：
   - 用法：相对于浏览器窗口高度的百分比单位，用于响应式布局。
   - 示例：`height: 50vh;`

5. **根元素字体大小单位（rem）**：
   - 用法：相对于根元素字体大小，用于创建响应式布局。
   - 示例：`font-size: 1.5rem;`

6. **字符宽度单位（ch）**：
   - 用法：相对于字符 "0" 的宽度，通常用于等宽字体的布局。
   - 示例：`width: 20ch;`

7. **最小宽度单位（min-width）**：
   - 用法：设置元素的最小宽度，以确保不小于指定的值。
   - 示例：`min-width: 300px;`

8. **最大宽度单位（max-width）**：
   - 用法：设置元素的最大宽度，以确保不超过指定的值。
   - 示例：`max-width: 800px;`

9. **相对字体单位（em）**：
   - 用法：相对于元素的字体大小，用于创建与字体相关的布局。
   - 示例：`font-size: 1.2em;`

10. **行高单位（line-height）**：
    - 用法：通常可以使用数字或百分比来设置行高，以垂直居中文本。
    - 示例：`line-height: 1.5;` 或 `line-height: 150%;`

## 元素的层叠顺序

## 如何解决 1px 问题？

1px问题是指在高分辨率的设备上，以1个物理像素绘制的边框或线条在屏幕上看起来过于细微或模糊的现象。这个问题在移动设备上特别常见。为了解决1px问题，可以考虑以下几种方法：

1. **使用`border`属性绘制边框：** 直接使用`border`属性绘制边框，而不是使用`width`和`height`来绘制，因为`border`属性可以在不同分辨率的设备上自动调整。

   ```css
   .element {
     border: 1px solid #000;
   }
   ```

2. **使用`transform: scale()`：** 可以使用CSS的`transform`属性对元素进行缩放来解决1px问题。通过将元素缩小，然后再放大，可以使边框看起来更加清晰。

   ```css
   .element {
     transform: scale(0.5);
     transform-origin: left top;
   }
   ```

   这里的`scale(0.5)`将元素缩小一半，然后通过`transform-origin`属性将变换的原点设置为左上角。

3. **使用伪元素::after或::before：** 可以使用伪元素来创建额外的元素，然后对其进行缩放，以实现1px效果。

   ```css
   .element::before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     width: 200%; /* 或者其他倍数 */
     height: 200%; /* 或者其他倍数 */
     border: 1px solid #000;
     transform: scale(0.5);
     transform-origin: left top;
   }
   ```

4. **使用特定的CSS框架或工具：** 有一些专门解决1px问题的CSS框架和工具，如`border.css`、`border-loader`等。这些工具可以自动处理1px问题，让开发更加方便。

5. **使用像素单位：** 在某些情况下，如果您可以接受在高分辨率设备上显示略粗的线条，可以直接使用像素单位（px）绘制边框。

## em/px/rem/vh/vw区别?

px：绝对单位，页面按精确像素展示

em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算，整个页面内1em不是一个固定的值

rem：相对单位，相对的只是HTML根元素font-size的值

vw，就是根据窗口的宽度，分成100等份，100vw就表示满宽，同理，vh则为窗口的高度vh、vw：主要用于页面视口大小布局，在页面布局上更加方便简单

## css中，有哪些方式可以隐藏页面元素？区别?

1、display:none 将元素设置为display:none后，元素在页面上将彻底消失，导致浏览器的重排和重绘，无法响应点击事件。

2、visibility:hidden 仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘，无法响应点击事件。

3、opacity:0 将元素的透明度设置为0后，元素也是隐藏的，不会引发重排，一般情况下也会引发重绘，可以响应点击事件

4、设置height、width模型属性为0 将元素的height和width等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素，无法响应点击事件

5、position:absolute 将元素移出可视区域 top: -9999px; left:-9999px; 特点：元素不可见，不影响页面布局

## 清除浮动的方式有哪几种？

清除浮动是为了解决浮动元素引起的父元素高度塌陷问题。以下是几种清除浮动的常见方式：

1. **使用空的块级元素清除浮动（Empty Block Method）：**
   - 在浮动元素后面插入一个空的块级元素，并对其应用`clear`属性。

   ```html
   <div style="clear: both;"></div>
   ```

   或者使用CSS类：

   ```css
   .clearfix::after {
     content: "";
     display: table;
     clear: both;
   }
   ```

   然后将这个类应用于需要清除浮动的容器元素：

   ```html
   <div class="clearfix">
     <!-- 浮动元素在这里 -->
   </div>
   ```

2. **使用伪元素清除浮动（:after伪元素）：**
   - 利用`:after`伪元素创建一个空元素，应用`clear`属性。

   ```css
   .clearfix::after {
     content: "";
     display: table;
     clear: both;
   }
   ```

   然后将这个类应用于需要清除浮动的容器元素。

3. **使用父元素触发BFC（Block Formatting Context）：**
   - 通过给父元素应用`overflow: hidden;` 或 `overflow: auto;` 触发BFC，来清除浮动。

   ```css
   .clearfix {
     overflow: hidden;
   }
   ```

   或者：

   ```css
   .clearfix {
     overflow: auto;
   }
   ```

   注意：这种方法会触发BFC，可能会影响盒模型和布局。

4. **使用清除浮动的类（clearfix class）：**
   - 使用专门设计的清除浮动的类，通常被称为clearfix类，其中包含适当的样式规则，如第一种方法中的样式。

   ```css
   .clearfix::after {
     content: "";
     display: table;
     clear: both;
   }
   ```

   然后将这个类应用于需要清除浮动的容器元素。

## 如果要做优化，CSS提高性能的方法有哪些？

实现方式有很多种，主要有如下：

1、内联首屏关键CSS：通过内联css关键代码能够使浏览器在下载完html后就能立刻渲染

2、异步加载CSS：

3、资源压缩：利用webpack等模块化工具，将css代码进行压缩，使文件变小，大大降低了浏览器的加载时间

4、合理使用选择器：不要嵌套使用过多复杂选择器

5、减少使用昂贵的属性：在页面发生重绘的时候，昂贵属性如box-shadow/border-radius/filter/透明度/:nth-child等，会降低浏览器的渲染性能

6、不要使用@import：@import会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时

## 什么是响应式设计？响应式设计的基本原理是什么？如何做？

响应式网站设计是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整

响应式设计的基本原理：通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有meta声明viewport

实现响应式布局的方式有如下：1、媒体查询 2、百分比 3、vw/vh 4、rem

媒体查询语法：

```css
@mediascreen (min-width: 375px) and (max-width: 600px) {
  body {
    font-size: 18px;
  }
}
```

响应式布局优点：1、面对不同分辨率设备灵活性强2、能够快捷解决多设备显示适应问题

缺点：

1、仅适用布局、信息、框架并不复杂的部门类型网站

2、兼容各种设备工作量大，效率低下

## 如何实现单行／多行文本溢出的省略样式？

一、单行文本溢出省略

1、text-overflow: ellipsis：规定当文本溢出时，显示省略符号来代表被修剪的文本

2、white-space:nowrap：设置文字在一行显示，不能换行

3、overflow:hidden：文字长度超出限定宽度，则隐藏超出的内容

二、多行文本溢出省略

基于行数截断

-webkit-line-clamp:2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）

display:-webkit-box：和1结合使用，将对象作为弹性伸缩盒子模型显示

-webkit-box-orient:vertical：和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式

overflow:hidden：文本溢出限定的宽度就隐藏内容

text-overflow:ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本

## 如何使用css完成视差滚动效果?

视差滚动（Parallax Scrolling）是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验

可以使用transform:translate3D来实现

transform:css3 属性，可以对元素进行变换(2d/3d)，包括平移 translate,旋转 rotate,缩放 scale,

perspective:css3 属性，当元素涉及 3d 变换时，perspective 可以定义我们眼睛看到的 3d 立体效果，即空间感

这种方式实现视觉差动的原理如下：

1、容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，

2、子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

3、滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果

## CSS如何画一个三角形？原理是什么？

```css
/*记忆口诀：盒子宽高均为零，三面边框皆透明。 */
div:after{
    position: absolute;
    width: 0px;
    height: 0px;
    content: " ";
    border-right: 100px solid transparent;
    border-top: 100px solid #ff0;
    border-left: 100px solid transparent;
    border-bottom: 100px solid transparent;
}
```

## 让Chrome支持小于12px的文字方式有哪些？区别？

1、zoom

zoom的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸

其支持的类型有：

zoom:50%，表示缩小到原来的一半

zoom:0.5，表示缩小到原来的一半

2、-webkit-transform:scale()

针对chrome浏览器,加webkit前缀，用transform:scale()这个属性进行放缩

3、-webkit-text-size-adjust:none

该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小

## 说说对Css预编语言的理解？有哪些区别?

Css作为一门标记性语言，语法相对简单，但同时也带来一些问题。需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，Css预处理器便是针对上述问题的解决方案

Css预编译语言在前端里面有三大优秀的预编处理器，分别是：

1、sass 2、less 3、stylus

变量：less声明的变量必须以@开头，后面紧跟变量名和变量值，而且变量名和变量值需要使用冒号:分隔开

嵌套：三者的嵌套语法都是一致的

作用域：Css 预编译器把变量赋予作用域，也就是存在生命周期。就像 js一样，它会先从局部作用域查找变量，依次向上级作用域查找

混入：Mixins可以将一部分样式抽出，作为单独定义的模块，被很多选择器重复使用

代码模块化：模块化就是将Css代码分成一个个模块

使用方法：

@import './common';
