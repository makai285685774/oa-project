export default function(callback:(row:any)=>any){
    const rowClick = (row:any,column:any)=>{
     
        if(column.prop || column.property){
            callback && callback(row)
        }
    }
    return {
        rowClick
    }


}