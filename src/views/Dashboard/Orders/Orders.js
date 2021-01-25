import React, { useState } from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import './Orders.css';
import Pagination from '@material-ui/lab/Pagination';
import OrderModal from '../../../components/Dashboard/OrderModal';
import '../Dashboard.css';

export default function Orders() {


	const [Modal, setModal] = useState(false);

	const showModal = () => {
		setModal(true);
	};

	const hideModal = () => {
		setModal(false);
	};
  
	return (
		<span>
			<span className="af-view">
				<div className="af-class-body">
					{ Modal ? <OrderModal hideModal = { hideModal } /> : '' }
					<Header />
					<div className="af-class-dashboard-section">
						<div className="af-class-dashboard-col-1">
							<Sidebar />
						</div>
						<div className="af-class-dashboard-col-2">
							<div className="af-class-dasboard-col-2-header">Your Orders<span className="af-class-text-span-5">!</span> </div>
							<div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
							<div className="app-table-actions">
        <div className="app-table-search">
          <div>
         <input type="text" className="app-input-search" name="name" data-name="Name" placeholder="Search..." id="name"/>
          </div>
        </div>
        <div className="app-table-buttons">
		<select className="app-input-select">
  <option>Filter By</option>
  <option>Delivered</option>
  <option>Pending</option>
  <option>Cancelled</option>
</select>
        </div>
      </div>
							<div>
									<div className="app-table-div">
										
									<table className="app-table">
										<thead>
											<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										    <th className="app-table-header">S/N</th>
											<th className="app-table-header">Date</th>
											<th className="app-table-header">Order Description</th>
											<th className="app-table-header"> Total Price</th>
											<th className="app-table-header">Vendor</th>
											<th className="app-table-header">Status</th>
											<th className="app-table-header"></th>
										</tr>
										</thead>

										<tbody>
											<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										<td className="app-table-data">1</td>
										<td className="app-table-data">20th Jan, 2021</td>
											<td className="app-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="app-table-data">$200</td>
											<td className="app-table-data">Wendys Place</td>
											<td className="app-table-data" style={{ color: '#9be645'}}>Delivered</td>
											<td className="app-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										<td className="app-table-data">1</td>
										<td className="app-table-data">20th Jan, 2021</td>
											<td className="app-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="app-table-data">$200</td>
											<td className="app-table-data">Wendys Place</td>
											<td className="app-table-data" style={{ color: '#e6b629'}}>Pending</td>
											<td className="app-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										<td className="app-table-data">1</td>
										<td className="app-table-data">20th Jan, 2021</td>
											<td className="app-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="app-table-data">$200</td>
											<td className="app-table-data">Wendys Place</td>
											<td className="app-table-data" style={{ color: '#eb3b3b'}}>Cancelled</td>
											<td className="app-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										
										</tbody>
										
										
										</table>
										<br></br>
										<div>
										<div className="pagination">
      <Pagination count={10} shape="rounded" />
    </div>
										</div>
										
								</div>
							</div>
						</div>
					</div>
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
}
