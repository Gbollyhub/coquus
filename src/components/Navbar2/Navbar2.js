import React, { useState } from 'react';

import Header2 from '../Site/Header2';
import AuthModal from '../Site/AuthModal';

export default function Navbar2() {
	const [modal, setModal] = useState({ show: false, context: '' });

	function showModal(e) {
		setModal(prev => ({ ...prev, ...e }));
	}

	return (
		<>
			<AuthModal auth={modal} handleShow={showModal} />
			<Header2 handleShow={showModal} />
		</>
	);
}
