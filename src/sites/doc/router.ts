/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
const pagesRouter: Array<RouteRecordRaw> = [];

const modulesPage = import.meta.glob('/src/packages/**/doc.md');
for (const path in modulesPage) {
  const name = (/packages\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: pagesRouter
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: '/'
  }
});
const router = createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     const id = to.hash.split('#')[1];
  //     const ele = document.getElementById(id);
  //     setTimeout(() => {
  //       ele && ele.scrollIntoView(true);
  //     });
  //   }
  // }
});

export default router;
