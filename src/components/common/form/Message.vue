<template>
  <div class="message" v-if="show">
    <i class="iconfont icon-success"></i>
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from "@vue/runtime-core";
defineProps({
  title: String,
});
const show = ref(true);
setTimeout(() => (show.value = false), 2000);
</script>
<style lang='scss' scoped>
.message {
  @include center(fixed);
  width: 300px;
  height: 300px;
  background-color: #000;
  border-radius: 10px;
  opacity: 0.6;
  color: #fff;
  @include flex(column, nowrap, center, center);
  .iconfont {
    font-size: 90px;
  }
  span {
    font-size: 40px;
  }
}
</style>
