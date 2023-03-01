//路由配置
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login.vue"),
    children: [
      {
        path: 'userlogin',
        component: () => import("../components/UserLogin.vue")
      }
    ]
  },
  {
    path: '/list',
    component: () => import("../views/List.vue"),
    children: [
      {
        path: 'TableList',
        component: () => import('../components/TableList.vue')
      }

    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
// export { routes };

