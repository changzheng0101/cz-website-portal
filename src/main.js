import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'


//  引入之后mock才可以用
import '/mock/user'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
