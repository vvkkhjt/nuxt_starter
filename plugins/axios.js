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
