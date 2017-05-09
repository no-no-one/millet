<!-- 购物车页面 -->
<template lang="html">
  <div id="cart"> 
    <div class="cart_head">
      <ul>
        <li><router-link to="/"><</router-link></li>
        <li><span>购物车</span></li>
        <li> 
          <router-link to="cartserch">
            <img src="../assets/serch.png">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="cart_mian">
      <div class="cart_go">
        <router-link to="/">
            <img src="../assets/shop.png">
            <span>购物车还是空的</span>
            <span>去逛逛</span>
        </router-link>
      </div>
      <div class="cart_img">
        <p>为你推荐</p>
        <router-link to="/" v-for="x in itemData">
          <img :src="x.image_url">
          <p>
            <span>{{x.name}}</span>
            <span>￥{{x.price}}</span>
          </p>
        </router-link>
      </div>
    </div>
    <!-- 增加购物车后的页面 -->
    <div class="cart_shop_main">
      <div class="cart_shop">
        <router-link to="/">
          <ul>
            <li>
              <img src="../assets/car_check.png">
            </li>
            <li>
              <img src="../assets/pone.jpg">
            </li>
            <li>
              <p>红米4X全网通版2GB内存 香槟 16GB</p>
              <p>售价:2599元</p>
              <p>
                <span class="input-sub">-</span>
                <span class="input-num">1</span>
                <span class="input-add">+</span>
              </p>
            </li>
            <img src="../assets/dele.gif">
          </ul>
        </router-link>
        <p>
            温馨提示：产品是否购买成功,以最准下单为准,请尽快结算
        </p>
      </div>
      <div class="cart_footer">
        <div class="cart_total">
          <p>共3件 金额：</p>
          <p>
            <span>5097.00</span>
            <span>元</span>
          </p>
        </div>
        <div class="cart_goon">
          <router-link to="/">继续购物</router-link>
        </div>
        <div class="cart_acount">
          <router-link to="/">去结算</router-link>
        </div>
      </div>
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
      itemData:[]
    }
  },
  mounted(){
    //请求页面数据
    this.$http.get("../../static/cart.json")
    .then(function(response){
      this.itemData =response.body.data.recom_list
    })
  }
}
</script>
<style>
/*物品没有增加之前的css样式*/
li{
  list-style: none;
}
#cart{
  width: 100%;
  padding-bottom: 6rem;
}
.cart_head{
  width: 100%;
  height: 4.375rem;
  background: #F2F2F2;
}
.cart_head ul{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content:space-between;
   padding: 0 1.2rem;
   box-sizing:border-box;
}
.cart_head ul li{
   height: 100%;
}
.cart_head ul li:first-child a{
  font-size: 2.8rem;
  display: inline-block;
  text-align: center;
    line-height: 4.375rem;
    color:#A1A1A1;
}
.cart_head ul li:last-child a{
   display: inline-block;
   height: 100%;
}
.cart_head ul li:nth-child(2) {
    font-size: 2rem;
    text-align: center;
    line-height: 4.375rem;
}
.cart_head ul li a img{
  width: 2rem;
  height: 2rem;
  margin-top: 1.2rem;

}
.cart_main{
   width: 100%;
}
.cart_go{
  width: 100%;
  background: #EBEBEB;
  height: 5.4156rem;
}
.cart_go a{
   width: 100%;
   height: 100%;
   box-sizing:border-box;
   padding:1rem 2rem;
   display: flex;
   justify-content:center;
   align-items: center;
}
.cart_go a img {
  width: 3.8rem;
}
.cart_go a span{
   margin-left: 1rem;
   display: flex;
   align-items: center;
   color: rgba(0,0,0,.27);
}
.cart_go a span:last-child{
   height: 2.4rem;
   padding: .1rem 1.25rem;
   border: 1px solid rgba(0,0,0,.15);
   box-sizing:border-box;
   color: black;
}
.cart_img>p{
  width: 100%;
  padding-left:1rem;
  box-sizing:border-box;
  height: 4.165rem;
  line-height: 4.165rem;
  font-size: 1.6rem;
}
.cart_img>a{
  width:49%;
  height:24.8172rem;
  display: inline-block;

}
.cart_img>a:nth-child(odd){
   margin-left: 2%;
}
.cart_img>a img{
  width: 100%;
  height: 18.5422rem;
}
.cart_img>a p{
  width:100%;
  height: 6.275rem;
  padding: .9375rem 1.4063rem;
  display: flex;
  flex-direction:column;
  box-sizing:border-box;
}
.cart_img>a p span:first-child{
  color: black;
  font-size: 1.6rem;
}
.cart_img>a p span:last-child{
  color: red;
  font-size: 1.6rem;
}
/*物品增加之后的css样式*/
.cart_shop_main{
   width: 100%;
}
.cart_shop{
   width: 100%;

}
.cart_shop a{
   width: 100%;
   height: 11.8rem;
   display: inline-block;
   border-bottom: 1px solid #f4f4f4;
   
}
.cart_shop a ul{
   width: 100%;
   height: 9.375rem;
   padding: 1.25rem 0;
   position: relative;
   display: flex;
   justify-content:center;
   algin-items:center;
}
.cart_shop a ul li:nth-child(1){
   width: 8.3%;
   padding: 0 1.04rem;
   display: flex;
   justify-content:center;
   align-items:center;
}
.cart_shop a ul li:nth-child(1) img{
   width: 80%;
}
.cart_shop a ul li:nth-child(2){
   width:25%;
   height: 9.375rem;
   margin:0 1% 0 1%;  
}
.cart_shop a ul li:nth-child(2) img{
   width: 100%;
   height: 100%;
}
.cart_shop a ul li:nth-child(3){
   width: 64.7%;
   display: flex;
   flex-direction:column;
   justify-content:center;
}
.cart_shop a ul li:nth-child(3) p{
   margin-bottom: .63rem;
   color: #939090;
}
.cart_shop a ul li:nth-child(3) p:nth-child(1){
   font-size: 1.4rem;
   color: black;
}
.cart_shop a ul li:nth-child(3) p:nth-child(3){
   width: 9.3rem;
   height: 3.1rem;
   border: 1px solid #eee;
   display: flex;
}
.cart_shop a ul li:nth-child(3) p:nth-child(3) span{
    width: 3.125rem;
   height: 3.125rem;
   display: inline-block;
   color: black;
   font-size: 2rem;
   text-align: center;
   line-height: 3.125rem;
}
.cart_shop a ul li:nth-child(3) p:nth-child(3) .input-sub{
   background: #fafafa;
   color: #ddd;
   font-size: 5rem;
}
.cart_shop a ul li:nth-child(3) p:nth-child(3) .input-add{
   background: #f4f4f4;
   color: #999;
   font-size: 3rem;
}
.cart_shop>a ul>img{
   width: 2rem;
   height: 2rem;
   position: absolute;
   right: 2.5rem;
   bottom: 3rem;
}
.cart_shop>p{
   width: 100%;
   height: 3.68rem;
   text-align: center;
   line-height: 3.68rem;
   color: #999;
}
.cart_footer{
   width: 100%;
   height:4.8rem;
   border-top: 1px solid #f4f4f4;
   display: flex;
   justify-content:center;
   position: fixed;
   bottom: 0;
   left: 0;
   z-index: 2;
   background: white;
}
.cart_footer>div{
   width: 33.33%;
   height: 100%;
}
.cart_total p{
   text-align: center;
}
.cart_total p:nth-child(1){
   height: 40%;
   text-align: center;
   line-height: 3.3rem;
   color: #999;
}
.cart_total p:nth-child(2){
   height: 60%;
   text-align: center;
   line-height:3rem;
   color: #999;
}
.cart_total p:nth-child(2) span:first-child{
   font-size: 2rem;
   color: red;
}
.cart_goon a{
   height: 100%;
   width: 100%;
   text-align: center;
   line-height:4.8rem;
   background: #F4F4F4;
   display: inline-block;
   font-size: 1.6rem;
   color: black;
}
.cart_acount a{
   width: 100%;
   height: 100%;
   color: white;
   background:#FF5722;
   text-align: center;
   line-height: 4.8rem;
   display: inline-block;
   font-size: 1.6rem;
}
</style>