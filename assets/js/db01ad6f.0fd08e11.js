"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[9311],{6522:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=t(3274),r=t(2023);const s={},c="\u4eab\u5143\u6a21\u5f0f",o={id:"pattern/11",title:"\u4eab\u5143\u6a21\u5f0f",description:"\u4eab\u5143\u6a21\u5f0f\uff08Flyweight Pattern\uff09\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u65e8\u5728\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u6765\u6700\u5c0f\u5316\u5185\u5b58\u6216\u8ba1\u7b97\u5f00\u9500\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u5728\u4eab\u5143\u6a21\u5f0f\u4e2d\uff0c\u5bf9\u8c61\u88ab\u5206\u4e3a\u4e24\u79cd\u72b6\u6001\uff1a\u5185\u90e8\u72b6\u6001\u548c\u5916\u90e8\u72b6\u6001\u3002\u5185\u90e8\u72b6\u6001\u5b58\u50a8\u5728\u4eab\u5143\u5bf9\u8c61\u5185\u90e8\uff0c\u800c\u5916\u90e8\u72b6\u6001\u5219\u7531\u5ba2\u6237\u7aef\u4f20\u9012\u8fdb\u6765\u3002",source:"@site/docs/pattern/11.md",sourceDirName:"pattern",slug:"/pattern/11",permalink:"/FE-interview/docs/pattern/11",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/pattern/11.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f",permalink:"/FE-interview/docs/pattern/10"},next:{title:"\u5916\u89c2\u6a21\u5f0f",permalink:"/FE-interview/docs/pattern/12"}},l={},h=[];function a(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u4eab\u5143\u6a21\u5f0f",children:"\u4eab\u5143\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u4eab\u5143\u6a21\u5f0f\uff08Flyweight Pattern\uff09\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u65e8\u5728\u901a\u8fc7\u5171\u4eab\u5bf9\u8c61\u6765\u6700\u5c0f\u5316\u5185\u5b58\u6216\u8ba1\u7b97\u5f00\u9500\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002\u5728\u4eab\u5143\u6a21\u5f0f\u4e2d\uff0c\u5bf9\u8c61\u88ab\u5206\u4e3a\u4e24\u79cd\u72b6\u6001\uff1a\u5185\u90e8\u72b6\u6001\u548c\u5916\u90e8\u72b6\u6001\u3002\u5185\u90e8\u72b6\u6001\u5b58\u50a8\u5728\u4eab\u5143\u5bf9\u8c61\u5185\u90e8\uff0c\u800c\u5916\u90e8\u72b6\u6001\u5219\u7531\u5ba2\u6237\u7aef\u4f20\u9012\u8fdb\u6765\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6838\u5fc3\u601d\u60f3\u662f\u5c3d\u91cf\u51cf\u5c11\u76f8\u4f3c\u5bf9\u8c61\u7684\u6570\u91cf\uff0c\u901a\u8fc7\u5171\u4eab\u76f8\u540c\u7684\u90e8\u5206\u6765\u51cf\u5c0f\u7cfb\u7edf\u4e2d\u5bf9\u8c61\u7684\u6570\u91cf\uff0c\u4ece\u800c\u964d\u4f4e\u8d44\u6e90\u6d88\u8017\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4eab\u5143\u6a21\u5f0f\u7684\u4e00\u822c\u7ed3\u6784\u548c\u5b9e\u73b0\u8981\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4eab\u5143\u63a5\u53e3\uff08Flyweight\uff09\uff1a"})," \u5b9a\u4e49\u4e86\u5177\u4f53\u4eab\u5143\u7c7b\u7684\u5171\u4eab\u63a5\u53e3\uff0c\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u53ef\u4ee5\u63a5\u6536\u5e76\u4f5c\u7528\u4e8e\u5916\u90e8\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5177\u4f53\u4eab\u5143\u7c7b\uff08ConcreteFlyweight\uff09\uff1a"})," \u5b9e\u73b0\u4e86\u4eab\u5143\u63a5\u53e3\uff0c\u5305\u542b\u5185\u90e8\u72b6\u6001\uff0c\u53ef\u4ee5\u88ab\u5171\u4eab\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u975e\u5171\u4eab\u5177\u4f53\u4eab\u5143\u7c7b\uff08UnsharedConcreteFlyweight\uff09\uff1a"})," \u4e00\u4e9b\u4e0d\u80fd\u88ab\u5171\u4eab\u7684\u5177\u4f53\u4eab\u5143\u7c7b\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5305\u542b\u4e86\u5916\u90e8\u72b6\u6001\u6216\u8005\u65e0\u6cd5\u5171\u4eab\u7684\u539f\u56e0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u4eab\u5143\u5de5\u5382\uff08FlyweightFactory\uff09\uff1a"})," \u8d1f\u8d23\u521b\u5efa\u548c\u7ba1\u7406\u4eab\u5143\u5bf9\u8c61\uff0c\u7ef4\u62a4\u4e00\u4e2a\u4eab\u5143\u6c60\u7528\u4e8e\u5b58\u50a8\u5df2\u7ecf\u521b\u5efa\u597d\u7684\u4eab\u5143\u5bf9\u8c61\uff0c\u4ee5\u786e\u4fdd\u5bf9\u8c61\u7684\u5171\u4eab\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5ba2\u6237\u7aef\uff08Client\uff09\uff1a"})," \u7ef4\u62a4\u5916\u90e8\u72b6\u6001\uff0c\u5e76\u5c06\u5916\u90e8\u72b6\u6001\u4f20\u9012\u7ed9\u4eab\u5143\u5bf9\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684 JavaScript \u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"// \u4eab\u5143\u63a5\u53e3\nclass Flyweight {\n  operation(extrinsicState) {\n    throw new Error('Operation must be implemented by concrete flyweights');\n  }\n}\n\n// \u5177\u4f53\u4eab\u5143\u7c7b\nclass ConcreteFlyweight extends Flyweight {\n  constructor(intrinsicState) {\n    super();\n    this.intrinsicState = intrinsicState;\n  }\n\n  operation(extrinsicState) {\n    console.log(`Concrete Flyweight: Intrinsic - ${this.intrinsicState}, Extrinsic - ${extrinsicState}`);\n  }\n}\n\n// \u4eab\u5143\u5de5\u5382\nclass FlyweightFactory {\n  constructor() {\n    this.flyweights = {};\n  }\n\n  getFlyweight(key) {\n    if (!this.flyweights[key]) {\n      this.flyweights[key] = new ConcreteFlyweight(key);\n    }\n    return this.flyweights[key];\n  }\n}\n\n// \u5ba2\u6237\u7aef\nconst factory = new FlyweightFactory();\nconst flyweight1 = factory.getFlyweight('A');\nconst flyweight2 = factory.getFlyweight('B');\nconst flyweight3 = factory.getFlyweight('A');\n\nflyweight1.operation('X');\nflyweight2.operation('Y');\nflyweight3.operation('Z');\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.jsx)(e.code,{children:"ConcreteFlyweight"})," \u662f\u5177\u4f53\u4eab\u5143\u7c7b\uff0c",(0,i.jsx)(e.code,{children:"FlyweightFactory"})," \u662f\u4eab\u5143\u5de5\u5382\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u5de5\u5382\u83b7\u53d6\u5177\u4f53\u4eab\u5143\u5bf9\u8c61\uff0c\u5e76\u4f20\u9012\u5916\u90e8\u72b6\u6001\u3002\u4eab\u5143\u5bf9\u8c61\u5185\u90e8\u5305\u542b\u4e86\u5185\u90e8\u72b6\u6001 ",(0,i.jsx)(e.code,{children:"intrinsicState"}),"\uff0c\u800c\u5916\u90e8\u72b6\u6001 ",(0,i.jsx)(e.code,{children:"extrinsicState"})," \u5219\u7531\u5ba2\u6237\u7aef\u4f20\u9012\u3002\u5982\u679c\u591a\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\u76f8\u540c\u7684\u5185\u90e8\u72b6\u6001\uff0c\u4eab\u5143\u5de5\u5382\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u4eab\u5143\u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86\u5bf9\u8c61\u7684\u5171\u4eab\u3002"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},2023:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(9474);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);