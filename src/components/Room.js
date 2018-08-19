import React, { Component } from 'react'
export default class Room extends Component {
     render() {
          return (
               <div className="oc-item">
                    <div className="real-estate-item">
                         <div className="real-estate-item-image">
                              <div className="badge badge-danger bgcolor-2">For Sale</div>
                              <a >
                                   <img src="demos/real-estate/images/items/1.jpg" alt="Image 1" />
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
                              <div className="line" style={{marginTop: 15, marginBottom: 15}}></div>
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
          )
     }
}