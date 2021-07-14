<template>
  <div class="label">
    <div class="box">
      <span class="must-symbol" :class="{ hidden: !required }">*</span>
      <label :for="id">{{ text }}</label>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "@vue/runtime-core";

const props = defineProps({
  label: Object,
});
const {
  id,
  text,
  required = true,
  width_label = "4em",
  direc = "row",
} = props.label;
let ai = "stretch";
let jc = "stretch";
direc == "row" ? (ai = "center") : (jc = "center");
</script>
<style lang='scss' scoped>
.label {
  @include flex($fd: v-bind(direc), $ai: v-bind(ai), $jc: v-bind(jc));
  label {
    display: block;
    margin-right: 25px;
    @include justify-title($fs: 24px, $w: v-bind(width_label));
  }
}
</style>
