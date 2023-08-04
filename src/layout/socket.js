
import SockJS from 'sockjs-client/dist/sockjs.min.js'
import Stomp from "stompjs";

export default function (option){
  
    const SERVER_URL = import.meta.env.VITE_SERVER_URL
    let url = `${ SERVER_URL }/webSocket?id=${option.userId}`;
    const socket = new SockJS(url)
    const stomp = Stomp.over(socket)

    stomp.connect({
        id:option.userId
    },()=>{
        stomp.subscribe("/talk/talk1/" + option.userId, function ({ body }) {
            option.subscribe && option.subscribe(JSON.parse(body))
    
        });
    })

    function close(){
        if (stomp) {
            stomp.disconnect();
        }
    }
    window.onbeforeunload = function(){
        close()
    }

    return {
        close
    }

}