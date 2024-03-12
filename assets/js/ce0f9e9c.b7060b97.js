"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[6187],{7071:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>x,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=i(3274),l=i(2023);const r={},c="Nginx\u5e38\u7528\u64cd\u4f5c",d={id:"devops/nginx/3",title:"Nginx\u5e38\u7528\u64cd\u4f5c",description:"\u67e5\u770bnginx \u5b89\u88c5\u76ee\u5f55",source:"@site/docs/devops/nginx/3.md",sourceDirName:"devops/nginx",slug:"/devops/nginx/3",permalink:"/FE-interview/docs/devops/nginx/3",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/devops/nginx/3.md",tags:[],version:"current",frontMatter:{},sidebar:"devops",previous:{title:"Nginx\u5b89\u88c5",permalink:"/FE-interview/docs/devops/nginx/2"},next:{title:"Shell",permalink:"/FE-interview/docs/category/shell-1"}},x={},h=[{value:"\u67e5\u770bnginx \u5b89\u88c5\u76ee\u5f55",id:"\u67e5\u770bnginx-\u5b89\u88c5\u76ee\u5f55",level:2},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2}];function t(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"nginx\u5e38\u7528\u64cd\u4f5c",children:"Nginx\u5e38\u7528\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u770bnginx-\u5b89\u88c5\u76ee\u5f55",children:"\u67e5\u770bnginx \u5b89\u88c5\u76ee\u5f55"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Mac \u4e0a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNginx \u7684\u5b89\u88c5\u76ee\u5f55\u662f ",(0,s.jsx)(e.code,{children:"/usr/local/nginx"}),"\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6765\u786e\u8ba4 Nginx \u7684\u5b89\u88c5\u76ee\u5f55\uff1a"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:'\u6253\u5f00\u7ec8\u7aef\u5e94\u7528\u7a0b\u5e8f\u3002\u4f60\u53ef\u4ee5\u5728"\u5e94\u7528\u7a0b\u5e8f"\u6587\u4ef6\u5939\u4e2d\u627e\u5230\u5b83\uff0c\u6216\u8005\u4f7f\u7528 Spotlight \u641c\u7d22\u6765\u67e5\u627e\u3002'}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5e76\u6309\u56de\u8f66\u952e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"nginx -V\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u5c06\u663e\u793a Nginx \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u5b89\u88c5\u76ee\u5f55\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Homebrew \u5b89\u88c5\u7684 Nginx\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"brew info nginx"})," \u547d\u4ee4\u6765\u67e5\u770b\u5b89\u88c5\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u5b89\u88c5\u8def\u5f84\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u547d\u4ee4\u8f93\u51fa\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5bfb\u627e ",(0,s.jsx)(e.code,{children:"--prefix="})," \u6216 ",(0,s.jsx)(e.code,{children:"--sbin-path="})," \u8fd9\u6837\u7684\u884c\uff0c\u540e\u9762\u7684\u503c\u5c31\u662f Nginx \u7684\u5b89\u88c5\u76ee\u5f55\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684 Nginx \u547d\u4ee4\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 Nginx\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u505c\u6b62 Nginx\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -s stop\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u91cd\u65b0\u52a0\u8f7d Nginx \u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -s reload\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u68c0\u67e5 Nginx \u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5\u662f\u5426\u6b63\u786e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -t\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u663e\u793a Nginx \u7248\u672c\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -v\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u663e\u793a Nginx \u8be6\u7ec6\u914d\u7f6e\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -V\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u8fdb\u7a0b\u4fe1\u606f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"ps aux | grep nginx\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx -c /path/to/nginx.conf\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5173\u95ed\u7279\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u5bf9\u5e94\u7684nginx\u5b9e\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"kill -s QUIT <PID>\n"})}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},2023:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var s=i(9474);const l={},r=s.createContext(l);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);