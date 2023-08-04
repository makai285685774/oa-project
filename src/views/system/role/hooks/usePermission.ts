import type { Column } from "element-plus"
import { ElMessage } from 'element-plus'
import { permissionApi } from '/@/api/menu';
import { reactive, toRefs } from 'vue'

const permissionColumns:Array<Column> = [{
    prop:'name',
    label:'权限名称',
    width:50
},{
    prop:'createBy',
    label:'创建人',
    width:50,
},{
    prop:'createDate',
    label:'创建时间',
    width:50
}]

export default function useRole(apiFn:()=>any){

    const state = reactive({
        rolePermissions:[],
        permissionData:[],
        permissionTotal:0
    })

    async function getRolePermissions(id:string){
        const { data } = await apiFn().fetchRolePermissions(id)
        state.rolePermissions = data
        return data

    }

    async function getPermissions(params?:object) {
        const { data } = await permissionApi().getPermission(params)
        state.permissionData = data.list
        state.permissionTotal = data.total
        return data.list
    }

    type Selection = {
        id:string
    }
    async function changePermission(id:string,selections:Selection[]){
        let params = {
            permissions:selections.map((v)=> {return {
                id:v.id
            }})
        }
        await apiFn().updateRolePermissions(id,params)

        ElMessage({
            type:'success',
            message:'设置角色成功！'
        })
    }


    return {
        permissionColumns,
        getRolePermissions,
        getPermissions,
        changePermission,
        ...toRefs(state)
    }
}