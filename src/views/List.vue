<template>
  <div id="List"><h5>这是一个列表</h5><br>
    <TableList /><br>
  </div>
</template>

<script>
import TableList from "../components/TableList.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  components: {
    TableList
  }
};
</script>