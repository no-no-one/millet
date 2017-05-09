
<template>
  <div id="app">
    
    <router-view></router-view>
    <div id="footer">
       <ul>
       <li class="footer_sy"><router-link to="/"><div></div><span>首页</span></router-link></li>
       <li class="footer_fl"><router-link to="market"><div></div><span>分类</span></router-link></li>
       <li class="footer_gwc"><router-link to="cart"><div></div><span>购物车</span></router-link></li>
       <li class="footer_wd"><router-link to="mine"><div></div><span>我的</span></router-link></li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
a{
  text-decoration: none;
}
 html{
  font-size: 10px;
  font-family: Arial,Verdana,Sans-serif;
}
#footer{
  width: 100%;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
}
 #footer ul{
  width: 100%;
  display: flex;
  justify-content:space-around;
  
}
#footer ul li{
  height: 4.5rem;
  list-style: none;
  font-size: 1.2rem;
  display: flex;
  align-items:center;
  justify-content:center;

}
#footer ul li a{
  color:black;
}
 #footer ul .footer_sy a div{
    width: 2rem;
  height: 2rem;
    background-image: url(./assets/18.png);
    background-size: 1.95rem 15rem;
    background-position: .05rem 1.89rem; 
}
 #footer ul .footer_fl a div{
    width: 2rem;
  height: 2rem;
    background-image: url(./assets/18.png);
    background-size: 1.95rem 15rem;
    background-position: .05rem -1.9rem; 
}
 #footer ul .footer_gwc a div{
    width: 2rem;
  height: 2rem;
    background-image: url(./assets/18.png);
    background-size: 1.95rem 15rem;
    background-position: 0rem -5.53rem; 
   margin-left: .3rem;
}
 #footer ul .footer_wd a div{
    width: 2rem;
  height: 2rem;
    background-image: url(./assets/18.png);
    background-size: 1.95rem 15rem;
    background-position: .05rem -9.45rem; 
}
</style>
