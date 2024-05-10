const path = require('path')
const WebpackBar = require('webpackbar')
const version = new Date().getTime()
const assetsDir = 'static'
module.exports = {
  publicPath: '/',
  assetsDir,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8099,
  },
  outputDir: 'dist', // 打包的目录,打包需修改对应的项目

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new WebpackBar({
        name: 'HB-Kanban',
      }),
    ],

    // 打包编译后的 文件名称  【模块名称.版本号.时间戳】
    output: {
      filename: assetsDir + `/js/[name].${version}.js`,
      chunkFilename: assetsDir + `/js/[name].${version}.js`,
    },
  },
}
