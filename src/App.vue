<template>
  <div id="app">
    <header><about-view></about-view> <home-view></home-view></header>
    <div class="routers">
      <nav>
        <router-link to="/login">Login</router-link> |
        <router-link to="/list">List</router-link>
      </nav>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>
<script>
// import Login from "./views/Login.vue";
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: { AboutView, HomeView },
  //name:'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
