<template lang="html">
  	<div class="enter" id="mi">
  		<img src="../assets/ercode_hover.png" alt="" >
		<div class="mi">
			<div class="mimi">
				<img src="../assets/milogo.png" alt="">
				<span>小米账号登录</span>
			</div>
		</div>
		<div class="menu">
			<form action="Home" method="get"  @submit="fn">
				<input type="text" id="username" placeholder="请输入账号"><br>
				<input type="password" id="psd" placeholder="请输入密码">
				<div id="uinfo"></div>
				<button type="submit">立即登录</button>
			</form>
			<div class="foot">
				<p>
					<span>简体</span>|
					<span>繁体</span>|
					<span>English</span>|
					<span>常见问题</span>
				</p>
				<p>小米公司版权所有-京ICP10046444-京公网安备</p>
				<p>11010802020134号-京ICP证110507号</p>
			</div>
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
             username:"",
             psd:""
         }
      },
      mounted(){
        var a = document.querySelector("#footer");
        a.style.display="none";
      },
     methods:{
		  	fn:function(){
		  		//用户名
		  		var reg = /^[a-zA-Z_]\w{5,11}$/;
				if(reg.test(document.getElementById("username").value)){
						var reg = /^[a-zA-Z_]\w{5}$/;
						if(reg.test(document.getElementById("psd").value)){
							return true
						}else{
							document.getElementById("uinfo").innerHTML ="用户名密码不正确";
							return false;
						}
				}else{
					document.getElementById("uinfo").innerHTML ="用户名密码不正确";
					return false;
				}
				//密码
			
				
		  	}
		  	// fn1:function(){
		  	// 	document.getElementById("uinfo").style.display="none";
		  	// }
		  }
   }
   
</script>
<style lang="css">
	.enter{
		background: #eee;
		height: 70rem;
	}
	.enter>img{
		width: 6rem;
		height: 6rem;
		position: fixed;
		right: 0;
		top: 0;
	}
	.enter .mimi>img{
		width: 4.5rem;
		height: 4.5rem;
	}
	.enter .mi{
		display: flex;
		justify-content:center;
		padding-top: 4rem;
	}
	.enter .mimi{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.enter .mimi>span{
		margin-top: 2rem;
		font-size: 2rem;
	}
	.enter .menu{
		display: flex;
		justify-content:center;
	}
	.enter .menu form{
		width: 90%;
	}
	.enter .menu form input{
		width: 100%;
		height: 3rem;
		border: none;
		font-size: 2rem;
	}
	.enter .menu form input:first-of-type{
		margin-top: 2rem;
		border-radius: 1rem 1rem 0 0;
		border-bottom: 1px solid #f5f5f5;
	}
	.enter .menu form input:last-of-type{
		border-radius:  0 0 1rem 1rem;
	}
	#uinfo{
		font-size: 1.5rem;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
	}
	.enter .menu form button{
		width: 100%;
		height: 4rem;
		border-radius: 1rem;
		background: #5aabe8;
		margin-top: 2rem;
		font-size: 2rem;
		color: #fff;
	}
	.foot{
		position: fixed;
		bottom:0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.foot>p{
		font-size: 1.5rem;
		color: #666;
	}
	.foot>p:first-of-type{
		margin-bottom: 1.5rem;
		font-size: 1.6rem;
	}
	.foot>p:last-of-type{
		padding-bottom: 1rem;
	}
	.foot>p span{
		padding: 0 .3rem;
	}
</style>