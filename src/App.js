import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Site/IndexView'
import DashboardOverview from './views/Dashboard/DashboardView'
function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route exact  path="/dashboard" component={DashboardOverview} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
