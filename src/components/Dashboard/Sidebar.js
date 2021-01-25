import { NavLink } from 'react-router-dom';
function Sidebar() {
	return (
		<div>
			<ul role="list" className="af-class-list">
				<NavLink to="/dashboard">
					<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link af-class-active-dashboard-link">Dashboard</a>
				</li>	
				</NavLink>

				<NavLink to="/dashboard/orders">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Orders</a>
				</li>
				</NavLink>

				<NavLink to="/dashboard/manage-products">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Manage Products</a>
				</li>
				</NavLink>


				<NavLink to="/dashboard/Transactions" >		
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Transactions</a>
				</li>
				</NavLink>


				<NavLink to= "/dashboard/notifications">
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Notification</a>
				</li>
				</NavLink>
			    
				<NavLink to="/dashboard/profile">
						<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Profile</a>
				</li>
				</NavLink>
	
	
			
				<li className="af-class-dashboard-nav-list-item">
					<a href="#" className="af-class-dashboard-nav-link">Logout</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
