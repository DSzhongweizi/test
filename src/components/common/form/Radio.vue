<template>
  <div :class="['radio', { selected: checked }]">
    {{ text }}
    <input
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      @input="emit('update', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineEmit, defineProps, ref, watchEffect } from "@vue/runtime-core";
const props = defineProps({
  radio: Object,
  checked: Boolean, //放到这里才能监听到？？？
});
const { id, name, text, value } = props.radio;
const emit = defineEmit(["update"]);
// const checked = ref(false);
const select = (e) => console.log(e);
</script>
<style lang='scss' scoped>
@mixin wh {
  width: 140px;
  height: 50px;
}
@mixin com {
  position: relative;
  font-size: 20px;
  border-radius: 5px;
  @include flex($jc: center, $ai: center);
  @include border;
  @include wh;
  input {
    @include wh;
    position: absolute;
    top: 0;
    opacity: 0;
  }
}
.radio {
  @include com;
  color: #000;
}
.selected {
  @include com;
  color: #b22631;
  border-color: #b22631;
  background-color: #f0d4d6;
}
</style>
