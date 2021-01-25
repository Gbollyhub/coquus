import React, { useState, useEffect } from 'react';
import { setGeoLocation } from './services/Geolocation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Site/IndexView';
import Search from './views/Site/Search/Search';
import Vendor from './views/Site/Vendor/Vendor';
import DashboardOverview from './views/Dashboard/Overview/DashboardView';
import Orders from './views/Dashboard/Orders/Orders';
import ManageProducts from './views/Dashboard/ManageProducts/ManageProducts';
import Transactions from './views/Dashboard/Transactions/Transactions';
import Notification from './views/Dashboard/Notification/Notification';
import Profile from './views/Dashboard/Profile/Profile';
	
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
        <Route exact  path="/" component={Home} />
				<Route  path="/find-restuarants" component={ Search } />
				<Route  path="/vendor" component={Vendor} />
        <Route exact path="/dashboard" component={DashboardOverview} />
				<Route path="/dashboard/orders" component={Orders} />
				<Route path="/dashboard/manage-products" component={ManageProducts} />
				<Route path="/dashboard/transactions" component={Transactions} />
				<Route path="/dashboard/notifications" component={Notification} />
				<Route path="/dashboard/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
  );

}

export default App;
