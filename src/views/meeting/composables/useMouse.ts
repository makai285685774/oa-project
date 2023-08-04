import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'



export default (callback:(obj:any)=>void,isDiableMouse:boolean)=> {
    let isMoving = false
    let currentRoom = ''
    let cacheList =ref(new Map())  //缓存选中单元格


    const onMouseDown = (num:number,room:any,event:MouseEvent)=>{
 
        if( isDiableMouse ) return
        if(room.describe!=='正常') return
        
    
     
        isMoving = true  //启动滑动

        currentRoom = room.roomId
        cacheList.value.set(`${currentRoom}-${num}`,num)



        
    }
    const onMouseOver = (num:number,room:any,event:MouseEvent)=>{

        if( isDiableMouse ) return
        if(room.describe!=='正常') return
 
    
       if(!isMoving) return
    
       if(cacheList.value.has(`${currentRoom}-${num}`)){
         cacheList.value.delete(`${currentRoom}-${num}`)
       }else{
         cacheList.value.set(`${currentRoom}-${num}`,num)
       }
       
       

    }

    const onMouseUp = (num:number,room:any,event:MouseEvent)=>{
        if( isDiableMouse ) return
        if(room.describe!=='正常') return
       
        if(cacheList.value.size<2){
            isMoving =false
            return
        }

     

        ElMessageBox.confirm('是否创建新的会议?','提示',{
            confirmButtonText: '创建',
            cancelButtonText: '取消',
        }).then(()=>{



            callback && callback({
                roomId:currentRoom,
                roomName:room.roomName
            })

            
            cacheList.value.clear()
            currentRoom = ''

            

        })
        .catch(()=>{
            isMoving = false
            cacheList.value.clear()
            currentRoom = ''
        })

    }



    return {
        onMouseDown,
        onMouseOver,
        onMouseUp,
        cacheList
     


    }


}