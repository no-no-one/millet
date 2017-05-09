import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Market from '@/components/Market'
import PhoneList from '@/components/cartserch'
import Cart from '@/components/Cart'
import channel from '@/components/channel'
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
    }
      
  ]
})
