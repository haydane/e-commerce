import React, { Component } from 'react'

export default class RangSlider extends Component {
     constructor(props) {
          super(props);
          this.state =
               {
                    tittle: this.props.tittle,
                    column: this.props.column,
                    slideType: this.props.slideType,
               }
     }
     render() {
          return (
               <div className={this.state.column}>
                    <label for="" style={{ marginBottom: "20 !important" }}>{this.state.tittle}</label>
                    <input className={this.state.slideType} />
               </div>
          )
     }
}