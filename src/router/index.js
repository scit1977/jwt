import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/pages/login'
import home from '@/pages/home'
//import all from '@/pages/all'


Vue.use(VueRouter)

const routes=[
  { path: '/login', name: 'login', component: login, hidden: true },
  { path: "/home", name: 'home',        component: home }, 
  { path:"/",redirect: '/home',component:home} 
  ]
   
export default new VueRouter({  //3.设置路由
	mode:"history",
	base:'/jwt/',//__dirname, //将要部署的文件夹路径
	routes: routes
})