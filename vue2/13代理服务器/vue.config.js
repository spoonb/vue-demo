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
      }
    }
  }
}