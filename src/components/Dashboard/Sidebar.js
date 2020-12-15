function Sidebar(){
    return(
        <div>
                <ul role="list" className="af-class-list">
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link af-class-active-dashboard-link">Dashboard</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Orders</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Walllet</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Transactions</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Notification</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Settings</a>
                  </li>
                  <li className="af-class-dashboard-nav-list-item">
                    <a href="#" className="af-class-dashboard-nav-link">Logout</a>
                  </li>
                </ul>
        </div>
    )
}

export default Sidebar;