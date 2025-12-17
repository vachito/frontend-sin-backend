import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'
import ProjectDetailView from '@/views/projects/ProjectDetailView.vue'
import DapView from '@/views/DapView.vue'
import StatusesView from '@/views/Statuses/StatusesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project',
      component: HomeView,
      children: [
        {
          path: 'list',
          name: 'list-project',
          component: ProjectsView,
        },
        {
          path: 'details',
          name: 'project-details',
          component: ProjectDetailView,
        },
        {
          path: 'estados',
          name: 'statuses',
          component: StatusesView,
        },
        {
          path: '/muni',
          name: 'muni',
          component: DapView
        },
      ]
    },
  ],
})

export default router
