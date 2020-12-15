import { Link } from 'react-router-dom';
function Header(){
    return(
        <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-dashboard-nav w-nav">
             <Link to="/" className="af-class-dashboard-brand w-nav-brand">
                <div className="af-class-app-logo-text af-class-dashboard-logo">L<span className="af-class-text-span">O</span>G<span className="af-class-text-span-2">O</span></div>
              </Link>
              <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
               <div className="w-nav-link">16th, August, 2020</div>
                <div className="af-class-dashboard-profile-link" />
              </nav>
              <div className="w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
        </div>
    )
}

export default Header;