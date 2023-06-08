import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//import VueSession from 'vue-session'
//import axios from 'axios'

const app = createApp(App)

app.use(createPinia())

if (sessionStorage.getItem("tema")==null)
{
  sessionStorage.setItem("tema", '0')
}
else{
    console.log("Tema "+sessionStorage.getItem("tema")) 
}

console.log()

app.mount('#app')
