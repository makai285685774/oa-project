//#region  流程分类、模型、定义、实例
import request from '/@/utils/request';

const axios = {
    request
}
export const queryCategoryList = data => {
    return axios.request({
        url: '/actCategory/name/list',
        data: data,
        method: 'post'
    })
}


export const queryCategoryAll = () => { //全部分类列表
    return axios.request({
        url: '/actCategory/categoryDrop',
        method: 'post'
    })
}


export const createCategory = data => {
    return axios.request({
        url: '/actCategory/create',
        data: data,
        method: 'post'
    })
}

export const deleteCategory = data => {
    return axios.request({
        url: '/actCategory/destroy',
        data: data,
        method: 'delete'
    })
}

export const updateCategory = data => {
    return axios.request({
        url: '/actCategory/update',
        data: data,
        method: 'put'
    })
}


export const queryFlowDefineList = data => {
    return axios.request({
        url: '/actProcess/list',
        data: data,
        method: 'post'
    })
}

export const queryFlowModelList = data => { //模型列表
    return axios.request({
        url: '/model/list',
        data: data,
        method: 'post'
    })
}


export const deployFlowModel = data => {
    return axios.request({
        url: '/model/deploy',
        data: data,
        method: 'post'
    })
}


export const exportFlowModel = data => {
    return axios.request({
        url: '/model/export',
        data: data,
        method: 'post'
    })
}


export const updateModelCate = data => { //设置模型分类
    return axios.request({
        url: '/model/updateCategory',
        data: data,
        method: 'post'
    })
}

//创建流程模型
export const createFlowModel = data => {
    return axios.request({
        url: '/api/work/model/',
        data: data,
        method: 'post'
    })
}
//添加扩展属性
export const addExtension = data => {
    return axios.request({
        url: '/api/work/model/saveExtensionElement',
        data: data,
        method: 'post'
    })
}
//删除流程模型
export const deleteFlowModel = data => {
    return axios.request({
        url: '/api/work/model/deleteModel',
        params: data,
        method: 'get'
    })
}
//流程模型列表
export const getFlowModel = data => {
    return axios.request({
        url: '/api/work/model/',
        params: data,
        method: 'get'
    })
}
//根据文件查看节点
export const getNode = data => {
    return axios.request({
        url: '/api/work/model/flows',
        params: data,
        method: 'get'
    })
}
//上传文件
export const uploadFile = data => {
    return axios.request({
        url: '/api/work/task/upFile',
        data: data,
        method: 'post'
    })
}

export const queryFlowFormList = data => {
    return axios.request({
        url: '/forms/list',
        data: data,
        method: 'post'
    })
}


export const updateFlowDefine = data => { //流程定义的挂起or激活
    return axios.request({
        url: '/actProcess/update',
        data: data,
        method: 'post'
    })
}

export const deleteFlowDefine = data => { //删除流程定义
    return axios.request({
        url: '/actProcess/delete',
        data: data,
        method: 'post'
    })
}

export const queryFlowInstanceList = data => {
    return axios.request({
        url: '/actProcess/running',
        data: data,
        method: 'post'
    })
}

export const deleteFlowInstance = data => {
    return axios.request({
        url: '/actProcess/deleteProcIns',
        data: data,
        method: 'post'
    })
}

export const createFlowForm = data => { //创建或修改流程表单，根据id判断
    return axios.request({
        url: '/forms/create',
        data: data,
        method: 'post'
    })
}

export const deleteFlowForm = data => { //创建或修改流程表单，根据id判断
    return axios.request({
        url: '/forms/delete',
        data: data,
        method: 'delete'
    })
}



export const queryFormCtrList = data => { //查询表单控件列表
    return axios.request({
        url: '/controls/list',
        data: data,
        method: 'post'
    })
}


export const deleteFormControl = data => { //删除表单控件
    return axios.request({
        url: '/controls/delete',
        data: data,
        method: 'delete'
    })
}

export const createFormControl = data => { //添加或修改表单控件
    return axios.request({
        url: '/controls/create',
        data: data,
        method: 'post'
    })
}

export const queryFormControl = data => {
    return axios.request({
        url: '/controls/info',
        data: data,
        method: 'post'
    })
}


export const queryApplyList = data => { //我的申请列表
    return axios.request({
        url: '/work/act/list',
        data: data,
        method: 'post'
    })
}


export const queryCanApplyList = data => { //可申请流程列表
    return axios.request({
        url: '/work/actCategory/categoryAct',
        data: data,
        method: 'post'
    })
}



export const queryDeploymentFlowList = data => {
    return axios.request({
        url: '/work/actCategory/actDrop',
        data: data,
        method: 'post'
    })
}


export const queryFlowForm = data => { //查询流程对应的表单
    return axios.request({
        url: '/work/business/list',
        data: data,
        method: 'post'
    })
}

export const saveBusinessForm = data => { //保存申请数据
    return axios.request({
        url: '/work/business/save',
        data: data,
        method: 'post'
    })
}

export const queryFlowNodeList = data => {
    return axios.request({
        url: '/actTask/list',
        data: data,
        method: 'post'
    })
}


export const queryAssigneeInfo = data => { //查询经办人
    return axios.request({
        url: '/actTask/assigneeInfo',
        data: data,
        method: 'post'
    })
}

export const createAssignee = data => { //设置经办人
    return axios.request({
        url: '/actTask/createAssignee',
        data: data,
        method: 'post'
    })
}


export const queryAssigneeList = data => { //查询节点经办人列表
    return axios.request({
        url: '/work/business/assigneeList',
        data: data,
        method: 'post'
    })
}

export const startWorkFlow = data => { //发起一个流程，保存完整的申请
    return axios.request({
        url: '/work/act/start',
        data: data,
        method: 'post'
    })
}

export const queryFlowHistory = data => {
    return axios.request({
        url: '/work/business/histoicFlows',
        data: data,
        method: 'post'
    })
}


export const queryHandleList = data => { //查询待办列表
    return axios.request({
        url: '/work/act/handleList',
        data: data,
        method: 'post'
    })
}

export const auditFlow = data => { //审批 同意或拒绝
    return axios.request({
        url: '/work/business/audit',
        data: data,
        method: 'post'
    })

}


export const queryTaskList = data => { //获取下一节点列表,用于审批
    return axios.request({
        // url: '/work/business/choiceTaskList',
        url:'/actTask/findFlows',
        data: data,
        method: 'post'
    })

}


export const queryUserList = (user)=> {
    return axios.request({
        url: '/api/user/findUser',
        params: user,
        method: 'get'
    })
}

  // 模板信息列表
  export const getModeList = (data) => {
    return axios.request({
        url: '/api/model/findModel',
        method: 'get',
        params: data
    });
}
//查询模板信息
export const queryTplInfo = id=>{
    return axios.request({
        url:'/api/model/findModelById',
        method:'get',
        params:{id}
    })
}

//#endregion