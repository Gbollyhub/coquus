const Rightbar = () => {
    return(
       <div>
       <div className="settings-div">
        <div className="settings-icon"></div>
        <div className="settings-icon"></div>
      </div>
      <div className="div-block">
        <div className="profile-photo"></div>
        <div className="profile-header">Bolade Ajala</div>
        <div className="profile-sub">Super Admin</div>
      </div>
      <div className="admin-divider"></div>
      <div className="admin-calender-div">
				<div style={{ fontWeight:"600", marginBottom:'20px'}}>Top Requests</div>
				<div style={{marginBottom:'10px', borderRadius: '3px', background: "#FFF7E9", padding:'10px', fontSize: '10px'}}>Lorem ipsum dolor sit amet, conse uiodpdr adipiscing elit - Simi Kitchen</div>
				<div style={{marginBottom:'10px', borderRadius: '3px', background: "#FFF7E9", padding:'10px', fontSize: '10px'}}>Lorem ipsum dolor sit amet, conse uiodpdr adipiscing elit - Simi Kitchen</div>
			</div>
      <div className="admin-divider"></div>
      <div className="misc-card">
        <div className="misc-card-header">Pending Requests</div>
        <div className="misc-card-sub">1000</div>
      </div>
       </div>
    );
};

export default Rightbar;
