import React from 'react';
import Panel from '../components/header/Panel';
import Topbar from '../components/header/Topbar';
import Header from '../components/header/Header';
import Cover from '../components/header/Cover';
import Footer from '../components/footer/Footer';
import Content from '../components/body/Content';
import Card from '../components/body/Card';
export default class About extends React.Component {
    render() {
        return (
            <div className="stretched side-push-panel">
                <Panel />
                <div id="wrapper" className="clearfix" style={{ animationDuration: "1500ms", opacity: "1" }}>
                    <Topbar />
                    <Header />
                    <Cover image={"demos/real-estate/images/about-us/1.jpg"}/>
                    <section id="content">
                        <div className="content-wrap nobottommargin nobottompadding">
                            <div class="container clearfix">
                                <Content tittle={"Our Story"} paragraph={"Hello world!"} />
                                <Card photo={"demos/real-estate/images/about-us/haydane.jpg"} cardTitle={"Hay Dane"} cardText={"Hello Everyone"} />
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }
}