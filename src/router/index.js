import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import List from '../views/List.vue'
import Type from '../views/Type.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/browse',
  name: 'Browse',
  component: Browse
},
{
path: '/list',
name: 'List',
component: List
},
{
path: '/type',
name: 'Type',
component: Type
},
{
path: '/about',
name: 'About',
component: About
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
