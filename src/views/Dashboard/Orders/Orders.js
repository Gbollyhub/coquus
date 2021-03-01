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
							<div className="dashboard-s-table-actions">
        <div className="dashboard-s-table-search">
          <div>
         <input type="text" className="app-input-search" name="name" data-name="Name" placeholder="Search..." id="name"/>
          </div>
        </div>
        <div className="dashboard-s-table-buttons">
		<select className="app-input-select">
  <option>Filter By</option>
  <option>Delivered</option>
  <option>Pending</option>
  <option>Cancelled</option>
</select>
        </div>
      </div>
							<div>
								<div>
									<div className="dashboard-s-table-div">
										
									<table className="dashboard-s-table">
										<thead>
											<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										    <th className="dashboard-s-table-header">S/N</th>
											<th className="dashboard-s-table-header">Date</th>
											<th className="dashboard-s-table-header">Order Description</th>
											<th className="dashboard-s-table-header"> Total Price</th>
											<th className="dashboard-s-table-header">Vendor</th>
											<th className="dashboard-s-table-header">Status</th>
											<th className="dashboard-s-table-header"></th>
										</tr>
										</thead>

										<tbody>
											<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										<td className="dashboard-s-table-data">1</td>
										<td className="dashboard-s-table-data">20th Jan, 2021</td>
											<td className="dashboard-s-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="dashboard-s-table-data">$200</td>
											<td className="dashboard-s-table-data">Wendys Place</td>
											<td className="dashboard-s-table-data" style={{ color: '#9be645'}}>Delivered</td>
											<td className="dashboard-s-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										<td className="dashboard-s-table-data">1</td>
										<td className="dashboard-s-table-data">20th Jan, 2021</td>
											<td className="dashboard-s-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="dashboard-s-table-data">$200</td>
											<td className="dashboard-s-table-data">Wendys Place</td>
											<td className="dashboard-s-table-data" style={{ color: '#e6b629'}}>Pending</td>
											<td className="dashboard-s-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										<td className="dashboard-s-table-data">1</td>
										<td className="dashboard-s-table-data">20th Jan, 2021</td>
											<td className="dashboard-s-table-data">Product-LO-12829|Large Burger|Large Fries</td>
											<td className="dashboard-s-table-data">$200</td>
											<td className="dashboard-s-table-data">Wendys Place</td>
											<td className="dashboard-s-table-data" style={{ color: '#eb3b3b'}}>Cancelled</td>
											<td className="dashboard-s-table-data" > <div onClick= {showModal} className="table-btn">View Details </div></td>
										</tr>
										
										</tbody>
										
										
										</table>
									
										
								</div>
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
