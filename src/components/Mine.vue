<template lang="html">
     <div class="page">

		<router-view></router-view>
		<header class="headers">
		    <img src="../assets/default.png">
		    <span>
		        <router-link to="/enter">注册/登录</router-link>
		        <router-link to="/enter"></router-link>
		    </span>
		</header>
		<router-link to="/indent">
			<div class="myindent">
			    <ul>
			        <li class="mine">
		        		<p>我的订单</p>
			        </li>
			        <li class="all">
			            <p>全部订单</p>
			            <img src="../assets/right.jpg">
			        </li>
			    </ul>
			</div>
		</router-link>
		<div class="nav">
		    <ul>

		        <li>
		        	<router-link to="/indent">
		                <img src="../assets/nav-1_f74ca94.png">
		                <span>待付款</span>
					</router-link>
		        </li>
		        <li>
		        	<router-link to="/indent">
		                <img src="../assets/nav-1_f74ca94.png">
		                <span>待收货</span>
		            </router-link>
		        </li>
		        <li>
		        	<router-link to="/record">
		                <img src="../assets/nav-4_42676a4.png">
		                <span>退换修</span>
	                </router-link>
		        </li>
		    </ul>
		</div>
		<div class="items">
			<router-link to="/privilege">
			    <ul>
			        <li>
			        	<a href="#">
			           		 <img src="../assets/i-wallet_13a8fda.png">
			           	</a>
			            <span>我的优惠</span>
			        </li>
			        <li>
			            <a href="#">
			                <img src="../assets/right.jpg">
			            </a>
			        </li>
			    </ul>
		    </router-link>
		    <router-link to="/service">
			    <ul>
			        <li>
			        <a href="#">
			        	<img src="../assets/i-service_7b9f412.png">
			        </a>
			        <span>服务中心</span>
			    	</li>
			        <li>
			            <a href="#">
			                <img src="../assets/right.jpg">
			            </a>
			        </li>
			    </ul>
		    </router-link>
		    <router-link to="/family">
			    <ul>
			        <li>
			        	<a href="#">
			            	<img src="../assets/i-mihome_c836072.png">
			            </a>
			            <span>小米之家</span>
			        </li>
			        <li>
			            <a href="#">
			                <img src="../assets/right.jpg">
			            </a>
			        </li>
			    </ul>
		    </router-link>
		    <router-link to="/set">
			    <ul>
			        <li>
			        	<a href="#">
			            	<img src="../assets/i-setting_4ddebe5.png">
			            </a>
			            <span>设置</span>
			        </li>
			        <li>
			            <a href="#">
			                <img src="../assets/right.jpg">
			            </a>
			        </li>
			    </ul>
		    </router-link>
		</div>
    </div>
</template>
<script>
</script>
<style>
	html{
	    font-size: 10px;
	}
	a{
	    text-decoration: none;
	    color: black;
	}
	ul,li{
	    list-style: none;
	}
	.page .headers{
	     background: url(../assets/bg_0425a88.png) center 0 #f37d0f;
	    background-size: auto 100%;
	    width: 100%;
	    height: 8rem;
	    display: flex;
	    justify-content:flex-start;
	}
	.page .headers img{
	    width: 4.5rem;
	    height: 4.5rem;
	    margin:2rem 0 0 2rem;
	}
	.page .headers span{
		margin:4rem 0 0 1.5rem;
	}
	.page .headers span a{
	    color: white;
	    font-size: 1.2rem;
	}
	.page{
	    width: 100%;
	    height: 100%;
	    background: #F5F5F5;
	}
	.page .myindent{
	    height: 4.2rem;
	    width: 100%;
	    background: white;
	    padding-top: 8rem;
	}
	.page .myindent ul{
	    display: flex;
	    justify-content: space-between;
	}
	.page .myindent ul li{
		display: flex;
		align-items: center;
		justify-content : center;
		height:4rem;
	} 
	.page .myindent ul .mine{
		margin-left:2rem;
		font-size:1.6rem;
	}
	.page .myindent ul .all{
		margin-right:1.8rem;
	}
	.page .myindent ul .all img{
		margin:0 .5rem;
		width:1rem;
		height:1.7rem;
	}
	.page .nav{
	    width: 100%;
	    background: white;
	    border-top: 1px solid #d8d8d8;
	}
	.page .nav ul{
	    display: flex;
	    ;
	    height: 9.1rem;
	}
	.page .nav ul li a,.nav ul li{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content : center;
	}
	.page .nav li img{
	    width: 2.5rem;
	    height: 2.5rem;
	}
	.page .nav li span{
		font-size:1.4rem;
	}
	.page .items{
	    width: 100%;
	}
	.page .items ul li:first-of-type img{
	    width: 2.5rem;
	    height: 2.5rem;
	    margin:0 1.5rem;
	}
	.page .items ul li span{
		font-size:1.7rem;
	}
	.page .items ul li:last-of-type img{
	    width: 1rem;
	    height: 1.7rem;
	    margin-right:2rem;
	}
	.page .items ul{
	    display: flex;
	    justify-content: space-between;
	    background: white;
	    height: 5rem;
	    align-items: center;
	}
	.page .items ul li{
		display: flex;
		align-items: center;
	}
	.page .items ul:first-of-type{
		margin:.7rem 0;
	}
	.page .items ul:nth-of-type(2){
		margin-bottom: 2px;
	}
	.page .items ul:last-of-type{
		margin-top:1rem;
	}
</style>