import React, { Component } from 'react'
export default class PropertyList extends Component {
     render() {
          return (
               <div>
                    <option value="Any">Any</option>
                    <optgroup label="Residential">
                         <option value="Apartment">Apartment</option>
                         <option value="Condo">Condo</option>
                         <option value="Villa">Villa</option>
                         <option value="Building">Building</option>
                    </optgroup>
                    <optgroup label="Commercial">
                         <option value="Shop">Shop</option>
                         <option value="Office">Office</option>
                         <option value="Warehouse">Warehouse</option>
                    </optgroup>
               </div>
          )
     }
}