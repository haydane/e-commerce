import React, { Component } from 'react'

export default class FeatureBox extends Component {
     constructor(props) {
          super(props)
          {
               this.state = 
               {
                    column: this.props.column,
                    icon: this.props.icon,
                    tittle: this.props.tittle,
                    paragraph: this.props.paragraph,
               }
          }
     }
     render() {
          return (
               <div>
                    <div className={this.state.column}>
                         <div className="feature-box fbox-plain">
                              <div className="fbox-icon">
                                   <a>
                                        <i className={this.state.icon}></i>
                                   </a>
                              </div>
                              <h3 className="t400">{this.state.tittle}</h3>
                              <p>{this.state.paragraph}</p>
                         </div>
                    </div>
               </div>
          )
     }
}