
import request from '/@/utils/request';
export const gettalkMessageInfo = (param: any) => {
    return request({
        url: '/api/talkMessage/talkMessageInfo',
        method: 'get',
        params: param
    })
}
// 文件上传
export const upFileLoad = (data: any) => {
    return request({
        url: `/api/talkMessage/upFile`,
        method: 'post',
        data
    })
}
// 文件下载
export const contentDownload = (param: any) => {
    return request({
        url: `/api/talkMessage/downFile`,
        method: 'get',
        params: param,
        responseType: 'blob'
    })
}
export const getTalklist = (param: any) => {
    return request({
        url: '/api/talk/talklist',
        method: 'get',
        params: param,
    })
}
//消息列表查询(搜索聊天记录)
export const getTalk= (param: any) => {
    return request({
        url: '/api/talk/talks_copy',
        method: 'get',
        params: param,
    })
}
export const getTalks = (param: any) => {
    return request({
        url: '/api/talk/talks',
        method: 'get',
        params: param,
    })
}
export const getMessageStutas = (param: any) => {
    return request({
        url: `/api/talkMessage/talkMessageStutas`,
        method: 'get',
        params: param
    })
}
// 修改消息状态
export const getReadtalk = (ids: any) => {
    console.log(ids);
    
    return request({
        url: `/api/talkMessage/${ids}`,
        method: 'put',
        
    })
}

