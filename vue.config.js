// 解决跨域问题 ，数据反向代理 
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://m.maoyan.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                headers: {
                    'Referer': 'http://m.maoyan.com',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            }
        }
    },

}

