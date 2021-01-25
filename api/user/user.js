const users = require('./user.json');

const headers = {
	"Access-Control-Allow-Origin": "*",
};

const getUserByUsername = function (username, password) {
	return users.find(i => i.username === username && i.password === password);
};

exports.handler = async function (event) {
	const { username, password } = event;
	try {
		if (!username || !password)
			return {
				headers,
				statusCode: 400,
				body:"Invalid credentials username/password is required"
			};
		const user = getUserByUsername(username, password);
		if (!user)
			return {
				headers,
				statusCode: 400,
				body:"Invalid username/password user not found"
			};
		return {
			headers,
			statusCode: 200,
			body: JSON.stringify(user.user_info),
		};
	} catch (error) {
		return {
			headers,
			statusCode: 500,
			body: "Unexpected exception thrown",
		};
	}
};
