import { Session } from '/@/utils/storage';
import { ElMessage } from 'element-plus';
export function checkAuth(authCode: string) {
	// if (!Session.get('permissionList').includes(authCode)) {
	// 	ElMessage.error('暂无权限访问');
	// }
	return Session.get('permissionList').includes(authCode);
}
