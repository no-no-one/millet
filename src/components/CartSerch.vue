<!-- 搜索页面 -->
<template lang="html">
    <div id="cartserch"> 
        <div class="cartserch_head">
	      	<ul>
	      		<li><router-link to="/"><</router-link></li>
	      		<li>
	      			<input type="text"/>
	      		</li>
	      		<li> <router-link to="cartserch"><img src="../assets/serch.png"></router-link></li>
	      	</ul>
      	</div>
      	<div class="cartserch_main">
      		<router-link to="phonelist/小米6">小米6</router-link>
      		<router-link to="phonelist/红米Note 4x">红米Note 4x</router-link>
      		<router-link to="phonelist/小米MIX">小米MIX</router-link>
      		<router-link to="phonelist/空气净化器">空气净化器</router-link>
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
	
	}
}
</script>
<style>
/*搜索页面的css样式*/
li{
	list-style: none;
}
#cartserch{
	width: 100%;
	padding-bottom: 6rem;
}
.cartserch_head{
	width: 100%;
	height: 4.375rem;
	background: #F2F2F2;
}
.cartserch_head ul{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content:space-between;
   padding: 0 1.2rem;
   box-sizing:border-box;
}
.cartserch_head ul li{
   height: 100%;
}
.cartserch_head ul li:first-child a{
	font-size: 2.8rem;
	display: inline-block;
	text-align: center;
    line-height: 4.375rem;
    color:#A1A1A1;
}
.cartserch_head ul li:nth-child(2) {
    display: flex;
    align-items:center;
    height: 80%;
    margin-top: .5rem;
}
.cartserch_head ul li:nth-child(2) input{
	width: 21.1rem;
	height: 1.8rem;
	border: 1px solid #D8D8D8;
	padding: .3rem .9rem;
}
.cartserch_head ul li a img{
	width: 2rem;
	height: 2rem;
	margin-top: 1.2rem;
}
.cartserch_main{
	width: 100%;
	height: 5.3rem;
	display: flex;
	justify-content:center;
	align-items:center;
}
.cartserch_main>a{
	padding: .729rem 1.04rem;
	color: black;
	line-height: 1.2rem;
	margin-right: 1rem;
	height: 1.2rem;
}
.cartserch_main>a:nth-child(1){
    background: rgb(248, 242, 236);
    border: 1px solid rgb(250, 194, 136);
}
.cartserch_main>a:nth-child(2){
	background:rgb(232, 246, 246);
    border: 1px solid rgb(140, 218, 222);
}
.cartserch_main>a:nth-child(3){
	background: rgb(242, 246, 233);
    border: 1px solid rgb(187, 208, 144);
}
.cartserch_main>a:nth-child(4){
	background: rgb(249, 234, 234);
    border: 1px solid rgb(252, 160, 167);
    margin-right: 0;
}
</style>