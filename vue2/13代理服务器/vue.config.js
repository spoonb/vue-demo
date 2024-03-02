module.exports = {
  devServer: {
    proxy: {
      '/api/student': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 重写请求路径，将/api开头的请求路径替换为空
        }
      },
      '/api/school': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 重写请求路径，将/api开头的请求路径替换为空
        }
      },
      '/msg': { // 但目标资源在代理服务器的public目录中存在时，直接访问public中的资源
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}