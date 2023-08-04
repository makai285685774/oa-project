
import dayjs from 'dayjs'
import { SUPERVISE_STATUS_FINISH,SUPERVISE_SOON_DAY } from './constants'

export function getCurrentFlow(arr:any[],name=''){
    return arr.find((flow:any)=>flow.id === name)
}

export function getAuditText(arrAll:any[],name=''){
    let current = getCurrentFlow(arrAll,name)

    if(current && current.extensionElements){    
        return {
            pass:current.extensionElements.pass ? current.extensionElements.pass[0].elementText :false,
            nopass:current.extensionElements.nopass ? current.extensionElements.nopass[0].elementText :false,
            urge:current.extensionElements.urge ? true :false,

        }
    }else{
        return {
            pass:false,
            nopass:false,
            urge:false
        }
    }

}


export function isEndFlow(arrAll:any[],name=''){
    let current = getCurrentFlow(arrAll,name)
    if(current.extensionElements.isEnd && current.extensionElements.isEnd[0].elementText === '1'){
        return true
    }

    return false

}

export function isStartFlow(arrAll:any[],name=''){
    let index = arrAll.findIndex((flow:any)=>flow.id === name)
    if(index === 0){
        return true
    }
    return false

}

export function isDelay(date:string | Date | number,status:string){
   //

   if(status === SUPERVISE_STATUS_FINISH){
        return false
   }


    return dayjs().isAfter(date)
}


export function getBgType ( date:string| Date|number,status:string ){

    let locaDay = 1

    if(localStorage.getItem(SUPERVISE_SOON_DAY)){
        locaDay = parseInt(localStorage.getItem(SUPERVISE_SOON_DAY) as string)
    }
    if(isDelay(date,status)) return 'danger'
    else if( dayjs(dayjs().add(locaDay,'days')).isBefore(date) ) return 'warning'
    else return 'success'
}

export function downFile (res:any,filename:string){
    let blob = new Blob([res], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);

}

export function splitByEnter(str: string) {
    var temp = str.split(/[\n,]/g);
    for (var i = 0; i < temp.length; i++) {
      if (temp[i] == "") {
        temp.splice(i, 1);
        //删除数组索引位置应保持不变
        i--;
      }
    }
    return temp;
}


export const translateDataToTree = (data:any[],option = {parentId:'parentId',id:'id'}) => {
    let parents = data.filter((value:any) => value[option.parentId] === 'undefined' || value[option.parentId] == null || value[option.parentId] == 0 || !data.map(i=> i[option.id]).includes(value[option.parentId]))
    let children = data.filter(value => value[option.parentId] !== 'undefined' && value[option.parentId] != null && value[option.parentId] != 0)

    let translator = (parents:any[], children:any[]) => {
        parents.forEach((parent) => {
            children.forEach((current, index) => {
                if (current[option.parentId] === parent[option.id]) {
                    let temp = JSON.parse(JSON.stringify(children))
                    temp.splice(index, 1)
                    translator([current], temp)
                    typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                }
            })
        })
    }

    translator(parents, children)
    return parents
}
