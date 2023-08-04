export const translateDataToTree = (data: any) => {
	let parents = data.filter(
		(value: any) =>
			value.parentId === 'undefined' || value.parentId == null || value.parentId == 0 || data.map((i:any) => i.id).indexOf(value.parentId) == '-1'
	);
	let children = data.filter((value: any) => value.parentId !== 'undefined' && value.parentId != null && value.parentId != 0);
	let translator = (parents: any, children: any) => {
		parents.forEach((parent: any) => {
			children.forEach((current: any, index: number) => {
				if (current.parentId === parent.id) {
					let temp = JSON.parse(JSON.stringify(children));
					temp.splice(index, 1);
					translator([current], temp);
					typeof parent.children !== 'undefined' ? parent.children.push(current) : (parent.children = [current]);
				}
			});
		});
	};

	translator(parents, children);
	return parents;
};
