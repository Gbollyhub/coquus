import React from 'react';
import Navbar2 from '../../../components/Navbar2/Navbar2';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Site/Footer';
import './Search.css';
import '../Site.css';
 const Search = () => {
  return (
		<span>
	<span className="af-view">
				<div className="af-class-app-body">
	<Navbar2/>
  <div className="app-search-box">
    <div className="app-search-div">
     <div className="search-div-col">
		 <select style={{ width: "90%"}} className="app-input-select">
									<option>Location</option>
									<option>Location1</option>
									<option>Location2</option>
									</select>
		 </div>
		 <div className="search-div-col">
		 <select style={{ width: "90%"}} className="app-input-select">
									<option>State</option>
									<option>State1</option>
									<option>State1</option>
									</select>
		 </div>
		 <div className="search-div-col">
		 <div className="app-gen-button">Search</div>
		 </div>
    </div>
		<div className="search-result-header">Search Results (1200)</div>
    <div className="search-result-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
		<br/>
	<div className="app-table-actions">
        <div className="app-table-search">
          <div>
         <input type="text" className="app-input-search" name="name" data-name="Name" placeholder="Search..." id="name"/>
          </div>
        </div>
        <div className="app-table-buttons">
		<select className="app-input-select">
  <option>Filter By</option>
  <option>Filter</option>
  <option>Filter</option>
  <option>Filter</option>
</select>
        </div>
      </div>
  </div>
  <div className="app-search-result">
    <div className="app-search-col">
    <Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
    <div className="app-search-col">
		<Link to = "/vendor">
		<div className="app-search-card">
        <div className="img-container"><img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg" loading="lazy"  alt="" className="image" /></div>
        <div className="app-card-info">
          <div className="app-search-card-header">Wendy&#x27;s Kitchen</div>
          <div className="app-search-type">African - Jamaican -British</div>
        </div>
      </div>
		</Link>
    </div>
  </div>
	<Footer />
		</div>
		</span>
		</span>
  );
};

export default Search;
