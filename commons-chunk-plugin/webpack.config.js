const webpack = require('webpack')
const path = require('path')

/**
 * demo1对应的webpack配置:
 * 单入口文件情况下，引用多次的文件并不会被抽到公共文件里
 */
// const config = {
//   entry: './demo1/index.js',
//   output: {
//     path: path.resolve(__dirname, './dist/demo1'),
//     filename: '[name].js'
//   },
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'common',
//       minChunks: 2
//     })
//   ]
// }

/**
 * demo2 对应的webpack配置：
 * 多入口文件情况下，引用多次的文件会被抽到公共文件里
 */
// const config = {
//   entry:  {
//     index: './demo2/index',
//     index2: './demo2/index2'
//   },
//   output: {
//     path: path.resolve(__dirname, './dist/demo2'),
//     filename: '[name].js'
//   },
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'common',
//       minChunks: 2
//     })
//   ]
// }

/**
 * demo3 对应的 webpack配置：
 * 公共业务代码和第三方库代码分开打包
 */
const config = {
  entry:  {
    index: './demo3/index',
    index2: './demo3/index2',
    lib1: ['react'],
    lib2: ['echarts']
  },
  output: {
    path: path.resolve(__dirname, './dist/demo3'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common','lib1', 'lib2'],
      minChunks: 2
    })
  ]
}

/**
 * demo4 对应的 webpack配置：
 * CommonsChunkPlugin的minChunks字段
 */
const config = {
  entry:  {
    index: './demo4/index',
    index2: './demo4/index2',
    lib1: ['react'],
    lib2: ['echarts']
  },
  output: {
    path: path.resolve(__dirname, './dist/demo4'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common','lib1', 'lib2'],
      minChunks: Infinity
      // minChunks: 2
    })
  ]
}

module.exports = config