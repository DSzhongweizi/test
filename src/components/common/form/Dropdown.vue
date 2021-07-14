<template>
  <div class="dropdown-box">
    <span class="select" @click="toggle = !toggle"
      >{{ selected }}
      <i :class="`iconfont icon-arrows-${toggle ? 'down' : 'up'}`"></i
    ></span>
    <div class="dropdown" v-show="toggle">
      <span
        v-for="option in options"
        :key="option"
        @click="(selected = option), (toggle = false), emit('select', option)"
        >{{ option }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineEmit, defineProps } from "@vue/runtime-core";
const emit = defineEmit(["select"]);
const toggle = ref(false);
const props = defineProps({
  dropdown: Object,
});
const { selected, options } = props.dropdown;
</script>

<style lang='scss' scoped>
.dropdown-box {
  float: right;
  position: relative;
  width: 190px;
  background-color: #fff;
  z-index: 1;
  @include border;
  font-size: 20px;
  .select {
    @include flex($jc: space-between, $ai: center);
    padding: 0 13px;
    height: 100%;
    border: none;
    .iconfont {
      font-size: 1em;
    }
  }
  .dropdown {
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 4px 0px rgba(195, 195, 195, 0.69);
    background-color: #fff;
    span {
      cursor: default;
      height: 2em;
      line-height: 2em;
      border: 1px solid #eee;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
