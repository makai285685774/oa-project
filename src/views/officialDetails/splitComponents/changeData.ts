
export async function changeData(oldObj: any, obj: any, opinion: string) {

    let uerName = JSON.parse(sessionStorage.getItem("userInfo") || "").name
    var newObj: any = {}
    for (const key in obj) {
        obj[key].forEach((item: any, i: any) => {
            newObj[obj[key][i].name] = obj[key][i].elementText
        })
    }
    for (const newKey in newObj) {
        console.log(newKey);
        
        // 当前节点审批时间
        if (newKey == 'approvalDate') {
            if (newObj[newKey].indexOf(',') > -1) {
                if (oldObj.otherDirectorName) {
                    //如果其他领导为一个，流程结束
                    if (oldObj.otherDirectorName.split(',').length == '1') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = new Date().toLocaleString();

                        }

                    }
                    if (oldObj.otherDirectorName.split(',').length == '2') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = new Date().toLocaleString();
                            oldObj['other1'] = true
                        }
                        if (oldObj.otherDirectorName.split(',')[1] == uerName) {
                            oldObj[newObj[newKey].split(',')[1]] = new Date().toLocaleString();
                            oldObj['other2'] = true
                        }

                    }
                }
            } else {
                oldObj[newObj[newKey]] = new Date().toLocaleString();
            }
        };
        // 当前节点审批建议
        if (newKey == 'approvalAdvice') {
            if (newObj[newKey].indexOf(',') > -1) {
                if (oldObj.otherDirectorName) {
                    //如果其他领导为一个，流程结束
                    if (oldObj.otherDirectorName.split(',').length == '1') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = opinion ? opinion : '同意';
                        }
                    }
                    //如果其他领导为两个
                    if (oldObj.otherDirectorName.split(',').length == '2') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = opinion ? opinion : '同意';
                        }
                        if (oldObj.otherDirectorName.split(',')[1] == uerName) {
                            oldObj[newObj[newKey].split(',')[1]] = opinion ? opinion : '同意';
                        }

                    }
                }
            } else {
                oldObj[newObj[newKey]] = opinion ? opinion : '同意';                
            }

        }
        // 当前节点审批人
        if (newKey == 'approvalName') {
            if (newObj[newKey].indexOf(',') > -1) {
                if (oldObj.otherDirectorName) {
                    //如果其他领导为一个，流程结束
                    if (oldObj.otherDirectorName.split(',').length == '1') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = uerName;

                        }
                    }
                    if (oldObj.otherDirectorName.split(',').length == '2') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = uerName;
                        }
                        if (oldObj.otherDirectorName.split(',')[1] == uerName) {
                            oldObj[newObj[newKey].split(',')[1]] = uerName;
                        }

                    }
                }
            } else {
                oldObj[newObj[newKey]] = uerName;
            }

        }
        // 对下一审批人退回理由为空
        if (newKey == 'backReason') {
            oldObj[newObj[newKey]] = '';
        }
        // 对下一审批人是否显示驳回按钮
        if (newKey == 'isBsck') {
            oldObj['isBsck'] = newObj[newKey];
        }
        // 对下一审批人是否显示驳回按钮
        if (newObj[newKey] == 'isBackOpinion') {
            oldObj['isBackOpinion'] = '';
        }
        if (newObj[newKey] == 'isBackOpinion') {
            oldObj['isBackOpinion'] = '';
        }
        
    }
    return oldObj

}
export async function backData(oldObj: any, obj: any, opinion: string) {

    let uerName = JSON.parse(sessionStorage.getItem("userInfo") || "").name
    var newObj: any = {}
    for (const key in obj) {
        obj[key]?.forEach((item: any, i: any) => {
            newObj[obj[key][i].name] = obj[key][i].elementText
        })
    }

    for (const newKey in newObj) {
        // 当前节点审批时间
        if (newKey == 'approvalDate') {
            if (newObj[newKey].indexOf(',') > -1) {
                if (oldObj.otherDirectorName) {
                    //如果其他领导为一个，流程结束
                    if (oldObj.otherDirectorName.split(',').length == '1') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = new Date().toLocaleString();
                            oldObj['otherDirectorOneName'] = uerName
                        }

                    }
                    if (oldObj.otherDirectorName.split(',').length == '2') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = new Date().toLocaleString();
                            oldObj['other1'] = false
                            oldObj['otherDirectorOneName'] = uerName
                        }
                        if (oldObj.otherDirectorName.split(',')[1] == uerName) {
                            oldObj[newObj[newKey].split(',')[1]] = new Date().toLocaleString();
                            oldObj['other2'] = false
                            oldObj['otherDirectorTwoName'] = uerName
                        }

                    }
                }
            } else {
                oldObj[newObj[newKey]] = new Date().toLocaleString();
            }
        };
        // 当前节点审批建议
        if (newKey == 'backOpinion') {
            if (newObj[newKey].indexOf(',') > -1) {
                if (oldObj.otherDirectorName) {
                    if (oldObj.otherDirectorName.split(',').length == '1') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = opinion ? opinion : '不同意';
                        }
                    }
                    //如果其他领导为两个
                    if (oldObj.otherDirectorName.split(',').length == '2') {
                        if (oldObj.otherDirectorName.split(',')[0] == uerName) {
                            oldObj[newObj[newKey].split(',')[0]] = opinion ? opinion : '不同意';
                        }
                        if (oldObj.otherDirectorName.split(',')[1] == uerName) {
                            oldObj[newObj[newKey].split(',')[1]] = opinion ? opinion : '不同意';
                        }

                    }
                }

            } else {
                oldObj[newObj[newKey]] = opinion ? opinion : '不同意';
            }

        }
    }
    return oldObj

}