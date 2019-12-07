import Vue from 'vue'
import VueRouter from 'vue-router'
import mostStarredRepos from '../views/mostStarredRepos'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Most Starred Repos',
    component: mostStarredRepos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
