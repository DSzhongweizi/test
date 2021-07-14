<template>
  <div class="opera">
    <div class="title">
      <h1>热门系列</h1>
      <span>查看更多></span>
    </div>
    <Carousel :carousel="{ img: img[0] }" />
    <template v-for="t in ['拍卖中', '最新上市', '热门作品']" :key="t">
      <CardsBox
        v-if="t == '拍卖中'"
        :cardsbox="{ cards, title: t, mored: true }"
      />
      <CardsBox v-else :cardsbox="{ cards: newcards, title: t, mored: true }" />
    </template>
  </div>
</template>

<script setup>
import Carousel from "@/components/common/Carousel.vue";
import Card from "@/components/common/Card.vue";
import CardsBox from "@/components/common/CardsBox.vue";
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { opera, opera1, kungfu, kungfu1, folk, folk1 } from "@/assets/img";
import { watchEffect } from "@vue/runtime-core";
const router = useRouter();
const route = useRoute();
const store = useStore();
const currentRoute = store.getters.getRouter;

let img = ref([]);
watchEffect(() => {
  console.log(route.params.submenu);
  switch (route.params.submenu) {
    case "opera":
      img.value = [opera, opera1];
      break;
    case "kungfu":
      img.value = [kungfu, kungfu1];
      break;
    case "folk":
      img.value = [folk, folk1];
      break;
  }
  console.log(img.value[0]);
});

let card = store.state.cards[0];
card.img = img.value[1];
let cards = Array(10).fill(card);
card = Object.assign({}, card);
card.endtime = "";
let newcards = Array(10).fill(card);
</script>
<style lang='scss' scoped>
.opera {
  width: 1450px;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 50px;
  .title {
    @include flex($jc: space-between, $ai: center);

    span {
      font-size: 20px;
      color: #999;
    }
  }
}
</style>
