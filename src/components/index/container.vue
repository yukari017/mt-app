<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <div class="ibody">
      <a href="#" v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>

            </div>
            <!-- v-if="item.rentNum && item.price_info.current_price" -->
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
          </div>
        </el-card>
      </a>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          img:
            "https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c",
          title: "XCAKE艾蛋糕（天府广场店）",
          sub_title: "蛋糕4选1",
          price_info: {
            current_price: 109,
            old_price: 189,
            avg_price: null,
            units: null
          },
          rentNum: 10,
          address: "天府广场/盐市口"
        },
        {
          img:
            "https://p1.meituan.net/msmerchant/3bc53ab3697c9b86696a62500809bd198782876.jpg@368w_208h_1e_1c",
          title: "shy guys咖啡厅",
          sub_title: "4寸海盐焦糖生日蛋糕1个，约4寸，圆形",
          price_info: {
            current_price: 109,
            old_price: 189,
            avg_price: 312,
            units: "人"
          },
          rentNum: 0,

          address: "宽窄巷子"
        },
        {
          img:
            "https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c",
          title: "shy guys咖啡厅",
          sub_title: "4寸海盐焦糖生日蛋糕1个，约4寸，圆形",
          price_info: {
            current_price: 96,
            old_price: 128
          },
          rentNum: 0,

          address: "天府广场/盐市口"
        },
        {
          img:
            "https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c",
          title: "XCAKE艾蛋糕（天府广场店）",
          sub_title: "蛋糕4选1",
          price_info: {
            current_price: 109,
            old_price: 189
          },
          rentNum: 10,
          address: "天府广场/盐市口"
        },
        {
          img:
            "https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c",
          title: "XCAKE艾蛋糕（天府广场店）",
          sub_title: "蛋糕4选1",
          price_info: {
            current_price: 109,
            old_price: 189
          },
          rentNum: 0,
          address: "天府广场/盐市口"
        },
        {
          img:
            "https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@368w_208h_1e_1c",
          title: "XCAKE艾蛋糕（天府广场店）",
          sub_title: "蛋糕4选1",
          price_info: {
            current_price: 109,
            old_price: 189
          },
          rentNum: 10,
          address: "天府广场/盐市口"
        }
      ]
    };
  },
  props: ["nav"],
  created() {
    api.getResultProducts().then(res=>{
      this.resultsData = res.data.data;
      console.log(res.data.data)
    })
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName)
      if (tagName != "dd") return false;
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>