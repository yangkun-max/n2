import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/index',
    name: 'index',
    component: ()=> import("@/packages/loading/index.vue")
  },
	{
    path: '/drag',
    name: 'drag',
    component: ()=> import("@/packages/drag/index.vue")
  },
  {
    path: '/i',
    name: 'index',
    component: ()=> import("@/packages/ss.vue")
  }
]

export default new Router({
  routes: routes
})
