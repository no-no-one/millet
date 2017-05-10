import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
import Indent from '@/components/Indent'
import Record from '@/components/Record'
import Privilege from '@/components/Privilege'
import Service from '@/components/Service'
import Set from '@/components/Set'
import Family from '@/components/Family'
import Familys from '@/components/Familys'
import Enter from '@/components/Enter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:"/mine",
    	component:Mine
    },{
    	path:"/market",
    	component:Market
    },{
    	path:"/cart",
    	component:Cart
    },
    {
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
    },{
      path:"/indent",//订单
      component:Indent
    },{
      path:"/record",//售后
      component:Record
    },{
      path:"/privilege",//优惠
      component:Privilege
    },{
      path:"/service",//服务
      component:Service
    },{
      path:"/set",//设置
      component:Set
    },{
      path:"/family",//小米之家
      component:Family
    },{
      path:"/familys",//小米之家内部
      component:Familys
    },{
      path:"/enter",//登录
      component:Enter
    }
      
  ]
})
