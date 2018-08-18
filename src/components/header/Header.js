import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
        <section id="slider" className="slider-element force-full-screen full-screen dark clearfix">
            <div className="force-full-screen full-screen">
                <div className="fslider" data-speed="3000" data-pause="7500" data-animation="fade" data-arrows="false" data-pagi="false" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #333; z-index: 1;">
                    <div className="flexslider" style="height: 100% !important;">
                        <div className="slider-wrap" style="height: inherit;">
                            <div className="slide" style="background: url('https://wallpapercave.com/wp/ebBird9.jpg') center center; background-size: cover; height: 100% !important;"></div>
                            <div className="slide" style="background: url('demos/real-estate/images/hero/4.jpg') center center; background-size: cover; height: 100% !important;"></div>
                            <div className="slide" style="background: url('demos/real-estate/images/hero/5.jpg') center center; background-size: cover; height: 100% !important;"></div>
                        </div>
                    </div>
                </div>
                <div className="vertical-middle" style="z-index: 3;">
                    <div className="container center clearfix">
                        <div className="emphasis-title nomargin">
                            <h1>Your Dream Home.</h1>
                            <span className="t300 uppercase" style="font-size: 18px; letter-spacing: 10px; color: rgba(255,255,255,0.9);">A Few Clicks Away.</span>
                        </div>
                    </div>
                </div>
                <div className="video-wrap" style="position: absolute; top: 0; left: 0; height: 100%; z-index:1;">
                    <div className="video-overlay real-estate-video-overlay" style="z-index: 1;"></div>
                </div>
            </div>
        </section>
        )
    }
}