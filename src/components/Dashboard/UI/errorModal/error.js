import React from 'react'
import '../ui.css'
export default function Success() {
	return(
		<div className="app-modal-overlay">
		<div className="app-modal-div success">
		<div className="app-modal-close"></div>
		<div className="alert-icon failed"></div>
		  <div className="alert-message">API added Successfully</div>
		</div>
	  </div>
	)
}
