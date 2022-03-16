import { createRouter, createWebHistory } from 'vue-router'
import FormList from '@/views/FormList'
import PreviewList from '@/views/PreviewList'

const routes = [
  {
    path: '/',
    name: 'FormList',
    component: FormList
  },
  {
    path: '/previewlist',
    name: 'PreviewList',
    component: PreviewList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
