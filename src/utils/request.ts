import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { ElMessage } from 'element-plus';

// 配置新建一个 axios 实例
export const noAuthService = axios.create({
    baseURL: window.__env__.VITE_API_URL as any,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
});

// axios 默认实例
export const axiosInstance: AxiosInstance = axios;

/**
 * 参数处理
 * @param {*} params 参数
 */
export function tansParams(params: any) {
    let result = '';
    for (const propName of Object.keys(params)) {
        const value = params[propName];
        var part = encodeURIComponent(propName) + '=';
        if (value !== null && value !== '' && typeof value !== 'undefined') {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + '=';
                        result += subPart + encodeURIComponent(value[key]) + '&';
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + '&';
            }
        }
    }
    return result;
}

// 添加请求拦截器
noAuthService.interceptors.request.use(
    (config) => {
        // 获取当前语言
        const currentLang = localStorage.getItem('lang') || 'zh-CN';
        
        // 处理URL参数
        if (config.url) {
            const url = new URL(config.url, 'http://dummy.com');
            
            // 添加语言参数
            url.searchParams.set('locale', currentLang);
            
            // 更新config.url
            config.url = url.pathname + url.search;
        }
        
        // get请求映射params参数
        if (config.method?.toLowerCase() === 'get' && config.data) {
            let url = config.url + '&' + tansParams(config.data);
            url = url.slice(0, -1);
            config.data = {};
            config.url = url;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
noAuthService.interceptors.response.use(
    (res) => {
        // 获取状态码和返回数据
        const status = res.status;
        const serve = res.data;

        // 处理未进行规范化处理的
        if (status >= 400) {
            throw new Error(res.statusText || 'Request Error.');
        }

        // 处理规范化结果错误
        if (serve && serve.hasOwnProperty('errors') && serve.errors) {
            throw new Error(JSON.stringify(serve.errors || 'Request Error.'));
        }

        // 响应拦截及自定义处理
        if (serve.code === undefined) {
            return Promise.resolve(res);
        } else if (serve.code !== 200) {
            let message;
            // 判断 serve.message 是否为对象
            if (serve.message && typeof serve.message == 'object') {
                message = JSON.stringify(serve.message);
            } else {
                message = serve.message;
            }
            ElMessage.error(message);
            throw new Error(message);
        }

        return serve;
    },
    (error) => {
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') != -1) {
            ElMessage.error('网络超时');
        } else if (error.message == 'Network Error') {
            ElMessage.error('网络连接错误');
        } else {
            if (error.response?.data) {
                ElMessage.error(error.response.statusText);
            } else {
                ElMessage.error('接口路径找不到');
            }
        }

        return Promise.reject(error);
    }
);

// 导出 axios 实例
export default noAuthService; 