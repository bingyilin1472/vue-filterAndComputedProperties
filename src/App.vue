<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!--
           不會受到Navbar的style標籤影響，因為有<style scoped>
           後來是改以在css selector於選擇上增加獨特性來避免影響到跨components
    <nav>
      <h2>Menu from App.vue</h2>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    -->
    <Navbar />
    <Blogs />

  </div>
</template>

<script>
  // from xxx.vue可以省略副檔名filename extension
  // 由於是以export default來匯出，因此他是沒有要求名稱的
  // 只是習慣上會傾向跟.vue一樣，來匯入至root component之中
  //import Navbar from "./Navbar"，vue中的script可以省略;
  import Navbar from "./Navbar"
  import Blogs from "./Blogs";
  export default {
    // 雖然如下面所提，傾向一樣，這邊叫做app卻也有種instance與class的區別感
    name: 'app',
    components: {Navbar, Blogs},
    data () {
      return {
        title: 'Welcome to Your Vue.js App'
      }
    },
    methods:{

    }
  }
</script>

<!-- 要注意引入的component會受到root component的style給影響 -->
<style>
h1{
  color:#444;
  font-weight: normal;
  /* h2 這個block element中的文字會置中 */
  text-align: center;
}
</style>
