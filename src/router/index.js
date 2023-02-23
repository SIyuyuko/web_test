import VueRouter from 'vue-router'

const routes = [
  {
    path: '/login',
    component: {
      Login: () => import("../components/Login.vue")
    }
  },
  {
    path: '/pagelost',
    component: {
      Pagelost: () => import("../components/Pagelost.vue")
    }
  }
];
const router = new VueRouter({
  routes
});

export default router;
export { routes };

