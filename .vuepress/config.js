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
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("angular"),
        priority:100,
      },
      {
        title: "Browser",
        path: "/browser/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("browser"),
        priority:100,
      },
      {
        title: "Css",
        path: "/css/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("css"),
        priority:13,
      },
      {
        title: "Devops",
        path: "/devops/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("devops"),
        priority:100,
      },
      {
        title: "Docker",
        path: "/docker/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("docker"),
        priority:100,
      },
      {
        title: "Engineering",
        path: "/engineering/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("engineering"),
        priority:100,
      },
      {
        title: "Git",
        path: "/git/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("git"),
        priority:100,
      },
      {
        title: "Html",
        path: "/html/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("html"),
        priority:12,
      },
      {
        title: "Http",
        path: "/http/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("http"),
        priority:100,
      },
      {
        title: "Javascript",
        path: "/javascript/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("javascript"),
        priority:10,
      },
      {
        title: "Jest",
        path: "/jest/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("jest"),
        priority:100,
      },
      {
        title: "linux",
        path: "/linux/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("linux"),
        priority:100,
      },
      {
        title: "MobileWeb",
        path: "/mobileWeb/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("mobileWeb"),
        priority:100,
      },
      {
        title: "Nextjs",
        path: "/nextjs/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nextjs"),
        priority:100,
      },
      {
        title: "Nginx",
        path: "/nginx/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nginx"),
        priority:100,
      },
      {
        title: "Nodejs",
        path: "/nodejs/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("nodejs"),
        priority:100,
      },
      {
        title: "Npm",
        path: "/npm/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("npm"),
        priority:100,
      },
      {
        title: "React",
        path: "/react/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("react"),
        priority:16,
      },
      {
        title: "Rollupjs",
        path: "/rollupjs/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("rollupjs"),
        priority:100,
      },
      {
        title: "Shell",
        path: "/shell/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("shell"),
        priority:100,
      },
      {
        title: "Typescript",
        path: "/typescript/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("typescript"),
        priority:15,
      },
      {
        title: "Vue",
        path: "/vue/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("vue"),
        priority:100,
      },
      {
        title: "Webpack",
        path: "/webpack/",
        sidebarDepth: 1,
        collapsable: true,
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        children: getChildrenPaths("webpack"),
        priority:100,
      },
    ].filter(item=>!["Angular"].includes(item.title)).sort((a,b)=>a.priority - b.priority),
    //   sidebar: 'auto'
  },
};
