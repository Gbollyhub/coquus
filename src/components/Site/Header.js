import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div>
			<div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-app-navbar w-nav">
				<Link to="/" aria-current="page" className="af-class-app-brand w-nav-brand w--current">
					<div className="af-class-app-logo-text">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
				</Link>
				<nav role="navigation" className="w-nav-menu">
					<Link to="/" className="af-class-app-nav-link w-nav-link">Home</Link>
					<Link to="/about" className="af-class-app-nav-link w-nav-link">About</Link>
					<Link to="/find-restuarants" className="af-class-app-nav-link w-nav-link">Restaurants</Link>
					<Link to="/support" className="af-class-app-nav-link w-nav-link">Support</Link>
					{!props.isAuth() ?
						<>
							<div onClick={() => { props.handleShow({ show: true, context: 'login' }); }} className="af-class-app-nav-link af-class-login w-nav-link">Login</div>
							<div to="#" onClick={() => { props.handleShow({ show: true, context: 'register' }); }} className="af-class-app-nav-button w-button">Create account</div>
						</>
						:
						<div className="af-class-app-nav-link w-nav-link app-nav-dropdown-trigger">
							<span>Hi {props.user.user_info.display_name} </span>
							<div className="app-nav-dropdown">
								<Link to="/dashboard" className="af-class-dropdown-link w-dropdown-link">Dashboard</Link>
								<Link to="" className="af-class-dropdown-link w-dropdown-link">Profile</Link>
								<Link to="#" onClick={() => props.handleAuthLogout()} className="af-class-dropdown-link w-dropdown-link">Logout</Link>
							</div>
						</div>
					}
				</nav>
				<div className="w-nav-button">
					<div className="w-icon-nav-menu" />
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {
	user: PropTypes.object,
	isAuth: PropTypes.func,
	handleShow: PropTypes.func,
	handleAuthLogout: PropTypes.func
};

export default Header;
