import React from 'react';
import Panel from '../components/header/Panel';
import Topbar from '../components/header/Topbar';
import Header from '../components/header/Header';
import Slider from '../components/header/Slider';
import Footer from '../components/footer/Footer';

export default class Home extends React.Component{
    render() {
        return (
            <div className="stretched side-push-panel">
                <Panel/>
                <div id="wrapper" className="clearfix" style={{ animationDuration: "1500ms", opacity: "1"}}>
                    <Topbar/>
                    <Header/>
                    <Slider/>

                    <div className="tabs advanced-real-estate-tabs clearfix">
                        <div className="container clearfix">
                            <ul className="tab-nav clearfix">
                                <li>
                                    <a href="#tab-properties" data-scrollto="#tab-properties" data-offset="133">Search Properties</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        );
    }
}