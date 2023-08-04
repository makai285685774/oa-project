
import request from '/@/utils/request';

export const createMeeting = (data:any)=>{

    return request({
        url:'/api/meeting/',
        method:'post',
        data:data
    })
}


export const getMeetings = (data:any)=>{

    return request({
        url:'/api/meeting/myMeeting',
        method:'post',
        data:data
    })
}
export const createOnline = (data:any)=>{

    return request({
        url:'/api/meeting/onLineMeeting',
        method:'post',
        data:data
    })
}

export const updateMeeting = (id:string,data:any)=>{
    return request({
        url:`/api/meeting/${id}`,
        method:'put',
        data:data
    })
}

export const getAllMeetings = (data:any)=>{

    return request({
        url:'/api/meeting/',
        method:'get',
        params:data
    })
}


export const cancelMeeting = (id:string)=>{
    return request({
        url:`/api/meeting/${id}`,
        method:'delete',
        params:{
            isEffective:0
        }
    })
}

//获取与会人员

export const getMeetingUsers = (id:string)=>{
    return request({
        url:`/api/meeting/${id}/user`,
        method:'get',
        data:{
            page:1,
            size:10000
        }
    })
}

export const saveMeetingUsers = (id:string,data:any)=>{
    return request({
        url:`/api/meeting//${id}/addUser`,
        method:'post',
        data:data
    })
}

export const removeMeetingUsers = (id:string,ids:object)=>{
    return request({
        url:`/api/meeting/${id}/user`,
        method:'delete',
        params:ids
    })
}

export const updateMeetingUser = (id:string,data:object)=>{
    return request({
        url:`/api/meeting/${id}/user`,
        method:'put',
        data:data
    })
}

//代办事项数量
export const queryTaskCount = (data:any)=>{
    return request({
        url:'/api/work/task/count',
        method:'post',
        data:data
    })
}
 