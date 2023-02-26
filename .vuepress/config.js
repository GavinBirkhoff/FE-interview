const getChildrenPaths = require("./getChildrenPaths");

module.exports = {
  title: "前端面试",
  description:
    "前端面试题收集汇总并全面给出权威优质的答案，更欢迎👏大家issues投稿 ❤️ 💞 💖，一起维护一套优质权威的前端知识体系。",
  base: '/FE-interview/',
  themeConfig: {
    repo: "GavinBirkhoff/FE-interview",
    // repoLabel: '查看源码',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    smoothScroll: true,
    activeHeaderLinks: false, // 默认值：true
    // displayAllHeaders: true, // 默认值：false
    search: true, //搜索
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated", // string | boolean
    sidebar: [
      "/",
      {
        title: "Javascript",
        path: "/javascript/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("javascript"),
      },
      {
        title: "React",
        path: "/react/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("react"),
      },
    ],
    //   sidebar: 'auto'
  },
};
