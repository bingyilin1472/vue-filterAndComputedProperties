<template>
  <!-- HTML的navigator一般放置在header區塊 -->
  <nav class="main-nav">
    <h2>Menu from Navbar.vue</h2>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
    export default {
        // 好像除了root component外，創建出來的component名稱慣例上都是同.vue
        name: "Navbar",
        // 若當前沒有要渲染資料data可以不用return obj出去給某個instance
        // 就直接data(){  }，或者乾脆就不要有這個data(){}
        data(){

        }
    }
</script>


<!-- scoped有範圍/審視之意 -->
<!-- vuejs會自動takes any CSS that we write in any component
     (不過實驗發現好像是有註冊進去，才會互相影響，只要加上scoped就不會有這個動作)
     若希望to only apply this style in this template in this component就得加上scoped於style標籤裡面
     <style scoped>
     regular css是不鼓勵用上面這種方式，它的效率會很差勁(原因似乎是會幫你重新編碼)，而且編寫的彈性也會不佳
    (會鼓勵以id或class方式，通常來說是採用class去做使該element有較高的差異性，selector透過此差異性就不會影響到其他element)
      這邊做法是改以 <nav class="main-nav"> at line3
-->
<style>
  nav.main-nav{
    text-align: center;
    color: red;
  }
  /* ul inside nav的情況 */
  nav.main-nav ul{
    padding: 0;
  }
  /* li inside nav的情況 */
  nav.main-nav li{
    /* 設定成inline-block
       就可以排版上inline但是又享有block寬高屬性、水平排列與其他屬性，譬如像是padding、margin
     */
    display: inline-block;
    list-style-type: none;
    margin: 0;
  }
</style>
