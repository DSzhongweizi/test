<template>
  <div class="pay">
    <div class="item" v-for="(v, i) in account" :key="i">
      <img :src="v.src" alt="" />
      <span>{{ v.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "@vue/runtime-core";
import alipay from "../../assets/img/alipay.png";
import ermb from "../../assets/img/ermb.png";
import wechat from "../../assets/img/wechat.png";
const props = defineProps({
  pay: Object,
});
const {
  bw = "800px",
  iw = "130px",
  fs = "24px",
  jc = "space-evenly",
  mt = "20px",
  mr = "0",
} = props.pay;
const account = [
  {
    src: alipay,
    text: "支付宝",
  },
  {
    src: wechat,
    text: "微信",
  },
  {
    src: ermb,
    text: "数字人民币",
  },
];
</script>
<style lang='scss' scoped>
.pay {
  @include pays-box(
    $bw: v-bind(bw),
    $iw: v-bind(iw),
    $fs: v-bind(fs),
    $jc: v-bind(jc),
    $mt: v-bind(mt),
    $mr: v-bind(mr)
  );
}
</style>
