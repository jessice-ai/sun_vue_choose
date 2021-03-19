<template>
  <div>
    <ul>
      <sun_item v-for="(data,index) in sun_data" :key="index" :data="data" :index="index" /> 
    </ul>
  </div>
</template>

<script>

import sun_item from "./sun_item.vue"
export default {
  props:{
    //传递过来的数据
    sun_data:Array,
    sun_delete_item:Function
  },
  components: {
    sun_item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>