/*
 * File: eatWhat.vue
 * Project: eat_what
 * File Created: Saturday, 30th June 2018 9:28:09 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Saturday, 30th June 2018 11:21:02 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="statistics">
        <ve-pie class="charts" :data="chartData"></ve-pie>
    </div>
</template>
<script>
export default {
    data () {
        return {
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393 },
                    { '日期': '1/2', '访问用户': 3530 },
                    { '日期': '1/3', '访问用户': 2923 },
                    { '日期': '1/4', '访问用户': 1723 },
                    { '日期': '1/5', '访问用户': 3792 },
                    { '日期': '1/6', '访问用户': 4593 }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$pink: #ff44a3;
.statistics{
    .charts{
        position: relative;
        padding: 15px 20px;
        margin: 30px 0;
        border-radius: 37px;
        background-color: #fff;
        box-shadow: 0px 20px 70px -20px rgba($color: #000000, $alpha: 0.3);
        border: 2px solid $pink;
    }
}
</style>

