module.exports = {
    env: {
        PORT: 4000
    },
    minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: false,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: false,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortAttributes: true,
        sortClassName: false,
        trimCustomFragments: true,
        useShortDoctype: true
    },
    cache: true,
    loading: {
        color: '#409EFF',
        failedColor: 'red'
    },
    //配置路由权鉴
    // router: {
        // middleware: 'auth'
    // },
    head: {
        title: '',
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        //配置icon
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    //配置后台渲染或者spa模式
    mode: 'universal',
    //引入nuxt/axios插件 proxy设置代理
    modules: ['@nuxtjs/axios'],
    axios: {
        //执行代理
        proxy: true,
        //请求带cookie
        credentials: true,
        //nuxt上下文中，将客户端请求标头设置为axios默认请求标头。这对于在服务器端进行需要基于Cookie的验证的请求很有用。也有助于在SSR和客户端代码中提出一致的请求。
        proxyHeaders: true,
        //在服务器端使用和预先创建请求的基本URL
        // baseURL: '',
        //在客户端使用和预先创建请求的基本URL
        // browserBaseURL: '',
        //自动拦截失败的请求，并重新请求次数,设置true默认3次,retries设置次数
        // retry:true,
        // retry: { retries: 3 },
    },
    //设置代理
    proxy:  {
        // '/api': {
        //     target: 'http://sso.dev.digi-sky.com',
        //     changeOrigin: true,
        //     pathRewrite: {
        //     '^/api' : '/api'
        //     }
        // }
    },
    css: ['~/assets/css/main.css','element-ui/lib/theme-chalk/index.css'],
    build: {
        vendor: ['axios','element-ui']
    },
    plugins: [{src:'~/plugins/axios',ssr: false},'~/plugins/element-ui'],
}
