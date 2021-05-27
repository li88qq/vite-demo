import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {ConfigEnv, loadEnv, UserConfig} from 'vite'

function pathResolve(dir) {
    return resolve(process.cwd(), '.', dir);
}

export default ({command, mode}: ConfigEnv): UserConfig => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    const port = parseInt(env['VITE_PORT'])
    return {
        plugins: [vue()],
        server: {
            port: port,
            proxy: {
                '/api': {
                    target: 'http://www.li88qq.com',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '/api')
                }
            }
        },
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
            ]
        },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        '@my-color': 'red',
                        '@height-100': '100%'
                    },
                    javascriptEnabled: true,
                },
            },
        },
        optimizeDeps: {
            include: ['mockjs']
        }
    }
}