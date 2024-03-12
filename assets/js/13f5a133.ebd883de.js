"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[5584],{6870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(3274),c=t(2023);const i={},l="React\u6027\u80fd\u4f18\u5316",s={id:"frame/react/5",title:"React\u6027\u80fd\u4f18\u5316",description:"1. \u4f7f\u7528shouldComponentUpdate - \u5f53props\u6216state\u6539\u53d8\u65f6\uff0cReact\u5c06\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u8fdb\u884c\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u5373\u5728\u524d\u540eprops\u548cstate\u6ca1\u6709\u53d1\u751f\u53d8\u5316\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6e32\u67d3\u3002\u4f7f\u7528shouldComponentUpdate\u65b9\u6cd5\u53ef\u4ee5\u5728\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u4e4b\u524d\u68c0\u67e5\u4efb\u4f55\u66f4\u6539\uff0c\u5e76\u51b3\u5b9a\u662f\u5426\u5e94\u8be5\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002",source:"@site/docs/frame/react/5.md",sourceDirName:"frame/react",slug:"/frame/react/5",permalink:"/FE-interview/docs/frame/react/5",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/frame/react/5.md",tags:[],version:"current",frontMatter:{},sidebar:"frame",previous:{title:"React\u72b6\u6001\u7ba1\u7406",permalink:"/FE-interview/docs/frame/react/4"},next:{title:"setState\u540c\u6b65\u5f02\u6b65",permalink:"/FE-interview/docs/frame/react/6"}},a={},o=[];function d(e){const n={h1:"h1",li:"li",ol:"ol",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react\u6027\u80fd\u4f18\u5316",children:"React\u6027\u80fd\u4f18\u5316"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528shouldComponentUpdate - \u5f53props\u6216state\u6539\u53d8\u65f6\uff0cReact\u5c06\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u8fdb\u884c\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u5373\u5728\u524d\u540eprops\u548cstate\u6ca1\u6709\u53d1\u751f\u53d8\u5316\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6e32\u67d3\u3002\u4f7f\u7528shouldComponentUpdate\u65b9\u6cd5\u53ef\u4ee5\u5728\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u4e4b\u524d\u68c0\u67e5\u4efb\u4f55\u66f4\u6539\uff0c\u5e76\u51b3\u5b9a\u662f\u5426\u5e94\u8be5\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u751f\u547d\u5468\u671f\u65b9\u6cd5 - React\u662f\u57fa\u4e8e\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u4f7f\u7528\u4ee3\u8868\u7ec4\u4ef6\u4e0d\u540c\u9636\u6bb5\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u6765\u6267\u884c\u4e00\u4e9b\u5fc5\u8981\u7684\u64cd\u4f5c\u5e76\u907f\u514d\u989d\u5916\u7684\u6e32\u67d3\u5f00\u9500\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528componentDidMount\u65b9\u6cd5\u8fdb\u884cAJAX\u8bf7\u6c42\u6216componentWillUnmount\u65b9\u6cd5\u8fdb\u884c\u6e05\u7406\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Keys - \u5728\u6e32\u67d3\u5bf9\u8c61\u5217\u8868\u65f6\uff0c\u4e3a\u5217\u8868\u7684\u6bcf\u4e2a\u5bf9\u8c61\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684key\u5c5e\u6027\u3002\u8fd9\u6837\u53ef\u4ee5\u8ba9React\u80fd\u591f\u66f4\u5feb\u5730\u8bc6\u522b\u9700\u8981\u5220\u9664\u3001\u63d2\u5165\u6216\u79fb\u52a8\u7684\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528PureComponent - PureComponent\u662fReact\u5185\u7f6e\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u81ea\u52a8\u5b9e\u73b0shouldComponentUpdate\u65b9\u6cd5\u5e76\u5728\u7ec4\u4ef6props\u6216state\u53d1\u751f\u66f4\u6539\u65f6\u6267\u884c\u6d45\u6bd4\u8f83\uff0c\u4ece\u800c\u907f\u514d\u8fdb\u884c\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u62c6\u5206\u548c\u5f02\u6b65\u52a0\u8f7d - \u4f7f\u7528\u4ee3\u7801\u62c6\u5206\u548c\u5f02\u6b65\u52a0\u8f7d\u53ef\u4ee5\u51cf\u5c11\u5e94\u7528\u7a0b\u5e8f\u7684\u521d\u59cb\u52a0\u8f7d\u65f6\u95f4\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u865a\u62df\u5316 - \u5f53\u6d89\u53ca\u5230\u5927\u91cf\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u865a\u62df\u5316\u6280\u672f\uff0c\u4f8b\u5982react-virtualized\uff0c\u4ee5\u7f13\u5b58\u548c\u52a8\u6001\u6e32\u67d3\u6570\u636e\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Memo or useCallBack hooks - React.memo()\u548cuseCallBack() hooks\u53ef\u4ee5\u4f18\u5316\u5177\u6709\u5927\u91cfprops\u6216state\u7684\u7ec4\u4ef6,\u9632\u6b62\u672a\u4fee\u6539\u503c\u7684\u91cd\u590d\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u4f7f\u7528\u5185\u8054\u6837\u5f0f - \u5728\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u6837\u5f0f\u4f1a\u5bfc\u81f4\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u91cd\u65b0\u8ba1\u7b97\u6837\u5f0f\u3002\u4f18\u5316\u65b9\u6848\u53ef\u4ee5\u5728\u5916\u90e8\u5b9a\u4e49\u6837\u5f0f\u5e76\u5c06\u5176\u5bfc\u5165\u7ec4\u4ef6\u4e2d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u8981\u5728render\u51fd\u6570\u4e2d\u5b9a\u4e49\u51fd\u6570 - \u6bcf\u6b21\u6e32\u67d3\u65f6\uff0c\u7ec4\u4ef6\u6e32\u67d3\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002\u8fd9\u4e9b\u989d\u5916\u7684\u51fd\u6570\u589e\u52a0\u4e86\u5185\u5b58\u548cCPU\u7684\u5f00\u9500\u3002\u89e3\u51b3\u65b9\u6848\u662f\u5c06\u8fd9\u4e9b\u51fd\u6570\u79fb\u5230\u7ec4\u4ef6\u7c7b\u7684\u5916\u90e8\u5b9a\u4e49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528React.Fragment - React.Fragment\u4f1a\u8ba9React\u66f4\u9ad8\u6548\u5730\u6e32\u67d3\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u51cf\u5c11\u751f\u6210\u591a\u4e2a\u4e0d\u5fc5\u8981\u7684\u6807\u7b7e\u7684\u5f00\u9500\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u6df1\u5c42\u5d4c\u5957\u7ec4\u4ef6 - \u5728\u5d4c\u5957\u8fc7\u591a\u7684\u7ec4\u4ef6\u5c42\u6b21\u7ed3\u6784\u4e2d\uff0c\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u901f\u5ea6\u4f1a\u53d8\u6162\u3002\u89e3\u51b3\u65b9\u6848\u662f\u5c06\u6df1\u5d4c\u5957\u7684\u7ec4\u4ef6\u8fdb\u884c\u62c6\u5206\u6216\u8005\u4f7f\u7528\u8fd1\u4f3c\u7ec4\u4ef6\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3 - \u4f8b\u5982\u4f7f\u7528React.memo, useMemo, useCallBack hooks."}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Web Workers - Web Workers\u662f\u8fd0\u884c\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u7684\u811a\u672c\uff0c\u5b83\u4eec\u4e0d\u4f1a\u963b\u585e\u5e94\u7528\u7a0b\u5e8f\u7684\u6e32\u67d3\u548c\u54cd\u5e94\u901f\u5ea6\u3002Web Workers\u53ef\u4ee5\u8ba9\u4f60\u5728\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u5904\u7406\u8017\u65f6\u7684\u4efb\u52a1\uff0c\u5e76\u5728\u4efb\u52a1\u5b8c\u6210\u540e\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u673a\u5236\u901a\u77e5\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u77ed\u8def\u903b\u8f91\u66ff\u4ee3\u6761\u4ef6\u6e32\u67d3 - \u5728React\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u77ed\u8def\u903b\u8f91(\u800c\u4e0d\u662f\u6761\u4ef6\u6e32\u67d3)\u6765\u6e32\u67d3\u4e00\u4e9b\u529f\u80fd\u3002\u5982\u679c\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u5185\u5bb9\uff0c\u4ece\u800c\u907f\u514d\u4e86\u989d\u5916\u7684\u6e32\u67d3\u6210\u672c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Immutable\u6570\u636e - Immutable\u6570\u636e\u4e0d\u4f1a\u76f4\u63a5\u66f4\u6539\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u66f4\u65b0\u540e\u7684\u65b0\u6570\u636e\u3002\u4f7f\u7528Immutable\u6570\u636e\u53ef\u4ee5\u51cf\u5c11\u7ec4\u4ef6\u72b6\u6001\u7684\u66f4\u6539\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u63d0\u53d6\u5171\u4eab\u7ec4\u4ef6\u903b\u8f91 - \u5c06\u591a\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5171\u4eab\u903b\u8f91\u79fb\u5230\u5355\u72ec\u7684\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u51cf\u5c11\u91cd\u590d\u7684\u4ee3\u7801\u5e76\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u8f7b\u91cf\u7ea7\u7684\u5e93\u548c\u6846\u67b6 - \u5728React\u7684\u751f\u6001\u7cfb\u7edf\u4e2d\uff0c\u6709\u5f88\u591a\u8f7b\u91cf\u7ea7\u7684\u5e93\u548c\u6846\u67b6\u53ef\u4ee5\u66ff\u4ee3\u4e00\u4e9b\u66f4\u8017\u8d39\u6027\u80fd\u7684\u9009\u62e9\u3002\u4f8b\u5982\uff0c\u4f7f\u7528Preact\u53ef\u4ee5\u63d0\u9ad8React\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\uff0c\u800c\u4f7f\u7528React-styleguidist\u53ef\u4ee5\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5bf9\u5217\u8868\u8fdb\u884c\u952e\u7684\u4f18\u5316 - \u5728\u6e32\u67d3\u5217\u8868\u65f6\uff0c\u4e3a\u6bcf\u4e2a\u5217\u8868\u9879\u6307\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u952e\u53ef\u4ee5\u5e2e\u52a9React\u8bc6\u522b\u54ea\u4e9b\u5217\u8868\u9879\u5df2\u66f4\u6539\u3002\u4e3a\u5217\u8868\u4e2d\u7684key\u5c5e\u6027\u6307\u5b9a\u4e00\u4e2a\u6070\u5f53\u7684\u503c\u53ef\u4ee5\u63d0\u9ad8React\u7684\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528shouldComponentUpdate\u6216\u7eaf\u7ec4\u4ef6 - \u5982\u679c\u7ec4\u4ef6\u7684props\u6216\u72b6\u6001\u6ca1\u6709\u66f4\u6539\uff0c\u5219\u4e0d\u5fc5\u91cd\u65b0\u6e32\u67d3\u8be5\u7ec4\u4ef6\u3002\u901a\u8fc7\u4f7f\u7528shouldComponentUpdate\u6216\u7eaf\u7ec4\u4ef6\uff0cReact\u4f1a\u6839\u636eprops\u548c\u72b6\u6001\u7684\u66f4\u6539\u6765\u51b3\u5b9a\u662f\u5426\u5fc5\u987b\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SSR (\u670d\u52a1\u7aef\u6e32\u67d3) - SSR\u662f\u4e00\u79cd\u901a\u8fc7\u5728\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u521d\u59cb\u6e32\u67d3\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u76f4\u63a5\u8fd4\u56deHTML\u4ee3\u7801\u7684\u6280\u672f\u3002\u4f7f\u7528SSR\u53ef\u4ee5\u63d0\u9ad8React\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u641c\u7d22\u5f15\u64ce\u7684\u4f18\u5316\u6548\u679c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u62c6\u5206 - \u901a\u8fc7\u5c06\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee3\u7801\u62c6\u5206\u6210\u5c0f\u5757\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u66f4\u5feb\u5730\u52a0\u8f7d\uff0c\u5e76\u4e14React\u53ea\u4f1a\u6e32\u67d3\u5f53\u524d\u6240\u9700\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Profiler - \u4f7f\u7528React Profiler\u5de5\u5177\u53ef\u4ee5\u8bc6\u522bReact\u7ec4\u4ef6\u4e2d\u53ef\u89c6\u5316\u7684\u6027\u80fd\u74f6\u9888\u5e76\u8fdb\u884c\u6027\u80fd\u8c03\u6574\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528React.lazy\u548cReact.Suspense - React.lazy\u548cReact.Suspense\u662fReact 16.6\u4e2d\u5f15\u5165\u7684\u65b0\u529f\u80fd\uff0c\u7528\u4e8e\u5ef6\u8fdf\u7ec4\u4ef6\u7684\u52a0\u8f7d\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528Profiler API - React\u6709\u4e00\u4e2a\u5185\u7f6e\u7684Profiler API\uff0c\u53ef\u4ee5\u7528\u4e8e\u6d4b\u91cf\u6e32\u67d3\u65f6\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u6027\u80fd\u3002\u8fd9\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4e86\u89e3\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u8be6\u60c5\uff0c\u4ee5\u4fbf\u627e\u5230\u5e76\u4f18\u5316\u6162\u7684\u90e8\u5206\u3002\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528webpack bundle\u5206\u6790\u5de5\u5177 - \u4e86\u89e3\u5e94\u7528\u7a0b\u5e8f\u7684\u6253\u5305\u5927\u5c0f\u4ee5\u53ca\u54ea\u4e2a\u6a21\u5757\u5bfc\u81f4\u5305\u53d8\u5927\uff0c\u662f\u4f18\u5316React\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u91cd\u8981\u4e00\u6b65\u3002webpack bundle\u5206\u6790\u5de5\u5177\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u6253\u5305\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u5728render()\u51fd\u6570\u4e2d\u8fdb\u884c\u91cd\u590d\u8ba1\u7b97 - \u5728render()\u51fd\u6570\u4e2d\u8fdb\u884c\u91cd\u590d\u8ba1\u7b97\u4f1a\u964d\u4f4eReact\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002\u53ef\u4ee5\u8003\u8651\u5c06\u8fd9\u4e9b\u8ba1\u7b97\u7ed3\u679c\u5b58\u50a8\u5728\u7ec4\u4ef6\u7684\u72b6\u6001\u4e2d\uff0c\u6216\u4f7f\u7528memoization\u6280\u672f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528React.memo\u7f13\u5b58\u7ec4\u4ef6 - React.memo\u662fReact 16.6\u4e2d\u5f15\u5165\u7684\u7ec4\u4ef6\u9ad8\u9636\u51fd\u6570\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7f13\u5b58\u7ec4\u4ef6\u5e76\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6 - \u975e\u53d7\u63a7\u7ec4\u4ef6\u4f1a\u4f7fReact\u65e0\u6cd5\u63a7\u5236\u7ec4\u4ef6\u7684\u72b6\u6001\u3002\u5982\u679c\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u5219\u5e94\u8be5\u81f3\u5c11\u901a\u8fc7ref\u6765\u63a7\u5236\u5b83\u4eec\u7684\u503c\uff0c\u4ee5\u9632\u6b62React\u8fdb\u884c\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u5c06\u7ec4\u4ef6\u5185\u7684\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012 - \u5982\u679c\u5728\u7ec4\u4ef6\u4e4b\u95f4\u4f20\u9012\u51fd\u6570\u5c5e\u6027\uff0c\u5219\u6bcf\u6b21\u4f20\u9012\u51fd\u6570\u65f6\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u5b9e\u4f8b\u3002\u53ef\u4ee5\u5c06\u51fd\u6570\u63d0\u53d6\u5230\u7ec4\u4ef6\u5916\u90e8\u4ee5\u907f\u514d\u91cd\u590d\u751f\u6210\u51fd\u6570\u5b9e\u4f8b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3 - \u5728React\u4e2d\uff0c\u5f53props\u6216\u72b6\u6001\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u7ec4\u4ef6\u5c06\u91cd\u65b0\u6e32\u67d3\u3002\u53ef\u4ee5\u901a\u8fc7shouldComponentUpdate\u6216useMemo_hook\u6765\u4f18\u5316\u5b9a\u4e49\u7684\u7ec4\u4ef6\u90e8\u5206\uff0c\u68c0\u6d4b\u5f53\u524d\u7684\u6e32\u67d3\u662f\u5426\u662f\u5fc5\u8981\u7684\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4ece\u800c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u5728\u6e32\u67d3\u671f\u95f4\u4f7f\u7528\u957f\u65f6\u95f4\u963b\u585e\u7684\u4ee3\u7801 - \u5982\u679c\u7ec4\u4ef6\u4e2d\u5305\u542b\u9700\u8981\u82b1\u8d39\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u7684\u4ee3\u7801\uff0c\u5219\u8fd9\u6837\u7684\u4ee3\u7801\u5c06\u963b\u585e\u5e94\u7528\u7a0b\u5e8f\u7684\u6e32\u67d3\u548c\u54cd\u5e94\u901f\u5ea6\u3002\u53ef\u4ee5\u5c06\u8fd9\u6837\u7684\u4ee3\u7801\u79fb\u52a8\u5230Web Worker\u6216\u8de8\u5e27\u811a\u672c\u4e2d\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u5408\u9002\u7684React\u7ec4\u4ef6\u67b6\u6784 - \u5408\u9002\u7684React\u7ec4\u4ef6\u67b6\u6784\u53ef\u4ee5\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u6e05\u6670\u4e14\u6613\u4e8e\u7ef4\u62a4\u3002\u53ef\u4ee5\u5c06\u5927\u578b\u7ec4\u4ef6\u62c6\u5206\u4e3a\u5c0f\u578b\u7ec4\u4ef6\uff0c\u5e76\u91c7\u7528\u9ad8\u9636\u7ec4\u4ef6\u6216\u6e32\u67d3\u5c5e\u6027\u6765\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9009\u62e9\u5408\u9002\u7684\u5e93\u548c\u6846\u67b6 - \u9664React\u4e4b\u5916\uff0c\u9009\u62e9\u5408\u9002\u7684\u5e93\u548c\u6846\u67b6\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u63d0\u9ad8React\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528Immutable.js\u6765\u521b\u5efa\u4e0d\u53ef\u53d8\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ece\u800c\u51cf\u5c11\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u7684\u9891\u7387\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528React DevTools\u6765\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f - React DevTools\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u76f4\u89c2\u5730\u4e86\u89e3\u5e94\u7528\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u6b21\u7ed3\u6784\u3001\u6027\u80fd\u74f6\u9888\u4ee5\u53ca\u7ec4\u4ef6\u72b6\u6001\u7684\u53d8\u5316\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528shouldComponentUpdate\u4f18\u5316\u7ec4\u4ef6\u6e32\u67d3 - shouldComponentUpdate\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u63a7\u5236\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u64cd\u4f5c\u3002\u5982\u679c\u7ec4\u4ef6\u7684props\u548c\u72b6\u6001\u6ca1\u6709\u66f4\u6539\uff0c\u5219\u53ef\u4ee5\u8fd4\u56defalse\uff0c\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u6e32\u67d3\u592a\u591a\u7684\u7ec4\u4ef6 - \u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6e32\u67d3\u4e86\u592a\u591a\u7684\u7ec4\u4ef6\uff0c\u5219\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\u3002\u53ef\u4ee5\u4f7f\u7528React.lazy\u548cReact.Suspense\u5ef6\u8fdf\u7ec4\u4ef6\u7684\u6e32\u67d3\uff0c\u6216\u5c06\u7ec4\u4ef6\u5206\u5272\u4e3a\u66f4\u5c0f\u7684\u5b50\u7ec4\u4ef6\u4ee5\u51cf\u5c11\u7ec4\u4ef6\u7684\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u907f\u514d\u4f7f\u7528\u4e0d\u5fc5\u8981\u7684\u9ad8\u9636\u7ec4\u4ef6 - \u9ad8\u9636\u7ec4\u4ef6\u662f\u4e00\u79cd\u5c06\u7ec4\u4ef6\u903b\u8f91\u4e0e\u7ec4\u4ef6\u5206\u79bb\u7684\u65b9\u6cd5\u3002\u4f46\u662f\uff0c\u5728\u4f7f\u7528\u9ad8\u9636\u7ec4\u4ef6\u65f6\u8981\u5c0f\u5fc3\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u3002\u5efa\u8bae\u53ea\u4f7f\u7528\u5fc5\u8981\u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u64cd\u4f5c\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(9474);const c={},i=r.createContext(c);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);