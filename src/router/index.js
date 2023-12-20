import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/decks',
      name: 'decks',
      component: () => import('../views/DecksView.vue')
    },
    {
      path: '/create-deck',
      name: 'create-deck',
      component: () => import('../views/CreateDeckView.vue')
    },
    {
      path: '/edit-deck',
      name: 'edit-deck',
      component: () => import('../views/EditDeckView.vue')
    },
    {
      path: '/add-flashcard',
      name: 'add-flashcard',
      component: () => import('../views/AddFlashCardView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('../views/TeachersView.vue')
    },
    {
      path: '/teacher-profile',
      name: 'teacher-profile',
      component: () => import('../views/TeacherProfileView.vue')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('../views/StudyView.vue')
    },
    {
      path: '/quiz/',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 })
    })
  }
})

export default router
