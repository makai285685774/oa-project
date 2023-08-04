import { ref, getCurrentInstance } from 'vue';
import { ElMessageBox } from 'element-plus';

export default function useMng<T>() {
	const checkAuth = getCurrentInstance()?.appContext.config.globalProperties.checkAuth;
	const addRef = ref();
	const editRef = ref();

	// 打开新增用户弹窗
	const onOpenAdd = () => {
		// if (!checkAuth(permission)) {
		// 	return;
		// }
		addRef.value.openDialog();
	};

	// 打开修改用户弹窗
	const onOpenEdit = (row: T) => {
		// if (!checkAuth(permission)) {
		// 	return;
		// }
		editRef.value.openDialog(row);
	};

	// 删除用户
	const onRowDel = (text: string, callback: () => void) => {
		ElMessageBox.confirm(`此操作将永久删除 "${text}"，是否继续?`, '提示', {
			confirmButtonText: '确认',
			cancelButtonText: '取消',
			type: 'warning',
		})
			.then(() => {
				callback && callback();
			})
			.catch(() => {});
	};

	return {
		onOpenAdd,
		onOpenEdit,
		onRowDel,
		addRef,
		editRef,
	};
}
