// import Vue from 'vue'
// import axios from 'axios'
// import {BASE_URL} from '../config'

// let options = {
//     withCredentials: true,
// }
// // The server-side needs a full url to works
// options.baseURL = BASE_URL

// const server = axios.create(options)

// server.interceptors.request.use(config => {
//     return config
// }, error => {
//     return Promise.reject(error)
// })

// server.interceptors.response.use(data => {
//     return data.data
// },error => {
//     return Promise.reject(error)
// })
// /**
//  * @method http 发送请求
//  * @param { String } method 需要发送的请求类型
//  * @param { String } url 发送请求的url
//  * @param { Object } params 发送的参数
//  * @param { Object } context 服务端发送请求的时候带上context
// */
// async function http({method,url,params={},context={}}){
//     let result = {}
//     try{
//         if(process.server){
//             result = await server[method](url,(method == 'post' ? params : {params}),{headers:context.req.headers})
//         }else{
//             result = await server[method](url,(method == 'post' ? params : {params}))
//         }
//         return Promise.resolve(result)
//     }catch(e){
//         return Promise.reject(e)
//     }
// }

// Vue.prototype.$http = http
// export default http

import qs from 'qs'
import { Message, MessageBox } from 'element-ui';

export default function ({ $axios, headers, redirect }) {
    //设置headers
    // headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    $axios.onRequest((config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
        config.data = qs.stringify(config.data)
    })

    $axios.onResponse(response => {
        const res = response.data;
        if (res.code < 0) {
            // -211:无效的uid或token; -111:未登录;
            if (res.code === -111) {
                if(process.server){
                    redirect('/login')
                }else{
                    MessageBox.alert('登录验证失效，请重新登录', '消息提示', {
                        confirmButtonText: '确认',
                        type: 'warning'
                    }).then(() => {
                        sessionStorage.removeItem('user');
                        window.location.href = '/login';
                    }).catch(() => {
                        sessionStorage.removeItem('user');
                        location.reload();
                    });
                }
            }else{
                Message({
                    message: res.msg,
                    type: 'error',
                    duration: 2 * 1000
                });
                return res;
            }
        } else {
            return response;
        }
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        Message({
            message: `${code}:${error}`,
            type: 'error',
            duration: 4 * 1000
        });
    })
}
