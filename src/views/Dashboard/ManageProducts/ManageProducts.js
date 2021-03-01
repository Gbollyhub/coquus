import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import '../Dashboard.css';
import './ManageProducts.css';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';

export default function ManageProducts() {

  
	return (
		<span>
			<span className="af-view">
				<div className="af-class-body">
					<Header />
					<div className="af-class-dashboard-section">
						<div className="af-class-dashboard-col-1">
							<Sidebar />
						</div>
						<div className="af-class-dashboard-col-2">
							<div className="af-class-dasboard-col-2-header">Manage Products<span className="af-class-text-span-5">!</span> </div>
							<div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
							<div className="dashboard-s-table-actions">
        <div className="dashboard-s-table-search">
          <div>
         <input type="text" className="app-input-search" name="name" data-name="Name" placeholder="Search..." id="name"/>
          </div>
        </div>
        <div className="dashboard-s-table-buttons">
		<div className="action-btn enable"><span className="app-icons"></span>Enable</div>
		<div className="action-btn disable"><span className = "app-icons"></span>Disable</div>
		<Link to="/dashboard/create-product"><div className="action-btn misc"><span className="app-icons"></span>New Product</div></Link>
		<select className="app-input-select">
  <option>Filter By</option>
  <option>Active Products</option>
  <option>Inactive Products</option>
</select>
        </div>
      </div>
							<div>
									<div className="dashboard-s-table-div">
										
									<table className="dashboard-s-table">
										<thead>
											<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										    <th className="dashboard-s-table-header">S/N</th>
											<th className="dashboard-s-table-header">Product Image</th>
											<th className="dashboard-s-table-header"> Product Name</th>
											<th className="dashboard-s-table-header">Price</th>
											<th className="dashboard-s-table-header">Status</th>
											<th className="dashboard-s-table-header">Date Created</th>
											<th className="dashboard-s-table-header"></th>
										</tr>
										</thead>

										<tbody>
											<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										<td className="dashboard-s-table-data">1</td>
											<td className="dashboard-s-table-data">  <img width="100" src="https://www.esquireme.com/public/styles/full_img/public/images/2016/08/25/Burger.jpg?itok=UeqqTuYy" alt="" /></td>
											<td className="dashboard-s-table-data">Large Burger</td>
											<td className="dashboard-s-table-data">$100</td>
											<td className="dashboard-s-table-data" style={{ color: '#9be645'}}>Active</td>
											<td className="dashboard-s-table-data">20th Jan, 2021</td>
											<td className="dashboard-s-table-data" > <Link to="/dashboard/edit-product"><div className="table-btn">Edit</div></Link></td>
										</tr>	
										<tr className="dashboard-s-table-row">
										<th className="dashboard-s-table-header"><input type="checkbox"/></th>
										<td className="dashboard-s-table-data">2</td>
											<td className="dashboard-s-table-data">  <img width="100" src="https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x500.jpg" alt="" /></td>
											<td className="dashboard-s-table-data">Large Fries</td>
											<td className="dashboard-s-table-data">$100</td>
											<td className="dashboard-s-table-data" style={{ color: '#eb3b3b'}}>Inactive</td>
											<td className="dashboard-s-table-data">20th Jan, 2021</td>
											<td className="dashboard-s-table-data" ><Link to="/dashboard/edit-product"><div className="table-btn">Edit</div></Link></td>
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
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
}
