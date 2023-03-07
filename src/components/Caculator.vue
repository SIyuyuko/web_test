// 这一页组件用于练习element ui代码
<template>
  <div class="caculator-form">
    <h5>这可能是一个计算器</h5>
    <input v-model="num1">
    <select v-model="value">
      <option v-for="i in options" :key="i.value" :label="i.label" :value="i.value">
      </option>
    </select><input v-model="num2"><button @click="compute">计算</button><br>
    <span>结果为：{{result}}</span>
    <el-divider></el-divider>
    <div class="el-nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="rgb(46, 139, 87, 0.8)" text-color="#ffffff" active-text-color="	#F0FFF0" @select="handleSelect">
        <el-menu-item index="1">个人主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">推荐网站</template>
          <el-menu-item index="2-1">Bilibili</el-menu-item>
          <el-menu-item index="2-2">pixiv</el-menu-item>
          <el-submenu index="2-3">
            <template slot="title">娱乐 </template>
            <el-menu-item index="2-3-1">网易云音乐</el-menu-item>
            <el-menu-item index="2-3-2">Instagram</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: 1,
        label: "加法"
      }, {
        value: 2,
        label: "减法"
      },
      {
        value: 3,
        label: "乘法"
      }, {
        value: 4,
        label: "除法"
      }
      ], value: "",
      activeIndex: "1", num1: 0, num2: 0, result: 0
    }
  }, methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }, compute() {
      this.result = Number(this.num1 + this.num2)
      return this.result;
    }
  }
  , computed: {
  }, watch: {

  }
}
</script>

<style>
@import url("../assets/style/theme/index.css");
</style>