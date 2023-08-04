import { reactive } from 'vue'

export default () => {
    const pageConfig = reactive({
        page: 1,
        size: 10,
        sizes: [10, 20, 30],
        total: 0
    })


    const pageChange = (page: number) => {
        pageConfig.page = page
    }
    const sizeChange = (size: number) => {
        pageConfig.size = size
    }
    return {
        pageConfig,
        pageChange,
        sizeChange
    }
}