import React, { useState, useEffect } from 'react';
import { setGeoLocation } from './services/Geolocation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Site/IndexView';
import Search from './views/Site/Search/Search';
import Vendor from './views/Site/Vendor/Vendor';
import Checkout from './views/Site/Checkout/Checkout';
import Faq from './views/Site/Faq/Faq';
import About from './views/Site/About/About';
import SuccessPage from './views/Site/Success/success';

import DashboardOverview from './views/Dashboard/Overview/DashboardView';
import Orders from './views/Dashboard/Orders/Orders';
import ManageProducts from './views/Dashboard/ManageProducts/ManageProducts';
import CreateProduct from './views/Dashboard/CreateProduct/CreateProduct';
import EditProduct from './views/Dashboard/EditProduct/EditProduct';
import Transactions from './views/Dashboard/Transactions/Transactions';
import Notification from './views/Dashboard/Notification/Notification';
import Profile from './views/Dashboard/Profile/Profile';


import Login from './views/Admin/login/login';
import Overview from './views/Admin/overview/overview';
import Users from './views/Admin/users/users';
import Merchants from './views/Admin/merchants/merchants';
import AdminTransactions from './views/Admin/transactions/transactions';
import Requests from './views/Admin/requests/requests';
import UserManagement from './views/Admin/user-management/user';
import CreateRole from './views/Admin/user-management/Roles/createRoles';
import EditRole from './views/Admin/user-management/Roles/editRoles';


	
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
				<Route  path="/checkout" component={Checkout} />
				<Route  path="/about-us" component={About} />
				<Route  path="/faq" component={Faq} />
				<Route  path="/order-placed" component={SuccessPage} />

        <Route exact path="/dashboard" component={DashboardOverview} />
				<Route path="/dashboard/orders" component={Orders} />
				<Route path="/dashboard/manage-products" component={ManageProducts} />
				<Route path="/dashboard/create-product" component={CreateProduct} />
				<Route path="/dashboard/edit-product" component={EditProduct} />
				<Route path="/dashboard/transactions" component={Transactions} />
				<Route path="/dashboard/notifications" component={Notification} />
				<Route path="/dashboard/profile" component={Profile} />

				<Route exact path='/admin' component = { Login } />  
     <Route path='/admin/overview' component = { Overview } />  
     <Route path='/admin/users' component = { Users } />  
     <Route path='/admin/merchants' component = { Merchants } />  
     <Route path='/admin/transactions' component = { AdminTransactions } />  
     <Route path='/admin/requests' component = { Requests } /> 
     <Route path='/admin/user-management' component = { UserManagement } />   
     <Route path='/admin/create-role/:id' component = { CreateRole } />   
     <Route path='/admin/edit-role/:id' component = { EditRole } />

      </Switch>
    </div>
  </Router>
  );

}

export default App;
