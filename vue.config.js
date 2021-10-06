const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    devServer: {
        host: 'localhost',
        port: 8888,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9001/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // lintOnSave: false
    // publicPath: '/app',
    // outputDir: 'dist',           构建输出目录
    // assetPath: 'static',         静态资源目录 (js, css, img, fonts)
    // indexPath: 'index.html',
    // filenameHashing: true,
    productionSourceMap: false,// 打包不显示源码,是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}

