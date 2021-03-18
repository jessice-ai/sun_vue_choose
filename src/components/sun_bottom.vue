<template>
  <div>
    全选:<input v-model="isAllCheck" type="checkbox" name="" > 已选中<span>{{checked_count}}</span>个/总共<span>{{sun_data.length}}</span>几个 <input type="button" value="批量删除" v-show="checked_count" @click="sun_delete_all" name="">
  </div>
</template>

<script>
export default {
  props:{
    sun_delete_all:Function,
    sun_select_all:Function,
    sun_data:Array
  },
  //计算属性
  computed:{
    checked_count(){
      // reduce 
      return this.sun_data.reduce((pre,data)=>pre+(data.complete?1:0),0)
    },
    isAllCheck:{
      get(){
        return this.checked_count===this.sun_data.length && this.checked_count>0
      },
      // val 是当前checkbox最新值
      set(val){
        this.sun_select_all(val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
