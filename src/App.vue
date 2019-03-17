<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="/hello">Hello</router-link>-->
    <!--<router-link to="/practice">Practice</router-link>-->
    <Barrage v-bind:datalist="datalist"></Barrage>
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
      datalist: [],//接收的后台数据
      index: 1//后台分页页码
    };
  },
  methods: {
    /**
     * 后台弹幕数据拉取函数
     */
    regularGetBarrage: function () {
      let that = this;
      $.ajax({
        url: "http://localhost:8080/barrage/getData?index=" + that.index,
        type: "get",
        dataType: "json",
        complete: function (ev) {
          if (ev.status == 200) {
            // console.log("regular", ev.responseText);
            let data = JSON.parse(ev.responseText);
            that.datalist = that.datalist.concat(data["resultData"]["barrageInfoPage"]["content"]);
            console.log("regular", that.datalist);
            that.index++;
            // console.log(data["resultData"]["barrageInfoPage"]["content"]);
          } else {
            console.log("error", ev.responseText);
          }
        }
      });
    },
  },

  mounted() {
    let _that = this;
    this.$nextTick(function () {
      console.log("refs", this.$refs);
    });
    let timer = setInterval(function (args) {
      if (_that.datalist.length <= 0) {
        // console.log("barrageData:", _that.barrageData_2);
        _that.regularGetBarrage();
        return;
      }
    }, 3000);
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
  width: 100%;
  height: 100%;
  background: url("assets/bg-2.jpg") no-repeat;
  background-size: cover;
}
</style>
