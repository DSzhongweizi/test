<template>
  <div class="right">
    <Radio
      v-for="(v, i) in min_filter"
      :key="i"
      :radio="v"
      :checked="v.checked"
      @update="select"
      class="item"
    />
    <Search :search="{ text: '请输入您要搜索的内容' }" />
    <Dropdown :dropdown="dropdown" @select="sort = $event" />
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { Input, Radio, Search, Dropdown } from "@/components/common/form";
const form = reactive({});
const sort = ref("");
const min_filter = reactive([
  {
    id: "1",
    name: "min_filter",
    text: "小筛选类型",
    checked: true,
    value: "1",
  },
  {
    id: "2",
    name: "min_filter",
    text: "小筛选类型",
    checked: false,
    value: "2",
  },
  {
    id: "3",
    name: "min_filter",
    text: "小筛选类型",
    checked: false,
    value: "3",
  },
  {
    id: "4",
    name: "min_filter",
    text: "小筛选类型",
    checked: false,
    value: "4",
  },
]);
const dropdown = reactive({
  selected: "排序",
  options: ["价格升序", "价格降序", "点赞数"],
});
const select = (e) => {
  form["小筛选类型"] = e;
  min_filter.map((cur) => {
    if (cur.value != e) cur.checked = false;
    else cur.checked = true;
  });
};
</script>
<style lang='scss' scoped>
.right {
  margin: 20px 0;
  @include flex($jc: space-evenly);
}
</style>
