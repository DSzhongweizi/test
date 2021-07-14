<template>
  <div class="my-account">
    <h1>您需要一个钱包才能使用 FolkSpace。</h1>
    <div class="add">
      <i class="iconfont icon-add"></i>
      <span>创建你的钱包</span>
    </div>
    <span class="tips">————<span>结算方式</span>————</span>
    <Pay :pay="{}" />
  </div>
</template>

<script setup>
import Pay from "@/components/common/Pay.vue";
</script>
<style lang='scss' scoped>
.my-account {
  height: 133vh;
  @include flex($fd: column, $ai: center);
  .add {
    @include flex($fd: column, $jc: center, $ai: center);
    width: 250px;
    height: 250px;
    background-color: #efefef;
    color: #999;
    font-size: 24px;
    margin: 100px 0;
    border-radius: 10px;
    .iconfont {
      font-size: 36px;
    }
  }
  .tips {
    color: #999;
    font-size: 20px;
    margin-bottom: 40px;
    span {
      margin: 0 1em;
    }
  }
  h1 {
    margin: 40px 0;
  }
}
</style>
