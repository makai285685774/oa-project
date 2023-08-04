import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Session } from '/@/utils/storage';

// import { resetRoute } from '/@/router/index';
// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL as any,
	timeout: 120 * 1000,
	headers: { 'Content-Type': 'application/json' },
});
const logout = async function () {
	Session.clear(); // 清除缓存/token等
	// await resetRoute(); // 删除/重置路由
	ElMessage({ type: 'error', message: '权限过期，请重新登录！' });
	setTimeout(() => {
		window.location.href = ''; // 去登录页
	}, 500);
};
// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么 token

		if (Session.get('token')) {
			(<any>config.headers).common['authorization'] = `${Session.get('token')}`;
		}
		
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		if (response.headers && response.headers.authorization) {
			Session.set('token', response.headers.authorization);
		}
		const res = response.data;
		if (res.code && res.code !== 200 && res.code !== 1 && res.code !== 404) {
			ElMessage({
				type: 'error',
				message: res.message,
			});
			if (res.code == 403) {
				//logout();
			
				return;
			}
			return Promise.reject(service.interceptors.response);
		} else {
			return res;
		}
	},
	(error) => {
		
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else if (error.message.indexOf('401') != -1) {
			ElMessage.error('用户名或密码错误');
		}else {
			if (error.response.data) ElMessage.error('参数错误');
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default service;
