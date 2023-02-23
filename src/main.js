import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; //引入VueRouter
import router from './router';
// import Login from "./components/Login.vue";
// import Pagelost from "./components/Pagelost.vue";
//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.use(VueRouter);
//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
