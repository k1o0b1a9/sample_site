import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ContactSection from '../components/ContactSection.vue'

const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/services', component: ServicesSection },
  { path: '/contact', component: ContactSection },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router