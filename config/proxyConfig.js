module.exports = {
  proxy: {
    '/webapi': {    //将www.exaple.com印射为/apis
      target: 'http://10.10.111.65:8100',  // 接口域名
      changeOrigin: true  //是否跨域
    }
  }
}
