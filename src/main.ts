import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';

import 'element-plus/dist/index.css';
import "/@/styles/global.scss";
import '/@/assets/icon/iconfont.css'
import '/@/theme/index.scss';
import { checkAuth } from '/@/utils/checkAuth';
import mitt from 'mitt';
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from 'element-plus';
import vant from 'vant';
import 'vant/lib/index.css'

//挂载
const app = createApp(App);
const modules = import.meta.globEager('./components/form-render/container-item/*.vue')
for (const path in modules) {
	let cname = modules[path].default.name
	app.component(cname, modules[path].default)
}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
if (process.env.NODE_ENV !== 'development') {
	console.log = function () { }
	console.error = function () { }
}
// app.component('draggable', draggable)
directive(app);
other.elSvg(app);
app.use(router).use(store, key).use(vant).use(ElementPlus, { i18n: i18n.global.t }).use(i18n).mount('#app');
app.config.globalProperties.checkAuth = checkAuth;
app.config.globalProperties.mittBus = mitt();
