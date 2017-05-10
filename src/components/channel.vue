<template lang="html">
   <div>
   	<!-- 头部 -->
   	<div class="channel_head">
<<<<<<< HEAD
   		<div class="channel_head_search">
   			<router-link to="/Market"><a href=""><img src="../assets/icon_back_n.png" alt="" class="change"></a></router-link>
	   		<router-link to="/CartSerch"><input type="text" placeholder="搜索商品名称"></router-link>
	   		<a href=""><img src="../assets/cart_ae7d5a3.png" alt="" class="change"></a>
   		</div>
=======
   		<router-link to="/Market"><a href=""><img src="../assets/icon_back_n.png" alt="" class="change"></a></router-link>
   		<input type="text" placeholder="搜索商品名称">
   		<a href=""><img src="../assets/cart_white_35b9dc4.png" alt="" class="change"></a>
>>>>>>> cart
   	</div>
   	<!-- 年轻人的酷玩具 -->
   	<div class="channel_play">
   		<div class="channel_play_big">
   			<a href=""><img src="http://i8.mifile.cn/v1/a1/000d335e-d530-66cf-ab15-ba28b3213e63.webp?width=358&heihgt=508" alt=""></a>
   		</div>
   		<div class="channel_play_small">
   			<a href=""><img src="http://i8.mifile.cn/v1/a1/ff7fd66e-2543-62b7-5ff1-8f10b14e1691.webp?width=358&heihgt=252" alt=""></a>
   		<a href=""><img src="http://i8.mifile.cn/v1/a1/ab8b54ec-b88a-8918-ea69-837123d157e5.webp?width=358&heihgt=252" alt="" ></a>
   		</div>
   		
   	</div>
   	<!-- 所有分类 -->
   	<!-- 智能新品 -->
   	<div class="channel_all" >
   		<p class="channel_title">智能新品</p>
   		<div v-for="x in total">
   			<a href=""><img :src="bigImages[x-1] ? bigImages[x-1].body.items[0].img1_url :''" alt=""></a>
   		<p class="channel_type"><a href="">{{bigImages[x-1] ? bigImages[x-1].body.items[0].product1_name: ""}}<span>{{bigImages[x-1] ? bigImages[x-1].body.items[0].product1_price: ""}}</span></a></p>
		<p class="channel_intro"><a href="">{{bigImages[x-1] ? bigImages[x-1].body.items[0].product1_brief: ""}}</a></p>
		<div class="channel_reset">
			<dl v-for="ite in texts1[x-1] ? texts1[x-1].body.items:[]">
				<dt><a href=""><img :src="ite.img_url" alt=""></a></dt>
				<dd><a href=""><b>{{ite.product_name}}</b></a></dd>
				<dd><a href="">{{ite.product_brief}}</a></dd>
				<dd><a href=""><span>{{ite.product_price}}</span></a></dd>
			</dl>
		</div>
<<<<<<< HEAD
	<!-- 回到顶部 -->
   	</div>
   		</div>
   		<div class="channel_top">
   			<a href="" class="channel_top_btn" @click.prevent="isTop()"><img src="../assets/top_1a2bcd9.png" alt=""></a>
   		</div>
=======
   	</div>
   		</div>
   		
>>>>>>> cart
   </div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
export default{
	data (){
		return {
			channelData:[],
			total : 0,
		 	bigImages : [],
		 	texts1 : [],
<<<<<<< HEAD
		 	// texts2:[],
		 	// texts3:[],
		 	// texts4:[]
=======
		 	texts2:[],
		 	texts3:[],
		 	texts4:[]
>>>>>>> cart
		 	
		}
	},
	computed : {
		
	},
	methods : {
		parseData : function(){
			this.total = Math.floor(this.channelData.length/6);
			this.channelData.forEach((item)=>{
				item.view_type == "list_one_type12" && this.bigImages.push(item);
				item.view_type == "list_two_type1" && this.texts1.push(item);
<<<<<<< HEAD
				// item.view_type == "list_three_type1" && this.texts2.push(item);
				// item.view_type == "list_two_type2" && this.texts3.push(item);
				// item.view_type == "list_two_type3" && this.texts4.push(item);
			})
			// console.log(this.bigImages)
			// console.log(this.texts1)
			// console.log(this.texts2)
			// console.log(this.texts3)
			// console.log(this.texts4)
	},
	isTop:function(){
		document.body.scrollTop=0;
	}
=======
				item.view_type == "list_three_type1" && this.texts2.push(item);
				item.view_type == "list_two_type2" && this.texts3.push(item);
				item.view_type == "list_two_type3" && this.texts4.push(item);
			})
			console.log(this.bigImages)
			console.log(this.texts1)
			console.log(this.texts2)
			console.log(this.texts3)
			console.log(this.texts4)

			
		}
>>>>>>> cart
	},
	mounted (){
		this.$http.get("../../static/channel.json").then(function(res){
			this.channelData=res.data.data.sections;
			this.parseData();
<<<<<<< HEAD
			// console.log(this.channelData)
		})
}
	
}


window.onscroll=function(){
		var channel_top=document.querySelector(".channel_top");
		var channel_head_search=document.querySelector(".channel_head_search");
		var diss=window.scrollTop||document.body.scrollTop||document.documentElement.scrollTop;
		if(diss>=0&&diss<=300){
			channel_top.style.display="none";
		}
		else{
			channel_top.style.display="block";
		}
		if(diss>=0&&diss<=6){
			channel_head_search.style.background="";
		}
		else{
			channel_head_search.style.background="white";
		}
	}
</script>
<style>
	.channel_head{
=======
			console.log(this.channelData)
		})
}

}

</script>
<style>
	.channel_head{
		float: left;
>>>>>>> cart
		width: 100%;
		height: 24rem;
		font-size: 4rem;
		background: url("http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2e91790c8596649d8011cef309c0b421.jpg?bg=FFFFFF")no-repeat;
		background-size:100%;
<<<<<<< HEAD
		/*position: relative;*/
	}
	.channel_head input[type="text"]{
		margin-top: 2rem;
		width: 24.6rem;
		height: 2.6rem;
		/*border:0;*/
		font-size: 2rem;
		
	}
	.change{
		vertical-align: middle;
		width: 3.2rem;
		height: 3rem;
		
	}
	.channel_head_search{
		width: 100%;
		height: 6rem;
		line-height: 6rem;
		position: fixed;
		top:0;
=======
	}
	.channel_head input[type="text"]{
		float: left;
		margin-left: 2rem;
		margin-top: 1rem;
		margin-right: 1rem;
		width: 24.6rem;
		height: 2.6rem;
		border:0;
		font-size: 2rem;
	}
	.change{
		vertical-align: middle;
		margin-top: 1rem;
		float: left;
		width: 3.2rem;
		height: 3rem;
>>>>>>> cart
	}
	.channel_play{
		width: 100%;

	}
	.channel_play_big{
		float: left;
		width: 50%;
	}
	.channel_play_small{
		float: left;
		width: 50%;
	}
	.channel_play img{
		width: 100%;
	}
	.channel_all{
		float: left;
		width: 100%;
	}
	.channel_title {
		height:5rem;
		line-height: 5rem;
		font-size: 2.5rem;
		margin-left: 2rem;
		color: black;
<<<<<<< HEAD
=======
		/*margin-left: 2rem;*/
>>>>>>> cart
	}
	.channel_all a img{
		width: 100%;
	}
	.channel_type{
		height: 4rem;
		line-height: 4rem;
		font-size: 2rem;
		margin-left: 1rem;
	}
	.channel_type a{
		color: black;
	}
	.channel_type span{
		float: right;
		margin-right: 2rem;
		color: #FF6000;
	}
	.channel_intro{
		font-size: 1.5rem;
		margin-left: 1rem;
	}
	.channel_intro a{
		color: #ADADAD;
	}
	.channel_reset{
		width: 100%;
	}
	.channel_reset dl{
		float: left;
		width: 50%;
		height: 27rem;

	}
	.channel_reset dl dt{
		float: left;
		width: 100%;
	}
<<<<<<< HEAD
	.channel_reset dl dd{
		margin-left: 1rem;
		margin-top: 0.5rem;
	}
=======
>>>>>>> cart
	.channel_reset dl dd a{
		color: #ADADAD;
		font-size: 1.4rem;
	}
	.channel_reset dl dd b{
		font-weight: normal;
		color: black;
		font-size: 1.5rem;
	}
	.channel_reset dl dd span{
		color: #FF6000;
	}
<<<<<<< HEAD
	.channel_top{
		width: 5rem;
		height: 5rem;
		position: fixed;
		right: 0;
		bottom: 12rem;
		display: none;
	}
	.channel_top a img{
		width: 5rem;
		height: 5rem;
	}
=======
>>>>>>> cart
</style>