const fs = require('fs');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

const paths = require('./paths');
const env = require('./env').env(paths.publicUrlOrPath.slice(0, -1), './.env.production');
const swSrc = paths.swSrc;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

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
	...require('./webpack.config').config('production'),
	mode: 'production',
	devtool: shouldUseSourceMap ? 'source-map' : false,
	entry: [
		paths.appIndexJs,
	],
	output: {
		path: paths.appBuild,
		filename: '[name].[contenthash:8].js',
		chunkFilename: '[name].[contenthash:8].chunk.js',
		publicPath: paths.publicUrlOrPath
	},
	optimization: {
		minimize: true,
		minimizer: [
			// This is only used in production mode
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					parser: safePostCssParser,
					map: shouldUseSourceMap
						? {
							// `inline: false` forces the sourcemap to be output into a
							// separate file
							inline: false,
							// `annotation: true` appends the sourceMappingURL to the end of
							// the css file, helping the browser find the sourcemap
							annotation: true,
						}
						: false,
				},
				cssProcessorPluginOptions: {
					preset: ['default', { minifyFontValues: { removeQuotes: false } }],
				},
			}),
			'...'
		],
		// Automatically split vendor and commons
		// https://twitter.com/wSokra/status/969633336732905474
		// https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		// Keep the runtime chunk separated to enable long term caching
		// https://twitter.com/wSokra/status/969679223278505985
		// https://github.com/facebook/create-react-app/issues/5358
		runtimeChunk: {
			name: entrypoint => `runtime-${entrypoint.name}`,
		},
	},
	plugins: [
		new HtmlWebpackPlugin(Object.assign(
			{},
			{ inject: true, template: paths.appHtml },
			{
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true,
				},
			})),
		new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
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
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[contenthash:8].css',
			chunkFilename: '[name].[contenthash:8].chunk.css',
		}),
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
		fs.existsSync(swSrc) &&
		new InjectManifest({
			swSrc,
			dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
			exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
			// Bump up the default maximum size (2mb) that's precached,
			// to make lazy-loading failure scenarios less likely.
			// See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
			maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
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
	// Enable to serve prod assets
	// devServer: {
	// 	hot: true,
	// 	open: true,
	// 	quiet: true,
	// 	compress: true,
	// 	clientLogLevel: 'error',
	// 	watchContentBase: true,
	// 	contentBase: paths.appPublic,
	//  host: process.env.HOST || 'localhost',
	//  port: parseInt(process.env.PORT, 10) || 3000,
	// 	contentBasePublicPath: paths.publicUrlOrPath,
	// 	publicPath: paths.publicUrlOrPath.slice(0, -1),
	// }
};
