const path = require('path')
const webpack = require('webpack') // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')// v15后，需要通过插件引入
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = {
  mode: 'production',
  entry: './packages/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'SrdUiVue', // 导出库名称
    libraryTarget: 'umd', // 通用模块定义
    umdNamedDefine: true // boolean
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  externals: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader' // 生成兼容性前缀
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin()
  ]
}

module.exports = config
