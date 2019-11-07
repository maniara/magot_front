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
import Payment from '../views/Payment.vue'
import Menu from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Admin from '../views/Admin.vue'
import Admin2 from '../views/Admin2.vue'
import Admin3 from '../views/Admin3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: { 
      default: Home,
      nav: Menu,
      footer: Footer
    }
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
    components: { 
      default: Payment,
      nav: Menu,
      footer: Footer
    }
  },
  { 
    path: '/signup',
    name: 'signup',
    components: { 
      default: Signup,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path: '/memberInfo',
    name: 'memberinfo',
    components: { 
      default: MemberInfo,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path: '/login',
    name: 'login',
    components: { 
      default: Login,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path:'/mytoken',
    name: 'mytoken',
    components: { 
      default: MyToken,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path:'/accountInfo',
    name: 'accountInfo',
    components: { 
      default: AccountInfo,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path:'/passwordReset',
    name: 'passwordReset',
    components: { 
      default: PasswordReset,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path:'/passwordChange',
    name: 'passwordChange',
    components: { 
      default: PasswordChange,
      nav: Menu,
      footer: Footer
    }
  },
  {
    path:'/admin',
    name:'admin',
    components: { 
      default: Admin,
      /*nav: AdminMenu
      leftMenu:LeftMenu*/
    }
  },
  {
    path:'/admin2',
    name:'admin2',
    components: { 
      default: Admin2,
    }
  },
  {
    path:'/admin3',
    name:'admin3',
    components: { 
      default: Admin3,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
