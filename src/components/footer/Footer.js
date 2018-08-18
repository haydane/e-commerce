import React from 'react';

export default class Footer extends React.Component{
    render() {
        return (
        <footer id="footer" className="dark">
            <div className="container">

                <div className="footer-widgets-wrap clearfix">
                    <div className="col_two_fifth">
                        <div className="widget clearfix">
                            <img src="demos/real-estate/images/logo@2x.png" style={{position: 'relative', opacity: 0.85, left: -10, maxHeight: 80, marginBottom: 20}}
                            alt="Footer Logo"/>
                            <p>We believe in
                                <strong>Simple</strong>,
                                <strong>Creative</strong> &amp;
                                <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template
                                offers.</p>
                            <div className="line" style={{margin: '30px 0'}}></div>
                            <p className="ls1 t300" style={{opacity: 0.6, fontSize: 13}}>Copyrights &copy; 2017 Canvas: Real Estate</p>
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
                                <a  className="social-icon si-colored si-small si-rounded si-facebook" title="Facebook">
                                    <i className="icon-facebook"></i>
                                    <i className="icon-facebook"></i>
                                </a>
                                <a  className="social-icon si-colored si-small si-rounded si-twitter" title="Twitter">
                                    <i className="icon-twitter"></i>
                                    <i className="icon-twitter"></i>
                                </a>
                                <a  className="social-icon si-colored si-small si-rounded si-instagram" title="Instagram">
                                    <i className="icon-instagram"></i>
                                    <i className="icon-instagram"></i>
                                </a>
                                <a  className="social-icon si-colored si-small si-rounded si-apple" title="App Store">
                                    <i className="icon-apple"></i>
                                    <i className="icon-apple"></i>
                                </a>
                                <a  className="social-icon si-colored si-small si-rounded si-android" title="Play Store">
                                    <i className="icon-android"></i>
                                    <i className="icon-android"></i>
                                </a>
                                <a  className="social-icon si-colored si-small si-rounded si-skype" title="Skype">
                                    <i className="icon-skype"></i>
                                    <i className="icon-skype"></i>
                                </a>
                            </div>
                            <div className="widget subscribe-widget subscribe-form clearfix" data-loader="button">
                                <div className="widget-subscribe-form-result"></div>
                                <form action="include/subscribe.php" method="post" className="nobottommargin">
                                    <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="sm-form-control not-dark required email"
                                    placeholder="Enter your Email"/>
                                    <button className="button button-3d button-black noleftmargin norightmargin" style={{marginTop: 15}} type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}