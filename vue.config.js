module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://10.6.22.171:8080/api',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }