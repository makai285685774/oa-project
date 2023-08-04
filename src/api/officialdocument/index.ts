import { da } from 'element-plus/es/locale';
import request from '/@/utils/request';
/**
 * @name 角色api
 * @author huyuxuan
 * @method getRoles 获取角色列表
 * @method getRole 获取角色详情
 * @method addRole 新增角色
 * @method editRole 编辑角色
 * @method deleteRole 删除角色
 */
export function officialApi() {
	return {
		// 查询所有信息
		getBacklog: (params: object) => {
			return request({
				url: '/api/officialDoc/findDocByCurrentProcessor',
				method: 'get',
				params
			});
		},
		// 单项查询
		getNameData: (data: object) => {
			return request({
				url: '/api/officialDoc/findDocByCurrentProcessor',
				method: 'get',
				params: data
			});
		},

		// 批量删除
		batchDeleted: (data: object) => {
			return request({
				url: '/api/officialDoc/deleteDoc',
				method: 'delete',
				params: { ids: data }
			});
		},

		// 批量导出
		batchExport: (data: any) => {
			return request({
				url: '/api/officialDoc/batchDownload',
				method: 'post',
				data,
				responseType: 'blob'
			});
		},
		// 批量归档
		theBatchFile: (data: any) => {
			return request({
				url: '/api/officialDoc/update',
				method: 'put',
				params: { ids: data }
			});
		},
		// 查询所有阅件
		getReads: (params: object) => {
			return request({
				url: '/api/officialDoc/readOnlyDoc',
				method: 'get',
				params
			});
		},
		// 查询待办公文
		selectPostIs: (params: object) => {
			return request({
				url: '/api/officialDoc/findDocByCurrentProcessor',
				method: 'get',
				params
			});
		},

		// 发文拟稿 
		queryModel: (params: object) => {
			return request({
				url: '/api/officialDoc/findModel',
				method: 'get',
				params
			});
		},
		// 查询发文拟稿单个文件
		postFile: (params: string) => {
			return request({
				url: '/api/model/getView',
				method: 'get',
				params,
			});
		},

		// 查询发文拟稿单个文件
		postFiles: (params: any) => {
			return request({
				url: '/api/model/findTemplate2',
				method: 'get',
				params,
			});
		},

		// 查询发文拟稿单个文件点击之后
		clickFiles: (data: any) => {
			return request({
				url: '/work/act/create',
				method: 'post',
				data,
			});
		},




	}
}
