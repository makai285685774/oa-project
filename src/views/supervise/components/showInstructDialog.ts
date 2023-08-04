import InstructDialogCon from './InstructDialog.vue'
import { h,render,VNode,createVNode } from 'vue'

const boxId = 'instruct-box-id'
export type PropsType = {
    successCallback?:Function
    name:string
}
const renderBox  =(props:PropsType):VNode => {

    const container = document.createElement('div')
    container.id = boxId

    const boxVNode = h(InstructDialogCon,props)
    //const boxVNode = createVNode(InstructDialogCon,props)

    render(boxVNode,container)

    document.body.appendChild(container)


    return boxVNode

}

let boxInstance:any


const showInstructDialog = (props:PropsType)=>{
   

    if(boxInstance){
        const boxVue = boxInstance.component
    
        boxVue.proxy.open(props.name)
    }else{
        boxInstance = renderBox(props)
        showInstructDialog(props)
    }
}

export default showInstructDialog

