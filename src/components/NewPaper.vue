<template lang="html">
	<div class="newPaper_box">
	   <h1 class="newPaper_box_tit">小米周报5.1-5.7一周新鲜事</h1>
	   <!-- <div id="lead">
	   		<span>导语</span>
	   		米家联合霍尼韦尔推出的烟雾报警器正式开卖，安全管家、预知火情、远程报警，售价仅149元。您会为自己的家庭安全购买这份保障吗？
	   </div> -->
	   <div class="zb_img" v-for="x in newPaperData">
	   	<img :src="x.img_url" alt="">
	   </div>
   </div>

 </template>  
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import Swiper from "../../static/swiper/js/swiper.min.js"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				newPaperData:[]
			}
		},
		mounted (){
			this.$http.get("../../static/json/newPaper.json").then(function(res){					  
			  this.newPaperData=res.body.data.sections;	
			  			  	
		  });
		}
	}

</script>
<style>
.newPaper_box{
    margin-bottom: 4.5rem;
}
.newPaper_box_tit{
    margin: 0 1.6rem;
    padding-top: 2rem;
    font-size: 24px;
    text-align: left;
    color: rgba(0,0,0,.86);
    font-weight: 200;
    display: block;
    font-size: 2.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#lead {
    margin: 1.6rem 1.6rem 0;
    padding: 1.6rem;
    font-size: 1.2rem;
    color: rgba(0,0,0,.54);
    text-align: justify;
    background: #f5f5f5;
}
.zb_img{
    width: 91%;
    padding:1.6rem;
}
.zb_img img{
    width: 100%;
}
</style>