const getChildrenPaths = require("./getChildrenPaths");

module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "前端面试",
      description:
        "前端面试题收集汇总并全面给出权威优质的答案，更欢迎👏大家issues投稿 ❤️ 💞 💖，一起维护一套优质权威的前端知识体系。。",
    },
  },
  base: "/FE-interview/",
  themeConfig: {
    repo: "GavinBirkhoff/FE-interview",
    repoLabel: '查看源码',
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
        title: "Angular",
        path: "/angular/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("angular"),
        priority:10,
      },
      {
        title: "Browser",
        path: "/browser/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("browser"),
        priority:10,
      },
      {
        title: "Css",
        path: "/css/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("css"),
        priority:10,
      },
      {
        title: "Devops",
        path: "/devops/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("devops"),
        priority:10,
      },
      {
        title: "Docker",
        path: "/docker/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("docker"),
        priority:10,
      },
      {
        title: "Engineering",
        path: "/engineering/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("engineering"),
        priority:10,
      },
      {
        title: "Git",
        path: "/git/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("git"),
        priority:10,
      },
      {
        title: "Html",
        path: "/html/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("html"),
        priority:10,
      },
      {
        title: "Http",
        path: "/http/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("http"),
        priority:10,
      },
      {
        title: "Javascript",
        path: "/javascript/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("javascript"),
        priority:10,
      },
      {
        title: "Jest",
        path: "/jest/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("jest"),
        priority:10,
      },
      {
        title: "linux",
        path: "/linux/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("linux"),
        priority:10,
      },
      {
        title: "MobileWeb",
        path: "/mobileWeb/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("mobileWeb"),
        priority:10,
      },
      {
        title: "Nextjs",
        path: "/nextjs/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nextjs"),
        priority:10,
      },
      {
        title: "Nginx",
        path: "/nginx/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nginx"),
        priority:10,
      },
      {
        title: "Nodejs",
        path: "/nodejs/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nodejs"),
        priority:10,
      },
      {
        title: "Npm",
        path: "/npm/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("npm"),
        priority:10,
      },
      {
        title: "React",
        path: "/react/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("react"),
        priority:10,
      },
      {
        title: "Rollupjs",
        path: "/rollupjs/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("rollupjs"),
        priority:10,
      },
      {
        title: "Shell",
        path: "/shell/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("shell"),
        priority:10,
      },
      {
        title: "Typescript",
        path: "/typescript/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("typescript"),
        priority:10,
      },
      {
        title: "Vue",
        path: "/vue/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("vue"),
        priority:10,
      },
      {
        title: "Webpack",
        path: "/webpack/",
        collapsable: true,
        sidebarDepth: 1,
        collapsable: false,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("webpack"),
        priority:10,
      },
    ].sort((a,b)=>a.priority - b.priority),
    //   sidebar: 'auto'
  },
};
