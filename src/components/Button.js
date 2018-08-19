import React, { Component } from 'react'
export default class Button extends Component {
     constructor(props) {
          super(props)
          {
               this.state =
               {
                    tittle: this.props.tittle,
               }
          }
     }
     render() {
          return (
               <div className="offset-lg-1 col-lg-2 col-md-12 clearfix">
                    <button className="button button-3d button-rounded btn-block nomargin" style={{marginTop:"35 !important"}}>{this.state.tittle}</button>
               </div>
          )
     }
}