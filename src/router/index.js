import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

    // product 
    {
      path: '/product',
      name: 'product',
      component: () => import('../components/product/ProductView.vue')
    },
    {
      path: '/product/edit/:id',
      name: 'edit-product',
      component: () => import('../components/product/UpdateProduct.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('../components/product/ProductDetails.vue')
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: () => import('../components/product/AddProduct.vue')
    }
  ]
})

export default router
