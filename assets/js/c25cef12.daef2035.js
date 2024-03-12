"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[2776],{3425:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var c=r(3274),i=r(2023);const s={},o="\u5faa\u73af\u904d\u5386",l={id:"basic/javascript/23",title:"\u5faa\u73af\u904d\u5386",description:"js\u5bf9\u8c61\u4e2d\uff0c\u53ef\u679a\u4e3e\u6027\uff08enumerable\uff09\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/basic/javascript/23.md",sourceDirName:"basic/javascript",slug:"/basic/javascript/23",permalink:"/FE-interview/docs/basic/javascript/23",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/basic/javascript/23.md",tags:[],version:"current",frontMatter:{},sidebar:"basic",previous:{title:"js\u52a8\u753b",permalink:"/FE-interview/docs/basic/javascript/22"},next:{title:"\u5f02\u6b65\u7f16\u7a0b",permalink:"/FE-interview/docs/basic/javascript/24"}},d={},t=[{value:"js\u5bf9\u8c61\u4e2d\uff0c\u53ef\u679a\u4e3e\u6027\uff08enumerable\uff09\u662f\u4ec0\u4e48\uff1f",id:"js\u5bf9\u8c61\u4e2d\u53ef\u679a\u4e3e\u6027enumerable\u662f\u4ec0\u4e48",level:2},{value:"forEach\u4e2dreturn\u6709\u6548\u679c\u5417\uff1f\u5982\u4f55\u4e2d\u65adforEach\u5faa\u73af\uff1f",id:"foreach\u4e2dreturn\u6709\u6548\u679c\u5417\u5982\u4f55\u4e2d\u65adforeach\u5faa\u73af",level:2},{value:"forEach\u8df3\u51fa\u5faa\u73af\u4f53",id:"foreach\u8df3\u51fa\u5faa\u73af\u4f53",level:2},{value:"for...in \u548c for...of \u7684\u533a\u522b",id:"forin-\u548c-forof-\u7684\u533a\u522b",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u5faa\u73af\u904d\u5386",children:"\u5faa\u73af\u904d\u5386"}),"\n",(0,c.jsx)(e.h2,{id:"js\u5bf9\u8c61\u4e2d\u53ef\u679a\u4e3e\u6027enumerable\u662f\u4ec0\u4e48",children:"js\u5bf9\u8c61\u4e2d\uff0c\u53ef\u679a\u4e3e\u6027\uff08enumerable\uff09\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u53ef\u679a\u4e3e\uff0cfor...in, Object.keys(), JSON.stringify()\u65e0\u6cd5\u83b7\u53d6\u5176\u503c"}),"\n",(0,c.jsx)(e.h2,{id:"foreach\u4e2dreturn\u6709\u6548\u679c\u5417\u5982\u4f55\u4e2d\u65adforeach\u5faa\u73af",children:"forEach\u4e2dreturn\u6709\u6548\u679c\u5417\uff1f\u5982\u4f55\u4e2d\u65adforEach\u5faa\u73af\uff1f"}),"\n",(0,c.jsx)(e.p,{children:"\u5728forEach\u4e2d\u7528return\u4e0d\u4f1a\u8fd4\u56de\uff0c\u51fd\u6570\u4f1a\u7ee7\u7eed\u6267\u884c\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"foreach\u8df3\u51fa\u5faa\u73af\u4f53",children:"forEach\u8df3\u51fa\u5faa\u73af\u4f53"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u8df3\u51fa\u672c\u6b21\u5faa\u73af"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"forEach \u8df3\u51fa\u672c\u6b21\u5faa\u73af\uff0c\u4f7f\u7528return\n    [1,2,3,4,5].forEach(function(item,index){\n        if(item == 3){\n            return\n        }\n        console.log(3)// item == 3\u65f6\uff0c\u6267\u884c\u4e0d\u5230\u8be5\u90e8\u5206\uff0c\u7ed3\u675f\u672c\u6b21\u5faa\u73af\n    })\n\n"})}),"\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsx)(e.li,{children:"\u8df3\u51fa\u6574\u4e2a\u5faa\u73af"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"forEach \u8df3\u51fa\u6574\u4e2a\u5faa\u73af\uff0c\u9700\u8981\u629b\u51fa\u5f02\u5e38\ntry {\n    [1,2,3,4,5].forEach(function(item,index){\n        if(item == 3){\n            thorw new Error(); //\u7ed3\u675f\u6574\u4f53\u5faa\u73af\n        }\n    })\n} catch(e) {\n\n}\n"})}),"\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsx)(e.li,{children:"\u8df3\u51fa\u5d4c\u5957\u5faa\u73af"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'try {\n    ["a","b","c"].forEach(function(item,index){\n\n        try {\n            [1,2,3,4,5].forEach(function(item,index){\n                if(item == 3){\n                    thorw new Error(); //\u7ed3\u675f\u6574\u4f53\u5faa\u73af\n                }\n            })\n        } finally{}//try\u4e0d\u80fd\u5355\u72ec\u5b58\u5728\n\n        \x3c!--catch(e) {--\x3e\n            //\u5185\u5c42\u7684catch\u4e0d\u80fd\u5b58\u5728\uff0c\u4e0d\u7136\u4f1a\u6355\u83b7\u5f02\u5e38\uff0c\u53ea\u7ed3\u675f\u5185\u5c42forEach\n        \x3c!--}--\x3e\n\n    })\n} catch(e) { //\u5728\u6700\u5916\u5c42\u6355\u83b7\u5f02\u5e38\uff0c\u53ef\u7ed3\u675f\u5d4c\u5957\u5faa\u73af\n\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u4e2d\u65ad\u65b9\u6cd5"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u4f7f\u7528try\u76d1\u89c6\u4ee3\u7801\u5757\uff0c\u5728\u9700\u8981\u4e2d\u65ad\u7684\u5730\u65b9\u629b\u51fa\u5f02\u5e38\u3002"}),"\n",(0,c.jsxs)(e.li,{children:["\u5b98\u65b9\u63a8\u8350\u65b9\u6cd5\uff08\u66ff\u6362\u65b9\u6cd5\uff09\uff1a\u7528every\u548csome\u66ff\u4ee3forEach\u51fd\u6570\u3002","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"every\u5728\u78b0\u5230return false\u7684\u65f6\u5019\uff0c\u4e2d\u6b62\u5faa\u73af\u3002"}),"\n",(0,c.jsx)(e.li,{children:"some\u5728\u78b0\u5230return true\u7684\u65f6\u5019\uff0c\u4e2d\u6b62\u5faa\u73af\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"forin-\u548c-forof-\u7684\u533a\u522b",children:"for...in \u548c for...of \u7684\u533a\u522b"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"for...in"})," \u548c ",(0,c.jsx)(e.code,{children:"for...of"})," \u662f\u4e24\u79cd\u5728 JavaScript \u4e2d\u7528\u4e8e\u8fed\u4ee3\u7684\u5faa\u73af\u8bed\u53e5\uff0c\u5b83\u4eec\u4e4b\u95f4\u6709\u4ee5\u4e0b\u533a\u522b\uff1a"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u7528\u9014\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...in"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...in"})," \u8bed\u53e5\u7528\u4e8e\u8fed\u4ee3\u5bf9\u8c61\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff08\u5305\u62ec\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff09\u3002\u5b83\u901a\u5e38\u7528\u4e8e\u8fed\u4ee3\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u79f0\uff0c\u800c\u4e0d\u662f\u5c5e\u6027\u503c\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...of"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...of"})," \u8bed\u53e5\u7528\u4e8e\u8fed\u4ee3\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u5982\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001Set\u3001Map\u3001Generator \u7b49\uff09\u3002\u5b83\u7528\u4e8e\u83b7\u53d6\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u503c\uff0c\u800c\u4e0d\u662f\u7d22\u5f15\u6216\u5c5e\u6027\u540d\u79f0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u8fed\u4ee3\u987a\u5e8f\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...in"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...in"})," \u5faa\u73af\u6309\u7167\u5bf9\u8c61\u5c5e\u6027\u7684\u63d2\u5165\u987a\u5e8f\u8fed\u4ee3\u3002\u4f46\u7531\u4e8e\u5b83\u4f1a\u904d\u5386\u5bf9\u8c61\u7684\u539f\u578b\u94fe\uff0c\u6240\u4ee5\u65e0\u6cd5\u4fdd\u8bc1\u5c5e\u6027\u7684\u987a\u5e8f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...of"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...of"})," \u5faa\u73af\u6309\u7167\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u8fed\u4ee3\u5668\u89c4\u5219\uff0c\u4ee5\u5b9a\u4e49\u7684\u987a\u5e8f\u4f9d\u6b21\u8fed\u4ee3\u6bcf\u4e2a\u5143\u7d20\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u8fed\u4ee3\u5185\u5bb9\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...in"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...in"})," \u5faa\u73af\u8fd4\u56de\u7684\u662f\u5c5e\u6027\u540d\u79f0\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u79f0\u8bbf\u95ee\u5bf9\u5e94\u7684\u5c5e\u6027\u503c\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...of"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...of"})," \u5faa\u73af\u8fd4\u56de\u7684\u662f\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u503c\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u6bcf\u4e2a\u5143\u7d20\u7684\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u652f\u6301\u7684\u5bf9\u8c61\u7c7b\u578b\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...in"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...in"})," \u5faa\u73af\u9002\u7528\u4e8e\u8fed\u4ee3\u666e\u901a\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u539f\u578b\u94fe\u4e0a\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"for...of"}),"\uff1a",(0,c.jsx)(e.code,{children:"for...of"})," \u5faa\u73af\u9002\u7528\u4e8e\u8fed\u4ee3\u5b9e\u73b0\u4e86\u8fed\u4ee3\u5668\u63a5\u53e3\uff08Iterable \u63a5\u53e3\uff09\u7684\u5bf9\u8c61\uff0c\u5982\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001Set\u3001Map\u3001Generator \u7b49\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"// for...in \u793a\u4f8b\nconst obj = { a: 1, b: 2, c: 3 };\nfor (const prop in obj) {\n  console.log(prop); // \u8f93\u51fa\u5c5e\u6027\u540d\u79f0 a, b, c\n  console.log(obj[prop]); // \u8f93\u51fa\u5c5e\u6027\u503c 1, 2, 3\n}\n\n// for...of \u793a\u4f8b\nconst arr = [1, 2, 3];\nfor (const value of arr) {\n  console.log(value); // \u8f93\u51fa\u6570\u7ec4\u5143\u7d20\u7684\u503c 1, 2, 3\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u603b\u7ed3\u8d77\u6765\uff0c",(0,c.jsx)(e.code,{children:"for...in"})," \u7528\u4e8e\u8fed\u4ee3\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u79f0\uff0c",(0,c.jsx)(e.code,{children:"for...of"})," \u7528\u4e8e\u8fed\u4ee3\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u503c\u3002\u5728\u5904\u7406\u5bf9\u8c61\u65f6\uff0c",(0,c.jsx)(e.code,{children:"for...in"})," \u5faa\u73af\u4f1a\u904d\u5386\u5c5e\u6027\u548c\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff0c\u800c ",(0,c.jsx)(e.code,{children:"for...of"})," \u5faa\u73af\u4e0d\u9002\u7528\u4e8e\u666e\u901a\u5bf9\u8c61\uff0c\u53ea\u9002\u7528\u4e8e\u5b9e\u73b0\u4e86\u8fed\u4ee3\u5668\u63a5\u53e3\u7684\u5bf9\u8c61\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},2023:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>l});var c=r(9474);const i={},s=c.createContext(i);function o(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);