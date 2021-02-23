
import React from 'react'
import Leftbar from '../../../../components/Admin/leftbar/leftbar'
import Rightbar from '../../../../components/Admin/rightbar/rightbar'
import { Link } from 'react-router-dom'

function EditRole() {

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
        <Link style={{ textDecoration: 'none'}} to="/admin/user-management"><div className="settings-icon"></div></Link> 
        </div>
        <div className="admin-top-bar-right">
          <div className="admin-topbar-date">October 8th, 2020</div>
        </div>
      </div>

      <div className="app-table-actions">
        <div className="app-table-search">
          <div className="content-header">Manage Role</div>
          <div className="content-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>
        </div>
        <div className="app-table-buttons">
          <a href="#" className="table-button filter">Reset API<span className="table-button-icon"></span></a>
          <a href="#" className="table-button actions">Save Changes<span className="table-button-icon"></span></a>
        </div>
      </div>

      <div className="basic-table-card">
        <div className="content-header-2">Details</div>
        <div className="content-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>
        <div className="role-descrip-div">
          <div className="role-descrip-div-col-1">
            <div className="form-block-2 w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                  <input type="text" className="app-text-field w-input" name="name"  placeholder="Role" id="name"/></form>
            </div>
          </div>
          <div className="role-descrip-div-col-2">
            <div className="form-block-2 w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                  <input type="text" className="app-text-field w-input" name="name-2"  placeholder="Description" id="name-2"/></form>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-table-card">
                <div className="table-header">
                  <div className="content-header-2">Permissions</div>
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
    )

}

export default EditRole ;
