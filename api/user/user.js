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
				statusCode: 200,
				body: JSON.stringify({ messageCode: 400, message: "Invalid credentials username/password is required" })
			};
		const user = getUserByUsername(username, password);
		if (!user)
			return {
				headers,
				statusCode: 200,
				body: JSON.stringify({ messageCode: 400, message: "Invalid username/password user not found" })
			};
		return {
			headers,
			statusCode: 200,
			body: JSON.stringify({ messageCode: 200, ...user.user_info }),
		};
	} catch (error) {
		return {
			headers,
			statusCode: 200,
			body: JSON.stringify({ messageCode: 500, message: "Unexpected exception thrown" }),
		};
	}
};
