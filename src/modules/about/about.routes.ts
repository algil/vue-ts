import router from '@/router';
import { loadPage } from '@/modules/core/helpers/routes.helper';

const module = 'about';

router.addRoutes([
  {
    path: '/about',
    name: 'about',
    component: loadPage(module, 'about'),
  },
]);
