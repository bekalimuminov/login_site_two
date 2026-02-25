import { createRouter , createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../pages/login.vue";

import { auth } from "../stores/auth.js";
import About from "../pages/About.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = auth()

    if (!store.isAuthenticated && to.meta.requiresAuth) {
        next({ name: 'Login' })
    }
    else if (store.isAuthenticated && to.name === 'Login') {
        next({ name: 'Home' })
    }
    else {
        next()
    }
})