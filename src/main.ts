import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import router from './router/index'

//测试插件
import mockPlugin from '../mock/mockPlugin'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(mockPlugin)
app.mount('#app')