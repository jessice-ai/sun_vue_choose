<template>
  <div id="app">
    <!-- 自定义组件之间通信/数据传递 函数/方法 (传递函数:sun_add_item给组件sun_top) -->
    
      <sun_top ref="sun_top_head"/>
      <sun_center :sun_data="sun_data" />
      <sun_bottom :sun_delete_all="sun_delete_all" :sun_select_all="sun_select_all" :sun_data="sun_data"/>
    
  </div>
</template>

<script>
import sun_top from "./components/sun_top.vue"
import sun_center from "./components/sun_center.vue"
import sun_bottom from "./components/sun_bottom.vue"
import pub_sub from "pubsub-js"
import storageUtil from "./utils/storageUtils.js" //localStorage存储模块优化 一
export default {
  name: 'App',
  //第二种，把数据存储在 localStorage 情况，页面刷新或者关闭,数据存储在客户端
  data(){
    return {
      //从localStrorage读取数据sun_data
      //window.localStrorage.getItem("sun_data_key") 是从文件中读取的一个json字符串
      //JSON.parse 把json转化为数组
      //sun_data:JSON.parse(window.localStorage.getItem("sun_data_key") || '[]')
      sun_data:storageUtil.readData() //localStorage存储模块优化 二
    }
  },
  //监视
  watch:{
    //深度监视
    sun_data:{
      deep:true, //标识设置深度监视
      // handler:function(value){
      //   //value 是数组
      //   //将sun_data 最新的值保存在localStrorage中
      //   //window.localStorage.setItem('sun_data_key',JSON.stringify(value))
      //   storageUtil.setData(value) //localStorage存储模块优化 三
      // },
      handler:storageUtil.setData //上面的handler部分可以缩写为这么一行
    }
  },
  //第一种，不把数据存储在 localStorage 情况，页面刷新初始化更新
  // data(){
  //   return {
  //     sun_data:[
  //       {name:"黄渤","complete":true},
  //       {name:"罗志祥","complete":false},
  //       {name:"黄磊","complete":false},
  //       {name:"张艺兴","complete":false},
  //       {name:"孙红雷","complete":false}
  //     ]
  //   }
  // },
  //声明周期函数，初始化时调用一次
  mounted(){

    //this.$on('sun_add_item',this.sun_add_item) 这种写法不对
    //this.$refs.sun_top_head 表示sun_top.vue组件
    //为sun_top.vue组件添加侦听，并指定回调函数
    this.$refs.sun_top_head.$on('sun_add_item',this.sun_add_item)

    //订阅消息: 两个参数, sun_delete_item 消息订阅名称 msg 暂时没用 index 是传递过来的值
    // pub_sub.subscribe("sun_delete_item",function(msg,index){
    //   this.sun_add_item(index)
    // })
    pub_sub.subscribe("sun_delete_item",(msg,index)=>{
      this.sun_delete_item(index)
    })
    //使用vue-resource插件实现get/post请求
    //https://api.github.com/search/repositories?q=v&sort=stars
    //const url = "http://localhost:8080/m.php"

    const url = "https://api.github.com/search/repositories?q=v&sort=stars"
    this.$http.get(url).then(
      response=>{
        //请求成功
        
        const sun = response.data["items"]
        const shuzu =new Array(); //定义一维数组 
        for(var i=0;i<sun.length;i++){ 
          const arr = new Array();
          arr["name"] = sun[i]["name"]
          arr["complete"] = sun[i]["archived"]
          shuzu[i] = arr
        } 
        //this.sunloading = 1;
        console.log(shuzu)
      },
      reponse=>{
        //请求失败
        alert("请求失败!"+reponse.data)
      }
    )
  },
  methods:{
    //增加一个函数,添加数据
    sun_add_item(val){
      this.sun_data.unshift(val) //向数组前面添加一个元素
    },
    sun_delete_item(index){
      this.sun_data.splice(index,1)
    },
    sun_delete_all(){
      //删除所有选中的 filter 过滤
      this.sun_data = this.sun_data.filter(sun => !sun.complete)
    },
    sun_select_all(che){
      //全选或者全不选
      // console.log(che)
      this.sun_data.forEach(sun=>sun.complete=che)
    }
  },
  //标签映射
  components: {
    sun_top,
    sun_center,
    sun_bottom,

  }
}
</script>

<style>

</style>
