<template>
  <div class="details">
    <Popup v-if="show" :popup="popup" @close="show = false">
      <Issuing v-if="bt_value == '转卖'" :form="form" row="false" />
      <template v-else>
        <div class="popup-item" v-for="(v, k) in popup_details" :key="k">
          <span>{{ k }}</span>
          <span>{{ v }}</span>
        </div>
        <div class="popup-item">
          <span>交易方式</span>
          <Pay :pay="pay" />
        </div>
      </template>
    </Popup>
    <div class="up">
      <div class="left">
        <img :src="img" alt="" />
        <div class="desc">
          <p v-for="p in details.desc" :key="p">{{ p }}</p>
        </div>
      </div>
      <div class="right">
        <div class="r-header">
          <span class="publisher">{{ author }}</span>
          <div class="icon-box">
            <i
              v-for="ic in ['refresh', 'share', 'remark']"
              :key="ic"
              :class="`iconfont icon-${ic}`"
            ></i>
          </div>
          <h2>{{ name }}</h2>
          <div class="count">
            <span>目前拥有者：{{ owner }}</span>
            <span>
              <i class="iconfont icon-pv"></i> {{ details.browse_count }}
            </span>
            <span
              ><i class="iconfont icon-like-solid"></i>
              {{ details.collect_count }}</span
            >
          </div>
        </div>
        <div class="price-box">
          <span>当前{{ bt_value }}价格</span>
          <span class="price"
            >RMB ￥
            <span>{{ price }}</span>
          </span>
          <span @click="show = true" class="resell">{{ bt_value }}</span>
        </div>
        <div class="trend-box">
          <div class="select-box">
            <i class="iconfont icon-history-trend"></i>
            <span>价格历史</span>
            <Dropdown :dropdown="dropdown" />
          </div>
          <div class="history-trend">
            <div id="trend" style="width: 800px; height: 260px"></div>
          </div>
        </div>
        <div class="blockchain-box">
          <span class="title">区块链代码信息</span>
          <div class="content">
            <div class="contract-address">
              <span>合约地址</span
              ><span>{{ details.blockchain.contract_address }}</span>
            </div>
            <div class="token-tags">
              <span>令牌标识</span
              ><span>{{ details.blockchain.token_tags }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="down">
      <h1>交易历史</h1>
      <Table :table="table" />
    </div>
    <div class="down" v-for="t in ['同一作者发布的NFT', '猜你喜欢']" :key="t">
      <h1>{{ t }}</h1>
      <CardsBox :cardsbox="{ cards }" class="content" />
    </div>
  </div>
</template>

<script setup>
import Table from "@/components/common/Table.vue";
import Popup from "@/components/common/Popup.vue";
import Pay from "@/components/common/Pay.vue";
import Issuing from "@/components/my-wallet/Issuing.vue";
import CardsBox from "@/components/common/CardsBox.vue";
import { Dropdown, Message } from "@/components/common/form";
import { useRoute } from "vue-router";
import {
  computed,
  onMounted,
  reactive,
  ref,
  watchEffect,
} from "@vue/runtime-core";

import * as echarts from "echarts";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
const toggle = ref(false);
const show = ref(false);
const checked = ref("auction");
const currentRoute = store.getters.getFirstRoute;
console.log(currentRoute);
const pay = reactive({
  bw: "400px",
  iw: "60px",
  fs: "16px",
  jc: "flex-start",
  mt: "10px",
  mr: "40px",
});
const dropdown = reactive({
  selected: "时间",
  options: ["过去一周", "过去一个月", "过去一年"],
});
const choose = (ck) => (checked.value = ck);
const card = JSON.parse(route.params.card);
let cards = Array(10).fill(card);
const { img, name, author, owner, price, endtime, collect, details } = card;
let bt_value = ref("");
let popup = ref("");

watchEffect(() => {
  if (currentRoute.includes("my-wallet")) {
    console.log("aaa");
    bt_value.value = "转卖";
    popup.value = { title: "转卖明细", confirm: "发布" };
  } else {
    console.log("bbb");
    bt_value.value = endtime ? "投标" : "购买";
    popup.value = {
      title: "购买明细",
      confirm: "确认购买",
      cancel: "取消购买",
    };
  }
});
const form = reactive({
  发行方式: "拍卖",
});
const popup_details = reactive({
  作品名称: name,
  作品价格: price,
  发布人: author,
  持有人: owner,
});
const table = reactive({
  thead: ["从", "至", "价格", "日期"],
  tbody: [Object.values(details.trading_record)],
  recycle: 5,
  style: {
    rh: "60px",
    fs: "22px",
  },
});

onMounted(() => {
  let myChart = echarts.init(document.getElementById("trend"));
  // 指定图表的配置项和数据
  let option = {
    tooltip: {},
    grid: {
      left: 60,
      top: 24,
      bottom: 32,
      right: 52,
    },
    legend: {
      data: ["销量"],
    },
    xAxis: {
      type: "category",
      data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07"],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: details.price_history,
        type: "line",
        label: {
          show: true,
          position: "top",
        },
        symbol: "diamond",
        lineStyle: {
          color: "#BE4953",
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
</script>
<style lang='scss' scoped>
.form-item {
  margin: 30px 0;
}
.details {
  position: relative;
  width: 1450px;
  background-color: #fff;
  margin: 0 auto;
  padding: 30px;
  .popup-item {
    margin: 1em;
    @include flex($ai: center);
    font-size: 20px;
    span:first-child {
      background-color: #e9c3c9;
      // box-sizing: border-box;
      @include justify-title($h: 1em, $p_h: 1em, $p_v: 0.5em);
      margin-right: 1em;
      border-radius: 5px;
    }
  }
  .up {
    @include flex($jc: space-between);
    .left {
      width: 600px;
      @include flex($fd: column);
      img {
        width: 100%;
      }
      .desc {
        @include border;
        flex: 1;
        margin-top: 14px;
        color: #333333;
        background-color: $pl;
        padding: 30px;
        text-indent: 2em;
      }
    }
    .right {
      width: 830px;
      @include flex($fd: column);
      .r-header {
        .publisher {
          font-size: 27px;
          color: #333;
        }
        .icon-box {
          float: right;
          .iconfont {
            font-size: 30px;
            color: #9e9e9e;
            padding: 8px;
            margin: 0 8px;
            box-shadow: 0px 0px 4px 0px rgba(195, 195, 195, 0.69);
            border-radius: 5px;
          }
        }
        h2 {
          font-size: 40px;
          margin: 20px 0 30px;
        }
        .count {
          color: #999999;
          font-size: 20px;
          span {
            margin-right: 50px;
          }
          .iconfont {
            font-size: 20px;
          }
        }
      }
      .price-box {
        @include border;
        @include flex($fd: column);
        background-color: $pl;
        padding: 22px 28px;
        margin-top: 26px;
        border-radius: 5px;
        font-size: 22px;
        color: #333333;
        .price {
          // height: 2em;
          // line-height: 2em;
          @include flex($ai: center);
          span {
            font-size: 2em;
          }
        }
        // span:nth-child(2) {
        //   margin: 25px 0;
        // }
        .resell {
          width: 160px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: #b22631;
          font-size: 18px;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      .trend-box {
        @include border;
        margin-top: 10px;
        .select-box {
          height: 38px;
          line-height: 38px;
          border-bottom: 1px solid #ccc;
          font-size: 20px;
          padding: 15px 20px;
          .iconfont {
            color: #ccc;
            font-size: 27px;
            margin-right: 12px;
          }
        }
        .history-trend {
          padding: 12px;
          background-color: $pl;
          #trend {
            background-color: #fff;
            border-radius: 5px;
          }
        }
      }
      .blockchain-box {
        @include border;
        @include flex($fd: column);
        flex-grow: 1;
        margin-top: 14px;
        .title {
          @include flex($ai: center);
          flex-grow: 1;
          font-size: 24px;
          font-weight: bold;
          padding: 0 24px;
        }
        .content {
          background-color: $pl;
          padding: 25px 50px;
          font-size: 20px;
          .contract-address,
          .token-tags {
            @include flex($jc: space-between);
            margin: 10px 0;
          }
          .contract-address {
            span:nth-child(2) {
              color: #0869cd;
            }
          }
          .token-tags {
            span:nth-child(2) {
              color: #999;
            }
          }
        }
      }
    }
  }
  .down {
    @include border;
    margin-top: 32px;
    h1 {
      margin-left: 30px;
    }
    .content {
      // background-color: $pl;
      padding-bottom: 10px;
    }
  }
}
</style>
