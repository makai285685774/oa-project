

//判断节点是否可编辑 默认为true
export const isDisabled = (fieldName='',nodeName='')=>{
    //
    let  result = true
    //字段和节点映射关系
    const FIELD_NODE_MAP = {    
 
        title:'拟稿,阅办登记,传阅登记,办公室,拟稿人',
        getUnit:'拟稿,阅办登记,传阅登记,办公室',
        documentNum:'拟稿,阅办登记,传阅登记,办公室',
        fontNumber:'拟稿,阅办登记,传阅登记,办公室',
        drafter:'拟稿人',
        sponsor:'拟稿处室',
        organizer:'拟稿',
        copyUnit:'拟稿',
        wordSize:'字号',
        category :'白头类别',
        urgent:'紧急程度',
        postDate:'拟稿时间',
        nuclearDraft:'核稿人',
        review:'办公室核稿',
        proofreading:'校对人',
        forward:'转发部门',
        formwork: '模板',
        documentId: '公文文件',
        normative:'拟稿',
        competition:'拟稿',
        internal:'拟稿',
        external:'拟稿',
        opinion:'拟办意见,阅办登记,传阅登记,办公室',
        bureauleaders:'局长审核',
        draftingUnit:'处长审批,承办处室',
        ledSign:'会签',
        leaderApproval:'阅批意见,局长传阅,局长传阅2,局长传阅3',
        circulateSignature:'拟稿,阅办登记,传阅登记,办公室',
        undertakingOpinions:'承办处室',
        hostOffice:'相关处室',
        coOrganizer:'相关处室',
        otherDirectorTwoAdvice:'其他局长审核',
        otherDirectorOneAdvice:'其他局长审核',


    }
    if( FIELD_NODE_MAP[fieldName] && FIELD_NODE_MAP[fieldName].split(',').includes(nodeName) ) result = false

    
    return result


}