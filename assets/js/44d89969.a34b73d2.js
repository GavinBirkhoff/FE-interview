"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[9046],{5937:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=r(3274),i=r(2023);const c={},o="docker\u7f51\u7edc",d={id:"devops/docker/5",title:"docker\u7f51\u7edc",description:"Docker \u7f51\u7edc\u662f\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u5bb9\u5668\u7684\u865a\u62df\u7f51\u7edc\u57fa\u7840\u8bbe\u65bd\uff0c\u5b83\u5141\u8bb8\u5bb9\u5668\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\uff0c\u4ee5\u53ca\u5bb9\u5668\u4e0e\u5bbf\u4e3b\u673a\u6216\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\u3002Docker \u63d0\u4f9b\u4e86\u591a\u79cd\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\u548c\u7f51\u7edc\u6a21\u5f0f\uff0c\u4f7f\u60a8\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7684\u9700\u6c42\u9009\u62e9\u9002\u5408\u7684\u7f51\u7edc\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e Docker \u7f51\u7edc\u7684\u8be6\u7ec6\u89e3\u91ca\uff1a",source:"@site/docs/devops/docker/5.md",sourceDirName:"devops/docker",slug:"/devops/docker/5",permalink:"/FE-interview/docs/devops/docker/5",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/devops/docker/5.md",tags:[],version:"current",frontMatter:{},sidebar:"devops",previous:{title:"Docker \u6570\u636e\u5377",permalink:"/FE-interview/docs/devops/docker/4"},next:{title:"Linux",permalink:"/FE-interview/docs/category/linux-1"}},t={},l=[];function h(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"docker\u7f51\u7edc",children:"docker\u7f51\u7edc"}),"\n",(0,s.jsx)(e.p,{children:"Docker \u7f51\u7edc\u662f\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u5bb9\u5668\u7684\u865a\u62df\u7f51\u7edc\u57fa\u7840\u8bbe\u65bd\uff0c\u5b83\u5141\u8bb8\u5bb9\u5668\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\uff0c\u4ee5\u53ca\u5bb9\u5668\u4e0e\u5bbf\u4e3b\u673a\u6216\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\u3002Docker \u63d0\u4f9b\u4e86\u591a\u79cd\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\u548c\u7f51\u7edc\u6a21\u5f0f\uff0c\u4f7f\u60a8\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7684\u9700\u6c42\u9009\u62e9\u9002\u5408\u7684\u7f51\u7edc\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e Docker \u7f51\u7edc\u7684\u8be6\u7ec6\u89e3\u91ca\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff08Network Namespace\uff09"}),"\uff1a\u5728 Linux \u4e2d\uff0c\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u3002\u8fd9\u610f\u5473\u7740\u5bb9\u5668\u53ef\u4ee5\u5177\u6709\u81ea\u5df1\u7684\u7f51\u7edc\u63a5\u53e3\u3001IP \u5730\u5740\u3001\u8def\u7531\u8868\u548c\u7f51\u7edc\u89c4\u5219\uff0c\u4e0e\u5176\u4ed6\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u9694\u79bb\u5f00\u6765\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\uff08Network Drivers\uff09"}),"\uff1aDocker \u652f\u6301\u591a\u79cd\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u4e00\u4e9b\u5e38\u89c1\u7684\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\u5305\u62ec\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Bridge \u9a71\u52a8\uff08bridge\uff09"}),"\uff1a\u8fd9\u662f\u9ed8\u8ba4\u7684\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\uff0c\u521b\u5efa\u4e00\u4e2a\u6865\u63a5\u7f51\u7edc\uff0c\u5bb9\u5668\u53ef\u4ee5\u8fde\u63a5\u5230\u8be5\u7f51\u7edc\u5e76\u901a\u8fc7 NAT \u4e0e\u5916\u90e8\u7f51\u7edc\u901a\u4fe1\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Host \u9a71\u52a8\uff08host\uff09"}),"\uff1a\u5bb9\u5668\u5171\u4eab\u4e3b\u673a\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4e0e\u4e3b\u673a\u4e0a\u7684\u5176\u4ed6\u670d\u52a1\u76f4\u63a5\u901a\u4fe1\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u7aef\u53e3\u6620\u5c04\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Overlay \u9a71\u52a8\uff08overlay\uff09"}),"\uff1a\u7528\u4e8e\u8de8\u591a\u4e2a\u4e3b\u673a\u7684\u5bb9\u5668\u901a\u4fe1\uff0c\u9002\u7528\u4e8e Docker Swarm \u96c6\u7fa4\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Macvlan \u9a71\u52a8\uff08macvlan\uff09"}),"\uff1a\u5141\u8bb8\u6bcf\u4e2a\u5bb9\u5668\u5206\u914d\u4e00\u4e2a MAC \u5730\u5740\uff0c\u4f7f\u5bb9\u5668\u770b\u8d77\u6765\u50cf\u662f\u4e3b\u673a\u4e0a\u7684\u4e00\u4e2a\u7269\u7406\u8bbe\u5907\uff0c\u9002\u7528\u4e8e\u9700\u8981\u5bb9\u5668\u4e0e\u5c40\u57df\u7f51\u4e2d\u7684\u5176\u4ed6\u8bbe\u5907\u901a\u4fe1\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7f51\u7edc\u6a21\u5f0f\uff08Network Modes\uff09"}),"\uff1a\u5728\u521b\u5efa\u5bb9\u5668\u65f6\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u8fde\u63a5\u5230\u7279\u5b9a\u7684\u7f51\u7edc\u6a21\u5f0f\u3002\u5e38\u89c1\u7684\u7f51\u7edc\u6a21\u5f0f\u5305\u62ec\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u9ed8\u8ba4\u6a21\u5f0f\uff08bridge\uff09"}),"\uff1a\u5bb9\u5668\u8fde\u63a5\u5230\u9ed8\u8ba4\u7684\u6865\u63a5\u7f51\u7edc\uff0c\u53ef\u4ee5\u4f7f\u7528\u5bb9\u5668\u540d\u79f0\u6216 ID \u76f4\u63a5\u901a\u4fe1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e3b\u673a\u4e0a\u7684 IP \u5730\u5740\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4e3b\u673a\u6a21\u5f0f\uff08host\uff09"}),"\uff1a\u5bb9\u5668\u5171\u4eab\u4e3b\u673a\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4e0e\u4e3b\u673a\u4e0a\u7684\u5176\u4ed6\u670d\u52a1\u76f4\u63a5\u901a\u4fe1\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u7aef\u53e3\u6620\u5c04\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u65e0\u7f51\u7edc\u6a21\u5f0f\uff08none\uff09"}),"\uff1a\u5bb9\u5668\u4e0d\u8fde\u63a5\u5230\u4efb\u4f55\u7f51\u7edc\uff0c\u65e0\u6cd5\u4e0e\u5916\u90e8\u7f51\u7edc\u901a\u4fe1\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49\u6865\u63a5\u6a21\u5f0f\uff08user-defined bridge\uff09"}),"\uff1a\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u6865\u63a5\u7f51\u7edc\uff0c\u5e76\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u8be5\u7f51\u7edc\uff0c\u5bb9\u5668\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u540d\u79f0\u6216 IP \u5730\u5740\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8fde\u63a5\u5bb9\u5668\u5230\u7f51\u7edc"}),"\uff1a\u60a8\u53ef\u4ee5\u5728\u8fd0\u884c\u5bb9\u5668\u65f6\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"--network"})," \u53c2\u6570\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7279\u5b9a\u7684\u7f51\u7edc\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"docker run -d --name my-container --network my-network my-image\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u5c06\u4f7f ",(0,s.jsx)(e.code,{children:"my-container"})," \u5bb9\u5668\u8fde\u63a5\u5230\u540d\u4e3a ",(0,s.jsx)(e.code,{children:"my-network"})," \u7684\u7f51\u7edc\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7f51\u7edc\u4e92\u901a"}),"\uff1a\u8fde\u63a5\u5230\u540c\u4e00\u7f51\u7edc\u7684\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u540d\u79f0\u8fdb\u884c\u901a\u4fe1\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 IP \u5730\u5740\u3002\u4e0d\u540c\u7f51\u7edc\u4e4b\u95f4\u7684\u5bb9\u5668\u901a\u4fe1\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u7aef\u53e3\u6620\u5c04\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u603b\u7684\u6765\u8bf4\uff0cDocker \u7f51\u7edc\u5141\u8bb8\u5bb9\u5668\u5728\u4e0d\u540c\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u8fdb\u884c\u901a\u4fe1\uff0c\u4f7f\u60a8\u80fd\u591f\u6784\u5efa\u590d\u6742\u7684\u5206\u5e03\u5f0f\u5e94\u7528\u548c\u670d\u52a1\u3002\u901a\u8fc7\u9009\u62e9\u9002\u5f53\u7684\u7f51\u7edc\u9a71\u52a8\u7a0b\u5e8f\u548c\u7f51\u7edc\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u6ee1\u8db3\u4e0d\u540c\u5e94\u7528\u573a\u666f\u7684\u7f51\u7edc\u9700\u6c42\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},2023:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>d});var s=r(9474);const i={},c=s.createContext(i);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);