<template>
  <div>
  	<input type="text" name="" placeholder="请输入姓名，按回车键确认" @keyup.enter="sun_keyup" v-model="title" />
  </div>
</template>

<script>
export default {
	//接收组件
	props:{
		// sun_add_item 传过来的函数名称
		sun_add_item:{
			type:Function, // 指定 sun_add_item 类型为函数
			required:true //指定必要性
		}
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
			this.sun_add_item(data)
			//将输入对象添加到sun_data中
			//清楚输入框
			//alert("aaa")
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
