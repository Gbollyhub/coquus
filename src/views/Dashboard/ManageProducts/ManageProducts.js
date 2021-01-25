import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import '../Dashboard.css';
import './ManageProducts.css';
import Pagination from '@material-ui/lab/Pagination';

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
							<div className="app-table-actions">
        <div className="app-table-search">
          <div>
         <input type="text" className="app-input-search" name="name" data-name="Name" placeholder="Search..." id="name"/>
          </div>
        </div>
        <div className="app-table-buttons">
		<div className="action-btn enable"><span className="app-icons"></span>Enable</div>
		<div className="action-btn disable"><span className = "app-icons"></span>Disable</div>
		<select className="app-input-select">
  <option>Filter By</option>
  <option>Active Products</option>
  <option>Inactive Products</option>
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
											<th className="app-table-header">Product Image</th>
											<th className="app-table-header"> Product Name</th>
											<th className="app-table-header">Price</th>
											<th className="app-table-header">Status</th>
											<th className="app-table-header">Date Created</th>
											<th className="app-table-header"></th>
										</tr>
										</thead>

										<tbody>
											<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										<td className="app-table-data">1</td>
											<td className="app-table-data">  <img width="100" src="https://www.esquireme.com/public/styles/full_img/public/images/2016/08/25/Burger.jpg?itok=UeqqTuYy" alt="" /></td>
											<td className="app-table-data">Large Burger</td>
											<td className="app-table-data">$100</td>
											<td className="app-table-data" style={{ color: '#9be645'}}>Active</td>
											<td className="app-table-data">20th Jan, 2021</td>
											<td className="app-table-data" > <div className="table-btn">Edit</div></td>
										</tr>	
										<tr className="app-table-row">
										<th className="app-table-header"><input type="checkbox"/></th>
										<td className="app-table-data">2</td>
											<td className="app-table-data">  <img width="100" src="https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x500.jpg" alt="" /></td>
											<td className="app-table-data">Large Fries</td>
											<td className="app-table-data">$100</td>
											<td className="app-table-data" style={{ color: '#eb3b3b'}}>Inactive</td>
											<td className="app-table-data">20th Jan, 2021</td>
											<td className="app-table-data" > <div className="table-btn">Edit</div></td>
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
