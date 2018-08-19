import React from 'react';
export default class CategoryOption extends React.Component {
     constructor(props)
     {
          super(props);
          this.state = 
          {
               name: this.props.name,
               data: this.props.data,
               column: this.props.column,

          }
     }
     render() {
          return (
               <div className={this.state.column}>
                    <label for="">{this.state.name}</label>
                    <select className="selectpicker form-control" multiple data-live-search="true" data-size="6" style={{width:"100%"}}>
                         {this.state.data}
                    </select>
               </div>
          );
     }
}
