import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import '../Dashboard.css';
import './CreateProduct.css';
import uploadIcon from '../upload-icon.svg'
import SuccessAlert from '../../../components/Dashboard/UI/successModal/success'
import FailedAlert from '../../../components/Dashboard/UI/errorModal/error'
export default function CreateProduct() {

  
	return (
		<span>
			<span className="af-view">
	
				<div className="af-class-body">
				{/* <SuccessAlert/>  */}
				{/* <FailedAlert/> */}
					<Header />
					<div className="af-class-dashboard-section">
						<div className="af-class-dashboard-col-1">
							<Sidebar />
						</div>
						<div className="af-class-dashboard-col-2">
							<div className="af-class-dasboard-col-2-header">Create Product<span className="af-class-text-span-5">!</span> </div>
							<div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
							<div>
									<div className="app-content-div">
									
								   <div className="content-row">

									<div className="content-col">
									<div className="app-textfield-label">Product Name</div>
									<input style={{ width: "70%"}} className="app-textfield" type="text" placeholder=' John Doe' />
									</div>
									<div className="content-col">
									<div className="app-textfield-label">Category</div>
									<select style={{ width: "70%"}} className="app-input-select">
									<option>Main Meal</option>
									<option>Sides</option>
									<option>Drinks</option>
									</select>
									</div>
									<div className="content-col">
									<div className="app-textfield-label">Product Status</div>
								    <select style={{ width: "70%"}} className="app-input-select">
									<option>In Stock</option>
									<option>Out of Stock</option>
									</select>
									</div>
								   </div>

								   <div>
								   <div className="app-textfield-label">Upload an Image</div>
								   <div className="upload-box">
								   <input id = "avaterFilePicker" type ="file" accept="image/x-png,image/jpeg" />
                                <img className="upload-image" src = {uploadIcon} alt="upload icon" />
								Click to upload an Image (Max. 200kb | Size. 100x100 | Format. jpg-png)
								   </div>
								   </div>


								   <div className="content-row">

									<div className="content-col">
									<div className="app-textfield-label">Unit Price</div>
									<input style={{ width: "70%"}} className="app-textfield" type="text" placeholder=' John Doe' />
									</div>
									<div className="content-col">
									<div className="app-textfield-label">Discount Price</div>
									<input style={{ width: "70%"}} className="app-textfield" type="text" placeholder=' John Doe' />
									</div>
									<div className="content-col">
									<div className="app-textfield-label">VAT</div>
									<input style={{ width: "70%"}} className="app-textfield" type="text" placeholder=' John Doe' />
									</div>
									</div>

									<div className="profile-btn">Create Product</div>
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
