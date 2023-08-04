import request from '/@/utils/request';

export const findNumber = (params: any) => {
    return request({
        url: '/api/supervise/findNumber',
        params
    })
}

export const sourceNumber = (params: any) => {
    return request({
        url: '/api/supervise/sourceNumber',
        params
    })
}

export const typeNumber = (params: any) => {
    return request({
        url: '/api/supervise/typeNumber',
        params
    })
}
export const approvalActivity = (params: any) => {
    return request({
        url: '/api/supervise/getHistoricActivity',
        params
    })
}
export const findSuperviseList = (data: any) => {
    return request({
        url: '/api/supervise/findAll',
        method: 'post',
        data: data

    })
}


export const exportExcel = (data:any)=>{
    return request({
        url:'/api/supervise/excel',
        method:'post',
        data:data,
        responseType:'blob'
    })
}

export const findAllNumber = (data:any)=>{
    return request({
        url:'/api/supervise/findAllNumber',
        method:'post',
        data:data
    })
}

export const getMonthNumber = (data:object)=>{
    return request({
        url:'/api/supervise/monthAll',
        method:'post',
        data:data
    })
}

//督办主任务
export const fetchSuperviseList = (params:object)=>{
    return request({
        url:'/api/supervise/mainTask/',
        params:params
    })
}

export const fetchSupervise = (id:string)=>{
    return request({
        url:'/api/supervise/mainTask/findById',
        params:{ id }
    })
}

export const saveSupervise = (data:object)=>{
    return request({
        url:'/api/supervise/mainTask/save',
        data:data,
        method:'post'
    })

}

export const saveTempSupervise = (data:object)=>{
    return request({
        url:'/api/supervise/mainTask/draft',
        data:data,
        method:'post'
    })
}

export const updateTempSupervise = (id:string,data:object)=>{
    return request({
        url:'/api/supervise/mainTask/' + id,
        data:data,
        method:'put'
    })
}

export const importSuperviseData = (data:any)=>{
   return request({
    url:'/api/supervise/importData',
    data:data,
    method:'post'
   })
}

export const exportSuperviseDetail = (data:object)=>{
    return request({
        url:'/api/supervise/file/derive',
        data:data,
        method:'post',
        responseType:'blob'
    })
}

export const delSupervise  = (id:string)=>{
    return request({
        url:'/api/supervise/mainTask/' + id,
        method:'delete'
    })
}


export const fetchWaitSupervise = (data:object)=>{

    return request({
        url:'/api/supervise/wait',
        method:'post',
        data:data
    })

}

export const fetchIngSupervise = (data:object)=>{

    return request({
        url:'/api/supervise/ing',
        method:'post',
        data:data
    })

}

export const fetchEndSupervise = (data:object)=>{

    return request({
        url:'/api/supervise/end',
        method:'post',
        data:data
    })

}
export const fetchSuperviseDetail = (params:object)=>{
    return request({
        url:'/api/supervise/findByTaskIds',
        params:params
    })
}
export const updateSupervise = (data:object)=>{

    return request({
        url:'/api/supervise/updataChild',
        method:'post',
        data:data
    })
}


/*部门自我评价*/
export const fetchScoreList = (params:object)=>{
    return request({
        url:'/api/supervise/score/',
        params:params
    })
}

export const saveScore  = (data:object)=>{
    return request({
        url:'/api/supervise/score/save',
        method:'post',
        data:data
    })
}

export const removeSore = (id:string)=>{
    return request({
        url:'/api/supervise/score/' + id,
        method:'delete',

    })
}

export const updateScore  = (data:object)=>{
    return request({
        url:'/api/supervise/score/update',
        method:'put',
        data:data
    })
}

export const exportScoreDoc = (data:object)=>{
    return request({
        url:'/api/supervise/file/selfScrce',
        method:'post',
        data:data,
        responseType:'blob'
    })
}

//导出清单
export const exportDetailExcel = (data:object)=>{
    return request({
        url:'/api/supervise/file/detailedList',
        method:'post',
        data:data,
        responseType:'blob'
    })
}

//重点工作台账
export const exportWorkBook = (data:object)=>{
    return request({
        url:'/api/supervise/file/mainDivisionWorkRecord',
        method:'post',
        data:data,
        responseType:'blob'
    })
}

//导出部门评分表
export const exportDeptScore = (data:object)=>{
    return request({
        url:'/api/supervise/file/count',
        method:'post',
        data:data,
        responseType:'blob'
    })
}

//导出部门台账
export const exportDeptWork = (data:object)=>{
    return request({
        url:'/api/supervise/file/divisionWorkRecord',
        method:'post',
        data:data,
        responseType:'blob'
    })
}
