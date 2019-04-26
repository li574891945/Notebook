import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/sqDemoOne',
            name: 'sqDemoOne',
            component: () => import('./views/sqDemo/sqDemoOne.vue')
        },
        {
            path: '/sqDemoTwo',
            name: 'sqDemoTwo',
            component: () => import('./views/sqDemo/sqDemoTwo.vue')
        },
        {
            path: '/sqDemoThree',
            name: 'sqDemoThree',
            component: () => import('./views/sqDemo/sqDemoThree.vue')
        },
        {
            path: '/sqDemoFour',
            name: 'sqDemoFour',
            component: () => import('./views/sqDemo/sqDemoFour.vue')
        },
        {
            path: '/center',
            name: 'center',
            component: () => import('./views/center.vue')
        }
    ]
})
