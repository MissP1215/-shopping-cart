import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Listlist from '@/views/listlist.vue'
import Shop from '@/views/shop.vue'
import Address from '@/views/address.vue'

Vue.use(Router)

export default new Router({
    routes: [
		{
            path: '/',
            name: 'Hello',
            redirect: '/shop'
        },
        {
            path: '/shop',
            name: '购物车',
            component: Shop
        },
        {
          path: '/address',
          name: '配送地址',
          component: Address
      }
    ]
})
