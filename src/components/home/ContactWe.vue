<template>
  <div class="contact-we">
    <Popup
      v-if="show"
      :popup="{ title: '开发者联系方式', cancel: '知道了' }"
      @close="close"
    >
      <div class="contact" v-for="(v, k) in contact" :key="k">
        <i :class="`iconfont icon-${k}`"></i>
        <div class="value">
          <span v-for="s in v" :key="s">{{ s }}</span>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup>
import Popup from "@/components/common/Popup.vue";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
const show = ref(true);
const router = useRouter();
const close = () => {
  show.value = false;
  router.back();
};
const contact = reactive({
  cellphone: ["手机号", "：13124750966"],
  email: ["邮箱", "：tingkang@yqxc.info"],
  address: ["地址", "：北京市昌平区中央财经大学校内大学生活动中心101-11室"],
});
</script>
<style lang='scss' scoped>
.contact-we {
  .contact {
    margin: 12px 0;
    @include flex($jc: center, $ai: center);
    // position: relative;
    .iconfont {
      font-size: 80px;
      color: $rd;
      text-align: center;
    }
    .value {
      position: relative;
      left: -20px;
      z-index: -1;
      padding-left: 1.5em;
      width: 500px;
      background-color: #eee;
      // text-overflow: ellipsis;
      // overflow: hidden;
      // white-space: nowrap;
      span {
        height: 50px;
        line-height: 50px;
        color: black;
        font-size: 22px;

        &:first-child {
          @include justify-title($fs: 22px, $w: 3em, $fw: 400);
        }
      }
    }
  }
}
</style>
