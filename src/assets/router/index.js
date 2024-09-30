import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/pages/TheHome'



const routes = [
 { path: '/', name: 'Home', component: TheHome },
 {
  path: '/the-contact',
  name: 'the.contact',
  component: () => import('@/pages/TheContact'),
 },
 {
  path: '/the-about',
  name: 'the.about',
  component: () => import('@/pages/TheAbout'),
 },
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})
//  // this is the active links control fot the color. **below**
//  linkActiveClass: 'vue-school-active-link',
//  scrollBehavior(to, from, savedPosition) {
//   return savedPosition || new Promise((resolve) => {
//    setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
//   })
//  }
// })
export default router