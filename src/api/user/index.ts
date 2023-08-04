
import request from '/@/utils/request';

import type { User } from '/@/views/system/user/type'
import pickKeys from '../pickKeys';

export default function useUser() {
    return {
        getUserList(user?: object) {
            return request({
                url: '/api/user/',
                params: user
            })
        },
        
        createUser(user: object) {
            return request({
                url: '/api/user/',
                method: 'post',
                data: user 
            })
        },
        updateUser(user: User) {
            return request({
                url: `/api/user/${user.id}`,
                method: 'put',
                data: pickKeys(user, 'userKeys')
            })
        },
        removeUser(user: User) {
            return request({
                url: `/api/user/${user.id}`,
                method: 'delete',
                data: user
            })
        },

        fetchUser(id: string) {
            
            return request({
                url: `/api/user/${id}`,
            })
        },
        getUserRoles(id: string) {
            return request({
                url: `/api/user/${id}/roles`,
            })
        },
        updateUserRoles(id: string, data = {}) {
            return request({
                url: `/api/user/${id}/roles`,
                method: 'post',
                data: data
            })
        },
        editPassword(params: any) {
            return request({
                url: `/api/user/updatePassword`,
                method: 'get',
                params
            })
        },
        getMeetingUser(params: any) {
            return request({
                url: `/api/meeting/findAttendees`,
                method: 'get',
                params
            })
        },
        deleteSeal(params: any) {
            return request({
                url: `/api/seal/`,
                method: 'delete',
                params
            })
        },

    }
}