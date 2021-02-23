import React from 'react';
import Footer from '../../../components/Site/Footer';
import Navbar from '../../../components/Navbar/Navbar';

export default function About() {

	return (
		<span>
			<span className="af-view">
				<div className="af-class-app-body">
					<Navbar />
					<div className="af-class-app-banner">
						<div className="af-class-app-banner-heading">
							<div className="af-class-app-banner-header">About Us</div>
							<div className="af-class-app-banner-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
				
						</div>
						<div className="af-class-app-banner-image" />
						<div className="banner-image-animate" />
					</div>
					<div className="af-class-app-section-1">
						<div className="af-class-section-1-row w-row">
							<div className="af-class-app-section-1-col-1 w-col w-col-6">
								<div className="af-class-div-block-3" />
							</div>
							<div className="af-class-app-section-1-col-2 w-col w-col-6">
								<h1 className="af-class-app-section-header">Getting delicious meals doesn&apos;t have to be stressful</h1>
								<div className="af-class-text-block-3">With just few clicks you can get your favorite food delivered to your doorstep with the following steps</div>
								<div className="af-class-app-section-1-steps-row w-row">
									<div className="af-class-app-section-1-step-col-1 w-col w-col-2">
										<div className="af-class-app-section-1-step-icon">1</div>
									</div>
									<div className="af-class-app-section-1-step-col-2 w-col w-col-10">
										<div className="af-class-app-section-1-step-col-2-div">
											<div className="af-class-app-section-1-step-col-2-div-header">Register for an account</div>
											<div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
										</div>
									</div>
								</div>
								<div className="af-class-app-section-1-steps-row w-row">
									<div className="af-class-app-section-1-step-col-1 w-col w-col-2">
										<div className="af-class-app-section-1-step-icon">2</div>
									</div>
									<div className="af-class-app-section-1-step-col-2 w-col w-col-10">
										<div className="af-class-app-section-1-step-col-2-div">
											<div className="af-class-app-section-1-step-col-2-div-header">Choose a meal of your choice</div>
											<div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
										</div>
									</div>
								</div>
								<div className="af-class-app-section-1-steps-row w-row">
									<div className="af-class-app-section-1-step-col-1 w-col w-col-2">
										<div className="af-class-app-section-1-step-icon">3</div>
									</div>
									<div className="af-class-app-section-1-step-col-2 w-col w-col-10">
										<div className="af-class-app-section-1-step-col-2-div">
											<div className="af-class-app-section-1-step-col-2-div-header">Receive at your doorstep</div>
											<div className="af-class-app-section-1-step-col-2-div-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
										</div>
									</div>
								</div>
								<a href="#" className="af-class-app-button af-class-section-1-btn w-button">Get Started</a>
							</div>
						</div>
					</div>
					<div className="af-class-app-section-3">
						<div className="w-row">
							<div className="af-class-app-section-3-col-1 w-col w-col-6">
								<h1 className="af-class-app-section-header">Vision &amp; Mission</h1>
								<div className="af-class-text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
								<a href="#" className="af-class-app-button af-class-section-1-btn w-button">Get Started</a>
							</div>
							<div className="af-class-app-section-3-col-2 w-col w-col-6">
								<div className="af-class-app-section-3-image" />
							</div>
						</div>
					</div>
					<Footer />
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
}
