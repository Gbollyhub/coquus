import { Link } from 'react-router-dom';

function Header2(prop) {
	return (
		<div>
			<div className="app-navbar-2">
    <div className="logo-section">
      <div className="app-logo2">L<span className="text-span">O</span>G<span className="text-span">O</span></div>
    </div>
    <div className="app-nav-links">
      <Link to="/" className="app-link">Home</Link>
      <Link to="/about" className="app-link">About</Link>
      <Link to="/find-restuarants" className="app-link">Restaurants</Link>
      <Link to="/" className="app-link">Support</Link>
      <Link to="/" className="app-link">Support</Link>
    </div>
  </div>
		</div>
	);
}

export default Header2;
