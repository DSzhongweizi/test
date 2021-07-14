<template>
  <div class="filter">
    <div v-for="(v, k) in options" :key="k">
      <span class="title">{{ k }}:</span>
      <span
        class="option"
        v-for="op in v"
        :key="op"
        :class="{ seleted: op.checked }"
        @click="select(k, op)"
        >{{ op.name }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const options = reactive({
  筛选数据: [
    {
      name: "全部",
      checked: true,
    },
    {
      name: "京剧戏曲",
      checked: false,
    },
    {
      name: "中国武术",
      checked: false,
    },
    {
      name: "民谣歌曲",
      checked: false,
    },
  ],
  筛选系列: [
    {
      name: "系列排行",
      checked: true,
    },
    {
      name: "作品排行",
      checked: false,
    },
  ],
});

const select = (k, sop) =>
  options[k].map((op) =>
    op.name == sop.name ? (sop.checked = !sop.checked) : (op.checked = false)
  );
</script>
<style lang='scss' scoped>
.filter {
  @include flex($jc: space-between);
  padding: 0 100px;
  margin: 30px 0;
  .title {
    font-size: 20px;
    margin-right: 20px;
  }
  .option {
    display: inline-block;
    margin-right: 40px;
    @include option(120px, 40px, 5px);
  }
}
</style>
