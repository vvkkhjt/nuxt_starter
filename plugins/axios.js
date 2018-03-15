import Vue from 'vue'
import axios from 'axios'
import {BASE_URL} from '../config'

let options = {
    withCredentials: true,
}
// The server-side needs a full url to works
options.baseURL = BASE_URL

const server = axios.create(options)

server.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

server.interceptors.response.use(data => {
    return data.data
},error => {
    return Promise.reject(error)
})
/**
 * @method http 发送请求
 * @param { String } method 需要发送的请求类型
 * @param { String } url 发送请求的url
 * @param { Object } params 发送的参数
 * @param { Object } context 服务端发送请求的时候带上context
*/
async function http({method,url,params={},context={}}){
    let result = {}
    try{
        if(process.server){
            result = await server[method](url,(method == 'post' ? params : {params}),{headers:context.req.headers})
        }else{
            result = await server[method](url,(method == 'post' ? params : {params}))
        }
        return Promise.resolve(result)
    }catch(e){
        return Promise.reject(e)
    }
}

Vue.prototype.$http = http
export default http
