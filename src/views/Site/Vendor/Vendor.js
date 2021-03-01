import React, { useState } from 'react';
import Navbar2 from '../../../components/Navbar2/Navbar2';
import Footer from '../../../components/Site/Footer';
import Cart from '../../../components/Site/Cart';
import './Vendor.css';
import '../Site.css';

 const Vendor = () => {

	const [cartState, setCartState] = useState(false);

	const openCart = () => {
    setCartState(true);
	};

	const closeCart = () => {
		setCartState(false);
	};

  return (
		<span>
		<span className="af-view">
				<div className="af-class-app-body">
      
			{
				cartState ? 

				<div className="modal-overlay2">
				<div className="modal-div2">
			 <Cart/>
			 <div onClick = { closeCart } className="modal-close2">Close</div>
				</div>
				</div>
				:
				null
			}
			
	<Navbar2/>
  <div className="vendor-banner">
    <div className="banner-div">
      <div className="banner-cover">
        <div className="banner-heading">Wendy&#x27;s Place</div>
        <div className="banner-sub">African Cuisine - International Dish - Jamaican Dish</div>
      </div>
    </div>
  </div>
  <div className="vendor-row">
    <div className="menu-col">
      <div className="app-menu-row">
        <div className="app-menu-col">
          <div className="app-menu-card">
            <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"  alt="" className="image" /></div>
            <div className="app-card-info">
              <div className="menu-header">Large Burger</div>
              <div className="div-block-12">
                <div className="cart-price">$100</div>
                <div className="cart-action2"><span className="menu-icon"></span>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-menu-col">
          <div className="app-menu-card">
            <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"  alt="" className="image" /></div>
            <div className="app-card-info">
              <div className="menu-header">Large Burger</div>
              <div className="div-block-12">
                <div className="cart-price">$100</div>
                   <div className="cart-action2"><span className="menu-icon"></span>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-menu-col">
          <div className="app-menu-card">
            <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"  alt="" className="image" /></div>
            <div className="app-card-info">
              <div className="menu-header">Large Burger</div>
              <div className="div-block-12">
                <div className="cart-price">$100</div>
                   <div className="cart-action2"><span className="menu-icon"></span>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-menu-col">
          <div className="app-menu-card">
            <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"  alt="" className="image" /></div>
            <div className="app-card-info">
              <div className="menu-header">Large Burger</div>
              <div className="div-block-12">
                <div className="cart-price">$100</div>
                   <div className="cart-action2"><span className="menu-icon"></span>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cart-col">
		<div className="cart-card">
     <Cart/>
		 </div>
    </div>
  </div>
	<div onClick={ openCart } className="mobile-cart-panel">View Cart (2)</div>
	<Footer />
	  </div>
		</span>
		</span>
  );
};

export default Vendor;
