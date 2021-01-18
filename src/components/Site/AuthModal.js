import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import userService from '../../Services/User';
import { getApiOptions } from '../../Services/webRouter';
import { getGeoLocation } from '../../Services/Geolocation';

function Login(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleClick = () => {
		axios(getApiOptions({
			method: 'POST',
			url: '/api/v1/login',
			data: { username, password, geo: getGeoLocation() }
		})).then(({ data }) => {
			const info = JSON.parse(data.body);
			const auth = userService.getAuthUserOption(info);
			props.handleAuth(auth);
			userService.setAuthUser(auth);
			props.handleShow({ show: false, context: '' });
		}).catch(err => {
			console.log(err);
		});
	};

	return (
		<>
			<div className="af-class-app-authheader">Login into your account</div>
			<div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
			<div className="w-form">
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="username" placeholder="Username" />
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="password" placeholder="Password" />
				<a href="#" className="af-class-app-button w-button" onClick={handleClick}>Login into account</a>
				<div className="w-form-done">
					<div>Thank you! Your submission has been received!</div>
				</div>
				<div className="w-form-fail">
					<div>Oops! Something went wrong while submitting the form.</div>
				</div>
			</div>
		</>
	);
}

Login.propTypes = {
	auth: PropTypes.object,
	handleAuth: PropTypes.func,
	handleShow: PropTypes.func
};

function Register(props) {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleClick = () => {
		axios(getApiOptions({
			method: 'POST',
			url: '/api/v1/signup',
			data: { email, username, firstname, lastname, password, geo: getGeoLocation() }
		})).then(({ data }) => {
			const info = JSON.parse(data.body);
			const auth = userService.getAuthUserOption(info);
			props.handleAuth(auth);
			userService.setAuthUser(auth);
			props.handleShow({ show: false, context: '' });
		}).catch(err => {
			console.log(err);
		});
	};

	useEffect(() => {
		if (!password && !confirmPassword && password !== confirmPassword);
	}, [password, confirmPassword]);

	return (
		<>
			<div className="af-class-app-authheader">Register for an Account</div>
			<div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
			<div className="w-form">
				<input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="firstname" placeholder="First Name" />
				<input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="lastname" placeholder="Last Name" />
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="username" placeholder="Username" />
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="email" placeholder="Email Address" />
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="password" placeholder="Password" />
				<input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="af-class-app-auth-textfield w-input" maxLength={256} name="confirm_password" placeholder="Confirm Password" />
				<a href="#" onClick={handleClick} className="af-class-app-button w-button">Get Started</a>
				<div className="w-form-done">
					<div>Thank you! Your submission has been received!</div>
				</div>
				<div className="w-form-fail">
					<div>Oops! Something went wrong while submitting the form.</div>
				</div>
			</div>
		</>
	);
}

Register.propTypes = {
	auth: PropTypes.object,
	handleAuth: PropTypes.func,
	handleShow: PropTypes.func
};

function AuthModal(props) {
	let content;
	const modalClassList = props.auth.show ? "af-class-app-auth-modal af-class-app-auth-show-modal" : "af-class-app-auth-modal af-class-app-auth-hide-modal";
	if (props.auth.context === 'login')
		content = <Login {...props} />;
	else if (props.auth.context === 'register')
		content = <Register {...props} />;

	return (
		<div>
			<div className={modalClassList}>
				<div className="af-class-app-auth-div">
					<div onClick={() => { props.handleShow({ show: false, context: '' }); }} className="af-class-auth-close"></div>
					{content}
				</div>
			</div>
		</div>
	);
}

AuthModal.propTypes = {
	auth: PropTypes.object,
	handleAuth: PropTypes.func,
	handleShow: PropTypes.func
};

export default AuthModal;
