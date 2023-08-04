
import { store } from './index'
export default {

    userId(){
        return store.state.userInfos.userInfos.userId
    },
    organizationId() {
        return store.state.userInfos.userInfos.organizationId
    },

}