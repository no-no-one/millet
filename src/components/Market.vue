<template lang="html">
	<div>
	<!-- 商品分类 -->
   <div class="classify_head">
   	<p>
   		<router-link to="/"><a href=""><img src="../assets/icon_back_n.png" alt=""></a></router-link>
		<span>商品分类</span>
		<a href=""><img src="../assets/222.png" alt=""></a>
   	</p>
   </div>
   <!-- 菜单 -->
   <div class="swiper-container swiper-title">
   	<div class="swiper-wrapper">
   		<!-- <div  v-for="x in total">
   			<a href="" class="swiper-slide swiper-hover">{{titles[x-1] ? titles[x-1].body.category1_name : ""}}</a>
   		</div> -->
   		
   			<a href="" class="swiper-slide swiper-hover">手机·电话卡</a>
	   	<a href="" class="swiper-slide swiper-hover">笔记本·平板</a>
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
		var swiper = new Swiper('.swiper-container', {
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

</script>
<style>
	@import "../../static/swiper.min.css";
	.classify_head{
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
		width: 3.2rem;
		height: 2.5rem;
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
    /*.swiper-hover{
    	padding: 0 3rem;
    }*/
    .swiper-hover:hover{
    	color: #FCA472;
    }
    .swiper-title{
    	 width: 100%;
    	background-color: white;
    	 height: 4rem;
      	border-bottom: 12px solid #F2F2F2;
    	/*position: fixed;
		top:5rem;
		left: 0;
		z-index: 100;*/
    }
	.classify_items{
		float: left;
		width: 100%;
		border-bottom: 16px solid #F2F2F2;
		font-size: 1.6rem;
	}
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
	.itemsSingle{
		width: 100%;
	}
	.classify_items dl{
		float: left;
		width: 33%;
		height: 13.4rem;
	}
	.classify_items dl dt{
		float: left;
		width: 100%;
		text-align: center;
		margin-bottom: 2rem;
	}
	.classify_items dl dt img{
		width: 50%;
	}
	.smallImg{
		width: 50%;
	}
	.classify_items dl dd{
		float: left;
		width: 100%;
		text-align: center;

	}
	
</style>

