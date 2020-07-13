<template>
    <div class="blogs">
      <h2>{{ blogTitle }}</h2>

      <input type="text" v-model="searchTerm">
      <button @click="changeTitle">Change Title</button>
      <!--  這邊就很單純將response回來結果iterate方式將他逐筆呈現，並選擇一個欄位作為key，讓你辨識每筆identify用途
            假設沒有，我印象中也有default產生的方式可以使用
      -->

      <!-- 這邊將filter func設置成computed properties用法基本上跟methods差不多，差別只是會動用到cache記憶體
           情境上確實也合理，因為他是針對多筆資料，進行比對過濾，有computed的味道在
       -->
      <div v-for="todo in filterTitles" :key="todo.id">
        <!--  pipe symbol為filter，filter可以是任何名字，但要有意義，這邊叫做snippet片段之意(依據用途)
              若希望創建一個global filter大家都可以使用的過濾器，需要放在main.js之中
              "filter is a way to manipulate the data we output"(對輸出資料作處理)
        -->
        <!--  建立 global filter，必須於main.js之中，才能控制到整個application
              並能直接於template syntax 中去呼叫，以filterName
        -->
        <h3>{{ todo.title | snippet}}</h3>
        <p>{{ todo.completed }}</p>
      </div>
    </div>
</template>


<!-- component會在不同階段取得不同的lifecycle hook func/method -->
<script>
    import axios from 'axios'
    export default {
        name: "Blogs",
        data(){
          return{
            blogTitle: 'Blogs',
            // initialize 一個empty array用來承接取得的response內容
            todos: [],
            // 一開始不希望過濾到東西，因此初始值設定成empty string
            searchTerm:''
          }
        },
        // 要注意的是，hook method與component methods是不在一起的
        // lifecycle hook methods並not inside methods property
        // hook是自己進入到They just go into the roots of the object itself(總之二者不相干，應該是無法做交流)
        methods:{
          changeTitle(){
            // 這就是一個update動作，會更動到data，並且影響到render結果
            // 實際產生變化前就是beforeUpdate
            this.blogTitle = 'Amazing Blog site'
          }
        },
        // computed properties其實類似於methods
        // 由於created hook已經讀好資料了，因此render階段這邊就沒有問題
        computed:{
          filterTitles(){
            // 這filter方法會回傳一個boolean list配合上v-for"iterableName in filterName"，去產生過濾結果
            return this.todos.filter(todo =>{
              // 文字match方法會看指定的內容是否出現於該str中，會回傳boolean
              return todo.title.match(this.searchTerm)
            })
          }
        },
        // 當component到特定的stage就能reach某個hook
        beforeCreate() {
          // beforeCreate可以在網頁啟動前做一些動作preparation(因為他是在anything被create之前做)
          alert('beforeCreate hook')
          // alert(this.blogTitle) 若執行這段會是undefined，因為還未create(method/data是尚未定義)
        },
        created() {
          // 這部分已經可以取得data、methods來做事
          // 這階段雖然view已經建立，但畫面上仍然未顯示，因為created是尚未rendered階段to the DOM
          // "這邊被推薦說用來load external source外部資源到data裡面，因為尚未渲染但是已經定義出來"

          // 這例子以jsonPlaceholder免費產假資料網站，來做為load external source例子
          // 也就是或許我們要搭載一些後端資料可能可以採用created hook?!
          axios.get('https://jsonplaceholder.typicode.com/todos/')
          .then(response => {
              console.log(response)
              this.todos = response.data
          }).catch(err => {
              // promise可以加上catch後綴，同樣使用ss6 func配合，抓到錯誤err並做處置
              // 這邊就單純display err訊息，可以把get的url改錯的試看看，會得到一個404錯誤(url不正確，沒對應api)
              console.log(err)
          })
        }
    }
</script>

<style scoped>

</style>
