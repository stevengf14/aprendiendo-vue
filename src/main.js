import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles';
import MyComponent from './components/MyComponent';
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/last-articles', component: LastArticles},
  {path: '/my-component', component: MyComponent},
  {path: 'hello-world', component: HelloWorld}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
