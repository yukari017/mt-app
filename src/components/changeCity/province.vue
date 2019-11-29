<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span class="search">直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
      @focus="hidden"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "黑龙江", "沈阳"],
      province: "省份",
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: "",
      loading: false
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(e) {
      // 请求后端接口
      console.log(e);
    },
    hidden() {
      console.log("312");
      this.provinceActive = false;
      this.cityActive = false;
    },
    changeProvince(value) {
      this.province = value;
      var self = this;
      setTimeout(() => {
        self.provinceActive = false;
      }, 10);
    },
    changeCity(value) {
      this.city = value;
      var self = this;
      setTimeout(() => {
        self.cityActive = false;
      }, 10);
    }
  },
  components: {
    MSelect
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>