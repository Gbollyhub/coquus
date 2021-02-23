import { Link } from 'react-router-dom';
import React, { useState } from 'react'
function Header() {
	const [mobileMenu, setMobileMenu] = useState(false)

	const openMobileMenu = () => {
		setMobileMenu(true)
	}

	const closeMobileMenu = () => {
		setMobileMenu(false)
	}

	return (
		<div>
			{ mobileMenu ? 
			<div className="dashboard-menu-overlay">
			<div onClick = { closeMobileMenu } style={{ paddingRight: "20px"}} className="menu-close"></div>
			<div className="profile-flex">
			  <div className="menu-profile"><img src='https://i.pinimg.com/236x/a3/ac/1e/a3ac1ed5abaedffd9947face7901e14c.jpg'  alt=""/></div>
			  <div className="div-block-13">Hello Tola!</div>
			  <Link to="/dashboard/create-product"><div className="action-btn misc"><span className="app-icons"></span>New Product</div></Link>
			</div>
			<div>
			<ul role="list" className="af-class-list">
				<Link to="/dashboard">
					<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link af-class-active-dashboard-link">Dashboard</a>
				</li>	
				</Link>

				<Link to="/dashboard/orders">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Orders</a>
				</li>
				</Link>

				<Link to="/dashboard/manage-products">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Manage Products</a>
				</li>
				</Link>


				<Link to="/dashboard/Transactions" >		
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Transactions</a>
				</li>
				</Link>


				<Link to= "/dashboard/notifications">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Notification</a>
				</li>
				</Link>
			    
				<Link to="/dashboard/profile">
						<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Profile</a>
				</li>
				</Link>
	
	
			
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Logout</a>
				</li>
			</ul>
		</div>
			</div>
			: '' }
			<div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-dashboard-nav w-nav">
				<Link to="/" className="af-class-dashboard-brand w-nav-brand">
					<div className="af-class-app-logo-text af-class-dashboard-logo">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
				</Link>
				<nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
			<Link to="/dashboard/create-product">
			<div className="w-nav-link" style = {{ color: "#fe5634", cursor: "pointer" }}><span className="app-icon"></span>Create Product</div>
			</Link>
					<div className="w-nav-link">16th, August, 2020</div>
					<div className="af-class-dashboard-profile-link" />
				</nav>
				<div  onClick={openMobileMenu} className="menu-btn3 w-nav-button">
					<div className="w-icon-nav-menu" />
				</div>
			</div>
		</div>
	);
}

export default Header;
