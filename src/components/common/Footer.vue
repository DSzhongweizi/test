<template>
  <div class="footer">
    <div class="tabs">
      <a
        v-for="tab in [
          '我的账户',
          '帮助中心',
          '关于我们',
          '联系开发者',
          '反馈意见',
        ]"
        :key="tab"
        :href="`#${tab}`"
        >{{ tab }}</a
      >
    </div>
    <div class="icons">
      <a class="icon-wexin">
        <svg class="icon" aria-hidden="true" id="icon-wexin">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <img v-if="wechatShow" :src="wechat" alt="" class="" />
      </a>
      <a v-for="(v, i) in social" :key="i" :href="v.url" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#icon-${v.text}`"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineEmit, ref } from "@vue/runtime-core";
import wechat from "../../assets/img/wechat.jpg";
const wechatShow = ref(false);
// const emit = defineEmit(["tabNav"]);
const social = [
  { text: "weibo", url: "https://weibo.com/7626107496/profile?topnav=1&wvr=6" },
  {
    text: "douyin",
    url: "https://www.douyin.com/user/MS4wLjABAAAAQXyBOYhcljZW5Ls6XrwevdHyO274Dhrgsfaiz5XNfANtQWL_xUPwVfnEq-i2y3lu?enter_method=top_bar&enter_from=main_page",
  },
  {
    text: "kuaishou",
    url: "https://live.kuaishou.com/profile/3xsf2n7tm8szcbg",
  },
  { text: "bzhan", url: "https://space.bilibili.com/365419692" },
  { text: "zhihu", url: "https://www.zhihu.com/people/dfdgdalx" },
];
document.body.addEventListener(
  "click",
  (e) => (wechatShow.value = e.target.id == "icon-wexin"),
  false
);
</script>
<style lang='scss' scoped>
a {
  display: inline-block;
  color: #fff;
}
.footer {
  background-color: #000;
  padding: 30px 300px;
  .tabs {
    display: flex;
    justify-content: space-evenly;
    font-size: 22px;
    white-space: nowrap;
  }
  .icons {
    @include flex($jc: center);
    text-align: center;
    font-size: 64px;
    color: #fff;
    margin-top: 10px;
    a {
      display: inline-block;
      margin: 0 16px;
    }
    .icon-wexin {
      display: inline-block;
      position: relative;
      img {
        position: absolute;
        width: 200px;
        height: 200px;
        top: -200px;
        left: -64px;
      }
    }
    .iconfont {
      font-size: 55px;
      margin: 20px 20px 0;
    }
  }
}
</style>
