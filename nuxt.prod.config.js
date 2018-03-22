const merge = require('webpack-merge')
const baseConfig = require('./nuxt.base.config')

module.exports = merge(baseConfig,{
    axios: {
        credentials: true,
        baseURL: 'http://sso.dev.digi-sky.com'
    }
})
