<template>
  <div :title="remark" class="about">
    <a href="http://www.bilibili.com" style="color: rgb(0, 228, 152);">Vue Practice Field</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      remark: "点击将离开当前页面"
    }
  }
}
</script>>
<style>
.about {
  font-weight: 700;
  font-size: xx-large;
  color: rgb(0, 228, 152);
  text-decoration: overline;
}
</style>
