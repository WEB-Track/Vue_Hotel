import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/pages/TheHome'



const routes = [
 { path: '/', name: 'Home', component: TheHome },
 {
  path: '/contact',
  name: 'the.contact',
  component: () => import('@/pages/TheContact'),
  props: route => ({ ...route.params, id: parseInt(route.params.id) }),
  beforeEnter(to, from) {
   const exists = sourceData.destinations.find(
    destination => destination.id === parseInt(to.params.id)
   )
   if (!exists) return {
    name: 'NotFound',
    // allows keeping the URL while rendering a different page
    params: { pathMatch: to.path.split('/').slice(1) },
    query: to.query,
    hash: to.hash,
   }
  },
  children: [
   {
    path: ':experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
   }
  ]
 },
 {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/NotFound.vue')
 }
]

const router = createRouter({
 history: createWebHistory(),
 routes,
 // this is the active links control fot the color. **below**
 linkActiveClass: 'vue-school-active-link',
 scrollBehavior(to, from, savedPosition) {
  return savedPosition || new Promise((resolve) => {
   setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
  })
 }
})
export default router