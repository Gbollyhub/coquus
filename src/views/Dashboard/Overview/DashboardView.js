import React from 'react';
import Header from '../../../components/Dashboard/Header';
import Sidebar from '../../../components/Dashboard/Sidebar';
import './DashboardView.css';
import { Link } from 'react-router-dom';
export default function DashboardView() {
	return (
		<span>
			<span className="af-view">
				<div className="af-class-body">
					<Header />
					<div className="af-class-dashboard-section">
						<div className="af-class-dashboard-col-1">
							<Sidebar />
						</div>
						<div className="af-class-dashboard-col-2">
							<div className="af-class-dasboard-col-2-header"><span className="af-class-text-span-5">Hii</span> Tobi!</div>
							<div className="af-class-dashboard-overview-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sodor.</div>
							<div className="af-class-dashboard-overview-div">
								<div className="af-class-dashboard-overview-box af-class-wallet">
									<div className="af-class-overview-box-header">Wallet</div>
									<div className="af-class-overview-header-value">20,000.<span className="af-class-text-span-4">00</span></div>
								</div>
								<div className="af-class-dashboard-overview-box af-class-orders">
									<div className="af-class-overview-box-header">Orders</div>
									<div className="af-class-overview-header-value">21<span className="af-class-text-span-4" /></div>
								</div>
								<div className="af-class-dashboard-overview-box af-class-transactions">
									<div className="af-class-overview-box-header">Transactions</div>
									<div className="af-class-overview-header-value">1000<span className="af-class-text-span-4" /></div>
								</div>
								<div className="af-class-dashboard-overview-box af-class-transaction">
									<div className="af-class-overview-box-header">Notifications</div>
									<div className="af-class-overview-header-value">400<span className="af-class-text-span-4" /></div>
								</div>
							</div>
							<div className="w-row">
								<div className="w-col w-col-6">
									<div className="af-class-overview-sub-header">Recent Transactions</div>
									<div className="af-class-overview-table-div">
									<table className="dashboard-table">
										<tr className="dashboard-table-row">
											<th className="dashboard-table-header">Trans. Title</th>
											<th className="dashboard-table-header">Price</th>
											<th className="dashboard-table-header">Status</th>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Pay-in for Product-LO-12829|Large Burger</td>
											<td className="dashboard-table-data">$200</td>
											<td className="dashboard-table-data" style={{ color: '#9be645'}}>Success</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Pay-in for Product-LO-12829|Large Burger</td>
											<td className="dashboard-table-data">$200</td>
											<td className="dashboard-table-data" style={{ color: '#eb3b3b'}}>Failed</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Pay-in for Product-LO-12829|Large Burger</td>
											<td className="dashboard-table-data">$200</td>
											<td className="dashboard-table-data" style={{ color: '#9be645'}}>Success</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Pay-in for Product-LO-12829|Large Burger</td>
											<td className="dashboard-table-data">$200</td>
											<td className="dashboard-table-data" style={{ color: '#eb3b3b'}}>Failed</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Pay-in for Product-LO-12829|Large Burger</td>
											<td className="dashboard-table-data">$200</td>
											<td className="dashboard-table-data" style={{ color: '#9be645'}}>Success</td>
										</tr>
										</table>
										<Link to= "/dashboard/transactions" ><div className = "dashboard-table-view-all">View All</div></Link>
									</div>
								</div>
								<div className="w-col w-col-6">
									<div className="af-class-overview-sub-header">Recent Orders</div>
									<div className="af-class-overview-table-div">
									<table className="dashboard-table">
										<tr className="dashboard-table-row">
											<th className="dashboard-table-header">Product Name</th>
											<th className="dashboard-table-header">Price</th>
											<th className="dashboard-table-header">Quantity</th>
											<th className="dashboard-table-header">Status</th>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Large BBQ Pizza combo max</td>
											<td className="dashboard-table-data">$30</td>
											<td className="dashboard-table-data">2</td>
											<td className="dashboard-table-data" style={{ color: '#9be645'}}>Delivered</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Large BBQ Pizza combo max</td>
											<td className="dashboard-table-data">$30</td>
											<td className="dashboard-table-data">2</td>
											<td className="dashboard-table-data" style={{ color: '#e6b629'}}>Pending</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Large BBQ Pizza combo max</td>
											<td className="dashboard-table-data">$30</td>
											<td className="dashboard-table-data">2</td>
											<td className="dashboard-table-data" style={{ color: '#eb3b3b'}}>Cancelled</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Large BBQ Pizza combo max</td>
											<td className="dashboard-table-data">$30</td>
											<td className="dashboard-table-data">2</td>
											<td className="dashboard-table-data" style={{ color: '#9be645'}}>Delivered</td>
										</tr>
										<tr className="dashboard-table-row">
											<td className="dashboard-table-data">Large BBQ Pizza combo max</td>
											<td className="dashboard-table-data">$30</td>
											<td className="dashboard-table-data">2</td>
											<td className="dashboard-table-data" style={{ color: '#e6b629'}}>Pending</td>
										</tr>
										</table>
										<Link to= "/dashboard/orders"><div className = "dashboard-table-view-all">View All</div></Link>
									</div>
								</div>
							</div>
							<div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-dashboard-slider w-slider">
								<div className="af-class-dashboard-slider-mask w-slider-mask">
									<div className="af-class-dashboard-slide w-slide">
										<div className="af-class-dashboard-slider-card" />
									</div>
									<div className="af-class-dashboard-slide w-slide">
										<div className="af-class-dashboard-slider-card" />
									</div>
									<div className="af-class-dashboard-slide w-slide">
										<div className="af-class-dashboard-slider-card" />
									</div>
									<div className="af-class-dashboard-slide w-slide">
										<div className="af-class-dashboard-slider-card" />
									</div>
									<div className="af-class-dashboard-slide w-slide" />
									<div className="af-class-dashboard-slide w-slide" />
								</div>
								<div className="w-slider-arrow-left">
									<div className="w-icon-slider-left" />
								</div>
								<div className="w-slider-arrow-right">
									<div className="w-icon-slider-right" />
								</div>
								<div className="af-class-slide-nav w-slider-nav w-slider-nav-invert w-round" />
							</div>
						</div>
					</div>
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
}
