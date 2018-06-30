<template>
    <div id="app">
        <Window/>
    </div>
</template>

<script>
import Window from "./components/Window.vue";

export default {
    name: "app",
    components: {
        Window,
    },
    methods: {
        showtpwidget(){
            (function (T, h, i, n, k, P, a, g, e) {
                g = function () {
                    P = h.createElement(i);
                    a = h.getElementsByTagName(i)[0];
                    P.src = k;
                    P.charset = "utf-8";
                    P.async = 1;
                    a.parentNode.insertBefore(P, a)
                };
                T["ThinkPageWeatherWidgetObject"] = n;
                T[n] || (T[n] = function () {
                    (T[n].q = T[n].q || []).push(arguments)
                });
                T[n].l = +new Date();
                if (T.attachEvent) {
                    T.attachEvent("onload", g)
                } else {
                    T.addEventListener("load", g, false)
                }
            }(window, document, "script", "tpwidget", "//widget.seniverse.com/widget/chameleon.js"));
            tpwidget("init", {
                "flavor": "bubble",
                "location": "WK3N92NQV6RQ",
                "geolocation": "enabled",
                "position": "top-left",
                "margin": "10px 10px",
                "language": "auto",
                "unit": "c",
                "theme": "chameleon",
                "uid": "U5C7722107",
                "hash": "3d476b17f8c2c3496c45bd3beecefa15"
            });
            tpwidget("show");
        }
    },
    mounted() {
        this.showtpwidget();
    }
};
</script>

<style lang="scss">
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("./assets/images/bg7.jpg");
    background-color: #f4f4f4;
}
</style>
