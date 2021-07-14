<template>
  <div class="upload">
    <div class="box" @click="upload">
      <i class="iconfont icon-upload"></i>
      <span>点击上传</span>
    </div>
    <input
      type="file"
      :id="id"
      :name="name"
      :required="required"
      :value="value"
      :accept="accept"
      @input="emit('update', $event.target.value)"
      @change="upload"
    />
    <img :src="img" alt="" />
  </div>
  {{ tips }}
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineEmit, defineProps, watchEffect } from "@vue/runtime-core";
const emit = defineEmit(["update"]);
const props = defineProps({
  upload: Object,
  value: String,
});
const {
  id,
  name,
  required = true,
  width = "220px",
  accept,
  tips,
} = props.upload;
let img = ref("");
let img_z = ref(1);
let img_o = ref(0);
const upload = () => {
  let file = document.getElementById(id).files[0];
  if (file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function () {
      img.value = reader.result;
      // tempFile.value = reader.result;
      img_z.value = 10;
      img_o.value = 1;
    };
    reader.readAsDataURL(file);
  }
};
</script>
<style lang='scss' scoped>
.upload {
  position: relative;
  margin: 10px 100px 10px 0;
  background-color: #f8f8f8;
  @mixin wh {
    width: v-bind(width);
    height: 220px;
  }
  .box {
    @include flex($fd: column, $jc: center, $ai: center);
    @include border;
    @include wh;
    .iconfont {
      font-size: 60px;
    }
    span {
      font-size: 20px;
    }
  }
  input {
    @include wh;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 2;
  }
  img {
    @include wh;
    position: absolute;
    top: 0;
    opacity: v-bind(img_o);
    z-index: v-bind(img_z);
  }
}
</style>
