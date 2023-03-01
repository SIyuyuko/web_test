<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js App" />
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
