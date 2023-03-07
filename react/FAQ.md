# FAQ

## angularJs和React区别

React 对比 Angular 是思想上的转变，它也并不是一个库，是一种开发理念，组件化，分治的管理，数据与 view 的一体化。它只有一个中心,发出状态，渲染 view，对于虚拟 dom 它并没有提高渲染页面的性能，它提供更多的是利用 jsx 便捷生成 dom 元素，利用组件概念进行分治管理页面每个部分(例如 header section footer slider)

## redux中间件

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步
action ，action 过滤，日志输出，异常报告等功能。常见的中间件： redux-logger：提供日志输出；redux-thunk：处理异步操作；redux-promise：处理异步操作；actionCreator 的返回值是 promise

## redux有什么缺点

TODO

## React组件的划分业务组件技术组件？

根据组件的职责通常把组件分为 UI 组件和容器组件。UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。两者通过 React-Redux 提供 connect 方法联系起来。

## React生命周期函数

TODO

## React性能优化是哪个周期函数？

shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。

## 为什么虚拟dom会提高性能?

## diff算法?

## React性能优化方案

## 简述flux 思想

## React项目用过什么脚手架？Mern? Yeoman?

## 你了解React吗？

## React解决了什么问题？

## React的协议？

## 了解shouldComponentUpdate吗？

## React 的工作原理？

## 使用 React 有何优点？

## 展 示 组 件(Presentational component)和 容 器 组 件(Container component)之间有何不同？

## 类组件(Class component)和函数式组件(Functional component)之间有何不同？

## (组件的)状态(state)和属性(props)之间有何不同？

## 应该在 React 组件的何处发起 Ajax 请求？

## 在 React 中，refs 的作用是什么？

## 何为高阶组件(higher order component)？

## 使用箭头函数(arrow functions)的优点是什么？

## 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象？

## 除了在构造函数中绑定 this，还有其它方式吗？

## 怎么阻止组件的渲染？

## 当渲染一个列表时，何为 key？设置 key 的目的是什么？

## 何为 JSX ？
