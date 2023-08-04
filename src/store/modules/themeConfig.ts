import { Module } from 'vuex';
import { ThemeConfigState, RootStateTypes } from '/@/store/interface/index';

const themeConfigModule: Module<ThemeConfigState, RootStateTypes> = {
	namespaced: true,
	state: {
		themeConfig: {
			isDrawer: false,
			primary: '#2E70B4',
			topBar: '#ffffff',
			topBarColor: '#606266',
			isTopBarColorGradual: false,
			menuBar: '#225D98',
			menuBarColor: '#eaeaea',
			isMenuBarColorGradual: false,
			columnsMenuBar: '#545c64',
			columnsMenuBarColor: '#e6e6e6',
			isColumnsMenuBarColorGradual: false,
			isCollapse: false,
			isUniqueOpened: true,
			isFixedHeader: false,
			isFixedHeaderChange: false,
			isClassicSplitMenu: false,
			isLockScreen: false,
			lockScreenTime: 30,
			isShowLogo: true,
			isShowLogoChange: false,
			isBreadcrumb: false,
			isTagsview: false,
			isBreadcrumbIcon: false,
			isTagsviewIcon: false,
			isCacheTagsView: false,
			isSortableTagsView: true,
			isShareTagsView: true,
			isFooter: false,
			isGrayscale: false,
			isInvert: false,
			isIsDark: false,
			isWartermark: false,
			wartermarkText: 'hsoft',
			tagsStyle: 'tags-style-five',
			animation: 'opacitys',
			columnsAsideStyle: 'columns-round',
			columnsAsideLayout: 'columns-vertical',
			layout: 'classic',
			isRequestRoutes: false,
			globalTitle: '政务协同办公平台',
			globalViceTitle: '政务协同办公平台',
			globalI18n: 'zh-cn',
			globalComponentSize: 'large',
			rrweb:false
		},
	},
	mutations: {
		// 设置布局配置
		getThemeConfig(state: any, data: object) {
			state.themeConfig = data;
		},
	},
	actions: {
		// 设置布局配置
		setThemeConfig({ commit }, data: object) {
			commit('getThemeConfig', data);
		},
	},
};

export default themeConfigModule;
