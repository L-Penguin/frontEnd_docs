export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/imgs/logo.jpg",
    "actions": [
      {
        "text": "内容介绍",
        "link": "/intro/",
        "type": "secondary"
      },
      {
        "text": "JS部分 →",
        "link": "/javascript/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "💡 javascript技术梳理",
        "details": "整理javascript相关面试点整理，涵盖一些常用的技术点"
      },
      {
        "title": "🛠️ HTML技术梳理",
        "details": "从基础配置，到高级优化，到项目配置，最后到原理分析"
      },
      {
        "title": "📦 CSS技术梳理",
        "details": "CSS内容"
      },
      {
        "title": "📦 Vue技术梳理",
        "details": "Vue内容"
      },
      {
        "title": "📦 计算机网络技术梳理",
        "details": "计算机网络技术内容"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present L_Penguin"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
