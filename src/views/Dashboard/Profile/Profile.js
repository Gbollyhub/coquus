import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import '../Dashboard.css';
import './Profile.css';

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
							<div className="af-class-dasboard-col-2-header">Your Profile<span className="af-class-text-span-5">!</span> </div>
							<div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
				             <br/> 
							<div className="app-content">

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                             Change Profile Picture
						   </div>
						   <div className="profile-col-sub">
						   Choose a new avatar to be used across cowrywise
						   </div>
                           </div>
						   <div className="profile-col-2">
							   <input id = "avaterFilePicker" type ="file" accept="image/x-png,image/jpeg" />
							<label className="profile-avater">
                                <img src="https://i.pinimg.com/236x/a3/ac/1e/a3ac1ed5abaedffd9947face7901e14c.jpg" alt="avatar-image" />
							</label>
                           </div>
							</div>

                            <div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                          Full Name
						   </div>
						   <div className="profile-col-sub">
						   Customize your account name
						   </div>
                           </div>
						   <div className="profile-col-2">
							<input className="app-textfield" type="text" placeholder=' John Doe' />
                           </div>
							</div>

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                            Email Address
						   </div>
						   <div className="profile-col-sub">
						   Customize your email address
						   </div>
                           </div>
						   <div className="profile-col-2">
							<input className="app-textfield" type="email" placeholder='john@domain.com' />
                           </div>
							</div>

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                            Delivery Address 1
						   </div>
						   <div className="profile-col-sub">
						   Customize your delivery address
						   </div>
                           </div>
						   <div className="profile-col-2">
						   <textarea className="app-textarea" style={{ width: "100%"}}  placeholder=" Delivery Address"></textarea>
                           </div>
							</div>
							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                            Delivery Address 2
						   </div>
						   <div className="profile-col-sub">
						   Customize your delivery address
						   </div>
                           </div>
						   <div className="profile-col-2">
						   <textarea className="app-textarea" style={{ width: "100%"}}  placeholder=" Delivery Address"></textarea>
                           </div>
							</div>

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                           Phone Number
						   </div>
						   <div className="profile-col-sub">
						   Customize your phone number
						   </div>
                           </div>
						   <div className="profile-col-2">
							<input className="app-textfield" type="text" placeholder='+234810938373' />
                           </div>
							</div>

							<div className="app-divider"></div>
							<br/>
							
							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                             Change Business Banner
						   </div>
						   <div className="profile-col-sub">
						   Choose a new banner to be used on your business page
						   </div>
                           </div>
						   <div className="profile-col-2">
							   <input id = "avaterFilePicker" type ="file" accept="image/x-png,image/jpeg" />
							<label className="profile-avater">
                                <img src="https://media2.s-nbcnews.com/i/newscms/2020_26/1584574/worst-food-to-eat-te-main-200625_aaa664660c076215b93437b684c97707.jpg" alt="banner-image" />
							</label>
                           </div>
							</div>

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                         Manage Categories
						   </div>
						   <div className="profile-col-sub">
						   Customize your product categories
						   </div>
                           </div>
						   <div className="profile-col-2">
							<input style={{ marginRight: '20px'}} className="app-textfield" type="text" placeholder='Type here. eg. Main meal' />
							<div className="action-btn misc"><span className="app-icons">???</span>Add Category</div>
                           </div>
							</div>

							<div className="category-list">
								<div className="cat-chip">Mainmeal <span style= {{ color: '#CC0000'}} className="app-icons-misc">???</span></div>
								<div className="cat-chip">Sides <span style= {{ color: '#CC0000'}} className="app-icons-misc">???</span></div>
								<div className="cat-chip">Drinks <span style= {{ color: '#CC0000'}} className="app-icons-misc">???</span></div>
								<div className="cat-chip">Others <span style= {{ color: '#CC0000'}} className="app-icons-misc">???</span></div>
							</div>


							<div className="profile-btn">Save Changes</div>

							<div className="app-divider"></div>

							<div className="profile-row">
							<div className="profile-col-1">
                           <div className="profile-col-header">
                         Change your Password
						   </div>
						   <div className="profile-col-sub">
						   Customize your password
						   </div>
                           </div>
						   <div className="profile-col-2">
							<input style={{ marginRight: '20px'}} className="app-textfield" type="password" placeholder='Old password' />
							<input className="app-textfield" type="password" placeholder='New password' />
                           </div>
							</div>
							<div className="profile-btn">Update</div>
							</div>
						</div>
					</div>
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
}
