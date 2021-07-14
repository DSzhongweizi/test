<template>
  <div class="feedback">
    <h1>反馈意见</h1>
    <form action="">
      <Label :label="theme">
        <Input
          :input="theme"
          :value="form['主题']"
          @update="form['主题'] = $event"
        />
      </Label>
      <Label :label="feedback">
        <Textarea
          :textarea="feedback"
          :value="form['反馈']"
          @update="form['反馈'] = $event"
        />
      </Label>
      <div class="bt-box">
        <button type="submit" class="bt">提交反馈</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Label, Input, Textarea } from "@/components/common/form";
import { reactive } from "@vue/reactivity";
const form = reactive({});
const theme = reactive({
  id: "theme",
  name: "theme",
  text: "主题",
  type: "text",
  required: false,
  width: "900px",
  width_label: "3em",
});
const feedback = reactive({
  id: "feedback",
  name: "feedback",
  text: "反馈",
  required: false,
  width_label: "3em",
  rows: 20,
});
</script>
<style lang='scss' scoped>
.feedback {
  @include flex($fd: column, $ai: center);
  h1 {
    text-align: left;
  }
  .bt-box {
    @include flex($jc: center);
    .bt {
      @include bt;
    }
  }
}
</style>
