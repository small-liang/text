<template>
    <div>
        <p>Foo页面</p>
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            index : null,
            count : null,
        }
    },
    created() {
        console.log(this.$route.params.index)
        this.index = this.$route.params.index
    }   
}
</script>
<style scoped>

</style>
