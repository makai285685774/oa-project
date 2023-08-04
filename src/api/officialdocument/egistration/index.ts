import request from '/@/utils/request';
/**
 * @name 收文登记api
 */
export function receiptRegisterApi() {
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
				method: 'get',
				params: { ids: data }
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
	}
}
