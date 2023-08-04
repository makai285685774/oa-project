import { resetRoute } from '/@/router';
import request from '/@/utils/request';
/**
 * @name 收文登记api
 */
export function receiptRegisterApi() {
	return {
		// 查询待办所有信息
		getBacklog: (params: object) => {
			return request({
				url: '/api/work/task/findTaskByUserId',
				method: 'post',
				data: params
			});
		},
		//在办
		getPassTask: (params: object) => {
			return request({
				url: '/api/work/task/passTask',
				method: 'post',
				data: params
			});
		},
		//我的
		getMyAllTask: (params: object) => {
			return request({
				url: '/api/work/task/myAllTask',
				method: 'post',
				data: params
			});
		},
		//办结
		getFindHistoryTask: (params: object) => {
			return request({
				url: '/api/work/task/findHistoryTask',
				method: 'post',
				data: params
			});
		},
		//修改
		updataTask: (params: object) => {
			return request({
				url: '/api/work/task/',
				method: 'put',
				data: params
			});
		},
		//获取结点
		getFlowElements: (params: object) => {
			return request({
				url: '/api/work/task/getFlowElements',
				method: 'get',
				params
			});
		},

		//节点统计查询
		getAll: (params: object) => {
			return request({
				url: '/api/work/task/all',
				method: 'get',
				params
			});
		},
		//根据pid查询该流程参数
		getfindByPid: (params: object) => {
			return request({
				url: '/api/work/task/findByPid',
				method: 'get',
				params
			});
		},
		//获取全部结点
		getFindAllFlow: (params: object) => {
			return request({
				url: '/api/work/task/findAllFlow',
				method: 'get',
				params
			});
		},
		//根据pid查询所有模板节点
		getFindAllModel: (params: object) => {
			return request({
				url: '/api/work/task/findmodel',
				method: 'get',
				params
			});
		},
		//查询当前流程进行步骤
		getFindNow: (params: object) => {
			return request({
				url: '/api/work/task/findNow',
				method: 'get',
				params
			});
		},
		//回退上一步流程
		seasonBack: (params: object) => {
			return request({
				url: '/api/work/task/back',
				method: 'post',
				data: params
			});
		},
		//获取审批人信息
		getFindAllapprove: (params: object) => {
			return request({
				url: '/api/work/task/findAuditUser',
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
		// 上传正文
		upFileLoad: (data: any) => {
			return request({
				url: '/api/work/task/upFile',
				method: 'post',
				data: data
			});
		},
		// 归档废弃
		wasteFile: (data: any) => {
			return request({
				url: '/api/work/task/archiveDiscard',
				method: 'post',
				data: {
					...data,
					...{ createId: JSON.parse(sessionStorage.getItem('userInfo') || '').userId }
				}
			});
		},
		// 强制归档
		endTaskWork: (params: any) => {
			return request({
				url: '/api/work/task/endTask',
				method: 'get',
				params,
			});
		},
		// 删除系统生成文号
		deleteByDocId: (params: any) => {
			return request({
				url: '/api/docNumber/deleteByDocId',
				method: 'delete',
				params: params
			});
		},
		// 废弃箱
		getWast: (params: any) => {
			return request({
				url: '/api/work/task/wasteBox',
				method: 'get',
				params: { ...params, ...{ createId: JSON.parse(sessionStorage.getItem('userInfo') || '').userId } }
			});
		},
		// 废弃箱删除
		deleteWast: (params: any) => {
			return request({
				url: '/api/work/task/deleteWasteBox',
				method: 'delete',
				params: params
			});
		},
		// 正文预览
		contentPreview: (params: any) => {
			return request({
				url: '/api/file/',
				method: 'get',
				params,
				responseType: 'blob'
			});
		},
		// 图片查找
		findImg: (params: any) => {
			return request({
				url: '/api/file/find',
				method: 'get',
				params,
			});
		},
		// ipad图片预览
		ipadSeeImg: (params: any) => {
			return request({
				url: '/api/file/commentShow',
				method: 'get',
				params,
			});
		},
		// 获取单个图片
		ImgView: (params: any) => {
			return request({
				url: '/api/work/task/download',
				method: 'get',
				params,
				responseType: 'blob'
			});
		},
		officialFileImg: (data: any) => {
			return request({
				url: '/api/file/fileToImg',
				method: 'post',
				data,
			});
		},
		//pdf批注
		fileImgAnnotation: (data: any) => {
			return request({
				url: '/api/file/pdfComment',
				method: 'post',
				data,
			});
		},
		// 正文下载
		contentDownload: (params: any) => {
			return request({
				url: '/api/work/task/download',
				method: 'get',
				params,
				responseType: 'blob',
			});
		},
		//提交审批
		saveWork: (data: any) => {
			return request({
				url: '/api/work/task/save',
				method: 'post',
				data: data
			});
		},
		// 审批状态
		auditWork: (data: any) => {
			return request({
				url: '/api/work/task/audit',
				method: 'post',
				data: data
			});
		},
		// 首页阅办
		getTotal: (data: any) => {
			return request({
				url: '/api/work/selectdaiban',
				method: 'post',
				data: data
			});
		},
		// 获取模板人员id
		modelWork: () => {
			return request({
				url: '/api/work/model/',
				method: 'get',
				params: { name: '' }
			});
		},
		// 获取模板节点
		modelFlowsWork: (data: any) => {
			return request({
				url: '/api/work/model/flows',
				method: 'get',
				params: data
			});
		},
		// 获取文号
		docNumber: (data: any) => {
			return request({
				url: '/api/docNumber/',
				method: 'post',
				data: data
			});
		},
		postDocument: (data: any) => {
			return request({
				url: '/api/work/task/imageToText',
				method: 'post',
				data: data
			});
		},
		//流程图跟踪
		postViewImage: (params: any) => {
			return request({
				url: '/api/work/task/viewImage',
				method: 'get',
				params
			});
		},
		getMyAllMsg: (data: any) => {
			return request({
				url: '/api/work/task/findHis',
				method: 'post',
				data: data
			});
		},
		// 表格导出
		FormDataDownload: (data: any) => {
			return request({
				url: '/api/work/task/dowFile',
				method: 'post',
				data: data,
				responseType: 'blob',

			});
		},
		// 查看正文
		viewfileData: (params: any) => {
			return request({
				url: `/api/file/${params.ids}`,
				method: 'get',


			});
		},
		// 新增消息提醒
		addNotices: (data: any) => {
			return request({
				url: `/api/notice/`,
				method: 'post',
				data

			});
		},
		//获取公文信息
		getfindByid: (data: any) => {
			return request({
				url: `/api/work/task/findByid/` + data,
				method: 'get',
			});
		},
		getHisFlow: (data: any) => {
			return request({
				url: `/api/work/task/hisFlow`,
				method: 'get',
				params: data
			});
		},
		postSeal: (data: any) => {
			return request({
				url: `/api/seal/`,
				method: 'post',
				data: data
			});
		},
		findFileId: (data: any) => {
			return request({
				url: `/api/file/find`,
				method: 'get',
				params: data
			});
		},
		// 公文登记薄导出
		downDocment: (data: any) => {
			return request({
				url: `/api/work/dow`,
				method: 'post',
				data: data,
				responseType:'blob'
			});
		},

		updataNoticeId: (data: any) => {
			return request({
				url: `/api/notice/updateBytaskId`,
				method: 'get',
				params: data
			});
		},

		//查询已经历过节点
		getPassFlows: (pid: string) => {
			return request({
				url: '/api/work/model/pass/flows',
				params: {
					pid
				}
			})
		},
		// 承办流程 start
		//查询已经历过节点
		undertakeFlows: (data: string) => {
			return request({
				url: '/api/work/chengban/',
				method: 'post',
				data
			})
		}

	}
}