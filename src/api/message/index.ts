import request from '/@/utils/request';
export default function notice() {
	return {
		getMessage(data: any) {
			return request({
				url: '/api/notice/',
				method: 'get',
				params: data
			});
		},
		// 获取下拉框表格数据
		getList(data: object) {
			return request({
				url: '/api/notice/',
				params: data
			})
		},


		getReminder(id: string) {
			return request({
				url: `/api/notice/${id}`,
				method: 'get',
				params: id,
			});
		},
		deleteReminder(id: string) {
			return request({
				url: `/api/notice/${id}`,
				method: 'delete',
				// params: id,
			});
		},
		addMessage(data: any) {
			return request({
				url: '/api/notice/',
				method: 'post',
				data
			});
		},
		//批量发送消息提醒
		batchAddMsg(data: any) {
			return request({
				url: '/api/notice/batchNotice',
				method: 'post',
				data
			});
		},
		changeReminder(id: string, data: string) {
			return request({
				url: `/api/notice/${id}`,
				method: 'put',
				data,
			});
		},

		readAll(id:string){
			return request({
				url: `/api/notice/allKnow/${id}`,
				method:'put'
			});
		}
	};
}
