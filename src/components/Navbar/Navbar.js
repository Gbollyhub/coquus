import React, { useState } from 'react';

import Header from '../Site/Header';
import AuthModal from '../Site/AuthModal';

export default function Navbar() {
	const [modal, setModal] = useState({ show: false, context: '' });

	function showModal(e) {
		setModal(prev => ({ ...prev, ...e }));
	}

	return (
		<>
			<AuthModal auth={modal} handleShow={showModal} />
			<Header handleShow={showModal} />
		</>
	);
}
