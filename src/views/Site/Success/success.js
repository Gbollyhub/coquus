import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../../../components/Navbar2/Navbar2';
import Footer from '../../../components/Site/Footer';
import './success.css';
import '../Site.css';

 const SuccessPage = () => {
  return (
		<span>
		<span className="af-view">
				<div className="af-class-app-body">
	<Navbar2/>
    <div className="success-section">
	<div className="successicon"></div>
	<div className="success-header">Order Placed Successfully</div>
	<div className="success-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
	<br/>
	<div className="action-btns">
	<Link to = "/find-restuarants"><div className="app-success-btn">Continue Shopping</div></Link>
	<Link to= "/dashboard/orders"><div className="app-success-btn-outlined">View Orders</div> </Link> 
	</div>
	</div>
	<Footer />
	  </div>
		</span>
		</span>
  );
};

export default SuccessPage;
