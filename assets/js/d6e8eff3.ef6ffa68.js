"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[3438],{4981:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(3274),s=t(2023);const i={},l="Http \u72b6\u6001\u7801",o={id:"network/http/6",title:"Http \u72b6\u6001\u7801",description:"HTTP \u72b6\u6001\u7801\u662f\u5728\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u5668\u54cd\u5e94\u7684\u4e00\u79cd\u8868\u793a\u8bf7\u6c42\u5904\u7406\u7ed3\u679c\u7684\u4e09\u4f4d\u6570\u5b57\u4ee3\u7801\u3002\u5b83\u4eec\u63d0\u4f9b\u4e86\u5173\u4e8e\u8bf7\u6c42\u7684\u5904\u7406\u60c5\u51b5\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u8fdb\u884c\u6709\u6548\u7684\u901a\u4fe1\u3002\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684 HTTP \u72b6\u6001\u7801\u53ca\u5176\u542b\u4e49\uff1a",source:"@site/docs/network/http/6.md",sourceDirName:"network/http",slug:"/network/http/6",permalink:"/FE-interview/docs/network/http/6",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/network/http/6.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Http\u7f13\u5b58",permalink:"/FE-interview/docs/network/http/4"},next:{title:"TCP\u7684\u4e09\u6b21\u63e1\u624b\u548c\u56db\u6b21\u6325\u624b",permalink:"/FE-interview/docs/network/http/7"}},c={},d=[];function h(n){const e={h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"http-\u72b6\u6001\u7801",children:"Http \u72b6\u6001\u7801"}),"\n",(0,r.jsx)(e.p,{children:"HTTP \u72b6\u6001\u7801\u662f\u5728\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u5668\u54cd\u5e94\u7684\u4e00\u79cd\u8868\u793a\u8bf7\u6c42\u5904\u7406\u7ed3\u679c\u7684\u4e09\u4f4d\u6570\u5b57\u4ee3\u7801\u3002\u5b83\u4eec\u63d0\u4f9b\u4e86\u5173\u4e8e\u8bf7\u6c42\u7684\u5904\u7406\u60c5\u51b5\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u8fdb\u884c\u6709\u6548\u7684\u901a\u4fe1\u3002\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684 HTTP \u72b6\u6001\u7801\u53ca\u5176\u542b\u4e49\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"1xx - Informational Responses (\u4fe1\u606f\u54cd\u5e94)\uff1a"})," \u8fd9\u4e9b\u72b6\u6001\u7801\u8868\u793a\u8bf7\u6c42\u5df2\u88ab\u63a5\u6536\uff0c\u670d\u52a1\u5668\u6b63\u5728\u5904\u7406\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"100 Continue\uff1a\u670d\u52a1\u5668\u5df2\u7ecf\u63a5\u6536\u4e86\u8bf7\u6c42\u7684\u5934\u90e8\uff0c\u5ba2\u6237\u7aef\u5e94\u8be5\u7ee7\u7eed\u53d1\u9001\u8bf7\u6c42\u4e3b\u4f53\u3002"}),"\n",(0,r.jsx)(e.li,{children:"101 Switching Protocols\uff1a\u670d\u52a1\u5668\u5df2\u7ecf\u7406\u89e3\u5e76\u63a5\u53d7\u4e86\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u5c06\u5207\u6362\u534f\u8bae\u4ee5\u5b8c\u6210\u5904\u7406\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"2xx - Successful Responses (\u6210\u529f\u54cd\u5e94)\uff1a"})," \u8fd9\u4e9b\u72b6\u6001\u7801\u8868\u793a\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"200 OK\uff1a\u8bf7\u6c42\u6210\u529f\uff0c\u8fd4\u56de\u8bf7\u6c42\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(e.li,{children:"201 Created\uff1a\u8bf7\u6c42\u5df2\u6210\u529f\u5904\u7406\uff0c\u5e76\u5728\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(e.li,{children:"204 No Content\uff1a\u8bf7\u6c42\u6210\u529f\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u5185\u5bb9\uff0c\u901a\u5e38\u7528\u4e8e PUT \u6216 DELETE \u8bf7\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"3xx - Redirection Messages (\u91cd\u5b9a\u5411)\uff1a"})," \u8fd9\u4e9b\u72b6\u6001\u7801\u8868\u793a\u5ba2\u6237\u7aef\u9700\u8981\u91c7\u53d6\u8fdb\u4e00\u6b65\u7684\u52a8\u4f5c\u4ee5\u5b8c\u6210\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"301 Moved Permanently\uff1a\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u6c38\u4e45\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\uff0c\u5ba2\u6237\u7aef\u5e94\u8be5\u66f4\u65b0\u4e66\u7b7e\u3002"}),"\n",(0,r.jsx)(e.li,{children:"302 Found\uff1a\u8bf7\u6c42\u7684\u8d44\u6e90\u4e34\u65f6\u79fb\u52a8\u5230\u5176\u4ed6\u4f4d\u7f6e\uff0c\u5ba2\u6237\u7aef\u5e94\u8be5\u7ee7\u7eed\u4f7f\u7528\u539f\u59cb\u4f4d\u7f6e\u3002"}),"\n",(0,r.jsx)(e.li,{children:"304 Not Modified\uff1a\u8d44\u6e90\u672a\u4fee\u6539\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u7f13\u5b58\u7684\u7248\u672c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"4xx - Client Error Responses (\u5ba2\u6237\u7aef\u9519\u8bef)\uff1a"})," \u8fd9\u4e9b\u72b6\u6001\u7801\u8868\u793a\u5ba2\u6237\u7aef\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u6c42\u5305\u542b\u9519\u8bef\u6216\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"400 Bad Request\uff1a\u8bf7\u6c42\u65e0\u6548\u6216\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"}),"\n",(0,r.jsx)(e.li,{children:"401 Unauthorized\uff1a\u8bf7\u6c42\u9700\u8981\u8eab\u4efd\u9a8c\u8bc1\u3002"}),"\n",(0,r.jsx)(e.li,{children:"403 Forbidden\uff1a\u8bf7\u6c42\u88ab\u670d\u52a1\u5668\u62d2\u7edd\uff0c\u5ba2\u6237\u7aef\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(e.li,{children:"404 Not Found\uff1a\u8bf7\u6c42\u7684\u8d44\u6e90\u4e0d\u5b58\u5728\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"5xx - Server Error Responses (\u670d\u52a1\u5668\u9519\u8bef)\uff1a"})," \u8fd9\u4e9b\u72b6\u6001\u7801\u8868\u793a\u670d\u52a1\u5668\u5728\u5904\u7406\u8bf7\u6c42\u65f6\u51fa\u73b0\u9519\u8bef\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"500 Internal Server Error\uff1a\u670d\u52a1\u5668\u9047\u5230\u4e86\u672a\u77e5\u7684\u5185\u90e8\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(e.li,{children:"502 Bad Gateway\uff1a\u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\uff0c\u4ece\u4e0a\u6e38\u670d\u52a1\u5668\u6536\u5230\u65e0\u6548\u7684\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(e.li,{children:"503 Service Unavailable\uff1a\u670d\u52a1\u5668\u6682\u65f6\u65e0\u6cd5\u5904\u7406\u8bf7\u6c42\uff0c\u901a\u5e38\u662f\u7531\u4e8e\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u53ea\u662f HTTP \u72b6\u6001\u7801\u7684\u4e00\u4e9b\u5e38\u89c1\u793a\u4f8b\u3002\u4e86\u89e3\u8fd9\u4e9b\u72b6\u6001\u7801\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u66f4\u597d\u5730\u7406\u89e3\u8bf7\u6c42\u7684\u5904\u7406\u7ed3\u679c\uff0c\u4ee5\u4fbf\u6839\u636e\u60c5\u51b5\u91c7\u53d6\u9002\u5f53\u7684\u884c\u52a8\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},2023:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var r=t(9474);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);