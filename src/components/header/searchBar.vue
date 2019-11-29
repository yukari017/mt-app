<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input @input="input" v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" />
          <el-button type="primary" icon="el-icon-search" />
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"
          v-for="(item, index) in suggestList"
          :key="index"
          >{{item}}</a>

        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: ['火锅', '火锅自助餐', '火锅鸡'],
      suggestList: []
    }
  },
  created() {
    api.getSearchHotWord().then(res=>{
      // console.log(res);
      this.hotPlaceList = res.data.data.slice(0,5);
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res=>{
        this.searchList = res.data.data.list.filter((item, index)=>{
          return item.indexOf(val) > -1;
        });
      })
    },
    blur () {
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
