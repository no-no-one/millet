import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Market from '@/components/Market'
import CartSerch from '@/components/CartSerch'
import PhoneList from '@/components/PhoneList'
import Cart from '@/components/Cart'
import channel from '@/components/channel'
// import Login from '@/components/Login'
// import Search from '@/components/Search'
import NewPaper from '@/components/NewPaper'
import NewPro from '@/components/NewPro'
import ProDetail from '@/components/ProDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
    	path:"/mine",
    	component:Mine
    },{
    	path:"/market",
    	component:Market
    },{
    	path:"/cart",
    	component:Cart
    },{
      path:"/market/channel",
      component:channel
    },{
      path:"/home/newPaper",
      component:NewPaper
    },{
      path:"/home/newProduct",
      component:NewPro
    },{
      path:"/home/proDetail",
      component:ProDetail
    },{
      path:"/cartserch",
      component:CartSerch
    },{
      path:"/phonelist/:isLogin",
      component:PhoneList
    }
      
  ]
})
