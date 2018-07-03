/*
 * File: eatWhat.vue
 * Project: eat_what
 * File Created: Saturday, 30th June 2018 9:28:09 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 3rd July 2018 2:31:38 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="management">
        <div class="miaomiao">
            <div class="tt">添加数据</div>
            <input class="name" type="text" placeholder="店名" v-model.trim="form.name">
            <select class="budget" v-model="form.budget" :class="{ 'ch': form.budget==='0' }">
                <option value="0">预算</option>
                <option value="1">低</option>
                <option value="2">中</option>
                <option value="3">高</option>
            </select>
            <select class="way" v-model="form.way" :class="{ 'ch': form.way==='0' }">
                <option value="0">就餐方式</option>
                <option value="1">外卖</option>
                <option value="2">外出</option>
            </select>
            <button class="add" @click="addData"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1968" xmlns:xlink="http://www.w3.org/1999/xlink" ><path d="M426.667 426.667H85.547A85.419 85.419 0 0 0 0 512c0 47.445 38.315 85.333 85.547 85.333h341.12v341.12c0 47.275 38.186 85.547 85.333 85.547 47.445 0 85.333-38.315 85.333-85.547v-341.12h341.12A85.419 85.419 0 0 0 1024 512c0-47.445-38.315-85.333-85.547-85.333h-341.12V85.547A85.419 85.419 0 0 0 512 0c-47.445 0-85.333 38.315-85.333 85.547v341.12z" p-id="1969"></path></svg>添加</button>
        </div>
        <div class="wangwang">
            <div class="tt">管理数据</div>
            <ul class="list">
                <div v-if="!data.length" class="placeholder-text">暂无数据</div>
                <li v-for="(item, index) in data" :key="index">
                    <div class="name">{{ item.name }}</div>
                    <div class="budget">{{ convert(item)[0] }}</div>
                    <div class="way">{{ convert(item)[1] }}</div>
                    <div class="del add" @click="del(index)">删除</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {
                name: '',
                budget: '0',
                way: '0'
            },
            data: []
        }
    },
    methods: {
        addData(){
            if(this.form.name && this.form.budget!=='0' && this.form.way!=='0'){
                let data = this.getData() ? this.getData() : [];
                data.push({
                    name: this.form.name,
                    budget: this.form.budget,
                    way: this.form.way
                })
                this.$storejs.set('mikuData', data);
                this.form = {
                    name: '',
                    budget: '0',
                    way: '0'
                }
                this.data = data;
                this.$emit('handleText', ['新的选择添加好了~'])
            }else{
                this.$emit('handleText', ['请输入完整信息哦!'])
            }
        },
        getData(){
            return this.$storejs.get('mikuData');
        },
        // 转换数据格式为明文
        convert(item){
            let d = new Array();
            if(item.budget==='1'){
                d.push('低');
            }else if(item.budget==='2'){
                d.push('中');
            }else{
                d.push('高');
            }
            if(item.way==='1'){
                d.push('外卖');
            }else{
                d.push('外出');
            }
            return d;
        },
        del(index){
            console.log(index)
            console.log(this.data);
            let h = this.$storejs.get('mikuData');
            h.splice(index, 1);
            this.history = h;
            this.$storejs.set('mikuData', h);
            this.data = h;
        }
    },
    mounted() {
        let h = this.$storejs.get('mikuData');
        this.data = h ? h : [];
    },
}
</script>
<style lang="scss" scoped>
$pink: #ff44a3;
.management{
    .miaomiao,
    .wangwang{
        position: relative;
        padding: 20px 25px;
        margin: 30px 0;
        border-radius: 37px;
        background-color: #fff;
        box-shadow: 0px 20px 70px -20px rgba($color: #000000, $alpha: 0.3);
        border: 2px solid $pink;
        .tt{
            margin: 10px 0;
            margin-bottom: 15px;
            font-weight: bold;
        }
        .name,
        .budget,
        .way{
            width: 100px;
            box-sizing: border-box;
            padding: 5px 10px;
            outline: none;
            display: inline-flex;
            align-items: center;
            vertical-align: top;
            border: 1px solid #cfd9db;
            border-radius: 3px;
            appearance: none;
            transition: all .3s ease;
            &::placeholder{
                color: #a3a3a3;
            }
            &:focus{
                border-color: transparent;
                box-shadow: 0px 0px 1px 1px $pink;
            }
            &.ch{
                color: #a3a3a3;
            }
        }
        .budget{
            margin: 0 8px;
        }
        .add{
            padding: 10px 20px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            box-shadow: none;
            color: #fff;
            border: none;
            background-color: $pink;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            transition: all .3s ease;
            &:hover{
                opacity: .8;
            }
        }
        svg{
            width: 16px;
            height: 16px;
            fill: #fff;
            margin-right: 5px;
        }
    }
    .wangwang{
        .placeholder-text{
            margin: 20px 0;
            font-size: 30px;
            text-align: center;
        }
        .budget,
        .name,
        .way{
            width: auto;
            border-radius: 0;
            margin: 0;
        }
        .list{
            max-height: 180px;
            overflow: auto;
        }
        li{
            margin: 10px 0;
        }
        .del{
            width: auto;
            display: inline-flex;
            margin-top: 0;
            padding: 5px 10px;
            border-radius: 0;
        }
    }
}
</style>

