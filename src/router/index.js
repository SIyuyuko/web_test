//路由配置
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login.vue")
  },
  {
    path: '/list',
    component: () => import("../views/List.vue"),
  }, {
    path: '/form',
    meta: {
      isAuth: true
    },
    component: () => import("../views/Form.vue"),
    children: [{
      path: 'infoform',
      component:()=>import("../components/InfoForm.vue")
    }, {
      path: 'caculator',
      component: () => import("../components/Caculator.vue")
    }],
  }, {
    //配置默认路由
    path: '/',
    component: () => import("../views/Login.vue")
  }
];
const router = new VueRouter({
  routes
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuth) {
//     if (localStorage.getItem('username') === "") {
//       alert("请先登录");
//       next('/login');
//     } else {
//       next('/form');
//     }
// }
// });
export default router;
// export { routes };

