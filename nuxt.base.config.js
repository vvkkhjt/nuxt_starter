module.exports = {
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
    mode: 'spa',
    //引入nuxt/axios插件 proxy设置代理
    modules: ['@nuxtjs/axios'],
    css: ['~/assets/css/main.css','element-ui/lib/theme-chalk/index.css'],
    build: {
        //依赖的第三方模块
        vendor: ['axios','element-ui']
    },
    //vue使用的第三方库 vue use之类的
    plugins: [
        { src: '~/plugins/axios', ssr: false},
        { src: '~/plugins/element-ui', ssr: true},
        { src: '~/plugins/localStorage', ssr: false },
    ],
}
