const webpack = require('webpack') // 用于访问内置插件
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ]
})
