import './registerServiceWorker';

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.scss';

import { Loader } from '@/directives/Loader';
import { Logger } from '@/plugins/Logger';

createApp(App).use(store).use(router).use(ElementPlus).directive('loader', Loader).use(Logger).mount('#app');
