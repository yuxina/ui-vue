const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')// v15后，需要通过插件引入
const md = require('markdown-it')()
const anchor = require('markdown-it-anchor')// 锚点标题超链接
const container = require('markdown-it-container')// 用于创建自定义的块级容器
const slugify = require('transliteration').slugify// 汉字转译为拼音

const config = {
  entry: './examples/main.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules', path.join(__dirname, '../node_modules')
    ],
    extensions: ['.js', '.vue', '.md'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.join(__dirname, '')
    }
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              use: [
                [anchor, {
                  level: 2,
                  slugify: slugify,
                  permalink: true,
                  permalinkBefore: true
                }],
                [container, 'demo', {
                  validate: function (params) {
                    return params.trim().match(/^demo\s+(.*)$/)
                  },
                  render: function (tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                    if (tokens[idx].nesting === 1) {
                      const desc = (m && m.length > 1) ? m[1] : ''// demo后面的文字是描述
                      const content = tokens[idx + 1].content
                      const descHTML = desc ? md.render(desc) : ''// 再次编译描述中的markdown标记
                      // opening tag
                      return `<demo-box>
                              <div slot="eg">${content}</div>
                              <div class="desc" slot="desc">${descHTML}</div>
                              <div class="highlight" slot="highlight">`
                    } else {
                      // closing tag
                      return '</div></demo-box>\n'
                    }
                  }
                }]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html' // 设置生成的html模版
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = config
