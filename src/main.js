import Vue from 'vue'
import App from './App.vue'

// 建立 global filter，必須於main.js之中，才能控制到整個application
// 需要兩個參數，參數1是filter Name，參數2是function(用來shape/form，並return an updated value)
// 這個叫做snippet的filter會從todo.title | snippet，pipe symbol前面取得value(類似linux用法)
// 並將取得的value置入到function之中
Vue.filter('snippet', val => {
  // 首先做一個例外處理，這個很重要，第一個是他不存在 以及 type非string
  // 則return empty string，若非exception，則會跳過這段
  if(!val || typeof(val) != 'string') return ''
  // str的slice方法，複製start and end - 1之間的內容，這邊在做把內容刪減的事情，把長度一致
  val = val.slice(0,7)
  return val
})


new Vue({
  el: '#app',
  render: h => h(App)
})
