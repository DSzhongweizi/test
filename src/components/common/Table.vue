<template>
  <div class="table">
    <div class="thead">
      <span v-for="th in thead" :key="th">{{ th }}</span>
    </div>
    <div class="tbody">
      <div class="trow" v-for="tr in tbody" :key="tr">
        <span class="tcol" v-for="td in tr" :key="td">{{ td }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
  table: Object,
});
let {
  thead,
  tbody,
  recycle = 1,
  style: { tw = "100%", rh = "2em", fs = "1em" },
} = props.table;
if (tbody.length == 1) {
  tbody = [tbody[0]];
  [...Array(recycle - 1).keys()].forEach(() => tbody.push(tbody[0]));
}
</script>
<style lang='scss' scoped>
.table {
  width: v-bind(tw);
  @mixin cell {
    height: v-bind(rh);
    font-size: v-bind(fs);
    @include grid(1, v-bind("thead.length"), center, center);
  }
  .thead {
    @include cell;
    color: #fff;
    background-color: #b22631;
  }
  .tbody {
    .trow {
      @include cell;
      &:nth-child(even) {
        background-color: #f7e9ea;
      }
    }
  }
}
</style>
