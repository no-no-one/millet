<template lang="html">
  <div class="service">
         <div class="allUse">
            <a href="javascript:history.go(-1)"><img src="../assets/icon_back_n.png" alt=""></a>
            <span>小米之家</span>
             <router-link to="cartserch"><img src="../assets/1mjp3jvupwan87lzygaaspwfq4eyxqv3.png" alt=""></router-link>
         </div>
         <div class="room">
            <div class="rooms">
                <span>北京</span>
                <span>|</span>
                <router-link to="/family">
                   <span class="city">切换城市
                     <img src="../assets/right.jpg" alt="">
                   </span>
                </router-link>
            </div>
            <p class="place">北京的小米之家</p>
            <ul class="places">
               <li class="fam" v-for="x in itemStop.mihome_list">
                  <img :src="x.detail_img_url" alt="">
                  <h3>{{x.address}}</h3>
                  <p>{{x.name}}</p>
               </li>
            </ul>
            <div class="void"></div>
            <div class="ser">
               <span>北京服务网点</span>
               <img src="../assets/arrow_3c64abd.png" alt="">
            </div>
             <div class="void"></div>
            <p class="place">北京的零售网点</p>
            <ul class="mesh">
               <li class="meshs" v-for="i in itemStop.store_list">
                  <div class="ad">
                     <h6>{{i.store_addr}}</h6>
                     <p>{{i.store_name}}</p>
                  </div>
                  <img src="../assets/arrow_3c64abd.png" alt="">
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
           itemStop:[]
         }
      },
      mounted(){
        this.$http.get("../../static/store.json")
        .then(function(res){
         // console.log(res.data.data)
         this.itemStop = res.data.data
        });
        var a = document.querySelector("#footer");
        a.style.display="none";
      }
   }
</script>
<style lang="css">
   .room{
      background: #eeeeee;
   }
   .rooms{
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      background: #fff;
   }
   .rooms>span:first-of-type{
      padding-left: 1.5rem;
      font-size: 1.7rem;
   }
   .rooms .city{
      font-size: 1rem;
   }
   .rooms span img{
      width: .6rem;
      height: .6rem;
   }
   .void{
      width: 100%;
      height: 1rem;
   }
   .ser{
      width: 100%;
      height: 4rem;
      background: #fff;
      display: flex;
      justify-content:space-between;
      align-items:center;
   }
   .ser span{
      font-size: 1.4rem;
   }
   .place{
      margin-left: 1.8rem;
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      color: #666;
   }
   .places .fam p,.places .fam h3{
      margin-left: 1rem;
      height: 2.6rem;
   }
   .places .fam h3{
      font-size: 1.6rem;
   }
   .places,.mesh,.ser{
      background: #fff;
      width: 95%;
      margin:0 1rem;
   }
   .mesh .meshs{
      display: flex;
      justify-content:space-between;
      height: 5.2rem;
      align-items: center;
      border-bottom: 1px solid #f5f5f5;
   }
   .mesh .meshs p,.mesh .meshs h6,.ser span{
      margin-left: 1rem;
      color: #666;
   }
   .mesh .meshs h6{
      margin-bottom: .5rem;
      font-size: 1.5rem;
   }
   .mesh .meshs img,.ser img{
      width: .6rem;
      height: 1rem;
      margin-right: 1rem;
   }
</style>