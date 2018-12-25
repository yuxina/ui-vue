import Vue from 'vue'
import Router from 'vue-router'
// 路由组件
import Home from './views/home.vue'
import Component from './views/component.vue'
import Installation from './docs/installation.md'
import Button from './docs/button.md'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      component: Component,
      children: [
        {
          path: 'installation',
          name: 'installation',
          component: Installation
        },
        {
          path: 'button',
          name: 'button',
          component: Button
        }
      ],
      redirect: '/components/installation'
      // component: r => require.ensure([], () => r(require("./docs/button.md")))
    }
  ]
})
