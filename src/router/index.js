import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
import Table from '@/views/table/show'
import HighChartsShow from '@/views/highcharts/show-highchart'
import DragDrop from '@/views/drag-drop/drag-drop'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/table',
      name: '用户管理',
      component: Layout,
      children:[
        {
          path:'index',
          name:'用户列表',
          component:Table
        },
        {
          path:'highcharts',
          name:'highcharts展示',
          component:HighChartsShow
        },
        {
          path:'dragdrop',
          name:'dragdrop展示',
          component:DragDrop
        }
      ]
    }
  ]
})
