import UserDialogCon from './UserDialog.vue'
import { h,render,VNode,createVNode } from 'vue'

const boxId = 'audit-box-id'
export type PropsType = {
    organizationId:string
    title:string
    successCallback?:Function
}
const renderBox  =(props:PropsType):VNode => {

    const container = document.createElement('div')
    container.id = boxId

    // const boxVNode = h(AuditPopupCom,props)
    const boxVNode = createVNode(UserDialogCon,props)

    render(boxVNode,container)

    document.body.appendChild(container)


    return boxVNode

}

let boxInstance:any


const showUserDialog = (props:PropsType)=>{

    if(boxInstance){
        const boxVue = boxInstance.component
     
        boxVue.proxy.open()
    }else{
        boxInstance = renderBox(props)
        showUserDialog(props)
    }
}

export default showUserDialog

