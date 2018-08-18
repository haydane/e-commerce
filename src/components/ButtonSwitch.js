import React from 'react'
export default class ButtonSwitch extends React.Component {
     render() 
     {
          return (
               <div>
                    <div class="col-lg-2 col-md-12 bottommargin-sm">
                         <label for="" style={{display:"block"}}>Type</label>
                         <input class="bt-switch" type="checkbox" checked data-on-text="Buy" data-off-text="Rent" data-on-color="themecolor" data-off-color="themecolor"/>
				</div>
               </div>      
               );
     }    
}