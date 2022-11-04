import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/Users/q.li5/Desktop/NJUPT/vuepress-githubPage/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/Users/q.li5/Desktop/NJUPT/vuepress-githubPage/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
