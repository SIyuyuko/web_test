<template>
  <div class="list">
    <button @click="isShow=!isShow">显示表格</button>
    <button @click="list.push(list.length + 1)">添加元素</button>
    <button @click="list.pop()">删除元素</button>
    <button @click="list.reverse()">翻转元素</button>
    <p id="split-line">___________________________________</p>
    <table id="list" style="border: green solid; margin: auto" v-if="isShow && list.length">
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
        isShow:true
    };
  },
  methods: {
    show() {
      
    },
  },
};
</script>
<style>
#split-line {
  color:grey;
  font-weight: bold;
}

</style>