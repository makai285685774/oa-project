import request from '/@/utils/request';
/**
 * 会议室接口集合
 */
export function meetingRoomApi() {
    return {
        //查询会议室
        getRoom(data: object) {
            return request({
                url: '/api/meetingRoom/',
                method: 'get',
                params: data
            })
        },
        //新增会议室
        addRoom(data: object) {
            return request({
                url: '/api/meetingRoom/',
                method: 'post',
                data: data
            })
        },
        //单项删除会议室信息
        deleteRoom(data: any) {
            return request({
                url: `/api/meetingRoom/${data}`,
                // url: `/api/meetingRoom/${data.id}`,
                method: 'delete',
            })
        },

        //批量删除会议室
        deleteRooms(data: string) {
            return request({
                url: '/api/meeting/deleteMeetingRoom',
                method: 'delete',
                params: { ids: data }
            })
        },
        //id修改会议室信息
        updateRoom(data: any) {
            return request({
                url: `/api/meetingRoom/${data.id}`,
                method: 'put',
                data: data
            })
        },
        // //id修改会议室信息
        // deleteRoom(data: any) {
        //     return request({
        //         url: `/api/meetingRoom/${data.id}`,
        //         method: 'delete',
        //         params: data
        //     })
        // },
        // //新增会议室
        // addRoom(data: object) {
        //     return request({
        //         url: '/api/meetingRoom/',
        //         method: 'post',
        //         data: data
        //     })
        // },
        //id修改会议室信息
        // updateRoom(data: any) {
        //     return request({
        //         url: `/api/meetingRoom/${data.id}`,
        //         method: 'put',
        //         data: data
        //     })
        // },
        //查询会议
        getMeeting(data: object) {
            return request({
                url: '/api/meeting/meetingInfo/getMeeting',
                method: 'get',
                params: data
            })
        },
        //新增会议
        addMeeting(data: object) {
            return request({
                url: '/api/meeting/meetingInfo/postMeeting',
                method: 'post',
                data: data
            })
        },
        //修改会议
        updateMeeting(data: object) {
            return request({
                url: '/api/meeting/meetingInfo/putMeeting',
                method: 'put',
                data: data
            })
        },
        //批量删除会议
        deleteMeeting(data: object) {
            return request({
                url: '/api/meeting/meetingInfo/deleteMeeting',
                method: 'delete',
                params: data
            })
        },

    };
}
