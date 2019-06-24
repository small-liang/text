<template>
    <ul class="tu">3333
        <li v-for="(item,index) in shu" :key="index"><span>{{item.text}}</span><span>{{item.time}}</span></li> 
    </ul>
</template>
<script>
export default {
    name:'tu',
    data(){
        return{
            shu:[
                {text: '我校在工作结',time: '2018-10-25'},
				{text: '我校西、湖南、新疆高招录取工作结束',time: '2018-10-25'},
				{text: '我校在浙江、四川、重庆、陕西、湖南、新疆高招录取工作束',time: '2018-10-25'},
				{text: '我校在浙、湖南、湖南、新疆高招录取工作结束',time: '2018-10-25'},
				{text: '我校在浙江、四川、重庆、陕西、湖南、新高招录取工作结束',time: '2018-10-25'},
				{text: '我校在浙西、湖南、新疆高招取工作结束',time: '2018-10-25'},
            ]
        }
    }
}
</script>
<style scoped>
       
        li{
            width: 1000px;
            list-style: none;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
        }
</style>

