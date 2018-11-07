import Vue from 'vue'
import Router from 'vue-router'
import aboutMe from '@/components/nav-pages/About-Me'
import Home from '@/components/nav-pages/Home'
import skills from '@/components/nav-pages/Skills'
import projects from '@/components/nav-pages/Projects'
import contacts from '@/components/nav-pages/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    }
  ]
})
