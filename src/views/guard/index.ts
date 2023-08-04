
import request from '/@/utils/request';
export default function guardApi(){
    return {
        //查询值班人员
        getDuty(params:object){
            return request({
                url:'/api/duty/',
                method:'get',
                params:params
            })
        },
        //值班信息详情
        getDetail(params:object,id:string){
            return request({
                url:`/api/duty/${id}`,
                method:'get',
                params:params
            })
        },
        //值班节假日
        getHoliday(){
            return request({
                url:'/api/holiday/find',
                method:'get',
                // params:params
            })
        },
        //删除值班信息
        deleteDuty(id:string){
            return request({
                url:`/api/duty/${id}`,
                method:'delete',
            })
        },
        //添加值班人员
        addDuty(data:object){
            return request({
                url:'/api/duty/',
                method:'post',
                data:data
            })
        },
        //批量添加值班人员
        batchAddDuty(data:object){
            return request({
                url:'/api/duty/batchPost',
                method:'post',
                data:data,
                headers:{
					'Content-Type': 'multipart/form-data'
				}
            })
        },
        //修改值班人员
        updateDuty(data:object,id:string){
            return request({
                url:`/api/duty/${id}`,
                method:'put',
                data:data
            })
        },  
    }
}