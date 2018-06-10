import router from '@/router';
import { loadPage, loadComponent } from '@/modules/core/helpers/routes.helper';

const module = 'users';

router.addRoutes([
  {
    path: '/',
    name: 'userFile',
    components: {
      leftSidebar: loadComponent(module, 'user-sidebar'),
      default: loadPage(module, 'user-file'),
    },
  },
]);
