<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Login">
    <h5>这是一个登录界面</h5>
    <UserLogin></UserLogin>
    <!-- <router-link to="/login/userlogin">用户登录入口</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import UserLogin from "../components/UserLogin.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    UserLogin
  },
};
</script>