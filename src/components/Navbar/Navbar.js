import React, { useState } from 'react';
import Header from '../Site/Header';
import AuthModal from '../Site/AuthModal';
import {getAuthUser, setLogoutUser} from '../../Services/User';

export default function Navbar() {
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
			<Header user={user} handleShow={showModal} isAuth={isAuthenticated} handleAuthLogout={handleLogoutCallback} />
		</>
	);
}
