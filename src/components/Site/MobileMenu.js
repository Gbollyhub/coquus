import React from 'react';
import user from './user.png';
import PropTypes from 'prop-types';
import './nav.css';
export default function MobileMenu(props) {
   

	return (
		<>
		  <div className="mobile-overlay">
    <div onClick = { props.closeMenu } className="menu-close"></div>
    <div className="profile-flex">
      <div className="menu-profile"><img src={ user } loading="lazy" alt=""/></div>
      <div className="div-block-13">Hello Guest!</div>
    </div>
    <div className="menu-links-flex">
      <div className="menul-link-text">Home</div>
      <div className="menu-link-icon"></div>
    </div>
    <div className="menu-links-flex">
      <div className="menul-link-text">About Us</div>
      <div className="menu-link-icon"></div>
    </div>
    <div className="menu-links-flex">
      <div className="menul-link-text">Restaurants</div>
      <div className="menu-link-icon"></div>
    </div>
    <div className="menu-links-flex">
      <div className="menul-link-text">FAQ</div>
      <div className="menu-link-icon"></div>
    </div>
	<div className="menu-links-flex">
      <div className="menul-link-text">Login</div>
      <div className="menu-link-icon"></div>
    </div>
	<div className="menu-links-flex">
      <div className="menul-link-text">Register</div>
      <div className="menu-link-icon"></div>
    </div>
  </div>
  </>
	)

}


MobileMenu.propTypes = {
	closeMenu: PropTypes.func
};
