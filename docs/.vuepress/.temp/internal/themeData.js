export const themeData = {
  "logo": "/imgs/favicon.ico",
  "lastUpdated": false,
  "navbar": [
    {
      "text": "内容介绍",
      "link": "/intro/"
    },
    {
      "text": "JS部分",
      "link": "/javascript/"
    },
    {
      "text": "HTML部分",
      "link": "/HTML/"
    },
    {
      "text": "CSS部分",
      "link": "/CSS/"
    },
    {
      "text": "Vue部分",
      "link": "/Vue/"
    },
    {
      "text": "计网部分",
      "link": "/network/"
    }
  ],
  "sidebar": {
    "/intro/": [
      {
        "text": "内容介绍",
        "children": [
          "/intro/README.md",
          "/intro/HTML.md",
          "/intro/CSS.md",
          "/intro/network.md",
          "/intro/Vue.md"
        ]
      }
    ],
    "/javascript/": [
      {
        "text": "JS整理",
        "children": [
          "/javascript/README.md"
        ]
      }
    ],
    "/HTML/": [
      {
        "text": "HTML整理",
        "children": [
          "/HTML/README.md"
        ]
      }
    ],
    "/CSS/": [
      {
        "text": "CSS整理",
        "children": [
          "/CSS/README.md"
        ]
      }
    ],
    "/Vue/": [
      {
        "text": "Vue整理",
        "children": [
          "/Vue/README.md"
        ]
      }
    ],
    "/network/": [
      {
        "text": "计网整理",
        "children": [
          "/network/README.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
