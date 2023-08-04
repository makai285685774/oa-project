interface TableData {
	id?: string;
	name: string;
	describe: string;
	createBy?: string;
	createDate?: string;
	lastModifiedBy?: string;
	lastModifiedDate?: string;
}
interface TableDataState {
	tableData: {
		data: Array<TableData>;
		total: number;
		loading: boolean;
		param: {
			page: number;
			size: number;
            name?: string;
            describe?: string;
			orderBy?: string;
			orderSc?: string;
		};
	}
	showPermission:boolean
	showUser:boolean
	currentRow?:TableData
}
interface MenuDataTree {
	id: number;
	label: string;
	children?: MenuDataTree[];
}
interface RoleState {
	isShowDialog: boolean;
    ruleForm:TableData;
}
export { TableData, TableDataState, MenuDataTree, RoleState };
