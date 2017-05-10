<template lang="html">
  <div class="service">
   		<div class="allUse">
	   		<a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt="" @click="clickFun"></a>
	   		<span>个人设置</span>
	   		 <router-link to="cartserch"><img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt=""></router-link>
   		</div>
   		<ul class="catalog">
   			<li>
   				<span>地址管理</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<li>
   				<span>电脑版</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   		</ul>
   		<div class="out">
   			退出账号
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
			}
		},
		mounted(){
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
	.service .out{
		width: 100%;
		height: 5rem;
		line-height: 5rem;
		font-size: 2rem;
		color: #666;
		text-align: center;
		background: #f5f5f5;
		position: fixed;
		bottom:0;
	}
</style>