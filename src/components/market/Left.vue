<template>
  <div class="left">
    <form action="">
      <h1>筛选查看</h1>
      <div class="filter-check">
        <Radio
          v-for="(v, i) in filter_check"
          :key="i"
          :radio="v"
          :checked="v.checked"
          @update="select1"
          class="item"
        />
      </div>
      <h1>价格区间</h1>
      <div class="price-range">
        <Input :input="price_range[0]" class="item" />
        <span>~</span>
        <Input :input="price_range[1]" class="item" />
      </div>
      <h1>买卖方式</h1>
      <div class="trading-way">
        <Radio
          v-for="(v, i) in trading_way"
          :key="i"
          :radio="v"
          :checked="v.checked"
          @update="select2"
          class="item"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { Input, Radio } from "@/components/common/form";
const form = reactive({});
const filter_check = reactive([
  {
    id: "all",
    name: "filter_check",
    text: "全部",
    checked: true,
    value: "全部",
  },
  {
    id: "hot",
    name: "filter_check",
    text: "热门",
    checked: false,
    value: "热门",
  },
  {
    id: "newest",
    name: "filter_check",
    text: "最新",
    checked: false,
    value: "最新",
  },
  {
    id: "discounts",
    name: "filter_check",
    text: "优惠",
    checked: false,
    value: "优惠",
  },
  {
    id: "guess_you_like",
    name: "filter_check",
    text: "猜你喜欢",
    checked: false,
    value: "猜你喜欢",
  },
]);
const price_range = reactive([
  {
    id: "bottom_price",
    name: "price_range",
    text: "最低价",
    width: "140px",
    pre: "",
    align: "center",
  },
  {
    id: "top_price",
    name: "price_range",
    text: "最高价",
    width: "140px",
    pre: "",
    align: "center",
  },
]);
const trading_way = reactive([
  {
    id: "auction",
    name: "trading_way",
    text: "拍卖",
    checked: true,
    value: "拍卖",
  },
  {
    id: "make_price",
    name: "trading_way",
    text: "定价",
    checked: false,
    value: "定价",
  },
]);

const select = (radios, e) =>
  radios.map((cur) => {
    if (cur.value != e) cur.checked = false;
    else cur.checked = true;
  });
const select1 = (e) => {
  console.log(e);
  form["筛选查看"] = e;
  select(filter_check, e);
};
const select2 = (e) => {
  console.log(e);
  form["买卖方式"] = e;
  select(trading_way, e);
};
</script>
<style lang='scss' scoped>
.left {
  position: fixed;
  left: 0;
  width: 350px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #fff;
  .filter-check,
  .trading-way {
    @include grid($col: 2, $ji: center);
    .item {
      margin: 10px 0;
    }
  }
  .price-range {
    @include flex;
    span {
      width: 28px;
      height: 70px;
      line-height: 70px;
      text-align: center;
    }
  }
}
</style>
