// 导入组件，组件必须声明 name
import StButton from "./button.vue";
// 为组件提供 install 安装方法，供按需引入
StButton.install = function(Vue) {
  Vue.component(StButton.name, StButton);
};
// 默认导出组件
export default StButton;
