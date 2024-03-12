"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[5110],{3222:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(3274),c=s(2023);const r={},l="\u51fd\u6570\u4e00\u7b49\u529f\u81e3",d={id:"basic/javascript/13",title:"\u51fd\u6570\u4e00\u7b49\u529f\u81e3",description:"TODO",source:"@site/docs/basic/javascript/13.md",sourceDirName:"basic/javascript",slug:"/basic/javascript/13",permalink:"/FE-interview/docs/basic/javascript/13",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/basic/javascript/13.md",tags:[],version:"current",frontMatter:{},sidebar:"basic",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/FE-interview/docs/basic/javascript/12"},next:{title:"Websocket",permalink:"/FE-interview/docs/basic/javascript/14"}},t={},o=[{value:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f18\u5316\u548c\u5c3e\u9012\u5f52\uff1f",id:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f18\u5316\u548c\u5c3e\u9012\u5f52",level:2},{value:"ES6\u7bad\u5934\u51fd\u6570\u7684\u7279\u6027",id:"es6\u7bad\u5934\u51fd\u6570\u7684\u7279\u6027",level:2},{value:"arguments",id:"arguments",level:2},{value:"\u7bad\u5934\u51fd\u6570\u83b7\u53d6arguments",id:"\u7bad\u5934\u51fd\u6570\u83b7\u53d6arguments",level:2},{value:"\u4f7f\u7528\u7bad\u5934\u51fd\u6570(arrow functions)\u7684\u4f18\u70b9\u662f\u4ec0\u4e48\uff1f",id:"\u4f7f\u7528\u7bad\u5934\u51fd\u6570arrow-functions\u7684\u4f18\u70b9\u662f\u4ec0\u4e48",level:2},{value:"\u8bf4\u8bf4async\u51fd\u6570",id:"\u8bf4\u8bf4async\u51fd\u6570",level:2},{value:"\u5982\u679c new \u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837",id:"\u5982\u679c-new-\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837",level:2},{value:"new \u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4",id:"new-\u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4",level:2},{value:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\uff0c\u4f7f\u7528\u5c3e\u8c03\u7528\u6709\u4ec0\u4e48\u597d\u5904\uff1f",id:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f7f\u7528\u5c3e\u8c03\u7528\u6709\u4ec0\u4e48\u597d\u5904",level:2},{value:"\u5982\u4f55\u786e\u4fdd\u4f60\u7684\u6784\u9020\u51fd\u6570\u53ea\u80fd\u88abnew\u8c03\u7528\uff0c\u800c\u4e0d\u80fd\u88ab\u666e\u901a\u8c03\u7528\uff1f",id:"\u5982\u4f55\u786e\u4fdd\u4f60\u7684\u6784\u9020\u51fd\u6570\u53ea\u80fd\u88abnew\u8c03\u7528\u800c\u4e0d\u80fd\u88ab\u666e\u901a\u8c03\u7528",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u51fd\u6570\u4e00\u7b49\u529f\u81e3",children:"\u51fd\u6570\u4e00\u7b49\u529f\u81e3"}),"\n",(0,i.jsx)(e.p,{children:"TODO"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f18\u5316\u548c\u5c3e\u9012\u5f52",children:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f18\u5316\u548c\u5c3e\u9012\u5f52\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u5c3e\u8c03\u7528\u6307\u51fd\u6570\u7684\u6700\u540e\u4e00\u6b65\u64cd\u4f5c\u662f\u8c03\u7528\u53e6\u4e00\u4e2a\u51fd\u6570\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"// \u6709\u7684\u5f15\u64ce\u53ef\u4ee5\u505a\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u4f18\u5316\uff0c\u7b80\u5316\u4e86\u51fd\u6570\u7684\u8c03\u7528\u6808\nfunction f() {\n  let m = 1;\n  let n = 2;\n  return g(m + n);\n}\nf();\n\n// \u7b49\u540c\u4e8e\nfunction f() {\n  return g(3);\n}\nf();\n\n// \u7b49\u540c\u4e8e\ng(3);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"function factorial(n, total) {\n  if (n === 1) return total;\n  return factorial(n - 1, n * total);\n}\n\nfactorial(5, 1) // 120\n"})}),"\n",(0,i.jsx)(e.p,{children:'"\u5c3e\u8c03\u7528\u4f18\u5316"\u5bf9\u9012\u5f52\u64cd\u4f5c\u610f\u4e49\u91cd\u5927\uff0c\u6240\u4ee5\u4e00\u4e9b\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u5c06\u5176\u5199\u5165\u4e86\u8bed\u8a00\u89c4\u683c\u3002ES6\u4e5f\u662f\u5982\u6b64\uff0c\u7b2c\u4e00\u6b21\u660e\u786e\u89c4\u5b9a\uff0c\u6240\u6709 ECMAScript \u7684\u5b9e\u73b0\uff0c\u90fd\u5fc5\u987b\u90e8\u7f72"\u5c3e\u8c03\u7528\u4f18\u5316"\u3002\u8fd9\u5c31\u662f\u8bf4\uff0c\u5728 ES6 \u4e2d\uff0c\u53ea\u8981\u4f7f\u7528\u5c3e\u9012\u5f52\uff0c\u5c31\u4e0d\u4f1a\u53d1\u751f\u6808\u6ea2\u51fa\uff0c\u76f8\u5bf9\u8282\u7701\u5185\u5b58\u3002'}),"\n",(0,i.jsx)(e.h2,{id:"es6\u7bad\u5934\u51fd\u6570\u7684\u7279\u6027",children:"ES6\u7bad\u5934\u51fd\u6570\u7684\u7279\u6027"}),"\n",(0,i.jsx)(e.p,{children:"ES6 \u589e\u52a0\u4e86\u7bad\u5934\u51fd\u6570\uff0c\u57fa\u672c\u8bed\u6cd5\u4e3a\nlet func = value => value;\n\u76f8\u5f53\u4e8e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"let func = function (value) {\n  return value;\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b\u5728\u4e8e\uff1a\n1\u3001\u7bad\u5934\u51fd\u6570\u6ca1\u6709 this\uff0c\u6240\u4ee5\u9700\u8981\u901a\u8fc7\u67e5\u627e\u4f5c\u7528\u57df\u94fe\u6765\u786e\u5b9a this \u7684\u503c\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u5982\n\u679c\u7bad\u5934\u51fd\u6570\u88ab\u975e\u7bad\u5934\u51fd\u6570\u5305\u542b\uff0cthis \u7ed1\u5b9a\u7684\u5c31\u662f\u6700\u8fd1\u4e00\u5c42\u975e\u7bad\u5934\u51fd\u6570\u7684 this\uff0c 2\u3001\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 arguments \u5bf9\u8c61\uff0c\u4f46\u662f\u53ef\u4ee5\u8bbf\u95ee\u5916\u56f4\u51fd\u6570\u7684 arguments \u5bf9\u8c61\n3\u3001\u4e0d\u80fd\u901a\u8fc7 new \u5173\u952e\u5b57\u8c03\u7528\uff0c\u540c\u6837\u4e5f\u6ca1\u6709 new.target \u503c\u548c\u539f\u578b"}),"\n",(0,i.jsx)(e.h2,{id:"arguments",children:"arguments"}),"\n",(0,i.jsx)(e.p,{children:"arguments \u662f\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u6709 length \u5c5e\u6027\uff0c\u4e0d\u80fd\u8c03\u7528\u6570\u7ec4\u65b9\u6cd5\n\u53ef\u7528 Array.from()\u8f6c\u6362"}),"\n",(0,i.jsx)(e.h2,{id:"\u7bad\u5934\u51fd\u6570\u83b7\u53d6arguments",children:"\u7bad\u5934\u51fd\u6570\u83b7\u53d6arguments"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u7528\u2026rest \u53c2\u6570\u83b7\u53d6"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u7bad\u5934\u51fd\u6570arrow-functions\u7684\u4f18\u70b9\u662f\u4ec0\u4e48",children:"\u4f7f\u7528\u7bad\u5934\u51fd\u6570(arrow functions)\u7684\u4f18\u70b9\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bf4\u8bf4async\u51fd\u6570",children:"\u8bf4\u8bf4async\u51fd\u6570"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ec0\u4e48\u662f Async \u51fd\u6570\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Async \u51fd\u6570\u662f\u4e00\u79cd\u5f02\u6b65\u51fd\u6570\uff0c\u5b83\u4f7f\u7528 async \u5173\u952e\u5b57\u5728\u51fd\u6570\u524d\u8fdb\u884c\u4fee\u9970\u3002\u5b83\u53ef\u4ee5\u4ee5\u4e00\u79cd\u66f4\u7b80\u5355\u548c\u76f4\u89c2\u7684\u65b9\u5f0f\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\u3002Async \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f7f\u7528 then \u548c catch \u5904\u7406\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"Async \u51fd\u6570\u4e0e Promise \u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Async \u51fd\u6570\u662f Promise \u7684\u4e00\u79cd\u8bed\u6cd5\u7cd6\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u7b80\u5355\u548c\u76f4\u89c2\u7684\u65b9\u5f0f\u6765\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\u3002Promise \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u4ee3\u8868\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u6700\u7ec8\u7ed3\u679c\uff0c\u53ef\u4ee5\u4f7f\u7528 then \u548c catch \u5904\u7406\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u4f55\u5728 Async \u51fd\u6570\u4e2d\u4f7f\u7528 await\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Async \u51fd\u6570\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5173\u952e\u5b57 await \u6765\u7b49\u5f85\u4e00\u4e2a Promise \u5bf9\u8c61\u7684\u89e3\u51b3\u3002\u5f53\u9047\u5230 await \u8868\u8fbe\u5f0f\u65f6\uff0cAsync \u51fd\u6570\u4f1a\u6682\u505c\u6267\u884c\uff0c\u76f4\u5230 Promise \u5bf9\u8c61\u88ab\u89e3\u51b3\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Async \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48\u7c7b\u578b\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Async \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a Promise \u5bf9\u8c61\u3002\u5b83\u53ef\u4ee5\u662f\u89e3\u51b3\u7684 Promise \u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f\u62d2\u7edd\u7684 Promise \u5bf9\u8c61\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e Async \u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsx)(e.li,{children:"\u5728 Async \u51fd\u6570\u4e2d\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u5176\u4ed6\u5f02\u6b65\u51fd\u6570\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Async \u51fd\u6570\u4e2d\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u8fd4\u56de Promise \u5bf9\u8c61\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u4f8b\u5982 fetch\u3001setTimeout\u3001setInterval \u7b49\u7b49\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"6",children:["\n",(0,i.jsx)(e.li,{children:"Async \u51fd\u6570\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f1a\u629b\u51fa\u5f02\u5e38\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53 Async \u51fd\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u6761\u8bed\u53e5\u629b\u51fa\u5f02\u5e38\u65f6\uff0c\u8be5\u51fd\u6570\u5c06\u7acb\u5373\u505c\u6b62\u6267\u884c\u5e76\u8fd4\u56de\u4e00\u4e2a\u62d2\u7edd\u7684 Promise \u5bf9\u8c61\u3002\u8fd9\u4e2a Promise \u5bf9\u8c61\u5c06\u5305\u542b\u629b\u51fa\u7684\u9519\u8bef\u5bf9\u8c61\u3002"}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 Async \u51fd\u6570\uff1f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5f53\u9700\u8981\u5904\u7406\u5f02\u6b65\u4e8b\u4ef6\u65f6\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 Async \u51fd\u6570\uff0c\u56e0\u4e3a Async \u51fd\u6570\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u76f4\u89c2\u548c\u66f4\u6613\u4e8e\u7406\u89e3\u7684\u65b9\u5f0f\u6765\u7f16\u5199\u5f02\u6b65\u4ee3\u7801\u3002\u4f7f\u7528 Async \u51fd\u6570\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u5f02\u6b65\u4ee3\u7801\u7684\u7f16\u5199\u548c\u8c03\u8bd5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5982\u679c-new-\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837",children:"\u5982\u679c new \u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 JavaScript \u4e2d\uff0c\u7bad\u5934\u51fd\u6570\u662f\u901a\u8fc7\u51fd\u6570\u5b57\u9762\u91cf\u5b9a\u4e49\u7684\uff0c\u5b83\u4eec\u6ca1\u6709\u6784\u9020\u51fd\u6570\u3002\u56e0\u6b64\uff0c\u65e0\u8bba\u5982\u4f55\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u5173\u952e\u5b57\u6765\u8c03\u7528\u7bad\u5934\u51fd\u6570\uff0c\u90fd\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u4f60\u5c1d\u8bd5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u5173\u952e\u5b57\u6765\u5b9e\u4f8b\u5316\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u65f6\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"TypeError"})," \u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a\uff0c\u5b83\u4eec\u7ee7\u627f\u4e86\u7236\u4f5c\u7528\u57df\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \u503c\uff0c\u5e76\u4e14\u65e0\u6cd5\u88ab\u6539\u53d8\u3002\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u5173\u952e\u5b57\u6765\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u5e76\u5c06\u51fd\u6570\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \u7ed1\u5b9a\u5230\u8be5\u5bf9\u8c61\u4e0a\uff0c\u4f46\u5bf9\u4e8e\u7bad\u5934\u51fd\u6570\u6765\u8bf4\uff0c\u65e0\u6cd5\u7ed1\u5b9a\u65b0\u7684 ",(0,i.jsx)(e.code,{children:"this"}),"\uff0c\u56e0\u6b64\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5c55\u793a\u4e86\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u5173\u952e\u5b57\u5b9e\u4f8b\u5316\u7bad\u5934\u51fd\u6570\u65f6\u4f1a\u53d1\u751f\u7684\u9519\u8bef\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const ArrowFunc = () => {\n  this.name = 'John'; // \u9519\u8bef\uff1a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 this\n};\n\nconst obj = new ArrowFunc(); // TypeError: ArrowFunc is not a constructor\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u7ed3\u6765\u8bf4\uff0c\u7bad\u5934\u51fd\u6570\u4e0d\u9002\u7528\u4e8e\u88ab\u5b9e\u4f8b\u5316\uff0c\u5b83\u4eec\u66f4\u9002\u5408\u4f5c\u4e3a\u533f\u540d\u51fd\u6570\u6216\u7528\u4e8e\u7b80\u5316\u51fd\u6570\u8bed\u6cd5\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u53ef\u5b9e\u4f8b\u5316\u7684\u51fd\u6570\uff0c\u5e94\u8be5\u4f7f\u7528\u5e38\u89c4\u7684\u51fd\u6570\u58f0\u660e\u6216\u51fd\u6570\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"new-\u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4",children:"new \u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 JavaScript \u4e2d\uff0c\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u64cd\u4f5c\u7b26\u6765\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7684\u5b9e\u4f8b\u65f6\uff0c\u4f1a\u7ecf\u5386\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff1a\u9996\u5148\uff0c\u4e00\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\u4f1a\u88ab\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u8bbe\u7f6e\u539f\u578b\u94fe\u8fde\u63a5\uff1a\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f1a\u88ab\u8bbe\u7f6e\u5176\u539f\u578b\u94fe\uff08",(0,i.jsx)(e.code,{children:"[[Prototype]]"}),"\uff09\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\uff08",(0,i.jsx)(e.code,{children:"Constructor.prototype"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5c06\u6784\u9020\u51fd\u6570\u7684\u4f5c\u7528\u57df\u8d4b\u7ed9\u65b0\u5bf9\u8c61\uff1a",(0,i.jsx)(e.code,{children:"this"})," \u5173\u952e\u5b57\u4f1a\u88ab\u7ed1\u5b9a\u5230\u65b0\u5bf9\u8c61\u4e0a\uff0c\u4f7f\u6784\u9020\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u53ef\u4ee5\u8bbf\u95ee\u548c\u64cd\u4f5c\u65b0\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6267\u884c\u6784\u9020\u51fd\u6570\u4ee3\u7801\uff1a\u6784\u9020\u51fd\u6570\u4f1a\u88ab\u6267\u884c\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"this"})," \u5173\u952e\u5b57\u6765\u5bf9\u65b0\u5bf9\u8c61\u8fdb\u884c\u5c5e\u6027\u8d4b\u503c\u3001\u65b9\u6cd5\u5b9a\u4e49\u7b49\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de\u65b0\u5bf9\u8c61\uff1a\u5982\u679c\u6784\u9020\u51fd\u6570\u4e2d\u6ca1\u6709\u663e\u5f0f\u8fd4\u56de\u5176\u4ed6\u5bf9\u8c61\uff0c\u5219 ",(0,i.jsx)(e.code,{children:"new"})," \u8868\u8fbe\u5f0f\u4f1a\u81ea\u52a8\u8fd4\u56de\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff1b\u5426\u5219\uff0c\u8fd4\u56de\u6784\u9020\u51fd\u6570\u4e2d\u663e\u5f0f\u8fd4\u56de\u7684\u5bf9\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6f14\u793a\u4e86 ",(0,i.jsx)(e.code,{children:"new"})," \u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.sayHello = function() {\n  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);\n};\n\nconst john = new Person('John', 25);\njohn.sayHello(); // \u8f93\u51fa: Hello, my name is John and I'm 25 years old.\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,i.jsx)(e.code,{children:"new Person('John', 25)"})," \u6267\u884c\u8fc7\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61 ",(0,i.jsx)(e.code,{children:"john"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5c06 ",(0,i.jsx)(e.code,{children:"Person.prototype"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"john"})," \u7684\u539f\u578b\u94fe\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5c06\u6784\u9020\u51fd\u6570 ",(0,i.jsx)(e.code,{children:"Person"})," \u7684\u4f5c\u7528\u57df\u8d4b\u7ed9 ",(0,i.jsx)(e.code,{children:"john"}),"\uff0c\u4f7f ",(0,i.jsx)(e.code,{children:"this"})," \u5173\u952e\u5b57\u7ed1\u5b9a\u5230 ",(0,i.jsx)(e.code,{children:"john"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6267\u884c\u6784\u9020\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u5c06\u5c5e\u6027 ",(0,i.jsx)(e.code,{children:"name"})," \u548c ",(0,i.jsx)(e.code,{children:"age"})," \u8d4b\u503c\u7ed9 ",(0,i.jsx)(e.code,{children:"john"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"john"})," \u5bf9\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u6837\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"new"})," \u64cd\u4f5c\u7b26\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"Person"})," \u7684\u5b9e\u4f8b\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u8be5\u5b9e\u4f8b\u8c03\u7528\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\u4f7f\u7528\u5c3e\u8c03\u7528\u6709\u4ec0\u4e48\u597d\u5904",children:"\u4ec0\u4e48\u662f\u5c3e\u8c03\u7528\uff0c\u4f7f\u7528\u5c3e\u8c03\u7528\u6709\u4ec0\u4e48\u597d\u5904\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u5c3e\u8c03\u7528\uff08Tail Call\uff09\u662f\u6307\u51fd\u6570\u5728\u6267\u884c\u7684\u6700\u540e\u4e00\u6b65\u8c03\u7528\u53e6\u4e00\u4e2a\u51fd\u6570\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5c3e\u8c03\u7528\u53d1\u751f\u5728\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u64cd\u4f5c\u4e2d\uff0c\u5e76\u4e14\u6ca1\u6709\u5176\u4ed6\u64cd\u4f5c\u9700\u8981\u6267\u884c\u3002\u5c3e\u8c03\u7528\u53ef\u4ee5\u51fa\u73b0\u5728\u51fd\u6570\u7684\u8fd4\u56de\u8bed\u53e5\u4e2d\uff0c\u6216\u8005\u662f\u51fd\u6570\u8c03\u7528\u8868\u8fbe\u5f0f\u7684\u6700\u540e\u4e00\u90e8\u5206\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5c3e\u8c03\u7528\u4f18\u5316\uff08Tail Call Optimization\uff09\u662f\u4e00\u79cd\u4f18\u5316\u6280\u672f\uff0c\u65e8\u5728\u5728\u51fd\u6570\u8c03\u7528\u65f6\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\u548c\u6808\u7684\u589e\u957f\u3002\u5f53\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u53d1\u751f\u5728\u53e6\u4e00\u4e2a\u51fd\u6570\u7684\u5c3e\u8c03\u7528\u4f4d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u5c06\u5f53\u524d\u51fd\u6570\u7684\u8c03\u7528\u5e27\u66ff\u6362\u4e3a\u88ab\u8c03\u7528\u51fd\u6570\u7684\u8c03\u7528\u5e27\uff0c\u800c\u4e0d\u4f1a\u589e\u52a0\u6808\u7684\u6df1\u5ea6\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6808\u6ea2\u51fa\u9519\u8bef\uff0c\u540c\u65f6\u51cf\u5c11\u4e86\u5185\u5b58\u7684\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5c3e\u8c03\u7528\u4f18\u5316\u7684\u597d\u5904\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u51cf\u5c11\u5185\u5b58\u5360\u7528\uff1a\u7531\u4e8e\u4e0d\u9700\u8981\u4fdd\u5b58\u6bcf\u4e2a\u51fd\u6570\u8c03\u7528\u7684\u4e0a\u4e0b\u6587\uff0c\u5c3e\u8c03\u7528\u4f18\u5316\u53ef\u4ee5\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\u3002\u8fd9\u5bf9\u4e8e\u9012\u5f52\u51fd\u6570\u7279\u522b\u6709\u7528\uff0c\u56e0\u4e3a\u9012\u5f52\u5f80\u5f80\u4f1a\u5bfc\u81f4\u6808\u6ea2\u51fa\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63d0\u9ad8\u6027\u80fd\uff1a\u5c3e\u8c03\u7528\u4f18\u5316\u53ef\u4ee5\u51cf\u5c11\u51fd\u6570\u8c03\u7528\u7684\u5f00\u9500\uff0c\u4f7f\u5f97\u7a0b\u5e8f\u7684\u6267\u884c\u66f4\u52a0\u9ad8\u6548\u3002\u901a\u8fc7\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u8c03\u7528\u5e27\u7684\u521b\u5efa\u548c\u9500\u6bc1\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u8282\u7701\u65f6\u95f4\u548c\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7b80\u5316\u8c03\u8bd5\u548c\u4ee3\u7801\u9605\u8bfb\uff1a\u5c3e\u8c03\u7528\u4f18\u5316\u53ef\u4ee5\u4f7f\u8c03\u7528\u6808\u66f4\u52a0\u7b80\u6d01\u548c\u6e05\u6670\uff0c\u4f7f\u8c03\u8bd5\u548c\u4ee3\u7801\u9605\u8bfb\u66f4\u52a0\u5bb9\u6613\u3002\u56e0\u4e3a\u5728\u5c3e\u8c03\u7528\u4f18\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u8c03\u7528\u6808\u53ea\u4f1a\u4fdd\u7559\u6700\u540e\u4e00\u6b21\u51fd\u6570\u8c03\u7528\u7684\u4fe1\u606f\uff0c\u800c\u4e0d\u4f1a\u5806\u79ef\u5927\u91cf\u7684\u8c03\u7528\u5e27\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5e76\u975e\u6240\u6709\u7684 JavaScript \u5f15\u64ce\u90fd\u5bf9\u5c3e\u8c03\u7528\u8fdb\u884c\u4f18\u5316\u3002\u4e00\u4e9b\u5f15\u64ce\u5bf9\u5c3e\u8c03\u7528\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u800c\u53e6\u4e00\u4e9b\u5f15\u64ce\u53ef\u80fd\u6ca1\u6709\u8fdb\u884c\u4f18\u5316\u3002\u56e0\u6b64\uff0c\u5728\u7f16\u5199\u4ee3\u7801\u65f6\uff0c\u4e0d\u80fd\u4f9d\u8d56\u4e8e\u5c3e\u8c03\u7528\u4f18\u5316\uff0c\u800c\u5e94\u8be5\u4f7f\u7528\u5176\u4ed6\u65b9\u6cd5\u6765\u907f\u514d\u6808\u6ea2\u51fa\u95ee\u9898\uff0c\u4f8b\u5982\u4f7f\u7528\u8fed\u4ee3\u66ff\u4ee3\u9012\u5f52\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u7ed3\u8d77\u6765\uff0c\u5c3e\u8c03\u7528\u662f\u6307\u51fd\u6570\u5728\u6267\u884c\u7684\u6700\u540e\u4e00\u6b65\u8c03\u7528\u53e6\u4e00\u4e2a\u51fd\u6570\u3002\u5c3e\u8c03\u7528\u4f18\u5316\u53ef\u4ee5\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\u548c\u6808\u7684\u589e\u957f\uff0c\u63d0\u9ad8\u6027\u80fd\uff0c\u5e76\u7b80\u5316\u8c03\u8bd5\u548c\u4ee3\u7801\u9605\u8bfb\u3002\u5c3d\u7ba1\u4e0d\u662f\u6240\u6709\u7684 JavaScript \u5f15\u64ce\u90fd\u652f\u6301\u5c3e\u8c03\u7528\u4f18\u5316\uff0c\u4f46\u5728\u9012\u5f52\u51fd\u6570\u7b49\u60c5\u51b5\u4e0b\uff0c\u5c3d\u91cf\u907f\u514d\u6808\u6ea2\u51fa\u9519\u8bef\u4ecd\u7136\u662f\u4e00\u4e2a\u597d\u7684\u7f16\u7a0b\u5b9e\u8df5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5982\u4f55\u786e\u4fdd\u4f60\u7684\u6784\u9020\u51fd\u6570\u53ea\u80fd\u88abnew\u8c03\u7528\u800c\u4e0d\u80fd\u88ab\u666e\u901a\u8c03\u7528",children:"\u5982\u4f55\u786e\u4fdd\u4f60\u7684\u6784\u9020\u51fd\u6570\u53ea\u80fd\u88abnew\u8c03\u7528\uff0c\u800c\u4e0d\u80fd\u88ab\u666e\u901a\u8c03\u7528\uff1f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"function MyClass() {\n  // \u786e\u4fdd\u901a\u8fc7 new \u8c03\u7528, \u5728ES6\u540e\u5efa\u8bae\u53ea\u7528 new.target\u6765\u5224\u65ad\n  if (!(this instanceof MyClass)) {\n    throw new Error('MyClass must be instantiated with new');\n  }\n\n  // \u6784\u9020\u51fd\u6570\u7684\u5176\u4ed6\u4ee3\u7801...\n}\n\n// \u6b63\u786e\u7684\u7528\u6cd5\nconst obj = new MyClass();\n\n// \u9519\u8bef\u7684\u7528\u6cd5\nconst obj2 = MyClass(); // \u8fd9\u91cc\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\n"})})]})}function a(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},2023:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var i=s(9474);const c={},r=i.createContext(c);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);