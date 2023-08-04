//字节转字符方法
export const byteSize = (size: any) => {
    if (!size) return "";
    var num = 1024.0; //byte
    if (size < num) return size + "B";
    if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + "KB"; //kb
    if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
    if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + "GB"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "TB"; //T
};

export const isImageFile = (fileName:string)=>{
    let extension = fileName.split('.').pop()

    if(extension === "png" || extension === "jpg" || extension === "jpeg"){
        return true
    }

    return false

}

export const docExtension = ['doc','docx','pdf','ofd'];
export const isDocFile = (fileName:string)=>{
    let extension = fileName.split('.').pop()

    var isDOC = extension && docExtension.includes(extension)
    if (isDOC) {
      return true
    }
    return false
}

export function getCurrentFlow(arr:any[],name=''){
    return arr.find((flow:any)=>flow.id === name)
}

export function getNextUserKey(arr:any[],name=''){
    let findIndex = arr.findIndex((flow:any)=>flow.id === name)
    let nextFlow =  arr[findIndex + 1]

    if(nextFlow){
        let flowUserKey = nextFlow?.assignee.substring(2).replace("}", "");
        return flowUserKey
    }
    return null
}
export function isEndFlow(arrAll:any[],name=''){
    if(getNextUserKey(arrAll,name)) return false
    return true
}