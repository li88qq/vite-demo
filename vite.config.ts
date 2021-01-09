import * as path from 'path'
import {loadDev} from './build/utils'

//获取当前环境
loadDev()

module.exports  = {
    alias: {
        '/@/': path.resolve(__dirname, './src')
    },
    port: process.env.VITE_PORT,

    cssPreprocessOptions: {
        less: {
            modifyVars: {
                '@my-color': 'red',
                '@height-100': '100%'
            },
            javascriptEnabled: true,
        },
    },
    optimizeDeps:{
      include:['mockjs']
    },
    proxy: {
        // string shorthand
        // '/api': 'http://127.0.0.1:8080'
        '/api': {
            target: 'http://www.li88qq.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '/api')
        }
    }
};