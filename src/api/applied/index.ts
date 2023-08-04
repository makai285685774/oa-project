import request from '/@/utils/request';
/**
 * @name 成果api
 * @author huyuxuan
 * @method getApplied 获取科技成果列表
 * @method getAppliedDetail 获取某个科技成果详情
 * @method addApplied 新增科技成果概况信息
 * @method updateApplied 修改科技成果概况信息
 * @method delApplied 删除科技成果概况信息
 */
export function appliedApi() {
	return {
		// 获取科技成果列表
		getApplied: (params?: object) => {
			return request({
				url: '/api/achievement/',
				method: 'get',
				params,
			});
		},
		// 获取某个科技成果详情
		getAppliedDetail: (id: string) => {
			return request({
				url: `/api/achievement/${id}`,
				method: 'get',
			});
		},
		// 新增科技成果概况信息
		addApplied: (data: object) => {
			return request({
				url: '/api/achievement/',
				method: 'post',
				data,
			});
		},
		// 删除科技成果概况信息
		delApplied: (id: string) => {
			return request({
				url: `/api/achievement/${id}`,
				method: 'delete',
			});
		},
		// 修改科技成果概况信息
		updateApplied: (id: any, data: object) => {
			return request({
				url: `/api/achievement/${id}`,
				method: 'put',
				data,
			});
		},
		// 保存科技成果评价信息
		saveAppliedEvaluate: (id: any, data: object) => {
			return request({
				url: `/api/achievement/evaluate/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果评价信息
		getAppliedEvaluate: (id: any) => {
			return request({
				url: `/api/achievement/evaluate/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果评价信息
		delAppliedEvaluate: (id: any) => {
			return request({
				url: `/api/achievement/evaluate/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果立项信息
		saveAppliedProject: (id: any, data: object) => {
			return request({
				url: `/api/achievement/project/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果立项信息
		getAppliedProject: (id: any) => {
			return request({
				url: `/api/achievement/project/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果立项信息
		delAppliedProject: (id: any) => {
			return request({
				url: `/api/achievement/project/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果知识产权信息
		saveAppliedProperty: (id: any, data: object) => {
			return request({
				url: `/api/achievement/property/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果知识产权信息
		getAppliedProperty: (id: any) => {
			return request({
				url: `/api/achievement/property/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果知识产权信息
		delAppliedProperty: (id: any) => {
			return request({
				url: `/api/achievement/property/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果转化需求信息
		saveAppliedDemand: (id: any, data: object) => {
			return request({
				url: `/api/achievement/demand/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果转化需求信息
		getAppliedDemand: (id: any) => {
			return request({
				url: `/api/achievement/demand/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果转化需求信息
		delAppliedDemand: (id: any) => {
			return request({
				url: `/api/achievement/demand/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果完成单位情况信息
		saveAppliedOrg: (id: any, data: object) => {
			return request({
				url: `/api/achievement/organization/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果完成单位情况信息
		getAppliedOrg: (id: any) => {
			return request({
				url: `/api/achievement/organization/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果完成单位情况信息
		delAppliedOrg: (id: any) => {
			return request({
				url: `/api/achievement/organization/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果转移转化情况信息、
		saveAppliedConversion: (id: any, data: object) => {
			return request({
				url: `/api/achievement/conversion/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果转移转化情况信息
		getAppliedConversion: (id: any) => {
			return request({
				url: `/api/achievement/conversion/${id}`,
				method: 'get',
			});
		},
		// 删除科技成果转移转化情况信息
		delAppliedConversion: (id: any) => {
			return request({
				url: `/api/achievement/conversion/${id}`,
				method: 'delete',
			});
		},
		// 保存科技成果成果完成人员名单
		saveAppliedPerson: (id: any, data: object) => {
			return request({
				url: `/api/achievement/completeperson/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取科技成果成果完成人员名单
		getAppliedPerson: (id: any) => {
			return request({
				url: `/api/achievement/completeperson/${id}`,
				method: 'get',
			});
		},
		// 修改科技成果成果完成人员名单
		updateAppliedPerson: (id: any, data: object) => {
			return request({
				url: `/api/achievement/completeperson/${id}`,
				method: 'put',
				data,
			});
		},
		// 删除科技成果成果完成人员名单
		delAppliedPerson: (id: any) => {
			return request({
				url: `/api/achievement/completeperson/${id}`,
				method: 'delete',
			});
		},
		// 获取科技成果成果完成人员名单列表
		getAppliedPersonList: (id: any) => {
			return request({
				url: `/api/achievement/completeperson/list/${id}`,
				method: 'get',
			});
		},
		// 保存评价委员会名单
		saveAppliedCommittee: (id: any, data: object) => {
			return request({
				url: `/api/achievement/evaluationcommittee/${id}`,
				method: 'post',
				data,
			});
		},
		// 获取评价委员会名单
		getAppliedCommittee: (id: any) => {
			return request({
				url: `/api/achievement/evaluationcommittee/${id}`,
				method: 'get',
			});
		},
		// 删除评价委员会名单
		delAppliedCommittee: (id: any) => {
			return request({
				url: `/api/achievement/evaluationcommittee/${id}`,
				method: 'delete',
			});
		},
		// 修改评价委员会名单
		updateAppliedCommittee: (id: any, data: object) => {
			return request({
				url: `/api/achievement/evaluationcommittee/${id}`,
				method: 'put',
				data,
			});
		},
		// 获取评价委员会名单列表
		getAppliedCommitteeList: (id: any) => {
			return request({
				url: `/api/achievement/evaluationcommittee/list/${id}`,
				method: 'get',
			});
		},
		// 科技成果等级材料保存
		saveAppliedMaterial: (id: any, data: object) => {
			return request({
				url: `/api/achievement/registrationmaterials/${id}`,
				method: 'post',
				data,
			});
		},
		// 科技成果等级材料获取
		getAppliedMaterial: (id: any) => {
			return request({
				url: `/api/achievement/registrationmaterials/${id}`,
				method: 'get',
			});
		},
		// 科技成果等级材料删除
		delAppliedMaterial: (id: any) => {
			return request({
				url: `/api/achievement/registrationmaterials/${id}`,
				method: 'delete',
			});
		},
		// 科技成果等级材料修改
		updateAppliedMaterial: (id: any, data: object) => {
			return request({
				url: `/api/achievement/registrationmaterials/${id}`,
				method: 'put',
				data,
			});
		},
		// 科技成果等级材料列表
		getAppliedMaterialList: (id: any) => {
			return request({
				url: `/api/achievement/registrationmaterials/list/${id}`,
				method: 'get',
			});
		},
		// 上传文件
		uploadFile: (data: object) => {
			return request({
				url: `/api/file/upload`,
				method: 'post',
				data,
				headers:{
					'Content-Type': 'multipart/form-data'
				}
			});
		},

		//查询文件信息

		getFileInfo:(ids:string)=>{
			return request({
				url: `/api/file/${ids}`,
			});
		}
	};
}
