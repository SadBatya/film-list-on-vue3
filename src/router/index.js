import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import FilmDetails from '../views/FilmDetails.vue'
import AboutUs from '../views/AboutUs.vue'


const routes = [
  {path:'/', component: Home},
  {path:'/filmdetail/:id', component: FilmDetails},
  {path:'/aboutus', component: AboutUs}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router