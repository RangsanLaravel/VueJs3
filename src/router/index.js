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
    ,
    meta: {
      title: 'หน้าหลัก',
     // description: 'รายละเอียดหน้า 404'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: FronendLayout,
    children:[{
      path:'',
      component:About
    }],
    meta:{
      title:'เกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FronendLayout,
    children:[{
      path:'',
      component:Portfolio
    }],
    meta:{
      title:'ผลงาน'
    }
  },{
    path: '/service',
    name: 'Service',
    component: FronendLayout,
    children:[{
      path:'',
      component:Service
    }],
    meta:{
      title:'บริการ'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FronendLayout,
    children:[{
      path:'',
      component:Contact
    }],
    meta:{
      title:'ติดต่อเรา'
    }
  }
  ,
  {
    path: '/register',
    name: 'Register',
    component: FronendLayout,
    children:[{
      path:'',
      component:Register
    }],
    meta:{
      title:'สมัครสามาชิกใหม่'
    }
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: FronendLayout,
    children:[{
      path:'',
      component:Login
    }],
    meta:{
      title:'เข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: FronendLayout,
    children:[{
      path:'',
      component:ForgotPassword
    }],
    meta:{
      title:'ลืมรหัส'
    }
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
