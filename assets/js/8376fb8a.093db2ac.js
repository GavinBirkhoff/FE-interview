"use strict";(self.webpackChunkfe_interview=self.webpackChunkfe_interview||[]).push([[538],{7327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var r=s(3274),i=s(2023);const o={},l="Promise",t={id:"basic/javascript/10",title:"Promise",description:"\u5bf9Promise\u7684\u7406\u89e3",source:"@site/docs/basic/javascript/10.md",sourceDirName:"basic/javascript",slug:"/basic/javascript/10",permalink:"/FE-interview/docs/basic/javascript/10",draft:!1,unlisted:!1,editUrl:"https://github.com/GavinBirkhoff/FE-interview/tree/main/docs/basic/javascript/10.md",tags:[],version:"current",frontMatter:{},sidebar:"basic",previous:{title:"\u95ed\u5305",permalink:"/FE-interview/docs/basic/javascript/1"},next:{title:"\u514b\u9686",permalink:"/FE-interview/docs/basic/javascript/11"}},c={},a=[{value:"\u5bf9Promise\u7684\u7406\u89e3",id:"\u5bf9promise\u7684\u7406\u89e3",level:2},{value:"\u624b\u5199promise",id:"\u624b\u5199promise",level:2},{value:"FAQ?",id:"faq",level:2},{value:"Promise\u4e2d\uff0cresolve\u540e\u9762\u7684\u8bed\u53e5\u662f\u5426\u8fd8\u4f1a\u6267\u884c\uff1f",id:"promise\u4e2dresolve\u540e\u9762\u7684\u8bed\u53e5\u662f\u5426\u8fd8\u4f1a\u6267\u884c",level:3},{value:"\u548c async/await \u6709\u4ec0\u4e48\u5173\u7cfb\uff1f",id:"\u548c-asyncawait-\u6709\u4ec0\u4e48\u5173\u7cfb",level:3},{value:"\u5982\u4f55\u4e2d\u65adPromise\uff1f",id:"\u5982\u4f55\u4e2d\u65adpromise",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"promise",children:"Promise"}),"\n",(0,r.jsx)(n.h2,{id:"\u5bf9promise\u7684\u7406\u89e3",children:"\u5bf9Promise\u7684\u7406\u89e3"}),"\n",(0,r.jsx)(n.p,{children:"Promise \u662f JavaScript \u4e2d\u7684\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u7ed3\u6784\u5316\u7684\u65b9\u5f0f\u6765\u5904\u7406\u5f02\u6b65\u4ee3\u7801\uff0c\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1\uff08Callback Hell\uff09\u7684\u95ee\u9898\uff0c\u4f7f\u5f97\u5f02\u6b65\u7f16\u7a0b\u66f4\u52a0\u7b80\u6d01\u548c\u53ef\u8bfb\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Promise \u7684\u7279\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f02\u6b65\u64cd\u4f5c\u7684\u72b6\u6001\u7ba1\u7406\uff1aPromise \u6709\u4e09\u79cd\u72b6\u6001\uff0c\u5206\u522b\u662f pending\uff08\u8fdb\u884c\u4e2d\uff09\u3001fulfilled\uff08\u5df2\u5b8c\u6210\uff09\u548c rejected\uff08\u5df2\u62d2\u7edd\uff09\u3002\u72b6\u6001\u4e00\u65e6\u786e\u5b9a\uff0c\u5c31\u4e0d\u53ef\u53d8\u66f4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u5904\u7406\uff1aPromise \u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"then()"})," \u65b9\u6cd5\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u7684\u6210\u529f\u7ed3\u679c\uff0c\u5e76\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"catch()"})," \u65b9\u6cd5\u5904\u7406\u5f02\u5e38\u6216\u62d2\u7edd\u7684\u60c5\u51b5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u94fe\u5f0f\u8c03\u7528\uff1aPromise \u7684 ",(0,r.jsx)(n.code,{children:"then()"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5bf9\u8c61\uff0c\u53ef\u4ee5\u5b9e\u73b0\u94fe\u5f0f\u8c03\u7528\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u53ef\u4ee5\u6309\u7167\u7279\u5b9a\u7684\u987a\u5e8f\u8fdb\u884c\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u9519\u8bef\u5192\u6ce1\uff1aPromise \u5177\u6709\u9519\u8bef\u5192\u6ce1\u7684\u7279\u6027\uff0c\u5982\u679c\u4e00\u4e2a Promise \u94fe\u4e2d\u7684\u67d0\u4e2a Promise \u88ab\u62d2\u7edd\uff0c\u5c06\u4f1a\u4e00\u76f4\u5411\u540e\u4f20\u9012\u76f4\u5230\u88ab\u6355\u83b7\u6216\u5230\u8fbe\u94fe\u7684\u672b\u5c3e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Promise \u7684\u4f18\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff1aPromise \u7684\u94fe\u5f0f\u8c03\u7528\u53ef\u4ee5\u4f7f\u5f02\u6b65\u64cd\u4f5c\u7684\u4ee3\u7801\u66f4\u52a0\u76f4\u89c2\u548c\u53ef\u8bfb\uff0c\u907f\u514d\u4e86\u56de\u8c03\u5730\u72f1\u7684\u5d4c\u5957\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u66f4\u597d\u7684\u9519\u8bef\u5904\u7406\uff1a\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"catch()"})," \u65b9\u6cd5\u53ef\u4ee5\u96c6\u4e2d\u5904\u7406 Promise \u94fe\u4e2d\u7684\u9519\u8bef\uff0c\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u66f4\u597d\u7684\u6269\u5c55\u6027\uff1aPromise \u53ef\u4ee5\u4e0e\u5176\u4ed6\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f\uff08\u5982 Async/Await\u3001Generator\uff09\u7ed3\u5408\u4f7f\u7528\uff0c\u63d0\u4f9b\u4e86\u66f4\u7075\u6d3b\u7684\u5f02\u6b65\u7f16\u7a0b\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Promise \u7684\u7f3a\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e0\u6cd5\u53d6\u6d88\uff1a\u4e00\u65e6 Promise \u88ab\u521b\u5efa\uff0c\u65e0\u6cd5\u53d6\u6d88\u6216\u4e2d\u65ad\u5176\u6267\u884c\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65e0\u8c13\u7684\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\uff0c\u6d6a\u8d39\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u65e0\u6cd5\u5904\u7406\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u5e76\u53d1\uff1aPromise \u7684\u94fe\u5f0f\u8c03\u7528\u53ea\u80fd\u5904\u7406\u4e00\u7cfb\u5217\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u65e0\u6cd5\u5f88\u65b9\u4fbf\u5730\u5904\u7406\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7684\u5e76\u53d1\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Promise \u89e3\u51b3\u7684\u95ee\u9898\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"Promise \u89e3\u51b3\u4e86\u4f20\u7edf\u56de\u8c03\u51fd\u6570\u7f16\u7a0b\u4e2d\u7684\u56de\u8c03\u5730\u72f1\u95ee\u9898\u3002\u56de\u8c03\u5730\u72f1\u6307\u7684\u662f\u5728\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u5d4c\u5957\u6267\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u56de\u8c03\u51fd\u6570\u7684\u5c42\u5c42\u5d4c\u5957\u9020\u6210\u4ee3\u7801\u53ef\u8bfb\u6027\u5dee\u3001\u96be\u4ee5\u7ef4\u62a4\u7684\u60c5\u51b5\u3002Promise \u63d0\u4f9b\u4e86\u94fe\u5f0f\u8c03\u7528\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u53ef\u4ee5\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u5904\u7406\uff0c\u4ee3\u7801\u7ed3\u6784\u66f4\u52a0\u6e05\u6670\u548c\u53ef\u7ef4\u62a4\u3002\u6b64\u5916\uff0cPromise \u8fd8\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\uff0c\u7b80\u5316\u4e86\u9519\u8bef\u5904\u7406\u7684\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u624b\u5199promise",children:"\u624b\u5199promise"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5f97\u77e5\u9053",(0,r.jsx)(n.a,{href:"https://promisesaplus.com/",children:"A+\u89c4\u8303"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// \u81ea\u5b9a\u4e49Promise\u6a21\u5757\uff0cIIFE\n(function (window) {\n  // Promise\u7684\u4e09\u79cd\u72b6\u6001\n  const PENDING = "pending";\n  const FULFILLED = "fulfilled";\n  const REJECTED = "rejected";\n  class Promise {\n    constructor(executor) {\n      // \u4fdd\u5b58\u72b6\u6001\n      this.status = PENDING;\n      // \u4fdd\u5b58\u7ed3\u679c\n      this.value = undefined;\n      // \u4fdd\u5b58\u51b3\u7edd\u7684\u539f\u56e0\n      this.reason = undefined;\n      // \u4fdd\u5b58callback\n      this.onfulfilledCallbacks = [];\n      this.onrejectedCallbacks = [];\n\n      const resolve = (value) => {\n        if (this.status === PENDING) {\n          this.status = FULFILLED;\n          this.value = value;\n          this.onfulfilledCallbacks.forEach((callback) => {\n            callback(this.value);\n          });\n        }\n      };\n\n      const reject = (reason) => {\n        if (this.status === PENDING) {\n          this.status = REJECTED;\n          this.reason = reason;\n          this.onrejectedCallbacks.forEach((callback) => {\n            callback(this.reason);\n          });\n        }\n      };\n\n      try {\n        // \u6267\u884c executor \u51fd\u6570\uff0c\u5e76\u5c06 resolve \u548c reject \u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\n        executor(resolve, reject);\n      } catch (error) {\n        // \u5982\u679c\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5f02\u5e38\uff0c\u5219\u5c06 Promise \u72b6\u6001\u8f6c\u6362\u4e3a rejected\n        reject(error);\n      }\n    }\n\n    then(onfulfilled, onrejected) {\n      // \u4fdd\u8bc1onfulfilled, onrejected\u662f\u51fd\u6570\n      onfulfilled =\n        typeof onfulfilled === "function" ? onfulfilled : (value) => value;\n      onrejected =\n        typeof onrejected === "function"\n          ? onrejected\n          : (reason) => {\n              console.log(123456);\n              throw reason;\n            };\n      const promise2 = new Promise((resolve, reject) => {\n        const onfulfilledMicrotask = () => {\n          queueMicrotask(() => {\n            try {\n              const x = onfulfilled(this.value);\n              resolvePromise(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          });\n        };\n\n        const onrejectedMicrotask = () => {\n          queueMicrotask(() => {\n            try {\n              const x = onrejected(this.reason);\n              resolvePromise(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          });\n        };\n        if (this.status === FULFILLED) {\n          onfulfilledMicrotask();\n        } else if (this.status === REJECTED) {\n          onrejectedMicrotask();\n        } else if (this.status === PENDING) {\n          this.onfulfilledCallbacks.push(onfulfilledMicrotask);\n\n          this.onrejectedCallbacks.push(onrejectedMicrotask);\n        }\n      });\n      return promise2;\n    }\n\n    catch(onrejected) {\n      return this.then(null, onrejected);\n    }\n\n    static resolve(value){\n        return new Promise((resolve, reject) => {\n          if (value instanceof Promise) {\n            value.then(resolve, reject);\n          } else {\n            resolve(value);\n          }\n        });\n    }\n\n    static reject(reason) {\n      return new Promise((resolve, reject) => {\n        reject(reason);\n      });\n    }\n\n    static all(promises){\n        const values = Array.from(promises.length)\n        let fulfilledCount = 0;\n        return new Promise((resolve, reject) => {\n            promises.forEach((p, index)=>{\n                Promise.resolve(p).then((value)=>{\n                    values[index] = value;\n                    fulfilledCount++;\n                    if(fulfilledCount === promises.length){\n                        resolve(values);\n                    }\n                }, (reason)=>{\n                    reject(reason);\n                })\n            })\n        });\n    }\n\n    static race(promises){\n        return new Promise((resolve, reject) => {\n            for(let i = 0; i < promises.length; i++){\n                Promise.resolve(promises[i]).then((value)=>{\n                    resolve(value);\n                }, (reason)=>{\n                    reject(reason);\n                })\n            }\n        });\n    }\n  }\n  const resolvePromise = (promise2, x, resolve, reject) => {\n    // console.log(reject,\'123\');\n    if (promise2 === x) {\n      reject(new TypeError("\u5faa\u73af\u5f15\u7528"));\n    } else if (x instanceof Promise) {\n      x.then(\n        (value) => {\n          resolvePromise(promise2, value, resolve, reject);\n        },\n        (reason) => {\n          reject(reason);\n        }\n      );\n    } else {\n      resolve(x);\n    }\n  };\n  window.Promise = Promise;\n})(window);\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ?"}),"\n",(0,r.jsx)(n.h3,{id:"promise\u4e2dresolve\u540e\u9762\u7684\u8bed\u53e5\u662f\u5426\u8fd8\u4f1a\u6267\u884c",children:"Promise\u4e2d\uff0cresolve\u540e\u9762\u7684\u8bed\u53e5\u662f\u5426\u8fd8\u4f1a\u6267\u884c\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u4e0d\u9700\u8981\u6267\u884c\uff0c\u9700\u8981\u5728 resolve \u8bed\u53e5\u524d\u52a0\u4e0a return\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u548c-asyncawait-\u6709\u4ec0\u4e48\u5173\u7cfb",children:"\u548c async/await \u6709\u4ec0\u4e48\u5173\u7cfb\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"es2017\u7684\u65b0\u8bed\u6cd5\uff0casync/await\u5c31\u662fgenerator + promise\u7684\u8bed\u6cd5\u7cd6"}),"\n",(0,r.jsx)(n.p,{children:"async/await \u548c Promise \u7684\u5173\u7cfb\u975e\u5e38\u7684\u5de7\u5999\uff0cawait\u5fc5\u987b\u5728async\u5185\u4f7f\u7528\uff0c\u5e76\u88c5\u9970\u4e00\u4e2aPromise\u5bf9\u8c61\uff0casync\u8fd4\u56de\u7684\u4e5f\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.p,{children:"async/await\u4e2d\u7684return/throw\u4f1a\u4ee3\u7406\u81ea\u5df1\u8fd4\u56de\u7684Promise\u7684resolve/reject\uff0c\u800c\u4e00\u4e2aPromise\u7684resolve/reject\u4f1a\u4f7f\u5f97await\u5f97\u5230\u8fd4\u56de\u503c\u6216\u629b\u51fa\u5f02\u5e38\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u65b9\u6cd5\u5185\u65e0await\u8282\u70b9","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"return"})," \u4e00\u4e2a\u5b57\u9762\u91cf\u5219\u4f1a\u5f97\u5230\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"{PromiseStatus: resolved}"}),"\u7684Promise\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"throw"})," \u4e00\u4e2aError\u5219\u4f1a\u5f97\u5230\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"{PromiseStatus: rejected}"}),"\u7684Promise\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u65b9\u6cd5\u5185\u6709await\u8282\u70b9","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["async\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"{PromiseStatus: pending}"}),"\u7684Promise\uff08\u53d1\u751f\u5207\u6362\uff0c\u5f02\u6b65\u7b49\u5f85Promise\u7684\u6267\u884c\u7ed3\u679c\uff09\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Promise\u7684resolve\u4f1a\u4f7f\u5f97await\u7684\u4ee3\u7801\u8282\u70b9\u83b7\u5f97\u76f8\u5e94\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u5e76\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Promise\u7684reject \u4f1a\u4f7f\u5f97await\u7684\u4ee3\u7801\u8282\u70b9\u81ea\u52a8\u629b\u51fa\u76f8\u5e94\u7684\u5f02\u5e38\uff0c\u7ec8\u6b62\u5411\u4e0b\u7ee7\u7eed\u6267\u884c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5982\u4f55\u4e2d\u65adpromise",children:"\u5982\u4f55\u4e2d\u65adPromise\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"Promise \u6709\u4e2a\u7f3a\u70b9\u5c31\u662f\u4e00\u65e6\u521b\u5efa\u5c31\u65e0\u6cd5\u53d6\u6d88\uff0c\u6240\u4ee5\u672c\u8d28\u4e0a Promise \u662f\u65e0\u6cd5\u88ab\u7ec8\u6b62\u7684\uff0c\u4f46\u6211\u4eec\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u4e0b\u9762\u4e24\u4e2a\u9700\u6c42\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4e2d\u65ad\u8c03\u7528\u94fe"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c31\u662f\u5728\u67d0\u4e2a then/catch \u6267\u884c\u4e4b\u540e\uff0c\u4e0d\u60f3\u8ba9\u540e\u7eed\u7684\u94fe\u5f0f\u8c03\u7528\u7ee7\u7eed\u6267\u884c\u4e86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"somePromise\n  .then(() => {})\n  .then(() => {\n    // \u7ec8\u6b62 Promise \u94fe\uff0c\u8ba9\u4e0b\u9762\u7684 then\u3001catch \u548c finally \u90fd\u4e0d\u6267\u884c\n  })\n  .then(() => console.log('then'))\n  .catch(() => console.log('catch'))\n  .finally(() => console.log('finally'))\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u79cd\u65b9\u6cd5\u662f\u5728then\u4e2d\u76f4\u63a5\u629b\u9519, \u8fd9\u6837\u5c31\u4e0d\u4f1a\u6267\u884c\u540e\u9762\u7684then, \u76f4\u63a5\u8df3\u5230catch\u65b9\u6cd5\u6253\u5370err(\u4f46\u6b64\u65b9\u6cd5\u5e76\u6ca1\u6709\u5b9e\u9645\u4e2d\u65ad)\u3002\u4f46\u5982\u679c\u94fe\u8def\u4e2d\u5bf9\u9519\u8bef\u8fdb\u884c\u4e86\u6355\u83b7\uff0c\u540e\u9762\u7684then\u51fd\u6570\u8fd8\u662f\u4f1a\u7ee7\u7eed\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u65b0\u5bf9\u8c61\u4fdd\u6301\u201cpending\u201d\u72b6\u6001\u65f6\uff0c\u539fPromise\u94fe\u5c06\u4f1a\u4e2d\u6b62\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"Promise.resolve().then(() => {\n    console.log('then 1')\n    return new Promise(() => {})\n}).then(() => {\n    console.log('then 2')\n}).then(() => {\n    console.log('then 3')\n}).catch((err) => {\n    console.log(err)\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4e2d\u65adPromise"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\u8fd9\u91cc\u662f\u4e2d\u65ad\u800c\u4e0d\u662f\u7ec8\u6b62\uff0c\u56e0\u4e3a Promise \u65e0\u6cd5\u7ec8\u6b62\uff0c\u8fd9\u4e2a\u4e2d\u65ad\u7684\u610f\u601d\u662f\uff1a\u5728\u5408\u9002\u7684\u65f6\u5019\uff0c\u628a pending \u72b6\u6001\u7684 promise \u7ed9 reject \u6389\u3002\u4f8b\u5982\u4e00\u4e2a\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\u5c31\u662f\u5e0c\u671b\u7ed9\u7f51\u7edc\u8bf7\u6c42\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u65e6\u8d85\u65f6\u5c31\u5c31\u4e2d\u65ad\uff0c\u6211\u4eec\u8fd9\u91cc\u7528\u5b9a\u65f6\u5668\u6a21\u62df\u4e00\u4e2a\u7f51\u7edc\u8bf7\u6c42\uff0c\u968f\u673a 3 \u79d2\u4e4b\u5185\u8fd4\u56de\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function timeoutWrapper(p, timeout = 2000) {\n  const wait = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('\u8bf7\u6c42\u8d85\u65f6')\n    }, timeout)\n  })\n  return Promise.race([p, wait])\n}\n\nlet abortPromise = new Promise((resolve, reject) => {\n    // \u4e2d\u65ad\u64cd\u4f5c\uff0c\u4f8b\u5982\u53d6\u6d88\u8bf7\u6c42\u7b49\n    // \u8fd9\u91cc\u53ef\u4ee5\u662f\u4efb\u4f55\u5f02\u6b65\u64cd\u4f5c\uff0c\u6bd4\u5982\u53d6\u6d88\u8bf7\u6c42\u3001\u5173\u95ed\u8fde\u63a5\u7b49\n    setTimeout(() => {\n        reject(new Error('Promise aborted'));\n    }, 1000);\n});\n\nlet originalPromise = new Promise((resolve, reject) => {\n    // \u6267\u884c\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n    // \u8fd9\u91cc\u53ef\u4ee5\u662f\u4efb\u4f55\u5f02\u6b65\u64cd\u4f5c\uff0c\u6bd4\u5982\u53d1\u9001\u8bf7\u6c42\u7b49\n    setTimeout(() => {\n        resolve('Promise resolved');\n    }, 2000);\n});\n\nPromise.race([originalPromise, abortPromise])\n    .then(result => {\n        console.log(result); // Promise resolved\n    })\n    .catch(error => {\n        console.log(error.message); // Promise aborted\n    });\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u53ef\u53d6\u6d88\u7684 Promise \u5e93"}),"\uff1a\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684 Promise \u5e93\u63d0\u4f9b\u4e86\u652f\u6301 Promise \u53d6\u6d88\u7684\u529f\u80fd\uff0c\u6bd4\u5982 Bluebird \u5e93\u7684 ",(0,r.jsx)(n.code,{children:"Promise.cancel()"})," \u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528\u8fd9\u4e9b\u5e93\uff0c\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u4e2d\u65ad Promise\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(9474);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);