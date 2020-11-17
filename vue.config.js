const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
    // 打包分析
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ])
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/css/global.scss";',
      },
    },
  },
  devServer: {
    // 配置跨域
    proxy: {
      '/api': {
        target: 'https://test.xxx.com', // 接口的域名
        // ws: true, // 是否启用websockets
        changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
}
