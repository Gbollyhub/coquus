import React, { useState } from 'react';
import Header2 from '../Site/Header2';
import AuthModal from '../Site/AuthModal';
import {getAuthUser, setLogoutUser} from '../../Services/User';

export default function Navbar2() {
	const [user, setUser] = useState(getAuthUser());
	const [modal, setModal] = useState({ show: false, context: '' });

	const showModal = (e) => {
		setModal(prev => ({ ...prev, ...e }));
	};

	const isAuthenticated = () => {
		return user.isAuthenticated;
	};

	const handleUserCallback = (args) => {
		setUser((pre) => ({ ...pre, ...args }));
	};

	const handleLogoutCallback = () => {
		setLogoutUser();
		setUser({ isAuthenticated: false, user_info: {} });
	};

	return (
		<>
						<AuthModal auth={modal} handleShow={showModal} handleAuth={handleUserCallback} />
			<Header2 user={user} handleShow={showModal} isAuth={isAuthenticated} handleAuthLogout={handleLogoutCallback} />
		</>
	);
}
