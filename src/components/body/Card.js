import React, { Component } from 'react';

export default class Card extends Component {
     constructor(props) {
          super(props);
          this.state =
               {
                    cardTitle: this.props.cardTitle,
                    cardText: this.props.cardText,
                    photo: this.props.photo,
               }
     }
     render() {
          return (
               <div className="row clearfix">
                    <div className="col-md-4 bottommargin">
                         <div className="card">
                              <img className="card-img-top" src={this.props.photo} alt="Card image cap" />
                              <div className="card-body">
                                   <h4 className="card-title">{this.props.cardTitle}</h4>
                                   <p className="card-text mb-4">{this.props.cardText}</p>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}