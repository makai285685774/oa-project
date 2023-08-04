import type { Column } from "element-plus"
import { ElMessage } from 'element-plus'
import userApi from '/@/api/user/index';
import { reactive, toRefs } from 'vue'

const userColumns:Array<Column> = [{
    prop:'name',
    label:'用户名称',
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

export default function useUser(apiFn:()=>any){

    const state = reactive({
        roleUsers:[],
        userData:[],
        userTotal:0
    })

    async function getRoleUsers(id:string){
        const { data } = await apiFn().fetchRoleUsers(id)
        state.roleUsers = data
        return data

    }

    async function getUsers(params?:object) {
        const { data } = await userApi().getUserList(params)
        state.userData = data.list
        state.userTotal = data.total
        return data.list
    }

    type Selection = {
        id:string
    }
    async function changeUser(id:string,selections:Selection[]){
        let params = {
            users:selections.map((v)=> {return {
                id:v.id
            }})
        }
        await apiFn().updateRoleUsers(id,params)

        ElMessage({
            type:'success',
            message:'设置角色成功！'
        })
    }


    return {
        userColumns,
        getUsers,
        getRoleUsers,
        changeUser,
        ...toRefs(state)
    }
}