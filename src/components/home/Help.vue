<template>
  <div class="help">
    <div class="help-header">
      <h1>FolkSpace帮助中心</h1>
      <Search @search="searchHelp" :search="{ text: '请输入你的问题' }" />
    </div>
    <div class="help-box">
      <div class="issue-box">
        <h2>问题</h2>
        <div class="issues">
          <a
            v-for="(h, i) in help"
            :key="i"
            :href="`#${h.issue}`"
            class="issue"
            @click="choose(h)"
          >
            {{ h.issue }}
          </a>
        </div>
      </div>
      <div class="answer-box">
        <h2 style="text-align: left">回答</h2>
        <h1>{{ issue }}</h1>
        <div class="answers">
          <p v-for="p in answer" :key="p">{{ p }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import Search from "@/components/common/form/Search.vue";
const searchHelp = (v) => console.log(v);
const help = reactive([
  {
    issue: "FolkSpace能验证我吗？",
    answer: [""],
  },
  {
    issue: "什么是FolkSpace的fees？",
    answer: [""],
  },
  {
    issue: "你能帮我升职吗？",
    answer: [""],
  },
  {
    issue: "什么是最棒的产品？",
    answer: [""],
  },
  {
    issue: "我怎样才能和FolkSpace合作？",
    answer: [
      "FolkSpace主要是一个自助市场。我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。也就是说，由于我们目前的高需求，我们目前确实要求您在考虑合作之前准备好了：FolkSpace主要是一个自助市场。我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。",
      "我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。也就是说，由于我们目前的高需求，我们目前确实要求您在考虑合作之前准备好了：FolkSpace主要是一个自助市场。我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。",
      "我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。也就是说，由于我们目前的高需求，我们目前确实要求您在考虑合作之前准备好了：FolkSpace主要是一个自助市场。我们与各种创作者合作，但希望他们带头创作他们的艺术并将其上传到FolkSpace上。",
    ],
  },
]);
const r = Math.floor(Math.random() * (help.length - 1));
const issue = ref(help[r].issue);
const answer = ref(help[r].answer);
const choose = (h) => ((issue.value = h.issue), (answer.value = h.answer));
</script>
<style lang='scss' scoped>
.help {
  height: 133vh;
  .help-header {
    @include flex($jc: space-between, $ai: center);
    margin: 30px 50px;
  }
  .help-box {
    @include flex($jc: center);
    .issue-box {
      flex: 1;
      border-right: 1px solid #eee;
      @include flex($fd: column, $ai: center);
      .issues {
        font-size: 2em;
        .issue {
          display: block;
          margin: 1.5em 0;
        }
      }
    }
    .answer-box {
      margin-left: 2em;
      flex: 2;
      .answers {
        p {
          font-size: 1.5em;
          text-indent: 2em;
          line-height: 1.5em * 1.5;
        }
      }
    }
    h3 {
      text-align: center;
    }
  }
}
a {
  &:link {
    color: black;
  }
  &:visited {
    color: red;
  }
  &:active {
    color: green;
  }
  &:hover {
    color: brown;
  }
}
</style>
