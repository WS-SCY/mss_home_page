import Vue from 'vue'
import Router from 'vue-router'
import myHomePage from '@/components/myHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: myHomePage
    }
  ]
})
