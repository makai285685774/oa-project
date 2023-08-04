import type { FormRules } from 'element-plus'
export type Tail = {
    value?: string,
    td?: number,
    type?: string,
    padding?: string,
    fontWeight?: string,
    placeholder?: string
}

type DeptPage = {
    page: number
    size: number
    total: number
}
export type UserState = {
    value:any,
    message: any,
    formMsg: any
    contId:any,
    listDixData:any
    deptPage?: DeptPage,
    listFileData:any,
    options:any,
    getMessage:any,
    activities:any
}