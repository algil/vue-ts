export function loadPage(module: string, view: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/modules/${module}/pages/${view}.page.vue`);
}

export function loadComponent(module: string, component: string) {
  return () => import(/* webpackChunkName: "[request]" */ `@/modules/${module}/components/${component}.vue`);
}
