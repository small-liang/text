<template>
   <div class="zhaojiu">
   <ul id="zhao">
        <router-link to='/zhao11'><li>招就11</li></router-link>
    <router-link to='/zhao22'><li>招就22</li></router-link>
   </ul>
     <router-view></router-view>
   </div>
   
</template>
<style >
    #zhao{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

