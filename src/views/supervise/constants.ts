
export const SUPERVISE_STATUS_NOT_BEGIN = '1',SUPERVISE_STATUS_BEGINNING='2',SUPERVISE_STATUS_FINISH = '3'

export const SUPERVISE_STATUS = {
    [SUPERVISE_STATUS_NOT_BEGIN]:'未开始',
    [SUPERVISE_STATUS_BEGINNING]:'进行中',
    [SUPERVISE_STATUS_FINISH]:'已办结',
   
}

export const SUPERVISE_SOURCE_DEFAULT = '1'
export const SUPERVISE_SOURCE = {
    '1':'会议决议',
    '2':'中央精神',
    '3':'上级发文',
    '4':'领导批示',
    '5':'上级要求',
    '6':'其他'
}

export const SUPERVISE_TYPE_DEFAULT = '1'
export const SUPERVISE_TYPE = {
    '1':'会议纪要',
    '2':'重大项目',
    '3':'领导批示',
    '4':'重点工作',
    '5':'其他'
}

export const SUPERVISE_SOON_DAY = 'supervise-soon-day'