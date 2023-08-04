
import { pick } from 'lodash-es';

export const userKeys = ['id','name','username','phone','email','status','describe','organizationId','sealId','schedule', 'number','pin']
export const deptKeys = ['id','NAME','DEPT_TYPE','DEPT_ABB_NAME','DESCRIBE','DEPT_CODE',"DEPT_ORDER"]
export const dicKeys = ['id','name','code','category','describe','sealId']

const allKeys = {
    deptKeys,
    userKeys,
    dicKeys
}

export default function pickKeys(obj:object,key:keyof typeof allKeys){
    return pick(obj,allKeys[key])
}