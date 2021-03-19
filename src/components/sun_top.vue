<template>
  <div>
  	<input type="text" name="" placeholder="请输入姓名，按回车键确认" @keyup.enter="sun_keyup" v-model="title" />
  </div>
</template>

<script>
export default {
	//接收组件
	props:{

	},
	data(){
		return {
			title:"",
		}
	},
	methods:{
		sun_keyup(){
			//检查输入合法性
			const title = this.title.trim()
			if(!title){
				alert("必须输入")
				return 
			}
			const data = {"name":title,complete:false}
			//this.sun_add_item(data)
			//触发自定义事件 sun_add_item  data是传递参数
			this.$emit('sun_add_item',data)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
