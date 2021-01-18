
const baseUrl = process.env['BASE_URL'];
const gloHeaders = {
	"Content-Type": "application/json"
};

exports.getApiOptions = function (args) {
	let { url, data, query, method, headers={} } = args;
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
