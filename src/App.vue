<template>
  <div id="app">
    <!-- 把方法 sun_add_item 传递给组件 -->
    <sun_top :sun_add_item="sun_add_item"/>
    <sun_center :sun_data="sun_data" :sun_delete_item="sun_delete_item"/>
    <sun_bottom :sun_delete_all="sun_delete_all" :sun_select_all="sun_select_all" :sun_data="sun_data"/>
  </div>
</template>

<script>
import sun_top from "./components/sun_top.vue"
import sun_center from "./components/sun_center.vue"
import sun_bottom from "./components/sun_bottom.vue"
export default {
  name: 'App',
  data(){
    return {
      sun_data:[
        {name:"黄渤","complete":true},
        {name:"罗志祥","complete":false},
        {name:"黄磊","complete":false},
        {name:"张艺兴","complete":false},
        {name:"孙红雷","complete":false}
      ]
    }
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
