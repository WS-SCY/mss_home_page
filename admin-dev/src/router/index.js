import Vue from 'vue'
import Router from 'vue-router'
import myHomePage from '@/components/myHomePage'
import myTestPage from '@/components/testPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: myHomePage
    },
    {
      path: '/test',
      name: 'testPage',
      component: myTestPage
    }
  ]
})
