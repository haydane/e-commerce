import React, { Component } from 'react'
export default class Room extends Component {

    constructor(props){
        super(props);
        this.state = {
            forSth: this.props.forSth,
            image: this.props.image,
            price: this.props.price,
            title: this.props.title,
            subtitle: this.props.subtitle,
            bedCount: this.props.bedCount,
            bathCount: this.props.bathCount,
            area: this.props.area,
            poolCheck: this.props.poolCheck,
            internetCheck: this.props.internetCheck,
            cleaningCheck: this.props.cleaningCheck,
            favorite: false
        }
    }

    handlerClick_favorite=()=>{
        if(this.state.favorite === true){
            this.setState({ favorite: false })
        }
        else{
            this.setState({ favorite: true })
        }
    }

     render() {
          return (
            <div className="oc-item">
            <div className="real-estate-item">
                <div className="real-estate-item-image">
                    <div className="badge badge-danger bgcolor-2">{this.state.forSth}</div>
                    <a >
                        <img src={this.state.image} alt="Image"/>
                    </a>
                    <div className="real-estate-item-price">
                        {this.state.price}
                        <span>Leasehold</span>
                    </div>
                    <div className="real-estate-item-info clearfix">
                        <a >
                            <i className="icon-line-stack-2"></i>
                        </a>
                        <a onClick={this.handlerClick_favorite}>
                            <i className="icon-line-heart" style={this.state.favorite === true ? {color: 'red'}:{color: '#fff'} }></i>
                        </a>
                    </div>
                </div>
                <div className="real-estate-item-desc">
                    <h3>
                        <a >{this.state.title}</a>
                    </h3>
                    <span>{this.state.subtitle}</span>
                    <a  className="real-estate-item-link">
                        <i className="icon-info"></i>
                    </a>
                    <div className="line" style={{marginTop: 15, marginBottom: 15}}></div>
                    <div className="real-estate-item-features t500 font-primary clearfix">
                        <div className="row no-gutters">
                            <div className="col-lg-4 nopadding">Beds:
                                <span className="color">{this.state.bedCount}</span>
                            </div>
                            <div className="col-lg-4 nopadding">Baths:
                                <span className="color">{this.state.bathCount}</span>
                            </div>
                            <div className="col-lg-4 nopadding">Area:
                                <span className="color">{this.state.area}</span>
                            </div>
                            <div className="col-lg-4 nopadding">Pool:
                                <span className={this.state.poolCheck === true ? "text-success" : "text-danger"}>
                                    <i className={this.state.poolCheck === true ? "icon-check-sign" : "icon-minus-sign-alt"}></i>
                                </span>
                            </div>
                            <div className="col-lg-4 nopadding">Internet:
                                <span className={this.state.internetCheck === true ? "text-success" : "text-danger"}>
                                    <i className={this.state.internetCheck === true ? "icon-check-sign" : "icon-minus-sign-alt"}></i>
                                </span>
                            </div>
                            <div className="col-lg-4 nopadding">Cleaning:
                                <span className={this.state.cleaningCheck === true ? "text-success" : "text-danger"}>
                                    <i className={this.state.cleaningCheck === true ? "icon-check-sign" : "icon-minus-sign-alt"}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )
     }
}