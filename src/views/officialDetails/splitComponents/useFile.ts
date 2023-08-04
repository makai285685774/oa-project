
import { receiptRegisterApi } from "/@/api/officialdocument/work";
import { ElMessage, } from "element-plus";
export default function splitFunction() {
  //字节转字符方法
  const byteSize = (size: any) => {
    if (!size) return "";
    var num = 1024.0; //byte
    if (size < num) return size + "B";
    if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + "KB"; //kb
    if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
    if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + "GB"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "TB"; //T
  };
  // 下载文件
  const downLoadlFile = async (scopeRow: any, p: string) => {
    let param = {
      gridFsId: scopeRow.fileId,
    };
    const res: any = await receiptRegisterApi().contentDownload(param);
    let blob = new Blob([res]);
    let fileName = scopeRow.fileName;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };
  //正文上传之前
  const beforeUpload = async (file: any) => {
    var name = file.name.substring(file.name.lastIndexOf('.') + 1)
    var isDOC = name == 'doc' || name == 'docx' || name == 'pdf' || name == 'ofd'

    if (!isDOC) {
      ElMessage.error(`上传文件不支持${name}格式!`)
      return false
    }
    return true;
  };
  return {
    byteSize,
    downLoadlFile,
    beforeUpload,

  };
}