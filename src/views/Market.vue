<template>
  <div v-if="currentRoute == '/market'" class="market">
    <Left />
    <Right />
    <div class="cards-box">
      <Card1 v-for="(v, i) in cards1" :key="i" :card="v" />
      <Card v-for="(v, i) in cards" :key="i" :card="v" />
    </div>
    <!-- <CardsBox :cardsbox="{ cards: cards1 }" type="card1" />
    <CardsBox :cardsbox="{ cards }" /> -->
  </div>
  <router-view v-else :key="$route.path" />
</template>

<script setup>
import Left from "@/components/market/Left.vue";
import Right from "@/components/market/Right.vue";
import Card from "@/components/common/Card.vue";
import Card1 from "@/components/common/Card1.vue";
import CardsBox from "@/components/common/CardsBox.vue";
import { reactive, ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import opera1 from "../assets/img/opera.png";
const router = useRouter();
const store = useStore();
const currentRoute = ref("");
let card = store.state.cards[0];
let cards = Array(5).fill(card);
card = Object.assign({}, card);
card.endtime = "";
cards.push(...Array(10).fill(card));
const cards1 = Array(5).fill({
  img: opera1,
  issuer: "发行人",
  name: "系列（团体）名称",
  intro: "团体介绍团体介绍团体介绍团体介绍团体介绍团体介绍",
});
watchEffect(() => (currentRoute.value = router.currentRoute.value.path));
</script>
<style lang='scss' scoped>
.market {
  margin: 0 0 10px 360px;
  width: 1530px;
  box-sizing: border-box;
  @include flex($fd: column);
  background-color: #fff;
}
</style>
