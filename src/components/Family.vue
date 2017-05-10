<template lang="html">
  <div class="service">
   		<div class="allUse">
	   		<a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt="" @click="clickFun"></a>
	   		<span>小米之家</span>
	   		 <router-link to="cartserch"><img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt=""></router-link>
   		</div>
   		<ul class="catalog">
   			<router-link to="/familys">
	   			<li v-for="x in itemAdress.data">
	   				<span>{{x}}</span>
	   				<img src="../assets/arrow_3c64abd.png" alt="">
	   			</li>
   			</router-link>
   		</ul>
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
			  itemAdress:[],
			 
			}
		},
		mounted(){
		  this.$http.get("../../static/adress.json")
		  .then(function(res){
		  	// console.log(res.data)
		  	this.itemAdress = res.data
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
</style>