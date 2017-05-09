<!-- 搜索结果页面 -->
<template lang="html">
  <div id="phonelist"> 
    <div class="phonelist_head">
      <ul>
        <li><router-link to="/cartserch"><</router-link></li>
        <li><span>"{{$route.params.isLogin}}"</span></li>
        <li> <router-link to="/cartserch"><img src="../assets/serch.png"></router-link></li>
      </ul>
    </div>
    <div class="phonelist_main">
        <router-link to="/" v-for="x in phonelistData">
          <div class="pl_main_left">
            <img :src="x.image_url">
          </div>
          <div class="pl_main_right">
             <p>{{x.product_name}}</p>
             <p>{{x.product_desc}}</p>
             <p>￥{{x.market_price_min}}</p>
          </div>
        </router-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource)
export default{
  data(){
    return {
      phonelistData:[]
    }
  },
  mounted(){
    //在这里可以接到这个参数，所以可以console出来看到
    // console.log(this.$route.params.isLogin)
    if(this.$route.params.isLogin=="小米6"){
        this.$http.get("../../static/phonelist-one.json")
        .then(function(response){
        this.phonelistData =response.body.data.product
        })
    }else if(this.$route.params.isLogin=="红米Note 4x") {
        this.$http.get("../../static/phonelist-two.json")
        .then(function(response){
        this.phonelistData =response.body.data.product
        })
    }else if(this.$route.params.isLogin=="小米MIX") {
        this.$http.get("../../static/phonelist-three.json")
        .then(function(response){
        this.phonelistData =response.body.data.product
        })
    }else if(this.$route.params.isLogin=="空气净化器") {
        this.$http.get("../../static/phonelist-four.json")
        .then(function(response){
        this.phonelistData =response.body.data.product
        })
    }   
  }
}
</script>
<style>
/*搜素结果的css样式*/
#phonelist{
  width: 100%;
  padding-bottom: 6rem;
}
.phonelist_head{
  width: 100%;
  height: 4.375rem;
  background: #F2F2F2;
}
.phonelist_head ul{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content:space-between;
   padding: 0 1.2rem;
   box-sizing:border-box;
}
.phonelist_head ul li{
   height: 100%;
}
.phonelist_head ul li:first-child a{
  font-size: 2.8rem;
  display: inline-block;
  text-align: center;
    line-height: 4.375rem;
    color:#A1A1A1;
}
.phonelist_head ul li:last-child a{
   display: inline-block;
   height: 100%;
}
.phonelist_head ul li:nth-child(2) {
    font-size: 2rem;
    text-align: center;
    line-height: 4.375rem;
}
.phonelist_head ul li a img{
  width: 2rem;
  height: 2rem;
  margin-top: 1.2rem;

}
.phonelist_main{
  width: 100%;
  background: #f5f5f5;
}
.phonelist_main a{
  width: 100%;
  height: 15.62rem;
  display: flex;
  margin-bottom: .3rem;
  background: white;
}
.phonelist_main a .pl_main_left{
  width: 41.7%;
  height: 15.62rem;
}
.phonelist_main a .pl_main_left img{
  width: 100%;
  height: 100%;
}
.phonelist_main a .pl_main_right{
  width: 58.3%;
  height: 15.62rem;
  display: flex;
  flex-direction:column;
  justify-content:center;
  color: black;
  box-sizing:border-box;
  padding-left: 2rem;

}
.phonelist_main a .pl_main_right p:nth-child(2){
  color: rgba(0,0,0,.54);
  font-size: 1.4rem;
  width: 14.2rem;
  overflow: hidden;
  height: 3.2rem;
}
.phonelist_main a .pl_main_right p:nth-child(3){
  color: red;
}
.phonelist_main a .pl_main_right p{
  margin-bottom: 1rem;
  width: 18.5rem;
  font-size: 1.6rem;
  width: 13rem;
}
</style>