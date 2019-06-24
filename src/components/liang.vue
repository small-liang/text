<template>
    <div>
        <p>你好 {{ msg }}</p>
        {{ message }}
        <button @click="send">你好</button>
    </div>
</template>
<script>
export default {
    props: ['message'],
    data() {
        return {
            msg : '啦啦啦啦 这是第一个组件'
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
