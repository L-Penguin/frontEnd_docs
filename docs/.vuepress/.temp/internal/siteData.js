export const siteData = {
  "base": "/frontEnd-docs/",
  "lang": "zh-CN",
  "title": "L_Penguin前端学习",
  "description": "一点一滴都是进步",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/imgs/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
