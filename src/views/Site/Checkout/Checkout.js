import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../../../components/Navbar2/Navbar2';
import Footer from '../../../components/Site/Footer';
import './Checkout.css';
import '../Site.css';

 const Checkout = () => {
  return (
		<span>
		<span className="af-view">
				<div className="af-class-app-body">
	<Navbar2/>
	<div className="checkout-section">
	<div className="vendor-row">
    <div className="menu-col">
      <div className="checkout-col">
        <div className="delivery-address-box-row">
          <div className="checkout-header">Delivery Address</div>
          <div className="address-sub">Click to select one of the address below or simply add another address of your choice for delivery.</div>
          <div className="address-box-flex">
            <div className="delivery-address-box-col-1">
              <div className="default-checkout-box active-checkbox-box">
                <div className="address-value-header">Home Address</div>
                <div className="address-value">153, awolowo way, ikeja, Lagos, Nigeria</div>
              </div>
            </div>
            <div className="delivery-address-box-col-1">
              <div className="default-checkout-box">
                <div className="address-value-header">Work Address</div>
                <div className="address-value">153, awolowo way, ikeja, Lagos, Nigeria</div>
              </div>
            </div>
            <div className="delivery-address-box-col-1"></div>
          </div>
          <div className="checkout-header">Delivery Instructions</div>
					<textarea className="app-textarea" style={{ width: "100%"}}  placeholder="Please fill in any additional delivery instructions you will like to pass along."></textarea>
        </div>
        <div className="delivery-address-box-row">
          <div className="checkout-header">Payment Method</div>
          <div className="address-sub">Click to select one of the payment method below</div>
          <div className="address-box-flex">
            <div className="delivery-address-box-col-1">
              <div className="default-checkout-box">
                <div className="address-value-header">Pay with Card</div>
                <div className="address-value">Mastercard | Visa | Verve</div>
              </div>
            </div>
            <div className="delivery-address-box-col-1">
              <div className="default-checkout-box active-checkbox-box">
                <div className="address-value-header">Pay on Delivery</div>
                <div className="address-value">Kindly pay with cash or via POS at the point of delivery</div>
              </div>
            </div>
            <div className="delivery-address-box-col-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="cart-col">
      <div className="cart-card">
        <div className="card-header">Order Summary</div>
        <div className="cart-list">
          <div className="cart-product checkout-type">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">2</div>
  
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-list">
          <div className="cart-product checkout-type">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">1</div>
  
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-list">
          <div className="cart-product checkout-type">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">1</div>
  
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-list">
          <div className="cart-product checkout-type">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">3</div>
  
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-summary">
          <div className="cart-summary-col-1">Subtotal (4 meals) <span className="cart-action">Edit</span></div>
          <div className="cart-summary-col-2">$400</div>
        </div>
       <Link to ="/order-placed"><div className="checkout-btn">Place Order</div></Link> 
      </div>
    </div>
  </div>
	</div>
	<Footer />
	  </div>
		</span>
		</span>
  );
};

export default Checkout;
