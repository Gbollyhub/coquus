import { Link } from 'react-router-dom';

function Cart() {
	return (
		<div>
		
		<div className="cart-list-group">
        <div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
		<div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
		<div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>

        <div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
        <div className="cart-list">
          <div className="cart-quantity">
            <div className="menu-increment">
              <div className="increment-plus">+</div>
              <div className="increment-value">1</div>
              <div className="increment-minus">-</div>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-product-name">Large Burger</div>
            <div className="cart-other-details">This is some text inside</div>
            <div className="cart-action">Remove</div>
          </div>
          <div className="cart-unit-price">
            <div className="cart-unit-value">$200</div>
          </div>
        </div>
	    </div>

		<div>
			  <div className="cart-summary">
          <div className="cart-summary-col-1">Subtotal (4 meals)</div>
          <div className="cart-summary-col-2">$400</div>
        </div>
		</div>
      
        <Link to="/checkout"><div className="checkout-btn">Checkout</div></Link>
      </div>
	);
}

export default Cart;
