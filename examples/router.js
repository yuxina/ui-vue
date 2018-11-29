import Vue from "vue";
import Router from "vue-router";
// 路由组件
import Home from "./views/Home.vue";
import Button from "./docs/button.md";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/button",
      name: "button",
      component: Button
      //component: r => require.ensure([], () => r(require("./docs/button.md")))
    }
  ]
});