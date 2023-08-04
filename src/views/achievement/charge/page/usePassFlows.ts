import { receiptRegisterApi } from "/@/api/officialdocument/work";
import { ref } from 'vue'
export default function(){
    
    const passFlows:any = ref([])
    const getPassFlows = async (pid='') => {
        //两个流程节点
        receiptRegisterApi().getPassFlows(pid).then(({data})=>{
          passFlows.value = data
        })

      };

    return {
        passFlows,
        getPassFlows
    }

}