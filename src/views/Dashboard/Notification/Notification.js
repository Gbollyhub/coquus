import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import '../Dashboard.css';
import './Notification.css';

export default function Transactions() {

  
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
							<div className="af-class-dasboard-col-2-header">Your Notifications<span className="af-class-text-span-5">!</span> </div>
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
  <option>Successful</option>
  <option>Failed</option>
  <option>Pending</option>
</select>
        </div>
      </div>
							<div className="app-content">
                             <div className="noti-card">
								 <div className="app-icons-big noti-icon" style={{ color: '#ffc8a0'}}></div>
								 <div className="noti-message" style={{padding:' 0 10px 0 10px'}}>
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								 </div>
								 <div className="noti-date">
								21/01/21
								 </div>
								 <div className="noti-delete"> <span className="app-icons"></span>Delete</div>
							 </div>
							 <div className="noti-card">
								 <div className="app-icons-big noti-icon" style={{ color: '#ffc8a0'}}></div>
								 <div className="noti-message" style={{padding:' 0 10px 0 10px'}}>
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								 </div>
								 <div className="noti-date">
								21/01/21
								 </div>
								 <div className="noti-delete"> <span className="app-icons"></span>Delete</div>
							 </div>
							 <div className="noti-card">
								 <div className="app-icons-big noti-icon" style={{ color: '#ffc8a0'}}></div>
								 <div className="noti-message" style={{padding:' 0 10px 0 10px'}}>
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								 </div>
								 <div className="noti-date">
								21/01/21
								 </div>
								 <div className="noti-delete"> <span className="app-icons"></span>Delete</div>
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
