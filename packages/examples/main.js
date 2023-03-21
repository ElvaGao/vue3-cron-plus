import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import vue3CronPlus from '../vue3-cron-plus/index'

const app = createApp(App)

app.use(ElementPlus, { locale })

app.use(vue3CronPlus)

app.mount('#app')