/*
 * File: Window.vue
 * Project: eat_what
 * File Created: Wednesday, 27th June 2018 9:35:06 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Saturday, 30th June 2018 8:37:41 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
<template>
    <!-- <div class="window-warp" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" ref="card" > -->
    <div class="window-warp" @mouseenter.stop="handleMouseLeave" @mouseleave.stop @mousemove.stop ref="card">
        <div class="window" :style="cardStyle">
            <div class="left">
                <div class="live2d">
                    <transition name="live2dLoad">
                        <canvas :style="cardLive2dTransform" id="live2d" v-show="live2dLoad" width="448" height="360" @click="PlayAudio" @mouseover="handleText(['干嘛呢你，快把手拿开!!!', '鼠…鼠标放错地方了！'])"></canvas>
                    </transition>
                    <div class="text">
                        <vue-typer :text="text" :class="textClass" :repeat="0" erase-style="clear" caret-animation="smooth"></vue-typer>
                    </div>
                </div>
            </div>
            <div class="right">
                <div :style="cardBtnTransform" class="live2d-btn">
                    <div class="btn" title="换装" @mouseenter="handleText(['要换一套衣服吗?'])" @click="loadRandModel">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="7908" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M936.672 193.216l-226.88-64c-8.704-2.528-18.112-1.12-25.824 3.776-7.68 4.864-12.896 12.736-14.432 21.728C656.576 231.936 590.272 288 512 288c-30.56 0-56.16-13.12-79.296-27.296-15.04-9.216-34.752-4.512-44 10.56s-4.512 34.752 10.56 44C428.896 333.44 465.44 352 512 352c97.664 0 181.952-62.272 212.096-152.288L896 248.224l0 224.736-121.728-24.352c-9.408-1.888-19.168 0.576-26.56 6.624C740.32 461.344 736 470.4 736 480l0 352c0 17.664-14.336 32-32 32L320 864c-17.632 0-32-14.336-32-32L288 448c0-9.6-4.288-18.656-11.712-24.736-7.424-6.08-17.152-8.576-26.56-6.624L128 440.96 128 248.128l200.8-57.376c16.992-4.864 26.816-22.56 21.984-39.552-4.832-16.96-22.56-26.816-39.552-21.984l-224 64C73.472 197.152 64 209.728 64 224l0 256c0 9.6 4.288 18.656 11.712 24.736 7.392 6.08 17.152 8.512 26.56 6.624L224 487.04 224 832c0 52.928 43.072 96 96 96l384 0c52.928 0 96-43.072 96-96l0-312.96 121.728 24.352c9.44 1.92 19.2-0.544 26.56-6.624C955.68 530.656 960 521.6 960 512L960 224C960 209.664 950.464 197.088 936.672 193.216z" p-id="7909"></path>
                            <path d="M320 768c0 17.696 14.336 32 32 32l320 0c17.696 0 32-14.304 32-32s-14.304-32-32-32L352 736C334.336 736 320 750.304 320 768z" p-id="7910"></path>
                        </svg>
                    </div>
                    <div class="btn" title="切换角色" @mouseenter="handleText(['要看看我的姐妹吗?'])" @click="switchModel">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1043" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M728 352c14.549 0 26.403-11.508 26.973-25.916 0.887-9.319-3.095-18.839-11.287-24.63L565.322 175.357c-12.175-8.607-29.024-5.716-37.633 6.46s-5.716 29.025 6.461 37.633L645.259 298H300.9c-57.66 0-112.227 21.889-153.648 61.633C105.174 400.01 82 453.851 82 511.239v0.498c0 37.235 10.938 75.407 31.633 110.389 5.041 8.52 14.033 13.256 23.263 13.256 4.673 0 9.408-1.214 13.722-3.766 12.834-7.593 17.083-24.151 9.491-36.985C149.11 576.039 136 546.566 136 511.737v-0.498c0-42.542 17.274-82.545 48.64-112.642C215.956 368.549 257.245 352 300.9 352H728zM913.405 405.731c-7.41-12.939-23.907-17.424-36.847-10.013-12.94 7.41-17.424 23.908-10.013 36.848C879.637 455.426 886 481.16 886 511.239v0.498C886 602.863 815.166 677 728.1 677H309.772c-11.037-3.845-23.725-0.173-30.854 9.822a26.885 26.885 0 0 0-4.893 18.2c0.427 11.448 7.978 21.068 18.352 24.563l166.281 118.591a26.877 26.877 0 0 0 15.655 5.02c8.431 0 16.737-3.938 22.005-11.324 8.659-12.141 5.836-29.001-6.304-37.66L387.361 731H728.1c57.353 0 110.998-23.282 151.054-65.557C918.391 624.032 940 569.444 940 511.737v-0.498c0-39.747-8.699-74.259-26.595-105.508z"></path>
                        </svg>
                    </div>
                    <div class="btn" title="拍照" @mouseenter="handleText(['你要给我拍照呀，一二三~茄子~~'])" @click="takingPictures">
                        <svg viewBox="0 0 1040 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1733" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M881.738949 183.126784 764.91115 183.126784c-17.388019-63.330374-76.552513-110.217241-147.520845-110.217241L406.539086 72.909543c-70.995961 0-130.105197 46.886867-147.520845 110.217241l-116.800169 0c-78.552054 0-142.216026 63.663972-142.216026 142.216026l0 483.532645c0 78.552054 63.663972 142.216026 142.216026 142.216026l739.519854 0c78.523401 0 142.216026-63.663972 142.216026-142.216026l0-483.532645C1023.953951 246.790756 960.26235 183.126784 881.738949 183.126784zM967.067336 808.874431c0 47.052642-38.275745 85.329411-85.329411 85.329411L142.218072 894.203842c-47.053666 0-85.329411-38.275745-85.329411-85.329411l0-483.532645c0-47.052642 38.275745-85.329411 85.329411-85.329411l116.800169 0 43.35953 0 11.498892-41.804105c11.054777-40.275285 49.164746-68.413136 92.662423-68.413136l210.851219 0c43.4987 0 81.607646 28.137851 92.690052 68.413136l11.498892 41.804105 43.331901 0 116.827799 0c47.052642 0 85.329411 38.275745 85.329411 85.329411L967.06836 808.874431z" p-id="1734"></path>
                            <path d="M511.978511 315.592748c-139.15941 0-252.376984 113.188922-252.376984 252.348332 0 139.160433 113.217574 252.350378 252.376984 252.350378 139.132804 0 252.320703-113.188922 252.320703-252.350378C764.299213 428.78167 651.111315 315.592748 511.978511 315.592748zM511.978511 763.404844c-107.96699 0-195.49037-87.49575-195.49037-195.463764 0-107.96699 87.523379-195.46274 195.49037-195.46274 107.939361 0 195.435111 87.49575 195.435111 195.46274C707.413622 675.909094 619.917872 763.404844 511.978511 763.404844z" p-id="1735"></path>
                            <path d="M866.739327 291.177686l-58.052161 0c-15.721053 0-28.442796 12.721743-28.442796 28.442796 0 15.722076 12.721743 28.442796 28.442796 28.442796l58.052161 0c15.721053 0 28.443819-12.721743 28.443819-28.442796C895.182123 303.898405 882.46038 291.177686 866.739327 291.177686z" p-id="1736"></path>
                        </svg>
                    </div>
                    <router-link to="/home">
                        <div class="btn" title="今天吃什么" @mouseenter="handleText(['看看今天吃点什么'])">
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5933" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M644.032 278.272 644.032 177.6c15.104-11.712 24.384-26.56 24.384-45.056 0-53.632-76.544-77.632-152.384-77.632-75.904 0-152.384 24-152.384 77.632 0 21.44 12.352 38.144 32 50.432l0 90.688c-208.256 59.008-362.944 272.064-362.944 525.12l0 37.696L992 836.48l0-37.696C992 551.872 844.672 343.04 644.032 278.272zM516.032 111.424c51.328 0 85.632 12.032 98.368 21.12C609.152 136.256 599.936 140.48 587.584 144.256 570.048 149.504 545.984 153.6 516.032 153.6c-30.08 0-54.08-4.096-71.552-9.344C432.064 140.48 422.848 136.32 417.536 132.544 430.4 123.52 464.704 111.424 516.032 111.424zM573.568 222.912l0 56c-58.944-13.184-65.28-13.312-123.136 0L450.432 222.912 573.568 222.912zM81.28 782.912c14.656-206.464 152.32-411.776 344.64-448-16.448 4.032 75.008-15.488 172.224 0 175.488 42.624 314.176 182.784 344.64 448L81.28 782.912zM634.624 385.408c-9.536-5.12-19.584-7.68-29.632-7.68-31.68 0-60.992 27.136-68.096 63.104-6.464 32.256 7.04 62.464 34.304 76.992 73.152 38.976 116.224 82.752 139.776 141.888 10.304 25.792 30.464 41.216 53.888 41.216 22.72 0 45.952-14.784 59.008-37.696 12.928-22.528 14.656-49.536 4.864-74.24C795.072 504.704 729.792 436.16 634.624 385.408zM781.824 632.512c-4.48 7.872-11.968 11.968-17.024 11.968-1.728 0-5.056 0-8.192-7.872C719.744 544 649.536 497.216 592.576 466.816 586.304 463.424 584.448 459.84 585.728 453.312c1.792-9.216 9.984-19.008 19.264-19.008 2.624 0 5.44 0.768 8.256 2.24 84.032 44.864 141.184 103.936 169.728 175.616C785.856 619.456 785.472 626.048 781.824 632.512zM32 950.912l959.616 0 0.384-56-960 0L32 950.912z" p-id="5934"></path>
                            </svg>
                        </div>
                    </router-link>
                    
                    <router-link to="/statistics">
                        <div class="btn" title="统计" @mouseenter="handleText(['要看看最近的统计数据吗?'])">
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3068" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M832 192c-70.4 0-128 57.6-128 128 0 38.4 19.2 76.8 44.8 96l-70.4 160C665.6 576 652.8 576 640 576 627.2 576 614.4 576 601.6 582.4L416 275.2C435.2 249.6 448 224 448 192c0-70.4-57.6-128-128-128S192 121.6 192 192c0 44.8 25.6 89.6 64 108.8L192 704c0 0 0 0 0 0-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128c0-44.8-25.6-89.6-64-108.8L320 320c0 0 0 0 0 0 12.8 0 32-6.4 44.8-6.4l185.6 300.8C524.8 640 512 672 512 704c0 70.4 57.6 128 128 128s128-57.6 128-128c0-32-12.8-64-32-83.2L806.4 448c6.4 0 12.8 0 25.6 0 70.4 0 128-57.6 128-128S902.4 192 832 192z" p-id="3069"></path>
                            </svg>
                        </div>
                    </router-link>
                    <router-link to="/management">
                        <div class="btn" title="管理数据" @mouseenter="handleText(['要管理数据吗?'])">
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4842" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M242.538496 836.959232c1.62816 0.02048 3.278848 0.032768 4.972544 0.032768L242.538496 836.959232zM738.116608 836.958208l-5.074944 0.033792C734.7712 836.992 736.45568 836.978688 738.116608 836.958208zM855.906304 511.409152c-22.436864 0-40.623104 18.183168-40.623104 40.619008l0.236544 209.588224c-0.822272 58.725376-14.860288 74.56256-77.403136 75.342848l76.896256-0.512 0.50688-74.7776 0.203776 75.331584L165.888 837.32992l0-0.874496 76.770304 0.503808c-56.912896-0.694272-73.76896-13.828096-76.9792-60.309504l-0.3072-545.697792 0.90624 37.297152c0-59.831296 10.335232-78.271488 65.39264-80.894976l543.567872-0.311296c22.43584 0 40.62208-18.187264 40.62208-40.621056 0-22.433792-18.189312-40.620032-40.624128-40.620032l-617.531392 0.352256c-40.897536 3.785728-72.988672 37.871616-73.633792 79.599616l0.335872 659.006464C88.257536 886.049792 122.989568 918.528 165.285888 918.528L208.896 918.528l0 0.022528 563.2-0.287744L772.096 918.528l43.173888 0C860.13952 918.528 897.024 881.839104 897.024 836.967424L897.024 796.672l-0.216064 0-0.278528-244.482048C896.529408 529.754112 878.34112 511.409152 855.906304 511.409152zM164.864 187.392l25.407488-0.014336L164.864 187.543552 164.864 187.392zM961.488896 201.111552c-22.079488-22.075392-57.878528-22.075392-79.956992 0L424.471552 660.14208c-22.078464 22.076416-22.078464 57.873408 0 79.949824 22.079488 22.07744 57.877504 22.07744 79.954944 0l457.061376-459.029504C983.566336 258.985984 983.566336 223.192064 961.488896 201.111552z" p-id="4843"></path>
                            </svg>
                        </div>
                    </router-link>
                </div>
                <router-view class="miao" :style="cardBtnTransform" @handleText="handleText"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import audioArr from '../assets/js/audio.js';
export default {
    data() {
        return {
            text: ["少女祈祷中..."],
            textClass: null,
            live2dLoad: false,
            hitokotoInterval: null,
            audio: new Audio(),
            parallaxData: {
                width: 0,
                height: 0,
                mouseX: 0,
                mouseY: 0,
                radio: 5,
                mouseLeaveDelay: null
            }
        };
    },
    methods: {
        // 获取天气
        handleWeather() {
            this.$http.get('https://api.imiku.me/weather.php').then(e => {
                let day = parseInt(e.data.results[0].daily[0].code_day);
                if ([1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(day) === -1) {
                    setTimeout(() => {
                        this.handleText(['今日天气不太好呢, 出门记得带装备哦~']);
                    }, 2000)
                } else {
                    setTimeout(() => {
                        this.handleText(['今天天气还不错, 多出去走走哦~']);
                    }, 2000)
                }
                setTimeout(() => {
                    this.live2dLoad = true;
                }, 1000)
            }).catch(err => {
                setTimeout(() => {
                    this.handleText(['十分抱歉, 天气获取失败, 错误信息为: ' + err + '.']);
                }, 2000)
            });
        },
        // 处理对话框文字
        handleText(text, classn) {
            if (!this.live2dLoad) return false;
            clearTimeout(this.hitokotoInterval);
            this.textClass = classn ? classn : '';
            this.text = text[Math.floor(Math.random() * text.length + 1) - 1];
            this.hitokotoInterval = setTimeout(() => {
                this.getHitokoto();
            }, 15000);
        },
        // 载入 live2D
        loadModel() {
            const modelId = 1;
            const modelTexturesId = 0;
            const modelConfig = this.$storejs.get('modelConfig');
            if (!modelConfig) {
                loadlive2d(
                    "live2d",
                    "https://api.imiku.me/live2d/get/?id=" + modelId + '-' + modelTexturesId,
                    this.handleText()
                );
                this.$storejs.set('modelConfig', {
                    modelId: modelId,
                    modelTexturesId: modelTexturesId
                });
            } else {
                loadlive2d(
                    "live2d",
                    "https://api.imiku.me/live2d/get/?id=" + modelConfig.modelId + '-' + modelConfig.modelTexturesId,
                );
            }
        },
        // 随机衣服
        loadRandModel() {
            const modelConfig = this.$storejs.get('modelConfig');
            const modelTexturesRandMode = 'rand';
            this.$http.get('https://api.imiku.me/live2d/' + modelTexturesRandMode + '_textures/?id=' + modelConfig.modelId + '-' + modelConfig.modelTexturesId)
                .then(e => {
                    if (e.data.textures.id === 1 && (modelConfig.modelTexturesId == 1 || modelConfig.modelTexturesId == 0)) {
                        this.handleText(['我还没有其他衣服呢']);
                    } else {
                        this.handleText(['我的新衣服好看吗']);
                    }
                    this.$storejs.set('modelConfig', {
                        modelId: modelConfig.modelId,
                        modelTexturesId: e.data.textures.id
                    });
                    this.loadModel();
                })
                .catch(err => {
                    this.handleText(['获取新衣服失败, 稍后再试试?: ' + err], 'error');
                })
        },
        // 切换模型
        switchModel() {
            const modelConfig = this.$storejs.get('modelConfig');
            this.$storejs.set('modelConfig', {
                modelId: modelConfig.modelId === 1 ? 2 : 1,
                modelTexturesId: modelConfig.modelTexturesId
            });
            this.loadModel();
        },
        // 截图
        takingPictures() {
            this.handleText['照好了嘛，是不是很可爱呢？'];
            window.Live2D.captureName = 'Pio.png';
            window.Live2D.captureFrame = true;
        },
        // 获取一言
        getHitokoto() {
            this.$http.get('https://v1.hitokoto.cn/?c=a')
                .then(e => {
                    this.handleText(['『' + e.data.hitokoto + '』--- 来自: ' + e.data.from], 'hitokoto');
                })
                .catch(err => {
                    this.getHitokoto();
                })
        },
        // 播放音频
        PlayAudio() {
            const modelConfig = this.$storejs.get('modelConfig');
            let rand0 = Math.floor(Math.random() * audioArr[0].length + 1) - 1;
            let rand1 = Math.floor(Math.random() * audioArr[1].length + 1) - 1;
            const audioSrc = modelConfig.modelId === 1 ? audioArr[0][rand0] : audioArr[1][rand1];
            this.audio.src = audioSrc;
            let playPromise = this.audio.play();
            this.handleText(['是…是不小心碰到了吧...', '萝莉控是什么呀?', '你看到我的小熊了吗?', '再摸的话我可要报警了！⌇●﹏●⌇', '110吗，这里有个变态一直在摸我(ó﹏ò｡)'], 'warn')
        },
        // 视觉差
        handleMouseMove(e) {
            this.parallaxData.mouseX = e.pageX - this.$refs.card.offsetLeft - this.parallaxData.width / 2;
            this.parallaxData.mouseY = e.pageY - this.$refs.card.offsetTop - this.parallaxData.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.parallaxData.mouseLeaveDelay);
        },
        handleMouseLeave() {
            let _this = this;
            this.parallaxData.mouseLeaveDelay = setTimeout(function () {
                _this.parallaxData.mouseX = 0;
                _this.parallaxData.mouseY = 0;
            }, 1000);
        },
    },
    mounted() {
        this.handleWeather();
        this.loadModel();
        this.parallaxData.width = this.$refs.card.offsetWidth;
        this.parallaxData.height = this.$refs.card.offsetHeight;
        document.body.addEventListener('mousemove', this.handleMouseMove);
        document.body.addEventListener('mouseenter', this.handleMouseEnter);
        document.body.addEventListener('mouseleave', this.handleMouseLeave);
    },
    computed: {
        mousePX() {
            return this.parallaxData.mouseX / this.parallaxData.width;
        },
        mousePY() {
            return this.parallaxData.mouseY / this.parallaxData.height;
        },
        cardStyle() {
            let rX = this.mousePX * this.parallaxData.radio;
            let rY = this.mousePY * -this.parallaxData.radio;
            return {
                transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
            };
        },
        cardLive2dTransform() {
            let tX = -this.mousePX * -(this.parallaxData.radio);
            let tY = this.mousePY * -(this.parallaxData.radio - 5);
            return {
                transform: `translateX(${tX}px) translateY(${tY}px)`
            }
        },
        cardBtnTransform() {
            let tX = -this.mousePX * -(this.parallaxData.radio + 10);
            let tY = this.mousePY * -(this.parallaxData.radio + 10);
            return {
                transform: `translateX(${-tX}px) translateY(${-tY}px)`
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import url("../assets/styles/miku-input.scss");
$pink: #ff44a3;
.window {
  position: relative;
  width: 1000px;
  height: 535px;
  box-shadow: 0 35px 120px -15px rgba($color: #000000, $alpha: 0.3);
  border-radius: 8px;
  overflow: hidden;
  background-image: url("../assets/images/bg5.png");
  .left {
    #live2d {
      position: absolute;
      top: 35px;
      cursor: pointer;
    }
    .live2dLoad-enter,
    .live2dLoad-leave-to {
      opacity: 0;
    }
    .live2dLoad-enter-active,
    .live2dLoad-leave-active {
      transition: 2s ease opacity;
    }
    .live2dLoad-enter-to,
    .live2dLoad-leave {
      opacity: 1;
    }
    .text {
      z-index: 1;
      position: absolute;
      bottom: 0;
      width: 448px;
      height: 140px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      line-height: 1.5;
      letter-spacing: 2px;
      font-size: 18px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      background-image: linear-gradient(135deg, #ffffff 0%, #9fc4ff 100%);
      box-shadow: 0px -14px 30px -10px rgba($color: #000000, $alpha: 0.2);
      overflow-y: auto;
    }
  }
  .right {
    position: absolute;
    right: 0;
    width: 552px;
    height: 500px;
    box-sizing: border-box;
  }
  .live2d-btn {
    position: absolute;
    height: 100%;
    top: 0;
    left: 20px;
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .btn {
      width: 50px;
      height: 50px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.2s ease;
      box-shadow: 1px 5px 20px 0px rgba($color: $pink, $alpha: .52);
      fill: #fff;
      background-color: $pink;
      &:hover {
        transform: scale(1.1) rotate(15deg);
      }
      &:active {
        transform: scale(0.85);
        box-shadow: none;
      }
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.miao{
  position: absolute;
  left: 120px;
  top: 0;
  width: calc(100% - 120px);
  padding: 0 30px;
  box-sizing: border-box;
}
.router-link-active{
    .btn{
        background-color: rgb(70, 70, 243) !important;
        box-shadow: 1px 5px 20px 0px rgba(70, 70, 243, 0.52) !important;
    }
}
</style>
