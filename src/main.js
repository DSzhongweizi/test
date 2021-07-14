import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import { ElUpload, ElIcon, ElDialog } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'


const app = createApp(App)
app.component(ElUpload.name, ElUpload);
app.component(ElIcon.name, ElIcon);
app.component(ElDialog.name, ElDialog);
app.use(router).use(store).mount('#app')
