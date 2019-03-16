<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="/hello">Hello</router-link>-->
    <!--<router-link to="/practice">Practice</router-link>-->
    <Barrage v-bind:datalist="datalist" v-bind:bind_data="bind_data"></Barrage>
    <!--<input v-model="bind_data" ref="input1" >-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import Barrage from "./components/Barrage";
  import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    Barrage,
    HelloWorld
  },
  data() {
    return {
      bind_data: '123',
      datalist: ["数据一", "数据二", "数据三"]
    };
  },
  mounted() {
    this.$nextTick(function () {
      console.log("refs", this.$refs);
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
