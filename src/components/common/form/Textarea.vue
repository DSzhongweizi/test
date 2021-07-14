<template>
  <div class="textarea">
    <textarea
      :name="name"
      :id="id"
      :rows="rows"
      :placeholder="`请输入您的${text}`"
      :required="required"
      :value="value"
      @input="emit('update', $event.target.value)"
    />
  </div>
  {{ tips }}
</template>

<script setup>
import { defineEmit, defineProps } from "@vue/runtime-core";
const emit = defineEmit(["update"]);
const props = defineProps({
  textarea: Object,
  value: String,
});
const {
  id,
  name,
  text,
  width = "900px",
  required = true,
  tips,
  rows = 10,
} = props.textarea;
</script>
<style lang='scss' scoped>
.textarea {
  margin: 10px 100px 10px 0;
  textarea {
    width: 900px;
    padding: 10px;
    @include input;
  }
}
</style>
