
<template>
  <div>
  	<li><input type="checkbox" v-model="data.complete" name=""> {{data.name}} <a href="javascript:void(0)" @click="sun_delete">删除</a></li>
  </div>
</template>

<script>
	import pubsub from 'pubsub-js'
export default {
	props:{
		data:Object,
		index:Number
	},
	methods:{
	    sun_delete(){
	      // {} = this 解构赋值
	      const {index} = this
	      if(confirm("确定要删除吗?")){
	      	//sun_delete_item(index)
	      	//发布消息,第一个参数消息名,第二个参数传递一个下标
	      	pubsub.publish("sun_delete_item",index)
	      }
	    }
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
