import request from '/@/utils/request';
/**
 * 资产接口集合
 */
export function assetApi() {
    return {
        //查询资产列表
        getAsset(data: object) {
            return request({
                url: '/api/property/',
                method: 'get',
                params: data
            })
        },
        //资产记录查询资产
        getRecord(data: object) {
            return request({
                url: '/api/property/assetByRecord',
                method: 'get',
                params: data
            })
        },
        //资产除入库首页查询
        getMessage(data: object) {
            return request({
                url: '/api/property/index',
                method: 'get',
                params: data
            })
        },
        //返回树状图
        getTree(data: object) {
            return request({
                url: '/api/propertyCard/toTree',
                method: 'get',
                params: data
            })
        },
        //excel文件导入
        getExcel(data: any) {
            return request({
                url: '/api/property/budgets',
                method: 'post',
                data
            })
        },
        //查询单个资产信息
        getMsg(id: string) {
            return request({
                url: `/api/propertyCard/${id}`,
                method: 'get',
            })
        },
        //下载模板
        downExel() {
            return request({
                url: '/api/propertyCard/downXslx',
                method: 'post',
                responseType: 'blob'
            })
        },
        //预算添加
        addPrice(data: any) {
            return request({
                url: '/api/property/budget',
                method: 'post',
                data
            })
        },
        //预算查询
        viewPrice(data: any) {
            return request({
                url: '/api/property/findBudget',
                method: 'get',
                params: data
            })
        },
        //资产预算查询
        getviewPrice(data: any) {
            return request({
                url: '/api/property/purchaseStatistics',
                method: 'get',
                params: data
            })
        },
        //批量新增
        batchAdd(data: object) {
            return request({
                url: '/api/propertyCard/batchPost',
                method: 'post',
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        //查询资产卡片
        getAssetCard(data: any) {
            return request({
                url: '/api/propertyCard/',
                method: 'get',
                params: data
            })
        },
        //修改资产卡片
        updateAssetCard(data: object) {
            return request({
                url: '/api/propertyCard/',
                method: 'put',
                data: data
            })
        },
        //采购数量
        getNum() {
            return request({
                url: '/api/property/deptBuyNumber',
                method: 'get',

            })
        },
        //库类型百分比
        getStorPercent() {
            return request({
                url: '/api/property/typeNumber',
                method: 'get',

            })
        },
        //申购类型百分比
        getBuyPercent(data: object) {
            return request({
                url: '/api/property/asd',
                method: 'get',
                params: data
            })
        },
        //资产预算图
        getStastic(data: object) {
            return request({
                url: '/api/property/purchaseStatistics',
                method: 'get',
                params: data
            })
        },
        //查询父类
        getParent() {
            return request({
                url: '/api/propertyCard/findFarther',
                method: 'get',
                // params: data
            })
        },
        //查询资产
        getStorage(data: object) {
            return request({
                url: '/api/propertyCard/',
                method: 'get',
                params: data
            })
        },
        //新增
        addAsset(data: any) {
            return request({
                url: '/api/property/',
                method: 'post',
                data: data
            })
        },
        //查询资产工作流业务
        getAssetLine(data: any) {
            return request({
                url: '/api/property/findWork',
                method: 'post',
                data: data
            })
        },
        //查询资产使用记录
        getAssetCord(data: any) {
            return request({
                url: '/api/property/cardUsed',
                method: 'post',
                data: data
            })
        },
        // 添加资产信息(不审批)
        addAssetData(data: object) {
            return request({
                url: '/api/propertyCard/',
                method: 'post',
                data: data
            })
        },
        // 转换二维码
        toQrData(data: any) {
            return request({
                url: '/api/propertyCard/toQR',
                method: 'get',
                params: data
            })
        },
        //添加资产记录(审批)
        addPurchase(data: object) {
            return request({
                url: '/api/property/',
                method: 'post',
                data: data
            })
        },
        //资产待办事务
        needPurchase(data: object) {
            return request({
                url: '/api/property/auditList',
                method: 'post',
                data: data
            })
        },
        //资产在办列表
        InPurchase(data: object) {
            return request({
                url: '/api/property/ingList',
                method: 'post',
                data: data
            })
        },
        //资产办结列表
        EndPurchase(data: object) {
            return request({
                url: '/api/property/endList',
                method: 'post',
                data: data
            })
        },
        //审批
        purchaseAudit(data: object) {
            return request({
                url: '/api/property/audit',
                method: 'post',
                data: data
            })
        },
        purchaseData(data: object) {
            return request({
                url: '/api/formInfo/save',
                method: 'post',
                data: data
            })
        },
        // 查询资产卡片列表
        queryAssetData(data: object) {
            return request({
                url: '/api/formInfo/',
                method: 'get',
                params: data
            })
        },
        // 删除资产卡片
        deleteAssetData(data: string) {
            return request({
                url: '/api/formInfo/delete/' + data,
                method: 'delete',
            })
        },
        // 修改资产卡片
        editAssetData(data1: string, data2: object) {
            return request({
                url: '/api/formInfo/update/' + data1,
                method: 'put',
                data: data2
            })
        }
    };
}
