import request from '/@/utils/request';


// 印章管理接口
export function sealApi() {
  return {
    // 获取印章列表
    sealList(data: any) {
      return request({
        url: '/api/seal/selectSealList',
        method: 'get',
        params: data
      })
    },
    // 查询单个印章的图片
    sealImage(data: any) {
      return request({
        url: '/api/seal/sealSelect',
        method: 'get',
        params: data
      })
    },
    // 修改印章密码
    editPwd(data: any) {
      return request({
        url: '/api/seal/updateSecretCode',
        method: 'post',
        data
      })
    },
    // 重置印章密码
    resetPwd(data: any) {
      return request({
        url: '/api/seal/resetSecretCode',
        method: 'post',
        data
      })
    },
    // 根据印章名称查询印章记录
    sealRecord(data: any) {
      return request({
        url: '/api/seal/selectSignaturebysealName',
        method: 'get',
        params: data
      })
    },
    // 印章申请使用
    sealApproval(data: any) {
      return request({
        url: '/api/seal/application',
        method: 'post',
        data: data
      })
    },
    // 用印处理列表
    sealAuditList(data: any) {
      return request({
        url: '/api/seal/auditList',
        method: 'post',
        data: data
      })
    },
    // 用印处理审批
    sealAgreeApproval(data: any) {
      return request({
        url: '/api/seal/approval',
        method: 'post',
        data: data
      })
    },
    // 用印申请记录
    sealRecored(data: any) {
      return request({
        url: '/api/seal/askSeal',
        method: 'get',
        params: data
      })
    },
    // 审批记录
    sealApprovalRecored(data: any) {
      return request({
        url: '/api/seal/approvalSeal',
        method: 'get',
        params: data
      })
    },
    // 己章被使用记录
    sealUseRecored(data: any) {
      return request({
        url: '/api/seal/useOwner',
        method: 'post',
        data: data
      })
    },
    // 定位盖章
    positionSeal(data: any) {
      return request({
        url: '/api/seal/sealBySit',
        method: 'post',
        data: data
      })
    },
    // 校验印章密码
    signPwd(data: any) {
      return request({
        url: '/api/seal/checkPsw',
        method: 'get',
        params: data
      })
    },
    // 上传名章
    updateSeal(data: any) {
      return request({
        url: '/api/seal/',
        method: 'post',
        data: data
      })
    },
    // 修改名章
    editSeal(data: any) {
      return request({
        url: '/api/seal/',
        method: 'put',
        data: data
      })
    },
    // 删除名章
    deleteSeal(data: any) {
      return request({
        url: '/api/seal/',
        method: 'delete',
        params: data
      })
    },
  }

}