import Home from "@/components/pages/Home";
import ThreadShow from "@/components/pages/ThreadShow";
import NotFound from "@/components/pages/NotFound";

import { createRouter, createWebHistory } from "vue-router";
//import  * as VueRouter from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    /* kod pro uchování URL, když ji zadám špatně, aby se zobrazila NotFound stránka a zároveň se zachovala v prohlížeči špatná URL
    beforeEnter (to, from, next) {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
      if (threadExist) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: {pathMatch: to.path.substring(1).split(separator:'/')},
          query: to.query,
          hash: to.hash
        })
      }
    }

    */
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
