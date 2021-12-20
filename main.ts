import App from './App.vue'
import { createApp } from 'vue'

import('./async').then(mod => {
    console.log(mod);
    
})

createApp(App).mount('#app')