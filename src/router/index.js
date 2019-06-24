import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/jz.vue'

import shouye from '@/home/shouye.vue'
import zoujin from '@/home/zoujin.vue'
import zhaojiu from '@/home/zhaojiu.vue'
import zhao11 from '@/home/zhao11.vue'
import zhao22 from '@/home/zhao22.vue'
import zhao111 from '@/components/ch.vue'
import zhao222 from '@/components/ch.1.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/shouye',
      component: home,
      children: [
        { path: '/shouye', name: 'shouye', component: shouye },
        { path: '/zoujin', name: 'zoujin', component: zoujin },
        { path: '/zhaojiu', 
          name: 'zhaojiu', 
          component: zhaojiu,
          // redirect: '/zhaojiu111',
          children: [
            { path: '/zhao11', 
              name: 'zhao11', 
              component: zhao11,
              children: [
                { path: '/zhaojiu111', name: 'zhao22', component: zhao222 },
                { path: '/zhaojiu222', name: 'zhao22', component: zhao111 },
              ] },
            { path: '/zhao22', name: 'zhao22', component: zhao22 },
          ]
        },

      ]
    },
    
    
  ]
})
