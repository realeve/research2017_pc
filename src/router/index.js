import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: function (resolve) {
      require(['../components/Home.vue'], resolve)
    }
  },
    {
      path: '/address',
      component: resolve => {
        require(['../components/MyInfo.vue'], resolve)
      }
    }
  ]
})
