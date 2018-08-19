import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{

    constructor() {
        super();
        this.state = {
            message: 'static-sticky transparent-header dark'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }   
    
    handleScroll = () => {
        
        if (window.scrollY === 0) {
            this.setState({
            message: 'static-sticky transparent-header dark'
            });
        } else {
            this.setState({
            message: 'static-sticky transparent-header dark sticky-header'
            });
        }
    }

    render(){
        return(
		<header id="header" className={this.state.message} onScroll={this.handleScroll}>
			<div id="header-wrap">
				<div className="container clearfix">
					<div id="primary-menu-trigger">
						<i className="icon-reorder"></i>
					</div>

					<div id="logo">
						<a href="index.html" data-dark-logo="demos/real-estate/images/logo.png" className="standard-logo">
							<img src="demos/real-estate/images/logo.png" alt="Canvas Logo"/>
						</a>
						<a href="index.html" data-dark-logo="demos/real-estate/images/logo@2x.png" className="retina-logo">
							<img src="demos/real-estate/images/logo@2x.png" alt="Canvas Logo"/>
						</a>
					</div>

					<nav id="primary-menu" className="with-arrows">
						<ul>
							<li className="current">
								<a >
									<Link to='/' style={{ color: '#fff' }}>Home</Link>
								</a>
							</li>
							<li>
								<a href="demos/real-estate/about-us.html">
                                    <Link to='/about' style={{ color: '#fff' }}>About us</Link>
								</a>
							</li>
							<li>
								<a href="demos/real-estate/#">
									<div>Properties</div>
								</a>
								<ul>
									<li>
										<a href="demos/real-estate/single-property.html">
											<div>Condo Apartments</div>
										</a>
									</li>
									<li>
										<a href="demos/real-estate/single-property.html">
											<div>Luxury Villas</div>
										</a>
									</li>
									<li>
										<a href="demos/real-estate/single-property.html">
											<div>Premium Estates</div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="demos/real-estate/builders.html">
									<div>Builders</div>
								</a>
							</li>
							<li>
								<a href="demos/real-estate/services.html">
									<div>Services</div>
								</a>
							</li>
							<li>
								<a href="demos/real-estate/listing.html">
									<div>Listing</div>
								</a>
							</li>
							<li>
								<a href="demos/real-estate/contact.html">
									<div>Contact</div>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
        )
    }
}