import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
export default function Users() {

    return (
			<>
          <div className="content-header">Users</div>
      <div className="content-sub">Here are the list of users</div>
      <div className="app-table-actions">
        <div className="app-table-search">
        <input type="text" className="app-input-search w-input" name="name" data-name="Name" placeholder="Search..." id="name" />
          </div>
        <div className="app-table-buttons">
          {/* <a href="#" className="table-button sort">Sort <span className="table-button-icon"></span></a>
          <a href="#" className="table-button filter">Filter <span className="table-button-icon"></span></a>
          <a href="#" className="table-button actions">Actions <span className="table-button-icon"></span></a> */}
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
                                      <th className="app-table2-header">Name</th>
                                      <th className="app-table2-header">Email Address</th>
                                      <th className="app-table2-header">Role</th>
                                      <th className="app-table2-header">Username</th>
                                    <th className="app-table2-header">Status</th>
                                    <th className="app-table2-header">Created Date</th>
                                    <th className="app-table2-header"></th>
                                    <th className="app-table2-header"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="app-table2-row">
                                          <td className="app-table2-data"><input type = "checkbox" /></td>
                                  <td className="app-table2-data">John Doe</td>
                                      <td className="app-table2-data">john@gmail.com</td>
                                      <td className="app-table2-data">Admin</td>
                                      <td className="app-table2-data">johndoe</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>Active</td>
                                      <td className="app-table2-data">12/08/20</td>
                                      <td className="app-table2-data"><span className="app-icon" style={{ color: '#9E9E9E', fontSize: '20px'}}></span></td>
                                      <td className="app-table2-data"><span className="app-icon" style={{ color: '#F95050', fontSize: '20px'}}></span></td>
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
			</>
    )
}
