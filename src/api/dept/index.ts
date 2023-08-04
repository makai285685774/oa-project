
import request from '/@/utils/request';
import type { Dept } from '/@/views/system/dept/type'
import pickKeys from '../pickKeys';

export default function useDept() {
    return {
        getDeptList(dept: object) {
            return request({
                url: '/api/organization/',
                // params: {orderBy:'name',...dept}
                params: { ...dept }
            })
        },
        createDept(dept: object) {
            return request({
                url: '/api/organization/',
                method: 'post',
                data: dept
            })
        },
        updateDept(dept: Dept) {
            return request({
                url: `/api/organization/${dept.id}`,
                method: 'put',
                // data: pickKeys(dept,'deptKeys')
                data: dept
            })
        },
        removeDept(dept: Dept) {
            return request({
                url: `/api/organization/${dept.id}`,
                method: 'delete',
                data: dept
            })
        },
        fetchDept(id: any) {
            return request({
                url: '/api/organization/' + id
            })
        }
    }
}