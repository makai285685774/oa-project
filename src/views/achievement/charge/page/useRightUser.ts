import { findFlowUser } from '../api/index'
import { useStore } from '/@/store/index'
import { ref, computed } from 'vue'


export default function () {

    const store = useStore()
    const currentFlowUser = ref('')
    const findUser = async (taskId: string) => {
        const { data, code }: any = await findFlowUser(taskId)
        if (1 === code) {
            currentFlowUser.value = data
        }

    }

    const isRightUser = computed(() => {
        return currentFlowUser.value.includes(store.getters.userId)
    })

    return {
        findUser,
        currentFlowUser,
        isRightUser
    }

}