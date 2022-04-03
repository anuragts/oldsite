import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../components/Posts.vue')
    },
    {
      path:'/projects',
      name:'projects',
      component: () => import('../components/Projects.vue')
    },
    {
      path:'/books',
      name:'books',
      component: () => import('../components/Books.vue')
    },
    {
      path:'/twitter',
      redirect: 'https://twitter.com/theanuragdev'
    },
    { 
    path: "/:pathMatch(.*)*",
    name: 'NotFound',
    component: () => import('../components/NotFound.vue')
  },
  ]
})

export default router
