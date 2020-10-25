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

const config = {
  entry:  {
    index: './demo2/index',
    index2: './demo2/index'
  },
  output: {
    path: path.resolve(__dirname, './dist/demo2'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ]
}

module.exports = config