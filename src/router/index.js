import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Signup from '../views/Signup.vue'
import Like from '../views/Like.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/signup',
    name:'Signup',
    component:Signup
  },
  {
    path:'/like',
    name:'Like',
    component:Like
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
