<template lang="html">
  <div class="service">
   		<div class="allUse">
	   		<a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt=""></a>
	   		<span>服务</span>
	   		 <router-link to="cartserch"><img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt=""></router-link>
   		</div>
   		<img src="../assets/banner1228.jpg" alt="">
   		<ul class="catalog">
   			<router-link to="/family">
	   			<li>
	   				<span>小米之家</span>
	   				<img src="../assets/arrow_3c64abd.png" alt="">
	   			</li>
   			</router-link>
   			<li>
   				<span>零售网点</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<li>
   				<span>服务网点</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<router-link to="/record">
	   			<li>
	   				<span>售后服务单</span>
	   				<img src="../assets/arrow_3c64abd.png" alt="">
	   			</li>
   			</router-link>
   			<li>
   				<span>售后服务政策</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<li>
   				<span>防伪查询</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<div></div>
   			<li>
   				<span>在线客服</span>
   				<img src="../assets/arrow_3c64abd.png" alt="">
   			</li>
   			<div></div>
   		</ul>
   		<p class="tel">致电客服专家 400-100-5678</p>
   	</div>
</template>
<script>
export default{
	
}
</script>
<style lang="css">
	img{
		width: 100%;
	}

	/*通用样式*/
	.service .catalog{
		display: flex;
		flex-direction: column;
	}
	.service .catalog li{
		width: 100%;
		height: 4rem;
		border-bottom: 1px solid #f6f6f6;
		display: flex;
		justify-content:space-between;
		align-items: center;
	}
	.service .catalog img{
		width:.7rem;
		height: 1rem;
		margin-right: 1rem;
	}
	.service .catalog li span{
		font-size: 1.8rem;
		margin-left:1rem;
		color: #666;
	}
	.service .catalog div{
		width: 100%;
		height: 1rem;
		background: #f5f5f5;
	}
	.service .tel{
		width: 100%;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		color: #666;
	}
</style>