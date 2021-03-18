
<template>
  <div>
  	<li><input type="checkbox" v-model="data.complete" name=""> {{data.name}} <a href="javascript:void(0)" @click="sun_delete">删除</a></li>
  </div>
</template>

<script>
export default {
	props:{
		data:Object,
		index:Number,
		sun_delete_item:Function
	},
	methods:{
	    sun_delete(){
	      // {} = this 解构赋值
	      const {index,sun_delete_item} = this
	      if(confirm("确定要删除吗?")){
	      	sun_delete_item(index)
	      }
	    }
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
