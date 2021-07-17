<template>
  <div class="card" @click="nav">
    <img :src="img" alt="" srcset="" />
    <div class="bottom">
      <p>{{ name }}</p>
      <div class="content">
        <div class="left">
          <span class="author">作者：{{ author }}</span>
          <span class="price"
            >{{ endtime ? "当前" : "价格" }}：￥
            <span>{{ price }}</span>
          </span>
          <span v-if="endtime">{{ endtime }}</span>
        </div>
        <div class="right">
          <i
            class="iconfont icon-like-solid"
            :style="`color:${collectState ? 'red' : '#eee'}`"
            @click.stop="collectState = !collectState"
          ></i>
          <button>{{ endtime ? "出价" : "购买" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const nav = () =>
  store.commit("navDetails", [
    store.getters.getFirstRoute,
    id,
    JSON.stringify(props.card),
  ]);

const props = defineProps({
  card: Object,
});
let { id, img, name, author, price, endtime, collect } = props.card;
let collectState = ref(collect);
</script>
<style lang='scss' scoped>
.card {
  background-color: #fff;
  max-width: 270px;
  flex: 0 0 20%;
  padding: 0 10px;
  // box-sizing: border-box;
  transition: transform 1s;
  border: none;
  @include flex($fd: column);
  img {
    border-radius: 10px 10px 0 0;
    max-height: 350px;
  }
  .bottom {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 0 0 10px 10px;
    p {
      margin: 0;
      white-space: nowrap;
      font-size: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 2em;
    }
    .content {
      @include flex($jc: space-between);
      .left {
        @include flex($fd: column, $jc: space-between);
        font-size: 14px;
        color: $g9;
        .author {
          font-size: 16px;
        }
        .price {
          color: $rd;
          font-size: 16px;
          span {
            font-size: 20px;
          }
        }
      }
      .right {
        @include flex($fd: column, $jc: space-between, $ai: center);
        .iconfont {
          font-size: 28px;
        }
        button {
          @include bt($w: 4em, $h: 2em);
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
</style>
