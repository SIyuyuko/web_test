<template>
  <div class="info-form">
    <h5>这是一个信息收集表</h5>
    <div class="content">
      <span>姓名：<input v-model="name" required="required" /></span><br />
      <span>年龄：<input v-model="age" required="required" /></span><br />
      <span>是否毕业：
        是<input type="radio" v-model="isGraguated" value="是" />
        否<input type="radio" v-model="isGraguated" value="否" />
      </span><br />
      <span>最高学历:
        <select v-model="grade" style="font-size: inherit; font-weight: inherit; color: inherit">
          <option disabled value="">请选择相应选项</option>
          <option>大专或中专</option>
          <option>大学本科</option>
          <option>硕士</option>
          <option>博士</option>
        </select></span><br />
      <span>意向职位：
        <label for="前端开发">前端开发</label>
        <input type="checkbox" value="前端开发" v-model="favMajors" />
        <label for="Java开发">Java开发</label>
        <input type="checkbox" value="Java开发" v-model="favMajors" />
        <label for="C++开发">C++开发</label>
        <input type="checkbox" value="C++开发" v-model="favMajors" />
        <label for="渗透测试">渗透测试</label>
        <input type="checkbox" value="渗透测试" v-model="favMajors" /></span><br />
      <span v-show="favMajors.length > 0">当前已选择：<span v-for="i of favMajors" :key="i" style="text-decoration: underline">{{ (i += " ") }}</span>
      </span>
    </div>
    <button @click="submit">提交信息</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      isGraguated: "",
      favMajors: [],
      flag: true,
      grade: "",
    };
  },
  methods: {
    submit() {
      if (this.name == '') {
        alert("请填写姓名。");
      } else if (isNaN(Number(this.age)) || (Number(this.age) <= 0)) {
        console.log(Number(this.age));
        alert("请填写规范的年龄。");
        // this.age = 0;
      }
      else if (this.isGraguated == '' || this.grade == '') {
        alert("请补全信息。");
      } else if (this.favMajors.length < 1) {
        alert("至少选择一项意向职位。");
      }
      else {
        alert("提交成功!" + '\n' + "你的信息是：" + '\n' + this.showInfo());
      }

    },
    showInfo() {
      return "姓名:" + this.name + '\n' + "年龄:" + this.age + '\n' + "是否毕业：" + this.isGraguated + '\n' + "最高学历:" + this.grade + '\n' + "意向职位:" + this.favMajors + '\n';
      // return JSON.stringify(this.$data);
    }
  },
};
</script>
<style>
.content {
  padding: 5px 5px;
  margin: 15px 15px;
  text-align: left;
  border: solid rgb(0, 128, 0, 0.3);
  font-weight: 600;
  font-size: large;
  color: rgb(0, 0, 0, 0.8);
  background-image: url("../assets/meow.gif");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200px auto;
  background-attachment: scroll;
}
</style>
