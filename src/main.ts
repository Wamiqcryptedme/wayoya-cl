import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue' // Ensure this matches the filename exactly (case-sensitive on Linux/Vercel)
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
