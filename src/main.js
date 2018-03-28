import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import DotAlignContainer from './DotAlignContainer'
import Home from './Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/dotalign', component: DotAlignContainer }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
