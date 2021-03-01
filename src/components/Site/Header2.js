import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav.css';
import React, { useState } from 'react';
import user from './user.png';
import './nav.css';

function Header2(props) {
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
			<div className="app-navbar-2">
    <div className="logo-section">
      <div className="app-logo2">L<span className="text-span">O</span>G<span className="text-span">O</span></div>
    </div>
    <div className="app-nav-links">
      <Link to="/" className="app-link">Home</Link>
      <Link to="/about-us" className="app-link">About</Link>
      <Link to="/find-restuarants" className="app-link">Explore Restaurants</Link>
      <Link to="/faq" className="app-link">FAQ</Link>
			{!props.isAuth() ?
						<>
						      <div style = {{ cursor: 'pointer'}} className="app-link" onClick={() => { props.handleShow({ show: true, context: 'login' }); }}>Login</div>
			<div style = {{ cursor: 'pointer'}} className="app-link" onClick={() => { props.handleShow({ show: true, context: 'register' }); }}><span className="register">Register</span></div>
						</>
						:
						<div className="af-class-app-nav-link w-nav-link app-nav-dropdown-trigger">
							<span style={{ color: 'black' }}>Hi {props.user.user_info.display_name} </span>
							<div className="app-nav-dropdown">
								<Link to="/dashboard" className="af-class-dropdown-link w-dropdown-link">Dashboard</Link>
								<Link to="" className="af-class-dropdown-link w-dropdown-link">Profile</Link>
								<Link to="#" onClick={() => props.handleAuthLogout()} className="af-class-dropdown-link w-dropdown-link">Logout</Link>
							</div>
						</div>
					}

    </div>
	<div onClick={openMobileMenu} className="menu-btn2">
	
				</div>
  </div>
		</div>
	);
}

Header2.propTypes = {
	user: PropTypes.object,
	isAuth: PropTypes.func,
	handleShow: PropTypes.func,
	handleAuthLogout: PropTypes.func
};


export default Header2;
