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
