<template lang="html">
	<div class="proDetail-view">
		<div >
	   <div class="fixed-header">
	   		<div class="left" >
	   			<a  href="javascript:history.go(-1)" class="home">	   				
	   				<img src="https://m.mi.com/component/header/img/back_48bef14.png" class="bgcicon2 ib">
	   			</a>
	   		</div>
	   		<div class="tit">
	   			
	   		</div>
	   		<div class="right">
	   			<a>
	   				<img src="https://m.mi.com/component/header/img/share_18c55d7.png" class="search ib">
	   			</a>
	   		</div>
	   		
	   	</div>
	   	<div class="proPic">	
	   		<img :src="pro.img_url" alt="">		        
		    
		    <div class="info detailInfo" >
				<div class="name detailName">{{pro.product_name}}</div>
				<div class="brief detailBrief">{{pro.product_brief}}</div>
				<div class="price detailPrice">{{pro.product_price}}</div>
			</div>
	   	</div>
	   	<div class="select">
	   		<p class="hasSelect">已选</p>
	   		<p class="type">小米金属鼠标垫 小号x1</p>
	   	</div>
	   	<div class="detailFooter">
	   		<ul>
		   		<li class="detailfooter_sy"><a href="" class='black'>首页</a></li>		       
			    <li class="detailfooter_gwc"><a href="" class='black' >购物车</a></li> 
			    <li class="detailfooter_addgwc"><a href="" class="white"  @click.prevent="showModel()">加入购物车</a></li> 
			    <li class="detailfooter_shop"><a href="" class="white">立刻购买</a></li> 

       		</ul>
	   	</div>
	   	</div>
	   	<div class="top-model" v-show="isBol">
	   		<div class="model_inner">
	   			<div class="specBuy flex-row bb">
	   				<div class="specTitle">购买数量
	   				</div>
	   				<div class="addNum">
	   					<div class="sub" @click="clickSubfun(pro)">

		   					<div class="input-sub off" >
		   						
		   					</div>
	   					</div>
	   					<div class="num input-num">{{showNum}}</div>
	   					<div class="add">
	   						<div class="input-add" @click="clickAddfun(pro)"></div>
	   					</div>
	   				</div>
	   			</div>
	   			<div class="sure" @click="showModel()">确定</div>
	   		</div>
	   	</div>
   </div>
</template>
<script>
import Vue from "vue"
	import VueResource from "vue-resource"
	import Swiper from "../../static/swiper/js/swiper.min.js"
	import Bus from "../../static/js/bus.js"
	Vue.use(VueResource)
	export default{
		data (){
			return {			 
			  proDetailData:[],
			  pro:Bus.todos,
			  isBol:false,
              showNum:1,
              shopmoney:0			 
			}
		},
		methods:{
			showModel:function(){
				this.isBol=!this.isBol;
			},
            clickAddfun:function(a){
                this.showNum+=1;
                Bus.$emit("addshop",a)
                console.log(Bus.cartData)
            },
            clickSubfun:function(b){
                this.showNum-=1;
                Bus.$emit("deleshop",b)
                console.log(Bus.cartData);
                console.log(this.showNum)
                if(this.showNum<1){
                    this.showNum=1
                }
            }
		},		
		mounted (){
		//请求数据
		this.$http.get("../../static/json/proView.json").then(function(res){
			this.proDetailData=res.data.data.sections[9].body.items;
					
			this.$nextTick(function(){
				//设置轮播图
			    var swiper2 = new Swiper('.swiper-container2', {					         
		          pagination: '.swiper2',
		          autoplay: 2000,    
			      slidesPerView: 1,
			      paginationClickable: true,
			      spaceBetween: 30,
			      loop: true        	       
	    	});
			})			
		});
		
	}		
	}
	
	

</script>
<style>
.proDetail-view .fixed-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: box;
    display: -webkit-box;
    height: 4rem;
    box-align: center;
    -webkit-box-align: center;
    padding: 0 1rem;
    background-color: rgba(255,255,255,0);
    z-index: 10;
}
.proDetail-view .fixed-header .left {
    position: absolute;
    top: 1rem;
    left: 1rem;
}
.proDetail-view .fixed-header .left a {
    display: block;
}
.proDetail-view .fixed-header .left .ib {
    width: 2rem;
    height: 2rem;
}
.proDetail-view .fixed-header .tit {
    -webkit-box-flex: 1;
    box-flex: 1;
    width: 100%;
}
.proDetail-view .fixed-header .right {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
.proDetail-view .fixed-header .right a {
    display: block;
}
.proDetail-view .fixed-header .right .ib {
    width: 2rem;
    height: 2rem;
}
/*商品详情*/
.proDetail-view .proPic{
    width: 100%;


}
.proDetail-view .proPic img{
    width: 100%;
    height: auto;
}
.proDetail-view .detailInfo{
    width: 100%;
    padding:1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #eee;
}
.proDetail-view .detailName{
    font-size: 2rem;
    height: 3rem;
    line-height: 3rem;
}
.proDetail-view .detailBrief{
    font-size: 1.5rem;
    height: 2rem;
    line-height: 2rem;
}
.proDetail-view .select{
    height: 5rem;
    padding:.5rem 1rem;
    border-bottom: .5rem solid #eee;
}
.proDetail-view .hasSelect{
    font-size: 1.5rem;
    color:#000;
    opacity: .5;
    height: 2rem;
    line-height: 2rem;
}
.proDetail-view .type{
    font-size: 1.5rem;
    color:#000;
}

.proDetail-view .detailFooter ul{
  width: 100%;
  display: flex;
  justify-content:space-around; 
}
.proDetail-view .detailFooter ul li{
  height: 4.5rem;
  list-style: none;
  font-size: 1.2rem;
  display: flex;
  align-items:center;
  justify-content:center;

}
.proDetail-view .detailFooter ul li .black{
  color:black;
}
.proDetail-view .detailFooter ul li .white{
  color:red;
  font-size: 2rem;
}
.proDetail-view .top-model{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    margin-bottom:5rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index:100;
}
.proDetail-view .model_inner{
    position: absolute;
    bottom:0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 5rem;
}
.proDetail-view .specBuy {
    height: 3rem;
    justify-content: space-between!important;
    -webkit-box-pack: justify!important;
    box-pack: justify!important;
    padding: 1.5rem 1rem;
}
.proDetail-view .specTitle {
    margin-top: 1rem;
    margin-bottom: 1.4rem;
    line-height: 1rem;
    font-size: 1rem;
    color: rgba(0,0,0,.87);
    float: left;
}
.proDetail-view .addNum{
    float: right;
}
.proDetail-view .addNum>div:first-child {
    border-left: 1px solid #f4f4f4;
}

.proDetail-view .addNum>div {
    float: left;
    margin: 0;
    padding: 0;
    width: 2.6rem;
    height: 2.6rem;
    border: 1px solid #f4f4f4;
    border-left: 0;
    box-sizing: border-box;
    line-height: 2.6rem;
    text-align: center;
    font-size: .24rem;
    color: #000;
    background-color: #fff!important;
}
.proDetail-view .addNum .off {
    opacity: .3;
}

.proDetail-view .addNum .input-sub {
    width: 2.5rem;
    height: 2.5rem;
    background: url(https://m.mi.com/views/product/view/img/-view_de185bf.png) no-repeat center;
    background-size: 40%;
}
.proDetail-view .addNum .input-add {
     width: 2.5rem;
    height: 2.5rem;
    background: url(https://m.mi.com/views/product/view/img/＋view_21ff956.png) no-repeat center;
    background-size: 40%;
}
.proDetail-view .sure{
    height: 4.5rem;
    line-height: 4.5rem;
    background: #f95b07;
    color:#fff;
    text-align: center;
    font-size: 1.5rem;
}

	
</style>