import React from 'react';
import ButtonSwitch from '../components/ButtonSwitch';
import CategoryOption from '../components/CategoryOption';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/Home';
export default class index extends React.Component {
     render() {
          return (
               <BrowserRouter>
                    <div>
                         <Route path='/' component={Home} />
                    </div>
               </BrowserRouter>
          );
     }
}