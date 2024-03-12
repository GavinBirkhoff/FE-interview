"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[2240],{3205:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>j});var r=n(3274),o=n(2023);const d={},i="\u5386\u53f2\u7248\u672c",t={id:"server/nodejs/2",title:"\u5386\u53f2\u7248\u672c",description:"Node.js \u662f\u4e00\u4e2a\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u7ecf\u8fc7\u591a\u5e74\u7684\u53d1\u5c55\uff0c\u7ecf\u5386\u4e86\u8bb8\u591a\u7248\u672c\u548c\u91cd\u8981\u7684\u53d8\u5316\u3002\u4ee5\u4e0b\u662f Node.js \u7684\u4e00\u4e9b\u91cd\u8981\u5386\u53f2\u7248\u672c\u548c\u53d8\u5316\u7684\u6458\u8981\uff1a",source:"@site/docs/server/nodejs/2.md",sourceDirName:"server/nodejs",slug:"/server/nodejs/2",permalink:"/FE-interview/docs/server/nodejs/2",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/server/nodejs/2.md",tags:[],version:"current",frontMatter:{},sidebar:"server",previous:{title:"\u5e38\u7528nodejs\u5185\u7f6e\u6a21\u5757",permalink:"/FE-interview/docs/server/nodejs/1"},next:{title:"child_process",permalink:"/FE-interview/docs/server/nodejs/3"}},c={},j=[];function l(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u5386\u53f2\u7248\u672c",children:"\u5386\u53f2\u7248\u672c"}),"\n",(0,r.jsx)(s.p,{children:"Node.js \u662f\u4e00\u4e2a\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u7ecf\u8fc7\u591a\u5e74\u7684\u53d1\u5c55\uff0c\u7ecf\u5386\u4e86\u8bb8\u591a\u7248\u672c\u548c\u91cd\u8981\u7684\u53d8\u5316\u3002\u4ee5\u4e0b\u662f Node.js \u7684\u4e00\u4e9b\u91cd\u8981\u5386\u53f2\u7248\u672c\u548c\u53d8\u5316\u7684\u6458\u8981\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 0.10.x"}),"\uff1a\u8fd9\u662f Node.js \u7684\u65e9\u671f\u7248\u672c\uff0c\u5305\u62ec\u57fa\u672c\u7684\u6a21\u5757\u548c\u6838\u5fc3\u529f\u80fd\u3002\u8fd9\u4e2a\u7248\u672c\u5f15\u5165\u4e86 npm \u5305\u7ba1\u7406\u5668\uff0c\u4f7f\u5f97 Node.js \u751f\u6001\u7cfb\u7edf\u66f4\u52a0\u5f3a\u5927\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 0.12.x"}),"\uff1a\u8fd9\u4e2a\u7248\u672c\u5f15\u5165\u4e86 ECMAScript 6 (ES6) \u7684\u652f\u6301\uff0c\u5305\u62ec ",(0,r.jsx)(s.code,{children:"let"})," \u548c ",(0,r.jsx)(s.code,{children:"const"})," \u5173\u952e\u5b57\u3001\u7c7b\u3001\u7bad\u5934\u51fd\u6570\u7b49\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684\u6838\u5fc3\u6a21\u5757\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 4.x"}),"\uff1a\u8fd9\u662f Node.js \u7684\u7b2c\u4e00\u4e2a LTS\uff08\u957f\u671f\u652f\u6301\uff09\u7248\u672c\uff0c\u5b83\u5305\u62ec\u4e86\u8bb8\u591a ES6 \u7279\u6027\uff0c\u6539\u8fdb\u4e86\u6027\u80fd\u548c\u7a33\u5b9a\u6027\uff0c\u540c\u65f6\u4e5f\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684\u6a21\u5757\u548c\u5de5\u5177\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 6.x"}),"\uff1aNode.js 6 \u662f\u53e6\u4e00\u4e2a LTS \u7248\u672c\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u591a\u7684 ES6 \u7279\u6027\u652f\u6301\uff0c\u6539\u8fdb\u4e86\u6027\u80fd\u548c\u7a33\u5b9a\u6027\uff0c\u8fd8\u5305\u62ec\u65b0\u7684\u8c03\u8bd5\u5de5\u5177\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 8.x"}),"\uff1a\u8fd9\u4e2a\u7248\u672c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u6027\u80fd\uff0c\u5f15\u5165\u4e86\u66f4\u591a\u7684 ES6 \u7279\u6027\uff0c\u540c\u65f6\u8fd8\u589e\u52a0\u4e86\u65b0\u7684\u5b9e\u9a8c\u6027\u6a21\u5757\u7cfb\u7edf\u3002\u6b64\u5916\uff0cNode.js 8 \u5f00\u59cb\u9ed8\u8ba4\u542f\u7528 V8 \u5f15\u64ce\u7684 Ignition \u89e3\u91ca\u5668\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 10.x"}),"\uff1aNode.js 10 \u6210\u4e3a\u4e86\u4e00\u4e2a\u65b0\u7684 LTS \u7248\u672c\uff0c\u5b83\u5305\u62ec\u4e86\u66f4\u591a ES6 \u7279\u6027\u548c\u6539\u8fdb\u7684\u6027\u80fd\u3002\u6b64\u7248\u672c\u8fd8\u5f15\u5165\u4e86 ",(0,r.jsx)(s.code,{children:"util.promisify"})," \u5de5\u5177\u51fd\u6570\uff0c\u7528\u4e8e\u5c06\u56de\u8c03\u5f0f\u51fd\u6570\u8f6c\u5316\u4e3a Promises\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 12.x"}),"\uff1aNode.js 12 \u540c\u6837\u662f\u4e00\u4e2a LTS \u7248\u672c\uff0c\u5b83\u7ee7\u7eed\u589e\u52a0\u4e86 ES6 \u7279\u6027\u7684\u652f\u6301\uff0c\u6539\u8fdb\u4e86\u6027\u80fd\uff0c\u4ee5\u53ca\u5f15\u5165\u4e86\u65b0\u7684\u6a21\u5757\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"fs.promises"})," \u548c ",(0,r.jsx)(s.code,{children:"worker_threads"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 14.x"}),"\uff1aNode.js 14 \u6210\u4e3a\u4e86\u65b0\u7684 LTS \u7248\u672c\uff0c\u589e\u52a0\u4e86 ES6 \u7279\u6027\u652f\u6301\uff0c\u6539\u8fdb\u4e86\u6027\u80fd\uff0c\u5e76\u5f15\u5165\u4e86\u5b9e\u9a8c\u6027\u7684 Async Local Storage API\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 16.x"}),'\uff1aNode.js 16 \u5f15\u5165\u4e86\u66f4\u591a ES6 \u7279\u6027\u548c\u6539\u8fdb\uff0c\u5305\u62ec\u91cd\u8981\u7684 V8 \u5f15\u64ce\u66f4\u65b0\u3002\u6b64\u7248\u672c\u8fd8\u9ed8\u8ba4\u542f\u7528\u4e86\u6807\u5fd7\u4e3a "experimental" \u7684 ECMAScript \u6a21\u5757\u3002']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 17.x"}),"\uff1aNode.js 17 \u662f\u4e00\u4e2a\u77ed\u671f\u652f\u6301 (Current) \u7248\u672c\uff0c\u4e8e 2021 \u5e74 10 \u6708\u53d1\u5e03\u3002\u5b83\u5305\u62ec\u4e86\u5bf9 ES6+ \u7279\u6027\u7684\u8fdb\u4e00\u6b65\u652f\u6301\u3001\u6027\u80fd\u6539\u8fdb\uff0c\u4ee5\u53ca\u4e00\u4e9b\u65b0\u7684\u5b9e\u9a8c\u6027\u7279\u6027\u3002Node.js 17 \u5f15\u5165\u4e86\u66f4\u591a V8 \u5f15\u64ce\u7684\u66f4\u65b0\u548c\u6539\u8fdb\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Node.js 18.x"}),"\uff1aNode.js 18 \u4e5f\u662f\u4e00\u4e2a\u77ed\u671f\u652f\u6301 (Current) \u7248\u672c\uff0c\u4e8e 2022 \u5e74 4 \u6708\u53d1\u5e03\u3002\u5b83\u7ee7\u7eed\u6539\u8fdb\u6027\u80fd\u548c\u7a33\u5b9a\u6027\uff0c\u589e\u52a0\u4e86\u5bf9 ES6+ \u7279\u6027\u7684\u652f\u6301\u3002\u6b64\u7248\u672c\u8fd8\u5f15\u5165\u4e86\u65b0\u7684\u5de5\u5177\u548c\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cNode.js \u5728\u6bcf\u4e2a LTS \u7248\u672c\u4e2d\u90fd\u81f4\u529b\u4e8e\u6539\u8fdb\u6027\u80fd\u3001\u7a33\u5b9a\u6027\u548c\u5bf9\u65b0\u7279\u6027\u7684\u652f\u6301\u3002\u5b83\u8fd8\u79ef\u6781\u53c2\u4e0e\u793e\u533a\uff0c\u63a5\u53d7\u53cd\u9988\u5e76\u4fee\u590d bug\uff0c\u4ee5\u786e\u4fdd\u5f00\u53d1\u8005\u6709\u4e00\u4e2a\u7a33\u5b9a\u4e14\u5f3a\u5927\u7684\u5e73\u53f0\u6765\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0a\u53ea\u662f Node.js \u7684\u4e00\u4e9b\u7248\u672c\u548c\u91cd\u8981\u53d8\u5316\u7684\u6982\u89c8\uff0c\u6bcf\u4e2a\u7248\u672c\u90fd\u6709\u8be6\u7ec6\u7684\u53d1\u5e03\u8bf4\u660e\u548c\u53d8\u66f4\u8bb0\u5f55\uff0c\u4f9b\u5f00\u53d1\u8005\u6df1\u5165\u4e86\u89e3\u3002 Node.js \u7684\u7248\u672c\u5386\u53f2\u6301\u7eed\u6f14\u8fdb\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u65ad\u53d1\u5c55\u7684 Web \u548c\u5e94\u7528\u7a0b\u5e8f\u9700\u6c42\u3002"})]})}function x(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2023:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(9474);const o={},d=r.createContext(o);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);