import { RouteRecordRaw } from 'vue-router';
import { pagePermission } from './permission'
/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/layout/index.vue'),
		redirect: '/login',
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/home',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/home1',
				name: 'home1',
				component: () => import('/@/views/home/indexOne.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/home2',
				name: 'home2',
				component: () => import('/@/views/home/indexTwo.vue'),
				meta: {
					title: 'message.router.home',
					isLink: '',
					isHide: true,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/achievement',
				name: 'achievement',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/achievement/technology',
				meta: {
					title: 'message.router.documentOfficial',
					isKeepAlive: true,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-zizhuqingqiulei',
				},
				children: [
					{
						path: '/achievement/technology',
						name: 'technology',
						component: () => import('/@/views/achievement/technology.vue'),
						meta: {
							title: 'message.router.addressee',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							// roles: [pagePermission.WORK_GET],
							roles: ['admin', 'common'],
							icon: 'iconfont icon-xieyi',
						},
					},
					{
						path: '/achievement/postOfficial',
						name: 'postOfficial',
						component: () => import('/@/views/achievement/postOfficial.vue'),
						meta: {
							title: 'message.router.postOfficial',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['common', 'admin'],
							icon: 'iconfont icon-chaxundangan',
						},
					},
					{
						path: '/achievement/manageOfficial',
						name: 'achievement/manageOfficial',
						component: () => import('/@/views/achievement/manageOfficial.vue'),
						meta: {
							title: 'message.router.manageOfficial',
							isLink: '',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							dotKey: 'work',
							roles: ['admin', 'common'],
							icon: 'iconfont icon-zichan',
						},
					},
					{
						path: '/achievement/charge',
						name: 'achievement-charge',
						component: () => import('/@/views/achievement/charge/index.vue'),
						meta: {
							title: 'message.router.achievementCharge',
							isKeepAlive: true,
							isBadge: true,
							dotKey: 'chengban',
							roles: ['admin', 'common'],
							icon: 'iconfont icon-zixun',
						}
					},
					{
						path: '/achievement/pigeonhole',
						name: 'achievement/pigeonhole',
						component: () => import('/@/views/achievement/pigeonhole.vue'),
						meta: {
							title: 'message.router.pigeonhole',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-yunweifenxipingtai',
						},
					},
					{
						path: '/achievement/head',
						name: 'achievement-head',
						component: () => import('/@/views/achievement/offical-head/index.vue'),
						meta: {
							title: 'message.router.officalHead',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['office1'],
							icon: 'iconfont icon-yunpingtai',
						},
					},
					{
						path: '/achievement/number',
						name: 'doc-number',
						component: () => import('/@/views/achievement/doc-number/index.vue'),
						meta: {
							title: 'message.router.docNumber',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-zhongxinshebei',
						}
					},
					{
						path: '/achievement/wasteBox',
						name: 'achievement/wasteBox',
						component: () => import('/@/views/achievement/wasteBox.vue'),
						meta: {
							title: 'message.router.wasteBox',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-zixun',
						},
					},
					{
						path: '/charge/detail/:pid',
						name: 'charge-detail',
						component: () => import('/@/views/achievement/charge/page/detail.vue'),
						meta: {
							title: 'message.router.chargeDetail',
							isHide: true,
							roles: ['admin', 'common'],
						}
					}
				],
			},
			{
				path: '/officialDetails',
				name: 'officialDetails',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/officialDetails/message',
				meta: {
					title: 'message.router.documentOfficial',
					isKeepAlive: false,
					isHide: true,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-crew_feature',
				},
				children: [
					// 非涉密拟稿
					{
						path: '/officialDetails/message',
						name: 'officialDetails/message',
						component: () => import('/@/views/officialDetails/index.vue'),
						meta: {
							title: 'message.router.documentDetails',
							isLink: '',
							isHide: true,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Pointer',
						},
					},
					// 涉密拟稿
					{
						path: '/officialDetails/fied',
						name: 'officialDetails/fied',
						component: () => import('/@/views/officialDetails/components/index.vue'),
						meta: {
							title: 'message.router.documentDetails',
							isLink: '',
							isHide: true,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['common', 'admin'],
							icon: 'iconfont icon-chaxundangan',
						},
					},
					{
						path: '/officialDetails/wasteDetail',
						name: 'officialDetails/wasteDetail',
						component: () => import('/@/views/achievement/components/wastePostDetail.vue'),
						meta: {
							title: 'message.router.wasteDetail',
							isLink: '',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'ele-Pointer',
						},
					},
				],
			},
			{
				path: '/meeting',
				name: 'meeting',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/meeting/onmeeting',
				meta: {
					title: 'message.router.meetingMsg',
					isKeepAlive: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-IPshijiantongji',
				},
				children: [
					{
						path: '/meeting/onmeeting',
						name: 'onmeeting',
						component: () => import('/@/views/meeting/index.vue'),
						meta: {
							title: 'message.router.onmeeting',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-IPshijiantongji',
						}
					},
					{
						path: '/meeting/meetingRoom',
						name: 'meetingRoom',
						component: () => import('/@/views/meetingRoom/index.vue'),
						meta: {
							title: 'message.router.meetingRoom',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin','MEETINGROOM_MANAGE'],
							icon: 'iconfont icon-anzhanghaotongji',
						},
					},

					// 线上会议
					// {
					// 	path: '/meeting/onlineConference',
					// 	name: 'onlineConference',
					// 	component: () => import('/@/views/onlineConference/index.vue'),
					// 	meta: {
					// 		title: 'message.router.onlineConference',
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin', 'common'],
					// 		icon: 'iconfont icon-zizhiyun',
					// 	}
					// },
					{
						path: '/meeting/approval',
						name: 'approval',
						component: () => import('/@/views/meeting/approval.vue'),
						meta: {
							title: 'message.router.approval',
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							dotKey: 'meet',
							roles: [pagePermission.MEETING_APPROVAL],
							icon: 'iconfont icon-crew_feature',
						}
					}
				],
			},
			{
				path: '/login',
				name: 'officialDetails',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/login',
				meta: {
					title: 'message.router.meetingMsg',
					isKeepAlive: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-crew_feature',
					isHide: true,

				},
				children: [

				],
			},
			{
				path: '/managementReported',
				name: 'managementReported',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/managementReported/evection',
				meta: {
					title: 'message.router.managementReported',
					isKeepAlive: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-bianjieqiaojie',
				},
				children: [
					{
						path: '/managementReported/evection',
						name: 'evection',
						component: () => import('/@/views/evection/index.vue'),
						meta: {
							title: 'message.router.evection',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-baocunbingxinjian',
						},
					},
					{
						path: '/managementReported/vacate',
						name: 'vacate',
						component: () => import('/@/views/vacate/index.vue'),
						meta: {
							title: 'message.router.vacate',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-anyewutongji',
						},
					},
					{
						path: '/managementReported/research',
						name: 'research',
						component: () => import('/@/views/research/index.vue'),
						meta: {
							title: 'message.router.research',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-bianjieluyou',
						},
					},
					{
						path: '/managementReported/report',
						name: 'report',
						component: () => import('/@/views/report/index.vue'),
						meta: {
							title: 'message.router.report',
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							dotKey: 'transaction',
							roles: [pagePermission.TRANSACTION_APPROVAL, 'admin', 'common'],
							icon: 'iconfont icon-bangongzhichilei',
						},

					},

				],
			},
			{
				path: '/supervise',
				name: 'supervise',
				meta: {
					title: 'message.router.supervise',
					isKeepAlive: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-anquancelvezhongxin',
				},
				redirect: '/supervise/overview',
				component: () => import('/@/layout/routerView/parent.vue'),
				children: [{
					path: '/supervise/overview',
					name: 'supervise-overview',
					meta: {
						title: 'message.router.superviseOverview',
						isKeepAlive: false,
						roles: ['admin', 'common'],
						icon: 'iconfont icon-baimingdanguanli',
					},
					component: () => import('/@/views/supervise/overview/index.vue')
				}, {
					path: '/supervise/my',
					name: 'supervise-my',
					meta: {
						title: 'message.router.superviseMy',
						isKeepAlive: false,
						roles: ['admin', 'common'],
						icon: 'iconfont icon-caigouqingdan',
					},
					component: () => import('/@/views/supervise/my/index.vue')
				}, {
					path: '/supervise/search',
					name: 'supervise-search',
					meta: {
						title: 'message.router.superviseSearch',
						isKeepAlive: false,
						roles: [pagePermission.SUPERVISE_CREATE],
						icon: 'iconfont icon-caozuopingtai',
					},
					component: () => import('/@/views/supervise/search/index.vue')
				},
				{
					path: '/supervise/company',
					name: 'supervise-company',
					meta: {
						title: 'message.router.superviseCompany',
						isKeepAlive: false,
						roles: [pagePermission.SUPERVISE_CREATE],
						icon: 'iconfont icon-biangengguanli',
					},
					component: () => import('/@/views/supervise/company/index.vue')
				},
				{
					path: '/supervise/score',
					name: 'supervise-score',
					meta: {
						title: 'message.router.superviseAppraise',
						isKeepAlive: false,
						roles: ['common', 'admin'],
						icon: 'iconfont icon-caijipeizhi',
					},
					component: () => import('/@/views/supervise/score/index.vue')
				},
				{
					path: '/supervise/report',
					name: 'supervise-report',
					meta: {
						title: 'message.router.superviseReport',
						isKeepAlive: false,
						roles: [pagePermission.SUPERVISE_CREATE],
						icon: 'iconfont icon-chicang',
					},
					component: () => import('/@/views/supervise/report/index.vue')
				}, {
					path: '/supervise/publicity',
					name: 'supervise-publicity',
					meta: {
						title: 'message.router.supervisePublicity',
						isKeepAlive: false,
						roles: ['admin', 'common'],
						icon: 'iconfont icon-chaxundangan',
					},
					component: () => import('/@/views/supervise/publicity/index.vue')
				}, {
					path: '/supervise/create',
					name: 'supervise-create',
					meta: {

						title: 'message.router.superviseCreate',
						isHide: true,
						isKeepAlive: true,
						roles: [pagePermission.SUPERVISE_CREATE]
					},
					component: () => import('/@/views/supervise/page/create.vue')
				}
				]
			},
			{
				path: '/taskAssignment',
				name: 'taskAssignment',
				component: () => import('/@/views/taskAssignment/index.vue'),
				meta: {
					title: 'message.router.taskAssignment',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shiyongshenqing',
				},
			},
			{
				path: '/guard',
				name: 'guard',
				component: () => import('/@/views/guard/index.vue'),
				meta: {
					title: 'message.router.guard',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shiyongshenqing',
				},
			},
			{
				path: '/calendar',
				name: 'calendar',
				component: () => import('/@/views/calendar/index.vue'),
				meta: {
					title: 'message.router.calendar',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shenpizhong',
				},
			},
			{
				path: '/notice',
				name: 'notice',
				component: () => import('/@/views/noticeCenter/index.vue'),
				meta: {
					title: 'message.router.notice',
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-zhuyaogaojing',
				},
				redirect: '/notice/noticeCenter',
				children: [
					{
						path: '/notice/noticeCenter',
						name: 'noticeCenter',
						component: () => import('/@/views/noticeCenter/index.vue'),
						meta: {
							title: 'message.router.noticeCenter',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-ciyaogaojing',
						},
					},
					{
						path: '/notice/noticeRemind',
						name: 'noticeRemind',
						component: () => import('/@/views/noticeRemind/index.vue'),
						meta: {
							title: 'message.router.noticeRemind',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							dotKey: 'notice',
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jinjigaojing',
						},
					},
					{
						path: '/notice/notification',
						name: 'notification',
						component: () => import('/@/views/notification/index.vue'),
						meta: {
							title: 'message.router.notification',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-dangqianhuodonggaojing_1',
						},
					},
				],
			},
			{
				path: '/workflow',
				name: 'workflow',
				component: () => import('/@/layout/routerView/parent.vue'),
				meta: {
					title: 'message.router.workflow',
					icon: 'iconfont icon-dangqianweizhi',
					roles: ['admin'],
				},
				redirect: '/workflow/model',
				children: [
					// 	{
					// 	path: '/workflow/category',
					// 	name: 'workflowCategroy',
					// 	component: () => import('/@/views/workflow/category/index.vue'),
					// 	meta: {
					// 		title: 'message.router.workflowCategroy',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin'],
					// 		icon: 'iconfont icon-quanxian',
					// 	},
					// },
					{
						path: '/workflow/model',
						name: 'workflowModel',
						component: () => import('/@/views/workflow/model/index.vue'),
						meta: {
							title: 'message.router.workflowModel',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-fenpeishebei',
						},
					},
					// {
					// 	path: '/workflow/instance',
					// 	name: 'workflowInstance',
					// 	component: () => import('/@/views/workflow/manage/index.vue'),
					// 	meta: {
					// 		title: 'message.router.workflowInstance',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin'],
					// 		icon: 'iconfont icon-quanxian',
					// 	},
					// },
				]
			},
			{
				path: '/assetManagement',
				name: 'assetManagement',
				component: () => import('/@/layout/routerView/parent.vue'),
				meta: {
					title: 'message.router.assetManagement',
					icon: 'iconfont icon-zichanleishenqing',
					roles: ['admin', 'common'],
				},
				redirect: '/assetManagement/index',
				children: [
					// 总览
					{
						path: '/assetManagement/index',
						name: 'overview',
						component: () => import('/@/views/assetManagement/index.vue'),
						meta: {
							title: 'message.router.overview',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-dengjizichan',
						},
					},
					// 动态表单
					{
						path: '/assetManagement/purchaseAsset',
						name: 'purchaseAsset',
						component: () => import('../views/assetManagement/purchaseAsset/purchaseAsset.vue'),
						meta: {
							title: 'message.router.purchaseAsset',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-fankuizhongxin',
						},
					},
					// 资产卡片外层
					// {
					// 	path: '/assetManagement/purchaseAssetIndex',
					// 	name: 'purchaseAssetIndex',
					// 	component: () => import('../views/assetManagement/purchaseAsset/index.vue'),
					// 	meta: {
					// 		title: 'message.router.purchaseAssetIndex',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin'],
					// 		icon: 'iconfont icon-fankuizhongxin',
					// 	},
					// },
					// 资产申购
					{
						path: '/assetManagement/purchase',
						name: 'purchase',
						component: () => import('../views/assetManagement/Purchase.vue'),
						meta: {
							title: 'message.router.purchase',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-fengkong',
						}
					},
					//资产审批
					{
						path: '/assetManagement/assetApproval',
						name: 'assetApproval',
						component: () => import('../views/assetManagement/component/assetApproval.vue'),
						meta: {
							title: 'message.router.assetApproval',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-guanjianziguanli',
						},
					},
					//申购详情页
					{
						path: '/purchaseDetails',
						name: 'purchaseDetails',
						component: () => import('../views/assetManagement/purchaseDetails.vue'),
						meta: {
							title: 'message.router.purchaseDetails',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-quanxian',
						},
					},
					//申购信息
					{
						path: '/purchaseApp',
						name: 'purchaseApp',
						component: () => import('../views/assetManagement/component/purchaseApp.vue'),
						meta: {
							title: 'message.router.purchaseApp',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-quanxian',
						},
					},
					{
						path: '/assetManagement/Instorage',
						name: 'instorage',
						component: () => import('/@/views/assetManagement/Instorage.vue'),
						meta: {
							title: 'message.router.instorage',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-guizebaobiao',
						},
					},
					// {
					// 	path: '/assetManagement/InstorageApproval',
					// 	name: 'InstorageApproval',
					// 	component: () => import('/@/views/assetManagement/InstorageApproval.vue'),
					// 	meta: {
					// 		title: 'message.router.instorageApproval',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin', 'common'],
					// 		icon: 'iconfont icon-guidangshenjipingtai',
					// 	},
					// },
					// {
					// 	path: '/assetManagement/consuming',
					// 	name: 'consuming',
					// 	component: () => import('/@/views/assetManagement/Consuming.vue'),
					// 	meta: {
					// 		title: 'message.router.consuming',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin'],
					// 		icon: 'iconfont icon-a-guidangshenjipingtai1',
					// 	},
					// },
					{
						path: '/assetManagement/transfer',
						name: 'transfer',
						component: () => import('/@/views/assetManagement/Transfer.vue'),
						meta: {
							title: 'message.router.transfer',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jiankongpingtai',
						},
					},
					{
						path: '/assetManagement/lending',
						name: 'lengding',
						component: () => import('/@/views/assetManagement/Lending.vue'),
						meta: {
							title: 'message.router.lending',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-huiyianpai',
						},
					},
					// {
					// 	path: '/assetManagement/Restitute',
					// 	name: 'restitute',
					// 	component: () => import('/@/views/assetManagement/Restitute.vue'),
					// 	meta: {
					// 		title: 'message.router.restitute',
					// 		isHide: false,
					// 		isKeepAlive: true,
					// 		isAffix: false,
					// 		isIframe: false,
					// 		roles: ['admin'],
					// 		icon: 'iconfont icon-jifangleishenqing',
					// 	},
					// },
					{
						path: '/assetManagement/Management',
						name: 'management',
						component: () => import('/@/views/assetManagement/Management.vue'),
						meta: {
							title: 'message.router.management',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-huiyishenpi',
						},
					},
				]
			},
			// 印章管理
			{
				path: '/sealManagement',
				name: 'sealManagement',
				meta: {
					title: 'message.router.sealManagement',
					icon: 'iconfont icon-jichufuwupingtai',
					roles: ['admin', 'common'],
				},
				redirect: '/sealManagement/index',
				children: [
					//印章库
					{
						path: '/sealManagement/index',
						name: 'sealManagementIndex',
						component: () => import('/@/views/sealManagement/index.vue'),
						meta: {
							title: 'message.router.allSealManagement',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jiaoyi',
						},
					},
					// 用印处理
					{
						path: '/sealManagement/sealApproval',
						name: 'sealApproval',
						component: () => import('../views/sealManagement/sealApproval/index.vue'),
						meta: {
							title: 'message.router.sealApproval',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jieyueshenqing',
						},
					},
					//用印处理详情页
					{
						path: '/sealManagement/sealDetail',
						name: 'sealDetail',
						component: () => import('../views/sealManagement/sealApproval/component/sealDetails.vue'),
						meta: {
							title: 'message.router.sealDetail',
							isHide: true,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-quanxian',
						},
					},
					// 用印记录
					{
						path: '/sealManagement/sealRecord',
						name: 'sealRecord',
						component: () => import('../views/sealManagement/sealRecord/index.vue'),
						meta: {
							title: 'message.router.sealRecord',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-licai',
						},
					},

				]
			},
			{
				path: '/instantmessaging',
				name: 'instantmessaging',
				meta: {
					title: 'message.router.instantmessaging',
					icon: 'iconfont icon-jichufuwupingtai',
					roles: ['admin', 'common'],
				},
				redirect: '/instantmessaging/index',
				children: [
					// 即时通讯-消息
					{
						path: '/newsList/index',
						name: 'newsList',
						component: () => import('/@/views/newsList/index.vue'),
						meta: {
							title: 'message.router.newsList',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							// dotKey: 'message',  //待改
							roles: ['admin', 'common'],
							icon: 'iconfont icon-xinjianfankui',
						},
					},
					// 即时通讯-通讯录
					{
						path: '/instantmessaging/index',
						name: 'instantmessagingIndex',
						component: () => import('/@/views/instantmessaging/index.vue'),
						meta: {
							title: 'message.router.addresslist',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							isBadge: true,
							// dotKey: 'message',
							roles: ['admin', 'common'],
							icon: 'iconfont icon-jiaoyi',
						},
					},

				]
			},
			{
				path: '/system',
				name: 'system',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/system/permission',
				meta: {
					title: 'message.router.system',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					icon: 'iconfont icon-xitongshezhi',
				},
				children: [
					{
						path: '/system/permission',
						name: 'systemPermission',
						component: () => import('/@/views/system/permission/index.vue'),
						meta: {
							title: 'message.router.systemMenu',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-quanxian',
						},
					},
					{
						path: '/system/role',
						name: 'systemRole',
						component: () => import('/@/views/system/role/index.vue'),
						meta: {
							title: 'message.router.systemRole',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-daishenpizhishi',
						},
					},
					{
						path: '/system/user',
						name: 'systemUser',
						component: () => import('/@/views/system/user/index.vue'),
						meta: {
							title: 'message.router.systemUser',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin', 'common'],
							icon: 'iconfont icon-icon-',
						},
					},
					{
						path: '/system/dept',
						name: 'systemDept',
						component: () => import('/@/views/system/dept/index.vue'),
						meta: {
							title: 'message.router.systemDept',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-OfficeBuilding',
						},
					},
					{
						path: '/system/dic',
						name: 'systemDic',
						component: () => import('/@/views/system/dic/index.vue'),
						meta: {
							title: 'message.router.systemDic',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-SetUp',
						},
					},
				],
			},
		],
	},
];

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('/@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/404',
		name: 'notFound',
		component: () => import('/@/views/error/404.vue'),
		meta: {
			title: 'message.staticRoutes.notFound',
		},
	},
	{
		path: '/401',
		name: 'noPower',
		component: () => import('/@/views/error/401.vue'),
		meta: {
			title: 'message.staticRoutes.noPower',
		},
	},
	{
		path: '/portal',
		name: 'portal',
		component: () => import('/@/views/portal/dashboard/index.vue'),
		meta: {
			title: 'message.staticRoutes.portal',
		},
	},
];
