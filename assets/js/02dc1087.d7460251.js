"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[5946],{2853:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>k});var n=o(3274),c=o(2023);const t={},s="Docker \u7684\u4e09\u5927\u6838\u5fc3\u6982\u5ff5",i={id:"devops/docker/1",title:"Docker \u7684\u4e09\u5927\u6838\u5fc3\u6982\u5ff5",description:"1. Docker \u955c\u50cf\uff08Docker Image\uff09\uff1aDocker \u955c\u50cf\u662f\u7528\u4e8e\u521b\u5efa\u5bb9\u5668\u7684\u6a21\u677f\u3002\u5b83\u5305\u542b\u4e86\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u6587\u4ef6\u7cfb\u7edf\u3001\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u3001\u4f9d\u8d56\u9879\u3001\u5e93\u4ee5\u53ca\u914d\u7f6e\u7b49\u3002\u955c\u50cf\u662f\u4e00\u4e2a\u9759\u6001\u7684\u3001\u53ea\u8bfb\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728 Docker \u4e3b\u673a\u4e0a\u521b\u5efa\u548c\u8fd0\u884c\u5bb9\u5668\u3002",source:"@site/docs/devops/docker/1.md",sourceDirName:"devops/docker",slug:"/devops/docker/1",permalink:"/FE-interview/docs/devops/docker/1",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/devops/docker/1.md",tags:[],version:"current",frontMatter:{},sidebar:"devops",previous:{title:"FAQ?",permalink:"/FE-interview/docs/devops/docker/FAQ"},next:{title:"Docker \u547d\u4ee4",permalink:"/FE-interview/docs/devops/docker/2"}},d={},k=[];function l(e){const r={h1:"h1",li:"li",ol:"ol",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"docker-\u7684\u4e09\u5927\u6838\u5fc3\u6982\u5ff5",children:"Docker \u7684\u4e09\u5927\u6838\u5fc3\u6982\u5ff5"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Docker \u955c\u50cf\uff08Docker Image\uff09\uff1aDocker \u955c\u50cf\u662f\u7528\u4e8e\u521b\u5efa\u5bb9\u5668\u7684\u6a21\u677f\u3002\u5b83\u5305\u542b\u4e86\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u6587\u4ef6\u7cfb\u7edf\u3001\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u3001\u4f9d\u8d56\u9879\u3001\u5e93\u4ee5\u53ca\u914d\u7f6e\u7b49\u3002\u955c\u50cf\u662f\u4e00\u4e2a\u9759\u6001\u7684\u3001\u53ea\u8bfb\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728 Docker \u4e3b\u673a\u4e0a\u521b\u5efa\u548c\u8fd0\u884c\u5bb9\u5668\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Docker \u5bb9\u5668\uff08Docker Container\uff09\uff1aDocker \u5bb9\u5668\u662f\u4ece Docker \u955c\u50cf\u521b\u5efa\u7684\u8fd0\u884c\u5b9e\u4f8b\u3002\u5bb9\u5668\u662f\u53ef\u6267\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u73af\u5883\uff0c\u53ef\u4ee5\u5728\u5176\u4e2d\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5177\u6709\u72ec\u7acb\u7684\u6587\u4ef6\u7cfb\u7edf\u3001\u7f51\u7edc\u548c\u8fdb\u7a0b\u7a7a\u95f4\u3002\u5bb9\u5668\u53ef\u4ee5\u542f\u52a8\u3001\u505c\u6b62\u3001\u6682\u505c\u3001\u5220\u9664\u7b49\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u53d8\u5f97\u66f4\u52a0\u7075\u6d3b\u548c\u53ef\u79fb\u690d\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Docker \u4ed3\u5e93\uff08Docker Registry\uff09\uff1aDocker \u4ed3\u5e93\u662f\u7528\u4e8e\u5b58\u50a8\u548c\u5206\u4eab Docker \u955c\u50cf\u7684\u5730\u65b9\u3002\u5b83\u53ef\u4ee5\u662f\u516c\u5171\u4ed3\u5e93\uff08\u5982 Docker Hub\uff09\u6216\u79c1\u6709\u4ed3\u5e93\u3002\u4ed3\u5e93\u4e2d\u5305\u542b\u4e86\u5404\u79cd\u955c\u50cf\u7684\u96c6\u5408\uff0c\u53ef\u4ee5\u4f9b\u7528\u6237\u4e0b\u8f7d\u548c\u4f7f\u7528\u3002Docker \u955c\u50cf\u4ed3\u5e93\u8fd8\u63d0\u4f9b\u4e86\u7248\u672c\u7ba1\u7406\u3001\u6807\u7b7e\u3001\u6743\u9650\u63a7\u5236\u7b49\u529f\u80fd\uff0c\u4ee5\u4fbf\u6709\u6548\u5730\u7ba1\u7406\u548c\u5171\u4eab\u955c\u50cf\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"\u8fd9\u4e09\u4e2a\u6982\u5ff5\u76f8\u4e92\u5173\u8054\uff0c\u534f\u540c\u5de5\u4f5c\uff0c\u6784\u6210\u4e86 Docker \u6280\u672f\u7684\u6838\u5fc3\u3002Docker \u955c\u50cf\u4f5c\u4e3a\u6a21\u677f\uff0c\u7528\u4e8e\u521b\u5efa Docker \u5bb9\u5668\uff0c\u800c Docker \u5bb9\u5668\u5219\u662f\u955c\u50cf\u7684\u8fd0\u884c\u5b9e\u4f8b\u3002Docker \u4ed3\u5e93\u5219\u7528\u4e8e\u5b58\u50a8\u548c\u5206\u4eab\u955c\u50cf\uff0c\u65b9\u4fbf\u7528\u6237\u83b7\u53d6\u6240\u9700\u7684\u955c\u50cf\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0cDocker \u63d0\u4f9b\u4e86\u4e00\u79cd\u8f7b\u91cf\u7ea7\u3001\u53ef\u79fb\u690d\u3001\u53ef\u6269\u5c55\u7684\u5bb9\u5668\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u3001\u4ea4\u4ed8\u548c\u90e8\u7f72\u66f4\u52a0\u7b80\u5355\u548c\u9ad8\u6548\u3002"})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2023:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>i});var n=o(9474);const c={},t=n.createContext(c);function s(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);