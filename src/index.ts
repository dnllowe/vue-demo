import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import DotAlignContainer from './components/DotAlignContainer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/dotalign', component: DotAlignContainer },
  { path: '/dotalign/:view', component: DotAlignContainer }
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
