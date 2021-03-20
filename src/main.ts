import './registerServiceWorker';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './styles/index.scss';
import 'element-plus/lib/theme-chalk/index.css';

import { Loader } from '@/directives/Loader';
import { Logger } from '@/plugins/Logger';

createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus).directive('loader', Loader).use(Logger).mount('#app');
