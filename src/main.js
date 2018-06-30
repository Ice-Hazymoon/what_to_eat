/* eslint-disable */
import "normalize.css";
import "./assets/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import $storeJs from "store";
import VueTyperPlugin from "vue-typer";
import router from "./router";
import VePie from 'v-charts/lib/pie.common';
// import store from "./_store";
Vue.use(VueTyperPlugin);
Vue.component(VePie.name, VePie);
Vue.prototype.$http = axios;
Vue.prototype.$storejs = $storeJs;
Vue.config.productionTip = false;

if(document.body.clientWidth<800){
    alert('肥肠抱歉, 由于作者太懒, 请使用 PC 设备继续浏览')
}

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");
