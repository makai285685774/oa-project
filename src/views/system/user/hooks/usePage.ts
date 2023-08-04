
type Param = {
    size:number
    page:number
}
export default function usePage(param:Param,fn:()=>any){
    	// 分页改变
		const onHandleSizeChange = (val: number) => {
			param.size = val
            fn && fn()
		};
		// 分页改变
		const onHandleCurrentChange = (val: number) => {
			param.page = val
            fn && fn()
		}
        return {
            onHandleCurrentChange,
            onHandleSizeChange
        }

}