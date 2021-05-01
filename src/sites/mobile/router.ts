import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'mobile',
    component: Index
  }
];

const modulesPage = import.meta.glob('/src/packages/**/demo.vue');
for (const path in modulesPage) {
  const name = (/packages\/(.*)\/demo.vue/.exec(path) as any[])[1];
  routes.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
