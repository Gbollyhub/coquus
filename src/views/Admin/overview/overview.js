
import React  from 'react'
import Leftbar from '../../../components/Admin/leftbar/leftbar'
import Rightbar from '../../../components/Admin/rightbar/rightbar'

import '../global.css'


export default function Overview( props ) {

        return(
					<span>
					<span className="af-view">
						<div className="af-class-app-body">
            <div className="app-admin-section">
            <div className="app-admin-col-1">
            <Leftbar/>
            </div>
            <div className="app-admin-col-2">
            <div className="admin-top-bar">
        <div className="admin-top-bar-left">
          <div className="settings-icon"></div>
        </div>
        <div className="admin-top-bar-right">
          <div className="admin-topbar-date">October 8th, 2020</div>
        </div>
      </div>
            <div className="content-header">Hii there! Bola</div>
              <div className="content-sub">Here are the latest report on Coquus</div>
              <div data-animation="slide" data-duration="500" data-infinite="1" className="content-slider w-slider">
                <div className="mask w-slider-mask">
                  <div className="content-slide w-slide">
                    <div className="content-slide-box">
                      <div className="content-info-card">
                        <div className="div-block-2">
                          <div className="slide-card-header">Total Revenue</div>
                          <div className="slide-card-value">N200,000</div>
                        </div>
                        <div className="slide-card-icon green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="content-slide w-slide">
                    <div className="content-slide-box">
                      <div className="content-info-card">
                        <div className="div-block-2">
                          <div className="slide-card-header">Users</div>
                          <div className="slide-card-value">100,000</div>
                        </div>
                        <div className="slide-card-icon purple"></div>
                      </div>
                    </div>
                  </div>
                  <div className="content-slide w-slide">
                    <div className="content-slide-box">
                      <div className="content-info-card">
                        <div className="div-block-2">
                          <div className="slide-card-header">Merchants</div>
                          <div className="slide-card-value">200,000</div>
                        </div>
                        <div className="slide-card-icon blue"></div>
                      </div>
                    </div>
                  </div>
                  <div className="content-slide w-slide">
                    <div className="content-slide-box">
                      <div className="content-info-card">
                        <div className="div-block-2">
                          <div className="slide-card-header">Requests</div>
                          <div className="slide-card-value">400,000</div>
                        </div>
                        <div className="slide-card-icon yellow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="content-slide w-slide">
                    <div className="content-slide-box">
                      <div className="content-info-card">
                        <div className="div-block-2">
                          <div className="slide-card-header">Total Revenue</div>
                          <div className="slide-card-value">N200,000</div>
                        </div>
                        <div className="slide-card-icon red"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-slider-left-arrow w-slider-arrow-left">
                  <div className="w-icon-slider-left"></div>
                </div>
                <div className="content-slider-right-arrow w-slider-arrow-right">
                  <div className="w-icon-slider-right"></div>
                </div>
                <div className="slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
              </div>


							<div className="basic-table-card">
          <div className="table-header">
            <div className="content-header-2">Transactions</div>
            <div className="table-view-all">View all</div>
          </div>
          
          <table className="app-table">
                                  <thead>
                                      <tr className="app-table-row">
                                      <th className="app-table-header">Ref.ID</th>
                                      <th className="app-table-header">Details</th>
                                      <th className="app-table-header">Merchant</th>
                                      <th className="app-table-header">Amount</th>
                <th className="app-table-header">Commision</th>
                <th className="app-table-header">Trans.Status</th>
                <th className="app-table-header">Date</th>
                                  </tr>
                                  </thead>

                                  <tbody>
                                      <tr className="app-table-row">
                                  <td className="app-table-data">PC-8778</td>
                                      <td className="app-table-data">Lorem ipsum</td>
                                      <td className="app-table-data">Simbi Kitchen</td>
                                      <td className="app-table-data">N20,000</td>
                <td className="app-table-data">3%</td>
                <td className="app-table-data table-active">Active</td>
                <td className="app-table-data">23/09/21</td>
                                  </tr>
                <tr className="app-table-row">
                                  <td className="app-table-data">PC-8778</td>
                                      <td className="app-table-data">Lorem ipsum</td>
                                      <td className="app-table-data">Simbi Kitchen</td>
                                      <td className="app-table-data">N20,000</td>
                <td className="app-table-data">3%</td>
                <td className="app-table-data table-active">Active</td>
                <td className="app-table-data">23/09/21</td>
                                  </tr>
              <tr className="app-table-row">
                                  <td className="app-table-data">PC-8778</td>
                                      <td className="app-table-data">Lorem ipsum</td>
                                      <td className="app-table-data">Simbi Kitchen</td>
                                      <td className="app-table-data">N20,000</td>
                <td className="app-table-data">3%</td>
                <td className="app-table-data table-active">Active</td>
                <td className="app-table-data">23/09/21</td>
                                  </tr>
              <tr className="app-table-row">
                                  <td className="app-table-data">PC-8778</td>
                                      <td className="app-table-data">Lorem ipsum</td>
                                      <td className="app-table-data">Simbi Kitchen</td>
                                      <td className="app-table-data">N20,000</td>
                <td className="app-table-data">3%</td>
                <td className="app-table-data table-active">Active</td>
                <td className="app-table-data">23/09/21</td>
                                  </tr>
                                  </tbody>
                                  
                                  
                                  </table>
        </div>

              
              <div className="basic-table-card">
                <div className="table-header">
                  <div className="content-header-2">Admin Users</div>
                  <div className="table-view-all">View all</div>
                </div>
                
                <table className="app-table">
										<thead>
											<tr className="app-table-row">
											<th className="app-table-header">Name</th>
											<th className="app-table-header">Email Address</th>
											<th className="app-table-header">Username</th>
											<th className="app-table-header">Roles</th>
                      <th className="app-table-header">Last seen</th>
                      <th className="app-table-header">Status</th>
										</tr>
										</thead>

										<tbody>
											<tr className="app-table-row">
										<td className="app-table-data">
                    <img 
                    className="table-image"
                    width= '25'
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=200&q=60" />
                    John Doe</td>
											<td className="app-table-data">johndoe@domain.com</td>
											<td className="app-table-data">johnn</td>
											<td className="app-table-data">Super Admin</td>
                      <td className="app-table-data">2 min ago</td>
                      <td className="app-table-data table-active">Active</td>
										</tr>
                    <tr className="app-table-row">
                    <td className="app-table-data">
                    <img 
                    className="table-image"
                    width= '25'
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=200&q=60" />
                    John Doe</td>
											<td className="app-table-data">johndoe@domain.com</td>
											<td className="app-table-data">johnn</td>
											<td className="app-table-data">Super Admin</td>
                      <td className="app-table-data">2 min ago</td>
                      <td className="app-table-data table-inactive">Inactive</td>
										</tr>
                    <tr className="app-table-row">
                    <td className="app-table-data">
                    <img 
                    className="table-image"
                    width= '25'
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=200&q=60" />
                    John Doe</td>
											<td className="app-table-data">johndoe@domain.com</td>
											<td className="app-table-data">johnn</td>
											<td className="app-table-data">Super Admin</td>
                      <td className="app-table-data">2 min ago</td>
                      <td className="app-table-data table-active">Active</td>
										</tr>
                    <tr className="app-table-row">
                    <td className="app-table-data">
                    <img 
                    className="table-image"
                    width= '25'
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=200&q=60" />
                    John Doe</td>
											<td className="app-table-data">johndoe@domain.com</td>
											<td className="app-table-data">johnn</td>
											<td className="app-table-data">Super Admin</td>
                      <td className="app-table-data">2 min ago</td>
                      <td className="app-table-data table-inactive">Inactive</td>
										</tr>
										</tbody>
										
										
										</table>
              </div>
            </div>
            <div className="app-admin-col-3">
              <Rightbar />
            </div>
          </div>
					</div>
						</span>
						</span>
        )
    }
