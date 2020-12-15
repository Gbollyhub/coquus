import { Link } from 'react-router-dom';
function Header(){
    return(
        <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-app-navbar w-nav">
              <Link to="/" aria-current="page" className="af-class-app-brand w-nav-brand w--current">
                <div className="af-class-app-logo-text">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
              </Link>
              <nav role="navigation" className="w-nav-menu">
                <Link to="/" className="af-class-app-nav-link w-nav-link">Home</Link>
                <Link to="/about" className="af-class-app-nav-link w-nav-link">About</Link>
                <Link to="/shop" className="af-class-app-nav-link w-nav-link">Shop</Link>
                <Link to="/support" className="af-class-app-nav-link w-nav-link">Support</Link>
                <div data-w-id="3587e72d-6de9-2d23-329c-1e1f237bf827" className="af-class-app-nav-link af-class-login w-nav-link">Login</div>
                <div data-w-id="09aa3ecb-eca0-4b8b-07a2-570463d66759" to="#" className="af-class-app-nav-button w-button">Create account</div>
                <div className="af-class-app-nav-link w-nav-link app-nav-dropdown-trigger">
                  <span>Hii Tobi </span>
                <div className="app-nav-dropdown">
                <Link to="/dashboard" className="af-class-dropdown-link w-dropdown-link">Dashboard</Link>
                    <Link to="" className="af-class-dropdown-link w-dropdown-link">Profile</Link>
                    <Link to="" className="af-class-dropdown-link w-dropdown-link">Logout</Link>
                </div>
                </div>
                
              </nav>
              <div className="w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
        </div>
    )
}

export default Header;