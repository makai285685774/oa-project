import request from '/@/utils/request';
import pickKeys from '../pickKeys';
export default function useDic() {
	return {
		getDicList(params: object) {
			return request({
				url: '/api/code/',
				params: params,
			});
		},
		createDic(data: object) {
			return request({
				url: '/api/code/',
				method: 'post',
				data: data,
			});
		},
		updateDic(data: any) {
			return request({
				url: `/api/code/${data.id}`,
				method: 'put',
				data: pickKeys(data, 'dicKeys'),
			});
		},

		removeDic(id: string) {
			return request({
				url: `/api/code/${id}`,
				method: 'delete',
			});
		},

		fetchDic(id: string) {
			return request({
				url: `/api/code/${id}`,
			});
		},
		categoryDic(category: string) {
			return request({
				url: `/api/code/category/${category}`,
			});
		},
	};
}
