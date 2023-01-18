import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '@/views/JournalView.vue'
import ContactView from '@/views/ContactView.vue'
import ClavierView from '@/views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
