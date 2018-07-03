<template>
    <div id="app">
        <Window/>
    </div>
</template>

<script>
import Window from './components/Window.vue';

export default {
    name: 'app',
    components: {
        Window,
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
