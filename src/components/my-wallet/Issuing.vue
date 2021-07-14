<template>
  <Label :label="issuing">
    <Radio
      v-for="(v, i) in radios"
      :key="i"
      :radio="v"
      :checked="v.checked"
      @update="select"
    />
  </Label>
  <div
    v-if="form['发行方式'] == '拍卖'"
    :class="{ 'radio-content': direc == 'row' }"
  >
    <Label v-for="(v, i) in auction" :key="i" :label="v">
      <Input :input="v" :value="form[v.text]" @update="form[v.text] = $event" />
    </Label>
  </div>
  <div
    v-else-if="form['发行方式'] == '定价'"
    :class="{ 'radio-content': direc == 'row' }"
  >
    <Label v-for="(v, i) in makeprice" :key="i" :label="v">
      <Input :input="v" :value="form[v.text]" @update="form[v.text] = $event" />
    </Label>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { defineEmit, defineProps, onUpdated } from "@vue/runtime-core";
import { Label, Input, Radio } from "@/components/common/form";
const props = defineProps({
  form: Object,
  direc: String,
});
const form = props.form;
console.log(props.direc);
const issuing = reactive({
  id: "issuing",
  text: "发行方式",
});
const radios = reactive([
  {
    text: "拍卖",
    id: "auction",
    name: "issuing",
    value: "拍卖",
    checked: true,
  },
  {
    text: "定价",
    id: "makeprice",
    name: "issuing",
    value: "定价",
    checked: false,
  },
]);
const select = (e) => {
  form["发行方式"] = e;
  radios.map((cur) => {
    if (cur.value != e) cur.checked = false;
    else cur.checked = true;
  });
};
const auction = reactive([
  {
    id: "auction_price",
    name: "auction_price",
    text: "价格",
    type: "number",
  },
  {
    id: "auction_amount",
    name: "auction_amount",
    text: "数量",
    type: "number",
  },
  {
    id: "auction_date",
    name: "auction_date",
    text: "时间",
    type: "datetime-local",
  },
]);
const makeprice = reactive([
  {
    id: "make_price",
    name: "make_price",
    text: "价格",
    type: "number",
  },
  {
    id: "make_amount",
    name: "make_amount",
    text: "数量",
    type: "number",
  },
]);
</script>
<style lang='scss' scoped>
.radio-content {
  @include flex($fw: wrap);
  .input {
    margin-right: 100px;
  }
}
</style>
