import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';
import DotAlignContainer from './components/DotALignContainer.vue';
Vue.use(VueRouter);
var routes = [
    { path: '/', component: Home },
    { path: '/dotalign', component: DotAlignContainer },
    { path: '/dotalign/:view', component: DotAlignContainer }
];
var router = new VueRouter({
    mode: 'history',
    routes: routes
});
new Vue({
    el: '#app',
    router: router,
    render: function (h) { return h(App); }
});
//# sourceMappingURL=index.js.map