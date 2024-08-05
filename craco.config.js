const { DefinePlugin, ProvidePlugin } = require('webpack');
const fs = require('fs');
const path = require('path');
const cracoBabelLoader = require('craco-babel-loader')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePackage = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
	babel: {
		presets: ['@babel/preset-react'],
		plugins: [
			'@babel/plugin-transform-runtime',
			'@emotion', // necessary for component selectors (used in components like StarRating)
		],		
	},
	plugins: [
		{
			plugin: cracoBabelLoader,
			options: {
				includes: [
					// The following packages need babel to load. This can be omitted when they are available as built packages
					resolvePackage('node_modules/@media-platforms/image'),
					resolvePackage('node_modules/@media-platforms/theme-system')
				],
			},
		},
	],
	webpack: {
		plugins: {
			add: [
				new DefinePlugin({
					process: {
						env: {
							RUNTIME_PUBLIC_IMAGE_HOSTNAME: '"https://hips.hearstapps.net/hmg-dev"', // currently needed both in build and in runtime
							APP_NAME: '"something"',
						}
					},
					module: {},
				}),
				new ProvidePlugin({
					React: 'react',
					'react-dom': 'react-dom',
					PropTypes: 'prop-types',
				}),
			],
		},
		resolve: {
			 mainFields: ['browser', 'module', 'main'],
		},
		configure: (webpackConfig) => {
			webpackConfig.module.rules.push({
				test: /\.m?js$/,
				resolve: {
					fullySpecified: false,
				},
			});
			webpackConfig.resolve = {
				...webpackConfig.resolve,
				alias: {
					...webpackConfig.resolve.alias,
					'@media-platforms/hdm': path.resolve(__dirname, 'node_modules/@media-platforms/hdm')
				},
			};
			webpackConfig.target = 'web';

			return webpackConfig;
		}
	}
};
