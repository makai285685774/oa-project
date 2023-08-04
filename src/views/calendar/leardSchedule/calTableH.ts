const getThemeConfig = () => {
    let themeConfig = localStorage.getItem('themeConfig')
    if(themeConfig){
        return JSON.parse(themeConfig)
    }else{
        return {
            isTagsview: false
        }
    }

	
}
//计算table高度
export default function (offsetH=220){
    const winH = document.documentElement.clientHeight || document.body.clientHeight

    let isTagView = getThemeConfig().isTagsview
    let offsetTag =  isTagView ? 0 : 40
    return winH/2 - offsetH + offsetTag
}