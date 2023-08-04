import { Module } from 'vuex';
import { Session } from '/@/utils/storage';
import { TaskTypeState, RootStateTypes } from '/@/store/interface/index';
import { queryTaskCount } from '/@/api/meeting/index'
import { receiptRegisterApi } from "/@/api/officialdocument/work";
import useDic from '/@/api/dic/index'
import { translateDataToTree } from '/@/views/supervise/utils'



const taskModule: Module<TaskTypeState, RootStateTypes> = {
	namespaced: true,
	state: {
		taskCount: {
			transaction: 0,
			work: 0,
			workGet: 0,
			workPost: 0,
			meet: 0,
			notice: 0,
			message: 0,
			chengban: 0
		},
		superviseFlowsAll: [],  //督察督办工作流所有节点

		superviseOriginTree: [],     //督办来源码表
		superviseCategoryMap: {},   //督办分类
		superviseOriginMap: {}
	},
	mutations: {
		getTaskCount(state, data: any) {
			let conditionList = ['transaction', 'work', 'workGet', 'workPost', 'meet', 'notice', 'message', 'chengban']

			conditionList.forEach((k: string) => {
				if (data[k] || data[k] == 0) {
					state.taskCount[k] = data[k]
				}
			})
			// console.log(state.taskCount);

		},
		getSurperviseFlowsAll(state, arr: Array<any>) {
			state.superviseFlowsAll = arr
		},
		getNextFlow(state, [name, callback]) {

			// let currentFlow = state.superviseFlowsAll.find((flow:any)=>flow.id === name)
			// if(currentFlow){
			// 	let targetRef = currentFlow.outgoingFlows[0].targetRef
			// 	let nextFlow = state.superviseFlowsAll.find((flow:any)=>flow.id === targetRef)


			// 	callback && callback(nextFlow)


			// }

			let currentIndex = state.superviseFlowsAll.findIndex((flow: any) => flow.id === name)
			if (currentIndex > -1) {
				let nextFlow = state.superviseFlowsAll[currentIndex + 1]

				callback && callback(nextFlow)
			}

		},
		getSuperviseOrigin(state, arr: Array<any>) {

			state.superviseOriginTree = translateDataToTree(arr)

			state.superviseOriginMap = state.superviseOriginTree.reduce((pre, cur) => {

				pre[cur.code] = cur.name
				return pre

			}, {})

			state.superviseCategoryMap = state.superviseOriginTree.filter(d => d.children).reduce((pre, cur) => {
				pre.push(...cur.children)
				return pre

			}, []).reduce((pre: any, cur: any) => {
				pre[cur.code] = cur.name
				return pre

			}, {})

		}
	},
	actions: {

		async setTaskCount({ commit }, conditionList = ['transaction', 'work', 'meet', 'notice', 'message', 'chengban']) {
			let userId = Session.get('userInfo').userId

			const { data }: any = await queryTaskCount({ userId, conditionList })
			commit('getTaskCount', data)


		},
		async setSuperviseFlowsAll({ commit }) {

			let modelUser = JSON.parse(sessionStorage.getItem("modelUserId") || '').data.find((item: any) => item.name === 'ducha')

			let params = {
				gridFsId: modelUser ? modelUser.category : '',
			};
			const { data, code }: any = await receiptRegisterApi().modelFlowsWork(params)
			if (1 === code) {
				commit('getSurperviseFlowsAll', data)
			}

		},
		async setSuperviseOrigin({ commit, state }) {

			if (state.superviseOriginTree.length > 0) { //已经查过不再执行
				return
			}

			let category = 'supervise_source'
			const { code, data }: any = await useDic().categoryDic(category)
			if (1 === code) {
				commit('getSuperviseOrigin', data)

			}

		}
	},
};

export default taskModule;