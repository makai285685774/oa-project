import { IEditorConfig } from "@wangeditor/editor";
import { Session } from '/@/utils/storage'


type InsertImageFnType = (url: string, alt: string, href: string) => void
type InsertVideoFnType = (url: string, poster: string) => void

const SERVER_URL = import.meta.env.VITE_SERVER_URL


export const editorConfig : Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
    MENU_CONF: {
      uploadImage: {
        server: process.env.NODE_ENV === 'development' ? "/interface/api/announcement/upload" : '/api/announcement/upload',
        fieldName:'file',
        maxNumberOfFiles: 10,
        base64LimitSize: 5 * 1024, // 5kb
        headers:{
            authorization:`${Session.get('token')}`
        },
        customInsert(res:any,insertFn:InsertImageFnType){
            //处理返回结果res
            const { code,data }  = res
            if(1===code){
                const url = SERVER_URL + '/api/announcement/preview?id=' + data
                const alt = ''
                const href = ''
                insertFn(url,alt,href)
            }

          
        }
      },

      uploadVideo:{
        server: process.env.NODE_ENV === 'development' ? "/interface/api/announcement/upload" : '/api/announcement/upload',
        fieldName:'file',
        headers:{
            authorization:`${Session.get('token')}`
        },
        customInsert(res:any,insertFn:InsertVideoFnType){
            //处理返回结果res
            const { code,data }  = res
            const url = SERVER_URL + '/api/announcement/preview?id=' + data
            const poster = ''
            // 从 res 中找到 url poster ，然后插入视频
            insertFn(url,poster)
        }
      }
      
     
    },
  };


export const toolbarConfig = {


}