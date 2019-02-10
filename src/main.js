import Vue from 'vue'
import VueRx from 'vue-rx';
Vue.use(VueRx);

import Router from 'vue-router'
import App from './App.vue'
import Index from './pages/Index.vue'
import InitUser from './pages/InitUser.vue'
import Checkin from './pages/Checkin.vue'
import * as Database from './database/Database.js';


Vue.config.productionTip = false
Vue.use(Router)

const r = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/logon',
      name: 'logon',
      component: InitUser
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: Checkin
    },
  ]
})

Promise.all([
    // load things before vue startup
    Database.init()
]).then((
) => {
    return new Vue({
      router: r,
      render: h => h(App),
    }).$mount('#app')
});
