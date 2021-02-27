import axios from 'axios';

const baseUrl = process.env['BASE_URL'];
const gloHeaders = {
	"Content-Type": "application/json"
};

export let getApiOptions = function (args) {
	let { url, data, query, method, headers = {} } = args;
	if (Array.isArray(query)) {
		url += query.reduce((acc, cur) => acc + `${cur.key}=${cur.val}&`, '?');
	} else if (query) {
		url += query;
	}
	const options = {
		url,
		baseURL: baseUrl,
		method: String(method).toUpperCase(),
		headers: { ...gloHeaders, ...headers }
	};
	if (data)
		options.data = data;
	return options;
};

export let apiRequest = async function (options) {
	return axios(options).then(res => {
		const headers = res.headers;
		const data = JSON.parse(res.data.body);
		// TODO: intercept api call....
		if (data.messageCode === 500);
		else if (data.messageCode !== 200)
			return { data, headers };
		else
			return { data, headers };
	}).catch(() => {
		return Promise.resolve({ data: { message: 'Request fail with an error' } });
	});
};
