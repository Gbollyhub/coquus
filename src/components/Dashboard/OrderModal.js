import React from 'react';
import PropTypes from 'prop-types';

const OrderModal = (props) => {
    const { hideModal } = props;
	return (
		<>
		<div className="order-modal">
		<div className= "order-div">
			 <div className="order-div-header">Order Details</div>
			 <div onClick= {hideModal} className="order-div-close"></div>
			 <table className="app-table">
				 <thead>
					 <tr className="app-table-row">
									  <th className="app-table-header">S/N</th>
									  <th className="app-table-header">Product Image</th>
									  <th className="app-table-header">Product Name</th>
									  <th className="app-table-header">Quantity</th>
									  <th className="app-table-header">Price</th>
								  </tr> 
				 </thead>
				 <tbody>
					 <tr className="app-table-row">
								  <td className="app-table-data">1</td>
								  <td className="app-table-data">
									  <img width="100" src="https://www.esquireme.com/public/styles/full_img/public/images/2016/08/25/Burger.jpg?itok=UeqqTuYy" alt="" /></td>
									  <td className="app-table-data">Large Burger</td>
									  <td className="app-table-data">1</td>
									  <td className="app-table-data">$100</td>
								  </tr>
								  <tr className="app-table-row">
								  <td className="app-table-data">2</td>
								  <td className="app-table-data"><img width="100" src="https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x500.jpg" alt="" /></td>
									  <td className="app-table-data">Large Fries</td>
									  <td className="app-table-data">1</td>
									  <td className="app-table-data">$100</td>
								  </tr> 
				 </tbody>
								 					  
								  </table>
								  <br></br>
								  <div className = "table-total">Total $200</div>
		</div>
	  </div>
		</>
	);
};

OrderModal.propTypes = {
	hideModal : PropTypes.func
};

export default OrderModal;
