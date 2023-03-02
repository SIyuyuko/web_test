<template>
  <div class="login-page">
    <h5 :title="remark" :style="{ color }" @click="toggleColor">
      {{ welcome }}
    </h5>
    <!-- class绑定 :class="{welcome:isBlack}" 不能再在标签里指定class 否则会失去效果  -->
    <!-- <h5 :title="remark" :class="{ welcome: isBlack }" @click="toggleBlack">
      {{ welcome }}
    </h5> -->

    <img alt="你好" id="decorate" src="../assets/dragon-hi.jpg" /><br />
    <p>用户名：<input v-model="username" placeholder="请输入你的用户名" /></p>
    <br />
    <button id="submitBtn" @click="submit">确定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcome: "",
      username: "",
      remark: "这是你",
      isBlack: true, //用于class绑定，与css搭配
      color: "blue",
    };
  },
  methods: {
    //提交信息
    submit() {
      if (this.username === "") {
        alert("用户名不能为空!");
      } else {
        alert("欢迎你，" + this.username);
        this.welcome = "你好，" + this.username;
        // this.elementDelete();
      }
    },
    //通过节点删除指定元素(有缺陷)
    elementDelete() {
      // let img = document.getElementsById("decorate");
      // let btn = document.getElementsById("submitBtn");
      // document.getElementsById("decorate").parentElement.removeChild(img);
      // document.getElementsById("submitBtn").parentElement.removeChild(btn);
    },
    toggleColor() {
      this.color = this.color === "black" ? "blue" : "black"; //三元表达式实现颜色切换: 条件?true:false
    },
    toggleBlack() {
      this.isBlack = !this.isBlack; //通过Boolean赋值实现颜色切换
    },
  },
};
</script>
<style>
#decorate {
  height: 80px;
}
.welcome {
  color: blue;
}
</style>