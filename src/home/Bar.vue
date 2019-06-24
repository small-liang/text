<template>
    <div>
        <!-- <ul style="width: 300px;margin: 0 auto;display: flex;">
            <router-link to="/foo"><li> foo</li></router-link>
            <router-link to="/bar"><li> bar</li></router-link>
            <router-link to="/index"><li> bar</li></router-link>
        </ul> -->
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        {{index}}
        <hr/>
        {{count}}
        {{count}}
        {{count}}
        {{count}}
        <p>bar页面</p>
        <p>bar页面</p>
        <p>bar页面</p>
        <p>bar页面</p>
        <p>bar页面</p>
        <p>bar页面</p>
        <p>bar页面</p>
            <router-link to="/index"><li> bar</li></router-link>

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
        console.log(this.$route.query.index)
        this.index = this.$route.query.index
        this.count = sessionStorage.getItem('conut')
    }   
}
</script>
