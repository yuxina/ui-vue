## 项目结构说明

│  .babelrc
│  .eslintignore
│  .eslintrc
│  .gitignore
│  gulpfile.js（导出theme样式配置文件）
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.md
│  webpack.common.js （webpack基础配置文件)
│  webpack.dev.js（webpack示例-开发配置文件）
│  webpack.lib.js（webpack导出库配置文件）
│  webpack.prod.js（webpack示例-生产配置文件）
│  
├─examples（示例网站）
│  │  app.vue
│  │  index.html 
│  │  main.js （入口）
│  │  navData.js（目录导航数据）
│  │  router.js（路由规则文件）
│  │  
│  ├─assets（静态资源）
│  │  └─styles
│  │          base.css（基础样式）
│  │          docs.css
│  │          
│  ├─components 组件
│  │      demoBox.vue
│  │      footer.vue（尾部）
│  │      header.vue（头部）
│  │      nav.vue（导航栏目）
│  │      
│  ├─docs 文档
│  │      button.md
│  │      installation.md
│  │      
│  └─views 页面
│          component.vue（组件页）
│          home.vue（首页）
│          
├─node_modules（依赖包）
└─packages（组件模块）
​    │  index.js 
​    │  
​    ├─button（按钮组件）
​    │      button.vue
​    │      index.js
​    │      
​    └─theme（组件主题样式）
​        │  button.scss
​        │  index.scss
​        │  
​        └─common（公共样式）
​                var.scss（变量样式）





开发中......，目录及相关文件会有更新  


## 项目开发规范

##### 文件及文件夹命名

`驼峰式`，首字母小写第二个英文单词首字母大写

##### HTML

- 在 HTML 代码中无特殊需求不应在行内添加样式
- 在页面模块之间适当写注释说明
- 所有 `class` 采用烤串语义化命名方式: `text-red`
- 有关组件样式，统一使用前缀 `st-`命名

##### Sass
- 变量命名，中划线连接， $color-theme，首个单词来标识一组变量模块

#### # 🙂每天下班前需提交代码至 `gitlab`会不定期 `review`, 注意代码规范🙂