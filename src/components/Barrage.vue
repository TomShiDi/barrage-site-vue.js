<template>
  <div class="barrage-box">
    <div class="barrage-content" ref="barrage-content">
      <div class="barrage-road">
        <!--<span class="barrage" v-bind:class="{barrage_active:isActive}" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft">Hello World</span>-->
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" >
          <span class="barrage" v-for="barrage in barrageRoad0" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>

      </div>
      <div class="barrage-road">
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <span class="barrage" v-for="barrage in barrageRoad1" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>
      </div>
      <div class="barrage-road">
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <span class="barrage" v-for="barrage in barrageRoad2" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>
      </div>
      <div class="barrage-road">
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <span class="barrage" v-for="barrage in barrageRoad3" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>
      </div>
      <div class="barrage-road">
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <span class="barrage" v-for="barrage in barrageRoad4" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>
      </div>
      <div class="barrage-road">
        <transition-group name="barrage" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <span class="barrage" v-for="barrage in barrageRoad5" v-bind:key="barrage.barrageId" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeft" v-on:click="mouseClicked($event)">
            {{barrage.content}}
            <img src="/static/icon/star.png" class="star-img" alt="">
            <span class="star-num-text">{{barrage.starNum}}</span>
            <span style="display: none">{{barrage.barrageId}}</span>
            <span style="display: none">{{barrage.speed}}</span>
            <span style="display: none">{{barrage.color}}</span>
            <span style="display: none">{{barrage.textSize}}</span>
          </span>
        </transition-group>
      </div>
      <div class="barrage-road">

      </div>
    </div>

    <div class="barrage-settings">
      <!--<input class="text-size" type="range" max="100" min="0">-->
      <input class="text-preview" type="button" value="Hello World">
      <div class="range-slider">
        <div class="range-slider-fill"></div>
        <div class="range-slider-handle"></div>
      </div>
      <div style="margin-left: 5px">
        <input type="radio" name="colorSelected" value="black">
        <span style="color: black">黑色</span>
      </div>
      <div style="margin-left: 5px">
        <input type="radio" name="colorSelected" value="red">
        <span style="color: red">红色</span>
      </div>
      <div style="margin-left: 5px">
        <input type="radio" name="colorSelected" value="green">
        <span style="color: green">绿色</span>
      </div>
      <div style="margin-left: 5px">
        <input type="radio" name="colorSelected" value="white" checked="checked">
        <span style="color: white">白色</span>
      </div>
      <div style="margin-left: 10px">
        <select class="speed-selector">
          <option value="12" name="speedNum">请选择车速</option>
          <option value="12" name="speedNum">8</option>
          <option value="11" name="speedNum">7</option>
          <option value="10" name="speedNum">6</option>
          <option value="9" name="speedNum">5</option>
          <option value="8" name="speedNum">4</option>
          <option value="7" name="speedNum">3</option>
          <option value="6" name="speedNum">2</option>
          <option value="5" name="speedNum">1</option>
        </select>
      </div>

    </div>
    <div class="comment-box">
      <input class="comment-input" type="text" placeholder="请输入待发送内容">
    </div>
    <div class="button-area">
      <button class="send-button" v-on:click="addBarrageData" ref="controlButton">发送弹幕</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Practice",
    props: ['datalist','actionUrl'],
    data() {
      return {
        inputValue: '',
        isActive: false,
        barrageRoad: null,

        rangeValue: 20,//字体大小 预设值

        sliderHandle: null,//字体调节滑块
        slider: null,
        sliderRect: null,
        sliderFill: null,//滑过区域
        textPreview: null,//预览字体区

        content: null,//弹幕输入框
        speedNum: null,//弹幕速度
        color: null,//弹幕颜色选择器
        colorSelected: "white",//被选择颜色 预设值

        transitionEvent: "",//判断浏览器内核类型

        index: 1,//数据库弹幕表分页页码

        deviceType: "",

        I: 0,//右键弹幕的id
        // barrageData_2: [
        //   {
        //     "barrageId": 1,
        //     "content": "第二条弹幕.............",
        //     "color": "red",
        //     "speed": 16,
        //     "textSize": 20,
        //     "road": 0,
        //     "starNum": 0
        //   }
        // ],
        barrageData_2: [],
        barrageRoad0: [],
        barrageRoad1: [],
        barrageRoad2: [],
        barrageRoad3: [],
        barrageRoad4: [],
        barrageRoad5: [],
        _actionUrl: ""

      };
    },
    methods: {
      /**
       * 弹幕点击事件
       * @param event
       */
      mouseClicked: function (event) {
        let barrage = event.target;
        console.log("mouseClicked", barrage.childNodes);

        barrage.classList.add("barrage-clicked");
        barrage.childNodes[1].setAttribute("src", "/static/icon/star-active.png");
        barrage.childNodes[3].innerHTML = parseInt(barrage.childNodes[3].innerHTML) + 1;

        // this.star(barrage);//用户自定义
      },

      /**
       * 鼠标进入单条弹幕区域事件函数
       */
      mouseEnter: function (event) {
        // console.log("mouseEnter", event);
        let barrage = event.target;
        let computeStyle = window.getComputedStyle(barrage), left = computeStyle.getPropertyValue("left");

        barrage.style.left = left;
        Velocity(barrage, "stop");
      },
      /**
       * 鼠标离开单条弹幕区域事件函数
       */
      mouseLeft: function (event,done) {
        let barrage = event.target;
        // console.log("mouseLeft", barrage.childNodes);

        Velocity(barrage,{
            left: "-60%"
        },
          {
            duration: parseInt(barrage.childNodes[7].innerHTML) * 1000,
            complete:function () {
              // done();
            }
          })
      },

      sendBarrage: function (barrageId, content, colorSelected, speedNum, rangeValue, roadNum) {
        // var randomRoadNum = Math.floor(Math.random() * barrageRoad.length);
        let that = this;

        if (content === "") {
          return;
        }


      },

      /**
       * 发送弹幕按钮点击事件响应函数
       */
      addBarrageData: function () {
        let item = {
          "barrageId":0,
          "content": "",
          "color": "red",
          "speed": 16,
          "textSize": 20,
          "road": 0,
          "starNum": 0
        };
        let content_1 = this.content.value;
        item["speed"] = this.speedNum.value;
        item["textSize"] = this.rangeValue;
        item["road"] = Math.floor(Math.random() * this.barrageRoad.length);

        // content_1 = content_1.replace(/<.*?>.*?<\/.*?>/g, '[非法字段]');
        // content_1 = content_1.replace(/<img/g, '[非法字段]');
        // content_1 = content_1.replace(/<script/g, '[非法字段]');
        content_1 = this.contentFilter();
        item["content"] = content_1;
        // console.log("content: ", content_1);

        for (let i = 0; i < this.color.length; i++) {
          if (this.color[i].checked) {
            item["color"] = this.color[i].value;
            break;
          }
        }
        console.log("添加事件触发");
        this.barrageData_2.push(item);
        // console.log("barrageData :", this.barrageData_2.length);
        // content.value = "";
        this.saveBarrage();
      },

      /**
       * 举报弹幕响应函数
       * @param id
       */
      report: function () {
        let that = this;
        $.messager.show({
          title: "提示消息",
          msg: "举报成功:" + that.I,
          timeout: 5000
        });
      },

      /**
       * 发送的弹幕发送至服务器
       */
      saveBarrage: function () {
        let that = this;
        $.ajax({
          url: "http://localhost:8080/barrage/save",
          type: "post",
          dataType: "text",
          data: {
            "barrageSenderId": 1,
            "content": that.contentFilter(),
            "speed": that.speedNum.value,
            "color": function () {
              for (let i = 0; i < that.color.length; i++) {
                if (that.color[i].checked) {
                  return that.color[i].value;
                }
              }
            },
            "textSize": that.rangeValue,
            "road": Math.floor(Math.random() * that.barrageRoad.length)
          },
          complete: function (ev) {
            // console.log(ev);
            that.content.value = "";
            if (ev.status == 200) {
              // console.log(ev.responseText);
            } else {
              console.log("error", ev.responseText);
            }
          }
        });
      },



      /**
       * 弹幕点赞处理函数
       * @param option
       */
      star: function (option) {
        console.log("star", option.childNodes);
        let barrageId = option.childNodes[5].innerHTML;
        // console.log("star", option.childNodes);
        $.ajax({
          type: "get",
          dataType: "json",
          url: "http://localhost:8080/barrage/star?barrageId=" + barrageId,
          complete: function (ev) {
            if (ev.status == 200) {

              // console.log(ev.responseText);
            }else {
              console.log("star failed", ev.responseText);
            }
          }
        });
      },

      /**
       * 浏览器内核判断函数
       * @returns {*}
       */
      whichTransitionEvent() {
        let t;
        let el = document.createElement('fakeelement');
        let transitions = {
          'transition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'MozTransition': 'transitionend',
          'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t];
          }
        }
      },

      /**
       * 输入内容过滤
       */
      contentFilter: function () {
        let content_1 = this.content.value;
        content_1 = content_1.replace(/<.*?>.*?<\/.*?>/g, '[非法字段]');
        content_1 = content_1.replace(/<img/g, '[非法字段]');
        content_1 = content_1.replace(/<script/g, '[非法字段]');

        return content_1;
      },

      /**
       *判断是否为移动端
       */
      goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          /*window.location.href="你的手机版地址";*/
          // deviceType = "mobile";
          return "mobile";
        } else {
          /*window.location.href="你的电脑版地址";    */
          // deviceType = "pc";
          return "pc";
        }
      },

      beforeEnter:function (el) {
        // console.log(el.childNodes);
        el.style.left = "100%";
        el.style.color = el.childNodes[9].innerHTML;
        el.style.fontSize = el.childNodes[11].innerHTML + "px";
      },
      enter: function (el,done) {
        // console.log("childNodes", el.childNodes[9].innerHTML, el.childNodes[11].innerHTML);

        Velocity(el,
          {left: "-60%"},
          {
            duration: parseInt(el.childNodes[7].innerHTML) * 1000,
            // color: el.childNodes[9].innerHTML,
            // fontSize: el.childNodes[11].innerHTML + "em",
            complete: function () {
              // console.log("enter", el.parentNode);
              done();
            },
          }
        );
      },
      afterEnter:function (el,done) {
        // console.log("afterEnter", el.parentNode);
        el.parentNode.removeChild(el);
        // done();
      }

    },
    watch: {
      datalist: {
        handler(newData, oldData) {
          // console.log("newData", newData);
          this.barrageData_2 = this.barrageData_2.concat(newData);
        },
        immediate: true
      },
      actionUrl:{
        handler(newData, oldData) {
          this._actionUrl = newData;
        }
      }
    },

    mounted() {
      let _that = this;

      this.barrageRoad = document.getElementsByClassName("barrage-road");


      this.rangeValue = 20;//字体大小 预设值

      this.sliderHandle = document.getElementsByClassName("range-slider-handle")[0];//字体调节滑块
      this.slider = document.getElementsByClassName("range-slider")[0];
      this.sliderRect = this.slider.getBoundingClientRect();
      console.log("rect", this.sliderRect);
      this.sliderFill = document.getElementsByClassName("range-slider-fill")[0];//滑过区域
      this.textPreview = document.getElementsByClassName("text-preview")[0];//预览字体区

      this.content = document.getElementsByClassName("comment-input")[0];//弹幕输入框
      this.speedNum = document.getElementsByClassName("speed-selector")[0];//弹幕速度
      this.color = document.getElementsByName("colorSelected");//弹幕颜色选择器
      this.colorSelected = "white";//被选择颜色 预设值

      this.transitionEvent = this.whichTransitionEvent()//判断浏览器内核类型

      this.index = 1;//数据库弹幕表分页页码

      this.deviceType = this.goPAGE();

      this.I = 0;//右键弹幕的id
      this.sliderHandle.style.left = "0px";

      setTimeout(function () {
        _that.isActive = true;
      }, 50);


      /**
       * 全局点击事件重写
       * @param e
       */
      document.onclick = function (e) {
        // let ul = document.getElementsByClassName("right-menu-ul")[0];
        //
        // ul.style.display = "none";
      };

      /**
       * 滑块鼠标按下事件函数
       * @param event
       */
      if (this.deviceType === "pc") {
        this.sliderHandle.onmousedown = function (event) {
          let that = this;
          console.log("onmousedown", this);
          let oldX = event.clientX;
          let left = parseInt(that.style.left);


          // console.log("mousedown  ", sliderHandle);
          document.onmousemove = function (ev) {
            let x = ev.clientX - oldX;

            that.style.left = left + x + "px";

            _that.rangeValue = Math.ceil((parseInt(that.style.left) / _that.sliderRect.width) * 40) + 1;


            if (parseInt(that.style.left) < 0) {
              that.style.left = "0";
              _that.rangeValue = 10;
            }
            if (parseInt(that.style.left) > _that.sliderRect.width) {
              that.style.left = _that.sliderRect.width - 10 + "px";
              _that.rangeValue = 50;
            }
            _that.sliderFill.style.width = that.style.left;
            _that.textPreview.style.fontSize = _that.rangeValue + "px";
            // console.log("rangeValue: ", _that.rangeValue);
          };


          document.onmouseup = function (ev) {
            document.onmouseup = null;
            document.onmousemove = null;
          }
        };
      } else {
        this.sliderHandle.ontouchstart = function (event) {
          let that = this;
          let oldX = event.clientX;
          let left = parseInt(that.style.left);

          document.ontouchmove = function (ev) {
            let x = ev.clientX - oldX;

            that.style.left = left + x + "px";

            console.log("left", that.style.left);

            _that.rangeValue = Math.ceil((parseInt(that.style.left) / _that.sliderRect.width) * 40) + 1;


            if (parseInt(that.style.left) < 0) {
              that.style.left = "0";
              _that.rangeValue = 10;
            }
            if (parseInt(that.style.left) > _that.sliderRect.width) {
              that.style.left = _that.sliderRect.width - 10 + "px";
              _that.rangeValue = 50;
            }
            _that.sliderFill.style.width = that.style.left;
            _that.textPreview.style.fontSize = _that.rangeValue + "px";
            console.log("rangeValue: ", _that.rangeValue);
          };


          document.ontouchend = function (ev) {
            document.ontouchend = null;
            document.ontouchmove = null;
          }
        };
      }//end of sliderHandle


      let timer = setInterval(function (args) {
        if (_that.barrageData_2.length <= 0) {
          // console.log("barrageData:", _that.barrageData_2);
          // _that.regularGetBarrage();
          return;
        }
        // _that.sendBarrage(_that.barrageData_2[0]["barrageId"],
        //   _that.barrageData_2[0]["content"],
        //   _that.barrageData_2[0]["color"],
        //   _that.barrageData_2[0]["speed"],
        //   _that.barrageData_2[0]["textSize"],
        //   _that.barrageData_2[0]["road"]);
        // console.log("road", _that.barrageData_2[0]["road"]);
        switch (_that.barrageData_2[0]["road"]) {
          case 0:
            _that.barrageRoad0.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1); break;
          case 1:
            _that.barrageRoad1.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1); break;
          case 2:
            _that.barrageRoad2.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1);break;
          case 3:
            _that.barrageRoad3.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1);break;
          case 4:
            _that.barrageRoad4.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1);break;
          case 5:
            _that.barrageRoad5.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1);break;
          default:
            _that.barrageRoad5.push(_that.barrageData_2[0]);_that.barrageData_2.splice(0, 1);break;
        }
        // console.log("data-num", _that.barrageData_2.length);
        // _that.barrageRoad0.push(_that.barrageData_2[0]);
        // _that.barrageData_2.splice(0, 1);
      }, 2000);

    }
  }
</script>

<style scoped>
  /*img{*/
  /*width: calc(80vw);*/
  /*height: calc(80vh);*/
  /*}*/
  .barrage-settings {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(198, 198, 198, 0.73);
    width: 70%;
    height: 8%;
    margin-top: 10px;
  }

  .range-slider {
    position: relative;
    width: 20%;
    height: 18%;
    padding: 0px 0px 0 0px;
    border-radius: 10px;
    background-color: #b7b7b7;
  }

  .range-slider-fill {
    background-color: #00e100;
    position: absolute;
    top: 0;
    height: 100%;
    border-radius: 10px;
  }

  .range-slider-handle {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: -10px;
    width: 40px;
    height: 40px;
    background: white url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');
    background-size: 100%;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(100%, rgba(0, 0, 0, 0.1)));
    background-image: -moz-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
    background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
  }

  .range-slider-handle:after {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0, 0, 0, 0.13)), color-stop(100%, rgba(255, 255, 255, 0)));
    background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.13), rgba(255, 255, 255, 0));
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.13), rgba(255, 255, 255, 0));
    background-image: linear-gradient(rgba(0, 0, 0, 0.13), rgba(255, 255, 255, 0));
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }

  .text-preview {
    outline: none;
    width: 15%;
    height: auto;
    margin-right: 20px;
    border: none;
    font-family: "Arial", serif;
  }

  .speed-selector {
    border: none;
    border-radius: 10%;
    background-color: rgba(255, 255, 255, 0.62);
    text-align: center;
  }

  .options {
    text-align: center;
  }

  .barrage-box {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    /*align-items: center;*/
    justify-content: center;
    margin-left: 70px;
    width: calc(100vw);
    height: calc(100vh);
  }

  .barrage-content {
    background-color: rgba(146, 251, 47, 0.11);
    margin-top: 50px;
    width: 90%;
    height: 70%;
    box-shadow: 2px 2px 5px #959595;
  }

  .comment-box {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(247, 247, 247, 0);
    margin-top: 40px;
    width: 60%;
    height: 10%;
    /*box-shadow: 2px 2px 5px #959595;*/
  }

  .comment-input {
    background-color: rgba(149, 149, 149, 0.27);
    border: none;
    width: 70%;
    height: 40%;
    border-radius: 50px;
    font-size: medium;
    padding-left: 10px;
    -webkit-user-select: none;
    outline: none;
  }

  .button-area {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(247, 247, 247, 0);
    margin-top: 40px;
    margin-left: 50px;
    width: 15%;
    height: 10%;
    /*box-shadow: 2px 2px 5px #959595;*/
  }

  .send-button {
    background-color: rgba(149, 149, 149, 0.36);
    border: none;
    width: 50%;
    height: 40%;
    outline: none;
    border-radius: 30px;
  }

  .barrage-road {
    display: -webkit-flex;
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
    /*justify-content: center;*/
    background-color: rgba(0, 225, 0, 0);
    width: 100%;
    height: 8%;
    margin-top: 5px;
  }


  .barrage {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    background-color: rgba(247, 247, 247, 0.1);
    width: 50%;
    height: 50%;
    left: 100%;
    border-radius: 50px;
    text-align: center;
    font-size: 20px;
    /*vertical-align: middle;*/
    border: 5px #e13b41;
    /*box-shadow: 2px 2px 5px rgba(247, 247, 247, 0.51);*/
    /*transition: left 8s linear .2s;*/
    /*-webkit-transition: left 8s linear .2s;*/
  }

  .barrage_active {
    left: -60% !important;
  }

  .barrage:hover {
    background-image: -webkit-linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
    background-image: -moz-linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
    background-image: linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
  }

  .barrage-clicked {
    background-image: -webkit-linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
    background-image: -moz-linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
    background-image: linear-gradient(-90deg, #92fb2f, rgba(146, 251, 47, 0.22));
  }

  /*.barrage-enter-active{*/
    /*transition: left 8s linear .2s;*/
  /*}*/
  /*.barrage-enter {*/
    /*left: 100%;*/
  /*}*/
  /*.barrage-enter-to {*/
    /*left: -60%;*/
  /*}*/

  .star-img {
    width: 3%;
    height: 80%;
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    margin-left: 5%;
    /*margin-top: 1%;*/
  }

</style>
