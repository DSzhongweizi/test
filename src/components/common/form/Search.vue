<template>
  <div class="search">
    <input
      type="text"
      name="search"
      id=""
      :placeholder="text"
      @input="emit('search', $event.target.value)"
      @keyup.enter="emit('search', $event.target.value)"
    />
    <span class="iconfont icon-search"></span>
  </div>
</template>

<script setup >
import { defineEmit, defineProps } from "@vue/runtime-core";
const props = defineProps({
  search: Object,
});
const { text } = props.search;
const emit = defineEmit(["search"]);
</script>
<style lang='scss' scoped>
.search {
  position: relative;
  color: #ccc;
  input {
    @include border;
    width: 400px;
    height: 50px;
    padding: 0 10px;
    font-size: 24px;
  }
  .iconfont {
    position: absolute;
    right: 10px;
    top: 8px;
    bottom: 5px;
    font-size: 32px;
    height: 50px;
  }
}
</style>
