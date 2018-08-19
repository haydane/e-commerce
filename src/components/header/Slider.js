import React from 'react';
import './Header.css';

export default class Slider extends React.Component{
    render(){
        return(
        <section id="slider" className="slider-element force-full-screen full-screen dark clearfix" style={{ height: 725 }}>
            <div className="force-full-screen full-screen">
                <div className="fslider" data-speed="3000" data-pause="7500" data-animation="fade" data-arrows="false" data-pagi="false" style={{position: 'absolute', width: '100%', height: 725, top: 0, left: 0, backgroundColor: '#333', zIndex: 1}}>
                    <div className="flexslider">
                        <div className="slider-wrap">
                            <img src={'https://wallpapercave.com/wp/ebBird9.jpg'} className="slide Back"/>
                            <img src={'./demos/real-estate/images/hero/4.jpg'} className="slide Back" />
                            <img src={'./demos/real-estate/images/hero/5.jpg'} className="slide Back" />
                        </div>
                    </div>
                </div>
                <div className="vertical-middle" style={{position: 'absolute', width: '100%', height: 725, top: '50%', left: 0, bottom: 0, zIndex: 3}}>
                    <div className="container center clearfix">
                        <div className="emphasis-title nomargin">
                            <h1>Your Dream Home.</h1>
                            <span className="t300 uppercase" style={{fontSize: 18, letterSpacing: 10, color: 'rgba(255,255,255,0.9)'}}>A Few Clicks Away.</span>
                        </div>
                    </div>
                </div>
                <div className="video-wrap" style={{position: 'absolute', top: 0, left: 0, height: '100%', zIndex:1}}>
                    <div className="video-overlay real-estate-video-overlay" style={{zIndex: 1}}></div>
                </div>
            </div>
        </section>
        )
    }
}