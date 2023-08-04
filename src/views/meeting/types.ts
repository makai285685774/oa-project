export type MeetingItem = {
    id: string
    describe: string
    lastModifiedBy: string
    lastModifiedDate: string
    applyId: string
    applyName: string
    category: string
    endTime: string
    fileId: string
    hostId: string
    hostName: string
    name: string
    number: string
    roomId: string
    roomName: string
    startTime: string
    isApproved?:string
}

export type User = {
    id:string
    name:string
    username:string
}

export type MeetingUser = {
    id:string
    user_name:string
    user_id:string
    userId:string
    name:string
    userName:string
    organization_name:string
    organizationName:string
    organization_id:string
    confirm:string
    status:string
}

export type MeetingRoom = {
    id:string
    name:string
    address:string
    number:string
    describe:string
}
