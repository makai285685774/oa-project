import request from '/@/utils/request'

export const queryRedFiles = ()=>{
    return request({
        url:'/api/redFile/',
    })
}

export const removeRedFile = (id:string)=>{
    return request({
        url:'/api/redFile/' + id,
        method:'DELETE'
    })
}

export const createRedFile = (data:any)=>{
    return request({
        url:'/api/redFile/',
        method:'post',
        data:data
    })
}
// 文件拼接
export const splictRedFile = (data:any)=>{
    return request({
        url:'/api/redFile/splicingDocument',
        method:'post',
        data:data
    })
}


export const queryDocNumbers  = (data:any)=>{
    return request({
        url:'/api/docNumber/',
        params:data
    })
}

export const removeDocNumber = (id:string)=>{
    return request({
        url:'/api/docNumber/' + id,
        method:'delete',
    })
}

//占用文号
export const occupyDocNumber = (data:any)=>{
    return request({
        url:'/api/docNumber/',
        method:'post',
        data:data
    })
}