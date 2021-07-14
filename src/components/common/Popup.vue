<template>
  <div class="mask"></div>
  <div class="popup">
    <div class="title">
      <span>{{ title }}</span>
      <i class="iconfont icon-delete" @click="emit('close')"></i>
    </div>
    <slot></slot>
    <div class="bt-box">
      <button v-if="confirm" @click="emit('confirm')">
        {{ confirm }}
      </button>
      <button v-if="cancel" @click="emit('close')">
        {{ cancel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps } from "@vue/runtime-core";
const props = defineProps({
  popup: Object,
});
const { title = "弹框", width = "auto", confirm, cancel } = props.popup;
const emit = defineEmit(["close", "confirm"]);
</script>
<style lang='scss' scoped>
.mask {
  @include mask;
}
.popup {
  @include center($p: fixed, $z: 1000);
  background-color: #fff;
  padding: 24px;
  width: v-bind(width);
  .title {
    @include flex($jc: space-between);
    font-size: 24px;
    font-weight: bold;
    color: #000;
    .icon-delete {
      font-size: 22px;
      cursor: pointer;
    }
    margin-bottom: 20px;
  }
  .bt-box {
    @include flex($jc: space-evenly);
    button {
      @include bt;
    }
  }
}
</style>
