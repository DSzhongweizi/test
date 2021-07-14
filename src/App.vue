<template>
  <div class="header-container"><Header /></div>
  <router-view />
</template>

<script setup>
import Header from "@/components/common/Header.vue";
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background: url("./assets/img/shade.jpg") repeat;
  // height: 100%;
  font-size: 16px;
}
img {
  vertical-align: middle;
}
a {
  text-decoration: none;
}
.header-container {
  padding-bottom: 80px;
}
</style>
