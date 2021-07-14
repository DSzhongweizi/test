<template>
  <div class="statistic-data">
    <span class="title">这里的文字是NFT的一些介绍 以及统计数据的说明</span>
    <Filter />
    <Table :table="table" />
  </div>
</template>

<script setup>
import Filter from "@/components/statistic-data/Filter.vue";
import Table from "@/components/common/Table.vue";
import { reactive } from "@vue/reactivity";
const table = reactive({
  thead: [
    "NFT名称",
    "7天成交量",
    "7天换",
    "总容积",
    "平均价格",
    "拥有者",
    "资产",
  ],
  tbody: [["NFT名称", "5648951", "7天换", "总容积", "9.9", "小张", "999"]],
  recycle: 20,
  style: {
    rh: "60px",
    fs: "22px",
  },
});
</script>
<style lang='scss' scoped>
.statistic-data {
  @include flex($fd: column, $ai: center);
  width: 1450px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  .title {
    text-align: center;
    font-size: 26px;
  }
}
</style>
