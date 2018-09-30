import Vue from 'vue'
import Router from 'vue-router'

import login from '../page/login/login'
import mainPage from '../page/mainPage'
import store from '../page/storeMgt/store/store'
import store1 from '../page/storeMgt/store1/store1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },
    //登录后页面主路由配置
    {
      path: '/mainPage',
      component: mainPage,
      children: [
        {
          //子路由规则，上级目录+‘/’+自身目录
          path:'storeMgt/store',
          component:store,

        },
        {
          //子路由规则，上级目录+‘/’+自身目录
          path:'storeMgt/store1',
          component:store1,

        },
      ]
    }

  ]
})
