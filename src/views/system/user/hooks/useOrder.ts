
const orderScMap = {
	ascending:'asc',
	descending:'desc'
}
type OrderSc = 'asc' | 'desc' | ''

export default function useOrder<T>(state:any){

    const sortChange = ({ prop, order }: any) => {
        console.log(prop);
        
        if (prop && order && order in orderScMap) {
            state.tableData.param.orderBy = prop.split(/(?=[A-Z])/).join('_') as keyof T
            state.tableData.param.orderSc = orderScMap[order as keyof typeof orderScMap] as OrderSc
        }
    }


    return {
        sortChange
    }


}