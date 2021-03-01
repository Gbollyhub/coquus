
import React, { useState } from 'react';
import Leftbar from '../../../components/Admin/leftbar/leftbar';
import Rightbar from '../../../components/Admin/rightbar/rightbar';
import { Link } from 'react-router-dom';
import Users from './users';
import Roles from './Roles/roles';

export default function User() {
        
    const [ users, setUsers] = useState(false);
    const [ roles, setRoles] = useState(false);

    const changeUsers = () => {
      setUsers(true);
      setRoles(false)  ;
    };

    const changeRoles = () => {
      setUsers(false);
      setRoles(true) ;
    };

        return(
					<span>
					<span className="af-view">
						<div className="af-class-app-body">
          <div>
            <div className="app-admin-section">
            <div className="app-admin-col-1">
            <Leftbar/>
            </div>
            <div className="app-admin-col-2">
            <div className="admin-top-bar">
        <div className="admin-top-bar-left">
         <Link style={{ textDecoration: 'none'}} to="/service-providers"><div className="settings-icon"></div></Link> 
          <div onClick = { changeUsers } className="admin-top-barlinks admin-active-top-link">Users</div>
          <div onClick = { changeRoles } className="admin-top-barlinks">Roles & Permissions</div>
        </div>
        <div className="admin-top-bar-right">
          <div className="admin-topbar-date">October 8th, 2020</div>
        </div>
      </div>

      { users ? <Users/> 
      : roles ? <Roles/>
      : <Users/> }


    </div>
      <div className="app-admin-col-3">
              <Rightbar />
            </div>
</div>
</div>
</div>
</span>
</span>
    );
}
