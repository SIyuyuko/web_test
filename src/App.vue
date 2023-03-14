<template>
  <div id="app">
    <header>
      <about-view></about-view>
      <home-view></home-view>
    </header>
    <footer></footer>
  </div>
</template>
<script>
// 全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生。
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
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: larger;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  background-color: rgb(102, 205, 170, 0.1);
}
body {
  background-image: url("./assets/neko-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
