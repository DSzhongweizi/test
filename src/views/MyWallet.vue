<template>
  <div v-if="firstRoute == '/my-wallet'" class="my-wallet">
    <Popup v-if="show" :popup="{ title: '账户设置' }" @close="show = false">
      <Label v-for="(v, i) in form" :key="i" :label="v">
        <Input :input="v" />
      </Label>
    </Popup>
    <div class="navbar">
      <span @click="show = true">账户设置</span>
      <router-link to="/publish/create"><span>点击发布NFT</span></router-link>
    </div>
    <div class="content" v-for="t in ['发布', '拥有', '收藏']" :key="t">
      <h1>我{{ t }}的NFT</h1>
      <CardsBox v-if="t == '发布'" :cardsbox="{ cards: newcards }" />
      <CardsBox v-else :cardsbox="{ cards }" />
    </div>
  </div>
  <router-view v-else />
</template>

<script setup>
import My from "@/components/my-wallet/My.vue";
import Popup from "@/components/common/Popup.vue";
import { Label, Input, Message } from "@/components/common/form";
import Card from "@/components/common/Card.vue";
import CardsBox from "@/components/common/CardsBox.vue";
import { computed, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const firstRoute = store.getters.getFirstRoute;
const show = ref(false);
let card = store.state.cards[0];
let cards = Array(5).fill(card);
card = Object.assign({}, card);
card.endtime = "";
let newcards = Array(10).fill(card);
console.log(cards, newcards);
const form = reactive([
  {
    id: "username",
    name: "username",
    text: "用户名",
    type: "text",
    direc: "column",
  },
  {
    id: "password",
    name: "password",
    text: "密码",
    type: "password",
    direc: "column",
  },
  {
    id: "tel",
    name: "tel",
    text: "手机号",
    type: "tel",
    direc: "column",
  },
  {
    id: "email",
    name: "email",
    text: "电子邮箱",
    type: "email",
    direc: "column",
  },
]);
</script>
<style lang='scss' scoped>
.my-wallet {
  position: relative;
  width: 1450px;
  margin: 20px auto;
  padding: 30px 50px;
  background-color: #fff;
  .navbar {
    margin-bottom: 40px;
    span {
      float: right;
      font-size: 18px;
      color: #fff;
      padding: 15px 30px;
      background-color: #b22631;
      border-radius: 5px;
      margin: 0 20px;
      cursor: pointer;
      overflow: hidden;
    }
  }
}
</style>
