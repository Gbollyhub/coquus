const fs = require('fs');
const paths = require('./paths');
const { rules } = require('./rules.config');

const useTypeScript = fs.existsSync(paths.appTsConfig);

exports.config = function (env) {
	return {
		entry: paths.appIndexJs,
		resolve: {
			modules: ['node_modules', paths.appNodeModules],
			extensions: paths.moduleFileExtensions
				.map(ext => `.${ext}`)
				.filter(ext => useTypeScript || !ext.includes('ts')),
			alias: {
				'react-native': 'react-native-web',
			}
		},
		module: {
			strictExportPresence: true,
			rules: rules(env)
		},
		// Turn off performance processing because we utilize
		// our own hints via the FileSizeReporter
		performance: false,
	};
};
