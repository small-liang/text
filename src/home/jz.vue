<template>
   <div class="liyou">
        <ul class="tou">
           <router-link to="/shouye"><li>首页</li></router-link>
           <router-link to="/zoujin"><li>走进校园</li></router-link>
           <router-link to="/zhaojiu"><li>招就信息</li></router-link>
      
    </ul>
    <router-view></router-view>
   </div>
   
</template>
<style>
    ul{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    li{
        width: 200px;
        
    }
    .router-link-active{
        background:green;
        font-size: 20px;
    }
</style>



