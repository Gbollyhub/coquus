

let user = { isAuthenticated: false, user_info: {} };


exports.getAuthUser = function () {
	return user;
};

exports.setAuthUser = function (auth) {
	user = auth;
};

exports.setLogoutUser = function () {
	user = { isAuthenticated: false, user_info: {} };
};

exports.getAuthUserOption = function (params) {
	return {
		isAuthenticated: true,
		user_info: { ...params }
	};
};
