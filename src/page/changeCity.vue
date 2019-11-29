<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="recentList" />            
        </el-row>
        <el-row>
            <cate-groy />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import cateGroy from '@/components/changeCity/categroy.vue'
export default {
    data() {
        return {
            hotList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗","杭州"],
            recentList: ['成都','北京','上海']
        }
    },
    components: {
        Province,
        hot,
        cateGroy
    }
}
</script>