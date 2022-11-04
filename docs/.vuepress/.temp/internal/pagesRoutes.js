import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-2e78b052","/intro/CSS.html",{"title":"CSS部分"},["/intro/CSS","/intro/CSS.md"]],
  ["v-3f2bf7dc","/intro/HTML.html",{"title":"HTML部分"},["/intro/HTML","/intro/HTML.md"]],
  ["v-54779632","/intro/network.html",{"title":"计算机网络部分"},["/intro/network","/intro/network.md"]],
  ["v-f9e30908","/intro/",{"title":"JS部分"},["/intro/index.html","/intro/README.md"]],
  ["v-097a1eaf","/intro/Vue.html",{"title":"Vue部分"},["/intro/Vue","/intro/Vue.md"]],
  ["v-74368525","/CSS/",{"title":"CSS常见问题整理"},["/CSS/index.html","/CSS/README.md"]],
  ["v-12e0f68b","/HTML/",{"title":""},["/HTML/index.html","/HTML/README.md"]],
  ["v-e02a086e","/javascript/",{"title":"JS常见问题整理"},["/javascript/index.html","/javascript/README.md"]],
  ["v-24f2d5ba","/network/",{"title":"计算机网络常见问题"},["/network/index.html","/network/README.md"]],
  ["v-743faa02","/Vue/",{"title":"Vue常见问题整理"},["/Vue/index.html","/Vue/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
