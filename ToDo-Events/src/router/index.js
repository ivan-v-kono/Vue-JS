import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList'
import EventDetails from '@/views/EventDetails'
import About from '@/views/About'
import EventCreate from '@/views/EventCreate'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    props: true,
    component: EventCreate
  }
  // This for -->> route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  /* component: () =>
      import(/!* webpackChunkName: "about" *!/ '../views/EventDetails.vue') */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
