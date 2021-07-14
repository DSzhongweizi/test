<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      @input="$emit('update:checkbox', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineEmit, defineProps, ref, watchEffect } from "@vue/runtime-core";
const props = defineProps({
  checkbox: Object,
  direction: String,
});
const { name, value, checked } = props.checkbox;

// const checked = ref(Object.keys(options)[0]);
// const choose = (sop, ck) => {
//   checked.value = ck;
//   for (let op in options) {
//     options[op].label == sop.label
//       ? (sop.checked = !sop.checked)
//       : (options[op].checked = false);
//   }
// };
</script>
<style lang='scss' scoped>
.select {
  @include flex($fd: v-bind(direction), $ai: center);
  span {
    display: inline-block;
    margin-right: 20px;
    @include option(140px, 50px, 5px);
    input {
      position: absolute;
      top: -9999px;
    }
  }
}
</style>


