<template>
  <div class="publish" v-if="store.getters.getCurrentRoute == '/publish'">
    <CardsBox :cardsbox="cardsbox" />
    <h1>我的发布</h1>
    <router-link :to="{ name: 'create' }">
      <button class="icon-box">
        <i class="iconfont icon-publish"></i> 创造
      </button>
    </router-link>
    快来创造你自己的NFT作品吧
  </div>
  <router-view v-else />
</template>

<script setup>
import CardsBox from "@/components/common/CardsBox.vue";
import { computed, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();
let card = store.state.cards[0];
//数据处理
let cards = Array(10).fill(card);
const cardsbox = reactive({
  cards,
  title: "热门发布",
  moved: false,
});
</script>
<style lang='scss' scoped>
.publish {
  width: 1450px;
  height: 100%;
  background-color: #fff;
  padding: 50px 80px;
  margin: 0 auto;
  font-size: 16px;
  .icon-box {
    @include bt($w: 6em, $h: 3em);
    .iconfont {
      color: #fff;
    }
  }
}
</style>
