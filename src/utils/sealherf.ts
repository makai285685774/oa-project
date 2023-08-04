
import { receiptRegisterApi } from "/@/api/officialdocument/work";

export function sealhttp(val: any) {
    if (process.env.NODE_ENV !== 'development') {
        if (location.href.indexOf('192.168') > -1) {
            return 'http://192.168.25.77:8041/sealDownload?sealId=' + val
        } else {
            return 'http://10.23.9.135:9997/sealDownload?sealId=' + val
        }
    } else {
        return 'http://192.168.25.77:8041/sealDownload?sealId=' + val
    }
    // 'http://192.168.25.44:9992/sealDownload?sealId=' + val
}
export function previewImage(val: any) {

    return 'http://192.168.25.31:8099/' + '/api/file/announcement?id=' + val

}
// 即时通讯
export function communication() {
    if (location.href.indexOf('192.168') > -1) {
        return 'http://192.168.40.52:8893/act/rest/modeler.html'
    } else {
        return 'http://10.23.9.135:8099/act/rest/modeler.html'
    }
}