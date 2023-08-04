import type { FormRules } from 'element-plus'
export type User = {
    id?:string
    username:string
    name:string
    phone:string
    organizationId?:string
    organization_id?:string
    describe:string
    email:string
    status:boolean
    create_date?:string
    sealId?:string
    position?:string

}

type DeptPage = {
    page:number
    size:number
    total:number
}
export type UserState = {
	isShowDialog: boolean
	ruleForm: User
	deptData: any
	rules:FormRules
    deptPage:DeptPage
	positionMsg?: any

}