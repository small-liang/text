<template>
    <div class="shi">
        <ul style="width: 300px;margin: 0 auto;display: flex;">

            <!-- <router-link to="/bar"><li> bar</li></router-link> -->
            <router-link to="/foo">
                <a @click="sendTO"><li> foo</li></a>
            </router-link>
            <router-link to="/bar">
                <a @click="sendTO1"><li> barrr</li></a>
            </router-link>
            <router-link to="/index"><li> bar</li></router-link>
        </ul>
        
        
        <router-view></router-view>
        <!-- <ul class="ul1">
            <li  v-for="(item,index) in list"  :key="item.name" @click="change(index)">
                {{item.name}}
            </li>
           
        </ul>
        <tupian v-show="status1"></tupian>
        <tupian1 v-show="status2"></tupian1>
        <tupian2 v-show="status3"></tupian2> -->

    </div>
</template>
<script>
import  tupian  from '@/components/tupian.vue'
import  tupian1  from '@/components/tupian.1.vue'
import  tupian2  from '@/components/tupian.2.vue'
import $ from 'jquery'

export default {
    name:'shi',
    components:{
        tupian,
        tupian1,
        tupian2
    },
    data(){
        return{
            value2: [],
            list:[
            {name:'首页'},
            {name:'招生'},
            {name:'简章'}
            ],
            classStatus : 0,
            isname: 'tupian',
            status1: true,
            status2: false,
            status3: false,
        }
    },
    methods:{
        sendTO() {
            // console.log(this.$route.query.index)
            this.$router.push({'name': 'foo',params: {index: 1}})
        },
        sendTO1() {
            // console.log(this.$route.query.index)
            this.$router.push({'name': 'bar',query: {index: 50}})
            sessionStorage.setItem('conut','1000000000')
            
        },
        consoleF() {
            console.log(this.value2)
        },
        change(id){
            this.classStatus  = id
            console.log(this.consoleF(),'adsfasfd')
            var arr = document.getElementsByClassName('ul1')[0].getElementsByTagName('li')
            for(let i = 0 ; i< arr.length; i++) {
                arr[i].style.background = "#fff"
            }
            arr[id].style.background = 'red'
            if (id === 0) {
                // document.getElementsByClassName('name0')[0].style.background="red"
                this.status1 = true
                this.status2 = false
                this.status3 = false
            }
            if (id === 1) {
                this.status1 = false
                this.status2 = true
                this.status3 = false
            }
            if (id === 2) {
                this.status1 = false
                this.status2 = false
                this.status3 = true
            }
        }
    }
}
</script>


<style >
.el-tabs__item.is-active {
    color: skyblue ;
    background: skyblue;
}
.router-link-active {
    background: #000;
    color: #fff;

}

    .ul1{
        display:flex;
        justify-content: space-between;
        width: 1000px;
        margin: 20px auto;
        background: yellowgreen
    }
    li{
      width: 100px;
      border: 1px dashed red ;

    }
    .active {
        background: red;
    }
    .active1 {
        background: blue;
    }
    .active2 {
        background: yellow;
    }
</style>
