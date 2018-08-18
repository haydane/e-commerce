import React from 'react';

export default class Topbar extends React.Component{
    render() {
        return (
            <div id="top-bar" className="transparent-topbar">
			<div className="container clearfix" style={{color: '#fff'}}>
				<div className="col_half nobottommargin clearfix">

					<div className="top-links">
						<ul>
							<li>
								<a >All Cities</a>
								<ul>
									<li>
										<a >New York</a>
									</li>
									<li>
										<a >Los Angeles</a>
									</li>
									<li>
										<a >California</a>
									</li>
									<li>
										<a >Miami</a>
									</li>
									<li>
										<a >Las Vegas</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className="col_half fright col_last clearfix nobottommargin">

					<div className="top-links">
						<ul>
							<li className="d-md-none d-lg-block">
								<a >
									<i className="icon-call"></i> +1800-123-7890</a>
							</li>
							<li>
								<a >
									<i className="icon-download-alt"></i> Download App</a>
							</li>
							<li className="top-bar-highlight">
								<a >Sell/Rent your Property</a>
								<div className="top-link-section" style={{fontSize: 14}}>
									Genuine Clients, 100% Trust Assurance and Lowest Fees on the Market.
									<a  className="more-link font-secondary"
									 style={{borderBottomStyle: 'dotted'}}>Learn More &rarr;</a>
								</div>
							</li>
							<li>
								<a  className="side-panel-trigger">Login/Register</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        );
    }
}