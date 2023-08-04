import type { Column } from "element-plus"
import { ElMessage } from 'element-plus'
import { roleApi } from '/@/api/menu';
import { reactive, toRefs } from 'vue'

const roleColumns:Array<Column> = [{
    prop:'name',
    label:'角色名称',
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

    const roleState = reactive({
        permissionRoles:[],
        roleData:[],
        roleTotal:0
    })

    async function getPermissionRoles(id:string){
        const { data } = await apiFn().fetchPermissionRoles(id)
        roleState.permissionRoles = data
        return data

    }

    async function getRoles(params?:object) {
        const { data } = await roleApi().getRole(params)
        roleState.roleData = data.list
        roleState.roleTotal = data.total
        return data.list
    }

    type Selection = {
        id:string
    }
    async function changeRole(id:string,selections:Selection[]){
        let params = {
            roles:selections.map((v)=> {return {
                id:v.id
            }})
        }
        await apiFn().updatePermissionRoles(id,params)

        ElMessage({
            type:'success',
            message:'设置角色成功！'
        })
    }


    return {
        roleColumns,
        getRoles,
        getPermissionRoles,
        changeRole,
        ...toRefs(roleState)
    }
}