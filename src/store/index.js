import { createStore } from 'vuex'
import router from "../router/index.js";
import bg from "../assets/img/opera1.png";
export default createStore({
  state: {
    cards: [{
      id: '14516164',
      name: "NTF名称NTF名称NTF名称NTF名称",
      author: "李老头",
      owner: "小李",
      price: "10",
      endtime: "预计06月25日18.00结束",
      img: bg,
      collect: false,
      details: {
        desc: [
          "发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述",
          "发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述，发行人/单位/系列的具体描述",
        ],
        browse_count: "123456",
        collect_count: "123456",
        price_history: [80, 120, 70, 200, 130, 100, 150],
        blockchain: {
          contract_address: "0x0601...266d",
          token_tags: "14123491412349",
        },
        trading_record: {
          from: "交易者名字1",
          to: "交易者名字2",
          price: "RMB ￥100",
          time: "2分钟前",
        },
      },
    }]
  },
  getters: {
    getCurrentRoute() {
      return router.currentRoute.value.path;
    },
    getFirstRoute() {
      const tmp = router.currentRoute.value.path;
      const tmp1 = tmp.match(/\/\w+-*\w+\//g);
      // tmp1 ? tmp1[0] : tmp; //判断是否存在二级路由
      console.log(tmp, tmp1);
      return tmp1 ? tmp1[0].slice(0, -1) : tmp
    }
  },
  mutations: {
    //添加任务
    navDetails(state, [target, id, card]) {
      target = target.replace(/\//, "")
      router.push({
        name: "details",
        params: { target, id, card },
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
