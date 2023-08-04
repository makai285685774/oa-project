import { reactive,toRefs } from 'vue';
export default function(){
    const state = reactive({
        workFileList: [],
        attachmentFileList: [],
    })

    const getFileList = (data: any) => {
      console.log(data)
        //正文列表
        if(data.contListId){
            let contfileNameList = data.contfileName.split(",");
            let contfileSizeList = data.contfileSize.split(",");
            let contfileUserList = data.contfileUserName.split(",");
            state.workFileList = data.contListId.split(",").map((id: string, index: number) => {
              return {
                fileId: id,
                fileName: contfileNameList[index],
                fileSize: contfileSizeList[index],
                userName: contfileUserList[index],
              };
            });
        }

        state.workFileList = state.workFileList.concat(data.workList)
        //附件
        if (data.fileId) {
          let fileNameList = data.fileName.split(",");
          let fileSizeList = data.fileSize.split(",");
          let fileUserList = data.fileUserName.split(",");
          state.attachmentFileList = data.fileId.split(",").map((id: string, index: number) => {
            return {
              fileId: id,
              fileName: fileNameList[index],
              fileSize: fileSizeList[index],
              userName: fileUserList[index],
            };
          });
        }

        state.attachmentFileList = state.attachmentFileList.concat(data.attachList)
    };


    return {
        getFileList,
        ...toRefs(state)

    }
}
    
    