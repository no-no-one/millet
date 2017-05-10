import Vue from "vue"
 var Bus = new Vue({
 	data:function(){
 		return {
<<<<<<< HEAD
 			todos:{}
=======
 			todos:{},
 			cartData:[],
 			isShow:true,
 			ShowData:[],
 			money:0
>>>>>>> cart
 		}
 	},
 	// 创建钩子监听add事件
 	created:function(){
 		this.$on("add",this.addTodo)
<<<<<<< HEAD
 	},
 	beforeDestroy:function(){
 		this.$off("add",this.addTodo);
=======
 		this.$on("addshop",this.shopadd)
 	},
 	beforeDestroy:function(){
 		this.$off("add",this.addTodo);
 		this.$off("deleshop",this.shopdele)
>>>>>>> cart
 	},
 	methods:{
 		addTodo:function(newTodo){
 			this.todos= newTodo
<<<<<<< HEAD
 		}
=======
 			this.isShow = false
 		},
 		shopadd:function(item){
            this.money+=item.product_price*1
            console.log(this.money)
 			this.ShowData.push(item);
 			if(this.cartData.length!=0){
            for(let i=0;i<this.cartData.length;i++){
                if(this.cartData[i].product_name!=item.product_name){
                    if(i == this.cartData.length-1){
                        item.count = 1;
                        this.cartData.push(item);
                        break; 
                    }else{
                        continue;
                    }
                }else{
                    this.cartData[i].count++;
                    break;
                }
            }
            
            }else{
                item.count = 1;
                this.cartData.push(item);
            }
            console.log(this.cartData)
 		}

 	},
 	shopdele:function(item){
 		this.money=this.money-item.product_price*1;
 		this.ShowData.push(item);
 		if(this.cartData.length!=0){
            for(let i=0;i<this.cartData.length;i++){
                if(this.cartData[i].product_name!=item.product_name){
                    if(i == this.cartData.length-1){
                        item.count = 1;
                        this.cartData.push(item);
                        break; 
                    }else{
                        continue;
                    }
                }else{
                	if(this.cartData[i].count>1){
                		 this.cartData[i].count=this.cartData[i].count-1;
                	}else{
                		   break;
                	}
                    
                  
                }
            }
            
            }else{
                item.count = 1;
                this.cartData.push(item);
            }
        // item.count--;
        // console.log(item.count)
>>>>>>> cart
 	}
 })
 export default Bus
