import type { FormRules } from 'element-plus'
export type Dept = {
    id?:string
    name:string
    address:string
    describe?:string
    phone?:string
    leadingCadre:any
    leadingName:any
    chargeId:string
}


export type DeptForm =  {
	isShowDialog: boolean
	ruleForm:Dept
    rules:FormRules
   
}