import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: 'Index', component: () => import('/@/views/Index.vue')},
    {path: '/test', name: 'Test', component: () => import('/@/views/Test.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router