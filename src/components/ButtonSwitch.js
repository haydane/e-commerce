import React from 'react'
export default class ButtonSwitch extends React.Component {
     constructor(props) {
          super(props);
          this.state =
          {
               name: this.props.name,
          }
     }
     render() {
          return (
               <div>
                    <div class="col-lg-2 col-md-12 bottommargin-sm">
                         <label for="" style={{ display: "block" }}>{this.state.name}</label>
                         <input class="bt-switch" type="checkbox" checked data-on-text="Buy" data-off-text="Rent" data-on-color="themecolor" data-off-color="themecolor" />
                    </div>
               </div>
          );
     }
}