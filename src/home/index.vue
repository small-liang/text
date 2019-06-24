<template>
  <div class="hello">
    <router-link to="/bar"><li> 返回</li></router-link>
      啥打法是否大声道
      idnex。vue
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <liang :message="asd" @listen="jiehsou"></liang>
    <div class="positionBox">
      <dddd></dddd>
    </div>
    
  </div>
</template>

<script>
import  liang  from '@/components/liang.vue'
import  dddd  from '@/components/nihao.vue'
export default {
  name: 'HelloWorld',
  components: {
    liang,
    dddd
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      asd: 'nihoaasdfasdf',
      textData: [
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
        {text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
      ]
    }
  },
  methods: {
    jiehsou(data) {
      this.msg = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.positionBox {
  position: fixed;
  right: 100px;
  top: 10px;
  background: skyblue;
}
</style>
