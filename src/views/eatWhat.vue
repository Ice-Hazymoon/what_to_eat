/*
 * File: eatWhat.vue
 * Project: eat_what
 * File Created: Saturday, 30th June 2018 9:28:09 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Saturday, 7th July 2018 9:54:23 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="form">
        <ul class="info cd">
            <li>
                <svg class="icon-weather" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9447" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M709.752388 316.898487c-41.097-83.232656-126.598326-140.670833-225.734184-140.670833-132.88245 0-241.472634 103.016235-250.900354 233.466286-97.686856 27.871791-168.814824 113.181759-168.814824 214.230176 0 119.193683 99.053993 216.306464 223.848231 223.192292 0 0 387.006218 0.655939 391.734916 0.655939 146.818857 0 279.8108-119.027907 279.8108-265.820158C959.69595 440.46271 849.137948 325.150428 709.752388 316.898487zM679.88515 791.8108c-3.552919 0-391.734916 0-391.734916 0s-168.924317-17.324574-167.886685-167.886685c0.600681-84.981487 75.198679-162.803923 167.886685-167.886685 0-115.912963 74.161047-223.848231 195.866946-223.848231 96.04752 0 160.125931 58.640562 182.941566 140.288117 138.64878-6.066159 232.401024 103.617939 236.773611 195.48423C909.609205 691.417299 780.632715 791.8108 679.88515 791.8108z" p-id="9448"></path>
                </svg>
                <span class="text">今天天气为: {{ weather }}</span>
            </li>
            <li>
                <svg class="icon-date" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17812" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M872 992H152A120.32 120.32 0 0 1 32 872.64v-640a120.32 120.32 0 0 1 120-120h720A120.32 120.32 0 0 1 992 232.64v640A120.32 120.32 0 0 1 872 992zM152 192A40 40 0 0 0 112 232.64v640a40 40 0 0 0 40 40h720a40 40 0 0 0 40-40v-640A40 40 0 0 0 872 192z m160 80A40 40 0 0 1 272 232.64v-160a40 40 0 0 1 80 0v160a40 40 0 0 1-40 40z m400 0A40 40 0 0 1 672 232.64v-160a40 40 0 0 1 80 0v160a40 40 0 0 1-40 40z m200 160h-800a40 40 0 0 1 0-80h800a40 40 0 0 1 0 80zM232 552.64h80v80h-80z m160 0h80v80h-80z m160 0h80v80h-80z m160 0h80v80h-80z m-480 160h80v80h-80z m160 0h80v80h-80z m160 0h80v80h-80z m160 0h80v80h-80z" p-id="17813"></path>
                </svg>
                <span class="text">距离下一次发工资还有: {{ data.date }} 天</span>
            </li>
            <li>
                <svg class="icon-yesterdaypay" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18122" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M365.393 657.295l194.99-55.32L421.103 463.652 365.393 657.295 365.393 657.295zM886.183 278.398 746.902 140.075 440.493 444.378l139.271 138.318L886.183 278.398 886.183 278.398zM845.593 790.623c0 48.064-39.009 87.058-87.117 87.058l-522.73 0c-48.132 0-87.122-38.994-87.122-87.058L148.624 268.282c0-48.093 38.989-87.058 87.122-87.058l348.482 0 87.126-87.058L206.708 94.166c-80.206 0-145.209 64.95-145.209 145.092l0 580.389c0 80.148 65.003 145.097 145.209 145.097l580.807 0c80.187 0 145.204-64.95 145.204-145.097L932.719 355.336l-87.126 87.058L845.593 790.623 845.593 790.623zM950.913 162.203 863.86 75.758c-14.42-14.327-38.586-13.549-53.968 1.726l-41.791 41.494 139.271 138.318 41.795-41.499C964.55 200.522 965.328 176.531 950.913 162.203L950.913 162.203zM950.913 162.203" p-id="18123"></path>
                </svg>
                <span class="text">上次吃了: {{ data.yesterday }}</span>
            </li>
        </ul>
        <div class="budget cd">
            <div class="tt">
                <svg class="icon-money" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10890" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M656 310.4c35.2-38.4 76.8-96 76.8-156.8 0-35.2-9.6-64-32-86.4-41.6-41.6-115.2-41.6-198.4-41.6h-60.8c-76.8 0-140.8-3.2-182.4 38.4-22.4 22.4-32 51.2-32 89.6 0 86.4 76.8 163.2 112 192 12.8 12.8 35.2 9.6 44.8-3.2 12.8-12.8 9.6-35.2-3.2-44.8-54.4-48-89.6-102.4-89.6-144 0-32 9.6-41.6 12.8-44.8 22.4-19.2 76.8-19.2 137.6-19.2h67.2c67.2 0 131.2 0 153.6 22.4 0 3.2 9.6 12.8 9.6 41.6 0 38.4-35.2 92.8-92.8 140.8-9.6 6.4-12.8 19.2-9.6 28.8 3.2 9.6 9.6 19.2 19.2 25.6C707.2 393.6 832 515.2 832 681.6 832 838.4 736 896 480 896s-352-57.6-352-214.4c0-96 44.8-192 124.8-262.4 12.8-12.8 16-32 3.2-44.8-12.8-12.8-32-16-44.8-3.2C118.4 454.4 64 566.4 64 681.6 64 960 345.6 960 480 960s416 0 416-278.4C899.2 528 800 384 656 310.4z" p-id="10891"></path>
                    <path d="M611.2 467.2c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-80 76.8-80-76.8c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l89.6 86.4v19.2h-64c-19.2 0-32 12.8-32 32s12.8 32 32 32h64v32h-64c-19.2 0-32 12.8-32 32s12.8 32 32 32h64V800c0 19.2 12.8 32 32 32s32-12.8 32-32v-67.2h64c19.2 0 32-12.8 32-32s-12.8-32-32-32h-64v-32h64c19.2 0 32-12.8 32-32s-12.8-32-32-32h-64V560l96-92.8z" p-id="10892"></path>
                </svg>
                <span>预算: </span>
            </div>
            <div class="miku-input">
                <input type="radio" name="budget" id="budget-high" value="3" v-model="from.budget" />
                <label for="budget-high">高</label>
            </div>
            <div class="miku-input">
                <input type="radio" name="budget" id="budget-medium" value="2" v-model="from.budget" />
                <label for="budget-medium">中</label>
            </div>
            <div class="miku-input">
                <input type="radio" name="budget" id="budget-low" value="1" v-model="from.budget" />
                <label for="budget-low">低</label>
            </div>
            <br>
            <div class="tt">
                <svg class="icon-way" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8899" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M433 381.9c0 33.2-27.1 60.3-60.3 60.3H158.3c-33.2 0-60.3-27.1-60.3-60.3V158.4c0-33.2 27.1-60.3 60.3-60.3h214.4c33.2 0 60.3 27.1 60.3 60.3v223.5zM433 866.8c0 33.2-27.1 60.3-60.3 60.3H158.3c-33.2 0-60.3-27.1-60.3-60.3V643.3c0-33.2 27.1-60.3 60.3-60.3h214.4c33.2 0 60.3 27.1 60.3 60.3v223.5zM927.3 381.9c0 33.2-27.1 60.3-60.3 60.3H652.6c-33.2 0-60.3-27.1-60.3-60.3V158.5c0-33.2 27.1-60.3 60.3-60.3H867c33.2 0 60.3 27.1 60.3 60.3v223.4zM927.3 866.8c0 33.2-27.1 60.3-60.3 60.3H652.6c-33.2 0-60.3-27.1-60.3-60.3V643.3c0-33.2 27.1-60.3 60.3-60.3H867c33.2 0 60.3 27.1 60.3 60.3v223.5z" p-id="8900"></path>
                </svg>
                <span>就餐方式: </span>
            </div>
            <div class="miku-input">
                <input type="checkbox" name="way" id="way-goout" value="2" v-model="from.way" />
                <label for="way-goout">外出就餐</label>
            </div>
            <div class="miku-input">
                <input type="checkbox" name="way" id="way-takeaway" value="1" v-model="from.way" />
                <label for="way-takeaway">点外卖</label>
            </div>
        </div>
        <div class="result cd">
            今日推荐结果: {{ data.result }}
            <!-- 外出--卤面馆--人均 12 元 -->
        </div>
        <div class="feedback">
            <div class="another" @click="another">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5725" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M873.98587 511.769756c23.939225 0.320295 47.88459 0.639566 71.822792 0.958838-0.638543 0.63752-1.276063 1.276063-1.914606 1.913583-37.663808 56.814983-75.337849 113.64634-113.000634 170.459277-0.638543-0.320295-1.277086-0.638543-1.916653-0.957815-37.981033-57.452503-75.974345-114.921379-113.957425-172.374906 23.939225 0 47.88459 0 71.823815 0 2.456958-147.118686-102.745059-240.978377-220.256426-270.052552-61.804624-15.291265-132.651182 2.13257-175.246303 22.025643-17.676591 8.255011-32.69668 25.062815-52.66957 29.687136-32.355919 7.489578-63.152319-24.143886-50.754964-57.458643 8.836249-23.74275 36.657898-32.898271 57.45762-45.008077 59.767222-34.796504 167.610392-54.748928 254.731612-30.643927C747.232001 201.026456 874.512872 324.777945 873.98587 511.769756z" p-id="5726"></path>
                    <path d="M237.158886 511.769756c-2.413979 144.517441 101.345176 240.326531 216.425168 269.094738 65.179488 16.295128 139.481751-1.283226 183.865611-23.940249 15.639189-8.937556 31.283494-17.877159 46.924729-26.814716 33.232892-8.856715 64.129576 24.098861 51.710732 57.45762-7.695263 20.672832-30.831192 29.606295-48.839335 40.222073-60.294225 35.541471-166.753885 61.726853-258.560824 36.389792C278.944572 822.85177 149.454382 701.629895 150.015154 511.769756c-23.939225 0-47.88459 0-71.822792 0 0-0.319272 0-0.638543 0-0.957815 0.638543-0.638543 1.277086-1.277086 1.915629-1.915629 37.663808-56.81396 75.337849-113.645316 113.000634-170.459277 0.638543 0.319272 1.277086 0.638543 1.915629 0.957815 37.982056 57.452503 75.976392 114.922403 113.958448 172.373883C285.043477 511.769756 261.097088 511.769756 237.158886 511.769756z" p-id="5727"></path>
                </svg>
                <span>换一个</span>
            </div>
            <div class="determine" @click="determine">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6929" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M838.940444 207.644444l-432.924444 432.924445-199.793778-199.736889A87.495111 87.495111 0 0 0 82.488889 564.508444l261.688889 261.688889c34.133333 34.133333 89.543111 34.133333 123.676444 0l494.762667-494.819555a87.438222 87.438222 0 1 0-123.676445-123.733334" p-id="6930"></path>
                </svg>
                <span>决定</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            from: {
                budget: '2', // 预算
                way: ['2'] // 就餐方式
            },
            data: new Object()
        }
    },
    methods: {
        another(){
            if(this.data.yesterday==='暂无数据'){
                this.$emit('handleText', ['数据库里暂时还没数据哦, 快去添加吧~']);
            }else{
                this.$emit('handleText', ['换好了~']);
                this.handleData();
            }
        },
        determine(){
            let mikuHistory = this.$storejs.get('mikuHistory') ? this.$storejs.get('mikuHistory') : [];
            if(this.data.yesterday==='暂无数据'){
                this.$emit('handleText', ['数据库里暂时还没数据哦, 快去添加吧~']);
                return false;
            }else{
                mikuHistory.push({
                    name: this.data.name,
                    budget: this.data.budget,
                    way: this.data.way
                });
                this.$storejs.set('mikuHistory', mikuHistory);
                this.$emit('handleText', ['祝你就餐愉快~']);
                this.$router.push('/statistics');
            }
        },
        // 转换数据格式为明文
        convert(budget, way){
            let d = new Array();
            if(budget==='1'){
                d.push('低');
            }else if(budget==='2'){
                d.push('中');
            }else{
                d.push('高');
            }
            if(way==='1'){
                d.push('外出');
            }else{
                d.push('外卖');
            }
            return d;
        },
        // 处理数据
        handleData(){
            let data = this.$storejs.get('mikuData');
            let list = new Array();
            // 循环数据库, 获取全部符合条件的数据
            if(!data) return false;
            data.forEach((el) => {
                if(el.budget===this.from.budget && (this.from.way).indexOf(el.way) !== -1){
                    list.push(el);
                }
            });
            // 从符合条件的数据中随机出一个数据
            if(list && list.length){
                let randData = list[Math.floor(Math.random()*list.length)];
                let mikuHistory = this.$storejs.get('mikuHistory');
                const day = (new Date()).getDate();
                const convert = this.convert(randData.budget, randData.way);
                this.data = {
                    date: day < 10 ? 10 - day : this.getCountDays - day + 10,
                    name: randData.name,
                    budget: randData.budget,
                    way: randData.way,
                    result: convert[1] + '--'+ randData.name +'--预算: ' + convert[0],
                    yesterday: (mikuHistory && mikuHistory.length) ? mikuHistory.pop().name : '暂无原始数据'
                }
                this.$emit('handleText', ['今日推荐结果: ' + this.data.result])
            }else{
                this.handleNullData();
            }
        },
        // 如果没有符合条件的数据
        handleNullData(){
            this.$emit('handleText', ['数据库里暂时还没符合条件数据哦, 快去添加吧~']);
            const day = (new Date()).getDate();
            this.data = {
                date: day < 10 ? 10 - day : this.getCountDays - day + 10,
                yesterday: '暂无数据',
                result: '暂无数据'
            }
        }
    },
    created(){
        let data = this.$storejs.get('mikuData');
        if(data){
            this.handleData();
        }else{
            this.handleNullData();
        }
    },
    mounted(){
        this.handleData();
    },
    computed: {
        getCountDays() {
            const curDate = new Date();
            const curMonth = curDate.getMonth();
            curDate.setMonth(curMonth + 1);
            curDate.setDate(0);
            return curDate.getDate();
        },
        weather(){
            let sw = this.$storejs.get('mikuWeather');
            if(!sw){
                sw = '暂无数据'
                return false;
            }
            return sw===1 ? '晴' : '阴';
        }
    },
    watch: {
        from:{
            handler: function() {
                this.handleData()
            },
            deep: true
        }
    }
}
</script>
<style lang="scss" scoped>
$pink: #ff44a3;
.form {
  box-sizing: border-box;
  svg {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
    fill: #2c3e50;
    vertical-align: top;
  }
  .cd {
    position: relative;
    padding: 20px 25px;
    margin: 30px 0;
    border-radius: 37px;
    background-color: #fff;
    box-shadow: 0px 20px 70px -20px rgba($color: #000000, $alpha: 0.3);
    border: 2px solid $pink;
  }
  .info {
    border-radius: 30px;
    .tt {
      margin-bottom: 10px;
    }
    li {
      margin: 10px 0;
    }
  }
  .tt {
    font-size: 16px;
    display: inline-block;
    margin-right: 10px;
    font-weight: bold;
  }
  .miku-input {
    display: inline-block;
  }
  .result {
    color: rgb(255, 92, 90);
  }
}
.feedback {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  div {
    position: relative;
    display: inline-block;
    padding: 15px 20px;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
    border-radius: 34px;
    cursor: pointer;
    background-image: linear-gradient(120deg, #f093fb 0%, $pink 100%);
    transition: all 0.3s ease;
    span {
      transition: all 0.3s ease;
    }
    svg {
      width: 18px;
      height: 18px;
      fill: #fff;
    }
  }
}
.btn {
  position: relative;
  display: inline-block;
  margin: 60px;
}
</style>

