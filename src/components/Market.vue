<template lang="html">
	<div>
	<!-- 商品分类 -->
   <div class="classify_head">
   	<p>
   		<router-link to="/"><a href=""><img src="../assets/icon_back_n.png" alt=""></a></router-link>
		<span>商品分类</span>
<<<<<<< HEAD
		<router-link to="/CartSerch"><a href=""><img src="../assets/222.png" alt=""></a></router-link>
=======
		<a href=""><img src="../assets/222.png" alt=""></a>
>>>>>>> cart
   	</p>
   </div>
   <!-- 菜单 -->
   <div class="swiper-container swiper-title">
   	<div class="swiper-wrapper">
<<<<<<< HEAD
   			<!-- <a href="" class="swiper-slide swiper-hover" v-for="x in total">{{titles[x-1] ? titles[x-1].body.category1_name : ""}}</a> -->
   		
   		<a href="" class="swiper-slide swiper-hover">手机·电话卡</a>
   		<a href="" class="swiper-slide swiper-hover">笔记本·平板</a>
=======
   		<!-- <div  v-for="x in total">
   			<a href="" class="swiper-slide swiper-hover">{{titles[x-1] ? titles[x-1].body.category1_name : ""}}</a>
   		</div> -->
   		
   			<a href="" class="swiper-slide swiper-hover">手机·电话卡</a>
	   	<a href="" class="swiper-slide swiper-hover">笔记本·平板</a>
>>>>>>> cart
	   	<a href="" class="swiper-slide swiper-hover">电视·盒子</a>
	   	<a href="" class="swiper-slide swiper-hover">智能硬件·路由器</a>
	   	<a href="" class="swiper-slide swiper-hover">移动电源·插线板·电池</a>
	   	<a href="" class="swiper-slide swiper-hover">耳机·音箱·存储卡</a>
	   	<a href="" class="swiper-slide swiper-hover">小米生活方式</a>
	   	<a href="" class="swiper-slide swiper-hover">保护类配件</a>
	   	<a href="" class="swiper-slide swiper-hover">优惠套餐</a>
   	</div>  	
   </div>
   <!-- 分类 -->
	<div class="classify_items">
		<div class="classify_items_margin" v-for="x in total">
			<!-- {{ classifyData[(index*3)+1] }} -->
			<div class="bigItems">
				<p>
				<router-link to="/market/channel">
				<a><img :src="bigImages[x-1] ? bigImages[x-1].body.items[0].img1_url:''" alt='t'/></a></router-link>
				</p>		
			</div>
			<p class="aaa">{{titles[x-1] ? titles[x-1].body.category1_name : ""}}</p>
			<div class="smallItems">
				<dl v-for="ite in items[x-1] ? items[x-1].body.items : []">
					<dt><a href=""><img :src="ite.img2_url" alt=""></a></dt>
					<dd>{{ite.product_name}}</dd>
				</dl>
			</div>	
			</div>
		</div>
	</div>
   </div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
import Swiper from "../../static/swiper.min.js"
Vue.use(VueResource)
export default{
	data (){
		return {
		  
		  classifyData:[],
		 	total : 0,
		 	bigImages : [],
		 	titles : [],
		 	items : []
		}
	},
	computed : {
		
	},
	methods : {
		parseData : function(){
			this.total = Math.floor(this.classifyData.length/4);
			this.classifyData.forEach((item)=>{
				item.view_type == "cells_auto_fill" && this.bigImages.push(item);
				item.view_type == "category_title" && this.titles.push(item);
				item.view_type == "category_group" && this.items.push(item);
			})
			// console.log(this.bigImages)
			// console.log(this.titles)
			// console.log(this.items)
		}
	},
	mounted (){ 
<<<<<<< HEAD
		var swiper_channel = new Swiper('.swiper-container', {
=======
		var swiper = new Swiper('.swiper-container', {
>>>>>>> cart
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
	    });
	  this.$http.get("../../static/classify.json")
	  .then(function(response){
	  	// console.log(response)
	  	this.classifyData =response.data.data;
	  	this.parseData();
	  // this.classifySigle=classifyData.body.items;
	  // this.classifyHeader=response.data;
	  // console.log(this.classifyData[1].body.items[0].img_url)
	  }); 
	}
}

<<<<<<< HEAD

	// 	window.onscroll = function(){
	// 		var swiperTitle=document.querySelector('.swiper-title');
	// 		var classify_head=document.querySelector(".classify_head");
	// 		var disa = window.scrollTop||document.body.scrollTop||document.documentElement.scrollTop;
	// 		if(disa>=0&&disa<=4){
	// 			classify_head.style.display="block";
	// 			swiperTitle.style.top=4;
	// 		}else{
	// 			classify_head.style.display="none";
	// 			swiperTitle.style.top=0;
	// 		}		
	// }

=======
>>>>>>> cart
</script>
<style>
	@import "../../static/swiper.min.css";
	.classify_head{
<<<<<<< HEAD
=======
		float: left;
>>>>>>> cart
		width: 100%;
		height: 4rem;
		background-color: #F2F2F2;
		font-size: 2rem;
		line-height: 4rem;
	}
	.classify_head p span{
		margin-left: 8rem;
	}
	.classify_head p a img{
<<<<<<< HEAD
		width: 3.2rem;
		height: 2.5rem;
=======
		float: left;
		width: 3.2rem;
		height: 2.5rem;
		margin-top: 1rem;
>>>>>>> cart
		vertical-align: middle;
	}
	.classify_head a:nth-of-type(2){
		float: right;
		margin-right: 1rem;
	}
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-hover{
    	color: #929292;
<<<<<<< HEAD
    	display: inline-block;
    	/*margin-left: -1rem;*/
    	width: 10rem;
    	text-align: center;
    	margin-right: 2rem;

=======
>>>>>>> cart
    }
    .swiper-hover:hover{
    	color: #FCA472;
    }
    .swiper-title{
<<<<<<< HEAD
    	width: 100%;
    	background-color: white;
    	height: 4rem;
      	border-bottom: 12px solid #F2F2F2;
      	line-height: 4rem;
    	/*position: fixed;
		top:4rem;
=======
    	 width: 100%;
    	background-color: white;
    	 height: 4rem;
      	border-bottom: 12px solid #F2F2F2;
    	/*position: fixed;
		top:5rem;
>>>>>>> cart
		left: 0;
		z-index: 100;*/
    }
	.classify_items{
		float: left;
		width: 100%;
		border-bottom: 16px solid #F2F2F2;
		font-size: 1.6rem;
	}
<<<<<<< HEAD
=======
	.classify_items_margin{
		float: left;
	}
>>>>>>> cart
	.bigItems p a img{
		width: 100%;
		height: 17rem;
	}
	.aaa{
		height: 5.8rem;
		text-align: center;
		line-height: 5.8rem;
	}
	.ccc a img{
		width: 100%;
	}
	.classify_text{
		height: 5.8rem;
		text-align: center;
		line-height: 5.8rem;
		margin-bottom: 1rem;
	}
<<<<<<< HEAD
	.itemsSingle{
		width: 100%;
=======
	
	.smallItems{
		float: left;
		width: 100%;

>>>>>>> cart
	}
	.classify_items dl{
		float: left;
		width: 33%;
		height: 13.4rem;
<<<<<<< HEAD
	}
	.classify_items dl dt{
		float: left;
		width: 100%;
=======
		text-align: center;
	}
	.classify_items dl dt{
		float: left;
		width: 110%;
>>>>>>> cart
		text-align: center;
		margin-bottom: 2rem;
	}
	.classify_items dl dt img{
		width: 50%;
<<<<<<< HEAD
=======

>>>>>>> cart
	}
	.smallImg{
		width: 50%;
	}
	.classify_items dl dd{
<<<<<<< HEAD
		float: left;
=======
		/*float: left;*/
>>>>>>> cart
		width: 100%;
		text-align: center;

	}
	
</style>

