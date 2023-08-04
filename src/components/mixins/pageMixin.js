import { defineComponent } from 'vue'
export default defineComponent({

    data() {
        return {
            pageNumber: 1,
            pageSizeList: ['10', '15', '20', '30', '50'],
            pageSize: 10,
            total: 0
        }
    },
    methods: {
        handleSizeChange(size) {
            //this.getDataList() //统一调用列表
            this.pageNumber = 1
            this.pageSize = size
            this.getDataList()
        },
        handleCurrentChange(number) {
            this.pageNumber = number
            this.getDataList()
        }
    },
})