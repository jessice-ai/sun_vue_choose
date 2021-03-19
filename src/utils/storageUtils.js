const SUN_KEY = 'sun_data_key'

//1、暴露函数
//2、暴露对象

//使用暴露对象还是暴露对象，区别在于，需要向外暴露一个功能还是多个功能，如果是一个功能就使用暴露函数，如果是多个使用暴露对象
//localStorage存储模块优化
export default {
   saveData(data){
     window.localStorage.setItem(SUN_KEY,JSON.stringify(data))
   },
   readData(){
      return JSON.parse(window.localStorage.getItem(SUN_KEY) || '[]')
   }
}