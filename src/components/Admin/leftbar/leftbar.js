import { NavLink } from 'react-router-dom';
import './leftbar.css';

const Leftbar = () => {

    return(
       <div>
         <div className="app-admin-brand">
				 <div style={{ textAlign: 'center', color:'white', fontSize:"20px", fontWeight: "bold"}}>LOGO</div>
					 </div>
      <nav>       
      <NavLink exact activeClassName= "active-link" to="/admin/overview"> 
 <div className="admin-col-link-div">
      <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Dashboard</div>
      </div>
      </NavLink> 
      <NavLink activeClassName= "active-link" to="/admin/users"> 
 <div className="admin-col-link-div">
        <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Users</div>
      </div>
</NavLink> 
<NavLink activeClassName= "active-link" to="/admin/merchants"> 
 <div className="admin-col-link-div">
        <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Merchants</div>
      </div>
      </NavLink> 
			<NavLink activeClassName= "active-link" to="/admin/transactions"> 
 <div className="admin-col-link-div">
        <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Transactions</div>
      </div>
      </NavLink> 
      <NavLink activeClassName= "active-link" to="/admin/requests"> 
      <div className="admin-col-link-div">
        <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Requests</div>
      </div>
      </NavLink> 
      <NavLink activeClassName= "active-link" to="/admin/user-management"> 
 <div className="admin-col-link-div">
        <div className="admin-col-1-links"></div>
        <div className="admin-col-link-text">Admin Management</div>
      </div>
      </NavLink> 

      </nav>


      <div className="admin-col-logout" style={{ cursor: 'pointer' }}><span className="text-span-3"></span> Logout</div>
    </div>
    );
};

export default Leftbar;
