<template>
  <div class="create">
    <span class="title">创建你的发布</span>
    <form @submit.prevent="show_popup = true">
      <Label :label="cover">
        <Upload
          :upload="cover"
          :value="form['封面']"
          @update="form['封面'] = $event"
        />
      </Label>
      <Label :label="name">
        <Input
          :input="name"
          :value="form['名称']"
          @update="form['名称'] = $event"
        />
      </Label>
      <Label :label="intro">
        <Textarea
          :textarea="intro"
          :value="form['简介']"
          @update="form['简介'] = $event"
        />
      </Label>
      <Label :label="work">
        <Upload
          :upload="work"
          :value="form['作品']"
          @update="form['作品'] = $event"
        />
      </Label>
      <Issuing :form="form" direc="row" />
      <div class="bt-box">
        <button :type="create" class="bt" @click="show_popup = true">
          发布
        </button>
      </div>
    </form>
    <Popup
      v-if="show_popup"
      :popup="popup"
      @confirm="confirm"
      @close="show_popup = false"
    >
      <div
        class="detail"
        v-for="(v, i) in ['名称', '价格', '数量', '发行方式']"
        :key="i"
      >
        <span class="name">{{ v }}</span>
        <span class="value">{{ form[v] }}</span>
      </div>
    </Popup>
    <Message v-if="publish_success" title="发布成功" />
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import {
  Label,
  Upload,
  Input,
  Textarea,
  Radio,
  Message,
} from "@/components/common/form";
import Popup from "@/components/common/Popup.vue";
import Issuing from "@/components/my-wallet/Issuing.vue";
import {
  computed,
  onMounted,
  onUpdated,
  useContext,
  watch,
  watchEffect,
} from "@vue/runtime-core";
const show_popup = ref(false);
const create = ref("button");
const publish_success = ref(false);
const update = (e) => console.log(e);

const confirm = () => {
  create.value = "submit";
  show_popup.value = false;
  publish_success.value = true;
};
const popup = reactive({
  title: "作品发布明细",
  width: "600px",
  confirm: "确认发布",
  cancel: "取消发布",
});
const form = reactive({
  发行方式: "拍卖",
});
const cover = reactive({
  id: "cover",
  name: "cover",
  text: "上传封面",
  accept: "image/png, image/jpeg",
  tips: "图片大小不得超过1M 尺寸为274*288px",
});
const name = reactive({
  id: "name",
  name: "name",
  text: "名称",
  type: "text",
});
const intro = reactive({
  id: "intro",
  name: "intro",
  text: "简介",
  tips: "500字以内",
});
const work = reactive({
  id: "work",
  name: "work",
  text: "上传作品",
  accept: "aplication/zip",
  tips: "注：文件大小不能超过5G",
  width: "900px",
});
watch(form, (form) => console.log(form), { deep: true });
</script>
<style lang='scss' scoped>
.create {
  position: relative;
  width: 1450px;
  background-color: #fff;
  padding: 50px 80px;
  margin: 0 auto;
  color: #999999;
  .title {
    width: 144px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #000000;
    line-height: 60px;
  }
  .bt-box {
    @include flex($jc: center);
    .bt {
      @include bt;
    }
  }
  .detail {
    font-size: 22px;
    color: #000;
    .name {
      @include justify-title($p_h: 1em);
      background-color: #eac3c6;
      margin: 10px 20px;
      @include border;
    }
  }
}
</style>
