import request from '/@/utils/request'


export const getTodoList = (data:object)=>{

    return request({
        url:'/api/work/chengban/wait',
        method:'post',
        data:data
    })
}

export const getDoingList = (data:object)=>{

    return request({
        url:'/api/work/chengban/ing',
        method:'post',
        data:data
    })
}

export const getDoneList = (data:object)=>{

    return request({
        url:'/api/work/chengban/end',
        method:'post',
        data:data
    })
}

export const auditFlow = (data:object)=>{
    return request({
        url:'/api/work/chengban/audit',
        method:'post',
        data:data
    })
}

export const findFlowUser = (tid:string)=>{
    return request({
        url:'/api/work/chengban/findUser',
        params:{
            tid
        }
    })
}