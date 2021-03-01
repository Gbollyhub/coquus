import React from 'react';
// import ErrorAlert from '../../../components/Admin/ui/errorAlert/errorAlert'
import { Link } from 'react-router-dom';
export default function Login() {


        return(
					<span>
					<span className="af-view">
						<div className="af-class-app-body">
             <div className="app-login-section">
    <div className="app-login-col-1">
      <div className="app-login-bg-cover">
        <div className="app-login-logo">
			 <div style={{ color:'white', fontSize:"40px", fontWeight: "bold"}}>LOGO</div>
					</div>
      </div>
    </div>
    <div className="app-login-col-2">
      {/* <ErrorAlert closeErrorAlert = { closeErrorAlert } errorAlertText = { errorText } />  */}
      <h2 className="login-header">Welcome Back!</h2>
      <div className="login-sub">Kindly fill in your credentials to login into your account.</div>
      <div className="w-form">
        <form>
          <div className="app-login-form-group">
        <label className="login-label">Username</label>
        <input   type="text" className="app-login-text-field w-input"  name="Username" data-name="Email address" placeholder="name@domain.com" required />
        </div>
          <div className="app-login-form-group">
              <label className="login-label">Password</label>
              <input type="password" className="app-login-text-field w-input"  name="password" data-name="password" placeholder="xxxxxxxxxxxxx" required />
              </div>
        </form>

      </div>
     <Link to="/admin/overview"><div className="app-login-button">Login into Account</div></Link> 
      <div className="app-login-divider"></div>
      <div className="app-login-notice">
        <div className="app-login-notice-col-1"></div>
        <div className="app-login-notice-col-2">Experiencing any problem with loging into your account ? Kindly contact the super admin to help resolve your issues.</div>
      </div>
    </div>
  </div>
            </div>
						</span>
						</span>
        );
    }
