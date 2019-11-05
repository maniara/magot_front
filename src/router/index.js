import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import MyToken from '../views/MyToken.vue'
import MemberInfo from '../views/MemberInfo.vue'
import AccountInfo from '../views/AccountInfo.vue'
import PasswordReset from '../views/PasswordReset.vue'
import PasswordChange from '../views/PasswordChange.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/Company.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/Payment.vue')
  },
  { 
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/memberInfo',
    name: 'memberinfo',
    component: MemberInfo
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/mytoken',
    name: 'mytoken',
    component: MyToken
  },
  {
    path:'/accountInfo',
    name: 'accountInfo',
    component: AccountInfo
  },
  {
    path:'/PasswordReset',
    name: 'passwordReset',
    component: PasswordReset
  },
  {
    path:'/passwordChange',
    name: 'passwordChange',
    component: PasswordChange
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
