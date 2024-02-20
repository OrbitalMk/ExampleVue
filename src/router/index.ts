import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated, setUser } = useAuthStore()

  if (!isAuthenticated()) {
    axios.get('http://127.0.0.1:8082/api/message').then(response => {
      const { data } = response

      setUser({ username: data?.message })
      next()
    }).catch(error => {
      if (error.response!.status === 401) {
        // window.location.href = 'http://127.0.0.1:8082/oauth2/authorization/spring'
      }
    })
  } else {
    next()
  }
})

export default router
