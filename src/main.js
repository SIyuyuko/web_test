import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; //引入VueRouter
import router from './router';//引入router
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';
// import Login from "./components/Login.vue";
// import Pagelost from "./components/Pagelost.vue";
//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
