import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//import VueSession from 'vue-session'
//import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
if (localStorage.getItem("tema") === null) {
    sessionStorage.setItem("tema","'../assets/clar.css'")
}
else if (localStorage.getItem("tema") =="'../assets/clar.css'" )
{
    require('@/assets/clar.css')
}
else if (localStorage.getItem("tema") =="'../assets/obscur.css'" )
{
    require('@/assets/obscur.css')
}

app.mount('#app')
