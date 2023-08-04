import { useStore } from '/@/store/index'
import { ElMessage } from 'element-plus'
import { importSuperviseData} from "/@/api/officialdocument/supervise";
import { ref } from 'vue'

export default function() {
    const store = useStore()
    const loading = ref(false)
    const taskList = ref<any[]>([])

    const batchUpload = async (upload: any) => {

      
        const fileExtension = upload.file.name.split(".").pop();
        if (fileExtension === "xlsx") {
          //上传文件并获取返回值
          loading.value = true
          const fd = new FormData();
          fd.append("file", upload.file);
          const { code, data }: any = await importSuperviseData(fd);
          loading.value = false
          if (1 === code) {
            taskList.value = data.map((d: any) => {
              let assistNames = d.assistName.split(",");
              return {
                ...d,
                lixiang: store.getters.userId,
                assist: d.assist.split(",").map((s: string, i: number) => {
                  return {
                    id: s,
                    name: assistNames[i],
                  };
                }),
              };
            });
          }
        } else {
          //格式不符
      
          ElMessage.warning("请选择 .xlsx格式文件!");
        }
    };

    return {
        loading,
        taskList,
        batchUpload
    }

}