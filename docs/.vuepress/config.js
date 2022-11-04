const { copyCode } = require("vuepress-plugin-copy-code2");

module.exports = {
  // 站点配置
  base: "/frontEnd-docs/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
  title: "L_Penguin前端学习",
  description: "一点一滴都是进步",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/imgs/favicon.ico",
    lastUpdated: false,
    navbar: [
      {
        text: "内容介绍",
        link: "/intro/",
      },
      {
        text: "JS部分",
        link: "/javascript/",
      },
      {
        text: "HTML部分",
        link: "/HTML/",
      },
      {
        text: "CSS部分",
        link: "/CSS/",
      },
      {
        text: "Vue部分",
        link: "/Vue/",
      },
      {
        text: "计网部分",
        link: "/network/",
      },
    ],
    sidebar: {
      "/intro/": [
        {
          text: "内容介绍",
          children: ["/intro/README.md", "/intro/HTML.md", "/intro/CSS.md", "/intro/network.md", "/intro/Vue.md"],
        },
      ],
      "/javascript/": [
        {
          text: "JS整理",
          children: ["/javascript/README.md"],
        },
      ],
      "/HTML/": [
        {
          text: "HTML整理",
          children: ["/HTML/README.md"],
        },
      ],
      "/CSS/": [
        {
          text: "CSS整理",
          children: ["/CSS/README.md"],
        },
      ],
      "/Vue/": [
        {
          text: "Vue整理",
          children: ["/Vue/README.md"],
        },
        
      ],
      "/network/": [
          {
            text: "计网整理",
            children: ["/network/README.md"],
          },
        ],
    },
  },
  plugins: [
    // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCode({
      // 插件选项
      pure: true,
    }),
    [
      "@vuepress/plugin-external-link-icon",
      {
        locales: {
          "/": {
            openInNewWindow: "open in new window",
          },
          "/zh/": {
            openInNewWindow: "在新窗口打开",
          },
        },
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
