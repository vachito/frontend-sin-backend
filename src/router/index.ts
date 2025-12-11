import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import AuthLayout from '@/components/Layouts/AuthLayout.vue'
import HoverCard from '@/components/HoverCard.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'
import FhasesView from '@/views/projects/FhasesView.vue'
import CreateTaskForm from '@/components/CreateTaskForm.vue'
import StatusView from '@/views/projects/StatusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path:'login',
          name: 'login',
          component: LoginView,
        },
        {
          path:'register',
          name: 'register',
          component: () => import('@/views/auth/RegisterView.vue'),
        },
      ]
    },
    {
      path: '/project',
      component: HomeView,
      children: [
        {
          path:'list',
          name: 'list-project',
          component: ProjectsView,
        },
        {
          path:'fases',
          name: 'fases-project',
          component: FhasesView,
        },
        {
          path:'tareas',
          name: 'task-fases',
          component: CreateTaskForm,
        },
        {
          path:'estados',
          name: 'statuses',
          component: StatusView,
        },
      ]
    },
    {
      path:'/hover',
      name:'hover',
      component: HoverCard
    },
  ],
})

export default router
