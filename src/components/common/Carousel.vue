<template>
  <div class="carousel">
    <i class="iconfont icon-arrows-left" @click="left"></i>
    <div class="card-box">
      <Card1 v-for="(v, i) in cards" :key="i" :card="v" class="item" :idx="i" />
    </div>
    <i class="iconfont icon-arrows-right" @click="right"></i>
  </div>
</template>

<script setup>
import Card1 from "@/components/common/Card1.vue";
import { reactive, ref } from "@vue/reactivity";
import {
  computed,
  defineProps,
  onMounted,
  watchEffect,
} from "@vue/runtime-core";
const props = defineProps({
  carousel: Object,
});
const { img } = props.carousel;
const cards = reactive(Array(5));
cards.fill({
  img: props.carousel.img,
  issuer: "发行人",
  name: "系列（团体）名称",
  intro: "团体介绍团体介绍团体介绍团体介绍团体介绍团体介绍",
});
let items = [];
let len = 0;
onMounted(() => {
  items = [...document.querySelectorAll(".item")];
  len = items.length;
});
const scales = [0.8, 1, 1.2, 1, 0.8];
const z_index = [1, 2, 3, 2, 1];
const offset = [
  ["450%", "290%", "167%", "110%", "50%"],
  ["-75%", "325%", "190%", "83%", "10%"],
  ["-90%", "-200%", "200%", "90%", "0%"],
  ["-83%", "-190%", "-325%", "75%", "-10%"],
  ["-110%", "-167%", "-290%", "-450%", "-50%"],
];
let clickLeft = 0;
let clickRight = 3;
const left = () => {
  items.forEach((cur, i) => {
    let tmp = (i - 1 + len) % len;
    cur.style.transform =
      "scale(" + scales[tmp] + ") translateX(" + offset[i][clickLeft] + ")";
    cur.style["z-index"] = z_index[tmp];
  });
  clickLeft++;
  clickRight++;
  clickLeft %= len;
  clickRight %= len;
  scales.unshift(scales.pop());
  z_index.unshift(z_index.pop());
};
const right = () => {
  console.log(clickRight);
  items.forEach((cur, i) => {
    let tmp = (i + 1 + len) % len;
    cur.style.transform =
      "scale(" + scales[tmp] + ") translateX(" + offset[i][clickRight] + ")";
    cur.style["z-index"] = z_index[tmp];
  });
  clickRight--;
  clickLeft--;
  clickRight = (clickRight + len) % len;
  clickLeft = (clickLeft + len) % len;
  scales.push(scales.shift());
  z_index.push(z_index.shift());
};
</script>
<style lang='scss' scoped>
.carousel {
  @include flex($jc: center);
  position: relative;
  padding: 50px 0;
  .iconfont {
    font-size: 48px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    &:hover {
      color: red;
    }
  }
  .icon-arrows-left {
    left: 10px;
  }
  .icon-arrows-right {
    right: 10px;
  }
  .card-box {
    @include flex($jc: center);
    // width: 1000px;
    .item {
      transition: transform 1s, z-index 1s;
      transform-origin: center;
      &:nth-child(1) {
        transform: scale(0.8) translateX(50%);
        z-index: 1;
      }
      &:nth-child(2) {
        transform: scale(1) translateX(10%);
        z-index: 2;
      }
      &:nth-child(3) {
        transform: scale(1.2) translateX(0);
        z-index: 3;
      }
      &:nth-child(4) {
        transform: scale(1) translateX(-10%);
        z-index: 2;
      }
      &:nth-child(5) {
        transform: scale(0.8) translateX(-50%);
        z-index: 1;
      }
    }
  }
}
</style>
