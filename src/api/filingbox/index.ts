import request from '/@/utils/request';
/**
 * 归档箱接口集合
 * @method findDoc 查看公文1发文2收文
 * @method signOut 用户退出登录
 */
export function filingboxApi() {
	return {
        //查看公文1发文2收文3签报
        findDoc(data: object) {
            return request({
                url: '/api/officialDoc/findDocByCurrentProcessor',
                method: 'get',   
                params: data         
            })
        },
        //批量删除
        deleteDoc(data: string) {
            return request({
                url: '/api/officialDoc/deleteDoc',
                method: 'delete',   
                params: {ids:data}         
            })
        },
	};
}
