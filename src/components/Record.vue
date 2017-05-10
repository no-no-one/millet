<template lang="html">
    <div class="record">
   		<div class="allUse">
	   		<a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt="" @click="clickFun"></a>
	   		<span>售后记录</span>
	   		 <router-link to="cartserch"><img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt=""></router-link>
   		</div>

   		<div class="mine">
   			<div class="top">
   				<span>申请售后</span>
   			</div>
   		</div>
   		<div class="noRecord">
			<img src="../assets/nolist_efa3d26.png" alt="">
		</div>
		<div class="show">
			<p>为你推荐</p>
		
			<ul class="showShop">
				<li v-for="x in itemData">
					<img :src="x.image_url" alt="">
					<span>{{x.name}}</span>
					<span>{{x.market_price}}</span>
				</li>
			</ul>
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
			  address:"",
			  itemData:[],
			 
			}
		},
		mounted(){
		  this.$http.get("../../static/mine.json")
		  .then(function(res){
		  this.itemData = res.data.data.recom_list
		  });
		  var a = document.querySelector("#footer");
		  a.style.display="none";
		},
		 methods:{
			  	clickFun:function(){
                   var a = document.querySelector("#footer");
		            a.style.display="block";
			  	}
			  }
	}
</script>
<style lang="css">
	.record{
		height: 100%;
		background: #eee;
	}
	.record .mine{
		display: flex;
		justify-content:center;
	}
	.record .mine .top{
		width: 92%;
		height: 4.2rem;
		background: #fff;
		display: flex;
		justify-content:center;
		align-items: center;
		margin-top: 1.8rem;
		border: 1px solid rgba(0,0,0,.27);
	}
	.record .mine .top span{
		font-size: 1.9rem;
		color: rgba(0,0,0,.54);
	}
	.record .noRecord{
		display: flex;
		justify-content:center;
	}
	.record .noRecord img{
		width: 13rem;
		height: 14rem;
		margin-top: 6rem;
	}
	.record .show p{
		margin:6rem 1rem 1rem 2rem;
		font-size: 2rem;
		color:#666;
	}
	.record .show .showShop{
		margin-left: 1.5rem;
		/*margin-right: 1rem;*/
		width: 90%;
		background: #fff;
		height: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap:wrap;
	}
	.record .show .showShop li{
		display: flex;
		width:48%;
		height: 100%;
		flex-direction: column;
	}
	.record .show .showShop img{
		width: 100%;
	}
	.record .show .showShop span{
		margin-left: 1rem;
		width: 96%;
		background: #fff;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 1.7rem;
	}
	.record .show .showShop span:last-of-type{
		color: #ffc8a7;
		font-size: 2rem;
	}
</style>