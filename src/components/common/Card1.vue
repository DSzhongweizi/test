<template>
  <div class="card">
    <img :src="img" alt="" srcset="" />
    <div class="bottom">
      <span>{{ name }}</span>
      <span>{{ issuer }}{{ idx }}</span>
      <span class="intro">{{ intro }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, watchEffect } from "@vue/runtime-core";

const props = defineProps({
  card: Object,
  idx: Number,
});
const { img, issuer, name, intro } = props.card;
</script>
<style lang='scss' scoped>
.card {
  max-width: 270px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  background-color: #fff;
  @include flex($fd: column);
  img {
    border-radius: 10px 10px 0 0;
    max-height: 350px;
  }
  .bottom {
    padding: 20px;
    font-size: 20px;
    @include flex($fd: column, $ai: center);
    span {
      margin: 5px 0;
    }
    .intro {
      font-size: 18px;
      color: #999;
    }
  }
}
</style>
