<template>
  <div class="list-page">
    <button @click="isShow=!isShow">显示表格</button>
    <button @click="add">添加元素</button>
    <button @click="remove">删除元素</button>
    <button @click="reverse">翻转元素</button>
    <p class="split-line">___________________________________</p>
    <table class="list" style="border: green solid; margin: auto" v-if="isShow && list.length">
      <tr v-for="i of list" :key="i">
        <td>{{ i }}</td>
      </tr>
    </table>
    <p v-else-if="list.length" style="color:green;">List is not empty, but hidden.</p>
    <p v-else style="color:blue;">List is empty.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isShow: true
    };
  },
  methods: {
    add() {
      return this.list.push(this.list.length + 1);
    },
    remove() {
      return this.list.pop();
    },
    reverse() {
      return this.list.reverse();
    }
  }, computed: {
    filtList() {
      return 0;
    }
  }
};
</script>
<style>
.split-line {
  color: grey;
  font-weight: bold;
}
</style>