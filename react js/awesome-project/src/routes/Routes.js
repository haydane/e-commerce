import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/screens/Home';

export default class Routes extends React.Component {
     render() {
          return (
               <BrowserRouter>
                    <div>
                         <Route path="/" component={Home} />
                    </div>
               </BrowserRouter>
          );
     }
}