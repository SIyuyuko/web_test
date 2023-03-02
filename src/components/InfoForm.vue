<template>
  <div class="info-form">
    <h5>这是一个信息收集表</h5>
    <div class="content">
    <span>姓名：<input v-model="name" /></span><br />
    <span>年龄：<input v-model="age" /></span><br />
    <span
      >是否毕业：<input type="radio" v-model="isGraguated" value="是" />是</span
    ><input type="radio" v-model="isGraguated" value="否"/>否<br />
    <span>最高学历:<select v-model="grade" style="font-size: inherit;font-weight: inherit;color: inherit;">
      <option disabled value="">请选择相应选项</option>
      <option>大专或中专</option>
      <option>大学本科</option>
      <option>硕士</option>
      <option>博士</option>
    </select></span><br>
    <span
      >意向职位：
      <label for="前端开发">前端开发</label>
      <input type="checkbox" value="前端开发" v-model="favMajors" />
      <label for="Java开发">Java开发</label>
      <input type="checkbox" value="Java开发" v-model="favMajors" />
      <label for="C++开发">C++开发</label>
      <input type="checkbox" value="C++开发" v-model="favMajors" />
      <label for="渗透测试">渗透测试</label>
      <input type="checkbox" value="渗透测试" v-model="favMajors" /></span
    ><br />
    <span v-show="favMajors.length>0">当前已选择：<span v-for="i of favMajors" :key="i" style="text-decoration: underline;">{{ (i += " ") }}</span>
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
      hobby: "",
      isGraguated: "",
      favMajors: [],
      flag: true,
      grade: "",
    };
  },
  methods: {
    submit() {
      alert("提交成功!");
    },
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
  /* background-image: url("../assets/meow.gif"); */
}
.info-form{
  /* background-image: url("../assets/meow.gif"); */
}
</style>
