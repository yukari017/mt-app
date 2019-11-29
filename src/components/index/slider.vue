<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [{
                url: 'https://paidui.meituan.com/?activity_code=169_00038142',
                img: 'http://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url: 'http://hotel.meituan.com/',
                img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },
            {
                url: 'https://cd.meituan.com/meishi/',
                img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },
            {
                url: 'https://cd.meituan.com/meishi/',
                img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },
            {
                url: 'https://cd.meituan.com/meishi/',
                img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            }]
        }
    }
}
</script>