<template>
  <div class="cardsbox">
    <div class="title-box">
      <h1 v-if="title">{{ title }}</h1>
      <router-link v-if="mored" to="/market" class="more">
        查看更多>
      </router-link>
    </div>
    <i v-if="moved" class="iconfont icon-arrows-left-flat" @click="left"></i>
    <div class="box">
      <template v-if="type">
        <Card1 v-for="(v, i) in cards" :key="i" :card="v" />
      </template>
      <template v-else>
        <Card
          v-for="(v, i) in cards"
          :key="i"
          :card="v"
          :style="`transform: translateX(${move}%)`"
        />
      </template>
    </div>
    <i v-if="moved" class="iconfont icon-arrows-right-flat" @click="right"></i>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "@vue/runtime-core";
import Card from "@/components/common/Card.vue";
import Card1 from "@/components/common/Card1.vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  cardsbox: Object,
  type: String,
});
let { cards, title, mored = false, moved = true } = props.cardsbox;
console.log(cards);
moved = computed(() => cards.length > 5);
let move = ref(0);
const left = () => {
  if (move.value == 0) return;
  else move.value += 100;
};
const right = () => {
  if (Math.abs(move.value / 100) == cards.length - 5) move.value -= move.value;
  else move.value -= 100;
};
</script>
<style lang='scss' scoped>
.cardsbox {
  position: relative;
  white-space: nowrap;
  .title-box {
    @include flex($jc: space-between, $ai: center);
    .more {
      color: $g9;
      font-size: 1.5em;
      cursor: default;
    }
  }
  .box {
    @include flex($fw: nowrap);
    overflow: hidden;
  }
  .iconfont {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5em;
    color: $g9;
  }
  .icon-arrows-left-flat {
    left: -1.5em;
  }
  .icon-arrows-right-flat {
    right: -1.5em;
  }
}
</style>
