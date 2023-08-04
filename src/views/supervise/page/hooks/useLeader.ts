import { ref } from 'vue';
import userApi from '/@/api/user/index';
export default function () {
	const leaderList = ref<any[]>([]);
	const initLeader = async () => {
		let params = {
			page: 1,
			size: 10,
			position: '3', //局长
		};
		const { data } = await userApi().getUserList(params);
		leaderList.value = data.list || [];
	};

    return {
        leaderList,
        initLeader
    }
}
