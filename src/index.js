import Router from './router/index.js';
import tooltip from './components/tooltip/index';
import {listenChangeRoute, toggleDrawer} from './utils/drawer';

tooltip.initialize();

const router = Router.instance();

listenChangeRoute();
toggleDrawer();

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^products$/, 'products/list')
  .addRoute(/^products\/add$/, 'products/edit')
  .addRoute(/^products\/([\w()-]+)$/, 'products/edit')
  .addRoute(/^sales$/, 'sales')
  .addRoute(/^categories$/, 'categories')
  .addRoute(/^404\/?$/, 'error404')
  .setNotFoundPagePath('error404')
  .listen();