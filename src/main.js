import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
const app = createApp(App)
app.use(router)
app.use(Oruga)
app.mount('#app')
// # sourceMappingURL=main.js.map
