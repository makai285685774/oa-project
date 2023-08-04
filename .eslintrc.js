module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	extends: ['plugin:vue/vue3-essential', 'plugin:vue/essential', 'eslint:recommended'],
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		// http://eslint.cn/docs/rules/
		// https://eslint.vuejs.org/rules/

	},
};
