import { createRouter, createWebHistory } from 'vue-router'
// Layouts
import  FronendLayout from '@/layouts/Frontend.vue'
// view  
import  Home from '@/views/frontend/Home.vue'
import  About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

const routes = [
  // ---------------  Frontend Routing -----------------
  {
    path: '/',
    name: 'Home',
    component: FronendLayout,
    children:[{
      path:'',
      component:Home
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: FronendLayout,
    children:[{
      path:'',
      component:About
    }]
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FronendLayout,
    children:[{
      path:'',
      component:Portfolio
    }]
  },{
    path: '/service',
    name: 'Service',
    component: FronendLayout,
    children:[{
      path:'',
      component:Service
    }]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FronendLayout,
    children:[{
      path:'',
      component:Contact
    }]
  }
  ,
  {
    path: '/register',
    name: 'Register',
    component: FronendLayout,
    children:[{
      path:'',
      component:Register
    }]
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: FronendLayout,
    children:[{
      path:'',
      component:Login
    }]
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: FronendLayout,
    children:[{
      path:'',
      component:ForgotPassword
    }]
  },
  // Error 404 
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  }
   // ---------------  Backend Routing -----------------
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
