import { receiptRegisterApi } from "/@/api/officialdocument/work";
import { appliedApi } from '/@/api/applied/index'

export default function(id:string){

    const fetchFileInfo = async ()=>{
        const { data } = await appliedApi().getFileInfo(id)

        
        return data
    }

    const downloadFile = async (fileName:string)=>{
     
        let param = {
            gridFsId:id,
        }
        const res: any = await receiptRegisterApi().contentDownload(param)
        let blob = new Blob([res])
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = fileName
        link.click()
        link.remove()
        URL.revokeObjectURL(link.href)
        

    }
    return {
        fetchFileInfo,
        downloadFile
    }



}