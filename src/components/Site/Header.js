import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav.css';
import React, { useState } from 'react';
import user from './user.png';
import './nav.css';
function Header(props) {
	const [mobileMenu, setMobileMenu] = useState(false);

	const openMobileMenu = () => {
		setMobileMenu(true);
	};

	const closeMobileMenu = () => {
		setMobileMenu(false);
	};

	return (
		<div>
			{ mobileMenu ? 
			
			<div className="mobile-overlay">
			<div onClick = { closeMobileMenu } className="menu-close"></div>
			<div className="profile-flex">
			  <div className="menu-profile"><img src={ user } loading="lazy" alt=""/></div>
			  <div className="div-block-13">Hello Guest!</div>
			</div>
			<Link to="/">
			<div className="menu-links-flex">
			  <div className="menul-link-text">Home</div>
			  <div className="menu-link-icon"></div>
			</div>
			</Link>
			<Link to="/about-us" >
			<div className="menu-links-flex">
			  <div className="menul-link-text">About Us</div>
			  <div className="menu-link-icon"></div>
			</div>
			</Link>
			<Link to="/find-restuarants">
			<div className="menu-links-flex">
			  <div className="menul-link-text">Restaurants</div>
			  <div className="menu-link-icon"></div>
			</div>
			</Link>
			<Link to ="/faq">
			<div className="menu-links-flex">
			  <div className="menul-link-text">FAQ</div>
			  <div className="menu-link-icon"></div>
			</div>
			</Link>
			{ !props.isAuth() ?
						<>
			<div className="menu-links-flex">
			 <div onClick={() => { props.handleShow({ show: true, context: 'login' }); }} className="menul-link-text">Login</div>
			  <div className="menu-link-icon"></div>
			</div>
			<div className="menu-links-flex">
			<div onClick={() => { props.handleShow({ show: true, context: 'register' }); }} className="menul-link-text">Register</div>
			  <div className="menu-link-icon"></div>
			</div>
			</>
		
			: 	
			
			<div className="menu-links-flex">
			<Link to="/dashboard"><div className="menul-link-text">Dashboard</div></Link> 
			 <div className="menu-link-icon"></div>
		   </div>

			}  </div>
			: '' }
			<div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-app-navbar w-nav">
				<Link to="/" aria-current="page" className="af-class-app-brand w-nav-brand w--current">
					<div className="af-class-app-logo-text">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
				</Link>
				<nav role="navigation" className="w-nav-menu">
					<Link to="/" className="af-class-app-nav-link w-nav-link">Home</Link>
					<Link to="/about-us" className="af-class-app-nav-link w-nav-link">About</Link>
					<Link to="/find-restuarants" className="af-class-app-nav-link w-nav-link">Explore Restaurants</Link>
					<Link to="/faq" className="af-class-app-nav-link w-nav-link">FAQ</Link>
					<Link to="/admin" className="af-class-app-nav-link w-nav-link">Admin</Link>
					{!props.isAuth() ?
						<>
							<div style = {{ cursor: 'pointer'}} onClick={() => { props.handleShow({ show: true, context: 'login' }); }} className="af-class-app-nav-link af-class-login w-nav-link">Login</div>
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
				<div onClick={openMobileMenu} className="menu-btn w-nav-button">
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
