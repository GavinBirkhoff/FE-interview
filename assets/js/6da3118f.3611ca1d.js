"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[9193],{8781:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(3274),r=t(2023);const i={},o="\u547d\u4ee4\u6a21\u5f0f",c={id:"pattern/14",title:"\u547d\u4ee4\u6a21\u5f0f",description:"\u547d\u4ee4\u6a21\u5f0f\uff08Command Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u5c06\u8bf7\u6c42\u5c01\u88c5\u6210\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4ece\u800c\u5141\u8bb8\u4f7f\u7528\u4e0d\u540c\u7684\u8bf7\u6c42\u3001\u961f\u5217\u6216\u8005\u65e5\u5fd7\u6765\u53c2\u6570\u5316\u5176\u4ed6\u5bf9\u8c61\uff0c\u5e76\u4e14\u80fd\u591f\u652f\u6301\u53ef\u64a4\u9500\u7684\u64cd\u4f5c\u3002",source:"@site/docs/pattern/14.md",sourceDirName:"pattern",slug:"/pattern/14",permalink:"/FE-interview/docs/pattern/14",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/pattern/14.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5efa\u9020\u8005\u6a21\u5f0f",permalink:"/FE-interview/docs/pattern/13"},next:{title:"\u804c\u8d23\u94fe\u6a21\u5f0f",permalink:"/FE-interview/docs/pattern/15"}},l={},d=[];function h(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u547d\u4ee4\u6a21\u5f0f",children:"\u547d\u4ee4\u6a21\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u4ee4\u6a21\u5f0f\uff08Command Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u5c06\u8bf7\u6c42\u5c01\u88c5\u6210\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4ece\u800c\u5141\u8bb8\u4f7f\u7528\u4e0d\u540c\u7684\u8bf7\u6c42\u3001\u961f\u5217\u6216\u8005\u65e5\u5fd7\u6765\u53c2\u6570\u5316\u5176\u4ed6\u5bf9\u8c61\uff0c\u5e76\u4e14\u80fd\u591f\u652f\u6301\u53ef\u64a4\u9500\u7684\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u4ee4\u6a21\u5f0f\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u89d2\u8272\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u547d\u4ee4\uff08Command\uff09\uff1a"})," \u5b9a\u4e49\u4e86\u4e00\u4e2a\u62bd\u8c61\u63a5\u53e3\uff0c\u7528\u4e8e\u5c01\u88c5\u5177\u4f53\u547d\u4ee4\u7684\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5177\u4f53\u547d\u4ee4\uff08Concrete Command\uff09\uff1a"})," \u5b9e\u73b0\u4e86\u547d\u4ee4\u63a5\u53e3\uff0c\u8d1f\u8d23\u5177\u4f53\u547d\u4ee4\u7684\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8c03\u7528\u8005\uff08Invoker\uff09\uff1a"})," \u8bf7\u6c42\u7684\u53d1\u9001\u8005\uff0c\u8d1f\u8d23\u8c03\u7528\u547d\u4ee4\u5bf9\u8c61\u6267\u884c\u8bf7\u6c42\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u6536\u8005\uff08Receiver\uff09\uff1a"})," \u77e5\u9053\u5982\u4f55\u6267\u884c\u4e00\u4e2a\u8bf7\u6c42\u76f8\u5173\u7684\u64cd\u4f5c\uff0c\u5b9e\u73b0\u4e86\u5b9e\u9645\u7684\u4e1a\u52a1\u903b\u8f91\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684 JavaScript \u793a\u4f8b\uff0c\u6f14\u793a\u4e86\u547d\u4ee4\u6a21\u5f0f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"// \u547d\u4ee4\u63a5\u53e3\nclass Command {\n  execute() {}\n}\n\n// \u5177\u4f53\u547d\u4ee4 - \u5f00\u706f\nclass LightOnCommand extends Command {\n  constructor(light) {\n    super();\n    this.light = light;\n  }\n\n  execute() {\n    this.light.turnOn();\n  }\n}\n\n// \u5177\u4f53\u547d\u4ee4 - \u5173\u706f\nclass LightOffCommand extends Command {\n  constructor(light) {\n    super();\n    this.light = light;\n  }\n\n  execute() {\n    this.light.turnOff();\n  }\n}\n\n// \u63a5\u6536\u8005\nclass Light {\n  turnOn() {\n    console.log('Light is ON');\n  }\n\n  turnOff() {\n    console.log('Light is OFF');\n  }\n}\n\n// \u8c03\u7528\u8005\nclass RemoteControl {\n  constructor() {\n    this.command = null;\n  }\n\n  setCommand(command) {\n    this.command = command;\n  }\n\n  pressButton() {\n    this.command.execute();\n  }\n}\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\nconst light = new Light();\nconst lightOnCommand = new LightOnCommand(light);\nconst lightOffCommand = new LightOffCommand(light);\n\nconst remote = new RemoteControl();\n\nremote.setCommand(lightOnCommand);\nremote.pressButton();\n// Output: Light is ON\n\nremote.setCommand(lightOffCommand);\nremote.pressButton();\n// Output: Light is OFF\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"Command"})," \u662f\u547d\u4ee4\u63a5\u53e3\uff0c",(0,s.jsx)(e.code,{children:"LightOnCommand"})," \u548c ",(0,s.jsx)(e.code,{children:"LightOffCommand"})," \u662f\u5177\u4f53\u547d\u4ee4\uff0c",(0,s.jsx)(e.code,{children:"Light"})," \u662f\u63a5\u6536\u8005\uff0c\u8d1f\u8d23\u5b9e\u9645\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u3002",(0,s.jsx)(e.code,{children:"RemoteControl"})," \u662f\u8c03\u7528\u8005\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u547d\u4ee4\uff0c\u5e76\u901a\u8fc7\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"pressButton"})," \u65b9\u6cd5\u6267\u884c\u8fd9\u4e9b\u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u4ee4\u6a21\u5f0f\u7684\u4f18\u70b9\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u89e3\u8026\u8c03\u7528\u8005\u548c\u63a5\u6536\u8005\uff1a"})," \u8c03\u7528\u8005\u65e0\u9700\u77e5\u9053\u63a5\u6536\u8005\u7684\u5b9e\u9645\u5b9e\u73b0\uff0c\u53ea\u9700\u8981\u77e5\u9053\u5982\u4f55\u8c03\u7528\u547d\u4ee4\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53ef\u6269\u5c55\u6027\uff1a"})," \u53ef\u4ee5\u65b9\u4fbf\u5730\u6dfb\u52a0\u65b0\u7684\u547d\u4ee4\u7c7b\uff0c\u800c\u4e0d\u5f71\u54cd\u5176\u4ed6\u90e8\u5206\u7684\u4ee3\u7801\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u652f\u6301\u64a4\u9500\u548c\u6062\u590d\uff1a"})," \u53ef\u4ee5\u4fdd\u5b58\u547d\u4ee4\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u4ece\u800c\u652f\u6301\u64a4\u9500\u548c\u6062\u590d\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u547d\u4ee4\u6a21\u5f0f\u9002\u7528\u4e8e\u9700\u8981\u5c06\u8bf7\u6c42\u53d1\u9001\u8005\u548c\u63a5\u6536\u8005\u89e3\u8026\u7684\u573a\u666f\uff0c\u4ee5\u53ca\u9700\u8981\u652f\u6301\u64a4\u9500\u3001\u6062\u590d\u7b49\u64cd\u4f5c\u7684\u573a\u666f\u3002"})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},2023:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(9474);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);