export function getdocumentMsg(list: any) {
	
	var list1: any = []
	var num = 0
	var index1 = 0
	var index2 = 0
	var flag = true
	var flag1 = true
	var regex = /[0-9]*(\]|\)).*号$/g;
	// var regex1 = /急/g
	var list4: any = []
	var list3: any = []
	var flag2 = true
	var flag3 = true
	var flag4 = true
	var flag5 = false
	var flag6 = false
	var flag7 = true
	var flag8 = true
	var index3 = 0
	var index4 = 0
	var index5 = 0
	var string4:any
	list.forEach((item: any, index: any) => {
		if (item !== "") {
			list1.push(item)
		}
		if (regex.test(item)) {
			index2 = index
		}
		if (item == "" && index > num && flag && index2 != 0&& num!=0) {
			flag = false
			
		}
		if (item != "" && flag && index > index2 && index2 != 0) {
			list3.push(item)
			num = index
		}
	})
	if (index2 != 0) {
		list1.forEach((item: any, index: any) => {
			if (regex.test(item) && flag1) {
				flag1 = false
				index1 = index
				return
			}
		})
		if (list[0].length < 5) {
			var string = list1[0].replace(/\s*/g, "")
			var string2 = list1[index1].replace(/\s*/g, "")
			var list2 = list1.splice(1, index1 - 1)
		} else {
			var string2 = list1[index1].replace(/\s*/g, "")
			var list2 = list1.splice(0, index1)
		}
		var string3 = list3.join(',').replace(/\s*/g, "")
		var string1 = list2.join(',').replace(/\s*/g, "")
		var obj = {
			title: string3,
			documentNum: string2 || "",
			urgent: string || "",
			getUnit: string1,
			getDate: new Date().toLocaleString(),
			signer: JSON.parse(sessionStorage.getItem('userMessage') || '').name
		}
	
		return obj
	} else {
		list.forEach((item: any, index: any) => {
			if (item != '' && flag2 && item.length < 5 && index3 == 0) {
				flag2 = false
				index3 = index +1
				string4 = item.replace(/\s*/g, "")
			} 
			if (item != '' && flag3 && item.length > 4  && index3 == 0 && flag2) {
				index3 = index +1
				flag3 = false
			}
			//紧急
			if(index>index3-1 && item != '' && !flag2 && flag4 && flag3){
				list4.push(item)
				index5 = index
			}
			if(index>index5 &&item == ''&& index5!= 0 && !flag2 && flag4  && flag3){
				index4 = index
				flag4 = false
				flag5 = true
			}

			if(index>index4+1 && item != '' && flag5 && !flag4  && index3 != 0 && flag3){
				list3.push(item)
				flag8 = false
			}
			if(index>index4+1  &&item == ''&& flag5 && !flag4  && index3 != 0 && flag3  && !flag8){
				flag5 = false
			}
			//非紧急
			if(index>index3-2 && item != '' && !flag3 && flag4  && flag2){
				list4.push(item)
			}
			if(index>index3-1  &&item == ''&& !flag3 && flag4 && index3 != 0 && flag2){
				index4 = index
				flag4 = false
				flag6 = true
			}
			if(index>index4 && item != '' && flag6  && !flag4  && index4 != 0 && flag2){
				list3.push(item)
				flag7 = false
			}
			if(index>index4  && item == ''&& flag6  && !flag4  && index4 != 0 && flag2 && !flag7){
				flag6 = false
			}
		})
		
		var string3 = list3.join(',').replace(/\s*/g, "")
		var string1 = list4.join(',').replace(/\s*/g, "")
		var obj = {
			title: string3,
			documentNum: string2 || "",
			urgent: string4 || "",
			getUnit: string1,
			getDate: new Date().toLocaleString(),
			signer: JSON.parse(sessionStorage.getItem('userMessage') || '').name
		}
		
		return obj
	}

}