
import React from 'react';
import Leftbar from '../../../components/Admin/leftbar/leftbar';
import Rightbar from '../../../components/Admin/rightbar/rightbar';
import Pagination from '@material-ui/lab/Pagination';

export default function Product() {
                return(
					<span>
					<span className="af-view">
						<div className="af-class-app-body">
            <div className="app-admin-section">
            <div className="app-admin-col-1">
            <Leftbar/>
            </div>
            <div className="app-admin-col-2">
            <div className="admin-top-bar">
        <div className="admin-top-bar-left">
          <div className="settings-icon"></div>
        </div>
        <div className="admin-top-bar-right">
          <div className="admin-topbar-date">October 8th, 2020</div>
        </div>
      </div>


	  <div className="content-header">Coquus Merchants</div>
      <div className="content-sub">Here are all the Merchants registered on the system</div>
      <div className="app-table-actions">
        <div className="app-table-search">
        <input type="text" className="app-input-search w-input" name="name" data-name="Name" placeholder="Search..." id="name" />
          </div>
        <div className="app-table-buttons">

          <div className="styled">
        <select>
                <option selected>Sort</option>
                <option>Apples</option>
                <option>Chocklate</option>
                <option>Pancakes</option>
            </select>
        </div>

        <div className="styled">
        <select>
                <option selected>Filter</option>
                <option>Apples</option>
                <option>Chocklate</option>
                <option>Pancakes</option>
            </select>
        </div>

        <div className="styled">
        <select>
                <option selected>Actions</option>
                <option>Apples</option>
                <option>Chocklate</option>
                <option>Pancakes</option>
            </select>
        </div>

        </div>
      </div>
      <div>
      <table className="app-table2">

	  <thead>
                                      <tr className="app-table2-row">
                                     <th className="app-table2-header"><input type = "checkbox" /></th>
                                      <th className="app-table2-header">Full Name</th>
                                      <th className="app-table2-header">Email Address</th>
                                      <th className="app-table2-header">Phone Number</th>
                                      <th className="app-table2-header">Verified</th>
                                    <th className="app-table2-header">Status</th>
                                    <th className="app-table2-header">Created Date</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">09082084753</td>
                                      <td className="app-table2-data">Yes</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>Active</td>
                                      <td className="app-table2-data">12/08/20</td>
                                  </tr>
                                  <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">09082084753</td>
                                      <td className="app-table2-data">Yes</td>
                                      <td className="app-table2-data" style={{color: '#d52f2f'}}>Suspended</td>
                                      <td className="app-table2-data">12/08/20</td>
                                  </tr>
								  <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">09082084753</td>
                                      <td className="app-table2-data">Yes</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>Active</td>
                                      <td className="app-table2-data">12/08/20</td>
                                  </tr>
								  <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">09082084753</td>
                                      <td className="app-table2-data">Yes</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>Active</td>
                                      <td className="app-table2-data">12/08/20</td>
                                  </tr>
								  <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">09082084753</td>
                                      <td className="app-table2-data">Yes</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>Active</td>
                                      <td className="app-table2-data">12/08/20</td>
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
      <div className="app-admin-col-3">
              <Rightbar />
            </div>
</div>
</div>
						</span>
						</span>
    );
}
