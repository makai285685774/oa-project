import { ref,reactive } from 'vue'


export default function(){  
    const showAdvanced = ref(false)
    const advancedParams = reactive({
        roomIds:'',
        assist:''
    })


    const closeAdvanced = ()=>{
        showAdvanced.value = false
    }

    const openAdvanced = ()=>{
        showAdvanced.value = true
    }

    const onAdvancedSearch = (param:any)=>{

        advancedParams.assist = param.assist
        advancedParams.roomIds = param.roomIds

    }


    return {
        showAdvanced,
        openAdvanced,
        closeAdvanced,
        onAdvancedSearch,
        advancedParams
    }



}