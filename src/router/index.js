import { createRouter, createWebHistory } from 'vue-router'
// Layouts Frontend
import  FronendLayout from '@/layouts/Frontend.vue'
//Layouts Backend
import BackendLayout from '@/layouts/Backend.vue'

// Frontend 
import  Home from '@/views/frontend/Home.vue'
import  About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'
//Backend
import Dashboard from '@/views/backend/Dashboard.vue'
import Product from '@/views/backend/Product.vue'

// ตัวแปรทดสอบกำหนดสถานะ
const state =true

//สร้างฟังก์ชั่น
const authGuard =(to,from,next)=>{
  //let isAuthenticated =
  state?next():next({name:'Login'})
}

const routes = [
  // ---------------  Frontend Routing -----------------
  {
    path: '/',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Home',
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
    component: FronendLayout,
    children:[{
      path:'',
    name: 'About',
      component:About
    }],
    meta:{
      title:'เกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Portfolio',
      component:Portfolio
    }],
    meta:{
      title:'ผลงาน'
    }
  },{
    path: '/service',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Service',
      component:Service
    }],
    meta:{
      title:'บริการ'
    }
  },
  {
    path: '/contact',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Contact',
      component:Contact
    }],
    meta:{
      title:'ติดต่อเรา'
    }
  }
  ,
  {
    path: '/register',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Register',
      component:Register
    }],
    meta:{
      title:'สมัครสามาชิกใหม่'
    }
  }
  ,
  {
    path: '/login',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Login',
      component:Login
    }],
    meta:{
      title:'เข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    component: FronendLayout,
    children:[{
      path:'',
    name: 'Forgotpassword',
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
  },
   // ---------------  Backend Routing -----------------

   {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: '',
        name:'Dashboard',
        component: Dashboard,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Dashboard'
    }
  },
  {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: 'products',
        name:'Products',
        component: Product,
        beforeEnter: authGuard
      }
    ],
    meta:{
      title: 'Products'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
