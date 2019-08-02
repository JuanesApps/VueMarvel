import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import Comics from './components/Comics.vue'
import Characters from './components/Characters.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home},
  { path: '/users', component: Users},
  { path: '/comics', component: Comics},
  { path: '/characters', component: Characters}
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
