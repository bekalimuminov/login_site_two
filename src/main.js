import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from '/src/router/router.js'
import { createPinia } from "pinia";

const create =  createApp(App)
    create.use(router)
    create.use(createPinia())
    .mount('#app')
