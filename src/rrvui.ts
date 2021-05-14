import { App } from 'vue';
import Layout from './packages/layout/index.vue';

function install(app: App): void {
  const packages = [Layout];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export { Layout };
export default { install, version: '0.1.0' };
