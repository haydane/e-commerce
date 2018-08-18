import React, { Component } from 'react';
import SizePanel from '../screens/SizePanel';
import Wrapper from '../screens/Wrapper';
export default class Home extends Component {
     render() {
          return (
               <div>
                    <SizePanel/>
                    <Wrapper/>
               </div>
          );   
     }
}