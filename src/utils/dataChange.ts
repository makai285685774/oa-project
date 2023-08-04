export function dataChange(list: any) {
    var List: {}[] = []
    var object = { executionId: '', processInstanceId: '', taskId: '', Id: '', name: '',directorList:'' }
    var object2 = { executionId: '', processInstanceId: '', taskId: '', Id: '', name: '' }
    var total = 0
    list?.forEach((item: any, index: number) => {
        if (index == list.length - 1) {
            total = item.total
            return
        }
        if (!Array.isArray(item)) {
            object = { executionId: '', processInstanceId: '', taskId: '', Id: '', name: '',directorList:''} as any
            object .processInstanceId = item.userId.processInstanceId
            for (var val in item) {
                object[val] = item[val].value == undefined?  '' :item[val].value
            }
            object.taskId = item.taskId 
            object.directorList = item.directorList
            // object.Id = object.Id.value||item.Id
            // object.executionId = item.executionId || item.exId
            // object.name = item.name
            List.push(object)
        } else {
            var object1 = {}
            item?.forEach((msg, index) => {
                if (msg.processVariables) {
                    object1 = {
                        taskId: msg.taskId ||  msg.Id,
                        Id: msg.Id,
                        ...msg.processVariables,
                        executionId: msg.executionId || msg.exId,
                        processInstanceId: msg.processInstanceId,
                        name: msg.name
                    }
                    List.push(object1)
                } else {
                    object2 = { executionId: '', processInstanceId: '', taskId: '', Id: '', name: '' }
                    object2.taskId = msg.taskId||  msg.Id
                    object2.Id = msg.Id
                    object2.processInstanceId = msg.processInstanceId
                    object2.executionId = msg.executionId || msg.exId
                    object2.name = msg.name
                    for (var val in msg) {
                        object2[val] = msg[val].value || msg[val]
                    }
                    List.push(object2)
                }

            })
        }
    });
    var obj = {
        List: List,
        total: total
    }
    return obj
}