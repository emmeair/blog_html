import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Tag from '../views/Tag.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Index 
  },
  {
    path: '/index',
    name: '首页',
    component: Index 
  },
  {
    path: '/tag',
    name: '标签',
    component: Tag 
  },
  {
    path: '/login',
    name: '登录',
    component: Login 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
} 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
