import React from 'react';
import '../ui.css';
export default function Success() {
	return(
		<div className="modal-overlay">
		<div className="modal-div success">
		<div className="modal-close"></div>
		  <div className="alert-icon"></div>
		  <div className="alert-message">Success!</div>
		</div>
	  </div>
	);
}
