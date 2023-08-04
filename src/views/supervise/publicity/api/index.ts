import request from '/@/utils/request'

export const queryNoticeList = (params:any)=>{

    return request({
        url:'/api/announcement/announce',
        params:params
    })
}

export const queryNotice= (id:string)=>{
    return request({
        url:'/api/announcement/'+ id
    })
}

export const createNotice = (data:any)=>{

    return request({
        url:'/api/announcement/',
        method:'post',
        data:data
    })
}

export const updateNotice = (data:any,id='')=>{

    return request({
        url:'/api/announcement/' + id,
        method:'put',
        data:data
    })
}

export const uploadFile = (data:any)=>{
    return request({
        url:'/api/announcement/upload',
        method:'post',
        data:data
    })
}

export const removeNotice = (id:string)=>{
    return request({
        url:'/api/announcement/' + id,
        method:'delete'

    })
}