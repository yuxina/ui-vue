import Vue from "vue";
import App from "./App.vue";
import demoBox from './components/demoBox.vue';
// 导入组件库 SRD-UI-CL
import SrdUiVue from '../packages/index';
import '../packages/theme/index.scss';
import 'highlight.js/styles/color-brewer.css';
// 注册组件库
Vue.use(SrdUiVue);

Vue.component('demo-box', demoBox);

// 导入路由规则
import router from "./router";


//创建vue实例
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');