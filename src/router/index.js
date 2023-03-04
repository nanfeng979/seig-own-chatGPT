import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chatgptIndex from '@/components/chatgptIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'chatgptIndex',
      component: chatgptIndex
    }
  ]
})
