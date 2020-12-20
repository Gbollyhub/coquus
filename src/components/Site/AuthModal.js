import PropTypes from 'prop-types';

function Login() {
	return (
		<>
			<div className="af-class-app-authheader">Login into your account</div>
			<div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
			<div className="w-form">
				<form id="email-form-2" name="email-form-2" data-name="Email Form 2"><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Email Address" id="email-2" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="password-2" data-name="Password 2" placeholder="Password" id="password-2" />
					<a href="home-auth.html" className="af-class-app-button w-button">Login into account</a>
				</form>
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

function Register() {
	return (
		<>
			<div className="af-class-app-authheader">Register for an Account</div>
			<div className="af-class-app-auth-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
			<div className="w-form">
				<form id="email-form-2" name="email-form-2" data-name="Email Form 2"><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="Full-Name" data-name="Full Name" placeholder="Full Name" id="Full-Name" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="email" data-name="email" placeholder="Email Address" id="email" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="phone" data-name="phone" placeholder="Phone Number" id="phone" /><input type="text" className="af-class-app-auth-textfield w-input" maxLength={256} name="password" data-name="password" placeholder="Password" id="password" />
					<a href="#" className="af-class-app-button w-button">Get Started</a>
				</form>
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

function AuthModal(props) {
	let content;
	const modalClassList = props.auth.show ? "af-class-app-auth-modal af-class-app-auth-show-modal" : "af-class-app-auth-modal af-class-app-auth-hide-modal";
	if(props.auth.context === 'login')
		content = <Login />;
	else if(props.auth.context === 'register')
		content =  <Register />;

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
	handleShow:PropTypes.func
};

export default AuthModal;
