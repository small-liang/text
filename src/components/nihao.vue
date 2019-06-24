<template>
    <div>
        <br>
        <hr>
        <p>{`组件而 
            {{ msg }}
            SFDSFSDF`}</p>
        {{ message }}
        <button @click="send">你好</button>
    </div>
</template>
<script>
export default {
    props: ['message'],
    data() {
        return {
            msg : `'啦啦啦
            SDF啦 这是第2个
            组件'`,
            data: {
                code: 200,
                data:[
                    {text:'sadf',time: 'asdf'},
                ],
                msg: '请求成功'
            },
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
        send() {
            this.$emit('listen','哈哈哈哈哈哈')
            
        }
    }
}
</script>
<style scoped>

</style>
