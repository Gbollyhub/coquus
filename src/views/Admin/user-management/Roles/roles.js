
import React from 'react';
import { Link } from 'react-router-dom';

function Roles() {

        return(
            <>

<div className="content-header">Manage Roles</div>
      <div className="content-sub">Here are the list of roles available</div>
      <div className="app-table-actions">
      <div className="app-table-search">
        <input type="text" className="app-input-search w-input"  name="name" data-name="Name" placeholder="Search..." id="name" />
          </div>
        <div className="app-table-buttons">
          <Link to="/admin/create-role/4" className="table-button filter">Add Role<span className="table-button-icon"></span></Link>
        </div>
      </div>

      <table className="app-table2">
                                  <thead>
                                      <tr className="app-table2-row">
                                      <th className="app-table2-header">Role</th>
                                      <th className="app-table2-header">Description</th>
                                      <th className="app-table2-header">User</th>
                                      <th className="app-table2-header"></th>
                                      <th className="app-table2-header"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="app-table2-row">
                                  <td className="app-table2-data">Admin</td>
                                      <td className="app-table2-data">Lorem Ipsum remol molk dernm</td>
                                      <td className="app-table2-data" style={{color: '#7fe233'}}>10</td>
                                      <td className="app-table2-data"><span className="app-icon" style={{ color: '#F95050', fontSize: '20px'}}></span></td>
                                      <td className="app-table2-data" style={{color: '#131573', fontWeight: 'bold', cursor: 'pointer'}}>
                                        <Link style={{ textDecoration: 'none'}} to="/admin/edit-role/4"><div>Manage Role <span className="app-icon"></span></div></Link>
                                      </td>
                                  </tr>                                                                  
                                  </tbody>
                                  </table>

</>
    );

}

export default Roles ;
