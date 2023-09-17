import { createRouter, createWebHistory } from 'vue-router'
import Pagina2 from "@/views/Pagina2.vue";
import EmbComponent from "@/views/EmbComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Pagina',
      name: 'pagina',
      component: () => import("@/views/Pagina.vue")
    },
    {
      path: '/Pagina2',
      name: 'pagina2',
      
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: Pagina2, 
        EmbComponent
      }
    },
    {
      path: '/App/:name/:age', 
      name: 'app',
      component: () => import("@/App.vue")
    }
  ]
})

export default router
