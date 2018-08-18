import React from 'react';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="clearfix" style={{ animationDuration: "1500ms", opacity: "1" }}>
                    <div id="top-bar" className="transparent-topbar">
                        <div className="container clearfix">
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
                                            <div className="top-link-section" style={{ fontSize: 14 }}>
                                                Genuine Clients, 100% Trust Assurance and Lowest Fees on the Market.
                                                <a className="more-link font-secondary"
                                                    style={{ borderBottom: "dotted" }}>Learn More &rarr;</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="side-panel-trigger">Login/Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <header id="header" className="static-sticky transparent-header dark"> {/*sticky-header*/}
                        <div id="header-wrap">
                            <div className="container clearfix">
                                <div id="primary-menu-trigger">
                                    <i className="icon-reorder"></i>
                                </div>

                                <div id="logo">
                                    <a href="index.html" data-dark-logo="demos/real-estate/images/logo.png" className="standard-logo">
                                        <img src="demos/real-estate/images/logo.png" alt="Canvas Logo" />
                                    </a>
                                    <a href="index.html" data-dark-logo="demos/real-estate/images/logo@2x.png" className="retina-logo">
                                        <img src="demos/real-estate/images/logo@2x.png" alt="Canvas Logo" />
                                    </a>
                                </div>

                                <nav id="primary-menu" className="with-arrows">
                                    <ul>
                                        <li className="current">
                                            <a >
                                                <div>Home</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="demos/real-estate/about-us.html">
                                                <div>About Us</div>
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

                    <section id="slider" className="slider-element force-full-screen full-screen dark clearfix"> {/*style={{height:500}}*/}
                        <div className="force-full-screen full-screen" style={{ height: "600px" }} >
                            <div className="fslider" data-speed="3000" data-pause="7500" data-animation="fade" data-arrows="false" data-pagi="false" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "#333", zIndex: 1 }}>
                                <div className="flexslider" style={{ height: "100px !important" }}>
                                    <div className="slider-wrap" style={{ height: "inherit" }}>
                                        <div className="slide" style={{ background: "url('https://wallpapercave.com/wp/ebBird9.jpg') center center", backgroundSize: 'cover', height: '100% !important' }}></div>
                                        <div className="slide" style={{ background: "url('demos/real-estate/images/hero/4.jpg') center center", backgroundSize: 'cover', height: '100% !important' }}></div>
                                        <div className="slide" style={{ background: "url('demos/real-estate/images/hero/5.jpg') center center ", backgroundSize: 'cover', height: '100% !important' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-middle" style={{ zIndex: 3 }}>
                                <div className="container center clearfix">
                                    <div className="emphasis-title nomargin">
                                        <h1>Your Dream Home.</h1>
                                        <span className="t300 uppercase" style={{ fontSize: 18, letterSpacing: 10, color: "rgba(255,255,255,0.9)" }}>A Few Clicks Away.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="video-wrap" style={{ position: "absolute", top: 0, left: 0, height: "100%", zIndex: 1 }}>
                                <div className="video-overlay real-estate-video-overlay" style={{ zIndex: 1 }}></div>
                            </div>
                        </div>
                    </section>
                    <div className="tabs advanced-real-estate-tabs clearfix">
                        <div className="container clearfix">
                            <ul className="tab-nav clearfix">
                                <li>
                                    <a href="#tab-properties" data-scrollto="#tab-properties" data-offset="133">Search Properties</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-container">
                            <div className="container clearfix">
                                <div className="tab-content clearfix" id="tab-properties">
                                    <form action="#" method="post" className="nobottommargin">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-12 bottommargin-sm">
                                                <label for="" style={{ display: "block" }}>Type</label>
                                                <input className="bt-switch" type="checkbox" checked data-on-text="Buy" data-off-text="Rent" data-on-color="themecolor" data-off-color="themecolor" />
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12 bottommargin-sm">
                                                <label for="">Choose Locations</label>
                                                <select className="selectpicker form-control" multiple data-live-search="true" data-size="6" style={{ width: "100%" }}>
                                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </optgroup>
                                                    <optgroup label="Pacific Time Zone">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                    </optgroup>
                                                    <optgroup label="Mountain Time Zone">
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                    </optgroup>
                                                    <optgroup label="Central Time Zone">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="WI">Wisconsin</option>
                                                    </optgroup>
                                                    <optgroup label="Eastern Time Zone">
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WV">West Virginia</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-12 bottommargin-sm">
                                                <label for="">Property Type</label>
                                                <select className="selectpicker form-control" data-size="6" style={{ width: "100%", lineHeight: 30 }}>
                                                    <option value="Any">Any</option>
                                                    <optgroup label="Residential">
                                                        <option value="Apartment">Apartment</option>
                                                        <option value="Condo">Condo</option>
                                                        <option value="Villa">Villa</option>
                                                        <option value="Building">Building</option>
                                                    </optgroup>
                                                    <optgroup label="Commercial">
                                                        <option value="Shop">Shop</option>
                                                        <option value="Office">Office</option>
                                                        <option value="Warehouse">Warehouse</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-6 bottommargin-sm">
                                                <label for="">Beds</label>
                                                <select className="selectpicker form-control" multiple data-size="6" data-placeholder="Any" style={{ width: "100%", lineHeight: 30 }}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5+">5+</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-6 bottommargin-sm">
                                                <label for="">Baths</label>
                                                <select className="selectpicker form-control" multiple data-size="6" data-placeholder="Any" style={{ width: "100%", lineHeight: 30 }}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5+">5+</option>
                                                </select>
                                            </div>
                                            <div className="w-100"></div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <label for="" style={{ marginBottom: "20 !important" }}>Price Range</label>{/*!important*/}
                                                <input className="price-range-slider" />
                                            </div>
                                            <div className="w-100 d-block d-md-none bottommargin-sm"></div>
                                            <div className="col-lg-4 offset-lg-1 col-md-6 col-12">
                                                <label for="" style={{ marginBlockEnd: "20 !important" }}>Property Area</label> {/*!important*/}
                                                <input className="area-range-slider" />
                                            </div>
                                            <div className="offset-lg-1 col-lg-2 col-md-12 clearfix">
                                                <button className="button button-3d button-rounded btn-block nomargin" style={{ marginTop: "35 !important" }}>Search</button> {/*!important*/}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <div className="col_one_third">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-my-house"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Hassle Free</h3>
                                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                                </div>
                            </div>
                            <div className="col_one_third">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-hammer"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Well Constructed</h3>
                                    <p>Display your Content attractively using Parallax Sections that have unlimited customizable areas.</p>
                                </div>
                            </div>
                            <div className="col_one_third col_last">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-garage"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Free Utilites</h3>
                                    <p>You have complete easy control on each &amp; every element that provides endless customization possibilities.</p>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="col_one_third">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-rent"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Flexible Rentals</h3>
                                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                                </div>
                            </div>
                            <div className="col_one_third">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-credit"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Easy Financing</h3>
                                    <p>Display your Content attractively using Parallax Sections that have unlimited customizable areas.</p>
                                </div>
                            </div>
                            <div className="col_one_third col_last">
                                <div className="feature-box fbox-plain">
                                    <div className="fbox-icon">
                                        <a >
                                            <i className="icon-realestate-doc"></i>
                                        </a>
                                    </div>
                                    <h3 className="t400">Solid Paperwork</h3>
                                    <p>You have complete easy control on each &amp; every element that provides endless customization possibilities.</p>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="line topmargin-sm bottommargin-lg"></div>
                            <div style={{ position: "relative" }}>
                                <div className="heading-block nobottomborder">
                                    <h3>Featured Properties</h3>
                                </div>
                                <a className="button button-small button-rounded button-border button-border-thin t500 nomargin" style={{ position: "absolute", top: 7, right: 0 }}>Check All</a>
                                <div className="real-estate owl-carousel image-carousel carousel-widget bottommargin-lg" data-margin="10" data-nav="true" data-loop="true"
                                    data-pagi="false" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="3" data-items-xl="3">
                                    <div className="oc-item">
                                        <div className="real-estate-item">
                                            <div className="real-estate-item-image">
                                                <div className="badge badge-danger bgcolor-2">For Sale</div>
                                                <a>
                                                    <img src="demos/real-estate/images/items/1.jpg" alt="" />
                                                </a>
                                                <div className="real-estate-item-price">
                                                    $1.2m
                                    <span>Leasehold</span>
                                                </div>
                                                <div className="real-estate-item-info clearfix">
                                                    <a >
                                                        <i className="icon-line-stack-2"></i>
                                                    </a>
                                                    <a >
                                                        <i className="icon-line-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="real-estate-item-desc">
                                                <h3>
                                                    <a >3 Bedroom Villa</a>
                                                </h3>
                                                <span>Seminyak Area</span>
                                                <a className="real-estate-item-link">
                                                    <i className="icon-info"></i>
                                                </a>
                                                <div className="line" style={{ marginTop: 15, marginBottom: 15 }}></div>
                                                <div className="real-estate-item-features t500 font-primary clearfix">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-4 nopadding">Beds:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Baths:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Area:
                                            <span className="color">150 sqm</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Pool:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Internet:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Cleaning:
                                            <span className="text-danger">
                                                                <i className="icon-minus-sign-alt"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="oc-item">
                                        <div className="real-estate-item">
                                            <div className="real-estate-item-image">
                                                <div className="badge badge-success">Hot Deal</div>
                                                <a >
                                                    <img src="demos/real-estate/images/items/2.jpg" alt="" />
                                                </a>
                                                <div className="real-estate-item-price">
                                                    $200,000
                                    <span>bi-annually</span>
                                                </div>
                                                <div className="real-estate-item-info clearfix">
                                                    <a >
                                                        <i className="icon-line-stack-2"></i>
                                                    </a>
                                                    <a >
                                                        <i className="icon-line-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="real-estate-item-desc">
                                                <h3>
                                                    <a >3 Bedroom Villa</a>
                                                </h3>
                                                <span>Seminyak Area</span>
                                                <a className="real-estate-item-link">
                                                    <i className="icon-info"></i>
                                                </a>
                                                <div className="line" style={{ marginTop: 15, marginBottom: 15 }}></div>
                                                <div className="real-estate-item-features t500 clearfix">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-4 nopadding">Beds:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Baths:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Area:
                                            <span className="color">150 sqm</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Pool:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Internet:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Cleaning:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="oc-item">
                                        <div className="real-estate-item">
                                            <div className="real-estate-item-image">
                                                <div className="badge badge-danger">Long Term Rental</div>
                                                <a >
                                                    <img src="demos/real-estate/images/items/4.jpg" alt="" />
                                                </a>
                                                <div className="real-estate-item-price">
                                                    $1600
                                                    <span>per month</span>
                                                </div>
                                                <div className="real-estate-item-info clearfix">
                                                    <a >
                                                        <i className="icon-line-stack-2"></i>
                                                    </a>
                                                    <a >
                                                        <i className="icon-line-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="real-estate-item-desc">
                                                <h3>
                                                    <a >3 Bedroom Villa</a>
                                                </h3>
                                                <span>Seminyak Area</span>
                                                <a className="real-estate-item-link">
                                                    <i className="icon-info"></i>
                                                </a>
                                                <div className="line" style={{ marginTop: 15, marginBottom: 15 }}></div>
                                                <div className="real-estate-item-features t500 clearfix">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-4 nopadding">Beds:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Baths:
                                            <span className="color">3</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Area:
                                            <span className="color">150 sqm</span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Pool:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Internet:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col-lg-4 nopadding">Cleaning:
                                            <span className="text-success">
                                                                <i className="icon-check-sign"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="promo promo-dark promo-flat bottommargin-lg">
                                <h3 className="t400 ls1">Special Offers on Villa Long Term Rentals &amp; Lease Agreements</h3>
                                <a className="button button-dark button-large button-rounded">Contact Now</a>
                            </div>
                            <div className="row real-estate-properties clearfix">
                                <div className="col-lg-7">
                                    <a style={{ background: "url('demos/real-estate')" }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block nomargin noborder">
                                                <h3 className="capitalize t500">California</h3>
                                                <span style={{ marginTop: 5, fontSize: 17 }}>23 Properties</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-5">
                                    <a style={{ background: "url('demos/real-estate/images/cities/2.jpg')", noRepeat: "bottom center", backgroundSize: "cover" }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block nomargin noborder">
                                                <h3 className="capitalize t500">New York</h3>
                                                <span style={{ marginTop: 5, fontSize: 17 }}>12 Properties</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a style={{ background: "url('demos/real-estate/images/cities/3.jpg')", noRepeat: "bottom center", backgroundSize: "cover" }}> {/*no-repeat bottom center; background-size: cover*/}
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block nomargin noborder">
                                                <h3 className="capitalize t500">San Francisco</h3>
                                                <span style={{ marginTop: 5, fontSize: 17 }}>8 Properties</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a style={{ background: "url('demos/real-estate/images/cities/1.jpg')", noRepeat: "bottom center", backgroundSize: "cover" }}> {/*no-repeat bottom center; background-size: cover*/}
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block nomargin noborder">
                                                <h3 className="capitalize t500">Texas</h3>
                                                <span style={{ marginTop: 5, fontSize: 17 }}>31 Properties</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a style={{ background: "url('demos/real-estate/images/cities/5.jpg')", noRepeat: "bottom center", backgroundSize: "cover" }}>  {/*no-repeat center ,center, background-size: cover*/}
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block nomargin noborder">
                                                <h3 className="capitalize t500">New Orleans</h3>
                                                <span style={{ marginTop: 5, fontSize: 17 }}>19 Properties</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="row norightmargin topmargin bottommargin-lg common-height">
                            <div id="headquarters-map" className="col-lg-5 gmap d-none d-md-block"></div>
                            <div className="col-lg-3" style={{ backgroundColor: "#E5E5E5" }}>
                                <div style={{ padding: 40 }}>
                                    <h4 className="font-body t600 ls1">Our Headquarters</h4>
                                    <div style={{ fontSize: 15, lineHeight: 1.7 }}>
                                        <address style={{ lineHeight: 1.7 }}>
                                            <strong>North America:</strong>
                                            <br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107.
                                                br/>
                                                        <br />
                                            <abbr title="Phone Number">
                                                <strong>Phone:</strong>
                                            </abbr> (91) 8547 632521
                                                        <br />
                                            <abbr title="Email Address">
                                                <strong>Email:</strong>
                                            </abbr>
                                            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ed9f888c81c0889e998c9988ad8e8c839b8c9ec38e8280">[email&#160;protected]</a> {/*email&#160;protected*/}
                                        </address>
                                        <div className="clear topmargin-sm"></div>
                                        <h4 className="font-body t500" style={{ fontSize: 17, marginBottom: 10 }}>Working Hours:</h4>
                                        <abbr title="Mondays to Fridays">
                                            <strong>Mon-Fri:</strong>
                                        </abbr> 10AM to 6PM
                                                                <br />
                                        <abbr title="Saturday">
                                            <strong>Saturday:</strong>
                                        </abbr> 11AM to 3PM
                                                                    <br />
                                        <abbr title="Sunday">
                                            <strong>Sunday:</strong>
                                        </abbr> Closed
                                                                </div>
                                </div>
                            </div>

                            <div className="col-lg-4 bgcolor">
                                <div className="col-padding">
                                    <div className="quick-contact-widget dark clearfix">
                                        <h3 className="capitalize ls1 t400">Get a Quick Quote</h3>
                                        <div className="quick-contact-form-result"></div>
                                        <form id="quick-contact-form" name="quick-contact-form" action="include/quickcontact.php" method="post" className="quick-contact-form nobottommargin">
                                            <div className="form-process"></div>
                                            <input type="text" className="required sm-form-control input-block-level not-dark" id="quick-contact-form-name" name="quick-contact-form-name"
                                                value="" placeholder="Full Name" />
                                            <input type="email" className="required sm-form-control email input-block-level not-dark" id="quick-contact-form-email" name="quick-contact-form-email"
                                                value="" placeholder="Email Address" />
                                            <input type="text" className="required sm-form-control input-block-level not-dark" id="quick-contact-form-phone" name="quick-contact-form-phone"
                                                value="" placeholder="Phone Number (+1-555-2221)" />
                                            <textarea className="required sm-form-control input-block-level not-dark short-textarea" id="quick-contact-form-message" name="quick-contact-form-message"
                                                rows="5" cols="30" placeholder="What are you Looking for? (Ex: Villa on the Beach)"></textarea>
                                            <input type="text" className="hidden" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" value="" />
                                            <button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" className="button button-small button-rounded button-light button-white nomargin"
                                                value="submit">Send Email</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container clear-bottommargin clearfix">
                            <div className="col_two_third">
                                <div className="tabs tabs-justify tabs-tb tabs-alt nobottommargin clearfix" id="realestate-tabs" data-active="2">
                                    <ul className="tab-nav clearfix">
                                        <li>
                                            <a href="#realestate-tab-1">Why Us?</a>
                                        </li>
                                        <li>
                                            <a href="#realestate-tab-2">Properties</a>
                                        </li>
                                        <li>
                                            <a href="#realestate-tab-3">Legal</a>
                                        </li>
                                    </ul>

                                    <div className="tab-container">
                                        <div className="tab-content clearfix" id="realestate-tab-1">
                                            <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit
                                                amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus.
                                                Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor
                                                vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor
                                                                                nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
                                            <div className="col_one_fourth nobottommargin center">
                                                <div className="counter ls1 t600" style={{ color: "#D2D2D2" }}>
                                                    <span data-from="100" data-to="964" data-refresh-interval="50" data-speed="2000"></span>
                                                </div>
                                                <h5>Floors Built</h5>
                                            </div>
                                            <div className="col_one_fourth nobottommargin center">
                                                <div className="counter ls1 t600" style={{ color: "#D2D2D2" }}>
                                                    <span data-from="100" data-to="8514" data-refresh-interval="50" data-speed="2500"></span>
                                                </div>
                                                <h5>Employees</h5>
                                            </div>
                                            <div className="col_one_fourth nobottommargin center">
                                                <div className="counter ls1 t600" style={{ color: "#D2D2D2" }}>
                                                    <span data-from="100" data-to="458" data-refresh-interval="50" data-speed="3500"></span>
                                                </div>
                                                <h5>Happy Clients</h5>
                                            </div>
                                            <div className="col_one_fourth nobottommargin center col_last">
                                                <div className="counter ls1 t600" style={{ color: "#D2D2D2" }}>
                                                    <span data-from="14" data-to="159" data-refresh-interval="15" data-speed="2700"></span>
                                                </div>
                                                <h5>Cities Served</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content clearfix" id="realestate-tab-2">
                                        <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan,
                                            mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. className aptent taciti sociosqu ad litora
                                            torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque.
                                                                                    Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
                                        <div className="row clearfix">
                                            <div className="col-md-4">
                                                <ul className="iconlist nobottommargin">
                                                    <li>
                                                        <i className="icon-ok"></i> 100% Assurance</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Hard Working</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Trustworthy</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="iconlist nobottommargin">
                                                    <li>
                                                        <i className="icon-ok"></i> Intelligent</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Always Curious</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Perfectionists</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="iconlist nobottommargin">
                                                    <li>
                                                        <i className="icon-ok"></i> Friendly &amp; Helpful</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Accomodating Nature</li>
                                                    <li>
                                                        <i className="icon-ok"></i> Available 24x7</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content clearfix" id="realestate-tab-3">
                                        <div className="clear-bottommargin-sm">
                                            <div className="row clearfix">
                                                <div className="col-md-7 bottommargin-sm">
                                                    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis
                                                        scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus
                                                                                                eros massa ut dolor.</p>
                                                    <div className="clear-bottommargin-sm">
                                                        <div className="row clearfix">
                                                            <div className="col-md-6 bottommargin-sm">
                                                                <address>
                                                                    <strong>Headquarters:</strong>
                                                                    <br /> 795 Folsom Ave, Suite 600
                                                                                                            <br /> San Francisco, CA 94107
                                                                                                            <br />
                                                                </address>
                                                            </div>
                                                            <div className="col-md-6 bottommargin-sm">
                                                                <abbr title="Phone Number">
                                                                    <strong>Phone:</strong>
                                                                </abbr> (91) 8547 632521
                                                                                                                        <br />
                                                                <abbr title="Fax">
                                                                    <strong>Fax:</strong>
                                                                </abbr> (91) 11 4752 1433
                                                                                                                        <br />
                                                                <abbr title="Email Address">
                                                                    <strong>Email:</strong>
                                                                </abbr>
                                                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2a43444c456a494b445c4b5904494547">[email&#160;protected]</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 bottommargin-sm">
                                                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=-37.814107,144.963280&zoom=12&markers=-37.814107,144.963280&size=300x180"
                                                        alt="Google Map" className="img-thumbnail" />


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col_one_third col_last">
                            <h4 className="center">Top Builders</h4>
                            <ul className="clients-grid grid-2 nobottommargin clearfix">
                                <li style={{ padding: 20 }}>
                                    <a style={{ opacity: 0.9 }}>
                                        <img src="demos/real-estate/images/builders/1.png" alt="Clients" />
                                    </a>
                                </li>
                                <li style={{ padding: 20 }}>
                                    <a style={{ opacity: 0.9 }}>
                                        <img src="demos/real-estate/images/builders/2.png" alt="Clients" />
                                    </a>
                                </li>
                                <li style={{ padding: 20 }}>
                                    <a style={{ opacity: 0.9 }}>
                                        <img src="demos/real-estate/images/builders/3.png" alt="Clients" />
                                    </a>
                                </li>
                                <li style={{ padding: 20 }}>
                                    <a style={{ opacity: 0.9 }}>
                                        <img src="demos/real-estate/images/builders/4.png" alt="Clients" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>

                </section>

                <footer id="footer" className="dark">
                    <div className="container">

                        <div className="footer-widgets-wrap clearfix">
                            <div className="col_two_fifth">
                                <div className="widget clearfix">
                                    <img src="demos/real-estate/images/logo@2x.png" style={{ position: "relative", opacity: 0.85, left: -10, maxHeight: 80, marginBottom: 20 }}
                                        alt="Footer Logo" />
                                    <p>We believe in
                        <strong>Simple</strong>,
                        <strong>Creative</strong> &amp;
                        <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template
                        offers.</p>
                                    <div className="line" style={{ margin: 30 }}></div>
                                    <p className="ls1 t300" style={{ opacity: 0.6, fontSize: 13 }}>Copyrights &copy; 2017 Canvas: Real Estate</p>
                                </div>
                            </div>
                            <div className="col_three_fifth col_last">
                                <div className="col_half">
                                    <h4 className="ls1 t400 uppercase">Popular Locations</h4>
                                    <div className="row">
                                        <div className="col-6 bottommargin-sm widget_links widget_real_estate_popular">
                                            <ul>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> California</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Nevada</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Hawaii</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Washington</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Ottawa</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Virginia</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Ohio</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 bottommargin-sm widget_links widget_real_estate_popular">
                                            <ul>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Oregon</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Colorado</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Kentucky</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Texas</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> Miami</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> New York</a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="icon-map-marker2"></i> New Jersey</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col_half col_last">
                                    <h4 className="ls1 t400 uppercase">Connect Socially</h4>
                                    <div className="bottommargin-sm clearfix">
                                        <a className="social-icon si-colored si-small si-rounded si-facebook" title="Facebook">
                                            <i className="icon-facebook"></i>
                                            <i className="icon-facebook"></i>
                                        </a>
                                        <a className="social-icon si-colored si-small si-rounded si-twitter" title="Twitter">
                                            <i className="icon-twitter"></i>
                                            <i className="icon-twitter"></i>
                                        </a>
                                        <a className="social-icon si-colored si-small si-rounded si-instagram" title="Instagram">
                                            <i className="icon-instagram"></i>
                                            <i className="icon-instagram"></i>
                                        </a>
                                        <a className="social-icon si-colored si-small si-rounded si-apple" title="App Store">
                                            <i className="icon-apple"></i>
                                            <i className="icon-apple"></i>
                                        </a>
                                        <a className="social-icon si-colored si-small si-rounded si-android" title="Play Store">
                                            <i className="icon-android"></i>
                                            <i className="icon-android"></i>
                                        </a>
                                        <a className="social-icon si-colored si-small si-rounded si-skype" title="Skype">
                                            <i className="icon-skype"></i>
                                            <i className="icon-skype"></i>
                                        </a>
                                    </div>
                                    <div className="widget subscribe-widget subscribe-form clearfix" data-loader="button">
                                        <div className="widget-subscribe-form-result"></div>
                                        <form action="include/subscribe.php" role="form" method="post" className="nobottommargin">
                                            <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="sm-form-control not-dark required email"
                                                placeholder="Enter your Email" />
                                            <button className="button button-3d button-black noleftmargin norightmargin" style={{ marginTop: 15 }} type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="gotoTop" class="icon-angle-up"></div>


            </div>


        );
    }
}