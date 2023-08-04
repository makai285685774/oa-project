
import request from '/@/utils/request';
export default function scheduleApi(){
    return {
        getSchedule(params:object){
            return request({
                url:'/api/schedule/',
                method:'get',
                params:params
            })
        },
        getmySchedule(params:object){
            return request({
                url:'/api/schedule/mySchedule',
                method:'get',
                params:params
            })
        },
        scheduleDetail(id:string){
            return request({
                url:`/api/schedule/${id}`,
                method:'get',
            })
        },
        deleteSchedule(id:string){
            return request({
                url:`/api/schedule/${id}`,
                method:'delete',
            })
        },
        addSchedule(data:object){
            return request({
                url:'/api/schedule/',
                method:'post',
                data:data
            })
        },
        updateSchedule(data:object,id:string){
            return request({
                url:`/api/schedule/${id}`,
                method:'put',
                data:data
            })
        },
        getNumber(params:object){
            return request({
                url:`/api/schedule/count`,
                method:'get',
                params:params
            })
        },
        // 领导日程
        leardSchedule(params:object){
            return request({
                url:`/api/schedule/leaderSchedule`,
                method:'get',
                params:params
            })
        },
      
    }
}