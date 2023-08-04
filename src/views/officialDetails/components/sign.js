import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useStore } from '/@/store/index'
import { debounce } from 'lodash'


var sign = {
    isConnectWS: false,
    // 主通道，用于开始签名、结束签名等
    websocket: null,
    wsUrl: 'ws://127.0.0.1:29999/',
    //获取手写设备的连接状态
    deviceStatusParams: {
        HWPenSign: 'HWGetDeviceStatus'
    },
    // 打开设备,开始签名
    startSignParams: {
        HWPenSign: 'HWInitialize',
        "title": "批注人：",
        "key": "D9063E7FE567E09E84B00B5ECDE9B3F2",
        "nOrgX": -1,
        "nOrgY": -1,
        "nWidth": 500,
        "nHeight": 300,
        "nShowEraser": 0,
        "nTitleHeight": -1,
        "nButtonHeight": -1,
        "nImageWidth": -1,
        "nImageHeight": -1,
        "nFingerCap": 0,
        "nConfirmTimeout": 30,
        backImg:'',
        backText:''
    },
    //采集指纹
    capFingerParams: {
        HWPenSign: 'HWCapFinger',
        "key": "D9063E7FE567E09E84B00B5ECDE9B3F2"
    },
    //推送页面到手写屏
    showPageParams: {
        HWPenSign: 'HWShowPage',
        "nShowScreen": 1,
        "nMouseEnable": 1
    },
    //关闭设备,签名结束 
    endSignParams: {
        HWPenSign: 'HWFinalize'
    },
    connectCallback: null, //链接回调
    startSignCallback: null, //开始签名回调
    capFingerCallback: null, //采集指纹回调
    endSignCallback: null,    //结束操作回调
    showPageCallback: null,   //推送页面回调
    signConfirmCallback: null, //确认签字，关闭设备
    reSetSignParam: function () {
        sign.startSignParams.nOrgX = -1;
        sign.startSignParams.nOrgY = -1;
        sign.startSignParams.nWidth = 500;
        sign.startSignParams.nHeight = 300;
        sign.startSignParams.nImageWidth = -1;
        sign.startSignParams.nImageHeight = -1;
        sign.startSignParams.nShowEraser = 0;
        sign.startSignParams.nConfirmTimeout = 30;
        sign.startSignParams.nFingerCap = 0;
        sign.startSignParams.nTitleHeight = -1;
        sign.startSignParams.nButtonHeight = -1;
    },
    logMessage: function (message) {
        if (typeof window.onHandleMessage !== 'undefined')
            window.onHandleMessage(message);
        else
            console.log(message);
    },
    // 连接websocket
    connectWebSocket: function (callback) {
        sign.connectCallback = callback
        if ('WebSocket' in window) {
            sign.websocket = new WebSocket(sign.wsUrl);
        } else if ('MozWebSocket' in window) {
            sign.websocket = new MozWebSocket(sign.wsUrl);
        } else {
            window.alert("浏览器不支持WebSocket");
            return;
        }

        sign.websocket.binaryType = "arraybuffer";
        sign.websocket.onopen = function () {
            console.log('链接签名服务成功，URL: ', sign.wsUrl);
            sign.isConnectWS = true;
            if (sign.websocket.readyState == 1) {
                sign.connectCallback(true);
            }
        };
        sign.websocket.onmessage = function (evt) {
            sign.wsMessage(evt);
        };
        sign.websocket.onclose = function (evt) {
            if (sign.websocket.readyState == 3) {
                console.log('链接关闭', evt)
                sign.connectCallback(false);
            }
            sign.isConnectWs = false;
            sign.connectWebSocket(sign.connectCallback);
        };
        sign.websocket.onerror = function (evt) {
            if (sign.websocket.readyState == 3) {
                console.log('链接报错', evt)
                sign.connectCallback(false);
            }
        };
    },
    // 向socket通道发送信息
    sendMsg: function (param) {
        console.log('发送信息', param)
        if (sign.websocket && param) {
            sign.websocket.send(JSON.stringify(param));
        }
    },
    // websocket通道返回的信息
    wsMessage: function (res) {
        console.log('server response:', res)
        var res = JSON.parse(res.data)
        var cmd = res.HWPenSign;
        switch (cmd) {
            case 'HWInitialize':
                sign.startSignCallback(res)
                break;
            case 'HWGetSign':
                if (sign.signConfirmCallback != null)
                    sign.signConfirmCallback(res)
                break
            case 'HWFinalize':
                sign.endSignCallback(res)
                break
            case 'HWCapFinger':
                sign.capFingerCallback(res)
                break;
            case 'HWShowPage':
                sign.showPageCallback(res)
                break;
        }
    },
    // 断开检测服务器连接
    disconnectWebSocket: function () {
        if (sign.websocket) {
            if (sign.websocket.readyState == 1)
                sign.websocket.close();
            sign.websocket = null;
            return true;
        }
        else
            return false;
    },
    // 服务连接出错
    onSocketError: function (evt) {
        sign.logMessage("连接检测服务有问题...");
    },
    // 打开设备开始签名
    startSign: function (callback, orgX, orgY, width, height, imgwidth, imgheight, titleheight, buttonheight, fgrCap, timeout) {
        sign.reSetSignParam();
        sign.startSignCallback = callback;
        if (orgX >= 0)
            sign.startSignParams.nOrgX = orgX;
        if (orgY >= 0)
            sign.startSignParams.nOrgY = orgY;
        if (width > 0)
            sign.startSignParams.nWidth = width;
        if (height > 0)
            sign.startSignParams.nHeight = height;
        if (imgwidth > 0)
            sign.startSignParams.nImageWidth = imgwidth;
        if (imgheight > 0)
            sign.startSignParams.nImageHeight = imgheight;
        if (timeout > 0)
            sign.startSignParams.nConfirmTimeout = timeout;
        if (fgrCap >= 0)
            sign.startSignParams.nFingerCap = fgrCap;
        if (titleheight > 0)
            sign.startSignParams.nTitleHeight = titleheight;
        if (buttonheight > 0)
            sign.startSignParams.nButtonHeight = buttonheight;
        sign.sendMsg(sign.startSignParams);
    },
    // 确认签名
    getSign: function (callback) {
        sign.signConfirmCallback = callback;
    },
    //采集指纹
    capFinger: function (callback) {
        sign.capFingerCallback = callback;
        sign.sendMsg(sign.capFingerParams);
    },
    //结束签名
    endSign: function (callback) {
        sign.endSignCallback = callback;
        sign.sendMsg(sign.endSignParams);
    },
    //推送页面到手写屏
    showPage: function (callback, nScreen, mouseEnable) {
        sign.showPageCallback = callback;
        sign.showPageParams.nShowScreen = nScreen;
        sign.showPageParams.nMouseEnable = mouseEnable;
        sign.sendMsg(sign.showPageParams);
    },
};




export default function (history=[],cancel) {
    const store = useStore()
    const isConnectWS = ref(false)
    const signImg = ref('')
   

    function initSign() {
        sign.connectWebSocket(function (res) {
            if (res == true) {
                isConnectWS.value = true
            }
            else {
                isConnectWS.value = false
                // ElMessage.error('驱动服务连接失败!')


            }
        });


    }

    const startSign = (startX,startY,width,height) => {
        sign.startSignParams.title = `批注人：${store.state.userInfos.userInfos.name}`
        let canvas = document.getElementById("canvas-container").querySelector("canvas")
    
        // sign.startSignParams.backImg =  canvas.toDataURL( 'image/png').split('base64,')[1]

        if(sign.isConnectWS){
            debounce(sign.startSign(function(res){
                if(res.msgID == 0 ){
                    getsign(startX,startY,width,height)
                }
            }, -1, -1, 1280, 500, width, height, -1, -1, 0, 30)),300
           
        }

    }

    function getsign(startX,startY,width,height) {
        if (sign.isConnectWS == true) {
           sign.getSign(function (res) {
              if (res.msgID == 0) {

                signImg.value = res.message;
                drawImage(res.message,startX,startY,width,height)
              }
              else
                 console.log("getSign error: " + res.message);
           });
        }
        else
           ElMessage.error("手写屏WebSocket服务不存在或者被关闭");
     }

     function drawImage (imgSrc,startX,startY,width,height){
        let img = new Image()
        img.src = imgSrc
       
        let canvas = document.getElementById("canvas-area").querySelector("canvas")
        const ctx = canvas.getContext('2d')
        img.onload = function(){
           
            
            ctx.drawImage(img,startX,startY)
            
            
            let image = ctx.getImageData(0, 0, canvas.width, canvas.height); //撤回按钮的第一条历史记录
            history.push(image);
            
        }
     }

    const endSign = () => {
        sign.disconnectWebSocket()
    }

    const eventListenerArea = ()=>{
     

    }

    return {
        isConnectWS,
        signImg,
        initSign,
        startSign,
        endSign,
        eventListenerArea
    }

}



