import React from 'react';
import ButtonSwitch from '../components/ButtonSwitch';
import { BrowserRouter, Router } from 'react-router-dom';
export default class home extends React.Component
{
     render()
     {
          return
          (
               <BrowserRouter>
                    <Router path='/' component={ButtonSwitch}/>
               </BrowserRouter>     
          );
     }
}