import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from 'vue-svg-icon/Icon.vue'; // svg插件
import i18n from './lang'
import ElementUI from 'element-ui';
import '@/assets/style/reset.css' // 重置css样式
import 'element-ui/lib/theme-chalk/index.css';
import './theme/element-#42B983/index.css' // 自定义主题

Vue.config.productionTip = false
Vue.component('icon', Icon);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
