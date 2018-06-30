/*
 * File: router.js
 * Project: eat_what
 * File Created: Saturday, 30th June 2018 9:34:57 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Saturday, 30th June 2018 10:58:05 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import eatWhat from './views/eatWhat.vue';
import management from './views/management.vue';
import statistics from './views/statistics.vue';

// const eatWhat = () => import('./views/eatWhat.vue');
// const management = () => import('./views/management.vue');
// const statistics = () => import('./views/statistics.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'eatWhat',
      component: eatWhat
    },
    {
      path: '/management',
      name: 'management',
      component: management
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});