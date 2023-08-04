import request from '/@/utils/request';
/**
 * 事务接口集合
 */
export function evectionApi() {
    return {
        //查询交办列表
        getTaskList(data: object) {
            return request({
                url: '/api/assign/getAssigned',
                method: 'get',   
                params: data         
            })
        },     
          //发起交办
          sendTask(data: object) {
            return request({
                url: '/api/assign/',
                method: 'post',
                data: data
            })
        },
         //结束交办
         finishTask(data: any) {
            return request({
                url: `/api/assign/endAssigned`,
                method: 'put',
                data: data
            })
        },
        //查询事务列表
        getEvection(data: object) {
            return request({
                url: '/api/transaction/',
                method: 'get',
                params: data
            })
        },
        //查询图表
        getEchart(data: object) {
            return request({
                url: '/api/transaction/statistics',
                method: 'get',
                params: data
            })
        },
        //新增数据
        addEvection(data: object) {
            return request({
                url: '/api/transaction/',
                method: 'post',
                data: data
            })
        },
        //id修改事务信息
        updateEvection(data: any) {

            return request({
                url: `/api/transaction/${data.id}`,
                method: 'put',
                data: data
            })
        },
        // //单项删除事务信息
        deleteEvection(data: any) {
            return request({
                url: `/api/transaction/`,
                method: 'delete',
                params: { ids: data }
            })
        },
        //上传文件
        uploadEvection(data: any) {
            return request({
                url: `/api/transaction/`,
                method: 'delete',
                params: { ids: data }
            })
        },
        //查看办结事务
        getCompleted(data: object) {
            return request({
                url: `/api/transaction/end`,
                method: 'post',
                data: data
            })
        },
        //查看审批事务
        getAuditReport(data: any) {
            return request({
                url: `/api/transaction/transactionTask`,
                method: 'post',
                data: data
            })
        },
        //审批
        auditReport(data: any) {
            return request({
                url: `/api/transaction/audit`,
                method: 'post',
                data: data
            })
        },
        //获取驳回意见
        getRejectMsg(id: any) {
            return request({
                url: `/api/transaction/getMessage`,
                method: 'get',
                params: { id }
            })
        },


        // 批量导出
        batchDownload: (data: any) => {
            return request({
                url: '/api/transaction/deriveWord',
                method: 'post',
                data: data,
                responseType: 'blob',
            });
        },
        //保存调研
        saveSurvey(data: any) {
            return request({
                url: `/api/survey/`,
                method: 'post',
                data
            })
        },
        //查看调研列表
        seeSurveyList(data: any) {
            return request({
                url: `/api/survey/`,
                method: 'get',
                params: data
            })
        },
        //修改调研列表
        editSurveyList(data: any) {
            return request({
                url: `/api/survey/`,
                method: 'put',
                data
            })
        },
        //批量确认
        batchConfirm(data: any) {
            return request({
                url: `/api/survey/batchConfirm`,
                method: 'put',
                data
            })
        },
        //删除调研列表
        deleSurveyList(data: any) {
            return request({
                url: `/api/survey/`,
                method: 'DELETE',
                params: data
            })
        },
        //导出调研列表
        downSurvey(data: any) {
            return request({
                url: `/api/survey/word`,
                method: 'post',
                data: data,
                responseType: 'blob'
            })
        },
    };
}
