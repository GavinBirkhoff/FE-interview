---
sidebar_position: 2
---
# FAQ?

## webSocket如何兼容低浏览器

- Adobe Flash Socket；
- ActiveX HTMLFile (IE) ；
- 基于 multipart 编码发送 XHR；
- 基于长轮询的 XHR；

## 怎么实现图片懒加载？

方式一：使用 loading="lazy", 兼容性一般

```js
<img src="./example.jpg" loading="lazy">
```

方式二：我们通过js监听页面的滚动也能实现。

使用js实现的原理主要是判断当前图片是否到了可视区域：

- 拿到所有的图片 dom 。
- 遍历每个图片判断当前图片是否到了可视区范围内。
- 如果到了就设置图片的 src 属性。
- 绑定 window 的 scroll 事件，对其进行事件监听。
- 在页面初始化的时候，`<img>`图片的src实际上是放在data-src属性上的，当元素处于可视范围内的时候，就把data-src赋值给src属性，完成图片加载。

```js
function lazyload() {
  let viewHeight = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight //获取可视区高度，兼容不同浏览器
  let imgs = document.querySelectorAll('img[data-src]')
  imgs.forEach((item, index) => {
    if (item.dataset.src === '') return

    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    let rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src
      item.removeAttribute('data-src')
    }
  })
}
```

方式三：使用 Intersection Observer API

IntersectionObserver 是浏览器原生提供的构造函数，接受两个参数：callback 是可见性变化时的回调函数，option 是配置对象（该参数可选）。

目标元素的可见性变化时，就会调用观察器的回调函数 callback。callback 一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。

```js
const imgs = document.querySelectorAll('img[data-src]')
const config = {
  rootMargin: '0px',
  threshold: 0,
}
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      let src = img.dataset.src
      if (src) {
        img.src = src
        img.removeAttribute('data-src')
      }
      // 解除观察
      self.unobserve(entry.target)
    }
  })
}, config)

imgs.forEach((image) => {
  observer.observe(image)
})
```

## 需要在本地实现一个聊天室，多个tab页相互通信，不能用websocket，你会怎么做？

TODO
