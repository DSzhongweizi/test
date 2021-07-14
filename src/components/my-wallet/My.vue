<template>
  <div class="my">
    <span class="title">{{ my.title }}</span>
    <template class="my-item">
      <Card
        v-for="(card, idx) in my.list"
        :key="idx"
        :card="card"
        @click="navDetails(my.en, card, idx)"
      />
    </template>
  </div>
</template>

<script setup>
import { defineEmit, defineProps } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Card from "@/components/common/Card.vue";
const router = useRouter();
const props = defineProps({
  my: Object,
});
const navDetails = (r, card, id) => {
  router.push({
    name: "my-wallet-details",
    params: { target: r, id: id, card: JSON.stringify(card) },
  });
};
</script>
<style lang='scss' scoped>
.my {
  margin-top: 60px;
  .title {
    display: inline-block;
    font-size: 22px;
    margin-bottom: 24px;
  }
  .my-item {
    @include grid(1, 5, center);
  }
}
</style>
