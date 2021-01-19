const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const paths = require('./paths');
const env = require('./env').env(paths.publicUrlOrPath.slice(0, -1), './.env.development');

const hasJsxRuntime = (() => {
	if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true')
		return false;
	try {
		require.resolve('react/jsx-runtime');
		return true;
	} catch (e) {
		return false;
	}
})();

module.exports = {
	...require('./webpack.config').config('development'),
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: [
		require.resolve('webpack-dev-server/client') + '?/',
		require.resolve('webpack/hot/dev-server'),
		paths.appIndexJs,
	],
	output: {
		path: paths.appBuild,
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
		publicPath: paths.publicUrlOrPath
	},
	plugins: [
		new HtmlWebpackPlugin(Object.assign({}, { inject: true, template: paths.appHtml, })),
		new webpack.HotModuleReplacementPlugin(),
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
		// It will be an empty string unless you specify "homepage"
		// in `package.json`, in which case it will be the pathname of that URL.
		new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
		// This gives some necessary context to module not found errors, such as
		// the requesting resource.
		new ModuleNotFoundPlugin(paths.appPath),
		new webpack.DefinePlugin(env.stringified),
		// Experimental hot reloading for React .
		// https://github.com/facebook/react/tree/master/packages/react-refresh
		new ReactRefreshWebpackPlugin(),
		new CaseSensitivePathsPlugin(),
		new WatchMissingNodeModulesPlugin(paths.appNodeModules),
		new WebpackManifestPlugin({
			fileName: 'asset-manifest.json',
			publicPath: paths.publicUrlOrPath,
			generate: (seed, files, entrypoints) => {
				const manifestFiles = files.reduce((manifest, file) => {
					manifest[file.name] = file.path;
					return manifest;
				}, seed);
				const entrypointFiles = entrypoints.main.filter(
					fileName => !fileName.endsWith('.map')
				);

				return {
					files: manifestFiles,
					entrypoints: entrypointFiles,
				};
			},
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new ESLintPlugin({
			// Plugin options
			extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
			formatter: require.resolve('react-dev-utils/eslintFormatter'),
			eslintPath: require.resolve('eslint'),
			context: paths.appSrc,
			cache: true,
			// ESLint class options
			cwd: paths.appPath,
			resolvePluginsRelativeTo: __dirname,
			baseConfig: {
				extends: [require.resolve('eslint-config-react-app/base')],
				rules: {
					...(!hasJsxRuntime && {
						'react/react-in-jsx-scope': 'error',
					}),
				},
			},
		}),
	].filter(Boolean),
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		runtimeChunk: {
			name: entrypoint => `runtime-${entrypoint.name}`,
		},
	},
	devServer: {
		hot: true,
		open: true,
		quiet: true,
		compress: true,
		clientLogLevel: 'error',
		watchContentBase: true,
		contentBase: paths.appPublic,
		host: process.env.HOST || 'localhost',
		port: parseInt(process.env.PORT, 10) || 3000,
		contentBasePublicPath: paths.publicUrlOrPath,
		publicPath: paths.publicUrlOrPath.slice(0, -1),

	}
};
