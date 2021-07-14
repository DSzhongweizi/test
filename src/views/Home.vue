<template>
  <div class="home">
    <div class="main">
      <Feedback v-if="tab.includes('反馈')" />
      <Help v-else-if="tab.includes('帮助')" />
      <MyAccount v-else-if="tab.includes('账户')" />
    </div>
    <ContactWe v-if="tab.includes('联系')" />
    <Bg v-if="!tab || tab.includes('联系') || tab.includes('关于')" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/common/Footer.vue";
import Bg from "@/components/home/Bg.vue";
import Feedback from "@/components/home/Feedback.vue";
import ContactWe from "@/components/home/ContactWe.vue";
import MyAccount from "@/components/home/MyAccount.vue";
import Help from "@/components/home/Help.vue";
import { computed, onMounted, ref, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
const tab = ref("");
// const main = (t) => (tab.value = t);
const router = useRouter();
watchEffect(() => {
  tab.value = router.currentRoute.value.hash;
  if (tab.value.includes("关于我们")) {
    window.open("https://maitube.com/pdf/?e=ag1CYjLVhN6oU7", "_blank ");
  }
});
</script>

<style lang='scss' scoped>
.home {
  @include flex($fd: column);
  // height: 100%;
  mask: #000;
  .main {
    width: 1600px;
    // height: 100%;
    margin: 0 auto;
    background: #fff;
  }
}
</style>
