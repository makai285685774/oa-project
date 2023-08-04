import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
// import commonjs from '@rollup/plugin-commonjs'
import styleImport, { VantResolve } from "vite-plugin-style-import";


const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'/@': pathResolve('./src/'),
	'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
};

const viteConfig = defineConfig((mode: ConfigEnv) => {
	const env = loadEnv(mode.mode, process.cwd());
	return {
		plugins: [vue(),
			//   createStyleImportPlugin({
			// 	resolves: [
			// 	  VantResolve()
			// 	],
			// 	libs: [
			// 	  {
			// 		libraryName: 'vant',
			// 		esModule: true,
			// 		resolveStyle: name => `../es/${name}/style` //我的错误配置是这样的：../vant/es/${name}/style
			// 	  }
			// 	]
			//   })
			],
		// plugins: ['@babel/plugin-transform-modules-umd'],
		root: process.cwd(),
		resolve: { alias },
		base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
		// base:'./',
		optimizeDeps: {
			include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en', 'element-plus/lib/locale/lang/zh-tw'],
		},
		server: {

			host: '0.0.0.0',
			port: env.VITE_PORT as unknown as number,
			open: env.VITE_OPEN,
			proxy: {
				'/interface': {
					// target: 'http://192.168.40.52:8080/',
					target: 'http://192.168.25.31:8099/',
					// target: 'http://192.168.25.42:8099/', 演示环境
					ws: true,
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/interface/, ''),
				},


			},
		},
		build: {
			commonjsOptions: {
				include: []
				//requireReturnsDefault: true
			  },
			outDir: 'dist',
			sourcemap: false,
			chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					entryFileNames: `assets/[name].${new Date().getTime()}.js`,
					chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
					assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
					compact: true,
					manualChunks: {
						vue: ['vue', 'vue-router', 'vuex']
					},
				},
				// external:['src/assets/avator.png'],
			},
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
				ie8: true,
				output: {
					comments: true,
				},
			},
		},
		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: 'internal:charset-removal',
						AtRule: {
							charset: (atRule) => {
								if (atRule.name === 'charset') {
									atRule.remove();
								}
							},
						},
					},
				],
			},
			preprocessorOptions: {
				
			  }
		},
		define: {
			__VUE_I18N_LEGACY_API__: JSON.stringify(false),
			__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
			__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
		},
	};
});

export default viteConfig;
