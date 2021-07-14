<template>
  <div class="bg-box">
    <div class="bg">
      <img id="home-bg" src="../../assets/img/home-bg.jpg" alt />
      <div class="introduce absolute-center">
        <p>挖掘文化新价值</p>
        <p>带你走入传统文化新世界</p>
        <p>FolkSpace</p>
      </div>
    </div>
    <div class="bg" v-for="(item, idx) in bgs" :key="idx">
      <img class="other-img" :src="item.src" alt />
      <span class="title">{{ item.title }}</span>
      <div class="desc absolute-center">
        <p v-for="p in item.desc" :key="p">{{ p }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import bg1 from "@/assets/img/home-bg1.jpg";
import bg2 from "@/assets/img/home-bg2.jpg";
import bg3 from "@/assets/img/home-bg3.jpg";
const bgs = [
  {
    src: bg1,
    title: "京剧",
    desc: [
      "京剧，又称平剧、京戏等，是中国影响最大的戏曲剧种，分布地以北京为中心，遍及全国各地。",
      "清代乾隆五十五年（1790年）起，原在南方演出的三庆、四喜、春台、和春四大徽班陆续进入北京，与来自湖北的汉调艺人合作，同时接受了昆曲、秦腔的部分剧目、曲调和表演方法，又吸收了一些地方民间曲调，通过不断的交流、融合，最终形成京剧。",
      "京剧流播全国，影响甚广，有“国剧”之称。以梅兰芳命名的京剧表演体系被视为东方戏剧表演体系的代表，为世界三大表演体系之一。京剧是中华民族传统文化的重要表现形式，其中的多种艺术元素被用作中国传统文化的象征符号。",
    ],
  },
  {
    src: bg2,
    title: "武术",
    desc: [
      "中国武术，以中国传统文化为基础的、停止战斗的技术；是消停战事、维护和平的技术；是物质文明的保障和导向，带领修习者进入认识人与自然、社会客观规律的传统教化方式。",
      "上武得道，平天下；中武入喆，安身心；下武精技，防侵害。",
      "有着悠久的历史，最早可以追溯到商周时期，具有极其广泛的群众基础，是中国劳动人民在长期的社会实践中不断积累和丰富起来的一项宝贵的文化遗产。是中华人民的优秀文化遗产之一。",
    ],
  },
  {
    src: bg3,
    title: "民谣",
    desc: [
      "民间流行的、赋予民族色彩的歌曲，称为民谣或民歌。民谣的历史悠远，故其作者多不知名。民谣的内容丰富，有宗教的、爱情的、战争的、工作的，也有饮酒、舞蹈作乐、祭典等等。",
      "民谣表现一个民族的感情与习尚，因此各有其独特的音阶与情调风格。如法国民谣的蓬勃、意大利民谣的热情、英国民谣的淳朴、日本民谣的悲愤、西班牙民谣的狂放不羁、中国民谣的缠绵悱恻，都表现了强烈的民族气质与色彩。",
    ],
  },
];
</script>
<style lang='scss' scoped>
.bg {
  position: relative;
  width: 100vw;

  @media (orientation: landscape) {
    #home-bg {
      height: calc(100vh - 80px);
    }
  }
  @media (orientation: portrait) {
    #home-bg {
      height: auto;
    }
  }
  img {
    width: 100%;
  }
  .other-img {
    filter: brightness(0.8);
  }
  .introduce {
    font-size: 40px;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .title {
    position: absolute;
    left: 120px;
    top: 90px;
    color: #fff;
    font-size: 60px;
  }
  .desc {
    width: 1360px;
    padding: calc(50vw - 680px);
    color: #fff;
    font-size: 30px;
    opacity: 0;
    transition: opacity 1.5s;
    &:hover {
      opacity: 1;
    }
    p {
      text-indent: 2em;
    }
  }
}
</style>
