import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Site/IndexView';
import { setGeoLocation } from './Services/Geolocation';
import DashboardOverview from './views/Dashboard/DashboardView';

function App() {
	const options = {
		timeout: 27000,
		maximumAge: 30000,
		enableHighAccuracy: true
	};
	
	const [watchId, setWatchId] = useState(null);
	const [location, setLocation] = useState({});

	const clearWatch = function () {
		if (watchId)
			navigator.geolocation.clearWatch(watchId);
	};

	const handleError = () => {
		console.log('Unable to get user location default to manual');
		if (watchId)
			navigator.geolocation.clearWatch(watchId);
	};

	const handleSuccess = (position) => {
		const { coords: { latitude, longitude } } = position;
		const geolocation = { latitude, longitude };
		setLocation((pre) => ({ ...pre, ...geolocation }));
	};

	const getLocation = function () {
		if (!watchId && 'geolocation' in navigator) {
			setTimeout(() => {
				const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
				setWatchId(watchId);
			}, 10000);
		}
	};

	useEffect(() => {
		setGeoLocation(location);
	}, [location]);

	useEffect(() => {
		getLocation();
		return () => {
			clearWatch();
		};
	}, [watchId]);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/dashboard" component={DashboardOverview} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
