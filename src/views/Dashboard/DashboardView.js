import React from 'react';
import Header from '../../components/Dashboard/Header';
import Sidebar from '../../components/Dashboard/Sidebar';

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
									<div className="af-class-overview-table-div" />
								</div>
								<div className="w-col w-col-6">
									<div className="af-class-overview-sub-header">Recent Orders</div>
									<div className="af-class-overview-table-div" />
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
