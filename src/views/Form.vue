<template>
  <div class="form-page">
    <h5>这是嵌套路由</h5>
    <nav>
      <router-link class="nav" to="/form/infoform">信息收集表</router-link>
      <router-link class="nav" to="/form/caculator">计算器</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
.nav {
  font-size: large;
  color: rgb(0, 0, 0, 0.7);
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  border: double grey;
  background-color: rgb(128, 128, 128, 0.2);
}
</style>