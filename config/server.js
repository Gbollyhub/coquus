const express = require('express');
const webpack = require('webpack');
const openBrowser = require('react-dev-utils/openBrowser');
const webpackDevMiddleware = require('webpack-dev-middleware');

const apis = require('../api');
const config = require('./server.config.js');
const { appPublic, publicUrlOrPath: publicPath } = require('./paths');

const app = express();
const compiler = webpack(config);

const HOST = process.env.HOST || 'localhost';
const PORT = parseInt(process.env.PORT, 10) || 3000;

/** 
 * for parsing application/json
**/
app.use(express.json());
/** 
 * for parsing application/x-www-form-urlencoded 
**/
app.use(express.urlencoded({ extended: true }));
/**
 * Tell express to use the webpack-dev-middleware and use the config 
 * Configuration file as a base.
 **/
app.use(webpackDevMiddleware(compiler, { publicPath }));
/** 
 * Adding HMR middleware for live reload on file change
**/
app.use(require("webpack-hot-middleware")(compiler));
/** 
 * Add public path to static serve
**/
app.use(express.static(appPublic));

app.post('/api/v1/login', async (req, res) => {
	const { body } = req;
	const user = await apis.user.handler(body);
	res.status(200).json(user);
});

app.post('/api/v1/signup', async (req, res) => {
	const { body } = req;
	const payload = JSON.stringify({
		messageCode:200,
		first_name: body.firstname,
		last_name: body.lastname,
		email: body.email,
		phone_number: body.phone,
		display_name: body.firstname
	});
	res.status(200).json({ statusCode: 200, body: payload });
});

// Serve the files on port 3000.
app.listen(PORT, HOST, function () {
	console.log(`Starting the development server running at http://${HOST}:${PORT} ...\n`);
	if (process.argv.find(i => i === '--open'))
		openBrowser(`http://${HOST}:${PORT}`);

	['SIGINT', 'SIGTERM'].forEach(function (sig) {
		process.on(sig, function () {
			process.exit();
		});
	});
});
