import React from 'react';
import Panel from '../components/header/Panel';
import Topbar from '../components/header/Topbar';
import Header from '../components/header/Header';
import Slider from '../components/header/Slider';
import Footer from '../components/footer/Footer';
import ButtonSwitch from '../components/ButtonSwitch';
import CategoryOption from '../components/CategoryOption';
import CountryList from '../components/data/CountryList';
import PropertyList from '../components/data/PropertyList';
import BedList from '../components/data/BedList';
import BathList from '../components/data/BathList';
import RangSlider from '../components/RangSlider';
import Button from '../components/Button';
import FeatureBox from '../components/FeatureBox';
import Room from '../components/Room';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                column12: "col-lg-3 col-md-6 col-12 bottommargin-sm",
                column6: "col-lg-2 col-md-6 col-6 bottommargin-sm",
                sliderStyle1: "col-lg-4 col-md-6 col-12",
                sliderStyle2: "col-lg-4 offset-lg-1 col-md-6 col-12",
            }
    }
    render() {
        return (
            <div className="stretched side-push-panel">
                <Panel />
                <div id="wrapper" className="clearfix" style={{ animationDuration: "1500ms", opacity: "1" }}>
                    <Topbar />
                    <Header />
                    <Slider />
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
                                            <ButtonSwitch name={"Type"} />
                                            <CategoryOption column={this.state.column12} name={"Choose Location"} data={<CountryList />} />
                                            <CategoryOption column={this.state.column12} name={"Property Type"} data={<PropertyList />} />
                                            <CategoryOption column={this.state.column6} name={"Beds"} data={<BedList />} />
                                            <CategoryOption column={this.state.column6} name={"Baths"} data={<BathList />} />
                                            <div className="w-100"></div>
                                            <RangSlider column={this.state.sliderStyle1} tittle={"Price Range"} slideType={"price-range-slider"} />
                                            <RangSlider column={this.state.sliderStyle2} tittle={"Propery Area"} slideType={"area-range-slider"} />
                                            <Button tittle={"Search"} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* content */}
                    <section id="content">
                        <div className="content-wrap">
                            <div className="container clearfix">
                                <FeatureBox column={"col_one_third"} 
                                    icon={"icon-realestate-my-house"}
                                    tittle={"Hassle Free"} 
                                    paragraph={"Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background."}/>
                                <FeatureBox column={"col_one_third"} 
                                    icon={"icon-realestate-hammer"}
                                    tittle={"Well Constructed"}
                                    paragraph={"Display your Content attractively using Parallax Sections that have unlimited customizable areas."}/>
                                <FeatureBox column={"col_one_third col_last"} 
                                    icon={"icon-realestate-garage"} 
                                    tittle={"Well Constructed"} 
                                    paragraph={"You have complete easy control on each &amp; every element that provides endless customization possibilities."}/>
                                <div className="clear"></div>
                                <FeatureBox column={"col_one_third"} icon={"icon-realestate-rent"} tittle={"Flexible Rentals"} paragraph={"Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background."}/>
                                <FeatureBox column={"col_one_third"} icon={"icon-realestate-credit"} tittle={"Easy Financing"} paragraph={"Display your Content attractively using Parallax Sections that have unlimited customizable areas."}/>
                                <FeatureBox column={"col_one_third col_last"}                               
                                    icon={"icon-realestate-doc"} tittle={"Solid Paperwork"}                                
                                    paragraph={"You have complete easy control on each &amp; every element that provides endless customization possibilities."}/>
                                <div className="clear"></div>
					            <div className="line topmargin-sm bottommargin-lg"></div>

                                {/* ROOM */}
                                <div style={{position: "relative"}}>
						            <div className="heading-block nobottomborder">
							            <h3>Featured Properties</h3>
						            </div>
						            <a className="button button-small button-rounded button-border button-border-thin t500 nomargin" style={{position: "absolute", top: 7, right: 0}}>Check All</a>
						            <div className="real-estate owl-carousel image-carousel carousel-widget bottommargin-lg" data-margin="10" data-nav="true" data-loop="true"
						                data-pagi="false" data-items-xs="1" data-items-sm="1" data-items-md="2" data-items-lg="3" data-items-xl="3">
                                        <Room/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* footer */}
                    <Footer />
                </div>
            </div>
        );
    }
}