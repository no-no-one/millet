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
		   		<!-- <li class="detailfooter_sy">
                    <a href="" class='black'>首页</a>
                </li>		       
			    <li class="detailfooter_gwc"><a href="" class='black' >购物车</a></li>  -->
			    <li class="detailfooter_addgwc"><a href="" class="white gwc"  @click.prevent="showModel()">加入购物车</a></li> 
			    <li class="detailfooter_shop"><a href="" class="white buy">立刻购买</a></li> 

       		</ul>
	   	</div>
	   	</div>
	   	<div class="top-model" v-show="isBol">
	   		<div class="close">
	   			<span class="pop-icon-close"></span>
	   		</div>
	   		<div class="model_inner">
	   			<div class="buy-show">
	   				<div class="buy-show-img">
	   					<img src="http://i8.mifile.cn/v1/a1/7184e8a3-3097-5120-e0b1-d8718b0ba901.webp" alt="" class="show-img">
	   				</div>
	   				<div class="buy-show-ct">
	   					<div class="ct_price">￥1999</div>
	   					<div class="ct_desc">小米5s</div>
	   				</div>
	   			</div>
	   			<div class="colorSelect">
	   				<div class="color_tit">颜色</div>
	   				<div class="color_ct">
	   					<div class="color_ct_inner">
	   						<div class="self">
	   							<img src="http://i8.mifile.cn/v1/a1/5a1375df-1f5e-afe9-6e39-7733404cf76a!80x80.jpg" alt=""
	   							>
	   							哑光金色
	   						</div>
	   						<div class="self">
	   							<img src="http://i8.mifile.cn/v1/a1/5a1375df-1f5e-afe9-6e39-7733404cf76a!80x80.jpg" alt=""
	   							>哑光银白
	   						</div>
	   					</div>
	   					<div class="color_ct_inner">
	   						<div class="self">
	   							<img src="http://i8.mifile.cn/v1/a1/5a1375df-1f5e-afe9-6e39-7733404cf76a!80x80.jpg" alt=""
	   							>
	   						哑光深灰
	   						</div>
	   						<div class="self">
	   							<img src="http://i8.mifile.cn/v1/a1/5a1375df-1f5e-afe9-6e39-7733404cf76a!80x80.jpg" alt=""
	   							>
	   							玫瑰金
	   						</div>
	   					</div>
	   				</div>
	   			</div>
	   			<div class="capacity">
	   				<div class="capacity_tit">容量</div>
	   				<div class="capacity_ct">64GB</div>
	   			</div>
	   			<div class="specBuy flex-row bb">
	   				<div class="specTitle">购买数量
	   				</div>
	   				<div class="addNum">
	   					<div class="sub" @click="clickSubfun(pro)">
		   					<div class="input-sub off">
		   						
		   					</div>
	   					</div>
	   					<div class="num input-num">{{showNum}}</div>
	   					<div class="add" @click="clickAddfun(pro)">
	   						<div class="input-add"></div>
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
			this.pro = Bus.todos;
			console.log(3,this.pro)
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
    box-sizing: border-box;
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


.proDetail-view .top-model{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
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
    height: 40rem;
    padding:0 1rem;
    box-sizing: border-box;
}
.proDetail-view .buy-show{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.proDetail-view .show-img{
    width:10rem;
    height: 10rem;
}
.proDetail-view .buy-show-ct{
    margin-left: 1rem;
    
}
.proDetail-view .buy-show-ct .ct_price{
    font-size: 2rem;
    height: 3rem;
    line-height: 3rem;
    color:#f56600;
}
.proDetail-view .buy-show-ct .ct_desc{
    font-size: 1.5rem;
    height: 3rem;
    line-height: 3rem;
}

.proDetail-view .colorSelect{
    width: 100%;
    height: 11rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    border-bottom:1px solid #eee;
    padding-bottom: .5rem;
}
.proDetail-view .color_tit{
    height: 2rem;
    line-height: 2rem;
    padding: .5rem 0;
}
.proDetail-view .color_ct{
     width: 80%;
    display: flex;
    justify-content: column;
}
.proDetail-view .color_ct_inner{  
    justify-content: space-between;
}
.proDetail-view .color_ct_inner .self{
    border:1px solid #f4f4f4;
    padding: .8rem 1.5rem;
    margin:.5rem 1rem 1rem 0;
    font-size: 1.3rem;
}
.proDetail-view .self>img{
    width: 1.5rem;
    height: 1.5rem;
    float: left;
}
.proDetail-view .capacity{
    font-size: 1.5rem;
}
.proDetail-view .capacity_tit{
    padding: 1rem 0;
}
.proDetail-view .capacity_ct{
    width: 3rem;
    border:1px solid #f4f4f4;
    padding: .8rem 1rem;
}


.proDetail-view .specBuy {
    width: 90%;
    height: 3rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    position: absolute;
    bottom:4.5rem;
    left: 0;
}
.proDetail-view .specTitle {
    margin-top: 1rem;
    margin-bottom: 1.4rem;
    line-height: 1rem;
    font-size: 1.3rem;
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
    width: 100%;
    height: 4.5rem;
    line-height: 4.5rem;
    background: #f95b07;
    color:#fff;
    text-align: center;
    font-size: 2rem;
    position: absolute;
    bottom:0;
    left: 0;
}

.proDetail-view .detailFooter ul{
  width: 100%;
  display: flex;
  justify-content:flex-end; 
  position: fixed;
  bottom:0;
  left: 0;
  z-index: 500;
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
  display: block;
  padding: 0 1.6rem;
}
.proDetail-view .detailFooter ul li .white{
  color:#fff;
  font-size: 2rem;
  display: block;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1rem;
}

.white.gwc{
  background: #f90;
  color: #fff;

}
.white.buy{
  background: #f95b07;
}
	
</style>