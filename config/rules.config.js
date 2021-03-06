const postcssNormalize = require('postcss-normalize');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const paths = require('./paths');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const isProd = env => env === 'production';
const isDev = env => env === 'local' || env === 'development';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000');

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

const getStyleLoaders = (env, cssOptions, preProcessor) => {
	const loaders = [
		isDev(env) && require.resolve('style-loader'),
		isProd(env) && {
			loader: MiniCssExtractPlugin.loader,
			// css is located in `static/css`, use '../../' to locate index.html folder
			// in production `paths.publicUrlOrPath` can be a relative path
			options: paths.publicUrlOrPath.startsWith('.')
				? { publicPath: '../../' }
				: {},
		},
		{
			loader: require.resolve('css-loader'),
			options: cssOptions,
		},
		{
			// Options for PostCSS as we reference these options twice
			// Adds vendor prefixing based on your specified browser support in
			// package.json
			loader: require.resolve('postcss-loader'),
			options: {
				// Necessary for external CSS imports to work
				// https://github.com/facebook/create-react-app/issues/2677
				ident: 'postcss',
				plugins: () => [
					require('postcss-flexbugs-fixes'),
					require('postcss-preset-env')({
						autoprefixer: {
							flexbox: 'no-2009',
						},
						stage: 3,
					}),
					// Adds PostCSS Normalize as the reset css with default options,
					// so that it honors browserslist config in package.json
					// which in turn let's users customize the target behavior as per their needs.
					postcssNormalize(),
				],
				sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env),
			},
		},
	].filter(Boolean);
	if (preProcessor) {
		loaders.push(
			{
				loader: require.resolve('resolve-url-loader'),
				options: {
					sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env),
					root: paths.appSrc,
				},
			},
			{
				loader: require.resolve(preProcessor),
				options: {
					sourceMap: true,
				},
			}
		);
	}
	return loaders;
};

exports.rules = function (env) {
	return [
		// Disable require.ensure as it's not a standard language feature.
		{ parser: { requireEnsure: false } },
		{
			// "oneOf" will traverse all following loaders until one will
			// match the requirements. When no loader matches it will fall
			// back to the "file" loader at the end of the loader list.
			oneOf: [
				// TODO: Merge this config once `image/avif` is in the mime-db
				// https://github.com/jshttp/mime-db
				{
					test: [/\.avif$/],
					loader: require.resolve('url-loader'),
					options: {
						limit: imageInlineSizeLimit,
						mimetype: 'image/avif',
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				// "url" loader works like "file" loader except that it embeds assets
				// smaller than specified limit in bytes as data URLs to avoid requests.
				// A missing `test` is equivalent to a match.
				{
					test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
					loader: require.resolve('url-loader'),
					options: {
						limit: imageInlineSizeLimit,
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				// Process application JS with Babel.
				// The preset includes JSX, Flow, TypeScript, and some ESnext features.
				{
					test: /\.(js|mjs|jsx|ts|tsx)$/,
					include: paths.appSrc,
					loader: require.resolve('babel-loader'),
					options: {
						customize: require.resolve(
							'babel-preset-react-app/webpack-overrides'
						),
						presets: [
							[
								require.resolve('babel-preset-react-app'),
								{
									runtime: hasJsxRuntime ? 'automatic' : 'classic',
								},
							],
						],

						plugins: [
							[
								require.resolve('babel-plugin-named-asset-import'),
								{
									loaderMap: {
										svg: {
											ReactComponent:
												'@svgr/webpack?-svgo,+titleProp,+ref![path]',
										},
									},
								},
							],
							isDev(env) &&
							require.resolve('react-refresh/babel'),
						].filter(Boolean),
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true,
						// See #6846 for context on why cacheCompression is disabled
						cacheCompression: false,
						compact: isProd(env),
					},
				},
				// Process any JS outside of the app with Babel.
				// Unlike the application JS, we only compile the standard ES features.
				{
					test: /\.(js|mjs)$/,
					exclude: /@babel(?:\/|\\{1,2})runtime/,
					loader: require.resolve('babel-loader'),
					options: {
						babelrc: false,
						configFile: false,
						compact: false,
						presets: [
							[
								require.resolve('babel-preset-react-app/dependencies'),
								{ helpers: true },
							],
						],
						cacheDirectory: true,
						// See #6846 for context on why cacheCompression is disabled
						cacheCompression: false,

						// Babel sourcemaps are needed for debugging into node_modules
						// code.  Without the options below, debuggers like VSCode
						// show incorrect code and set breakpoints on the wrong lines.
						sourceMaps: shouldUseSourceMap,
						inputSourceMap: shouldUseSourceMap,
					},
				},
				// "postcss" loader applies autoprefixer to our CSS.
				// "css" loader resolves paths in CSS and adds assets as dependencies.
				// "style" loader turns CSS into JS modules that inject <style> tags.
				// In production, we use MiniCSSExtractPlugin to extract that CSS
				// to a file, but in development "style" loader enables hot editing
				// of CSS.
				// By default we support CSS Modules with the extension .module.css
				{
					test: cssRegex,
					exclude: cssModuleRegex,
					use: getStyleLoaders(env, {
						importLoaders: 1,
						sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env)
					}),
					// Don't consider CSS imports dead code even if the
					// containing package claims to have no side effects.
					// Remove this when webpack adds a warning or an error for this.
					// See https://github.com/webpack/webpack/issues/6571
					sideEffects: true,
				},
				// Adds support for CSS Modules (https://github.com/css-modules/css-modules)
				// using the extension .module.css
				{
					test: cssModuleRegex,
					use: getStyleLoaders(env, {
						importLoaders: 1,
						sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env),
						modules: {
							getLocalIdent: getCSSModuleLocalIdent,
						},
					}),
				},
				// Opt-in support for SASS (using .scss or .sass extensions).
				// By default we support SASS Modules with the
				// extensions .module.scss or .module.sass
				{
					test: sassRegex,
					exclude: sassModuleRegex,
					use: getStyleLoaders(env,
						{
							importLoaders: 3,
							sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env),
						},
						'sass-loader'
					),
					// Don't consider CSS imports dead code even if the
					// containing package claims to have no side effects.
					// Remove this when webpack adds a warning or an error for this.
					// See https://github.com/webpack/webpack/issues/6571
					sideEffects: true,
				},
				// Adds support for CSS Modules, but using SASS
				// using the extension .module.scss or .module.sass
				{
					test: sassModuleRegex,
					use: getStyleLoaders(env,
						{
							importLoaders: 3,
							sourceMap: isProd(env) ? shouldUseSourceMap : isDev(env),
							modules: {
								getLocalIdent: getCSSModuleLocalIdent,
							},
						},
						'sass-loader'
					),
				},
				// "file" loader makes sure those assets get served by WebpackDevServer.
				// When you `import` an asset, you get its (virtual) filename.
				// In production, they would get copied to the `build` folder.
				// This loader doesn't use a "test" so it will catch all modules
				// that fall through the other loaders.
				{
					loader: require.resolve('file-loader'),
					// Exclude `js` files to keep "css" loader working as it injects
					// its runtime that would otherwise be processed through "file" loader.
					// Also exclude `html` and `json` extensions so they get processed
					// by webpacks internal loaders.
					exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
					options: {
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				// ** STOP ** Are you adding a new loader?
				// Make sure to add the new loader(s) before the "file" loader.
			],
		},
	];
};
