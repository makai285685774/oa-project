
import request from '/@/utils/request';
/**
 * @name 模板管理api
 * @author zlq
 * @method templatMoudel 模板上传
 * @method getModeList 获取模板列表
 * @method editPlateFile 模板文件信息修改
 * @method editTemplate 编辑角色
 * @method deleteTemplate 删除模板
 */
export function templateApi() {
    return {
        // 模板文件上传
        postMoudel: (data: object) => {
            return request({
                url: '/api/model/createMoudel',
                method: 'post',
                data: data
            });
        },
        // 模板信息列表
        getModeList: (data: object) => {
            return request({
                url: '/api/model/findModel',
                method: 'get',
                params: data
            });
        },

        // 删除
        deleteTemplate: (data: string) => {
            return request({
                url: `/api/model/deleteModel?ids=${data}`,
                method: 'delete',
            });
        },

        // 修改模板信息
        editTemplate: (data: any) => {
            ;
            return request({
                url: '/api/model/updateModel',
                method: 'put',
                data: data
                // responseType: "blob"
            });
        },
        //上传模板文件
        uploadPlateFile: (data: any) => {
            return request({
                url: '/api/model/updateModelFile',
                method: 'post',
                data: data

            })
        },
        // 模板id查询
        getModelById: (data: string) => {
            return request({
                url: `/api/model/findModelById?id=${data}`,
                method: 'get',
            })
        },
        // 上传模板保存
        submitModel: (data: string) => {
            return request({
                url: "/api/model/updateParam",
                method: "put",
                data
            })
        },
        // 模板维护查看
        viewModel: (data: string) => {
            return request({
                url: `/api/model/findHtmlAndparam?id=${data}`,
                method: "get",
            })
        },
         // 模板维护查看表单值
         viewModelForm: (data: string) => {
            return request({
                url: `/api/model/findModelParam?id=${data}`,
                method: "get",
            })
        },
    }
}