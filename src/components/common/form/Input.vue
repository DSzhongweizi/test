<template>
  <div class="input">
    <span v-if="direc" :class="{ hidden: true }">*</span>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="`${pre + text}`"
      :required="required"
      :value="value"
      @input="emit('update', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineEmit, defineProps, ref } from "@vue/runtime-core";
const props = defineProps({
  input: Object,
  value: String,
});
const {
  id,
  name,
  type,
  text,
  width = "480px",
  required = true,
  direc,
  pre = "请输入您的",
  align = "left",
} = props.input;
const emit = defineEmit(["update"]);
</script>
<style lang='scss' scoped>
.input {
  margin: 10px 0;
  input {
    text-align: v-bind(align);
    width: v-bind(width);
    height: 50px;
    padding: 10px;
    @include input;
  }
}
</style>
