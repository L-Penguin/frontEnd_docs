export const searchIndex = [
  {
    "title": "首页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS部分",
    "headers": [],
    "path": "/intro/CSS.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTML部分",
    "headers": [],
    "path": "/intro/HTML.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "计算机网络部分",
    "headers": [],
    "path": "/intro/network.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JS部分",
    "headers": [],
    "path": "/intro/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue部分",
    "headers": [],
    "path": "/intro/Vue.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS常见问题整理",
    "headers": [
      {
        "level": 3,
        "title": "CSS优先级",
        "slug": "css优先级",
        "children": []
      },
      {
        "level": 3,
        "title": "重排（reflow）和重绘（repaint）的理解",
        "slug": "重排-reflow-和重绘-repaint-的理解",
        "children": []
      },
      {
        "level": 3,
        "title": "BFC容器",
        "slug": "bfc容器",
        "children": []
      },
      {
        "level": 3,
        "title": "flex布局、用法、属性",
        "slug": "flex布局、用法、属性",
        "children": []
      },
      {
        "level": 3,
        "title": "清除浮动：clear（4种方法）",
        "slug": "清除浮动-clear-4种方法",
        "children": []
      },
      {
        "level": 3,
        "title": "position定位",
        "slug": "position定位",
        "children": []
      },
      {
        "level": 3,
        "title": "CSS选择器",
        "slug": "css选择器",
        "children": []
      },
      {
        "level": 3,
        "title": "盒子模型",
        "slug": "盒子模型",
        "children": []
      }
    ],
    "path": "/CSS/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "HTML常见问题整理",
        "slug": "html常见问题整理",
        "children": [
          {
            "level": 3,
            "title": "html5部分",
            "slug": "html5部分",
            "children": []
          },
          {
            "level": 3,
            "title": "script标签中的属性：defer、async",
            "slug": "script标签中的属性-defer、async",
            "children": []
          },
          {
            "level": 3,
            "title": "href和src的区别",
            "slug": "href和src的区别",
            "children": []
          },
          {
            "level": 3,
            "title": "css和js的导入",
            "slug": "css和js的导入",
            "children": []
          },
          {
            "level": 3,
            "title": "少见html属性",
            "slug": "少见html属性",
            "children": []
          }
        ]
      }
    ],
    "path": "/HTML/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JS常见问题整理",
    "headers": [
      {
        "level": 3,
        "title": "数据类型分类（基本和引用）",
        "slug": "数据类型分类-基本和引用",
        "children": []
      },
      {
        "level": 3,
        "title": "this指向问题",
        "slug": "this指向问题",
        "children": []
      }
    ],
    "path": "/javascript/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "计算机网络常见问题",
    "headers": [
      {
        "level": 3,
        "title": "浏览器输入url后流程",
        "slug": "浏览器输入url后流程",
        "children": []
      },
      {
        "level": 3,
        "title": "发起TCP连接",
        "slug": "发起tcp连接",
        "children": []
      }
    ],
    "path": "/network/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue常见问题整理",
    "headers": [
      {
        "level": 3,
        "title": "MVVM介绍",
        "slug": "mvvm介绍",
        "children": []
      },
      {
        "level": 3,
        "title": "Vue3的新组件",
        "slug": "vue3的新组件",
        "children": []
      },
      {
        "level": 3,
        "title": "Vue2和Vue3的区别",
        "slug": "vue2和vue3的区别",
        "children": []
      },
      {
        "level": 3,
        "title": "自定义指令directive",
        "slug": "自定义指令directive",
        "children": []
      },
      {
        "level": 3,
        "title": "vue2和vue3的响应式原理区别",
        "slug": "vue2和vue3的响应式原理区别",
        "children": []
      },
      {
        "level": 3,
        "title": "vue的插槽",
        "slug": "vue的插槽",
        "children": []
      },
      {
        "level": 3,
        "title": "vue的Hooks",
        "slug": "vue的hooks",
        "children": []
      },
      {
        "level": 3,
        "title": "nextTick的实现原理",
        "slug": "nexttick的实现原理",
        "children": []
      },
      {
        "level": 3,
        "title": "Vue.set方法如何实现",
        "slug": "vue-set方法如何实现",
        "children": []
      }
    ],
    "path": "/Vue/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
