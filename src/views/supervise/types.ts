export type Supervise = {
    id?:string
    name:string
    type:string
    source:string
    status:string
    finishDate:string
    createDate:string
    createBy:string
    describe:string

}

export type SuperviseTask = {
    name:string
    finishDate:string
    roomId:string
    roomName:string
    assist:Array<string>
    lixiang:string
    leader:string
}

export type PassFlow = {

    ActivityName: string
    ActivityType: string
    comment: Array<any>
    startTime: string
    pid:string
    id: string
    endTime: string
    userName:string
}

export type UrgeFlow = {
    _isEdit?:boolean
    message:string
    createDate:string
}

export type Instruction = {
    name:string
    content:string
    createDate:string
}