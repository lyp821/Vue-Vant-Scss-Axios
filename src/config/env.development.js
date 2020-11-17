// 本地环境配置
module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'http://localhost:9018', // 项目地址
  baseApi: 'https://test.xxx.com/api', // 本地api请求地址
  APPID: 'xxx',
  APPSECRET: 'xxx',
}

// 根据环境不同引入不同baseApi地址
// import { baseApi } from '@/config'
// console.log(baseApi)
