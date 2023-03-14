<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js App" />
    <div class="routers">
      <nav>
        <router-link to="/login">Login</router-link> |
        <router-link to="/list">List</router-link> |
        <router-link to="/form">Form</router-link>
      </nav>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import UserLogin from "../components/UserLogin.vue";
// import TableList from "../components/TableList.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    // UserLogin,
    // TableList
  },
};
</script>
