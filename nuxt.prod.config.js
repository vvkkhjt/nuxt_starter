const merge = require('webpack-merge')
const baseConfig = require('./nuxt.base.config')

module.exports = merge(baseConfig,{
    //打包的文件路径
    generate: {
        dir: './dist/home',
        interval: 2,
        retry: { retries: 1 },
    },
    axios: {
        credentials: true,
        baseURL: 'http://sso.dev.digi-sky.com'
    },
    //引入nuxt/component-cache 缓存组件提高性能
    // modules: [['@nuxtjs/component-cache', {
    //     max: 10000,
    //     maxAge: 1000 * 60 * 60
    // }]],
})
