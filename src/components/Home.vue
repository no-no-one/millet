<template lang="html">
   <body id="box">

		<header>
			<div class="logo">
				<img src="http://m.mi.com/component/header/img/logo_e6453b2.png">
			</div>
			<router-link to="cartserch">
				<div class="search_bar">			 
					<span class="search_name">搜索商品名称</span>			
				</div>
			</router-link>
			<div class="login">
				<router-link to="/home/login"><div class="text">登录</div></router-link>
			</div>
			<!-- 主页
			<router-link to="/mine">个人中心</router-link> -->
		</header>

		<div class="banner">	     
		    <!-- Swiper -->
		    <div class="swiper-container swiper-container1">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="x in bannerData">
		            	<img :src="x.img_url">
		            </div>      
		           
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination swiper1"></div>
		        
		    </div>
		</div>
		<router-link to="/home/newPaper">
			<div class="newPaper">
				<div class="img">
					<img src="http://m.mi.com/component/list/img/sczb_ed0a4af.png" alt="">				
				</div>
				<span class="slide">|</span>
					
						<div class="newPaper_tit" >	
						<transition-group name="opacity">
						        <p v-if="currentIndex==index"  v-for="(x,index) in newsTitleData" key="index">
						        	{{x.news_title}}
						        </p>
						         </transition-group>	
						 </div>

							
				</div>
			</div>
		</router-link>
		<div class="newPro">
			<div class="miNote">
				<img src="http://i8.mifile.cn/v1/a1/08fcdca8-35ae-e743-00c7-4b7ced1251fe.webp" alt="">
				<div class="miNote_r">
					<img src="http://i8.mifile.cn/v1/a1/a3f8f6f4-5c2a-9654-9978-d4ee00287630.webp" alt="">
					<img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/06071f1b334780735c58f33abe22b1c5.jpg" alt="">
				</div>
			</div>
			<div class="miMix">
				<img src="http://i8.mifile.cn/v1/a1/842a7ca9-fc5e-5d6b-4560-9236ede554a6.webp" alt="">
			</div>
		</div>
		
			<div class="detail_inner">
				<a href="#" class="d_i_title">
					<img src="http://i8.mifile.cn/v1/a1/09099b3f-2a91-9d10-56c6-965956c8e00f.webp" alt="">
				</a>
			</div>
		
			<dl class="item" v-for="x in starData">
				<div class="item_inner" v-for="n in x.body.items">												
					<a href="#/proDetail" @click="showDetail(n)">
						<dt class="item_img" >					
							<router-link to="/home/proDetail"><img :src="n.img_url" alt=""></router-link>
						</dt>
						<dd class="info">
							<div class="name">{{n.product_name}}</div>
							<div class="brief">{{n.product_brief}}</div>
							<div class="price">{{n.product_price}}</div>
						</dd>
					</a>

				</div>
			</dl>
		
			<div class="detail_inner">
				<a href="#" class="d_i_title">
					<img src="http://i8.mifile.cn/v1/a1/9a3b32fd-5459-d29b-a744-bb254b05fec9.webp" alt="">
				</a>
			</div>
		
		<router-link to="/home/newProduct"><h2 class="more">更多新品></h2></router-link>		
		<div class="miMix">
				<img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6e80c837908e3386bae745ecdf7d9176.jpg">
		</div>
		<div class="MixSmart">
			<dl class="smart" v-for="x in smartData">
				<div class="smart_inner" >												
					<dt class="smart_img" >					
						<img :src="x.body.items[0].img_url" alt="">
					</dt>
					<dd class="info">
						<div class="name">{{x.body.items[0].product_name}}</div>
						<div class="brief">{{x.body.items[0].product_brief}}</div>
						<div class="price">{{x.body.items[0].product_price}}</div>
					</dd>
				</div>
			</dl>
		</div>
		<div class="ad">
			<img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/baf392bb0c5c9d3c25f60f5fe04f0705.png" alt="technology" usemap ="#techmap">
			
			<map name="techmap">
			  <area shape="rect" coords="0,0,110,260" href="sun.htm" alt="Sun" />
			  <area shape="circle" coords="129,161,10" href="mercur.htm" alt="Mercury" />
			  <area shape="circle" coords="180,139,14" href="venus.htm" alt="Venus" />
			</map>	
		</div>


	</body>

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
			  bannerData:[],
			  starData:[],
			  newsTitleData:[],
			  smartData:[],
			  isBol : true,
			  currentIndex : 0
			 
			}
		},
		methods:{
			showDetail:function(pro){
				Bus.$emit("add",pro);
				console.log(Bus.todos)
			}
		},
		
		mounted (){
		setInterval(()=>{		
			this.currentIndex==2 && (this.currentIndex=0);
			this.currentIndex++;
		},1000);


		//请求数据
		this.$http.get("../../static/json/banner.json").then(function(res){
			this.bannerData=res.data.data.header.body.items;
			console.log(this.bannerData)
			this.$nextTick(function(){
				//设置轮播图
			    var swiper1 = new Swiper('.swiper-container1', {			
		        pagination: '.swiper1', 		       
           		autoplay: 2000,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                paginationClickable: true,
                grabCursor : true ,
                loop:true              	       
	    	});
			})			
		});
		this.$http.get("../../static/json/home.json").then(function(res){				  	
		  	this.starData=res.data.data.sections;
		  	this.smartData=res.data.data.smart;	
		});
	  	this.$http.get("../../static/json/newPaper.json").then(function(res){					  			 
		  this.newsTitleData=res.body.data.header;			  	
	  	});
	  	// 广告数据
	  	this.$http.get("../../static/json/ad.json").then(function(res){					  			 
		  this.adData=res.body;	
		  console.log(res)		  	
	  	});
	}		
	}
	
	

</script>
<style>
@import "../../static/swiper/css/swiper.min.css";


.swiper1{
	text-align: right;
	margin-right: 1rem;
}
.swiper-pagination-bullet-active{
	background: #fff;
}
#box{
	margin-bottom: 20rem;
}
.opacity-enter-active,.opacity-leave-active{
				transition:all 2s;
			}
			.opacity-enter,.opacity-leave-active{
				opacity: 0;
			}
img{
	display: block;
}
header{
	width: 100%;
	height: 3.5rem;
	text-align: center;
	box-sizing: border-box;
	padding:1rem 0;
	background: rgb(229, 131, 53);	
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	z-index: 500;
}
.logo img{
	width: 2.2rem;
	height: 1.4rem;
}
.search_bar{
	width: 25rem;
	height: 2.2rem;
	border-radius: .3rem;
	background: url(http://m.mi.com/component/header/img/search_bfba941.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	justify-content:flex-start;
}
.text{
	color:#fff;
	font-size: 1.5rem;
}
.search_name{
	color:rgba(0,0,0,.3);
	font-size: 1.2rem;
	margin-left: 2.5rem;
}
/*轮播图*/
.banner{
	width: 100%;
}
.banner img{
	width: 100%;
}
/*早报*/
.newPaper{
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: .5rem solid #f5f5f5;
}
.img{
	width: 8rem;	
}
.img img{
	width: 7rem;
	margin-top: .5rem
}
.slide{
	width: 1px;
	color: #b2b2b2;
}
.newPaper_tit{
	margin-left: 1rem;
	font-size: 1.5rem;
	color:#000;
	height: 1.5rem;
}
.newPro{
	width: 100%;
	height: 40rem;
}
.miNote{
	height: 66%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: .5rem;
}
.miNote>img{
	width: 49.5%;
}
.miNote_r{
	width: 49.5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.miNote_r img{
	width: 100%;
	height: 49.5%;
}
.miMix img{
	width: 100%;
	height: 30%;
}
/*明星单品*/
.detail_inner{
	border-top: 1rem solid #f5f5f5;
	width: 40rem;
}
.d_i_title{
    width: 100%;
}
.d_i_title img{
	width: 100%;
	height: auto;
	margin-bottom: .2rem;
}
.item{
	width: 49.5%;
	margin-right: .1rem;
    float: left;
}

.item_img{
	width: 100%;
	height: auto;
}
.item_img img{
	width: 100%;
	height: auto;
}
.info{
	width: 50%;
	padding:.5rem 1rem;

}
.name {
    font-size: 1.6rem;
    font-weight: 100;
    color: rgba(0,0,0,.87);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.brief {
    margin-top: .4rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: rgba(0,0,0,.54);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price {
    font-size: 1.6rem;
    color: #ff6000;
    margin-top: .4rem;
    position: relative;
    margin-left: .8rem;
}
.price::before {
    content: "￥";
    position: absolute;
    left: -.8rem;
    top: .01rem;
    font-size: 1.4rem;
    margin-right: .5rem;
    font-weight: 400;
}
.more{
	width: 100%;
	height: 4rem;
	line-height: 4rem;
	text-align: center;
	font-size: 1.6rem;
	color: rgba(0,0,0,.5);
	border-bottom: .5rem solid #f5f5f5;
}
.smart_inner{
    width: 100%;
}
.smart_img{
    width: 50%;
}
.smart_img img{
    width: 100%;
    float: left;
}
.smart_inner .info{
    float: right;
    box-sizing: border-box;
    padding:3rem 1rem 0 2.5rem;
}
.smart_inner .brief{
    width: 100%;
    white-space: pre-wrap;
    word-wrap: break-word;
}
/*广告*/
.ad{
    width: 100%;
    height: 5rem;
}
.ad img{
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
}

</style>