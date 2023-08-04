import request from '/@/utils/request';
/**
 * @name 角色api
 * @author huyuxuan
 * @method getRoles 获取角色列表
 * @method getRole 获取角色详情
 * @method addRole 新增角色
 * @method editRole 编辑角色
 * @method deleteRole 删除角色
 */
export function roleApi() {
	return {
		// 获取角色列表
		getRole: (params?: object) => {
			return request({
				url: '/api/role/',
				method: 'get',
				params,
			});
		},
		// 新增角色
		addRole: (data: object) => {
			return request({
				url: '/api/role/',
				method: 'post',
				data,
			});
		},
		// 删除角色
		delRole: (id: string) => {
			return request({
				url: `/api/role/${id}`,
				method: 'delete',
			});
		},
		// 修改角色
		updateRole: (id: any, data: object) => {
			return request({
				url: `/api/role/${id}`,
				method: 'put',
				data,
			});
		},

		fetchRoleUsers(id:string){
			return request({
				url:`/api/role/${id}/users`,
			})
		},
		updateRoleUsers(id:string,data:object){
			return request({
				url:`/api/role/${id}/users`,
				method:'post',
				data:data
			})
		},
		fetchRolePermissions(id:string){
			return request({
				url:`/api/role/${id}/permissions`,
			})
		},
		updateRolePermissions(id:string,data:object){
			return request({
				url:`/api/role/${id}/permissions`,
				method:'post',
				data:data
			})
		}
	};
}

/**
 * @name 角色api
 * @author huyuxuan
 * @method getRoles 获取角色列表
 * @method getRole 获取角色详情
 * @method addRole 新增角色
 * @method editRole 编辑角色
 * @method deleteRole 删除角色
 */
export function permissionApi() {
	return {
		// 获取权限列表
		getPermission: (params?: object) => {
			return request({
				url: '/api/permission/',
				method: 'get',
				params,
			});
		},
		//  获取权限tree列表
		getPermissionTree: (params?: object) => {
			return request({
				url: '/api/permission/tree',
				method: 'get',
				params,
			});
		},
		// 新增权限
		addPermission: (data: object) => {
			return request({
				url: '/api/permission/',
				method: 'post',
				data,
			});
		},
		// 删除权限
		delPermission: (id: string) => {
			return request({
				url: `/api/permission/${id}`,
				method: 'delete',
			});
		},
		// 修改权限
		updatePermission: (id: any, data: object) => {
			return request({
				url: `/api/permission/${id}`,
				method: 'put',
				data,
			});
		},

		fetchPermissionRoles(id:string){
			return request({
				url:`/api/permission/${id}/roles`
			})
		},
		updatePermissionRoles(id:string,data:object){
			return request({
				url:`/api/permission/${id}/roles`,
				method:'post',
				data:data
			})
		}
	};
}
