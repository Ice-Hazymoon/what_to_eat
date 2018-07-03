/*
 * File: eatWhat.vue
 * Project: eat_what
 * File Created: Saturday, 30th June 2018 9:28:09 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 3rd July 2018 3:10:32 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="statistics">
        <div class="charts-p">
            <div class="title">数据统计</div>
            <div class="placeholder-text" v-if="!chartsLoad">暂无数据</div>
            <ve-pie class="charts" v-if="chartsLoad" :data="chartData"></ve-pie>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            chartsLoad: false,
            chartData: {
                columns: ['name', '次数'],
                rows: [
                    { 'name': '1/1', '访问用户': 1393 },
                    { 'name': '1/2', '访问用户': 3530 },
                    { 'name': '1/3', '访问用户': 2923 },
                    { 'name': '1/4', '访问用户': 1723 },
                    { 'name': '1/5', '访问用户': 3792 },
                    { 'name': '1/6', '访问用户': 4593 }
                ]
            }
        }
    },
    mounted() {
        let data = this.$storejs.get('mikuHistory');
        if(data && data.length){
            let mmm = data.map((el)=>{
                return el.name
            }).reduce((m, k) => {
                return m.set(k, (m.get(k) || 0) + 1);
            }, new Map());
            let chartData = new Array();
            mmm.forEach((el, key)=>{
                console.log(key)
                chartData.push({
                    name: key,
                    '次数': el
                })
            })
            this.chartData.rows = chartData;
            this.chartsLoad = true
        }else{
            this.$emit('handleText', ['暂时还没有数据哦~'])
        }
    },
}
</script>
<style lang="scss" scoped>
$pink: #ff44a3;
.statistics{
    .title{
        text-align: center;
        margin: 10px 0 20px 0;
    }
    .charts-p{
        position: relative;
        padding: 15px 20px;
        margin: 30px 0;
        border-radius: 37px;
        background-color: #fff;
        box-shadow: 0px 20px 70px -20px rgba($color: #000000, $alpha: 0.3);
        border: 2px solid $pink;
    }
    .placeholder-text{
        margin: 20px 0;
        font-size: 30px;
        text-align: center;
    }
}
</style>

