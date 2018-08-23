import React, { Component } from 'react'
export default class Content extends Component {
     constructor(props) {
          super(props);
          this.state =
               {
                    tittle: this.props.tittle,
                    paragraph: this.props.paragraph,
               }
     }
     render() {
          return (

               <div className="heading-block noborder mw-100">
                    <h2 className="mb-4">{this.state.tittle}</h2>
                    <p className="lead">{this.state.paragraph}</p>
               </div>

          )
     }
}